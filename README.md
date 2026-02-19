This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## フォーム（お申し込み・お問い合わせ）

- **お申し込みフォーム**: トップページの「お申し込み」セクション（`/#apply`）
- **お問い合わせフォーム**: トップページの「お問い合わせ」セクション（`/#contact`）

### 送信先・保存先

フォームは [Formspree](https://formspree.io) に送信され、以下の2つの方法で受け取れます。

1. **メール通知** - 登録したメールアドレスに送信内容が届く  
2. **Formspree ダッシュボード** - [formspree.io](https://formspree.io) の管理画面で送信履歴を確認

### セットアップ（メールで受け取る手順）

1. **[Formspree](https://formspree.io)** でアカウント作成・ログイン

2. **フォームを2つ作成**
   - 「+ New Form」から作成
   - **1つ目（お申し込み用）**：任意の名前（例: LilQ お申し込み）
   - **2つ目（お問い合わせ用）**：任意の名前（例: LilQ お問い合わせ）

3. **各フォームで受け取るメールアドレスを設定**
   - フォームを開く → 「Emails」または「Notifications」
   - 送信先のメールアドレス（例: contact@lilq-official.com）を登録  
   - ※ ここで登録したアドレスに送信内容が届きます

4. **フォームIDを取得**
   - 各フォームのURLが `https://formspree.io/f/xxxxx` の形式
   - `xxxxx` の部分がフォームID

5. **`.env.local` を作成**（ルートに配置）
   ```bash
   cp .env.example .env.local
   ```
   中身を編集：
   ```bash
   NEXT_PUBLIC_FORMSPREE_APPLY_ID=お申し込みフォームのID
   NEXT_PUBLIC_FORMSPREE_CONTACT_ID=お問い合わせフォームのID
   NEXT_PUBLIC_SITE_URL=https://lilq-jp.github.io/liiq-site
   ```

6. **GitHub Pages デプロイ時に環境変数を設定**
   - リポジトリ → Settings → Secrets and variables → Actions
   - `NEXT_PUBLIC_FORMSPREE_APPLY_ID`、`NEXT_PUBLIC_FORMSPREE_CONTACT_ID`、`NEXT_PUBLIC_SITE_URL` を追加

以上で、フォーム送信時に登録メールに届きます。

---

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
