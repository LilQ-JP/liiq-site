"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroCards } from "@/content/heroCards";

export default function HeroSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-[#eef2f6]">
      <div className="absolute -top-28 -left-24 w-[320px] h-[320px] rounded-full bg-white/70 blur-2xl" />
      <div className="absolute -bottom-40 right-0 w-[420px] h-[420px] rounded-full bg-white/70 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16">
        <div className="text-center max-w-3xl mx-auto">
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

        <div className="relative mt-14">
          <div className="absolute inset-x-0 -bottom-10 h-52 bg-white rounded-[48px] border border-black/5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]" />

          <div className="relative grid lg:grid-cols-[1.35fr_1fr] gap-8 items-end">
            <div className="relative">
              <div className="relative mx-auto max-w-[560px]">
                <div className="absolute -left-6 top-10 rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/70 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                  字幕・テロップ
                </div>
                <div className="absolute right-6 -top-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/70 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                  BGM・効果音
                </div>
                <div className="absolute -right-8 bottom-6 rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/70 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                  カット編集
                </div>

                <div className="rounded-[36px] bg-white border border-black/5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8">
                  <div className="rounded-[28px] bg-[#f7f8fa] p-6">
                    <svg viewBox="0 0 520 260" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" y="150" width="496" height="86" rx="40" fill="#ECEFF4" />
                      <g>
                        <circle cx="120" cy="78" r="32" fill="#F4D08E" />
                        <rect x="88" y="110" width="64" height="120" rx="32" fill="#F6D9A5" />
                        <rect x="68" y="138" width="28" height="76" rx="14" fill="#F6D9A5" />
                        <rect x="144" y="138" width="28" height="76" rx="14" fill="#F6D9A5" />
                      </g>
                      <g>
                        <circle cx="248" cy="70" r="34" fill="#F0B8CA" />
                        <rect x="214" y="106" width="68" height="126" rx="34" fill="#F4C6D5" />
                        <rect x="190" y="140" width="30" height="76" rx="15" fill="#F4C6D5" />
                        <rect x="276" y="140" width="30" height="76" rx="15" fill="#F4C6D5" />
                      </g>
                      <g>
                        <circle cx="392" cy="78" r="32" fill="#9DC9D9" />
                        <rect x="360" y="110" width="64" height="120" rx="32" fill="#B1D8E4" />
                        <rect x="338" y="138" width="28" height="76" rx="14" fill="#B1D8E4" />
                        <rect x="416" y="138" width="28" height="76" rx="14" fill="#B1D8E4" />
                      </g>
                      <circle cx="210" cy="56" r="4" fill="#1F2937" />
                      <circle cx="286" cy="56" r="4" fill="#1F2937" />
                      <path d="M238 70c6 6 16 6 22 0" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-[400px] p-5 sm:p-10 rounded-3xl bg-[#f4f7f9]">
              {heroCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-white rounded-[25px] px-6 py-5 sm:px-8 sm:py-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
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
      </div>
    </section>
  );
}
