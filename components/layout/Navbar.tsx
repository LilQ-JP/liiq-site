"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "サービス", href: "#services" },
  { label: "料金", href: "#pricing" },
  { label: "実績", href: "#works" },
  { label: "ニュース", href: "/news" },
  { label: "FAQ", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-white/80 backdrop-blur border-b border-white/60"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/lilq-logo.png"
              alt="LilQ"
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-black/70 hover:text-black rounded-full transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="px-3 py-2 text-sm font-medium text-black/70 hover:text-black rounded-full transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" onClick={() => go("#contact")} className="rounded-full">
              まずは相談
            </Button>
            <Button onClick={() => go("#apply")} className="rounded-full">
              無料で依頼する
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full" aria-label="menu">
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex items-center gap-3 pt-4 pb-6 border-b border-border">
                <img
                  src="/lilq-logo.png"
                  alt="LilQ"
                  className="h-7 w-auto"
                />
              </div>
              <div className="flex flex-col gap-1 pt-4">
                {navItems.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.href}
                      onClick={() => go(item.href)}
                      className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </button>
                  )
                )}
                <div className="pt-4 flex flex-col gap-2">
                  <Button variant="outline" onClick={() => go("#contact")} className="rounded-full">
                    まずは相談
                  </Button>
                  <Button onClick={() => go("#apply")} className="rounded-full">
                    無料で依頼する
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
