"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Zap, DollarSign, MessageCircle } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const reasonIconMap = { Zap, DollarSign, MessageCircle };
const reasons = site.about.reasons.items.map((item) => ({
  ...item,
  icon: reasonIconMap[item.icon as keyof typeof reasonIconMap] || Zap,
}));

export default function AboutSection() {
  return (
    <section id="services" className="section section-alt section-pattern pattern-dots">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge variant="secondary" className="mb-3">{site.about.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              {site.about.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {site.about.bodyLines[0]}
              <br className="sm:hidden" />
              {site.about.bodyLines[1]}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {site.about.bodyLines2[0]}
              <br className="sm:hidden" />
              {site.about.bodyLines2[1]}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {site.about.tags.map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 card-hover">
            <div className="text-sm text-muted-foreground">{site.about.vision.heading}</div>
            <h3 className="text-xl font-bold text-foreground mt-2">
              {site.about.vision.title}
            </h3>
            <Separator className="my-4" />
            <div className="space-y-4 text-sm">
              {site.about.vision.items.map((item) => (
                <div key={item.label}>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <AnimatedHeader className="text-center mb-10">
            <Badge variant="secondary" className="mb-3">{site.about.reasons.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              {site.about.reasons.title}
            </h2>
          </AnimatedHeader>

          <AnimatedStaggerContainer className="grid lg:grid-cols-3 gap-5">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <AnimatedStaggerItem key={r.title}>
                <div className="card-surface p-6 card-hover h-full">
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {r.desc}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {r.highlight}
                  </Badge>
                </div>
                </AnimatedStaggerItem>
              );
            })}
          </AnimatedStaggerContainer>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
