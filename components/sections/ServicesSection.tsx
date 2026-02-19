"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

const services = [
  {
    title: "ショート動画制作",
    sub: "〜60秒",
    price: "¥500〜",
    delivery: "最短24時間",
    features: [
      "60秒以内のショート動画",
      "Adobe Premiere Proで制作",
      "BGM・テロップ対応",
      "修正2回まで無料",
      "YouTube Shorts / TikTok対応",
    ],
    badge: "人気",
    highlight: true,
  },
  {
    title: "切り抜き動画制作",
    sub: "5分程度",
    price: "¥3,000〜",
    delivery: "2〜3営業日",
    features: [
      "5分程度の切り抜き動画",
      "名シーン・神場面を厳選",
      "テロップ・エフェクト対応",
      "修正2回まで無料",
      "YouTube / SNS対応",
    ],
    badge: "おすすめ",
    highlight: false,
  },
  {
    title: "カスタム動画制作",
    sub: "ご要望に対応",
    price: "要相談",
    delivery: "要相談",
    features: [
      "長尺・特殊仕様に対応",
      "OP・ED制作",
      "複数動画のまとめ編集",
      "修正2回まで無料",
      "詳細はご相談ください",
    ],
    badge: "柔軟対応",
    highlight: false,
  },
];

const options = [
  { name: "Priority Production", price: "+¥3,000", desc: "他の依頼より優先対応。急ぎの依頼に。" },
  { name: "追加修正（3回目以降）", price: "+¥500/回", desc: "2回超えた修正に対応。" },
];

export default function ServicesSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section section-base section-pattern pattern-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">サービスと料金</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            サービス内容と料金プラン
          </h2>
          <p className="text-muted-foreground">
            全プラン修正2回無料・全額返金保証付き。
          </p>
        </AnimatedHeader>

        <AnimatedStaggerContainer className="grid lg:grid-cols-3 gap-5 mb-8">
          {services.map((s) => (
            <AnimatedStaggerItem key={s.title}>
            <div className={`card-surface p-6 card-hover h-full ${s.highlight ? "ring-1 ring-primary/20" : ""}`}>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-xs">
                  {s.badge}
                </Badge>
                <span className="text-xs text-muted-foreground">納期: {s.delivery}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
              <div className="text-3xl font-bold text-foreground mt-4">{s.price}</div>

              <div className="space-y-2 mt-5 text-sm text-muted-foreground">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>

              <Button onClick={() => go("#apply")} className="w-full mt-6 rounded-full">
                このプランで依頼する
              </Button>
            </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>

        <AnimatedStaggerContainer className="grid lg:grid-cols-2 gap-5" delayIndex={1}>
          <AnimatedStaggerItem>
          <div className="card-surface p-6 card-hover h-full">
            <h3 className="text-lg font-semibold text-foreground mb-4">オプションサービス</h3>
            <div className="space-y-3">
              {options.map((o) => (
                <div key={o.name} className="card-soft px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-foreground text-sm">{o.name}</div>
                    <div className="text-sm font-semibold text-foreground">{o.price}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
          </AnimatedStaggerItem>

          <AnimatedStaggerItem>
          <div className="card-surface p-6 card-hover h-full">
            <h3 className="text-lg font-semibold text-foreground mb-4">支払い・返金</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <div className="font-medium text-foreground mb-1">支払い方法</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "銀行振込",
                    "クレジットカード",
                    "PayPal",
                  ].map((m) => (
                    <Badge key={m} variant="outline" className="text-xs">{m}</Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">前払い制</p>
              </div>
              <div className="card-soft px-4 py-3">
                <div className="font-medium text-foreground">全額返金保証</div>
                <p className="text-xs text-muted-foreground mt-1">
                  制作開始前キャンセルは全額返金。納品物にご満足いただけない場合も全額返金。
                </p>
              </div>
            </div>
          </div>
          </AnimatedStaggerItem>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
