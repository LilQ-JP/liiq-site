/** GitHub Pages 用のベースパス（local dev では空） */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** ロゴ画像の正しいパス（basePath を含む） */
export const logoPath = `${basePath}/lilq-logo.png`;

/** ヒーローセクションのキャラクター画像 */
export const heroImagePath = `${basePath}/hero-characters.png`;
