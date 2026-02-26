"use client";

import { useMemo, useState } from "react";
import CanvasEditor, { EditParams, EditMeta } from "../components/CanvasEditor";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type ResultCard = {
  id: string;
  url: string;
};

type ExportLinks = {
  png: string;
  jpg: string;
};

export default function HomePage() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [results, setResults] = useState<ResultCard[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editMeta, setEditMeta] = useState<EditMeta | null>(null);
  const [exporting, setExporting] = useState(false);
  const [exportLinks, setExportLinks] = useState<ExportLinks | null>(null);
  const [error, setError] = useState<string | null>(null);

  const api = useMemo(() => {
    return (path: string) => `${API_URL}${path}`;
  }, []);

  const handleUpload = async (file: File) => {
    setError(null);
    setUploading(true);
    setResults([]);
    setSelectedId(null);
    setEditMeta(null);
    setExportLinks(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(api("/api/upload"), {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("アップロードに失敗しました");
      }

      const data = await response.json();
      setVideoId(data.video_id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "アップロードに失敗しました");
    } finally {
      setUploading(false);
    }
  };

  const handleGenerate = async () => {
    if (!videoId) {
      setError("先に動画をアップロードしてください");
      return;
    }

    setGenerating(true);
    setError(null);
    setResults([]);
    setSelectedId(null);
    setEditMeta(null);
    setExportLinks(null);

    try {
      const response = await fetch(api(`/api/generate?video_id=${videoId}`), {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("サムネ生成に失敗しました");
      }

      const data = await response.json();
      const cards = data.results.map((item: ResultCard) => ({
        ...item,
        url: api(item.url),
      }));
      setResults(cards);
    } catch (err) {
      setError(err instanceof Error ? err.message : "サムネ生成に失敗しました");
    } finally {
      setGenerating(false);
    }
  };

  const handleSelect = async (id: string) => {
    setSelectedId(id);
    setExportLinks(null);
    setError(null);

    try {
      const response = await fetch(api(`/api/result/${id}?meta=1`));
      if (!response.ok) {
        throw new Error("編集用データの取得に失敗しました");
      }
      const data = await response.json();
      const meta: EditMeta = {
        id: data.id,
        previewUrl: api(data.preview_url),
        bgUrl: api(data.bg_url),
        fgUrl: api(data.fg_url),
        defaults: data.defaults,
        template: data.template,
      };
      setEditMeta(meta);
    } catch (err) {
      setError(err instanceof Error ? err.message : "編集用データの取得に失敗しました");
    }
  };

  const handleExport = async (params: EditParams) => {
    if (!selectedId) {
      return;
    }
    setExporting(true);
    setError(null);

    try {
      const response = await fetch(api(`/api/export/${selectedId}`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("エクスポートに失敗しました");
      }

      const data = await response.json();
      setExportLinks({
        png: api(data.png_url),
        jpg: api(data.jpg_url),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "エクスポートに失敗しました");
    } finally {
      setExporting(false);
    }
  };

  return (
    <main className="min-h-screen bg-noise text-slate-100">
      <section className="relative overflow-hidden px-6 pb-16 pt-14">
        <div className="absolute inset-0 bg-gradient"></div>
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute right-0 top-36 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="badge">Internal MVP</p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                ゲーム翻訳動画から、キャラ必須のYouTubeサムネを自動生成
              </h1>
              <p className="text-base text-slate-200 sm:text-lg">
                フレーム抽出 → キャラ切り抜き → テンプレ合成 → 編集 → Export まで、最短の操作で完結。
              </p>
            </div>
            <div className="glass-card max-w-sm">
              <div className="text-sm text-slate-200">API</div>
              <div className="mt-2 text-lg font-semibold text-white">{API_URL}</div>
              <p className="mt-2 text-xs text-slate-300">
                FastAPI をローカルで起動して接続してください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
          <div className="glass-card animate-in">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">1. 動画アップロード</h2>
              {videoId && <span className="chip">Video: {videoId}</span>}
            </div>
            <p className="mt-2 text-sm text-slate-300">
              mp4 / mov をアップロードすると ID が発行されます。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <label className="button-primary">
                動画を選択
                <input
                  type="file"
                  className="hidden"
                  accept="video/mp4,video/quicktime,video/x-m4v"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      handleUpload(file);
                    }
                  }}
                  disabled={uploading}
                />
              </label>
              <button
                className="button-secondary"
                onClick={handleGenerate}
                disabled={!videoId || generating}
              >
                {generating ? "生成中…" : "5案生成"}
              </button>
            </div>
          </div>

          <div className="glass-card animate-in delay-150">
            <h2 className="text-lg font-semibold text-white">2. ステータス</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div className="flex items-center justify-between">
                <span>アップロード</span>
                <span>{uploading ? "進行中" : videoId ? "完了" : "未実行"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>サムネ生成</span>
                <span>{generating ? "進行中" : results.length ? "完了" : "未実行"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>選択中</span>
                <span>{selectedId ? selectedId : "なし"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>エクスポート</span>
                <span>{exportLinks ? "生成済み" : "未実行"}</span>
              </div>
            </div>
            {error && <p className="mt-4 text-sm text-rose-300">{error}</p>}
          </div>
        </div>

        <div className="glass-card animate-in delay-300">
          <h2 className="text-lg font-semibold text-white">3. 生成サムネ（5案）</h2>
          <p className="mt-2 text-sm text-slate-300">
            気になる案を選択すると編集キャンバスにロードされます。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <button
                key={result.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 transition hover:border-white/40 ${
                  selectedId === result.id ? "ring-2 ring-amber-300" : ""
                }`}
                onClick={() => handleSelect(result.id)}
              >
                <img src={result.url} alt="thumbnail" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 text-xs text-white">{result.id}</div>
              </button>
            ))}
            {!results.length && (
              <div className="rounded-2xl border border-dashed border-white/20 p-8 text-center text-sm text-slate-400">
                まだサムネがありません。動画アップロード後に生成してください。
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="glass-card animate-in delay-500">
            <h2 className="text-lg font-semibold text-white">4. 簡易編集</h2>
            {editMeta ? (
              <CanvasEditor meta={editMeta} onExport={handleExport} exporting={exporting} />
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-white/20 p-8 text-center text-sm text-slate-400">
                サムネを選択すると編集キャンバスが表示されます。
              </div>
            )}
          </div>

          <div className="glass-card animate-in delay-700">
            <h2 className="text-lg font-semibold text-white">5. Export</h2>
            <p className="mt-2 text-sm text-slate-300">
              1280x720 / sRGB / JPG 2MB以下 + PNG を出力。
            </p>
            {exportLinks ? (
              <div className="mt-6 space-y-4">
                <a className="button-primary w-full text-center" href={exportLinks.jpg} download>
                  JPG をダウンロード
                </a>
                <a className="button-secondary w-full text-center" href={exportLinks.png} download>
                  PNG をダウンロード
                </a>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-white/20 p-8 text-center text-sm text-slate-400">
                編集パラメータを調整後に Export を実行してください。
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
