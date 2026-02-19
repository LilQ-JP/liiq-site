"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { works } from "@/content/works";

export default function WorksSection() {
  return (
    <section id="works" className="section section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">制作実績</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            制作実績
          </h2>
          <p className="text-muted-foreground">
            実際に制作した動画をご覧ください。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((w) => (
            <div key={w.youtubeId} className="card-surface p-4 card-hover group">
              <a
                href={`https://www.youtube.com/shorts/${w.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative rounded-lg overflow-hidden border border-border bg-muted aspect-[9/16]">
                  <img
                    src={`https://i.ytimg.com/vi/${w.youtubeId}/hqdefault.jpg`}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
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
                <h3 className="font-semibold text-foreground leading-snug">
                  {w.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  チャンネル: {w.channel}
                </p>
                <a
                  href={`https://www.youtube.com/shorts/${w.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  YouTubeで見る <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          モニター期間中のため実績数は少ないですが、随時更新します。
        </p>
      </div>
    </section>
  );
}
