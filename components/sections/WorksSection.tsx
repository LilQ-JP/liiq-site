"use client";

import Link from "next/link";
import WorksGrid from "@/components/sections/WorksGrid";
import { AnimatedSection } from "@/components/ui/animated-section";
import site from "@/content/site.json";

export default function WorksSection() {
  return (
    <section id="works" className="section-forma section-alt" >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-14">
            <span className="label-sm mb-3 block">{site.works.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">{site.works.title}</h2>
            <p className="text-muted-foreground">{site.works.description}</p>
          </div>
        </AnimatedSection>

        <WorksGrid />

        <div className="mt-10 flex justify-center">
          <Link href="/works" className="btn-secondary-glass">{site.works.buttonLabel}</Link>
        </div>

        <AnimatedSection>
          <p className="text-center text-sm text-muted-foreground mt-6">{site.works.note}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
