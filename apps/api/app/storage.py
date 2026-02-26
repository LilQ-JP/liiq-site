from __future__ import annotations

import uuid
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[1]
STORAGE_DIR = BASE_DIR / "storage"
UPLOAD_DIR = STORAGE_DIR / "uploads"
FRAME_DIR = STORAGE_DIR / "frames"
CUTOUT_DIR = STORAGE_DIR / "cutouts"
RESULT_DIR = STORAGE_DIR / "results"
EXPORT_DIR = STORAGE_DIR / "exports"
META_DIR = STORAGE_DIR / "meta"
PARTS_DIR = STORAGE_DIR / "parts"


def init_storage() -> None:
    for path in [
        STORAGE_DIR,
        UPLOAD_DIR,
        FRAME_DIR,
        CUTOUT_DIR,
        RESULT_DIR,
        EXPORT_DIR,
        META_DIR,
        PARTS_DIR,
    ]:
        path.mkdir(parents=True, exist_ok=True)


def new_id(prefix: str) -> str:
    return f"{prefix}_{uuid.uuid4().hex[:12]}"
