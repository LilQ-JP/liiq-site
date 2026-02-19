export type NewsItem = {
  date: string;
  title: string;
  body?: string;
  href?: string;
};

/**
 * 会社ニュースデータ
 * 新しいニュースを追加する場合は、この配列の先頭にオブジェクトを追加してください。
 * （新しいものが上に表示されます）
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
