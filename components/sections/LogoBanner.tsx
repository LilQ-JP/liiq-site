"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import { Users2, Zap } from "lucide-react";

const clients = ["ココマルハピー", "とみたけかれる"];
const genres = ["VTuber", "ゲーム実況", "雑談配信", "切り抜き量産"];
const features = ["最短24時間", "全額返金保証"];

export default function LogoBanner() {
  return (
    <section className="section-tight section-alt section-pattern pattern-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-white px-6 py-8 shadow-[0_4px_24px_rgba(17,24,39,0.08)] sm:px-10 sm:py-10">
            {/* 背景アクセント */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />

            <div className="relative">
              <h3 className="text-center text-base font-extrabold tracking-tight text-foreground sm:text-lg">
                対応ジャンルと実績クライアント
              </h3>

              <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
                {/* 実績クライアント */}
                <div className="flex flex-col items-center gap-3 sm:items-start">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <Users2 className="h-3.5 w-3.5" />
                    実績クライアント
                  </div>
                  <AnimatedStaggerContainer className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    {clients.map((c) => (
                      <AnimatedStaggerItem key={c}>
                        <Badge
                          variant="secondary"
                          className="rounded-lg px-3 py-1.5 text-sm font-extrabold shadow-sm transition-all hover:scale-105 hover:shadow-md"
                        >
                          {c}
                        </Badge>
                      </AnimatedStaggerItem>
                    ))}
                  </AnimatedStaggerContainer>
                </div>

                <Separator orientation="vertical" className="hidden self-stretch sm:block" />
                <Separator orientation="horizontal" className="sm:hidden" />

                {/* 対応ジャンル */}
                <div className="flex flex-col items-center gap-3 sm:items-start">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <Zap className="h-3.5 w-3.5" />
                    対応ジャンル
                  </div>
                  <AnimatedStaggerContainer className="flex flex-wrap justify-center gap-2 sm:justify-start" delayIndex={1}>
                    {genres.map((g) => (
                      <AnimatedStaggerItem key={g}>
                        <Badge
                          variant="outline"
                          className="rounded-lg border-foreground/20 bg-foreground/[0.02] px-3 py-1.5 text-sm font-extrabold transition-all hover:border-foreground/40 hover:bg-foreground/[0.06]"
                        >
                          {g}
                        </Badge>
                      </AnimatedStaggerItem>
                    ))}
                  </AnimatedStaggerContainer>
                </div>

                <Separator orientation="vertical" className="hidden self-stretch sm:block" />
                <Separator orientation="horizontal" className="sm:hidden" />

                {/* 特徴 */}
                <div className="flex flex-col items-center gap-3 sm:items-start">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">サービス特徴</div>
                  <AnimatedStaggerContainer className="flex flex-wrap justify-center gap-2 sm:justify-start" delayIndex={2}>
                    {features.map((f) => (
                      <AnimatedStaggerItem key={f}>
                        <Badge
                          className="rounded-lg border-0 bg-primary px-3 py-1.5 text-sm font-extrabold text-primary-foreground shadow-sm"
                        >
                          {f}
                        </Badge>
                      </AnimatedStaggerItem>
                    ))}
                  </AnimatedStaggerContainer>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
