import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "特定商取引法に基づく表記 | LilQ",
  description: "LilQにおける特定商取引法に基づく表記です。",
};

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        {/* Header */}
        <section className="bg-[#FAFAFA] pt-20 pb-10 sm:pt-24 sm:pb-16 border-b border-zinc-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-xs sm:text-sm font-bold text-zinc-400 hover:text-zinc-800 transition-colors mb-4 sm:mb-6">
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
              トップへ戻る
            </Link>
            <h1 className="text-xl sm:text-3xl font-black text-zinc-900">特定商取引法に基づく表記</h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden divide-y divide-zinc-100">
              {[
                { term: "事業者名", desc: "LilQ（リルク）" },
                { term: "代表責任者", desc: "宮宅 晴規" },
                { term: "所在地", desc: "〒252-0304 神奈川県相模原市南区旭町３番９号リブリ・コーポ・樹１０３" },
                { term: "電話番号", desc: "080-9838-5540" },
                { term: "メールアドレス", desc: "contact@lilq-official.com" },
                { term: "お問い合わせ", desc: "原則、当社公式Xアカウント（@LilQ_officialJP）または上記メールアドレスよりお問い合わせください。" },
                { term: "販売価格", desc: "各サービスページのご案内、またはお見積り時に明示した金額となります。" },
                { term: "お支払方法", desc: "クレジットカード決済、銀行振込、PayPal等" },
                { term: "お支払時期", desc: "【単発制作のご依頼】\n後払い制となります。納品完了後にお支払いをお願いします。\n\n【月額サブスクリプション】\n登録時にお支払いが発生し、以降1ヶ月ごとに自動更新となります。" },
                { term: "サービス提供時期", desc: "【動画制作】\nお申し込み確認後、取り決めた納期までに納品いたします（最短24時間〜）。\n\n【アプリ・デジタルコンテンツ】\nお支払い完了後、即座に、またはアカウント設定完了後にご利用いただけます。" },
                { term: "キャンセル・返品について", desc: "【動画制作サービス】\n制作着手後のキャンセルや返品は原則としてお受けしておりません。万が一、制作着手後にキャンセルをご希望される場合は、進行状況にかかわらず、お見積り金額の100%をキャンセル料としてご請求させていただきます。\nただし、制作着手前のご連絡に限り、無償でキャンセルが可能です。\n\n【サブスクリプション（月額課金）】\n解約はいつでもマイページ等から可能です。解約手続き後は次回の請求が停止されます。\n\n【不備・修正】\n当方の過失による明白な不備がある場合は、無償で修正対応を行います。" },
              ].map((row, i) => (
                <div key={i} className="flex flex-col sm:flex-row p-4 sm:p-6">
                  <div className="sm:w-1/3 shrink-0">
                    <h3 className="text-xs sm:text-sm font-bold text-zinc-500 mb-1 sm:mb-0">{row.term}</h3>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-xs sm:text-sm text-zinc-900 whitespace-pre-line leading-relaxed">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-400 mt-8 text-right">
              2026年2月 制定
            </p>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
