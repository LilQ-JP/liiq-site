"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "フォームから依頼",
    desc: "フォームまたはXのDMから依頼内容・配信URLを送ってください。相談だけでもOK。",
  },
  {
    step: "02",
    title: "お支払い",
    desc: "内容確認後、お見積もりをご提示。銀行振込・クレカ・PayPalで前払い。",
  },
  {
    step: "03",
    title: "納品・確認",
    desc: "制作完了後メールまたはDMでお届け。修正は2回まで無料で対応。",
  },
];

export default function FlowSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section section-base section-pattern pattern-dots">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">ご利用の流れ</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            たった3ステップで完了
          </h2>
          <p className="text-muted-foreground">最短24時間で納品します。</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-10">
          {steps.map((s) => (
            <div key={s.step} className="card-surface p-6 card-hover">
              <div className="text-xs text-black/70 font-semibold">STEP {s.step}</div>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => go("#apply")}
            size="lg"
            className="rounded-full"
          >
            今すぐ無料で依頼する
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
