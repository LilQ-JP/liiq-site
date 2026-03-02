"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const services = site.services.services;
const packages = site.services.packages;
const options = site.services.options;

export default function ServicesSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section section-base section-pattern pattern-grid pb-20 sm:pb-[var(--section-padding)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          {/* ※毎月更新してください */}
          <Badge variant="destructive" className="mb-4 text-sm sm:text-base px-4 py-1.5 font-bold shadow-sm">
            今月の受注残り枠：あと10本
          </Badge>
          <br />
          <Badge variant="secondary" className="mb-3">{site.services.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            {site.services.titleLines[0]}
            <br className="sm:hidden" />
            {site.services.titleLines[1]}
          </h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {site.services.description}
          </p>
        </AnimatedHeader>

        {/* 単発プラン */}
        <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {services.map((s) => (
            <AnimatedStaggerItem key={s.title}>
              <div className={`card-surface p-6 card-hover h-full flex flex-col ${s.highlight ? "ring-2 ring-primary relative" : ""}`}>
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground font-bold px-3 py-1 shadow-sm">おすすめ</Badge>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4 mt-2">
                  <Badge variant="outline" className="text-xs">
                    {s.badge}
                  </Badge>
                  {s.delivery && <span className="text-xs text-muted-foreground">{site.services.deliveryLabel}: {s.delivery}</span>}
                </div>
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
                <div className="mt-4 flex flex-col gap-0.5">
                  {"originalPrice" in s && (
                    <div className="text-sm sm:text-base text-muted-foreground line-through font-bold">
                      {(s as any).originalPrice}
                    </div>
                  )}
                  <div className="text-3xl sm:text-4xl font-extrabold text-foreground">{s.price}</div>
                </div>

                <div className="space-y-2 mt-6 text-sm text-foreground/80 flex-1">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="leading-snug">{f}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={() => go("#apply")} variant={s.highlight ? "default" : "outline"} className={`w-full mt-8 rounded-full font-bold ${s.highlight ? 'shadow-md shadow-primary/20' : ''}`}>
                  {site.services.ctaLabel}
                </Button>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>

        {/* 月額パッケージ */}
        {packages && (
          <AnimatedSection className="mb-16">
            <div className="bg-slate-900 dark:bg-slate-950 rounded-[2rem] p-6 sm:p-10 border border-slate-800 shadow-xl text-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{site.services.packagesTitle}</h3>
                  <p className="text-slate-400">継続的な動画投稿でチャンネルを伸ばしたい方へ</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {packages.map((p) => (
                    <div key={p.title} className={`bg-slate-800/50 backdrop-blur-sm border p-6 rounded-2xl flex flex-col ${p.highlight ? 'border-blue-500/50 relative' : 'border-slate-700/50'}`}>
                      {p.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge className="bg-blue-600 hover:bg-blue-500 text-white border-0 font-bold px-3 py-1 shadow-lg shadow-blue-900/50 flex items-center gap-1">
                            <Flame className="w-3.5 h-3.5" /> 人気
                          </Badge>
                        </div>
                      )}

                      <div className="text-center mb-6 mt-2">
                        <h4 className="text-xl font-bold text-white mb-1">{p.title}</h4>
                        <p className="text-sm text-slate-400">{p.sub}</p>
                        <div className="mt-4 flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-extrabold text-white">{p.price}</span>
                          <span className="text-slate-400">{p.period}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mt-auto mb-8 bg-slate-900/50 p-4 rounded-xl">
                        {p.features.map((f) => (
                          <div key={f} className="flex items-start gap-2 text-sm text-slate-300">
                            <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                            <span className="leading-snug">{f}</span>
                          </div>
                        ))}
                      </div>

                      <Button onClick={() => go("#apply")} variant={p.highlight ? "default" : "secondary"} className={`w-full rounded-full font-bold ${p.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white'}`}>
                        {site.services.ctaLabel}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        <AnimatedStaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5" delayIndex={1}>
          <AnimatedStaggerItem>
            <div className="card-surface p-6 h-full flex flex-col">
              <h3 className="text-lg font-bold text-foreground mb-4 flex-shrink-0">{site.services.optionsTitle}</h3>
              <div className="space-y-1 flex-1">
                {options.map((o) => (
                  <div key={o.name} className="flex items-center justify-between gap-3 min-w-0 py-3 border-b border-border/50 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 px-2 rounded-lg transition-colors">
                    <div className="font-medium text-foreground text-sm min-w-0">{o.name}</div>
                    <div className="text-sm font-bold text-foreground shrink-0">{o.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedStaggerItem>

          <AnimatedStaggerItem>
            <div className="card-surface p-6 h-full flex flex-col justify-between">
              <h3 className="text-lg font-bold text-foreground mb-4">{site.services.paymentTitle}</h3>
              <div className="space-y-5 text-sm text-muted-foreground">
                <div>
                  <div className="font-semibold text-foreground mb-2">{site.services.paymentMethodsLabel}</div>
                  <div className="flex flex-wrap gap-2">
                    {site.services.paymentMethods.map((m) => (
                      <Badge key={m} variant="outline" className="text-xs bg-background">{m}</Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{site.services.paymentNote}</p>
                </div>
                <div className="bg-primary/5 border border-primary/10 px-4 py-3 rounded-xl">
                  <div className="font-semibold text-primary">{site.services.refundTitle}</div>
                  <p className="text-xs text-foreground/70 mt-1 leading-snug">
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
