"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

export type EditDefaults = {
  fg_x: number;
  fg_y: number;
  fg_scale: number;
  bg_blur: number;
  bg_saturation: number;
  bg_contrast: number;
};

export type EditMeta = {
  id: string;
  previewUrl: string;
  bgUrl: string;
  fgUrl: string;
  defaults: EditDefaults;
  template: string;
};

export type EditParams = EditDefaults;

type EditorProps = {
  meta: EditMeta;
  onExport: (params: EditParams) => void;
  exporting: boolean;
};

const CANVAS_W = 1280;
const CANVAS_H = 720;

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export default function CanvasEditor({ meta, onExport, exporting }: EditorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const [fgImage, setFgImage] = useState<HTMLImageElement | null>(null);
  const [params, setParams] = useState<EditParams>(meta.defaults);
  const dragOffset = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setParams(meta.defaults);
  }, [meta]);

  useEffect(() => {
    const bg = new Image();
    bg.crossOrigin = "anonymous";
    bg.src = meta.bgUrl;
    bg.onload = () => setBgImage(bg);

    const fg = new Image();
    fg.crossOrigin = "anonymous";
    fg.src = meta.fgUrl;
    fg.onload = () => setFgImage(fg);
  }, [meta.bgUrl, meta.fgUrl]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !bgImage || !fgImage) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.filter = `blur(${params.bg_blur}px) saturate(${params.bg_saturation}) contrast(${params.bg_contrast})`;
    ctx.drawImage(bgImage, 0, 0, CANVAS_W, CANVAS_H);

    const fgW = fgImage.width * params.fg_scale;
    const fgH = fgImage.height * params.fg_scale;
    const left = params.fg_x - fgW / 2;
    const top = params.fg_y - fgH / 2;

    ctx.filter = "none";
    ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 12;
    ctx.drawImage(fgImage, left, top, fgW, fgH);
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
  }, [bgImage, fgImage, params]);

  const getPointerPosition = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
  };

  const handlePointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!fgImage) return;
    const { x, y } = getPointerPosition(event);
    const fgW = fgImage.width * params.fg_scale;
    const fgH = fgImage.height * params.fg_scale;
    const left = params.fg_x - fgW / 2;
    const top = params.fg_y - fgH / 2;

    if (x >= left && x <= left + fgW && y >= top && y <= top + fgH) {
      dragOffset.current = { x: x - params.fg_x, y: y - params.fg_y };
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!dragOffset.current) return;
    const { x, y } = getPointerPosition(event);

    setParams((prev) => ({
      ...prev,
      fg_x: clamp(x - dragOffset.current!.x, 0, CANVAS_W),
      fg_y: clamp(y - dragOffset.current!.y, 0, CANVAS_H),
    }));
  };

  const handlePointerUp = (event: PointerEvent<HTMLCanvasElement>) => {
    if (dragOffset.current) {
      dragOffset.current = null;
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-6">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="h-auto w-full cursor-grab touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="control">
          <span>キャラのスケール</span>
          <input
            type="range"
            min={0.4}
            max={1}
            step={0.01}
            value={params.fg_scale}
            onChange={(event) =>
              setParams((prev) => ({
                ...prev,
                fg_scale: Number(event.target.value),
              }))
            }
          />
        </label>

        <label className="control">
          <span>背景ぼかし</span>
          <input
            type="range"
            min={0}
            max={12}
            step={0.5}
            value={params.bg_blur}
            onChange={(event) =>
              setParams((prev) => ({
                ...prev,
                bg_blur: Number(event.target.value),
              }))
            }
          />
        </label>

        <label className="control">
          <span>彩度</span>
          <input
            type="range"
            min={0.7}
            max={1.6}
            step={0.02}
            value={params.bg_saturation}
            onChange={(event) =>
              setParams((prev) => ({
                ...prev,
                bg_saturation: Number(event.target.value),
              }))
            }
          />
        </label>

        <label className="control">
          <span>コントラスト</span>
          <input
            type="range"
            min={0.7}
            max={1.6}
            step={0.02}
            value={params.bg_contrast}
            onChange={(event) =>
              setParams((prev) => ({
                ...prev,
                bg_contrast: Number(event.target.value),
              }))
            }
          />
        </label>
      </div>

      <button className="button-primary" onClick={() => onExport(params)} disabled={exporting}>
        {exporting ? "書き出し中…" : "Export (PNG + JPG)"}
      </button>
    </div>
  );
}
