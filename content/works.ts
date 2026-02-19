/**
 * 制作実績データ
 * 新しい実績を追加する場合は、この配列にオブジェクトを追加するだけです。
 *
 * 形式:
 * {
 *   title: string;      // 動画タイトル
 *   channel: string;    // チャンネル名
 *   url: string;        // YouTubeのURL（watch?v=、youtu.be/、shorts/ いずれも対応）
 *   tags: string[];     // タグ（例: ["Shorts"], ["切り抜き", "長尺"]）
 * }
 *
 * サムネイルはURLから自動取得されます。
 */
export const works = [
  {
    title: "【伊達鍵は眠らない】冒頭でもう笑いとツッコミが止まらない【AIソムニウムファイル】",
    channel: "ココマルハピー",
    url: "https://www.youtube.com/shorts/gMeXmGt84ho",
    tags: ["Shorts"],
  },
  {
    title: "【#limbuscompany 】9章で気付く指の良さ【ネタバレ無し】",
    channel: "ココマルハピー",
    url: "https://www.youtube.com/shorts/iT6OrySspBk",
    tags: ["Shorts"],
  },
  {
    title: "【学マスガシャ】Atmosphere 葛城リーリヤ 担当が回した結果",
    channel: "とみたけかれる / Tomitake karel",
    url: "https://www.youtube.com/shorts/a1tT9K_7d1U",
    tags: ["Shorts"],
  },
];
