from __future__ import annotations

from typing import List, Optional

from pydantic import BaseModel, Field


class UploadResponse(BaseModel):
    video_id: str
    filename: str


class GenerateResult(BaseModel):
    id: str
    url: str


class GenerateResponse(BaseModel):
    results: List[GenerateResult]


class EditDefaults(BaseModel):
    fg_x: float
    fg_y: float
    fg_scale: float
    bg_blur: float
    bg_saturation: float
    bg_contrast: float


class ResultMeta(BaseModel):
    id: str
    preview_url: str
    bg_url: str
    fg_url: str
    defaults: EditDefaults
    template: str


class ExportParams(BaseModel):
    fg_x: float
    fg_y: float
    fg_scale: float = Field(..., ge=0.2, le=1.5)
    bg_blur: float = Field(0, ge=0, le=20)
    bg_saturation: float = Field(1.0, ge=0.5, le=2.0)
    bg_contrast: float = Field(1.0, ge=0.5, le=2.0)


class ExportResponse(BaseModel):
    export_id: str
    png_url: str
    jpg_url: str


class ErrorResponse(BaseModel):
    detail: str
