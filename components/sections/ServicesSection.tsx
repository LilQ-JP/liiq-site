"use client";

import { Check, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const services = site.services.services;
const options = site.services.options;

export default function ServicesSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section-forma section-alt" >
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
              <div className="card-glass !p-0 h-full flex flex-col overflow-hidden">
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="tag-chip text-xs">{s.badge}</span>
                    {s.delivery && <span className="text-xs text-muted-foreground">{site.services.deliveryLabel}: {s.delivery}</span>}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-5">{s.sub}</p>

                  <div className="mb-6">
                    {"originalPrice" in s && (
                      <div className="text-sm text-muted-foreground line-through font-semibold mb-1">
                        {(s as any).originalPrice}
                      </div>
                    )}
                    <div className="price-large">{s.price}</div>
                  </div>

                  <div className="space-y-2.5 text-sm text-muted-foreground flex-1">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <Check size={16} className="text-foreground mt-0.5 shrink-0" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => go("#apply")}
                    className="w-full mt-7 rounded-full font-semibold py-3 text-sm transition-all btn-secondary-glass"
                  >
                    {site.services.ctaLabel}
                  </button>
                </div>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>

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

                  {/* PayPal Logo & Trust Link - Primary Display */}
                  <div className="flex justify-center py-4 bg-white rounded-xl border border-black/5 shadow-sm mb-2">
                    <button
                      onClick={() => window.open('https://www.paypal.com/jp/webapps/mpp/logo/about', 'olcwhatispaypal', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=900, height=700')}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/jp/developer/319x110_a.png"
                        alt="ペイパル｜VISA, Mastercard, JCB, American Express, Union Pay, 銀行"
                        className="h-20 w-auto"
                      />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">{site.services.paymentNote}</p>
                </div>
                <div className="bg-[#f5f5f5] border border-black/[0.04] px-5 py-4 rounded-2xl">
                  <div className="font-bold text-foreground text-sm">{site.services.refundTitle}</div>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    {site.services.refundDesc.substring(0, site.services.refundDesc.indexOf("こちら"))}
                    <a href="/legal" className="underline hover:text-foreground transition-all">こちら</a>
                    {site.services.refundDesc.substring(site.services.refundDesc.indexOf("こちら") + 3)}
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
