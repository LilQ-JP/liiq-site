"use client";

import { Badge } from "@/components/ui/badge";

const items = [
  "ココマルハピー",
  "とみたけかれる",
  "VTuber",
  "ゲーム実況",
  "雑談配信",
  "切り抜き量産",
  "最短24時間",
  "全額返金保証",
];

export default function LogoBanner() {
  return (
    <section className="section-tight section-alt section-pattern pattern-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="card-surface px-6 py-5">
          <div className="text-center text-sm text-muted-foreground mb-4">
            対応ジャンルと実績クライアント
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {items.map((item) => (
              <Badge key={item} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
