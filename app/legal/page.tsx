import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | LilQ",
};

const items = [
  { label: "屋号", value: "LilQ（リルク）" },
  { label: "代表者名", value: "宮宅 晴規（ミヤケ ハルキ）" },
  { label: "所在地", value: "〒252-0304 神奈川県相模原市南区旭町3番9号リブリコーポ樹103" },
  { label: "電話番号", value: "080-9838-5540（メール・X・フォーム対応のみ）" },
  { label: "メールアドレス", value: "contact@lilq-official.com" },
  { label: "販売URL", value: "https://lilq.jp" },
  { label: "事業形態", value: "個人事業主（３人体制）" },
  { label: "販売価格", value: "ショート動画制作 500円 / 切り抜き動画制作 3,000円 / カスタム動画制作 要相談（各サービスページに記載。モニター価格のため通常価格よりお得です）" },
  { label: "代金の支払方法", value: "銀行振込・クレジットカード・PayPal" },
  { label: "代金の支払時期", value: "後払い制（納品物をご確認いただいた後にお支払いをお願いします。モニター価格のため、納品・ご確認後にお見積もりをご提示し、ご請求いたします）" },
  { label: "商品・サービスの提供時期", value: "ご依頼内容確認後、最短24時間-3営業日以内に納品（プランによる）。納品後にご確認いただき、ご満足いただけましたらお支払いをお願いします。" },
  { label: "返品・キャンセルについて", value: "制作開始前のキャンセルは費用のご請求はいたしません。納品物にご満足いただけない場合はお支払い不要とし、修正対応または返金にて対応いたします。" },
  { label: "動作環境", value: "MP4形式でのデータ納品。YouTube・TikTok・X等のSNSへの投稿に対応。" },
  { label: "表示価格", value: "表示価格は全て税込価格です。" },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          トップに戻る
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">
          特定商取引法に基づく表記
        </h1>
        <p className="text-sm text-muted-foreground mb-10">最終更新日：2026年2月20日</p>

        <div className="card-surface overflow-hidden">
          <table className="w-full">
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 bg-muted text-sm text-foreground w-1/3 align-top font-medium">
                    {item.label}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground leading-relaxed">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground mt-8 text-center">
          ご不明な点は contact@lilq-official.com までお問い合わせください。
        </p>
      </div>
    </main>
  );
}
