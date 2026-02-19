"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroCards } from "@/content/heroCards";
import { heroImagePath } from "@/lib/constants";

const cinematic = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

export default function HeroSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-[#eef2f6] hero-geo-pattern">
      <div className="absolute -top-28 -left-24 w-[320px] h-[320px] rounded-full bg-white/70 blur-2xl" />
      <div className="absolute -bottom-40 right-0 w-[420px] h-[420px] rounded-full bg-white/70 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16">
        <motion.div
          className="text-center max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cinematic, delay: 0.15 }}
        >
          <Badge variant="outline" className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 text-base sm:text-lg font-bold px-6 py-3 shadow-[0_4px_14px_rgba(251,146,60,0.5)] hover:from-amber-500 hover:to-orange-600 transition-all duration-300">
            モニター価格で受付中
          </Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight tracking-tight">
            500円から、<br />
            気軽にはじめよう！
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/60 leading-relaxed">
            VTuber・ゲーム実況・雑談配信者向けの動画編集・切り抜きサービス。
            最短24時間納品、修正2回無料。まずは1本、気軽に試せます。
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={() => go("#apply")} size="lg" className="rounded-full">
              無料で依頼する
            </Button>
            <Button
              onClick={() => go("#works")}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              実績を見る
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-black/60">
            <span>最短24時間納品</span>
            <span className="w-1 h-1 rounded-full bg-black/20 self-center" />
            <span>修正2回無料</span>
            <span className="w-1 h-1 rounded-full bg-black/20 self-center" />
            <span>全額返金保証</span>
          </div>
        </motion.div>

        {/* カード（背面）＋ 画像（手前）※画像下にかぶらないよう余白を確保 */}
        <motion.div
          className="relative -mt-24 sm:-mt-32 flex justify-center pb-8 lg:pb-12"
          initial={{ opacity: 0, y: 64, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...cinematic, delay: 0.35 }}
        >
          <div className="relative w-full max-w-[min(766px,95vw)]">
            {/* 小さなコンパクトカード：背面 z-0 */}
            <div className="hidden lg:flex absolute right-2 top-2 xl:right-4 xl:top-4 flex-col gap-2 w-[200px] xl:w-[220px] z-0">
              {heroCards.map((card, idx) => {
                const isPrice = card.label === "料金";
                return (
                  <div
                    key={card.label}
                    className={`
                      px-3 py-2.5 rounded-lg border text-left
                      ${isPrice
                        ? "bg-black/90 border-black/20 text-white"
                        : "bg-white/95 backdrop-blur border-black/10 text-black"
                      }
                    `}
                  >
                    <p className={`text-[10px] font-medium mb-0.5 ${isPrice ? "text-white/70" : "text-black/50"}`}>{card.label}</p>
                    <p className="text-xs font-semibold leading-tight m-0">
                      {card.segments.map((seg, i) => (
                        <span key={i} className={seg.style === "price" ? "text-sm font-bold" : ""}>
                          {seg.text}
                        </span>
                      ))}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* 画像：手前 z-10 */}
            <div className="relative z-10">
              <img
                src={heroImagePath}
                alt="動画制作・切り抜きサービス - 配信者をサポートするチーム"
                className="w-full h-auto max-h-[431px] rounded-[24px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* モバイル：3枚のカードを画像の下に整列（画像に隠れない） */}
        <motion.div
          className="relative mt-12 lg:hidden"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cinematic, delay: 0.5 }}
        >
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {heroCards.map((card) => {
              const isPrice = card.label === "料金";
              return (
                <div
                  key={card.label}
                  className={`
                    flex flex-col items-center justify-center px-3 py-4 rounded-xl border text-center
                    shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300
                    min-h-[88px]
                    ${isPrice
                      ? "bg-black/90 border-black/20 text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                      : "bg-white border-black/10 text-black hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] active:scale-[0.98]"
                    }
                  `}
                >
                  <p className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 ${isPrice ? "text-white/80" : "text-black/50"}`}>
                    {card.label}
                  </p>
                  <p className="text-[11px] font-semibold leading-tight m-0">
                    {card.segments.map((seg, i) => (
                      <span key={i} className={seg.style === "price" ? "text-sm font-bold" : ""}>
                        {seg.text}
                      </span>
                    ))}
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
