/** GitHub Pages 用のベースパス（local dev では空） */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** サイトのフルURL（Formspreeリダイレクト用。例: https://lilq-jp.github.io） */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

/** Formspree フォームID（未設定の場合はクライアント側でリダイレクトのみ） */
export const formspreeApplyId = process.env.NEXT_PUBLIC_FORMSPREE_APPLY_ID;
export const formspreeContactId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;

/** ロゴ画像の正しいパス（basePath を含む） */
export const logoPath = `${basePath}/lilq-logo.png`;

/** ヒーローセクションのキャラクター画像 */
export const heroImagePath = `${basePath}/hero-characters.png`;
