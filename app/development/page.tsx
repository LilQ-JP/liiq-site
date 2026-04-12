import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { Code2, Globe, Zap, Shield, ArrowRight, CheckCircle2, Layers, Smartphone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "アプリ開発 | LilQ",
  description: "LilQが自社開発するWebアプリケーション。クリエイターの課題を技術で解決します。",
};

export default function DevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-[#FAFAFA] pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Development</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
              クリエイターのための<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Webアプリ開発</span>
            </h1>
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed mb-10">
              LilQでは、クリエイター・配信者の日常的な課題を解決するWebアプリケーションを自社開発しています。
              インストール不要・ブラウザで即座に使えるツールを提供します。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products/tcg"
                className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10"
              >
                リリース済みアプリを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Development Approach */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">開発のこだわり</h2>
              <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                すべてのプロダクトに共通する、LilQの開発哲学。
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "ブラウザ完結", desc: "インストール不要。URLを共有すればすぐに使い始められる、Webネイティブな設計。アプリストアの審査待ちもゼロ。", color: "text-blue-600 bg-blue-50" },
                { icon: Zap, title: "最適な設計", desc: "用途に合わせてP2P通信やサーバーレス、最新のフレームワークを使い分け。常に安定し、スケールするアーキテクチャを採用。", color: "text-emerald-600 bg-emerald-50" },
                { icon: Shield, title: "プライバシー重視", desc: "ユーザーデータの収集を最小限にし、通信はエンドツーエンドで安全に保護。個人情報を持たない安心設計。", color: "text-purple-600 bg-purple-50" },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:shadow-md hover:border-zinc-200 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="bg-[#FAFAFA] py-24 lg:py-32">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Process</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">開発プロセス</h2>
            </div>
            <div className="space-y-0">
              {[
                { step: "01", title: "課題の発見", desc: "クリエイターとの対話や自分自身の経験から、日常的に困っている課題を発見します。既存のツールでは解決できないペインポイントに着目。" },
                { step: "02", title: "プロトタイプ開発", desc: "最小限の機能でプロトタイプを素早く構築。実際に使ってみてフィードバックを収集し、本当に必要な機能を見極めます。" },
                { step: "03", title: "リリース＆改善", desc: "ブラウザから即座にアクセスできる形でリリース。ユーザーの声をもとに継続的に改善を重ねていきます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start py-8 border-b border-zinc-200 last:border-b-0">
                  <div className="text-4xl font-black text-zinc-200 shrink-0 w-16">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Released Apps */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Released</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">リリース済みアプリ</h2>
            </div>

            <Link href="/products/tcg" className="group block bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl hover:border-zinc-300 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-purple-500 to-pink-400 relative overflow-hidden min-h-[280px]">
                  <img
                    src="/images/Gemini_Generated_Image_v6y6gv6y6gv6y6gv.png"
                    alt="TCGオンライン対戦ツール"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs font-bold text-purple-600 tracking-widest uppercase mb-3">Web App — 限定公開中</span>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-zinc-900 mb-4">TCGオンライン対戦ツール</h3>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    PeerJS（WebRTC）を利用したサーバーレスのオンライン対戦ツール。
                    ルームIDを共有するだけで、ブラウザから即座にカードゲーム対戦が可能です。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["WebRTC", "P2P通信", "インストール不要", "無料"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white text-zinc-600 text-xs font-bold rounded-full border border-zinc-200">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center text-purple-600 font-bold group-hover:translate-x-1 transition-transform">
                    詳細を見る <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-[#FAFAFA] py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Tech Stack</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">使用技術</h2>
              <p className="text-zinc-500 text-lg mt-4 max-w-2xl mx-auto">モダンな技術を活用して、高速で安定したアプリケーションを構築しています。</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Next.js", desc: "Reactフレームワーク" },
                { name: "TypeScript", desc: "型安全な開発" },
                { name: "WebRTC", desc: "リアルタイムP2P" },
                { name: "Tailwind CSS", desc: "UIスタイリング" },
                { name: "Framer Motion", desc: "アニメーション" },
                { name: "PeerJS", desc: "P2Pライブラリ" },
                { name: "GitHub Pages", desc: "ホスティング" },
                { name: "GitHub Actions", desc: "CI/CDパイプライン" },
              ].map((tech, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all">
                  <div className="text-base font-extrabold text-zinc-900 mb-1">{tech.name}</div>
                  <div className="text-xs text-zinc-500">{tech.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          titleTop="革新的なツールを、"
          titleBottom="あなたの制作に。"
          description="クリエイターの課題を自社製品で解決。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
