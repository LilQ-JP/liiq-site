"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap as Lightning } from "lucide-react";
import site from "@/content/site.json";

const clients = ["ココマルハピー", "とみたけかれる", "松野アマネ", "白雪聖奈"];

// Repeat clients enough times to fill a continuous marquee
const repeatedClients = Array.from({ length: 12 }).map((_, i) => clients[i % clients.length]);

const genres = ["VTuber", "ゲーム実況", "雑談配信", "切り抜き量産", "実写編集"];

const features = [
  {
    title: "最短24時間納品",
    desc: "24-H4時間納品、最短にお届けます",
    icon: Clock,
  },
  {
    title: "全額返金保証",
    desc: "全額返金保証し、お負様にしたします",
    icon: ShieldCheck,
  },
  {
    title: "高品質・高密度の編集",
    desc: "高品質・高密度の編集できも優征",
    icon: Lightning,
  },
];

export default function LogoBanner() {
  return (
    <section className="bg-[#FCFCFD] py-16 sm:py-24 border-b border-zinc-100 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-zinc-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">MONITOR CLIENTS</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">モニターにご協力いただいた皆様</h3>
        </div>

        {/* Client Name Marquee */}
        <div className="relative flex overflow-x-hidden border-y border-zinc-200 py-6 sm:py-8 mb-16 sm:mb-20 opacity-80 bg-white">
          <motion.div
            className="whitespace-nowrap flex items-center gap-12 sm:gap-24 min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {repeatedClients.map((client, i) => (
              <span key={i} className="text-2xl sm:text-3xl font-black text-zinc-400/80 tracking-tighter whitespace-nowrap">
                {client}
              </span>
            ))}
          </motion.div>
          {/* Gradient fades on left and right for infinite illusion */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Bottom Area: Tags & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Genres (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <h4 className="text-zinc-400 font-medium mb-6 flex items-center gap-2 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              対応ジャンル
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {genres.map(tag => (
                <span
                  key={tag}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[32px] border border-zinc-200 text-zinc-600 font-medium text-xs sm:text-sm bg-white shadow-sm hover:border-zinc-300 hover:text-zinc-900 hover:shadow transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Feature Cards (Spans 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-white border border-zinc-200 p-5 sm:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-zinc-800 bg-zinc-100/80 w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-100">
                  <card.icon size={22} className="opacity-80" />
                </div>
                <div>
                  <h5 className="font-bold text-zinc-900 text-base sm:text-lg mb-1.5">{card.title}</h5>
                  <p className="text-xs sm:text-sm font-medium text-zinc-500 leading-relaxed">
                    {/* Simplified descriptions for a cleaner look */}
                    {i === 0 ? "24時間以内のスピード納品で最速でお届けします。" :
                      i === 1 ? "万が一の際も安心の全額返金保証を設けています。" :
                        "細部までこだわった高品質な編集技術を提供。"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
