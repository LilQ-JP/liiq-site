"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 4500); // 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group perspective-1000">
      {/* Deep Background Glow - 21st.dev / Featured style */}
      <div className="absolute -inset-20 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-cyan-500/10 rounded-[5rem] blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none" />
      
      {/* Container for the Phone and Effects */}
      <div className="relative">
        {/* Smartphone Frame - Sleek, 'Liquid Glass' Inspired */}
        <div className="relative w-[270px] sm:w-[310px] aspect-[9/16] bg-zinc-950/80 backdrop-blur-3xl rounded-[2.5rem] border-[6px] border-zinc-900/50 shadow-[0_0_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 z-10">
          
          {/* Extremely Subtle Speaker (Non-intrusive) */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-800 rounded-full z-20 opacity-30" />


          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
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

          {/* Glossy Overlay Animation */}
          <motion.div 
            animate={{ 
              translateX: ["-100%", "200%"],
              translateY: ["-100%", "200%"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 2,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" 
          />
          
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none z-10" />
        </div>

        {/* Navigation Dots - Premium aesthetic */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
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


