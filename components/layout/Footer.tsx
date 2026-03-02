"use client";

import Link from "next/link";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { XLogo } from "@/components/ui/x-logo";
import { logoPath } from "@/lib/constants";
import site from "@/content/site.json";

const navLinks = site.footer.links;

export default function Footer() {
  const homeHref = (hash: string) => `/${hash}`;

  return (
    <footer
      style={{
        background: "#0a0a0a",
        color: "rgba(255,255,255,0.7)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 py-16 min-w-0">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoPath} alt="LilQ" className="h-9 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-3 max-w-sm">
              {site.footer.description}
            </p>
            <p className="text-white/30 text-xs">{site.footer.tagline}</p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={site.site.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/[0.06] transition-colors"
              >
                <XLogo className="w-4 h-4 text-white/60" />
              </a>
              <a
                href={`mailto:${site.site.email}`}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/[0.06] transition-colors"
              >
                <EnvelopeSimple size={16} weight="bold" className="text-white/60" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="label-sm text-white/40 mb-4">{site.footer.menuHeading}</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href.startsWith("/") ? l.href : homeHref(l.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-sm text-white/40 mb-4">{site.footer.companyHeading}</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {site.footer.companyInfo.map((line) => {
                const emailMatch = line.match(/[\w.+-]+@[\w.-]+/);
                return (
                  <li key={line}>
                    {emailMatch ? (
                      <a href={`mailto:${emailMatch[0]}`} className="hover:text-white transition-colors duration-200">{line}</a>
                    ) : (
                      line
                    )}
                  </li>
                );
              })}
              <li className="pt-3 space-y-2">
                <div>
                  <Link href="/legal" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
                    {site.footer.legalLabel}
                  </Link>
                </div>
                <div>
                  <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
                    {site.footer.privacyLabel}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            {site.footer.copyright.replace("{{year}}", String(new Date().getFullYear()))}
          </p>
          <p className="text-xs text-white/30">{site.footer.subline}</p>
        </div>
      </div>
    </footer>
  );
}
