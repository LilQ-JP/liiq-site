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

---

## フォーム送信でメールが届かない場合

### 1. GitHub Secrets の設定
- リポジトリ → **Settings** → **Secrets and variables** → **Actions**
- 以下が登録されているか確認：
  - `NEXT_PUBLIC_FORMSPREE_APPLY_ID`（お申し込みフォームのID）
  - `NEXT_PUBLIC_FORMSPREE_CONTACT_ID`（お問い合わせフォームのID）
- **未設定の場合**：フォーム送信時に「フォームが設定されていません」と表示されます
- 設定後は **再デプロイ** が必要です（main へ push し直すか、Actions から再実行）

### 2. Formspree のフォーム作成
1. [formspree.io](https://formspree.io) でアカウント作成・ログイン
2. **「+ New Form」** でフォームを2つ作成（お申し込み用・お問い合わせ用）
3. 各フォームの URL が `https://formspree.io/f/xxxxx` のとき、`xxxxx` がフォームID
4. このIDを GitHub Secrets に登録

### 3. Formspree でメール通知を有効化
- 各フォームを開く → **Settings**（または **Emails / Notifications**）
- **Email notifications** で送信先メールアドレスを登録
- ここで登録したアドレスに届きます

### 4. 迷惑メールフォルダを確認
- Formspree からのメールが迷惑メールに振り分けられている場合あり
- 差出人やドメインを「許可」に追加してみる

### 5. Formspree ダッシュボードで送信履歴を確認
- [formspree.io](https://formspree.io) → 各フォーム → **Submissions**
- 送信が記録されていれば、Formspree は届いている（メール通知の設定を見直す）
- 送信が記録されていなければ、GitHub Secrets が未設定の可能性大
