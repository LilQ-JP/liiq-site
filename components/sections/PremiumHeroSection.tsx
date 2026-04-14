"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import site from "@/content/site.json";

export default function PremiumHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-zinc-950 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-48 lg:pb-40">
      {/* Subtle Pattern Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-multiply" />

      {/* Light Ambient Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[0%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Refined Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-8 sm:mb-12 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              デジタルクリエイティブの精鋭集団
            </div>
          </motion.div>

          {/* Hero Headline */}
          <motion.div className="relative">
            {/* Hero Object Image - behind the headline (hidden on small mobile for performance) */}
            <div className="absolute inset-0 pointer-events-none select-none hidden sm:block">
              <img
                src="/images/hero-section-object.png"
                alt=""
                className="w-[600px] sm:w-[750px] lg:w-[900px] max-w-none mx-auto opacity-40 blur-[0.5px] animate-float"
              />
            </div>

            <motion.h1
              className="relative z-10 text-[2rem] sm:text-[4rem] lg:text-[6rem] font-black leading-[1.15] tracking-tighter mb-6 sm:mb-10 text-zinc-950"
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <span className="text-zinc-400 opacity-80 block lg:inline-block lg:mr-4">創る人の、</span>
              <br className="lg:hidden" />
              <span className="relative inline-block mt-1 sm:mt-2 lg:mt-0">
                <span className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[40px] sm:blur-[80px] rounded-full opacity-50" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-600">
                  最強のパートナー。
                </span>
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-lg lg:text-2xl text-zinc-500 max-w-3xl leading-relaxed mb-10 sm:mb-16 font-medium tracking-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            次世代の動画表現からクリエイター向けWebアプリ開発まで。
            <br className="hidden sm:block" />
            LilQは、あなたの可能性を極限まで引き出すテック・クリエイティブ・ラボです。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center w-full px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <button
              onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative flex items-center justify-center gap-2 bg-zinc-950 text-white px-5 py-2.5 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">サービスを見る</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1 stroke-[3px]" />
            </button>

            <button
              onClick={() => window.open(site.site.twitterUrl, "_blank")}
              className="group relative flex items-center justify-center gap-2 bg-white text-zinc-950 border border-zinc-200 px-5 py-2.5 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg transition-all duration-500 hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-lg active:scale-[0.98] w-full sm:w-auto"
            >
              <span>お問い合わせ</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              最短24h納品
            </span>
            <span className="flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              ¥1,000〜
            </span>
            <span className="flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              修正2回無料
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
