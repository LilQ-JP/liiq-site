"use client";

import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
import { news } from "@/content/news";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}.${m}.${d}`;
}

export default function NewsSection() {
  const displayNews = news.slice(0, 5);

  return (
    <section id="news" className="section-forma section-base" >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="label-sm mb-3 block">{site.news.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">{site.news.title}</h2>
            <p className="text-muted-foreground">{site.news.description}</p>
          </div>
        </AnimatedSection>

        <AnimatedStaggerContainer>
          {displayNews.length > 0 ? (
            <div className="space-y-2 mb-8">
              {displayNews.map((item, i) => (
                <AnimatedStaggerItem key={i}>
                  <Link
                    href={item.href || "/news"}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className="card-glass !p-4 flex items-center gap-4 group !rounded-2xl"
                  >
                    <time dateTime={item.date} className="text-xs text-muted-foreground shrink-0 w-20 font-medium">
                      {formatDate(item.date)}
                    </time>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground group-hover:text-foreground/70 transition-colors truncate sm:whitespace-normal text-sm">
                        {item.title}
                      </p>
                      {item.body && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1 hidden sm:block">{item.body}</p>
                      )}
                    </div>
                    <CaretRight size={16} weight="bold" className="text-muted-foreground shrink-0" />
                  </Link>
                </AnimatedStaggerItem>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12 mb-8">{site.news.empty}</p>
          )}

          <AnimatedSection>
            <div className="text-center">
              <Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">
                {site.news.more} <CaretRight size={14} weight="bold" />
              </Link>
            </div>
          </AnimatedSection>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
