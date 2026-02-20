"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const steps = site.flow.steps;

export default function FlowSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section section-base section-pattern pattern-dots">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">{site.flow.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            {site.flow.title}
          </h2>
          <p className="text-muted-foreground">{site.flow.description}</p>
        </AnimatedHeader>

        <AnimatedStaggerContainer className="grid lg:grid-cols-3 gap-5 mb-10">
          {steps.map((s) => (
            <AnimatedStaggerItem key={s.step}>
            <div className="card-surface p-6 card-hover h-full">
              <div className="text-xs text-black/70 font-bold">STEP {s.step}</div>
              <h3 className="text-lg font-bold text-foreground mt-2 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>

        <AnimatedSection>
        <div className="text-center">
          <Button
            onClick={() => go("#apply")}
            size="lg"
            className="rounded-full"
          >
            {site.flow.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
