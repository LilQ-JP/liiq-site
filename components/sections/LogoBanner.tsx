"use client";

import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import { Users, Lightning } from "@phosphor-icons/react";
import site from "@/content/site.json";

const clients = site.logoBanner.clients;
const genres = site.logoBanner.genres;
const features = site.logoBanner.features;

export default function LogoBanner() {
  return (
    <section className="py-10 sm:py-14" style={{ background: "#F2F2F0" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="card-glass !p-8 sm:!p-10">
            <h3 className="text-center text-base font-bold text-foreground mb-8">
              {site.logoBanner.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="label-sm mb-3 flex items-center gap-2">
                  <Users size={14} weight="bold" />
                  {site.logoBanner.clientsLabel}
                </div>
                <AnimatedStaggerContainer className="flex flex-wrap gap-2">
                  {clients.map((c) => (
                    <AnimatedStaggerItem key={c}>
                      <span className="tag-chip text-xs">{c}</span>
                    </AnimatedStaggerItem>
                  ))}
                </AnimatedStaggerContainer>
              </div>

              <div>
                <div className="label-sm mb-3 flex items-center gap-2">
                  <Lightning size={14} weight="bold" />
                  {site.logoBanner.genresLabel}
                </div>
                <AnimatedStaggerContainer className="flex flex-wrap gap-2" delayIndex={1}>
                  {genres.map((g) => (
                    <AnimatedStaggerItem key={g}>
                      <span className="tag-chip text-xs">{g}</span>
                    </AnimatedStaggerItem>
                  ))}
                </AnimatedStaggerContainer>
              </div>

              <div>
                <div className="label-sm mb-3">{site.logoBanner.featuresLabel}</div>
                <AnimatedStaggerContainer className="flex flex-wrap gap-2" delayIndex={2}>
                  {features.map((f) => (
                    <AnimatedStaggerItem key={f}>
                      <span className="tag-dark text-xs">{f}</span>
                    </AnimatedStaggerItem>
                  ))}
                </AnimatedStaggerContainer>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
