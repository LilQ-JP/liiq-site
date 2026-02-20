"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WorksGrid from "@/components/sections/WorksGrid";
import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";

export default function WorksSection() {
  return (
    <section id="works" className="section section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12 sm:mb-14">
          <Badge variant="secondary" className="mb-3 text-sm sm:text-base px-4 py-1.5">制作実績</Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
            制作実績
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            実際に制作した動画をご覧ください。
          </p>
        </AnimatedHeader>

        <WorksGrid />

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/works">
              制作実績一覧を見る
            </Link>
          </Button>
        </div>

        <AnimatedSection>
          <p className="text-center text-sm sm:text-base text-muted-foreground mt-6">
            モニター期間中のため実績数は少ないですが、随時更新します。
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
