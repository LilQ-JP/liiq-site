"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowRight } from "lucide-react";
import { XLogo } from "@/components/ui/x-logo";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

export default function ProfileSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">{site.profile.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            {site.profile.title}
          </h2>
        </AnimatedHeader>

        <AnimatedSection>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 flex flex-col items-center">
              <div className="card-surface w-52 h-52 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-xl font-bold text-foreground">
                  {site.profile.initials}
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-xs text-muted-foreground">{site.profile.roleLabel}</div>
                <div className="text-xl font-bold text-foreground mt-1">{site.profile.name}</div>
                <div className="text-xs text-muted-foreground">{site.profile.nameRoman}</div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a
                  href={site.site.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-foreground/80 hover:text-foreground"
                >
                  <XLogo className="w-4 h-4 text-foreground" />
                  {site.site.twitterHandle}
                </a>
                <a
                  href={`mailto:${site.site.email}`}
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  <Mail className="w-4 h-4" />
                  {site.site.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                {site.profile.headlineLines[0]}
                <br className="sm:hidden" />
                {site.profile.headlineLines[1]}
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p>{site.profile.paragraphs[0]}</p>
                <p>{site.profile.paragraphs[1]}</p>
                <p>{site.profile.paragraphs[2]}</p>
                <p className="font-semibold text-foreground">{site.profile.paragraphs[3]}</p>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex justify-start">
                <Button
                  onClick={() => go("#contact")}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  {site.profile.ctaLabel} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
