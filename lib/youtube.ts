/**
 * YouTubeのURLから動画IDを抽出する
 * 対応形式:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 * - https://youtube.com/shorts/VIDEO_ID
 */
export function getYouTubeVideoId(url: string): string | null {
  try {
    const trimmed = url.trim();
    if (trimmed.includes("youtu.be/")) {
      const match = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
      return match ? match[1] : null;
    }
    if (trimmed.includes("youtube.com/shorts/")) {
      const match = trimmed.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
      return match ? match[1] : null;
    }
    const urlObj = new URL(trimmed);
    return urlObj.searchParams.get("v") || null;
  } catch {
    return null;
  }
}

/** 動画IDからYouTubeサムネイルURLを取得（hqdefault = 480x360） */
export function getYouTubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
