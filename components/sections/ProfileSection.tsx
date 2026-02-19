"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Twitter, Mail, ArrowRight } from "lucide-react";

export default function ProfileSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">代表プロフィール</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            代表プロフィール
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 flex flex-col items-center">
              <div className="card-surface w-52 h-52 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-xl font-semibold text-foreground">
                  MH
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-xs text-muted-foreground">LilQ 代表</div>
                <div className="text-xl font-semibold text-foreground mt-1">宮宅 晴規</div>
                <div className="text-xs text-muted-foreground">Miyake Haruki</div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a
                  href="https://twitter.com/LilQ_officialJP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-foreground/80 hover:text-foreground"
                >
                  <Twitter className="w-4 h-4" />
                  @LilQ_officialJP
                </a>
                <a
                  href="mailto:contact@lilq-official.com"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  <Mail className="w-4 h-4" />
                  contact@lilq-official.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-2xl font-semibold text-foreground mb-4 leading-tight">
                動画編集で、配信者の可能性を広げたい
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p>こんにちは、LilQ代表の宮宅晴規です。</p>
                <p>
                  配信は楽しいのに、編集が追いつかない。そんな声を多く聞いてきました。
                  そこで、プロ品質の動画を気軽に頼める価格で提供したいと考えました。
                </p>
                <p>
                  いまは面白いシーンを効率的に見つけるツールも開発中です。
                  配信者が配信に集中できる世界をつくる。それがLilQの使命です。
                </p>
                <p className="font-medium text-foreground">
                  まずは1本、気軽にご相談ください。
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Adobe Premiere Pro",
                    "3人体制",
                    "2026年開業",
                  ].map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button
                  onClick={() => go("#contact")}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  相談する <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
