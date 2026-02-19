import { ArrowRightCircle, Gamepad2, CircleDollarSign, type LucideIcon } from "lucide-react";

export type HeroCardSegment = {
  text: string;
  style?: "normal" | "highlight" | "price" | "linebreak";
};

export type HeroCard = {
  label: string;
  icon: LucideIcon;
  segments: HeroCardSegment[];
};

/**
 * ヒーローセクションのインフォカード（柔軟に編集可能）
 *
 * 編集のポイント:
 * - カードの追加・削除: 配列にオブジェクトを追加/削除
 * - 価格の変更: segments 内の text（例: "¥500〜"）を書き換え
 * - ラベル・本文: label と segments を変更
 *
 * segments の style:
 * - 指定なし: 通常表示
 * - "highlight": 強調表示
 * - "price": 価格（大きめフォント）
 */
export const heroCards: HeroCard[] = [
  {
    label: "依頼の流れ",
    icon: ArrowRightCircle,
    segments: [
      { text: "フォーム入力", style: "linebreak" },
      { text: "→ 24h納品", style: "highlight" },
    ],
  },
  {
    label: "対応ジャンル",
    icon: Gamepad2,
    segments: [
      { text: "VTuber", style: "linebreak" },
      { text: "ゲーム実況 / 雑談" },
    ],
  },
  {
    label: "料金",
    icon: CircleDollarSign,
    segments: [
      { text: "ショート " },
      { text: "¥500〜", style: "price" },
    ],
  },
];
