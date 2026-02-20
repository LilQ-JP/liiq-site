import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorksGrid from "@/components/sections/WorksGrid";
import { Badge } from "@/components/ui/badge";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: site.pages.works.metaTitle,
  description: site.pages.works.metaDescription,
};

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {site.pages.works.backLabel}
          </Link>

          <div className="text-center mb-12 sm:mb-14">
            <Badge variant="secondary" className="mb-3 text-sm sm:text-base px-4 py-1.5">{site.pages.works.badge}</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
              {site.pages.works.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              {site.pages.works.description}
            </p>
          </div>

          <WorksGrid />

          <p className="text-center text-sm sm:text-base text-muted-foreground mt-8">
            {site.pages.works.note}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
