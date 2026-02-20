"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WorksGrid from "@/components/sections/WorksGrid";
import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";
import site from "@/content/site.json";

export default function WorksSection() {
  return (
    <section id="works" className="section section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12 sm:mb-14">
          <Badge variant="secondary" className="mb-3 text-sm sm:text-base px-4 py-1.5">{site.works.badge}</Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
            {site.works.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {site.works.description}
          </p>
        </AnimatedHeader>

        <WorksGrid />

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/works">
              {site.works.buttonLabel}
            </Link>
          </Button>
        </div>

        <AnimatedSection>
          <p className="text-center text-sm sm:text-base text-muted-foreground mt-6">
            {site.works.note}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
