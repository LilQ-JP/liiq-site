"use client";

import { Check, Fire } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const services = site.services.services;
const packages = site.services.packages;
const options = site.services.options;

export default function ServicesSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section-forma" style={{ background: "#F2F2F0" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-14">
            <span className="label-sm mb-3 block">{site.services.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">
              {site.services.titleLines[0]}
              <br className="hidden sm:block" />
              {site.services.titleLines[1]}
            </h2>
            <p className="text-muted-foreground whitespace-pre-line max-w-xl mx-auto">{site.services.description}</p>
          </div>
        </AnimatedSection>

        {/* 単発プラン */}
        <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {services.map((s) => (
            <AnimatedStaggerItem key={s.title + s.sub}>
              <div
                className="card-glass !p-0 h-full flex flex-col overflow-hidden"
                style={s.highlight ? {
                  border: "2px solid #1a1a1a",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                } : undefined}
              >
                {s.highlight && (
                  <div className="bg-[#1a1a1a] text-white text-center py-2 text-xs font-bold tracking-wide">
                    おすすめ
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="tag-chip text-xs">{s.badge}</span>
                    {s.delivery && <span className="text-xs text-muted-foreground">{site.services.deliveryLabel}: {s.delivery}</span>}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-5">{s.sub}</p>

                  <div className="mb-5">
                    {"originalPrice" in s && (
                      <div className="text-sm text-muted-foreground line-through font-semibold mb-0.5">
                        {(s as any).originalPrice}
                      </div>
                    )}
                    <div className="text-3xl sm:text-4xl font-extrabold text-foreground">{s.price}</div>
                  </div>

                  <div className="space-y-2.5 text-sm text-muted-foreground flex-1">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <Check size={16} weight="bold" className="text-foreground mt-0.5 shrink-0" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => go("#apply")}
                    className={`w-full mt-7 rounded-full font-semibold py-3 text-sm transition-all ${s.highlight ? "btn-primary-gradient" : "btn-secondary-glass"
                      }`}
                  >
                    {site.services.ctaLabel}
                  </button>
                </div>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>

        {/* 月額パッケージ */}
        {packages && (
          <AnimatedSection className="mb-14">
            <div className="card-dark-premium p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/[0.06] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{site.services.packagesTitle}</h3>
                  <p className="text-white/40 text-sm">継続的な動画投稿でチャンネルを伸ばしたい方へ</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {packages.map((p) => (
                    <div key={p.title} className={`bg-white/[0.04] border p-6 sm:p-8 rounded-2xl flex flex-col ${p.highlight ? "border-white/20 relative" : "border-white/[0.06]"}`}>
                      {p.highlight && (
                        <div className="absolute -top-3 left-6">
                          <span className="bg-white text-[#0a0a0a] text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                            <Fire size={12} weight="fill" /> 人気
                          </span>
                        </div>
                      )}
                      <div className="mb-5 mt-1">
                        <h4 className="text-lg font-bold text-white mb-1">{p.title}</h4>
                        <p className="text-sm text-white/40">{p.sub}</p>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold text-white">{p.price}</span>
                          <span className="text-white/40">{p.period}</span>
                        </div>
                      </div>
                      <div className="space-y-2.5 mb-6 flex-1">
                        {p.features.map((f) => (
                          <div key={f} className="flex items-start gap-2.5 text-sm text-white/50">
                            <Check size={16} weight="bold" className="text-white/70 mt-0.5 shrink-0" />
                            <span className="leading-snug">{f}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => go("#apply")}
                        className={`w-full rounded-full font-semibold py-3 text-sm transition-all ${p.highlight
                            ? "bg-white text-[#0a0a0a] hover:bg-white/90"
                            : "bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/[0.08]"
                          }`}
                      >
                        {site.services.ctaLabel}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Options + Payment */}
        <AnimatedStaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AnimatedStaggerItem>
            <div className="card-glass !p-7 h-full">
              <h3 className="text-lg font-bold text-foreground mb-5">{site.services.optionsTitle}</h3>
              <div className="space-y-0.5">
                {options.map((o) => (
                  <div key={o.name} className="flex items-center justify-between gap-3 py-3 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{o.name}</span>
                    <span className="text-sm font-bold text-foreground shrink-0">{o.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
            <div className="card-glass !p-7 h-full flex flex-col justify-between">
              <h3 className="text-lg font-bold text-foreground mb-5">{site.services.paymentTitle}</h3>
              <div className="space-y-5 text-sm">
                <div>
                  <div className="font-semibold text-foreground/70 mb-2">{site.services.paymentMethodsLabel}</div>
                  <div className="flex flex-wrap gap-2">
                    {site.services.paymentMethods.map((m) => (
                      <span key={m} className="tag-chip text-xs">{m}</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{site.services.paymentNote}</p>
                </div>
                <div className="bg-[#f5f5f5] border border-black/[0.04] px-5 py-4 rounded-2xl">
                  <div className="font-bold text-foreground text-sm">{site.services.refundTitle}</div>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{site.services.refundDesc}</p>
                </div>
              </div>
            </div>
          </AnimatedStaggerItem>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
