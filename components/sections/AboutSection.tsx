"use client";

import { Separator } from "@/components/ui/separator";
import { Zap, JapaneseYen, MessageCircle } from "lucide-react";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const reasonIconMap = { Zap: Zap, JapaneseYen: JapaneseYen, MessageCircle: MessageCircle };
const reasons = site.about.reasons.items.map((item) => ({
  ...item,
  icon: reasonIconMap[item.icon as keyof typeof reasonIconMap] || Zap,
}));

export default function AboutSection() {
  return (
    <section id="services" className="section-forma section-base" >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <div>
              <span className="label-sm mb-3 block">{site.about.badge}</span>
              <h2 className="text-3xl sm:text-4xl text-foreground mb-5">{site.about.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontSize: "1.05rem" }}>
                {site.about.bodyLines[0]}
                <br className="hidden sm:block" />
                {site.about.bodyLines[1]}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {site.about.bodyLines2[0]}
                <br className="hidden sm:block" />
                {site.about.bodyLines2[1]}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {site.about.tags.map((t) => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>
            </div>

            <div className="card-glass !p-8">
              <div className="label-sm mb-2">{site.about.vision.heading}</div>
              <h3 className="text-xl font-bold text-foreground mt-1">{site.about.vision.title}</h3>
              <Separator className="my-5" />
              <div className="space-y-4 text-sm">
                {site.about.vision.items.map((item) => (
                  <div key={item.label}>
                    <div className="label-sm mb-1">{item.label}</div>
                    <div className="font-semibold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 選ばれる理由 */}
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-12">
            <span className="label-sm mb-3 block">{site.about.reasons.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground">{site.about.reasons.title}</h2>
          </div>
        </AnimatedSection>

        <AnimatedStaggerContainer className="grid lg:grid-cols-3 gap-4">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <AnimatedStaggerItem key={r.title}>
                <div className="card-glass !p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5f5] flex items-center justify-center mb-5">
                    <Icon size={28} className="text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{r.desc}</p>
                  <span className="tag-chip text-xs">{r.highlight}</span>
                </div>
              </AnimatedStaggerItem>
            );
          })}
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
