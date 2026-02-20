import { ArrowRightCircle, Gamepad2, CircleDollarSign, type LucideIcon } from "lucide-react";
import site from "@/content/site.json";

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
 * - 価格の変更: segments 内の text（例: "¥500"）を書き換え
 * - ラベル・本文: label と segments を変更
 *
 * segments の style:
 * - 指定なし: 通常表示
 * - "highlight": 強調表示
 * - "price": 価格（大きめフォント）
 */
const iconMap: Record<string, LucideIcon> = {
  ArrowRightCircle,
  Gamepad2,
  CircleDollarSign,
};

export const heroCards: HeroCard[] = site.hero.cards.map((card) => ({
  label: card.label,
  icon: iconMap[card.icon] ?? ArrowRightCircle,
  segments: card.segments,
}));
