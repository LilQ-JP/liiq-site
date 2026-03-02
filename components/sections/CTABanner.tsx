"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import site from "@/content/site.json";

export default function CTABanner() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-forma" style={{ background: "#F2F2F0" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div
            className="px-8 sm:px-14 py-14 sm:py-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #111827 0%, #0a0f1a 100%)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.2), 0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/[0.08] rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <span className="badge-hero mb-5 inline-flex">{site.cta.badge}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {site.cta.titleLines[0]}
                <br className="hidden sm:block" />
                {site.cta.titleLines[1]}
              </h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">
                {site.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => go("#apply")} className="btn-primary-gradient !bg-white !text-[#0a0a0a] !border-white/20 hover:!bg-white/90">
                  {site.cta.primaryLabel}
                </button>
                <button
                  onClick={() => go("#contact")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[15px] font-semibold rounded-full bg-white/[0.06] text-white border border-white/[0.12] hover:bg-white/[0.12] transition-all"
                >
                  {site.cta.secondaryLabel}
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-7 text-xs text-white/30 font-medium">
                <span>{site.cta.bullets[0]}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{site.cta.bullets[1]}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{site.cta.bullets[2]}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
