export type NewsItem = {
  date: string;
  title: string;
  body?: string;
  href?: string;
};

/**
 * ニュースデータ
 *
 * 【追加方法】この配列の先頭にオブジェクトを追加（新しいものが上に表示）
 *
 * 形式（コピペ用）:
 * {
 *   date: "2026-02-20",
 *   title: "タイトル",
 *   body: "本文（任意）",
 *   href: "https://..."  // 外部リンク（任意）
 * },
 */
export const news: NewsItem[] = [
  {
    date: "2026-02-19",
    title: "LilQ ウェブサイトをリニューアルしました",
    body: "動画編集・切り抜きサービスのウェブサイトを新しく作り直しました。お気軽にご依頼ください。",
  },
  // 追加例:
  // {
  //   date: "2026-02-20",
  //   title: "新サービス開始のお知らせ",
  //   body: "詳細はこちらをご確認ください。",
  //   href: "https://example.com",
  // },
];
