"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import { works } from "@/content/works";
import { getYouTubeVideoId, getYouTubeThumbnailUrl } from "@/lib/youtube";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

export default function WorksSection() {
  return (
    <section id="works" className="section section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">制作実績</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            制作実績
          </h2>
          <p className="text-muted-foreground">
            実際に制作した動画をご覧ください。
          </p>
        </AnimatedHeader>

        <AnimatedStaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((w) => {
            const videoId = getYouTubeVideoId(w.url);
            if (!videoId) return null;
            const thumbUrl = getYouTubeThumbnailUrl(videoId);
            return (
            <AnimatedStaggerItem key={videoId}>
            <div className="card-surface p-4 card-hover group h-full">
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative rounded-lg overflow-hidden border border-border bg-muted aspect-[9/16]">
                  <img
                    src={thumbUrl}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-xl hover:scale-110 transition-transform pointer-events-none">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
              </a>

              <div className="mt-4 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <Badge key={t} className="text-xs bg-black text-white border border-black/10">
                      {t}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-bold text-foreground leading-snug">
                  {w.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  チャンネル: {w.channel}
                </p>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  YouTubeで見る <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            </AnimatedStaggerItem>
          );
          })}
        </AnimatedStaggerContainer>

        <AnimatedSection>
        <p className="text-center text-xs text-muted-foreground mt-8">
          モニター期間中のため実績数は少ないですが、随時更新します。
        </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
