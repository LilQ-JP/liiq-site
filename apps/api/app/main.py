from __future__ import annotations

import json
import shutil
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, File, HTTPException, Query, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse

from .models import (
    EditDefaults,
    ExportParams,
    ExportResponse,
    GenerateResponse,
    GenerateResult,
    ResultMeta,
    UploadResponse,
)
from .pipeline import (
    compress_jpeg,
    extract_frames,
    generate_candidates,
    pick_cutout_frame,
    rank_frames,
    render_export,
)
from .storage import (
    EXPORT_DIR,
    META_DIR,
    UPLOAD_DIR,
    init_storage,
    new_id,
)

app = FastAPI(title="YouTube Thumbnail MVP API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def _startup() -> None:
    init_storage()


@app.get("/api/health")
def health() -> dict:
    return {"status": "ok"}


def _find_video(video_id: str) -> Path:
    candidates = list(UPLOAD_DIR.glob(f"{video_id}.*"))
    if not candidates:
        raise HTTPException(status_code=404, detail="Video not found")
    return candidates[0]


@app.post("/api/upload", response_model=UploadResponse)
async def upload_video(file: UploadFile = File(...)) -> UploadResponse:
    if not file.filename:
        raise HTTPException(status_code=400, detail="No filename provided")

    ext = Path(file.filename).suffix.lower() or ".mp4"
    if ext not in {".mp4", ".mov", ".m4v"}:
        raise HTTPException(status_code=400, detail="Unsupported file type")

    video_id = new_id("video")
    out_path = UPLOAD_DIR / f"{video_id}{ext}"

    with out_path.open("wb") as handle:
        shutil.copyfileobj(file.file, handle)

    return UploadResponse(video_id=video_id, filename=file.filename)


@app.post("/api/generate", response_model=GenerateResponse)
async def generate(video_id: str = Query(...)) -> GenerateResponse:
    video_path = _find_video(video_id)

    frames = extract_frames(video_path, video_id)
    if not frames:
        raise HTTPException(status_code=400, detail="No frames extracted")

    ranked = rank_frames(frames)
    cutout = pick_cutout_frame(ranked)

    candidates = generate_candidates(cutout.frame_path, cutout.cutout_path, ranked)
    results = [GenerateResult(id=item.id, url=f"/api/result/{item.id}") for item in candidates]

    return GenerateResponse(results=results)


@app.get("/api/result/{result_id}")
async def get_result(
    result_id: str,
    meta: bool = Query(False),
    asset: Optional[str] = Query(None),
    format: Optional[str] = Query(None),
):
    meta_path = META_DIR / f"{result_id}.json"
    if not meta_path.exists():
        raise HTTPException(status_code=404, detail="Result not found")

    meta_payload = json.loads(meta_path.read_text())

    if meta:
        if meta_payload.get("kind") != "candidate":
            raise HTTPException(status_code=400, detail="Metadata only available for candidates")

        defaults = EditDefaults(**meta_payload["defaults"])
        payload = ResultMeta(
            id=result_id,
            preview_url=f"/api/result/{result_id}",
            bg_url=f"/api/result/{result_id}?asset=bg",
            fg_url=f"/api/result/{result_id}?asset=fg",
            defaults=defaults,
            template=meta_payload.get("template", "A"),
        )
        return JSONResponse(payload.model_dump())

    if meta_payload.get("kind") == "export":
        fmt = (format or "png").lower()
        path_key = "png_path" if fmt == "png" else "jpg_path"
        file_path = meta_payload.get(path_key)
        if not file_path:
            raise HTTPException(status_code=404, detail="Export file not found")
        return FileResponse(file_path)

    if asset == "bg":
        return FileResponse(meta_payload["bg_path"])
    if asset == "fg":
        return FileResponse(meta_payload["fg_path"])

    return FileResponse(meta_payload["preview_path"])


@app.post("/api/export/{candidate_id}", response_model=ExportResponse)
async def export_candidate(candidate_id: str, params: ExportParams) -> ExportResponse:
    image, _ = render_export(candidate_id, params.model_dump())

    export_id = new_id("export")
    png_path = EXPORT_DIR / f"{export_id}.png"
    jpg_path = EXPORT_DIR / f"{export_id}.jpg"

    image.save(png_path, format="PNG")
    jpg_bytes = compress_jpeg(image)
    jpg_path.write_bytes(jpg_bytes)

    meta = {
        "kind": "export",
        "png_path": str(png_path),
        "jpg_path": str(jpg_path),
        "source_id": candidate_id,
    }
    meta_path = META_DIR / f"{export_id}.json"
    meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2))

    return ExportResponse(
        export_id=export_id,
        png_url=f"/api/result/{export_id}?format=png",
        jpg_url=f"/api/result/{export_id}?format=jpg",
    )
