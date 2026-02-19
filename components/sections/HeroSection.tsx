"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroCards } from "@/content/heroCards";
import { heroImagePath } from "@/lib/constants";

export default function HeroSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-[#eef2f6] hero-geo-pattern">
      <div className="absolute -top-28 -left-24 w-[320px] h-[320px] rounded-full bg-white/70 blur-2xl" />
      <div className="absolute -bottom-40 right-0 w-[420px] h-[420px] rounded-full bg-white/70 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <Badge variant="outline" className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 text-base sm:text-lg font-bold px-6 py-3 shadow-[0_4px_14px_rgba(251,146,60,0.5)] hover:from-amber-500 hover:to-orange-600 transition-all duration-300">
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

        {/* カード（背面）＋ 画像（手前） */}
        <div className="relative -mt-24 sm:-mt-32 flex justify-center">
          <div className="relative w-full max-w-[min(950px,95vw)]">
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
                className="w-full h-auto rounded-[24px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* モバイル：カードを下に横並び（コンパクト） */}
        <div className="relative mt-8 lg:hidden">
          <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
            {heroCards.map((card) => {
              const isPrice = card.label === "料金";
              return (
                <div
                  key={card.label}
                  className={`
                    px-4 py-2.5 rounded-lg border text-center min-w-[140px]
                    ${isPrice
                      ? "bg-black/90 border-black/20 text-white"
                      : "bg-white border-black/10 text-black"
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
        </div>
      </div>
    </section>
  );
}
