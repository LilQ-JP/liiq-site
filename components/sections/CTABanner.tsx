"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import site from "@/content/site.json";

export default function CTABanner() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section section-alt section-pattern pattern-grid">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
        <div className="card-surface p-8 text-center min-w-0 overflow-hidden">
          <Badge variant="secondary" className="mb-4">{site.cta.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 break-words">
            {site.cta.titleLines[0]}
            <br className="sm:hidden" />
            {site.cta.titleLines[1]}
          </h2>
          <p className="text-muted-foreground mb-6">
            {site.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => go("#apply")}
              size="lg"
              className="rounded-full"
            >
              {site.cta.primaryLabel}
            </Button>
            <Button
              onClick={() => go("#contact")}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              {site.cta.secondaryLabel}
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs text-muted-foreground">
            <span>{site.cta.bullets[0]}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{site.cta.bullets[1]}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{site.cta.bullets[2]}</span>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
