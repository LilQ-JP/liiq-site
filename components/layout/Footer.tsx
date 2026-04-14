"use client";

import Link from "next/link";
import { Twitter, Mail } from "lucide-react";
import { logoPath } from "@/lib/constants";
import site from "@/content/site.json";

const navLinks = site.footer.links;

export default function Footer() {
  const homeHref = (hash: string) => `/${hash}`;

  return (
    <footer className="bg-[#FAFAFA] text-zinc-600 border-t border-zinc-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 min-w-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <img src={logoPath} alt="LilQ" className="h-7 sm:h-9 w-auto" />
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 max-w-sm">
              {site.footer.description}
            </p>
            <p className="text-zinc-400 text-[10px] sm:text-xs">{site.footer.tagline}</p>
            <div className="flex items-center gap-3 mt-4 sm:mt-6">
              <a
                href={site.site.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm"
              >
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900" />
              </a>
              <a
                href={`mailto:${site.site.email}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm"
              >
                <Mail size={14} className="text-zinc-600 sm:hidden" />
                <Mail size={16} className="text-zinc-600 hidden sm:block" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 sm:mb-5">{site.footer.menuHeading}</h4>
            <ul className="space-y-2.5 sm:space-y-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href.startsWith("/") ? l.href : homeHref(l.href)}
                    className="text-xs sm:text-sm text-zinc-600 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 sm:mb-5">{site.footer.companyHeading}</h4>
            <ul className="space-y-2.5 sm:space-y-4 text-xs sm:text-sm text-zinc-600">
              {site.footer.companyInfo.map((line) => {
                const emailMatch = line.match(/[\w.+-]+@[\w.-]+/);
                return (
                  <li key={line} className="break-all sm:break-normal">
                    {emailMatch ? (
                      <a href={`mailto:${emailMatch[0]}`} className="hover:text-blue-600 transition-colors duration-200">{line}</a>
                    ) : (
                      line
                    )}
                  </li>
                );
              })}
              <li className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                <div>
                  <Link href="/legal" className="text-[10px] sm:text-xs text-zinc-400 hover:text-zinc-900 transition-colors duration-200">
                    {site.footer.legalLabel}
                  </Link>
                </div>
                <div>
                  <Link href="/privacy-policy" className="text-[10px] sm:text-xs text-zinc-400 hover:text-zinc-900 transition-colors duration-200">
                    {site.footer.privacyLabel}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-zinc-400 font-medium">
            {site.footer.copyright.replace("{{year}}", String(new Date().getFullYear()))}
          </p>
          <p className="text-[10px] sm:text-xs text-zinc-400 font-medium tracking-widest uppercase">{site.footer.subline}</p>
        </div>
      </div>
    </footer>
  );
}
