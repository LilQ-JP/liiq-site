"use client";

import { Badge } from "@/components/ui/badge";
import { Clock, PenSquare, TrendingDown, Wallet } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const iconMap = { Clock, PenSquare, TrendingDown, Wallet };
const pains = site.pain.items.map((item) => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap] || Clock,
}));

export default function PainSection() {
  return (
    <section className="section section-base pain-section-pattern">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">
            {site.pain.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            {site.pain.titleLines[0]}
            <br className="sm:hidden" />
            {site.pain.titleLines[1]}
          </h2>
          <p className="text-muted-foreground mt-3">
            {site.pain.description}
          </p>
        </AnimatedHeader>

        <AnimatedStaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <AnimatedStaggerItem key={p.title}>
              <div className="card-surface p-5 card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
              </AnimatedStaggerItem>
            );
          })}
        </AnimatedStaggerContainer>

        <AnimatedSection className="mt-12">
        <div className="card-soft px-6 py-5 text-center">
          <p className="text-sm text-muted-foreground">{site.pain.callout.lead}</p>
          <p className="text-xl sm:text-2xl font-bold text-foreground mt-2">
            {site.pain.callout.headline}
          </p>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
