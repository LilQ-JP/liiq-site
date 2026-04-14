"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const videos = [
  "/videos_01.mp4",
  "/videos_02.mp4",
  "/videos_03.mp4",
  "/videos_04.mp4",
];

export default function HeroVideoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group">
      {/* Background Glow - smaller on mobile */}
      <div className="absolute -inset-10 sm:-inset-20 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-cyan-500/10 rounded-[3rem] sm:rounded-[5rem] blur-[80px] sm:blur-[120px] opacity-20 pointer-events-none" />
      
      <div className="relative">
        {/* Smartphone Frame */}
        <div className="relative w-[200px] sm:w-[270px] md:w-[310px] aspect-[9/16] bg-zinc-950/80 rounded-[1.5rem] sm:rounded-[2.5rem] border-[4px] sm:border-[6px] border-zinc-900/50 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] sm:shadow-[0_0_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 z-10">
          
          {/* Speaker */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-0.5 sm:h-1 bg-zinc-800 rounded-full z-20 opacity-30" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <video
                src={videos[index]}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none z-10" />
        </div>

        {/* Navigation Dots */}
        <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-4 bg-blue-500" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
