# 画像・UIデザイン編集マニュアル

このドキュメントでは、Webサイトの「画像」や「デザイン（レイアウトや固定のテキスト）」を変更したい場合、どのファイルを編集すればよいかをまとめています。

テキストやニュース・実績の更新については `CONTENT_MANUAL.md` をご覧ください。

---

## 1. 全体構造（どこに何があるか）

ソースコードは主に機能やセクションごとに分かれています。

- **`app/`**: ページごとの設定（各ページの本体）。
  - `app/page.tsx`: トップページ
  - `app/about/page.tsx`: 会社概要ページ
  - `app/development/page.tsx`: アプリ開発ページ
  - `app/video-editing/page.tsx`: 動画編集ページ など
- **`components/sections/`**: トップページや各ページで使われている「パーツ（セクション）」。
- **`components/layout/`**: ナビゲーションバー（メニュー）やフッター。
- **`public/`**: 画像ファイルなどの静的素材。

---

## 2. サイト内の画像一覧と変更方法

画像ファイルは基本的に `public/images/` フォルダ（または `public/` 直下）に配置されており、各コード内で `src="/images/ファイル名.png"` のように指定されています。

画像を差し替える場合は、以下のファイルを修正するか、元のファイル名と同じ名前で新しい画像を `public/` フォルダに上書きしてください。

### ロゴ画像
- **場所**: ヘッダー・フッター
- **設定ファイル**: `lib/constants.ts`
- **使用画像**: `public/lilq-logo.png`, `public/lilq-logo-dark.png`

### ヒーローセクション（トップページ一番上）の画像
- **ファイル**: `components/sections/PremiumHeroSection.tsx`
- **使用画像**: `public/images/hero-section-object.png` (※今回追加した透過画像)

### TCGオンライン対戦ツール（アプリ開発）の画像
- **ファイル（一覧側）**: `app/development/page.tsx`
- **使用画像**: `public/images/tcg_app_cover_1775733830123.png` または `public/images/Gemini_Generated_Image_v6y6gv6y6gv6y6gv.png`
- **ファイル（詳細側）**: `app/products/tcg/page.tsx`
  - *※「アプリのスクリーンショットをここに配置予定」というテキストがある場所です。*

### メンバー・チーム紹介の画像
- **ファイル**: `app/team/page.tsx`
- **使用画像**: `/images/team/` 以下に配置される予定

---

## 3. 各セクションの対応ファイル一覧

「ここのデザインを変えたい」「固定のテキストを変えたい」という場合は、以下の対応表を参考に `components/sections/` 内のファイルを編集してください。

| セクション名 | 該当するファイル (`components/sections/`) | 主な内容 |
|-------------|---------------------------------------|----------|
| **全体ナビゲーション** | `../layout/Navbar.tsx` | 上部メニュー、ロゴ表示 |
| **全体フッター** | `../layout/Footer.tsx` | 下部リンク、コピーライト |
| **ヒーロー(トップ)** | `PremiumHeroSection.tsx` | メインビジュアル、キャッチコピー |
| **実績バナー(ロゴ)** | `LogoBanner.tsx` | 「対応ジャンルと実績」の流れるロゴ群 |
| **お悩み解決** | `PainSection.tsx` | 「動画編集に時間がとれない」等の課題提示 |
| **サービスと料金**| `ServicesSection.tsx` | プラン（ショート、切り抜き、カスタム）と価格 |
| **強み/理由** | `AboutSection.tsx` | 「選ばれる3つの理由」など |
| **制作実績** | `WorksGrid.tsx` / `ProductGallerySection.tsx` | 過去の動画実績の一覧表示 |
| **代表プロフィール**| `ProfileSection.tsx` | 代表のメッセージと写真アイコン |
| **よくある質問** | `FAQSection.tsx` | Q&Aの一覧（開閉式アコーディオン） |
| **利用の流れ** | `FlowSection.tsx` | Step1〜3のアイコン付きフロー |
| **CTAバナー** | `CTABanner.tsx` | 「Xで相談する」等のクリックを促す帯 |
| **ニュース** | `NewsSection.tsx` | 最新のお知らせ一覧 |

---

## 4. 色やサイズの書き換え方（Tailwind CSS）

このサイトのファイル（`.tsx`）では、`className="..."` の中に直接デザイン（色やサイズ）を記述しています。
よく使う数値を編集する際の参考にしてください。

### 文字の大きさ
- `text-xs`: とても小さい (12px)
- `text-sm`: 小さい (14px)
- `text-base`: 標準 (16px)
- `text-lg`: 少し大きい (18px)
- `text-xl`: 大きい (20px)
- `text-2xl`, `text-3xl`, `text-4xl`... : さらに大きい見出し用
- `text-[##px]`: より細かく指定したい場合（例: `text-[15px]`）

### 文字の太さ
- `font-normal`: 標準
- `font-medium`: 少し太め
- `font-bold`: 太字
- `font-extrabold`: より太い
- `font-black`: 最も太い

### 余白・隙間
- `gap-2`, `gap-4`: 要素の間の隙間を調整します（数字が大きくなると広がる）
- `mt-4`, `mb-8`: 上(`mt`)や下(`mb`)の余白を調整します

---

💡 **何かを変えたいけど場所がわからない時の探し方**  
VS Codeなどのエディタを使っている場合、画面に表示されている**「文章そのまま」をプロジェクト全体で検索**すると、一発で該当ファイルが見つかります！
