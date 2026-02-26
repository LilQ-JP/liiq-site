from __future__ import annotations

import io
import json
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Tuple

import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
from rembg import new_session, remove

from .storage import CUTOUT_DIR, FRAME_DIR, PARTS_DIR, RESULT_DIR, META_DIR, new_id

SESSION = new_session("u2net")

CANVAS_W = 1280
CANVAS_H = 720

MIN_FG_RATIO = 0.18
MAX_FG_RATIO = 0.9


@dataclass
class CutoutResult:
    frame_path: Path
    cutout_path: Path
    fg_ratio: float


@dataclass
class TemplateCandidate:
    id: str
    template: str
    preview_path: Path
    bg_path: Path
    fg_path: Path
    defaults: Dict[str, float]


def run_ffprobe_duration(video_path: Path) -> float:
    cmd = [
        "ffprobe",
        "-v",
        "error",
        "-show_entries",
        "format=duration",
        "-of",
        "default=noprint_wrappers=1:nokey=1",
        str(video_path),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    try:
        return float(result.stdout.strip())
    except ValueError:
        return 0.0


def extract_frames(video_path: Path, video_id: str, interval: float = 0.75, max_frames: int = 300) -> List[Path]:
    out_dir = FRAME_DIR / video_id
    out_dir.mkdir(parents=True, exist_ok=True)

    duration = run_ffprobe_duration(video_path)
    if duration > 0:
        interval = max(interval, duration / max_frames)

    fps = 1.0 / interval
    output_pattern = out_dir / "frame_%05d.jpg"

    cmd = [
        "ffmpeg",
        "-hide_banner",
        "-loglevel",
        "error",
        "-i",
        str(video_path),
        "-vf",
        f"fps={fps}",
        "-qscale:v",
        "2",
        str(output_pattern),
    ]
    subprocess.run(cmd, check=True)

    frames = sorted(out_dir.glob("frame_*.jpg"))
    if len(frames) > max_frames:
        step = len(frames) / max_frames
        frames = [frames[int(i * step)] for i in range(max_frames)]

    return frames


def _edge_density(gray: np.ndarray) -> float:
    edges = cv2.Canny(gray, 80, 160)
    return float(edges.mean() / 255.0)


def score_frame(frame_path: Path) -> float:
    image = cv2.imread(str(frame_path))
    if image is None:
        return 0.0

    h, w = image.shape[:2]
    target_w = 320
    scale = target_w / float(w)
    resized = cv2.resize(image, (target_w, int(h * scale)))
    gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)

    gh, gw = gray.shape
    cx1, cx2 = int(gw * 0.2), int(gw * 0.8)
    cy1, cy2 = int(gh * 0.2), int(gh * 0.8)
    center = gray[cy1:cy2, cx1:cx2]

    center_edges = _edge_density(center)
    lap_var = cv2.Laplacian(center, cv2.CV_64F).var()
    blur_score = min(lap_var / 300.0, 1.0)

    brightness = float(gray.mean())
    brightness_score = 1.0 - min(abs(brightness - 128.0) / 128.0, 1.0)

    border_top = gray[: int(gh * 0.12), :]
    border_bottom = gray[int(gh * 0.85) :, :]
    border_left = gray[:, : int(gw * 0.1)]
    border_right = gray[:, int(gw * 0.9) :]
    border = np.concatenate([
        border_top.flatten(),
        border_bottom.flatten(),
        border_left.flatten(),
        border_right.flatten(),
    ])
    border_edges = _edge_density(border.reshape(-1, 1))
    ui_penalty = max(border_edges - center_edges, 0.0)

    score = (center_edges * 0.45) + (blur_score * 0.25) + (brightness_score * 0.2) - (ui_penalty * 0.35)
    return max(score, 0.0)


def rank_frames(frames: List[Path]) -> List[Path]:
    scored = [(frame, score_frame(frame)) for frame in frames]
    scored.sort(key=lambda item: item[1], reverse=True)
    return [frame for frame, _ in scored]


def _load_image(path: Path) -> Image.Image:
    return Image.open(path).convert("RGB")


def _cover_resize(image: Image.Image, size: Tuple[int, int]) -> Image.Image:
    target_w, target_h = size
    src_w, src_h = image.size
    scale = max(target_w / src_w, target_h / src_h)
    resized = image.resize((int(src_w * scale), int(src_h * scale)), Image.LANCZOS)
    left = (resized.width - target_w) // 2
    top = (resized.height - target_h) // 2
    return resized.crop((left, top, left + target_w, top + target_h))


def _apply_bg_adjustments(image: Image.Image, blur: float, saturation: float, contrast: float) -> Image.Image:
    if blur > 0:
        image = image.filter(ImageFilter.GaussianBlur(radius=blur))
    image = ImageEnhance.Color(image).enhance(saturation)
    image = ImageEnhance.Contrast(image).enhance(contrast)
    return image


def _cutout_from_frame(frame_path: Path, out_path: Path) -> Image.Image:
    with open(frame_path, "rb") as handle:
        input_bytes = handle.read()
    output = remove(input_bytes, session=SESSION)
    if isinstance(output, bytes):
        out_path.write_bytes(output)
        return Image.open(io.BytesIO(output)).convert("RGBA")

    output.save(out_path)
    return output.convert("RGBA")


def _crop_to_alpha(image: Image.Image, pad: int = 10) -> Image.Image:
    alpha = np.array(image.split()[-1])
    ys, xs = np.where(alpha > 10)
    if len(xs) == 0 or len(ys) == 0:
        return image

    x1, x2 = xs.min(), xs.max()
    y1, y2 = ys.min(), ys.max()
    x1 = max(x1 - pad, 0)
    y1 = max(y1 - pad, 0)
    x2 = min(x2 + pad, image.width)
    y2 = min(y2 + pad, image.height)
    return image.crop((x1, y1, x2, y2))


def _alpha_ratio(image: Image.Image) -> float:
    alpha = np.array(image.split()[-1])
    return float((alpha > 10).mean())


def passes_quality_gate(fg_ratio: float) -> bool:
    return MIN_FG_RATIO <= fg_ratio <= MAX_FG_RATIO


def cutout_character(frame_path: Path) -> CutoutResult | None:
    cutout_id = new_id("cutout")
    out_path = CUTOUT_DIR / f"{cutout_id}.png"
    out_path.parent.mkdir(parents=True, exist_ok=True)

    image = _cutout_from_frame(frame_path, out_path)
    image = _crop_to_alpha(image)
    image.save(out_path)

    ratio = _alpha_ratio(image)
    if not passes_quality_gate(ratio):
        return None

    return CutoutResult(frame_path=frame_path, cutout_path=out_path, fg_ratio=ratio)


def pick_cutout_frame(frames: List[Path], max_primary: int = 10, max_attempts: int = 30) -> CutoutResult:
    attempts = 0
    primary = frames[:max_primary]
    secondary = frames[max_primary:]

    for frame in primary:
        result = cutout_character(frame)
        attempts += 1
        if result:
            return result
        if attempts >= max_attempts:
            break

    for frame in secondary:
        result = cutout_character(frame)
        attempts += 1
        if result:
            return result
        if attempts >= max_attempts:
            break

    # Relaxed fallback across all frames
    for frame in frames:
        cutout_id = new_id("cutout")
        out_path = CUTOUT_DIR / f"{cutout_id}.png"
        image = _cutout_from_frame(frame, out_path)
        image = _crop_to_alpha(image)
        image.save(out_path)
        ratio = _alpha_ratio(image)
        if ratio > 0.1:
            return CutoutResult(frame_path=frame, cutout_path=out_path, fg_ratio=ratio)

    raise RuntimeError("Failed to extract a character cutout from frames.")


def _add_outline_and_shadow(fg: Image.Image) -> Image.Image:
    fg = fg.convert("RGBA")
    alpha = fg.split()[-1]

    outline = alpha.filter(ImageFilter.MaxFilter(9))
    outline_img = Image.new("RGBA", fg.size, (255, 255, 255, 0))
    outline_img.putalpha(outline)

    shadow = alpha.filter(ImageFilter.GaussianBlur(10))
    shadow_img = Image.new("RGBA", fg.size, (0, 0, 0, 120))
    shadow_img.putalpha(shadow)

    base = Image.new("RGBA", fg.size, (0, 0, 0, 0))
    base = Image.alpha_composite(base, shadow_img)
    base = Image.alpha_composite(base, outline_img)
    base = Image.alpha_composite(base, fg)
    return base


def _composite(bg: Image.Image, fg: Image.Image, fg_x: float, fg_y: float, fg_scale: float) -> Image.Image:
    bg = bg.convert("RGBA")
    fg = fg.convert("RGBA")

    target_h = CANVAS_H * fg_scale
    scale = target_h / fg.height
    fg_resized = fg.resize((int(fg.width * scale), int(fg.height * scale)), Image.LANCZOS)

    x = int(fg_x - fg_resized.width / 2)
    y = int(fg_y - fg_resized.height / 2)

    composed = bg.copy()
    composed.alpha_composite(fg_resized, (x, y))
    return composed


def build_backgrounds(frame_main: Path, alt_frames: List[Path]) -> List[Tuple[str, Image.Image, Dict[str, float]]]:
    base = _cover_resize(_load_image(frame_main), (CANVAS_W, CANVAS_H))

    backgrounds: List[Tuple[str, Image.Image, Dict[str, float]]] = []

    bg_a = _apply_bg_adjustments(base.copy(), blur=6, saturation=1.2, contrast=1.12)
    backgrounds.append(("A", bg_a, {"bg_blur": 0.0, "bg_saturation": 1.0, "bg_contrast": 1.0}))

    if alt_frames:
        alt = _cover_resize(_load_image(alt_frames[0]), (CANVAS_W, CANVAS_H))
    else:
        alt = base.copy()

    bg_b = _apply_bg_adjustments(alt.copy(), blur=3, saturation=1.35, contrast=1.2)
    backgrounds.append(("B", bg_b, {"bg_blur": 0.0, "bg_saturation": 1.0, "bg_contrast": 1.0}))

    if len(alt_frames) > 1:
        left = _cover_resize(_load_image(alt_frames[0]), (CANVAS_W // 2, CANVAS_H))
        right = _cover_resize(_load_image(alt_frames[1]), (CANVAS_W // 2, CANVAS_H))
    else:
        left = _cover_resize(_load_image(frame_main), (CANVAS_W // 2, CANVAS_H))
        right = _cover_resize(_load_image(alt_frames[0] if alt_frames else frame_main), (CANVAS_W // 2, CANVAS_H))

    split_bg = Image.new("RGB", (CANVAS_W, CANVAS_H), (10, 10, 10))
    split_bg.paste(left, (0, 0))
    split_bg.paste(right, (CANVAS_W // 2, 0))
    split_bg = _apply_bg_adjustments(split_bg, blur=2, saturation=1.15, contrast=1.1)
    backgrounds.append(("C", split_bg, {"bg_blur": 0.0, "bg_saturation": 1.0, "bg_contrast": 1.0}))

    return backgrounds


def generate_candidates(frame_main: Path, cutout_path: Path, ranked_frames: List[Path]) -> List[TemplateCandidate]:
    alt_frames = [frame for frame in ranked_frames if frame != frame_main][:3]
    backgrounds = build_backgrounds(frame_main, alt_frames)

    fg = Image.open(cutout_path).convert("RGBA")
    fg = _add_outline_and_shadow(fg)

    candidates: List[TemplateCandidate] = []

    scales = [0.68, 0.72, 0.75, 0.65, 0.7]
    for idx in range(5):
        template, bg, defaults = backgrounds[idx % len(backgrounds)]
        fg_scale = scales[idx % len(scales)]
        fg_x = CANVAS_W * 0.52 if template == "C" else CANVAS_W * 0.5
        fg_y = CANVAS_H * 0.6

        bg_path = PARTS_DIR / f"{new_id('bg')}.png"
        fg_path = PARTS_DIR / f"{new_id('fg')}.png"
        bg.save(bg_path)
        fg.save(fg_path)

        preview = _composite(bg.convert("RGBA"), fg, fg_x, fg_y, fg_scale).convert("RGB")
        preview_id = new_id("thumb")
        preview_path = RESULT_DIR / f"{preview_id}.png"
        preview.save(preview_path, format="PNG")

        defaults_payload = {
            "fg_x": fg_x,
            "fg_y": fg_y,
            "fg_scale": fg_scale,
            **defaults,
        }

        meta = {
            "kind": "candidate",
            "template": template,
            "preview_path": str(preview_path),
            "bg_path": str(bg_path),
            "fg_path": str(fg_path),
            "defaults": defaults_payload,
        }
        meta_path = META_DIR / f"{preview_id}.json"
        meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2))

        candidates.append(
            TemplateCandidate(
                id=preview_id,
                template=template,
                preview_path=preview_path,
                bg_path=bg_path,
                fg_path=fg_path,
                defaults=defaults_payload,
            )
        )

    return candidates


def render_export(candidate_id: str, params: Dict[str, float]) -> Tuple[Image.Image, Dict[str, str]]:
    meta_path = META_DIR / f"{candidate_id}.json"
    if not meta_path.exists():
        raise FileNotFoundError("Candidate metadata not found")

    meta = json.loads(meta_path.read_text())
    bg = Image.open(meta["bg_path"]).convert("RGB")
    fg = Image.open(meta["fg_path"]).convert("RGBA")

    blur = float(params.get("bg_blur", 0.0))
    saturation = float(params.get("bg_saturation", 1.0))
    contrast = float(params.get("bg_contrast", 1.0))

    bg = _apply_bg_adjustments(bg, blur=blur, saturation=saturation, contrast=contrast)

    composed = _composite(bg.convert("RGBA"), fg, params["fg_x"], params["fg_y"], params["fg_scale"]).convert(
        "RGB"
    )

    return composed, meta


def compress_jpeg(image: Image.Image, max_bytes: int = 2 * 1024 * 1024) -> bytes:
    quality = 92
    buffer = io.BytesIO()

    while quality >= 60:
        buffer.seek(0)
        buffer.truncate(0)
        image.save(buffer, format="JPEG", quality=quality, optimize=True)
        if buffer.tell() <= max_bytes:
            return buffer.getvalue()
        quality -= 4

    return buffer.getvalue()
