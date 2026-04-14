"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Video, Gamepad2, Code2 } from "lucide-react";
import Link from "next/link";

function GalleryCard({ 
  card, 
  index 
}: { 
  card: any, 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={card.href}
        className="group relative block rounded-2xl sm:rounded-[2.5rem] bg-white border border-zinc-200 p-6 sm:p-10 lg:p-12 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-[1.25rem] flex items-center justify-center shadow-lg ${card.iconColor} border border-black/5 transition-transform duration-700 group-hover:scale-110`}>
              {card.icon}
            </div>
            <div className="text-[9px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.25em] text-zinc-400 uppercase bg-zinc-50 border border-zinc-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
              {card.subtitle}
            </div>
          </div>

          <h3 className="text-xl sm:text-3xl font-black text-zinc-950 mb-3 sm:mb-4 tracking-tighter">{card.title}</h3>

          <p className="text-zinc-500 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-12 font-medium tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
            {card.description}
          </p>

          <div className={`inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] ${card.accentColor} transition-all duration-500 group-hover:gap-4`}>
            <span>詳しく見る</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
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
      icon: <Video className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      title: "革新的なツールを、あなたの制作に。",
      subtitle: "システム開発",
      description: "クリエイターの課題を自社製品で解決。業務用・Webアプリのオーダーメイド構築。",
      href: "/development",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600 bg-emerald-50",
      accentColor: "text-emerald-600",
      icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      title: "TCG対戦ツール",
      subtitle: "ラボ製品",
      description: "P2P通信を利用したサーバーレス・オンライン対戦。カードゲームの未来をブラウザで。",
      href: "/products/tcg",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600 bg-purple-50",
      accentColor: "text-purple-600",
      icon: <Gamepad2 className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
  ];

  return (
    <section id="products" className="bg-white py-16 sm:py-32 lg:py-48 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 sm:mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-zinc-950 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] rounded-full mb-6 sm:mb-10 shadow-2xl">
            提供サービス
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 leading-[1] sm:leading-[0.95]">
            創造性と技術、<br />
            <span className="text-zinc-400">その交差点を形にする。</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {cards.map((card, i) => (
            <GalleryCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
