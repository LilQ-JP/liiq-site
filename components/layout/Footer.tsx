"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { XLogo } from "@/components/ui/x-logo";
import { logoPath } from "@/lib/constants";
import site from "@/content/site.json";

const navLinks = site.footer.links;

export default function Footer() {
  const homeHref = (hash: string) => `/${hash}`;

  return (
    <footer className="border-t border-border bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 min-[480px]:px-5 sm:px-8 py-14 min-w-0">
        <div className="grid lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoPath}
                alt="LilQ"
                className="h-9 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3 max-w-sm">
              {site.footer.description}
            </p>
            <p className="text-xs text-muted-foreground">
              {site.footer.tagline}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={site.site.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <XLogo className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${site.site.email}`}
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{site.footer.menuHeading}</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href.startsWith("/") ? l.href : homeHref(l.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{site.footer.companyHeading}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {site.footer.companyInfo.map((line) => {
                const emailMatch = line.match(/[\\w.+-]+@[\\w.-]+/);
                return (
                  <li key={line}>
                    {emailMatch ? (
                      <a
                        href={`mailto:${emailMatch[0]}`}
                        className="hover:text-foreground transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </li>
                );
              })}
              <li className="pt-3 space-y-2">
                <div>
                  <Link href="/legal" className="text-xs text-muted-foreground hover:text-foreground underline">
                    {site.footer.legalLabel}
                  </Link>
                </div>
                <div>
                  <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground underline">
                    {site.footer.privacyLabel}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {site.footer.copyright.replace("{{year}}", String(new Date().getFullYear()))}
          </p>
          <p className="text-xs text-muted-foreground">{site.footer.subline}</p>
        </div>
      </div>
    </footer>
  );
}
