"use client";

import { Crosshair, Lightning, Clock, Stack } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const iconMap = { Target: Crosshair, Zap: Lightning, Clock, Layers: Stack };
const features = site.clipGenius.features.map((f) => ({
  ...f,
  icon: iconMap[f.icon as keyof typeof iconMap] || Crosshair,
}));

export default function ClipGeniusSection() {
  return (
    <section
      className="section-forma relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="badge-hero mb-5 inline-flex">{site.clipGenius.badge}</span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                background: "linear-gradient(90deg, #4285F4 0%, #EA4335 33%, #FBBC04 66%, #34A853 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {site.clipGenius.title}
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm">
              {site.clipGenius.descriptionLines[0]}
              <br className="hidden sm:block" />
              {site.clipGenius.descriptionLines[1]}
              <br className="hidden sm:block" />
              {site.clipGenius.descriptionLines[2]}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="card-dark-premium !p-8">
            <AnimatedStaggerContainer className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <AnimatedStaggerItem key={f.text}>
                    <div
                      className="px-5 py-4 flex items-center gap-4 transition-colors hover:bg-white/[0.06]"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                      }}
                    >
                      <Icon size={20} weight="duotone" className="text-white shrink-0" />
                      <span className="text-sm text-white/70 font-medium">{f.text}</span>
                    </div>
                  </AnimatedStaggerItem>
                );
              })}
            </AnimatedStaggerContainer>

            <div className="mt-8 text-center">
              <span className="tag-chip text-xs !bg-white/[0.06] !border-white/[0.08] !text-white/40">
                {site.clipGenius.comingSoonLabel}
              </span>
              <p className="text-xs text-white/25 mt-3">
                {site.clipGenius.comingSoonLines[0]}
                <br className="hidden sm:block" />
                {site.clipGenius.comingSoonLines[1]}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
