import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: site.pages.legal.metaTitle,
};

const items = site.pages.legal.items;

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          {site.pages.legal.backLabel}
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">
          {site.pages.legal.title}
        </h1>
        <p className="text-sm text-muted-foreground mb-10">{site.pages.legal.updated}</p>

        <div className="card-surface overflow-hidden">
          <table className="w-full">
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 bg-muted text-sm text-foreground w-1/3 align-top font-medium">
                    {item.label}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground leading-relaxed">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground mt-8 text-center">
          {site.pages.legal.footer}
        </p>
      </div>
    </main>
  );
}
