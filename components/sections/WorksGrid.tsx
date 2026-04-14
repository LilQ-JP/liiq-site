"use client";

import React, { useEffect, useState } from "react";
import { X, Play } from "lucide-react";
import { works } from "@/content/works";
import { getYouTubeVideoId, getYouTubeThumbnailUrl } from "@/lib/youtube";
import { motion, AnimatePresence } from "framer-motion";
import site from "@/content/site.json";

export default function WorksGrid({ className = "" }: { className?: string }) {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);
  const [filter, setFilter] = useState("すべて");

  const allTags = Array.from(new Set(works.flatMap(w => w.tags)));
  const filters = ["すべて", ...allTags];

  const filteredWorks = filter === "すべて" 
    ? works 
    : works.filter(w => w.tags.includes(filter));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenVideoId(null);
    };
    if (openVideoId) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "unset";
      };
    }
  }, [openVideoId]);

  return (
    <div className={className}>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16 px-2 sm:px-4">
        <div className="p-1 sm:p-1.5 bg-zinc-100/80 rounded-full border border-zinc-200/50 flex flex-wrap gap-1 shadow-inner">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-500 ${
                filter === f
                  ? "bg-zinc-950 text-white shadow-lg"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-white/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((w) => {
            const videoId = getYouTubeVideoId(w.url);
            if (!videoId) return null;
            const thumbUrl = getYouTubeThumbnailUrl(videoId);
            const isShorts = w.tags.includes("Shorts");
            
            return (
              <motion.div
                key={videoId}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col bg-white rounded-xl sm:rounded-[2rem] border border-zinc-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Thumbnail Area */}
                <div 
                  className={`relative ${isShorts ? "aspect-[9/16]" : "aspect-[16/9]"} bg-zinc-950 overflow-hidden cursor-pointer`}
                  onClick={() => setOpenVideoId(videoId)}
                >
                  <img
                    src={thumbUrl}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* YouTube Play Overlay */}
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/40 transition-all duration-500 flex items-center justify-center">
                    <div className="w-[48px] h-[34px] sm:w-[68px] sm:h-[48px] rounded-lg sm:rounded-xl bg-[#FF0000] flex items-center justify-center shadow-[0_4px_15px_rgba(255,0,0,0.4)] transition-transform duration-500 group-hover:scale-110">
                      <Play className="w-5 h-5 sm:w-8 sm:h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-8 flex-1 flex flex-col bg-white">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-6">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-zinc-400 bg-zinc-50 border border-zinc-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-sm sm:text-xl font-black text-zinc-950 leading-[1.3] mb-3 sm:mb-6 line-clamp-2 tracking-tight">
                    {w.title}
                  </h3>
                  
                  <div className="mt-auto pt-3 sm:pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex flex-col min-w-0">
                      <span className="text-[8px] sm:text-[9px] uppercase font-bold text-zinc-400 tracking-[0.15em] sm:tracking-[0.2em] mb-0.5 sm:mb-1">Creator</span>
                      <p className="text-[10px] sm:text-xs font-black text-zinc-950 truncate max-w-[80px] sm:max-w-[140px]">
                        {w.channel}
                      </p>
                    </div>
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-zinc-950 hover:text-white transition-all duration-300 border border-zinc-200/50 shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {openVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 p-4 sm:p-10 backdrop-blur-xl"
            onClick={() => setOpenVideoId(null)}
          >
            <button
              onClick={() => setOpenVideoId(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/40 hover:text-white transition-all duration-500 p-3 sm:p-4 bg-white/5 rounded-full hover:bg-white/10"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full overflow-hidden bg-black rounded-2xl sm:rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${
                works.find(w => getYouTubeVideoId(w.url) === openVideoId)?.tags.includes("Shorts") 
                  ? "max-w-[300px] sm:max-w-[450px] aspect-[9/16]" 
                  : "max-w-6xl aspect-video"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1&rel=0&playsinline=1`}
                title="Video player"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-center text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 mt-16 sm:mt-24 pb-8 sm:pb-12">
        {site.pages.works.note}
      </p>
    </div>
  );
}
