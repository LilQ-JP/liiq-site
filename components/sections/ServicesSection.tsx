"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Twitter, ChevronRight } from "lucide-react";
import site from "@/content/site.json";

function SpotlightCard({ children, className, dark = false }: { children: React.ReactNode, className?: string, dark?: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group transition-all duration-500 rounded-[2.5rem] border ${dark
        ? "bg-zinc-950 border-white/10 text-white"
        : "bg-white border-zinc-200 text-zinc-950"
        } ${className}`}
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)"}, transparent 40%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="pricing" className="relative bg-white py-24 lg:py-36 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-8 border border-zinc-200/50">
              プランと料金
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter mb-8 leading-[0.95]">
              最高のクオリティを、<br />
              <span className="text-zinc-400">研ぎ澄まされた価格で。</span>
            </h2>
            <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              LilQは、プロフェッショナルな映像表現をすべての人へ。
              用途に合わせた最適なプランをご用意しています。
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <SpotlightCard className="p-10 lg:p-14">
            <div className="flex justify-between items-start mb-10">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100/50">基本プラン</span>
              <span className="text-xs font-bold text-zinc-400 tracking-widest uppercase">〜48h</span>
            </div>
            <h3 className="text-4xl font-black text-zinc-950 mb-3 tracking-tight">ショート・切り抜き</h3>
            <p className="text-zinc-500 text-lg mb-10 leading-relaxed font-medium">ショート動画・切り抜き制作。拡散力を最大化する編集プラン。</p>

            <div className="flex flex-col items-start gap-2 mb-12">
              <span className="text-7xl font-black text-zinc-950">¥1,000〜</span>
              <span className="text-zinc-400 font-bold uppercase tracking-widest text-base ml-1">1本あたり〜</span>
            </div>

            <div className="space-y-5 mb-14">
              {[
                "基本カット・テロップ入れ（フルテロップ可）",
                "効果音（SE）・BGMの精密な選定",
                "視聴率を維持するエフェクト装飾",
                "各プラットフォームへの最適化"
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4 text-zinc-600 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-base">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://twitter.com/LilQ_officialJP"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-center gap-4 bg-zinc-950 text-white rounded-2xl font-black py-6 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-zinc-950/20 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none opacity-20" />
              <Twitter className="w-6 h-6" />
              <span>見積もりを相談する</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 stroke-[3px]" />
            </a>
          </SpotlightCard>

          <SpotlightCard className="p-10 lg:p-14" dark>
            <div className="flex justify-between items-start mb-10">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-emerald-400 bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20">カスタムプラン</span>
              <span className="text-xs font-bold text-zinc-500 tracking-widest uppercase">カスタム制作</span>
            </div>
            <h3 className="text-4xl font-black mb-3 tracking-tight">あなたに合わせた映像</h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-medium">長尺編集、MV制作、独自のソリューション</p>

            <div className="mb-12 min-h-[84px] flex items-center">
              <span className="text-4xl font-black text-white leading-[1.1]">ご予算に合わせた<br />オーダーメイド</span>
            </div>

            <div className="space-y-5 mb-14">
              {[
                "10分以上の長尺まとめ",
                "高度な映像制作",
                "専属クリエイターによる月額契約",

              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4 text-zinc-400 font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white/40" />
                  </div>
                  <span className="text-base">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://twitter.com/LilQ_officialJP"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-center gap-4 bg-white text-zinc-950 rounded-2xl font-black py-6 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-white/5 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none opacity-10 bg-zinc-950" />
              <Twitter className="w-6 h-6" />
              <span>要望をヒアリングする</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 stroke-[3px]" />
            </a>
          </SpotlightCard>
        </div>

        {/* Info box with style */}
        <motion.div
          className="relative p-10 bg-zinc-50 border border-zinc-200 rounded-[2rem] flex items-start gap-6 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
            <Info className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-zinc-600 text-lg leading-relaxed font-medium">
            <span className="font-extrabold text-zinc-950">柔軟なパートナーシップ</span> —
            「とりあえず予算1万円で何本くらい作れますか？」「今回はシンプルな編集だから安くしてほしい」など、決まった枠にとらわれない柔軟な対応が可能です。
            PayPalを通じたクレジットカード決済や銀行振込に対応しています。
          </div>
        </motion.div>
      </div>
    </section>
  );
}
