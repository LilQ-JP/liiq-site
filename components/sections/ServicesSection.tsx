"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Fire, CalendarBlank, HandPalm, CurrencyCny, CheckCircle } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const services = site.services.services;
const packages = site.services.packages;
const options = site.services.options;

function SecurityGuaranteesBlock() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: <CalendarBlank size={20} weight="bold" className="text-[#6366F1]" />,
      iconBg: "bg-[#EEF2FF]",
      title: "月ごと更新制",
      desc: "自動で課金が続くサブスクではありません。毎月、続けるかどうかをご自身で決められます。"
    },
    {
      icon: <HandPalm size={20} weight="bold" className="text-[#16A34A]" />,
      iconBg: "bg-[#F0FDF4]",
      title: "いつでも停止OK",
      desc: "翌月分が不要な場合、前月末までにLINEまたはXでひと言いただくだけで完了。手続き不要。"
    },
    {
      icon: <CurrencyCny size={20} weight="bold" className="text-[#EA580C]" />,
      iconBg: "bg-[#FFF7ED]",
      title: "制作した分だけ請求",
      desc: "解約金・違約金・キャンセル料は一切発生しません。実際に制作した動画の分だけをご請求します。"
    }
  ];

  return (
    <div ref={ref} className="bg-[#FFFFFF] border-t border-t-[#F1F5F9] py-16 sm:py-20 flex flex-col items-center px-5 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h3 className="text-2xl sm:text-[1.75rem] font-[700] text-[#0F172A] mb-3 tracking-[-0.03em]">
            縛りなし、だから安心して始められる
          </h3>
          <p className="text-[#64748B] text-sm sm:text-base tracking-[-0.01em]">
            いつでも止められるから、まず1ヶ月試してみてください
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-[12px] flex flex-col 
                hover:border-[#6366F1] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className={`w-10 h-10 ${card.iconBg} rounded-[10px] flex items-center justify-center mb-5 shrink-0`}>
                {card.icon}
              </div>
              <h4 className="text-base font-[600] text-[#0F172A] mb-2">{card.title}</h4>
              <p className="text-[0.875rem] text-[#64748B] leading-[1.6] tracking-[-0.01em]">{card.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] py-4 px-6 text-center max-w-3xl mx-auto w-full
            transition-all duration-500 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "240ms" }}
        >
          <p className="text-[#64748B] text-[0.875rem] font-[400] tracking-[-0.01em]">
            💡 唯一のお願いは「翌月はいらない」という連絡を前月末までにいただくことだけです。
          </p>
        </div>
      </div>
    </div>
  );
}

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
                        <Check size={16} weight="bold" className="text-foreground mt-0.5 shrink-0" />
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

        {/* 月額パッケージ */}
        {packages && (
          <AnimatedSection className="mb-14">
            <div className="bg-[#F8FAFC] p-8 sm:p-12 rounded-[24px]">
              <div className="mb-10 text-center sm:text-left flex flex-col sm:items-start items-center">
                <h3 className="text-[2rem] font-[700] text-[#0F172A] mb-3 tracking-[-0.03em]">{site.services.packagesTitle}</h3>
                <p className="text-[#64748B] text-base mb-4 tracking-[-0.01em]">継続的な動画投稿でチャンネルを伸ばしたい方へ</p>
                <div className="bg-[#EEF2FF] text-[#6366F1] rounded-full px-3 py-1 text-[0.8rem] font-medium tracking-[-0.01em]">
                  契約縛りなし・解約金なし・翌月分が不要な場合は前月末までにご連絡ください
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packages.map((p) => (
                  <div
                    key={p.title}
                    className="bg-[#FFFFFF] border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#6366F1]/30 group border-t-[3px] border-t-[#E2E8F0] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_1px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2),0_4px_24px_rgba(99,102,241,0.08)]"
                  >
                    <div className="mb-6 mt-2">
                      <h4 className="text-[1.125rem] font-[700] text-[#0F172A] mb-1 tracking-[-0.02em]">{p.title}</h4>
                      <p className="text-[0.875rem] text-[#64748B] tracking-[-0.01em]">{p.sub}</p>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-[2.5rem] font-[800] text-[#0F172A] leading-none tracking-[-0.03em]">{p.price}</span>
                        <span className="text-base text-[#64748B] font-medium">{p.period}</span>
                      </div>
                    </div>
                    <div className="space-y-3 mb-8 flex-1">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <CheckCircle size={20} weight="fill" className="text-[#6366F1] shrink-0" />
                          <span className="text-[0.875rem] text-[#64748B] leading-[1.6] tracking-[-0.01em]">{f}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => go("#apply")}
                      className="w-full rounded-[8px] font-[600] py-3 text-[0.875rem] transition-all duration-200 tracking-[-0.01em] bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] shadow-sm"
                    >
                      {site.services.ctaLabel}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* 縛りなし・安心保証セクション */}
        <SecurityGuaranteesBlock />

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
