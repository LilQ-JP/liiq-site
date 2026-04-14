"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Info, Twitter, ChevronRight } from "lucide-react";
import site from "@/content/site.json";

export default function ServicesSection() {
  return (
    <section id="pricing" className="relative bg-white py-16 sm:py-24 lg:py-36 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 bg-zinc-100 text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-full mb-4 sm:mb-8 border border-zinc-200/50">
              プランと料金
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter mb-4 sm:mb-8 leading-[1] sm:leading-[0.95]">
              最高のクオリティを、<br />
              <span className="text-zinc-400">研ぎ澄まされた価格で。</span>
            </h2>
            <p className="text-zinc-500 text-sm sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              LilQは、プロフェッショナルな映像表現をすべての人へ。
              用途に合わせた最適なプランをご用意しています。
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-12 sm:mb-20">
          {/* Basic Plan */}
          <div className="relative bg-white rounded-2xl sm:rounded-[2.5rem] border border-zinc-200 p-6 sm:p-10 lg:p-14 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="flex justify-between items-start mb-6 sm:mb-10">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-blue-600 bg-blue-50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-100/50">基本プラン</span>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-400 tracking-widest uppercase">〜48h</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-zinc-950 mb-2 sm:mb-3 tracking-tight">ショート・切り抜き</h3>
            <p className="text-zinc-500 text-sm sm:text-lg mb-6 sm:mb-10 leading-relaxed font-medium">ショート動画・切り抜き制作。拡散力を最大化する編集プラン。</p>

            <div className="flex flex-col items-start gap-1 sm:gap-2 mb-8 sm:mb-12">
              <span className="text-4xl sm:text-7xl font-black text-zinc-950">¥1,000〜</span>
              <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs sm:text-base ml-1">1本あたり〜</span>
            </div>

            <div className="space-y-3 sm:space-y-5 mb-8 sm:mb-14">
              {[
                "基本カット・テロップ入れ（フルテロップ可）",
                "効果音（SE）・BGMの精密な選定",
                "視聴率を維持するエフェクト装飾",
                "各プラットフォームへの最適化"
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 text-zinc-600 font-medium">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-sm sm:text-base">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://twitter.com/LilQ_officialJP"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-center gap-2 sm:gap-3 bg-zinc-950 text-white rounded-xl sm:rounded-2xl font-black py-2.5 sm:py-4 text-xs sm:text-sm transition-all duration-500 hover:scale-[1.02] shadow-lg overflow-hidden"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>見積もりを相談する</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 stroke-[3px]" />
            </a>
          </div>

          {/* Custom Plan */}
          <div className="relative bg-zinc-950 rounded-2xl sm:rounded-[2.5rem] border border-white/10 p-6 sm:p-10 lg:p-14 text-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="flex justify-between items-start mb-6 sm:mb-10">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-emerald-400 bg-emerald-400/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-emerald-400/20">カスタムプラン</span>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 tracking-widest uppercase">カスタム制作</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black mb-2 sm:mb-3 tracking-tight">あなたに合わせた映像</h3>
            <p className="text-zinc-400 text-sm sm:text-lg mb-6 sm:mb-10 leading-relaxed font-medium">長尺編集、MV制作、独自のソリューション</p>

            <div className="mb-8 sm:mb-12 min-h-[60px] sm:min-h-[84px] flex items-center">
              <span className="text-2xl sm:text-4xl font-black text-white leading-[1.2] sm:leading-[1.1]">ご予算に合わせた<br />オーダーメイド</span>
            </div>

            <div className="space-y-3 sm:space-y-5 mb-8 sm:mb-14">
              {[
                "10分以上の長尺まとめ",
                "高度な映像制作",
                "専属クリエイターによる月額契約",
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 text-zinc-400 font-medium">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/40" />
                  </div>
                  <span className="text-sm sm:text-base">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://twitter.com/LilQ_officialJP"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-center gap-2 sm:gap-3 bg-white text-zinc-950 rounded-xl sm:rounded-2xl font-black py-2.5 sm:py-4 text-xs sm:text-sm transition-all duration-500 hover:scale-[1.02] shadow-lg overflow-hidden"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>要望をヒアリングする</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 stroke-[3px]" />
            </a>
          </div>
        </div>

        {/* Info box */}
        <motion.div
          className="relative p-6 sm:p-10 bg-zinc-50 border border-zinc-200 rounded-2xl sm:rounded-[2rem] flex items-start gap-4 sm:gap-6 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
            <Info className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          </div>
          <div className="text-zinc-600 text-sm sm:text-lg leading-relaxed font-medium min-w-0">
            <span className="font-extrabold text-zinc-950">柔軟なパートナーシップ</span> —
            「とりあえず予算1万円で何本くらい作れますか？」「今回はシンプルな編集だから安くしてほしい」など、決まった枠にとらわれない柔軟な対応が可能です。
            PayPalを通じたクレジットカード決済や銀行振込に対応しています。
          </div>
        </motion.div>
      </div>
    </section>
  );
}
