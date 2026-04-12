"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Vortex } from "@/components/ui/Vortex";
import { ChevronRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

import site from "@/content/site.json";

export default function PremiumHeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-500, 500], [8, -8]);
  const rotateY = useTransform(mouseX, [-500, 500], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white text-zinc-950 pt-32 pb-24 lg:pt-48 lg:pb-40 perspective-2000"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Pattern Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-multiply" />

      {/* Light Ambient Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[0%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Refined Pill badge (Japanese) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-xs font-black uppercase tracking-[0.25em] mb-12 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              デジタルクリエイティブの精鋭集団
            </div>
          </motion.div>

          {/* 3D Tilted Headline (Japanese) */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* Hero Object Image - behind the headline */}
            <motion.div
              className="absolute inset-0 pointer-events-none select-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -18, 0],
              }}
              transition={{
                opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
                scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
            >
              <img
                src="/images/hero-section-object.png"
                alt=""
                className="w-[600px] sm:w-[750px] lg:w-[900px] max-w-none mx-auto opacity-40 blur-[0.5px]"
              />
            </motion.div>

            <motion.h1
              className="relative z-10 text-[3.2rem] sm:text-[5rem] lg:text-[6.5rem] font-black leading-[1.1] tracking-tighter mb-10 text-zinc-950"
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <span className="text-zinc-400 opacity-80 block lg:inline-block lg:mr-4">創る人の、</span>
              <br className="lg:hidden" />
              <span className="relative inline-block mt-2 lg:mt-0">
                <span className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[80px] rounded-full opacity-50" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-600">
                  最強のパートナー。
                </span>
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle (Japanese) */}
          <motion.p
            className="text-lg sm:text-2xl text-zinc-500 max-w-3xl leading-relaxed mb-16 font-medium tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            次世代の動画表現からクリエイター向けWebアプリ開発まで。
            <br className="hidden sm:block" />
            LilQは、あなたの可能性を極限まで引き出すテック・クリエイティブ・ラボです。
          </motion.p>

          {/* 3D CTA Buttons (Japanese) */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <button
              onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative flex items-center justify-center gap-4 bg-zinc-950 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] active:scale-[0.98] overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none opacity-10 bg-white" />
              <span className="relative z-10">サービスを見る</span>
              <ChevronRight className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-2 stroke-[3px]" />
            </button>

            <button
              onClick={() => window.open(site.social.twitter, "_blank")}
              className="group relative flex items-center justify-center gap-4 bg-white text-zinc-950 border border-zinc-200 px-12 py-6 rounded-2xl font-black text-xl transition-all duration-500 hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-lg active:scale-[0.98]"
            >
              <span>お問い合わせ</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" />
            </button>
          </motion.div>

          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400"
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
