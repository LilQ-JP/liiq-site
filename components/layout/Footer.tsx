"use client";

import Link from "next/link";
import { Twitter, Mail } from "lucide-react";
import { logoPath } from "@/lib/constants";

const navLinks = [
  { label: "サービス", href: "#services" },
  { label: "料金プラン", href: "#pricing" },
  { label: "制作実績", href: "#works" },
  { label: "ニュース", href: "/news" },
  { label: "よくある質問", href: "#faq" },
  { label: "お申し込み", href: "#apply" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  const homeHref = (hash: string) => `/${hash}`;

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
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
              VTuber・ゲーム実況者・雑談配信者のための動画編集・切り抜きサービス。
              500円からプロ品質の動画制作。
            </p>
            <p className="text-xs text-muted-foreground">
              すべてのクリエイターの「伝えたい」を、技術の力で形にする。
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://twitter.com/LilQ_officialJP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@lilq-official.com"
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">メニュー</h4>
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
            <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>屋号: LilQ（リルク）</li>
              <li>代表: 宮宅 晴規</li>
              <li>
                <a
                  href="mailto:contact@lilq-official.com"
                  className="hover:text-foreground transition-colors"
                >
                  contact@lilq-official.com
                </a>
              </li>
              <li className="pt-3 space-y-2">
                <div>
                  <Link href="/legal" className="text-xs text-muted-foreground hover:text-foreground underline">
                    特定商取引法に基づく表記
                  </Link>
                </div>
                <div>
                  <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground underline">
                    プライバシーポリシー
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} LilQ（リルク）. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Designed for creators</p>
        </div>
      </div>
    </footer>
  );
}
