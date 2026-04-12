"use client";

import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { ArrowRight, Video, Gamepad2, Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

function SpotlightGalleryCard({ 
  card, 
  index 
}: { 
  card: any, 
  index: number 
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={card.href}
        onMouseMove={handleMouseMove}
        className="group relative block rounded-[2.5rem] bg-white border border-zinc-200 p-10 lg:p-12 transition-all duration-700 hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-2 overflow-hidden"
      >
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(0,0,0,0.03), transparent 40%)`
            ),
          }}
        />

        {/* Floating gradient glow */}
        <div className={`absolute -inset-20 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-[100px] pointer-events-none`} />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center shadow-xl ${card.iconColor} border border-black/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6`}>
              {card.icon}
            </div>
            <div className="text-xs font-black tracking-[0.25em] text-zinc-400 uppercase bg-zinc-50 border border-zinc-100 px-3 py-1.5 rounded-full">
              {card.subtitle}
            </div>
          </div>

          <h3 className="text-3xl font-black text-zinc-950 mb-4 tracking-tighter transition-all duration-700 group-hover:tracking-tight">{card.title}</h3>

          <p className="text-zinc-500 text-lg leading-relaxed mb-12 font-medium tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
            {card.description}
          </p>

          <div className={`inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] ${card.accentColor} transition-all duration-500 group-hover:gap-4`}>
            <span>詳しく見る</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none opacity-0 group-hover:opacity-[0.05]" />
      </Link>
    </motion.div>
  );
}

export default function ProductGallerySection() {
  const cards = [
    {
      title: "動画編集・切り抜き",
      subtitle: "制作サービス",
      description: "最短24時間納品。VTuber・ゲーム実況者の「神シーン」をプロ品質で切り抜く特化型サービス。",
      href: "/video-editing",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600 bg-blue-50",
      accentColor: "text-blue-600",
      icon: <Video className="w-7 h-7" />,
    },
    {
      title: "革新的なツールを、あなたの制作に。",
      subtitle: "システム開発",
      description: "クリエイターの課題を自社製品で解決。業務用・Webアプリのオーダーメイド構築。",
      href: "/development",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600 bg-emerald-50",
      accentColor: "text-emerald-600",
      icon: <Code2 className="w-7 h-7" />,
    },
    {
      title: "TCG対戦ツール",
      subtitle: "ラボ製品",
      description: "P2P通信を利用したサーバーレス・オンライン対戦。カードゲームの未来をブラウザで。",
      href: "/products/tcg",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600 bg-purple-50",
      accentColor: "text-purple-600",
      icon: <Gamepad2 className="w-7 h-7" />,
    },
  ];

  return (
    <section id="products" className="bg-white py-32 lg:py-48 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-noise opacity-[0.015] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-zinc-950 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full mb-10 shadow-2xl">
            提供サービス
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 leading-[0.95]">
            創造性と技術、<br />
            <span className="text-zinc-400">その交差点を形にする。</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <SpotlightGalleryCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
