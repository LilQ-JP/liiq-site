"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, Lightning, ShieldCheck, CaretRight, DeviceMobile } from "@phosphor-icons/react";
import site from "@/content/site.json";

const ease = [0.22, 1, 0.36, 1] as const;

type WorkItem =
  | { type: "youtube"; id: string; channel: string; label: string }
  | { type: "mp4"; url: string; channel: string; label: string };

const allWorks: WorkItem[] = [
  { type: "mp4", url: "/videos_01.mp4", channel: "ココマルハピー", label: "Short" },
  { type: "mp4", url: "/videos_02.mp4", channel: "ココマルハピー", label: "VTuber" },
  { type: "youtube", id: "a1tT9K_7d1U", channel: "とみたけかれる", label: "Highlight" },
  { type: "youtube", id: "GZibrcuxyMY", channel: "松野アマネ", label: "Vlog" }
];

export default function HeroSection() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % allWorks.length);
    }, 4000); // Swap every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const chips = [
    { icon: Clock, text: site.hero.featureChips[0] },
    { icon: Lightning, text: site.hero.featureChips[1] },
    { icon: ShieldCheck, text: site.hero.featureChips[2] },
  ];

  // Get current 3 visible works
  const visibleWorks = [
    allWorks[startIndex],
    allWorks[(startIndex + 1) % allWorks.length],
    allWorks[(startIndex + 2) % allWorks.length],
  ];

  return (
    <section className="relative overflow-hidden bg-[#FCFCFD]">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-8 pt-24 pb-16 min-w-0">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">

          {/* LEFT COLUMN: Text and CTA */}
          <div className="flex-1 min-w-0 flex flex-col items-start text-left w-full xl:max-w-[600px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="mb-8"
            >
              <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white border-0 text-base sm:text-lg lg:text-xl font-extrabold px-6 lg:px-8 py-2.5 lg:py-3.5 shadow-[0_4px_14px_rgba(59,130,246,0.4)] hover:from-blue-600 hover:to-pink-600 transition-all duration-300">
                {site.hero.badge}
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-6 font-black text-[3rem] sm:text-[4rem] xl:text-[4.5rem] leading-[1.1] tracking-tight text-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              配信を、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500">
                コンテンツ
              </span>へ。
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="max-w-xl mb-10 text-[1.125rem] sm:text-[1.25rem] font-medium text-zinc-500 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
            >
              {site.hero.descriptionLines[0]}<br className="hidden sm:block" />
              {site.hero.descriptionLines[1]}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-16 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
            >
              <button
                onClick={() => go("#apply")}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/20"
              >
                {site.hero.buttons.apply}
                <CaretRight weight="bold" />
              </button>
              <button
                onClick={() => go("#works")}
                className="flex-1 sm:flex-none bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-50 transition-colors shadow-sm"
              >
                {site.hero.buttons.works}
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
            >
              {chips.map((c, i) => {
                const colors = [
                  "text-blue-600",
                  "text-purple-600",
                  "text-rose-600"
                ];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <c.icon size={24} weight="fill" className={colors[i]} />
                    <div>
                      <div className="font-bold text-zinc-900 leading-none mb-1">{c.text}</div>
                      <div className="text-zinc-500 text-sm">{i === 0 ? "スピード納品" : i === 1 ? "納得いくまで" : "品質への自信"}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Bento Grid */}
          <motion.div
            className="w-full xl:w-[700px] shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
          >
            <div className="grid grid-cols-12 gap-4 sm:gap-6 h-[320px] sm:h-[400px]">
              {visibleWorks.map((work, idx) => {
                const cardStyles = [
                  "bg-gradient-to-br from-zinc-100 to-zinc-200 border-zinc-200",
                  "bg-blue-50 border-blue-100",
                  "bg-rose-50 border-rose-100"
                ];
                return (
                  <motion.div
                    key={`${work.channel}-${idx}`}
                    className={`col-span-4 row-span-1 relative overflow-hidden rounded-[24px] border shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:shadow-[0_20px_40px_rgba(0,0,0,0.2)] group ${cardStyles[idx]}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {work.type === "mp4" ? (
                      <video
                        src={work.url}
                        autoPlay muted loop playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : (
                      <iframe
                        src={`https://www.youtube.com/embed/${work.id}?autoplay=1&mute=1&loop=1&playlist=${work.id}&controls=0&playsinline=1`}
                        title={`YouTube Short - ${work.channel}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-105 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <div className="absolute bottom-4 left-4 z-20 text-white">
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase opacity-80 mb-1">
                        <DeviceMobile size={14} />
                        {work.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold leading-tight line-clamp-1">{work.channel}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
