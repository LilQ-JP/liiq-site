"use client";

import { Badge } from "@/components/ui/badge";
import { Clock, PenSquare, TrendingDown, Wallet } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

const pains = [
  {
    icon: Clock,
    title: "編集に時間が取れない",
    desc: "配信と編集の両立が難しく、投稿頻度が落ちてしまう。",
  },
  {
    icon: PenSquare,
    title: "編集スキルに不安がある",
    desc: "思い通りのクオリティを安定して出せない。",
  },
  {
    icon: TrendingDown,
    title: "SNSで伸ばしきれない",
    desc: "切り抜きの量産ができず認知が広がらない。",
  },
  {
    icon: Wallet,
    title: "外注費が高すぎる",
    desc: "プロに頼みたいが予算が合わない。",
  },
];

export default function PainSection() {
  return (
    <section className="section section-base pain-section-pattern">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">
            よくある悩み
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            配信者の課題を整理しました
          </h2>
          <p className="text-muted-foreground mt-3">
            LilQはこの悩みを最短距離で解決します。
          </p>
        </AnimatedHeader>

        <AnimatedStaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <AnimatedStaggerItem key={p.title}>
              <div className="card-surface p-5 card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
              </AnimatedStaggerItem>
            );
          })}
        </AnimatedStaggerContainer>

        <AnimatedSection className="mt-12">
        <div className="card-soft px-6 py-5 text-center">
          <p className="text-sm text-muted-foreground">その悩みを、価格とスピードで解決します</p>
          <p className="text-xl sm:text-2xl font-bold text-foreground mt-2">
            配信に集中できる環境を、LilQがつくります。
          </p>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
