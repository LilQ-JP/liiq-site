# GitHub Pages デプロイ トラブルシューティング

## 確認チェックリスト

### 1. Settings → Pages の設定
- **Source** が **「GitHub Actions」** になっているか確認
- 「Deploy from a branch」のままでは動きません

### 2. Actions タブでワークフローを確認
- https://github.com/LilQ-JP/liiq-site/actions を開く
- 「Deploy to GitHub Pages」ワークフローが実行されているか
- 緑のチェック（成功）になっているか
- 失敗している場合、赤い×をクリックしてエラー内容を確認

### 3. 正しい URL でアクセス
- ✅ **https://lilq.jp**（独自ドメイン）
- ✅ https://lilq-jp.github.io/liiq-site/（サブパス運用時）
- ⚠️ https://github.com/LilQ-JP/liiq-site はリポジトリページ
- ⚠️ 初回デプロイ後、反映に 1〜2 分かかる場合あり

### 4. github-pages 環境の初回承認
初めて GitHub Actions で Pages を使う場合、環境の承認が必要になることがあります：
- Settings → Environments → github-pages
- 「Required reviewers」の承認待ちになっていないか確認

### 5. 独自ドメイン（lilq.jp など）利用時：basePath を空に
- `NEXT_PUBLIC_BASE_PATH` は **追加しない**（または値は空）
- `NEXT_PUBLIC_SITE_URL` に `https://lilq.jp` を設定
- これで CSS・画像・JS が正しく読み込まれます

### 6. ブラウザのキャッシュ
- シークレットモードで開くか、ハードリロード（Cmd+Shift+R）を試す
