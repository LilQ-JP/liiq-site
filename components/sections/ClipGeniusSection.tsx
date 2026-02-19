"use client";

import { Badge } from "@/components/ui/badge";
import { Target, Zap, Clock, Layers } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

const features = [
  { icon: Target, text: "見どころを自動で抽出" },
  { icon: Zap, text: "編集時間を大幅に短縮" },
  { icon: Clock, text: "24時間365日自動処理" },
  { icon: Layers, text: "配信スタイルを問わず対応" },
];

export default function ClipGeniusSection() {
  return (
    <section className="section section-base">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">開発中ツール</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            ClipGenius
          </h2>
          <p className="text-muted-foreground">
            配信動画の面白いシーンを効率的に見つけ、切り抜き候補を提案するツールを開発中です。
          </p>
        </AnimatedHeader>

        <AnimatedSection>
        <div className="card-surface p-8">
          <AnimatedStaggerContainer className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <AnimatedStaggerItem key={f.text}>
                <div className="card-soft px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-background border border-border flex items-center justify-center">
                    <Icon className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="text-sm text-foreground/80">{f.text}</span>
                </div>
                </AnimatedStaggerItem>
              );
            })}
          </AnimatedStaggerContainer>

          <div className="mt-6 text-center">
            <Badge variant="outline" className="text-xs">COMING SOON</Badge>
            <p className="text-sm text-muted-foreground mt-2">
              リリース情報は X @LilQ_officialJP でお知らせします。
            </p>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
