"use client";

import { motion } from "framer-motion";
import { Twitter, ChevronRight } from "lucide-react";

export default function CTABanner({
  titleTop = "最高品質を、",
  titleBottom = "あなたの配信に。",
  description = "動画編集のご依頼から技術支援まで、LilQは表現者のあらゆる課題を解決します。まずはお気軽にXのDMからご相談ください。",
}: {
  titleTop?: string;
  titleBottom?: string;
  description?: string;
} = {}) {
  return (
    <section className="relative bg-white py-16 sm:py-32 lg:py-56 overflow-hidden">
      {/* Simplified Background - removed heavy parallax text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-blue-600/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 sm:px-5 py-2 bg-zinc-950 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-full mb-6 sm:mb-10 shadow-2xl">
            制作を開始する
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-6 sm:mb-10 leading-[0.95]">
            {titleTop}<br />
            <span className="text-zinc-400">{titleBottom}</span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-lg lg:text-xl max-w-xl mx-auto mb-10 sm:mb-16 leading-relaxed font-medium tracking-tight whitespace-pre-line">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <a
            href="https://twitter.com/LilQ_officialJP"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 sm:gap-4 bg-zinc-950 text-white px-5 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] overflow-hidden w-full sm:w-auto justify-center"
          >
            <Twitter className="w-4 h-4 sm:w-6 sm:h-6" />
            <span>X で相談する</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-x-1 stroke-[3px]" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 sm:mt-28 flex flex-wrap justify-center gap-8 sm:gap-24"
        >
          {[
            { value: "〜48h", label: "納品スピード" },
            { value: "¥1,000〜", label: "制作コスパ" },
            { value: "最高水準", label: "映像品質保証" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 mb-1 sm:mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] sm:text-[14px] font-black text-zinc-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
