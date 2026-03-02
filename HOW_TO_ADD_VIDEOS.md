# ヒーローセクションの動画の差し替え方法

トップページ（ヒーローセクション）で自動スライドしている「制作実績」動画は、ご自身で簡単に差し替えることができます。
YouTubeの動画（Shorts）にも、直接パソコンにあるMP4動画にも対応しています。

---

## 1. 動画ファイルの準備（MP4の場合）

MP4形式の動画ファイルをご自身のパソコンから直接表示させたい場合、まずはその動画ファイルをプロジェクト内に配置する必要があります。

1. `lilq-website` フォルダの中にある **`public`** というフォルダを開きます。
2. その `public` フォルダの中に、追加したいMP4ファイル（例: `sample.mp4`）をコピーして入れます。
   - ※ `public/videos/` のような専用フォルダを作って整理しても構いません。

---

## 2. コードの書き換え

次に、表示させる動画のリストを編集します。

1. **`components/sections/HeroSection.tsx`** をエディタで開きます。
2. **18行目付近** にある `works` というリストを見つけます。

```tsx
  const works: WorkItem[] = [
    { type: "youtube", id: "gMeXmGt84ho", channel: "ココマルハピー" },
    { type: "youtube", id: "iT6OrySspBk", channel: "とみたけかれる" },
    { type: "youtube", id: "a1tT9K_7d1U", channel: "松野アマネ" },
    { type: "youtube", id: "GZibrcuxyMY", channel: "LilQ" }
  ];
```

### 【MP4動画を追加・変更する場合】
`public` フォルダに入れた動画を指定します。**`url` の最初は必ず `/`（スラッシュ）から始めてください（`public`という文字は書きません）。**

```tsx
  const works: WorkItem[] = [
    // public/sample.mp4 に置いた場合
    { type: "mp4", url: "/sample.mp4", channel: "自分のチャンネル名" },
    
    // public/videos/game.mp4 に置いた場合
    { type: "mp4", url: "/videos/game.mp4", channel: "ゲーム実況" },
    
    // ... 他の動画 ...
  ];
```

### 【YouTube（Shorts）動画を追加・変更する場合】
YouTubeのURLが `https://www.youtube.com/shorts/gMeXmGt84ho` や `https://www.youtube.com/watch?v=gMeXmGt84ho` の場合、ID部分は **`gMeXmGt84ho`** になります。

```tsx
  const works: WorkItem[] = [
    { type: "youtube", id: "gMeXmGt84ho", channel: "チャンネル名" },
  ];
```

---

## 3. 確認する

`HeroSection.tsx` を保存し、ローカルサーバーが動いているブラウザ画面を確認してください。
（必要であればブラウザをリロードしてください）。新しい動画がスライドに表示されていれば完了です！
