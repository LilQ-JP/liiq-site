"use client";

import React, { useEffect, useState } from "react";
import { ExternalLink, X, PlayCircle } from "lucide-react";
import { works } from "@/content/works";
import { getYouTubeVideoId, getYouTubeThumbnailUrl } from "@/lib/youtube";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import site from "@/content/site.json";

function SpotlightWorkCard({ 
  children, 
  videoId, 
  onClick, 
  isShorts = false 
}: { 
  children: React.ReactNode, 
  videoId: string, 
  onClick: () => void,
  isShorts?: boolean
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-white rounded-[2.5rem] border border-zinc-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(0,0,0,0.03), transparent 40%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

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
      {/* Premium Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
        <div className="p-1.5 bg-zinc-100/80 backdrop-blur-md rounded-full border border-zinc-200/50 flex flex-wrap gap-1 shadow-inner">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                filter === f
                  ? "bg-zinc-950 text-white shadow-xl scale-105"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-white/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((w, index) => {
            const videoId = getYouTubeVideoId(w.url);
            if (!videoId) return null;
            const thumbUrl = getYouTubeThumbnailUrl(videoId);
            const isShorts = w.tags.includes("Shorts");
            
            return (
              <SpotlightWorkCard 
                key={videoId} 
                videoId={videoId} 
                onClick={() => setOpenVideoId(videoId)}
                isShorts={isShorts}
              >
                {/* Thumbnail Area */}
                <div 
                  className={`relative ${isShorts ? "aspect-[9/16]" : "aspect-[16/9]"} bg-zinc-950 overflow-hidden cursor-pointer`}
                  onClick={() => setOpenVideoId(videoId)}
                >
                  <img
                    src={thumbUrl}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* High-end Hover Overlay */}
                  <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-all duration-700 flex items-center justify-center backdrop-blur-[0px] group-hover:backdrop-blur-[4px]">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-zinc-950 shadow-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: openVideoId === videoId ? 0 : 1, opacity: 1 }}
                    >
                      <PlayCircle className="w-8 h-8 fill-current" />
                    </motion.div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col bg-white">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] uppercase tracking-[0.2em] font-black text-zinc-400 bg-zinc-50 border border-zinc-100 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-black text-zinc-950 leading-[1.2] mb-6 line-clamp-2 tracking-tight transition-all duration-500 group-hover:tracking-tighter">
                    {w.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-[0.2em] mb-1">Creator</span>
                      <p className="text-xs font-black text-zinc-950 truncate max-w-[140px]">
                        {w.channel}
                      </p>
                    </div>
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-zinc-950 hover:text-white transition-all duration-500 border border-zinc-200/50 hover:scale-110 active:scale-90"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </SpotlightWorkCard>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Video Modal - Ultra Minimal */}
      <AnimatePresence>
        {openVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 p-4 sm:p-10 backdrop-blur-2xl"
            onClick={() => setOpenVideoId(null)}
          >
            <button
              onClick={() => setOpenVideoId(null)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-all duration-500 p-4 bg-white/5 rounded-full hover:bg-white/10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full overflow-hidden bg-black rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${
                works.find(w => getYouTubeVideoId(w.url) === openVideoId)?.tags.includes("Shorts") 
                  ? "max-w-[450px] aspect-[9/16]" 
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

      <p className="text-center text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 mt-24 pb-12">
        {site.pages.works.note}
      </p>
    </div>
  );
}
