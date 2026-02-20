import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: site.pages.privacy.metaTitle,
};

const sections = site.pages.privacy.sections;

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          {site.pages.privacy.backLabel}
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">
          {site.pages.privacy.title}
        </h1>
        <p className="text-sm text-muted-foreground mb-10">{site.pages.privacy.updated}</p>

        <div className="card-surface p-8 space-y-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {site.pages.privacy.intro}
          </p>

          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-base font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-8 text-center">
          {site.pages.privacy.footer.replace(\"{{year}}\", String(new Date().getFullYear()))}
        </p>
      </div>
    </main>
  );
}
