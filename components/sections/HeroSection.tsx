"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroCards } from "@/content/heroCards";
import { heroImagePath } from "@/lib/constants";
import { Clock, RefreshCw, ShieldCheck } from "lucide-react";
import site from "@/content/site.json";

const cinematic = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

export default function HeroSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-[#eef2f6] hero-geo-pattern -mt-16">
      <div className="absolute -top-28 -left-24 w-[320px] h-[320px] rounded-full bg-white/70 blur-2xl" />
      <div className="absolute -bottom-40 right-0 w-[420px] h-[420px] rounded-full bg-white/70 blur-2xl" />

      <div className="relative w-full max-w-7xl mx-auto px-3 min-[400px]:px-4 min-[480px]:px-5 sm:px-8 pt-20 pb-16 min-w-0">
        <motion.div
          className="text-center max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cinematic, delay: 0.15 }}
        >
          <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white border-0 text-lg sm:text-xl font-extrabold px-8 py-3.5 shadow-[0_4px_14px_rgba(59,130,246,0.4)] hover:from-blue-600 hover:to-pink-600 transition-all duration-300">
            {site.hero.badge}
          </Badge>
          <h1 className="mt-4 text-[37px] sm:text-[44px] lg:text-5xl font-extrabold font-['Hiragino_Sans'] text-black leading-tight tracking-tight">
            {site.hero.titleLines[0]}<br />
            {site.hero.titleLines[1]}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/60 leading-relaxed">
            {site.hero.descriptionLines[0]}
            <br />
            {site.hero.descriptionLines[1]}
            <br />
            {site.hero.descriptionLines[2]}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={() => go("#apply")} size="lg" className="rounded-full">
              {site.hero.buttons.apply}
            </Button>
            <Button
              onClick={() => go("#works")}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              {site.hero.buttons.works}
            </Button>
          </div>
        </motion.div>

        {/* 画像＋カード（絶対にかぶらない：テキスト・ボタンとの間隔を十分に確保） */}
        <motion.div
          className="relative mt-12 flex flex-col items-center justify-center pb-10"
          initial={{ opacity: 0, y: 64, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...cinematic, delay: 0.35 }}
        >
          <div className="flex w-full max-w-[min(1100px,100%)] flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-6 min-w-0 overflow-hidden">
            {/* 画像 */}
            <div className="relative w-full min-w-0 shrink-0 lg:max-w-[min(680px,60%)]">
              <img
                src={heroImagePath}
                alt={site.hero.imageAlt}
                className="w-full h-auto max-h-[520px] rounded-[24px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                loading="eager"
              />
            </div>
            {/* デスクトップ：画像の右に縦並びカード */}
            <div className="hidden lg:flex flex-col gap-3 w-[220px] xl:w-[240px] shrink-0">
              {heroCards.map((card) => {
                const Icon = card.icon;
                const isPrice = card.segments.some((seg) => seg.style === "price");
                return (
                  <div
                    key={card.label}
                    className={`
                      hero-card flex items-center gap-3 px-4 py-4 rounded-2xl border-2 text-left
                      ${isPrice
                        ? "bg-black text-white border-black/30 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                        : "bg-white/98 backdrop-blur-md border-black/[0.06] text-black shadow-[0_4px_24px_rgba(15,23,42,0.08)]"
                      }
                    `}
                  >
                    <div className={`hero-card-icon w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isPrice ? "bg-white/15" : "bg-black/5"}`}>
                      <Icon className={`w-5 h-5 ${isPrice ? "text-white" : "text-black/70"}`} strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <p className={`hero-card-label mb-1 ${isPrice ? "text-white/85" : "text-black/65"}`}>{card.label}</p>
                      <p className={`hero-card-body m-0 ${card.segments.some((s) => s.style === "price") ? "hero-card-body-lg" : ""}`}>
                        {card.segments.map((seg, i) =>
                          seg.style === "linebreak" ? (
                            <span key={i} className="block">{seg.text}</span>
                          ) : (
                            <span key={i} className={seg.style === "price" ? "hero-card-price" : ""}>
                              {seg.text}
                            </span>
                          )
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 画像の直下：3つの保証・特徴（こだわりデザイン） */}
          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...cinematic, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm">
              <Clock className="h-4 w-4 text-black/60" strokeWidth={2.5} />
              <span className="text-sm font-extrabold text-black/80">{site.hero.featureChips[0]}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm">
              <RefreshCw className="h-4 w-4 text-black/60" strokeWidth={2.5} />
              <span className="text-sm font-extrabold text-black/80">{site.hero.featureChips[1]}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-black/60" strokeWidth={2.5} />
              <span className="text-sm font-extrabold text-black/80">{site.hero.featureChips[2]}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* モバイル：3枚のカードを画像の下に整列（画像に絶対かぶらない・間隔十分） */}
        <motion.div
          className="relative mt-10 lg:hidden"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cinematic, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl mx-auto min-w-0 [&>div:last-child]:col-span-2 [&>div:last-child]:sm:col-span-1">
            {heroCards.map((card) => {
              const Icon = card.icon;
              const isPrice = card.segments.some((seg) => seg.style === "price");
              return (
                <div
                  key={card.label}
                  className={`
                    hero-card flex flex-col items-center justify-center gap-2 px-3 py-4 rounded-2xl border-2 text-center min-w-0 overflow-hidden
                    min-h-[100px] active:scale-[0.98]
                    ${isPrice
                      ? "bg-black text-white border-black/30 shadow-[0_6px_20px_rgba(0,0,0,0.22)]"
                      : "bg-white text-black border-black/[0.08] shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:shadow-[0_6px_24px_rgba(15,23,42,0.1)]"
                    }
                  `}
                >
                  <Icon className={`hero-card-icon w-5 h-5 shrink-0 ${isPrice ? "text-white" : "text-black/70"}`} strokeWidth={2.5} />
                  <p className={`hero-card-label text-xs sm:text-sm mb-0 shrink-0 font-semibold ${isPrice ? "text-white/85" : "text-black/65"}`}>
                    {card.label}
                  </p>
                  <p className="hero-card-body text-sm sm:text-base leading-snug m-0 w-full text-center break-keep">
                    {card.segments.map((seg, i) =>
                      seg.style === "linebreak" ? (
                        <span key={i} className="block font-[family-name:var(--font-noto-sans-jp)] font-black">{seg.text}</span>
                      ) : (
                        <span key={i} className={seg.style === "price" ? "hero-card-price text-[33px]" : "font-[family-name:var(--font-noto-sans-jp)] font-black"}>
                          {seg.text}
                        </span>
                      )
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
