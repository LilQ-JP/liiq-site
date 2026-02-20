# コンテンツ更新マニュアル

サイト全体のテキスト、制作実績、ニュースの更新方法をまとめています。

---

## サイトのテキストを編集する（全ページ共通）

### 編集するファイル

`content/site.json`

### できること

- ヘッダー・ヒーロー・各セクションの見出しや本文
- ボタン文言、ラベル、フォームの説明文
- フッターの会社情報
- 各ページ（ニュース/実績/Thanks/特商法/プライバシー）の文章
- SEO（タイトル/説明文/OG/Twitter）と構造化データ

### 編集のコツ

- 文字だけ変えたい場合は **値の部分だけ** 変更してください。
- 配列（`[...]`）は **並び順が表示順** です。
- `{{year}}` は自動で西暦に置き換わります（例: `© {{year}} ...`）。
- 改行を入れたい文章は、同じ項目の配列に分けてあります（例: `titleLines` や `descriptionLines`）。

### よく編集する場所

- ヒーロー: `hero`
- サービス/料金: `services`
- 制作実績: `works`
- FAQ: `faq`
- 申込み/お問い合わせ: `apply` / `contact`
- フッター: `footer`
- 特商法/プライバシー: `pages.legal` / `pages.privacy`

### 連絡先を変更する時

- X のIDやメールアドレスは `site.twitterHandle` / `site.email` を変更すると、全体に反映されます。

---

## 制作実績の追加

### 編集するファイル

`content/works.ts`

### 手順

1. ファイルを開く
2. 配列の末尾（`// ▼ 新しい実績を追加する場合はここにペースト ▼` の下）にオブジェクトを追加
3. 保存

### 追加する形式（コピペ用）

```ts
{
  title: "動画タイトル",
  channel: "チャンネル名",
  url: "https://www.youtube.com/shorts/動画ID",
  tags: ["Shorts"],
},
```

### 各項目の説明

| 項目 | 必須 | 説明 |
|------|------|------|
| `title` | ✅ | 動画のタイトル |
| `channel` | ✅ | チャンネル名 |
| `url` | ✅ | YouTubeのURL（下記対応形式） |
| `tags` | ✅ | タグの配列（例: `["Shorts"]`） |

### 対応するURL形式

- `https://www.youtube.com/shorts/xxxxx`
- `https://www.youtube.com/watch?v=xxxxx`
- `https://youtu.be/xxxxx`

サムネイル画像と再生ボタンはURLから自動取得されます。

### 例

```ts
{
  title: "【ゲーム名】面白シーンを切り抜きました",
  channel: "配信者チャンネル名",
  url: "https://www.youtube.com/shorts/AbCdEfGhIjK",
  tags: ["Shorts"],
},
```

---

## ニュースの追加

### 編集するファイル

`content/news.ts`

### 手順

1. ファイルを開く
2. 配列の**先頭**にオブジェクトを追加（新しいものが上に表示されます）
3. 保存

### 追加する形式（コピペ用）

```ts
{
  date: "2026-02-20",
  title: "お知らせのタイトル",
  body: "本文（任意）",
  href: "https://example.com",
},
```

### 各項目の説明

| 項目 | 必須 | 説明 |
|------|------|------|
| `date` | ✅ | 日付（形式: `YYYY-MM-DD`） |
| `title` | ✅ | タイトル |
| `body` | - | 本文（省略可） |
| `href` | - | 外部リンクURL（ある場合、クリックで別タブで開く） |

### 例

```ts
{
  date: "2026-02-20",
  title: "新サービス開始のお知らせ",
  body: "〇〇サービスを開始しました。詳細はお問い合わせください。",
},
```

外部リンクがある場合：

```ts
{
  date: "2026-02-20",
  title: "ブログを更新しました",
  body: "制作の裏側を紹介しています。",
  href: "https://example.com/blog/123",
},
```

---

## デプロイ

変更を反映するには、以下のコマンドでGitにpushします。

```bash
git add -A
git commit -m "制作実績・ニュースを更新"
git push origin main
```

push後、GitHub Actions が自動でビルド・デプロイを行います。数分でサイトに反映されます。
