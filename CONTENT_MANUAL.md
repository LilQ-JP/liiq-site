# コンテンツ更新マニュアル

制作実績とニュースの追加・更新方法をまとめています。

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
