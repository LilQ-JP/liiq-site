"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { news } from "@/content/news";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}.${m}.${d}`;
}

export default function NewsSection() {
  const displayNews = news.slice(0, 5);

  return (
    <section id="news" className="section section-base">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">ニュース</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            お知らせ
          </h2>
          <p className="text-muted-foreground">
            最新のニュースやお知らせをお届けします。
          </p>
        </AnimatedHeader>

        <AnimatedStaggerContainer>
          {displayNews.length > 0 ? (
            <div className="space-y-3 mb-8">
              {displayNews.map((item, i) => (
                <AnimatedStaggerItem key={i}>
                  <Link
                    href={item.href || "/news"}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className="card-surface p-4 flex items-center gap-4 hover:border-primary/30 transition-colors group"
                  >
                    <time
                      dateTime={item.date}
                      className="text-xs text-muted-foreground shrink-0 w-20"
                    >
                      {formatDate(item.date)}
                    </time>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate sm:whitespace-normal">
                        {item.title}
                      </p>
                      {item.body && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1 hidden sm:block">
                          {item.body}
                        </p>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  </Link>
                </AnimatedStaggerItem>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12 mb-8">
              お知らせはまだありません。
            </p>
          )}

          <AnimatedSection>
            <div className="text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                ニュース一覧を見る
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
