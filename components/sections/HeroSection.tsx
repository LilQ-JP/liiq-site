"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroCards } from "@/content/heroCards";
import { heroImagePath } from "@/lib/constants";

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

        {/* 画像を中央に大きく、キャッチコピーに少しかぶる配置 */}
        <div className="relative z-0 -mt-24 sm:-mt-32 flex justify-center">
          <div className="w-full max-w-[min(700px,90vw)]">
            <img
              src={heroImagePath}
              alt="動画制作・切り抜きサービス - 配信者をサポートするチーム"
              className="w-full h-auto rounded-[24px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              loading="eager"
            />
          </div>
        </div>

        <div className="relative mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 flex-wrap">
            {heroCards.map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-[25px] px-6 py-5 sm:px-8 sm:py-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-black/5 max-w-[340px] w-full"
              >
                <p className="text-sm text-black/50 mb-2">{card.label}</p>
                <h3 className="text-base sm:text-xl font-bold text-black/90 m-0 leading-snug">
                  {card.segments.map((seg, i) => (
                    <span
                      key={i}
                      className={
                        seg.style === "price"
                          ? "text-xl sm:text-2xl"
                          : seg.style === "highlight"
                            ? "text-black font-bold"
                            : ""
                      }
                    >
                      {seg.text}
                    </span>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
