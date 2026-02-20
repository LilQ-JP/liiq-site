"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Zap, DollarSign, MessageCircle } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

const reasons = [
  {
    icon: Zap,
    title: "圧倒的な速さ",
    desc: "最短24時間以内に納品。トレンドの波を逃さず拡散までを高速化。",
    highlight: "最短24時間",
  },
  {
    icon: DollarSign,
    title: "業界最安水準",
    desc: "ショート動画500円から。継続しやすい料金設計。",
    highlight: "500円",
  },
  {
    icon: MessageCircle,
    title: "話しやすい距離感",
    desc: "堅苦しいやり取りは不要。DMやフォームで気軽に相談可能。",
    highlight: "気軽に相談",
  },
];

export default function AboutSection() {
  return (
    <section id="services" className="section section-alt section-pattern pattern-dots">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge variant="secondary" className="mb-3">LilQについて</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              LilQ（リルク）とは
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VTuber・ゲーム実況・雑談配信者向けの動画編集・切り抜き特化サービスです。
              <br className="sm:hidden" />
              プロ品質の映像を、圧倒的な低価格で提供します。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              伝えたい瞬間を、最短で、最良の形に。
              <br className="sm:hidden" />
              配信に集中できる環境をつくります。
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "VTuber",
                "ゲーム実況者",
                "雑談配信者",
                "切り抜き量産",
                "編集が苦手な方",
              ].map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 card-hover">
            <div className="text-sm text-muted-foreground">理念 / ビジョン / ミッション</div>
            <h3 className="text-xl font-bold text-foreground mt-2">
              すべてのクリエイターの「伝えたい」を形にする
            </h3>
            <Separator className="my-4" />
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-xs text-muted-foreground">企業理念</div>
                <div className="font-semibold text-foreground">技術の力でクリエイターの表現を形にする</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">ビジョン</div>
                <div className="font-semibold text-foreground">誰もがプロ品質の映像を手にできる世界</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">ミッション</div>
                <div className="font-semibold text-foreground">低価格・高品質・実用的なツールの提供</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <AnimatedHeader className="text-center mb-10">
            <Badge variant="secondary" className="mb-3">選ばれる理由</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              選ばれる3つの理由
            </h2>
          </AnimatedHeader>

          <AnimatedStaggerContainer className="grid lg:grid-cols-3 gap-5">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <AnimatedStaggerItem key={r.title}>
                <div className="card-surface p-6 card-hover h-full">
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {r.desc}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {r.highlight}
                  </Badge>
                </div>
                </AnimatedStaggerItem>
              );
            })}
          </AnimatedStaggerContainer>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
