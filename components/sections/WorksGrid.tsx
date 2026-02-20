"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import { works } from "@/content/works";
import { getYouTubeVideoId, getYouTubeThumbnailUrl } from "@/lib/youtube";
import { AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

export default function WorksGrid({ className = "" }: { className?: string }) {
  return (
    <AnimatedStaggerContainer
      className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", className)}
    >
      {works.map((w) => {
        const videoId = getYouTubeVideoId(w.url);
        if (!videoId) return null;
        const thumbUrl = getYouTubeThumbnailUrl(videoId);
        return (
          <AnimatedStaggerItem key={videoId}>
            <div className="card-surface p-4 sm:p-5 card-hover group h-full flex flex-col">
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative rounded-xl overflow-hidden border border-border bg-muted aspect-[9/16]">
                  <img
                    src={thumbUrl}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-red-600 flex items-center justify-center shadow-xl hover:scale-110 transition-transform pointer-events-none">
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
              </a>

              <div className="mt-4 space-y-2.5">
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <Badge
                      key={t}
                      className="text-xs bg-black text-white border border-black/10 px-2 py-0.5"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                  {w.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  チャンネル: {w.channel}
                </p>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  YouTubeで見る <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </AnimatedStaggerItem>
        );
      })}
    </AnimatedStaggerContainer>
  );
}
