"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroCards } from "@/content/heroCards";
import { heroImagePath } from "@/lib/constants";
import { Zap, Users2, Banknote } from "lucide-react";

const cardIcons = [Zap, Users2, Banknote] as const;

export default function HeroSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-[#eef2f6]">
      <div className="absolute -top-28 -left-24 w-[320px] h-[320px] rounded-full bg-white/70 blur-2xl" />
      <div className="absolute -bottom-40 right-0 w-[420px] h-[420px] rounded-full bg-white/70 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <Badge variant="outline" className="bg-white text-black border-black/10 text-sm px-3 py-1.5">
            モニター価格で受付中
          </Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight tracking-tight">
            さあ、500円で<br />
            リスクゼロではじめよう！
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
        </div>

        {/* 画像 + 右上に重なる縦並びカード */}
        <div className="relative z-0 -mt-24 sm:-mt-32 flex justify-center">
          <div className="relative w-full max-w-[min(950px,95vw)]">
            <img
              src={heroImagePath}
              alt="動画制作・切り抜きサービス - 配信者をサポートするチーム"
              className="w-full h-auto rounded-[24px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              loading="eager"
            />
            {/* フローチャート風：縦並び、画像の右上に少しかぶる */}
            <div className="hidden lg:flex absolute right-4 top-4 xl:right-8 xl:top-6 flex-col gap-3 w-[300px] xl:w-[320px] z-20">
            {heroCards.map((card, idx) => {
              const Icon = cardIcons[idx];
              const isPrice = card.label === "料金";
              const isLast = idx === heroCards.length - 1;
              return (
                <div key={card.label} className="flex flex-col items-stretch">
                  <div
                    className={`
                      group overflow-hidden rounded-2xl
                      transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5
                      ${isPrice
                        ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]"
                        : "bg-white shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.18)]"
                      }
                    `}
                  >
                    <div className="px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4">
                      <div className={`
                        flex items-center justify-center w-10 h-10 rounded-xl shrink-0
                        ${isPrice ? "bg-white/15" : "bg-black/5"}
                      `}>
                        <Icon className={`w-5 h-5 shrink-0 ${isPrice ? "text-white" : "text-black/70"}`} strokeWidth={2.5} />
                      </div>
                      <div className="min-w-0">
                        <p className={`
                          text-xs font-bold uppercase tracking-wider mb-1
                          ${isPrice ? "text-white/80" : "text-black/50"}
                        `}>
                          {card.label}
                        </p>
                        <h3 className={`
                          m-0 leading-tight font-extrabold tracking-tight text-base sm:text-lg
                          ${isPrice ? "text-white" : "text-black"}
                        `}>
                          {card.segments.map((seg, i) => (
                            <span
                              key={i}
                              className={
                                seg.style === "price"
                                  ? "text-xl sm:text-2xl font-black"
                                  : seg.style === "highlight"
                                    ? "font-black"
                                    : ""
                              }
                            >
                              {seg.text}
                            </span>
                          ))}
                        </h3>
                      </div>
                    </div>
                  </div>
                  {!isLast && (
                    <div className="flex justify-center py-1">
                      <div className="w-0.5 h-3 bg-blue-400/50 rounded-full" />
                    </div>
                  )}
                </div>
              );
            })}
            </div>
          </div>
        </div>

        {/* モバイル：カードを下に縦並び */}
        <div className="relative mt-10 lg:hidden">
          <div className="flex flex-col items-center gap-4 max-w-[340px] mx-auto">
            {heroCards.map((card, idx) => {
              const Icon = cardIcons[idx];
              const isPrice = card.label === "料金";
              const isLast = idx === heroCards.length - 1;
              return (
                <div key={card.label} className="relative w-full">
                  <div
                    className={`
                      group overflow-hidden rounded-2xl w-full
                      transition-all duration-300 hover:scale-[1.02]
                      ${isPrice
                        ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]"
                        : "bg-white shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)]"
                      }
                    `}
                  >
                    <div className="px-6 py-5 flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${isPrice ? "bg-white/15" : "bg-black/5"}`}>
                        <Icon className={`w-5 h-5 ${isPrice ? "text-white" : "text-black/70"}`} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isPrice ? "text-white/80" : "text-black/50"}`}>
                          {card.label}
                        </p>
                        <h3 className={`m-0 leading-tight font-extrabold ${isPrice ? "text-white text-lg" : "text-black"}`}>
                          {card.segments.map((seg, i) => (
                            <span key={i} className={seg.style === "price" ? "text-xl font-black" : seg.style === "highlight" ? "font-black" : ""}>
                              {seg.text}
                            </span>
                          ))}
                        </h3>
                      </div>
                    </div>
                  </div>
                  {!isLast && <div className="w-0.5 h-3 bg-blue-400/60 mx-auto my-1" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
