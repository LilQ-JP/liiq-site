"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsSection from "@/components/sections/NewsSection";
import CTABanner from "@/components/sections/CTABanner";
import PremiumHeroSection from "@/components/sections/PremiumHeroSection";
import ProductGallerySection from "@/components/sections/ProductGallerySection";
import Link from "next/link";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, MessageCircle, Video, Code2, Gamepad2, CheckCircle2, Users, Zap, Shield, ArrowUpRight } from "lucide-react";

function InlineSpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`relative group bg-white rounded-[2.5rem] border border-zinc-200 transition-all duration-700 hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-2 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500"
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-w-0 overflow-x-hidden pt-0">
        <PremiumHeroSection />

        {/* Numbers / Trust Section */}
        <section className="relative bg-white py-16 lg:py-24 border-y border-zinc-100 overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none" />
          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { value: "¥1,000〜", label: "制作価格" },
                { value: "〜48h", label: "納品スピード" },
                { value: "最高品質", label: "制作クオリティ" },
                { value: "100%", label: "オンライン完結" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-4xl lg:text-5xl font-black text-zinc-950 transition-all duration-700 group-hover:scale-110 tracking-tighter">{stat.value}</div>
                  <div className="text-sm font-black text-zinc-400 mt-3 tracking-[0.2em] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do - Overview */}
        <section className="relative bg-white py-32 lg:py-48 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-noise opacity-[0.01] pointer-events-none" />

          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-24 items-start">
              <div className="md:w-2/5 mb-20 md:mb-0 md:sticky md:top-48">
                <span className="inline-block px-4 py-1.5 bg-zinc-950 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full mb-10 shadow-2xl">
                  理念
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter mb-10 leading-[0.95]">
                  表現を、<br />
                  <span className="text-zinc-400">研ぎ澄ませる。</span>
                </h2>
                <p className="text-zinc-500 text-xl leading-relaxed mb-12 font-medium tracking-tight">
                  LilQは、クリエイターが制作という重荷から解放され、
                  本来の「表現」に集中できる環境を構築するテック・クリエイティブ・ラボです。
                </p>
                <Link href="/about" className="group inline-flex items-center gap-3 text-base font-black uppercase tracking-[0.2em] text-zinc-950 transition-all duration-500">
                  <span>お問い合わせ</span>
                  <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center transition-all group-hover:bg-zinc-950 group-hover:text-white group-hover:translate-x-2 shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>

              <div className="md:w-3/5 grid grid-cols-1 gap-8">
                {[
                  { icon: Clock, title: "スピード制作", desc: "48時間以内を目指す。トレンドを逃さない圧倒的な制作スピード。", color: "text-blue-600 bg-blue-50" },
                  { icon: DollarSign, title: "戦略的コストパフォーマンス", desc: "ショート動画1,000円から。継続可能な戦略的プライシング。", color: "text-zinc-950 bg-zinc-50" },
                  { icon: MessageCircle, title: "円滑なコミュニケーション", desc: "XのDMでチャット完結。クリエイターに寄り添うUX。", color: "text-purple-600 bg-purple-50" },
                  { icon: Shield, title: "最高品質の追求", desc: "修正2回無料。一貫したクオリティ管理と迅速なサポート。", color: "text-emerald-600 bg-emerald-50" },
                ].map((item, i) => (
                  <InlineSpotlightCard key={i} className="p-10 lg:p-12">
                    <div className="flex gap-8 items-start">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-black/5 shadow-inner transition-transform duration-700 group-hover:scale-110 ${item.color}`}>
                        <item.icon className="w-8 h-8 font-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-zinc-950 mb-3 tracking-tighter">{item.title}</h3>
                        <p className="text-zinc-500 text-base leading-relaxed font-medium tracking-tight opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  </InlineSpotlightCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProductGallerySection />

        {/* How It Works / Workflow */}
        <section className="relative bg-white py-32 lg:py-48 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-[0.015] pointer-events-none" />
          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-28">
              <span className="inline-block px-4 py-1.5 bg-zinc-100 text-zinc-500 text-xs font-black uppercase tracking-[0.3em] rounded-full mb-10 border border-zinc-200/50">
                プロセス
              </span>
              <h2 className="text-5xl md:text-8xl font-black text-zinc-950 tracking-tighter leading-[0.9]">
                スマートに、<br />
                <span className="text-zinc-400">完結させる。</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Direct Connect", desc: "XのDMでやり取り。24時間365日、いつでもご相談ください。" },
                { step: "02", title: "Secure Settle", desc: "素材共有と決済。明朗かつ迅速なプロセスをご提供します。" },
                { step: "03", title: "Swift Delivery", desc: "完成動画はクラウド経由で即座に納品。目安－－48時間。" },
              ].map((item, i) => (
                <div key={i} className="group relative pt-12 border-t border-zinc-100 flex flex-col gap-8 transition-opacity duration-700 hover:opacity-100 opacity-60">
                  <div className="text-6xl font-black text-zinc-100 transition-colors duration-700 group-hover:text-blue-500/20 leading-none">{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-black text-zinc-950 mb-4 tracking-tighter">{item.title}</h3>
                    <p className="text-zinc-500 leading-relaxed font-medium tracking-tight text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative bg-[#FAFAFA] py-32 lg:py-56 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/5 rounded-full blur-[180px] pointer-events-none" />
          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

          <div className="relative max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-zinc-200 text-zinc-500 text-xs font-black uppercase tracking-[0.3em] rounded-full mb-10 border border-zinc-200">
              ビジョン
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-zinc-950 tracking-tighter leading-[0.95] mb-14">
              クリエイターが、<br />
              「今」に集中できる未来を。
            </h2>
            <p className="text-zinc-500 text-2xl leading-relaxed max-w-3xl mx-auto mb-20 font-medium tracking-tight">
              編集に追われる時間を、新しいアイデアを練る時間に。<br />
              高額なコストを気にせず、プロ品質を武器に。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {[
                { label: "Vision", value: "技術の力で、想いを超える。" },
                { label: "Goal", value: "表現者が輝き続ける世界。" },
                { label: "Mission", value: "圧倒的な手軽さと高品質。" },
              ].map((item, i) => (
                <InlineSpotlightCard key={i} className="p-10 text-left border-zinc-200/60">
                  <div className="text-xs font-black text-zinc-400 tracking-[0.2em] uppercase mb-5 opacity-60">{item.label}</div>
                  <div className="text-2xl font-black text-zinc-950 leading-tight tracking-tighter">{item.value}</div>
                </InlineSpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <div id="news" className="bg-white">
          <NewsSection />
        </div>

        {/* Representative Section */}
        <section className="relative bg-white py-32 lg:py-56 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <InlineSpotlightCard className="p-16 lg:p-24 flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-1000" />
                  {/*
                    【画像差し替えガイド: 代表者アイコン】
                    現在の「MH」テキストを写真に差し替える場合は、以下のdivを消してimgタグを配置します。
                    - 推奨サイズ：400x400px (正方形)
                    - 推奨フォーマット：WebP または PNG
                    - 差し替え例：
                      <img src="/images/founder.webp" alt="宮宅 晴規" className="relative w-56 h-56 rounded-full object-cover shadow-2xl ring-[12px] ring-white" />
                  */}
                  <div className="relative w-56 h-56 rounded-full bg-zinc-950 flex items-center justify-center text-white text-6xl font-black shadow-2xl tracking-tighter ring-[12px] ring-white">
                    MH
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-black text-zinc-950 mb-1 tracking-tight">宮宅 晴規</h3>
                <p className="text-zinc-500 text-sm font-bold mb-6 tracking-wide uppercase opacity-60 underline underline-offset-8 decoration-blue-500/30">LilQ Founder & Lead Creative</p>
                <p className="text-zinc-500 text-lg leading-relaxed mb-8 font-medium">
                  「クリエイターが創作だけに集中できる世界をつくりたい」
                  その一心でLilQを立ち上げました。プロの品質を、圧倒的な手軽さで。
                  あなたの最高のパートナーとして、全力でサポートさせていただきます。
                </p>
                <Link href="/about" className="group inline-flex items-center gap-3 text-sm font-black text-zinc-950 transition-all hover:gap-4">
                  <span>代表プロフィール</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </InlineSpotlightCard>
          </div>
        </section>

        <CTABanner
          titleTop="表現を形に、"
          titleBottom="想像を超える。"
          description="トップレベルの動画制作から、クリエイター向けWebアプリ開発まで。
          LilQの技術力で、あなたのビジョンを最短距離で実現します。"
        />
      </main>
      <Footer />
    </>
  );
}
