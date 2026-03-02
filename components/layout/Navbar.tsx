"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { List, X } from "@phosphor-icons/react";
import { logoPath } from "@/lib/constants";
import site from "@/content/site.json";

const navItems = site.nav.items;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const homeHref = (hash: string) => `/${hash}`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(242,242,240,0.85)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 min-w-0">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoPath} alt="LilQ" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.hash ? (
                <Link
                  key={item.href}
                  href={homeHref(item.href)}
                  className="px-4 py-2 text-[13px] font-medium text-foreground/60 hover:text-foreground rounded-full transition-colors"
                  onClick={(e) => handleHashClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-[13px] font-medium text-foreground/60 hover:text-foreground rounded-full transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href={homeHref("#contact")}
              onClick={(e) => handleHashClick(e, "#contact")}
              style={{
                border: "1.5px solid rgba(0,0,0,0.15)",
                borderRadius: "100px",
                background: "white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                padding: "8px 20px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1a1a1a",
                transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {site.nav.cta.consult}
            </Link>
            <button
              onClick={() => document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary-gradient text-[13px] !py-2 !px-5"
            >
              {site.nav.cta.apply}
            </button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-black/[0.06] shadow-sm"
                aria-label="menu"
              >
                {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 max-w-[85vw] flex flex-col p-0 gap-0 border-0 bg-white/95 backdrop-blur-xl"
            >
              <div className="flex items-center px-6 pt-6 pb-4 pr-14 shrink-0">
                <img src={logoPath} alt="LilQ" className="h-8 w-auto" />
              </div>
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) =>
                    item.hash ? (
                      <Link
                        key={item.href}
                        href={homeHref(item.href)}
                        onClick={(e) => handleHashClick(e, item.href)}
                        className="px-4 py-3.5 text-base font-semibold text-foreground/80 rounded-2xl hover:bg-black/[0.04] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="px-4 py-3.5 text-base font-semibold text-foreground/80 rounded-2xl hover:bg-black/[0.04] transition-colors"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </nav>
              <div className="shrink-0 p-5 space-y-3 border-t border-black/[0.06]">
                <button
                  className="w-full h-12 rounded-full border-[1.5px] border-black/15 bg-white font-semibold text-sm shadow-sm"
                  onClick={() => { document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); }}
                >
                  {site.nav.cta.consult}
                </button>
                <button
                  className="w-full h-12 btn-primary-gradient text-sm"
                  onClick={() => { document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); }}
                >
                  {site.nav.cta.apply}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
