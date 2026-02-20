"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, X } from "lucide-react";
import { works } from "@/content/works";
import { getYouTubeVideoId, getYouTubeThumbnailUrl } from "@/lib/youtube";
import { AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import site from "@/content/site.json";

export default function WorksGrid({ className = "" }: { className?: string }) {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenVideoId(null);
    };
    if (openVideoId) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [openVideoId]);

  return (
    <>
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
              <div className="relative rounded-xl overflow-hidden border border-border bg-muted aspect-[9/16]">
                {openVideoId === videoId ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenVideoId(null)}
                      className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center shadow-lg"
                      aria-label={site.works.closeAria}
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
                      title={w.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setOpenVideoId(videoId)}
                    className="absolute inset-0 w-full h-full"
                    aria-label={`${w.title}${site.works.playAria}`}
                  >
                    <img
                      src={thumbUrl}
                      alt={w.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors">
                      <div className="w-16 h-11 sm:w-18 sm:h-12 rounded-xl bg-[#ff0000] flex items-center justify-center shadow-xl hover:scale-110 transition-transform pointer-events-none">
                        <svg
                          viewBox="0 0 68 48"
                          aria-hidden="true"
                          className="w-7 h-7 sm:w-8 sm:h-8"
                        >
                          <path
                            d="M66.52 7.02a8 8 0 0 0-5.62-5.66C56.02 0 34 0 34 0S11.98 0 7.1 1.36A8 8 0 0 0 1.48 7.02C0 12 0 24 0 24s0 12 1.48 16.98a8 8 0 0 0 5.62 5.66C11.98 48 34 48 34 48s22.02 0 26.9-1.36a8 8 0 0 0 5.62-5.66C68 36 68 24 68 24s0-12-1.48-16.98z"
                            fill="#FF0000"
                          />
                          <path d="M45 24 27 14v20l18-10z" fill="#fff" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}
              </div>

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
                    {site.works.channelLabel} {w.channel}
                  </p>
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    {site.works.watchLabel} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </AnimatedStaggerItem>
          );
        })}
      </AnimatedStaggerContainer>
    </>
  );
}
