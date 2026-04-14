"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, X, ChevronRight } from "lucide-react";
import { logoPath, logoPathDark } from "@/lib/constants";
import site from "@/content/site.json";

const navItems = site.nav.items;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let ticking = false;
    const h = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 32);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", h, { passive: true });
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
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <header
        className={`pointer-events-auto flex items-center transition-all duration-700 ease-premium max-w-[calc(100vw-32px)] ${
          scrolled 
            ? "gap-2 sm:gap-4 px-3 sm:px-4 py-2 bg-zinc-950/80 rounded-full border-zinc-800/50 shadow-2xl backdrop-blur-2xl" 
            : "gap-2 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 bg-white/60 rounded-full border-zinc-200 shadow-xl backdrop-blur-xl"
        } border ring-1 ring-white/10`}
        style={{
          width: scrolled ? "auto" : "min(1200px, 100%)",
        }}
      >
        <div className="flex items-center gap-2 sm:gap-6 w-full min-w-0">
          <Link href="/" className="flex items-center shrink-0">
            {/*
              【画像差し替えガイド: ロゴ画像】
              - 実体ファイル: `public/lilq-logo.png` (通常時/白背景用) および `public/lilq-logo-dark.png` (スクロール時/黒背景用)
              - 推奨フォーマット：SVG または 高画質PNG
              - 推奨サイズ：高さを基準に表示されるため、横幅は自動で調整されます。
            */}
            <img 
              src={scrolled ? logoPathDark : logoPath} 
              alt="LilQ" 
              className={`transition-all duration-700 ${scrolled ? "h-5 sm:h-6" : "h-6 sm:h-8"}`} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => {
              return item.hash ? (
                <Link
                  key={item.href}
                  href={homeHref(item.href)}
                  className={`px-4 py-2 text-sm font-bold transition-all duration-500 rounded-full ${
                    scrolled 
                      ? "text-zinc-400 hover:text-white" 
                      : "text-zinc-500 hover:text-zinc-950"
                  }`}
                  onClick={(e) => handleHashClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-bold transition-all duration-500 rounded-full ${
                    scrolled 
                      ? "text-zinc-400 hover:text-white" 
                      : "text-zinc-500 hover:text-zinc-950"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
            <button
              onClick={() => window.open("https://twitter.com/LilQ_officialJP", "_blank")}
              className={`relative overflow-hidden group transition-all duration-500 font-bold px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-sm whitespace-nowrap ${
                scrolled 
                  ? "bg-white text-zinc-950 hover:bg-zinc-100" 
                  : "bg-zinc-950 text-white hover:bg-zinc-800"
              }`}
            >
              <span className="sm:hidden">相談する</span>
              <span className="hidden sm:inline">{site.nav.cta.apply}</span>
            </button>

            {/* Mobile Menu Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className={`md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-700 ${
                    scrolled ? "bg-white text-zinc-950" : "bg-zinc-100 text-zinc-500"
                  }`}
                  aria-label="menu"
                >
                  {open ? <X size={18} strokeWidth={3} /> : <Menu size={18} strokeWidth={3} />}
                </button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full h-fit flex flex-col p-6 gap-6 border-b border-zinc-200 bg-white/95 backdrop-blur-3xl rounded-b-[2rem] pt-24"
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation links for LilQ website
                </SheetDescription>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.hash ? homeHref(item.href) : item.href}
                      onClick={(e) => {
                        if (item.hash) handleHashClick(e, item.href);
                        else setOpen(false);
                      }}
                      className="px-5 py-3.5 text-xl font-black text-zinc-950 rounded-2xl hover:bg-zinc-100 transition-all flex items-center justify-between group"
                    >
                      {item.label}
                      <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all">
                        <ChevronRight size={14} strokeWidth={3} />
                      </div>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
