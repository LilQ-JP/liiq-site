/** GitHub Pages 用のベースパス（local dev では空） */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** サイトのフルURL（Formspreeリダイレクト用。例: https://lilq-jp.github.io） */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

/** Google Apps Script の Web アプリURL（フォーム送信用） */
export const gasUrl = process.env.NEXT_PUBLIC_GAS_URL;

/** ロゴ画像の正しいパス（basePath を含む） */
export const logoPath = `${basePath}/lilq-logo.png`;

/** ヒーローセクションのキャラクター画像 */
export const heroImagePath = `${basePath}/hero-characters.png`;
