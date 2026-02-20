"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const services = site.services.services;
const options = site.services.options;

export default function ServicesSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section section-base section-pattern pattern-grid pb-40 sm:pb-[var(--section-padding)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">{site.services.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            {site.services.titleLines[0]}
            <br className="sm:hidden" />
            {site.services.titleLines[1]}
          </h2>
          <p className="text-muted-foreground">
            {site.services.description}
          </p>
        </AnimatedHeader>

        <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {services.map((s) => (
            <AnimatedStaggerItem key={s.title}>
            <div className={`card-surface p-6 card-hover h-full ${s.highlight ? "ring-1 ring-primary/20" : ""}`}>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-xs">
                  {s.badge}
                </Badge>
                <span className="text-xs text-muted-foreground">{site.services.deliveryLabel}: {s.delivery}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
              <div className="text-3xl font-extrabold text-foreground mt-4">{s.price}</div>

              <div className="space-y-2 mt-5 text-sm text-muted-foreground">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>

              <Button onClick={() => go("#apply")} className="w-full mt-6 rounded-full">
                {site.services.ctaLabel}
              </Button>
            </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>

        <AnimatedStaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5" delayIndex={1}>
          <AnimatedStaggerItem>
          <div className="card-surface p-6 card-hover h-full">
            <h3 className="text-lg font-bold text-foreground mb-4">{site.services.optionsTitle}</h3>
            <div className="space-y-3">
              {options.map((o) => (
                <div key={o.name} className="card-soft px-4 py-3">
                  <div className="flex items-center justify-between gap-3 min-w-0">
                    <div className="font-semibold text-foreground text-sm min-w-0 break-keep">{o.name}</div>
                    <div className="text-sm font-bold text-foreground shrink-0 whitespace-nowrap">{o.price}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
          </AnimatedStaggerItem>

          <AnimatedStaggerItem>
          <div className="card-surface p-6 card-hover h-full">
            <h3 className="text-lg font-bold text-foreground mb-4">{site.services.paymentTitle}</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground mb-1">{site.services.paymentMethodsLabel}</div>
                <div className="flex flex-wrap gap-2">
                  {site.services.paymentMethods.map((m) => (
                    <Badge key={m} variant="outline" className="text-xs">{m}</Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">{site.services.paymentNote}</p>
              </div>
              <div className="card-soft px-4 py-3">
                <div className="font-semibold text-foreground">{site.services.refundTitle}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {site.services.refundDesc}
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
