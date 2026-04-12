"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Twitter, ChevronRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function CTABanner({
  titleTop = "最高品質を、",
  titleBottom = "あなたの配信に。",
  description = "動画編集のご依頼から技術支援まで、LilQは表現者のあらゆる課題を解決します。まずはお気軽にXのDMからご相談ください。",
}: {
  titleTop?: string;
  titleBottom?: string;
  description?: string;
} = {}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative bg-white py-32 lg:py-56 overflow-hidden">
      {/* Huge Background Text Mask (Japanese) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <motion.div style={{ x }} className="whitespace-nowrap">
          <span className="text-[18rem] font-black tracking-tighter leading-none">
            創る人の、最強のパートナー。 • 創る人の、最強のパートナー。 •
          </span>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-noise opacity-[0.015] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-5 py-2 bg-zinc-950 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full mb-10 shadow-2xl">
            制作を開始する
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-10 leading-[0.9]">
            {titleTop}<br />
            <span className="text-zinc-400">{titleBottom}</span>
          </h2>
          <p className="text-zinc-500 text-xl max-w-xl mx-auto mb-16 leading-relaxed font-medium tracking-tight whitespace-pre-line">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="https://twitter.com/LilQ_officialJP"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 bg-zinc-950 text-white px-14 py-7 rounded-[2rem] font-black text-2xl transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none opacity-20" />
            <Twitter className="w-8 h-8" />
            <span>X で相談する</span>
            <ChevronRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2 stroke-[3px]" />
          </a>
        </motion.div>

        {/* High-end Stats Breakdown */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-28 flex flex-wrap justify-center gap-12 sm:gap-24"
        >
          {[
            { value: "〜48h", label: "納品スピード" },
            { value: "¥1,000〜", label: "制作コスパ" },
            { value: "最高水準", label: "映像品質保証" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl sm:text-4xl font-black text-zinc-950 mb-2 transition-transform duration-500 group-hover:scale-110 tracking-tighter">{stat.value}</div>
              <div className="text-[14px] font-black text-zinc-400 uppercase tracking-[0.3em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
