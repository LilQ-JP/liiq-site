import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import ServicesSection from "@/components/sections/ServicesSection";
import WorksSection from "@/components/sections/WorksSection";
import FlowSection from "@/components/sections/FlowSection";
import FAQSection from "@/components/sections/FAQSection";
import LogoBanner from "@/components/sections/LogoBanner";
import HeroVideoCarousel from "@/components/ui/HeroVideoCarousel";
import { Clock, Zap, MessageCircle } from "lucide-react";

export const metadata = {
  title: "動画編集・切り抜きサービス | LilQ",
  description: "VTuber・ゲーム実況者向けの切り抜き動画・ショート動画を業界最安クラスで制作。最短24h納品。",
};

export default function VideoEditing() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-white pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-32 overflow-hidden border-b border-zinc-100">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-bold tracking-[0.2em] rounded-full mb-5 sm:mb-8">Service Overview</span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-5 sm:mb-8 leading-[1.1]">
                  配信を、<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">最高品質の作品</span>へ。
                </h1>
                <p className="text-sm sm:text-xl text-zinc-500 leading-relaxed mb-8 sm:mb-12 max-w-xl font-medium">
                  VTuberからゲーム実況、雑談配信まで。配信文化を深く理解するチームが、あなたの活動を映像面から強力にサポートします。
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {[
                    { value: "¥1,000〜", label: "ショート動画" },
                    { value: "~48h", label: "スピード納品" },
                    { value: "2回無料", label: "修正対応" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-3 sm:py-5 shadow-sm">
                      <div className="text-lg sm:text-2xl font-black text-zinc-950">{stat.value}</div>
                      <div className="text-[9px] sm:text-[10px] uppercase font-bold text-zinc-400 mt-0.5 sm:mt-1 tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <HeroVideoCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Monitor Marquee Component */}
        <LogoBanner />

        {/* Why Us */}
        <section className="relative bg-[#FAFAFA] py-16 sm:py-24 lg:py-36 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-blue-500/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <span className="inline-block px-3 py-1 bg-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4 sm:mb-6">Features</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter">選ばれる3つの理由</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              {[
                { icon: Zap, title: "圧倒的なスピード感", desc: "最短24時間以内に納品。トレンドの波を逃さず拡散までを高速化します。", highlight: "最短24時間納品", color: "text-blue-600 bg-blue-50" },
                { icon: Clock, title: "納得の継続コスト", desc: "ショート動画1,000円から。無理なく継続できる料金設計でサポート。", highlight: "¥1,000〜 /本", color: "text-emerald-600 bg-emerald-50" },
                { icon: MessageCircle, title: "シームレスな対話", desc: "堅苦しい形式は不要。XのDMでチャット感覚でお問い合わせ可能。", highlight: "DMで相談可能", color: "text-purple-600 bg-purple-50" },
              ].map((item, i) => (
                <div key={i} className="group p-6 sm:p-10 bg-white rounded-2xl sm:rounded-[2.5rem] border border-zinc-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-8 border border-black/5 ${item.color}`}>
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-zinc-950 mb-2 sm:mb-3 tracking-tight">{item.title}</h3>
                  <span className="inline-block bg-zinc-100 text-zinc-500 text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full mb-4 sm:mb-6 tracking-wider uppercase border border-zinc-200/50">{item.highlight}</span>
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesSection />
        <FlowSection />
        <WorksSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
