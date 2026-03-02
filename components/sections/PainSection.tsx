"use client";

import { Clock, PencilSimple, TrendDown, Wallet } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const iconMap = { Clock, PenSquare: PencilSimple, TrendingDown: TrendDown, Wallet };
const pains = site.pain.items.map((item) => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap] || Clock,
}));

export default function PainSection() {
  return (
    <section className="section-forma section-alt" >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-14">
            <span className="label-sm mb-3 block">{site.pain.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">
              {site.pain.titleLines[0]}
              <br className="hidden sm:block" />
              {site.pain.titleLines[1]}
            </h2>
            <p className="text-muted-foreground mt-3">{site.pain.description}</p>
          </div>
        </AnimatedSection>

        <AnimatedStaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <AnimatedStaggerItem key={p.title}>
                <div className="card-glass p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center mb-4">
                    <Icon size={20} weight="duotone" className="text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-[15px]">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedStaggerItem>
            );
          })}
        </AnimatedStaggerContainer>

        <AnimatedSection className="mt-10">
          <div className="card-glass text-center !p-6">
            <p className="text-sm text-muted-foreground">{site.pain.callout.lead}</p>
            <p className="text-xl sm:text-2xl font-bold text-foreground mt-1">{site.pain.callout.headline}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
