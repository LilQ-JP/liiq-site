// app/works/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WorksGrid from "@/components/sections/WorksGrid";
import site from "@/content/site.json";

export const metadata = {
  title: "制作実績 | LilQ",
  description: "LilQがこれまでに手がけた動画編集・制作のポートフォリオと、開発したアプリケーションの実績をご紹介します。",
};

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-[#FAFAFA] pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[0%] left-[-10%] w-[30%] h-[30%] bg-pink-100/30 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-zinc-400 hover:text-zinc-800 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-1" />
              {site.pages.works.backLabel}
            </Link>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4 sm:mb-6">
              {site.pages.works.title}
            </h1>
            <p className="text-sm sm:text-lg text-zinc-500 max-w-2xl leading-relaxed">
              {site.pages.works.description}
            </p>
          </div>
        </section>

        {/* Works Content */}
        <section className="bg-white py-16 lg:py-24 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WorksGrid />
          </div>
        </section>

        <CTABanner
          titleTop="あなたのビジョンを、"
          titleBottom="次の形へ。"
          description="動画制作からアプリケーション構築まで、これまでの制作実績に続く「新しいプロジェクト」を一緒に始めませんか？まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
