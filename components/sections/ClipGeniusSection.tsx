"use client";

import { Badge } from "@/components/ui/badge";
import { Target, Zap, Clock, Layers } from "lucide-react";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const iconMap = { Target, Zap, Clock, Layers };
const features = site.clipGenius.features.map((f) => ({
  ...f,
  icon: iconMap[f.icon as keyof typeof iconMap] || Target,
}));

export default function ClipGeniusSection() {
  return (
    <section className="section relative overflow-hidden backdrop-blur-2xl bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_0%,#0a0a0a_40%,#1a1a1a_100%)]">

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-10">
          <Badge variant="outline" className="mb-3 border-white/30 bg-white text-black font-bold">
            {site.clipGenius.badge}
          </Badge>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight"
            style={{
              background: "linear-gradient(90deg, #4285F4 0%, #EA4335 33%, #FBBC04 66%, #34A853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {site.clipGenius.title}
          </h2>
          <p className="text-[#c2c2c2] max-w-2xl mx-auto text-sm sm:text-base">
            {site.clipGenius.descriptionLines[0]}
            <br className="sm:hidden" />
            {site.clipGenius.descriptionLines[1]}
            <br className="sm:hidden" />
            {site.clipGenius.descriptionLines[2]}
          </p>
        </AnimatedHeader>

        <AnimatedSection>
        <div
          className="rounded-2xl p-8 bg-[#1a1a1a]"
          style={{
            boxShadow:
              "8px 8px 16px rgba(0,0,0,0.5), -8px -8px 16px rgba(255,255,255,0.05), inset 2px 2px 4px rgba(255,255,255,0.03)",
          }}
        >
          <AnimatedStaggerContainer className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <AnimatedStaggerItem key={f.text}>
                <div
                  className="px-4 py-3 flex items-center gap-3 rounded-xl bg-[#1a1a1a] transition-shadow"
                  style={{
                    boxShadow: "inset 4px 4px 8px rgba(0,0,0,0.4), inset -2px -2px 6px rgba(255,255,255,0.03)",
                  }}
                >
                  <div className="w-9 h-9 rounded-md flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">{f.text}</span>
                </div>
                </AnimatedStaggerItem>
              );
            })}
          </AnimatedStaggerContainer>

          <div className="mt-6 text-center">
            <Badge
              variant="outline"
              className="text-xs font-bold text-white border-transparent bg-transparent"
            >
              {site.clipGenius.comingSoonLabel}
            </Badge>
            <p className="text-xs sm:text-sm text-[#c2c2c2] mt-2">
              {site.clipGenius.comingSoonLines[0]}
              <br className="sm:hidden" />
              {site.clipGenius.comingSoonLines[1]}
            </p>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
