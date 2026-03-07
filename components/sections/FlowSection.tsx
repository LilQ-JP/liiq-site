"use client";

import { PenLine, Upload, PackageCheck, ArrowRight, ChevronRight } from "lucide-react";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const stepIcons = [PenLine, Upload, PackageCheck];
const steps = site.flow.steps;

export default function FlowSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-forma section-base">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="label-sm mb-3 block">{site.flow.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">{site.flow.title}</h2>
            <p className="text-muted-foreground">{site.flow.description}</p>
          </div>
        </AnimatedSection>

        {/* ── ステップカード + 矢印 ── */}
        <AnimatedStaggerContainer className="flex flex-col lg:flex-row items-stretch justify-center gap-0 mb-8">
          {steps.map((s, i) => {
            const StepIcon = stepIcons[i] || PenLine;
            return (
              <AnimatedStaggerItem key={s.step} className="flex flex-col lg:flex-row items-center">
                {/* カード */}
                <div className="relative w-full lg:w-auto lg:min-w-[260px] card-glass !p-0 h-full overflow-hidden">
                  {/* ステップ番号バー */}
                  <div
                    className="flex items-center gap-3 px-6 py-3"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.04))"
                          : i === 1
                            ? "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04))"
                            : "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.04))",
                    }}
                  >
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #8b5cf6, #7c3aed)"
                            : i === 1
                              ? "linear-gradient(135deg, #3b82f6, #2563eb)"
                              : "linear-gradient(135deg, #10b981, #059669)",
                      }}
                    >
                      {s.step}
                    </span>
                    <span className="text-sm font-bold text-foreground">{s.title}</span>
                  </div>
                  {/* カード本体 */}
                  <div className="px-6 py-5 flex items-start gap-4">
                    <div
                      className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background:
                          i === 0
                            ? "rgba(139,92,246,0.1)"
                            : i === 1
                              ? "rgba(59,130,246,0.1)"
                              : "rgba(16,185,129,0.1)",
                      }}
                    >
                      <StepIcon
                        size={24}
                        className={
                          i === 0
                            ? "text-violet-500"
                            : i === 1
                              ? "text-blue-500"
                              : "text-emerald-500"
                        }
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{s.desc}</p>
                  </div>
                </div>

                {/* 矢印コネクター（最後のカードの後は非表示） */}
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center py-3 lg:py-0 lg:px-3">
                    {/* モバイル：下向き */}
                    <ChevronRight
                      size={28}
                      className="text-foreground/20 rotate-90 lg:rotate-0"
                    />
                  </div>
                )}
              </AnimatedStaggerItem>
            );
          })}
        </AnimatedStaggerContainer>

        {/* ── キャンセルポリシー ── */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-xs text-muted-foreground bg-muted/50 inline-block px-5 py-2.5 rounded-full border border-black/[0.04]">
              {site.flow.cancelNote}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <button onClick={() => go("#apply")} className="btn-primary-gradient">
              {site.flow.ctaLabel}
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
