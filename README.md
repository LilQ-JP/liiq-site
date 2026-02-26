# YouTubeサムネ生成MVP（社内用）

ソシャゲ翻訳動画（実況者なし・ゲーム画面のみ）から、**キャラ切り抜き必須**のYouTubeサムネを自動生成するWebアプリです。

- フロント: Next.js (App Router) + Tailwind + Canvas編集
- バックエンド: FastAPI
- 動画処理: ffmpeg
- 切り抜き: rembg
- 合成: Pillow + OpenCV

## 構成

- `/apps/web` : Next.js フロントエンド
- `/apps/api` : FastAPI APIサーバー
- `/scripts` : 開発補助スクリプト

## セットアップ（macOS）

### 1. 依存関係

```bash
brew install ffmpeg
```

Node.js 18+ / Python 3.10+ を利用してください。

### 2. APIサーバー

```bash
cd /Users/haru/Desktop/lilq-website/apps/api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

> 初回の rembg 実行時にモデルがダウンロードされます。時間がかかる場合があります。

ffmpeg が見つからない場合は以下を確認してください。

```bash
/Users/haru/Desktop/lilq-website/scripts/check_ffmpeg.sh
```

### 3. フロントエンド

```bash
cd /Users/haru/Desktop/lilq-website/apps/web
npm install
npm run dev
```

`NEXT_PUBLIC_API_URL` を変更したい場合は、`/Users/haru/Desktop/lilq-website/apps/web/.env.local` に以下を追加してください。

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. 起動確認

- Web: http://localhost:3000
- API: http://localhost:8000/api/health

## 使い方

1. 動画(mp4/mov)をアップロード
2. 5案生成 → 一覧から1案選択
3. Canvasでキャラ位置・スケール・背景調整
4. Export で PNG + JPG をダウンロード

## 出力仕様

- 1280x720 / sRGB
- PNG（編集用）
- JPG（2MB以下になるよう自動圧縮）

## API（最低限）

- `POST /api/upload` → 動画アップロード
- `POST /api/generate?video_id=...` → 5案生成
- `GET /api/result/{id}` → 生成画像取得
- `GET /api/result/{id}?meta=1` → 編集用メタ取得
- `POST /api/export/{id}` → 編集パラメータでPNG/JPG生成

## テスト（簡易）

```bash
cd /Users/haru/Desktop/lilq-website/apps/api
pytest
```

対象: フレームスコアリング、品質ゲート、JPG圧縮

## 保存先

生成結果は `/Users/haru/Desktop/lilq-website/apps/api/storage` 配下に保存されます。

