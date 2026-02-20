"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { logoPath } from "@/lib/constants";

const navItems = [
  { label: "サービス", href: "#services", hash: true },
  { label: "料金", href: "#pricing", hash: true },
  { label: "実績", href: "#works", hash: true },
  { label: "ニュース", href: "#news", hash: true },
  { label: "FAQ", href: "#faq", hash: true },
  { label: "お問い合わせ", href: "#contact", hash: true },
];

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
    // 他ページにいる場合はデフォルトのナビゲーション（/#hash へ）に任せる
  };

  const homeHref = (hash: string) => `/${hash}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-background/95 border-b border-border"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 min-[480px]:px-5 sm:px-8 min-w-0">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={logoPath}
              alt="LilQ"
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.hash ? (
                <Link
                  key={item.href}
                  href={homeHref(item.href)}
                  className="px-3 py-2 text-sm font-medium text-black/70 hover:text-black rounded-full transition-colors"
                  onClick={(e) => handleHashClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-black/70 hover:text-black rounded-full transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" asChild className="rounded-full">
              <Link href={homeHref("#contact")} onClick={(e) => handleHashClick(e, "#contact")}>
                まずは相談
              </Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link href={homeHref("#apply")} onClick={(e) => handleHashClick(e, "#apply")}>
                無料で依頼する
              </Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/[0.08] backdrop-blur-md border-white/20 hover:bg-white/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                aria-label="menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 max-w-[85vw] flex flex-col p-0 gap-0 rounded-l-3xl border-0 bg-white/[0.14] backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.2),-8px_0_32px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center px-6 pt-6 pb-5 pr-14 shrink-0">
                <img src={logoPath} alt="LilQ" className="h-8 w-auto" />
              </div>
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) =>
                    item.hash ? (
                      <Link
                        key={item.href}
                        href={homeHref(item.href)}
                        onClick={(e) => handleHashClick(e, item.href)}
                        className="px-4 py-3.5 text-base font-semibold text-foreground rounded-2xl hover:bg-white/15 active:bg-white/20 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="px-4 py-3.5 text-base font-semibold text-foreground rounded-2xl hover:bg-white/15 active:bg-white/20 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </nav>
              <div className="shrink-0 p-5 pt-4 pb-8 space-y-3 bg-black/[0.06] rounded-tl-3xl">
                <Button variant="outline" asChild className="rounded-2xl w-full h-12 border-white/25 bg-white/5 hover:bg-white/15 font-semibold">
                  <Link href={homeHref("#contact")} onClick={(e) => handleHashClick(e, "#contact")}>
                    まずは相談
                  </Link>
                </Button>
                <Button asChild className="rounded-2xl w-full h-12 font-semibold shadow-lg">
                  <Link href={homeHref("#apply")} onClick={(e) => handleHashClick(e, "#apply")}>
                    無料で依頼する
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
