"use client";

import { EnvelopeSimple, ArrowRight } from "@phosphor-icons/react";
import { XLogo } from "@/components/ui/x-logo";
import { AnimatedSection } from "@/components/ui/animated-section";
import site from "@/content/site.json";

export default function ProfileSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-forma" style={{ background: "#F2F2F0" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="label-sm mb-3 block">{site.profile.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground">{site.profile.title}</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <div className="card-glass !p-8 sm:!p-10">
              <div className="grid lg:grid-cols-5 gap-10 items-start">
                <div className="lg:col-span-2 flex flex-col items-center">
                  <div className="w-44 h-44 rounded-3xl bg-[#f5f5f5] border border-black/[0.06] flex items-center justify-center">
                    <span className="text-3xl font-extrabold text-foreground">{site.profile.initials}</span>
                  </div>
                  <div className="text-center mt-4">
                    <div className="label-sm mb-1">{site.profile.roleLabel}</div>
                    <div className="text-xl font-bold text-foreground">{site.profile.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{site.profile.nameRoman}</div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <a href={site.site.twitterUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-foreground/70 hover:text-foreground">
                      <XLogo className="w-4 h-4" />
                      {site.site.twitterHandle}
                    </a>
                    <a href={`mailto:${site.site.email}`} className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
                      <EnvelopeSimple size={16} weight="bold" />
                      {site.site.email}
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold text-foreground mb-5 leading-tight">
                    {site.profile.headlineLines[0]}
                    <br className="hidden sm:block" />
                    {site.profile.headlineLines[1]}
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                    <p>{site.profile.paragraphs[0]}</p>
                    <p>{site.profile.paragraphs[1]}</p>
                    <p>{site.profile.paragraphs[2]}</p>
                    <p className="font-semibold text-foreground">{site.profile.paragraphs[3]}</p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-border">
                    <button onClick={() => go("#contact")} className="btn-secondary-glass text-sm">
                      {site.profile.ctaLabel} <ArrowRight size={14} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
