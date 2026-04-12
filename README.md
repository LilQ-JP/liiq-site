# LilQ 公式サイト (lilq-website)

このリポジトリは、LilQの公式サイト（ポートフォリオ・コーポレートサイト）のソースコードです。

## 概要

Next.js (App Router) を使用して構築された、高速でモダンなウェブ制作・動画編集エージェンシー「LilQ」の公式サイトです。制作実績やニュース、お問い合わせフォームなどの機能を備えています。

## 技術スタック

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/), [Phosphor Icons](https://phosphoricons.com/)
- **Infrastructure**: GitHub Pages / GitHub Actions

## ディレクトリ構成

- `app/`: Next.js App Router のページとレイアウト
- `components/`: 再利用可能なUIコンポーネント
- `content/`: サイトのテキスト、制作実績、ニュースを管理するJSON/TSファイル
- `lib/`: 共通のユーティリティ関数
- `public/`: 画像、フォントなどの静的アセット
- `scripts/`: ビルド・開発補助スクリプト
- `apps/`: サブアプリケーション（開発ツールなど）

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、必要な環境変数を設定します。

```env
# Google Apps Script (GAS) のお問い合わせ送信用URL
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/xxxxxxxxxxxxx/exec
```

詳細な設定手順は [HOW_TO_SETUP_GAS.md](./HOW_TO_SETUP_GAS.md) を参照してください。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## コンテンツの更新方法

サイトのテキスト、実績、ニュースなどの更新は `content/` 配下のファイルを編集することで行えます。
具体的な手順については [CONTENT_MANUAL.md](./CONTENT_MANUAL.md) を確認してください。

## デプロイ

GitHub Actions を利用して、GitHub Pages に自動デプロイされるよう設定されています。`main` ブランチにプッシュすると自動ビルドとデプロイが行われます。

---
© 2026 LilQ
