"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function CTABanner() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section section-alt section-pattern pattern-grid">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
        <div className="card-surface p-8 text-center min-w-0 overflow-hidden">
          <Badge variant="secondary" className="mb-4">モニター価格で受付中</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 break-words">
            まずは1本だけ、
            <br className="sm:hidden" />
            試してみませんか？
          </h2>
          <p className="text-muted-foreground mb-6">
            相談だけでも大歓迎。全額返金保証付きなので、リスクゼロで始められます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => go("#apply")}
              size="lg"
              className="rounded-full"
            >
              今すぐ無料で依頼する
            </Button>
            <Button
              onClick={() => go("#contact")}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              まずは相談する
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs text-muted-foreground">
            <span>全額返金保証</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>修正2回無料</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>最短24時間納品</span>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
