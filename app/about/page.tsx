import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import site from "@/content/site.json";
import { Building2, Target, Eye, Rocket, MapPin, Mail, Phone, ArrowRight, Calendar, Users, Globe, Code2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "会社概要 | LilQ",
  description: "LilQ（リルク）の会社概要。クリエイターのための動画編集サービスとWebアプリ開発を行っています。",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-[#FAFAFA] pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-purple-100/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 bg-zinc-200 text-zinc-500 text-xs font-bold tracking-widest uppercase rounded-full mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
              会社概要
            </h1>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              すべてのクリエイターの「伝えたい」を、技術の力で形にする。
            </p>
          </div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">理念・ビジョン・ミッション</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, label: "企業理念", title: "技術の力でクリエイターの表現を形にする", color: "text-blue-600 bg-blue-50" },
                { icon: Eye, label: "ビジョン", title: "誰もがプロ品質の映像を手にできる世界", color: "text-purple-600 bg-purple-50" },
                { icon: Rocket, label: "ミッション", title: "低価格・高品質・実用的なツールの提供", color: "text-rose-600 bg-rose-50" },
              ].map((item, i) => (
                <div key={i} className="text-center p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-2">{item.label}</div>
                  <h3 className="text-lg font-bold text-zinc-900 leading-relaxed">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About LilQ + Company Info */}
        <section className="bg-[#FAFAFA] py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-16 items-start">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <span className="inline-block px-3 py-1 bg-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-6">
                  LilQ（リルク）とは
                </h2>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>
                    LilQは、VTuber・ゲーム実況者・雑談配信者にフォーカスした動画編集・切り抜きサービスと、
                    クリエイティブな課題を解決するWebアプリケーション開発を行う企業です。
                  </p>
                  <p>
                    「配信に集中できる環境をつくる」をテーマに、プロ品質の映像を圧倒的な低価格で提供。
                    さらに、ブラウザベースのWebアプリケーションの自社開発も行い、
                    クリエイターの活動を多方面から支援しています。
                  </p>
                  <p>
                    クリエイター自身がチームの一員であるからこそ、現場のニーズを的確に捉え、
                    本当に使えるサービスとツールを生み出しています。
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-zinc-400" />
                      会社情報
                    </h3>
                    <div className="space-y-5">
                      {[
                        { label: "屋号", value: "LilQ（リルク）" },
                        { label: "代表者", value: "宮宅 晴規（Miyake Haruki）" },
                        { label: "設立", value: "2026年" },
                        { label: "事業形態", value: "個人事業主" },
                        { label: "事業内容", value: "動画編集・切り抜きサービス\nWebアプリケーション開発" },
                        { label: "URL", value: "https://lilq.jp" },
                      ].map((row, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-24 shrink-0 text-sm font-bold text-zinc-400">{row.label}</div>
                          <div className="text-zinc-900 font-medium whitespace-pre-line">{row.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-zinc-100 p-8 space-y-3">
                    <div className="flex items-center gap-3 text-zinc-600">
                      <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span className="text-sm">〒{site.site.address.postal} {site.site.address.prefecture}{site.site.address.city}{site.site.address.street}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-600">
                      <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span className="text-sm">{site.site.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-600">
                      <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span className="text-sm">{site.site.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Services</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">事業内容</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/video-editing" className="group p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:shadow-md hover:border-zinc-200 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">動画編集・切り抜きサービス</h3>
                <p className="text-zinc-500 leading-relaxed mb-4">
                  VTuber・ゲーム実況者・雑談配信者向けの切り抜き動画・ショート動画制作。
                  最短24時間納品、ショート動画1,000円から。Adobe Premiere Proによるプロ品質の編集。
                </p>
                <span className="text-blue-600 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  サービス詳細 <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/development" className="group p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:shadow-md hover:border-zinc-200 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Webアプリケーション開発</h3>
                <p className="text-zinc-500 leading-relaxed mb-4">
                  クリエイターの課題を解決する自社開発のWebアプリ。
                  ブラウザ完結の利便性を追求し、用途に合わせて最適な技術スタックを選定。
                  現在TCGオンライン対戦ツールを公開中。
                </p>
                <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  開発事業の詳細 <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Timeline / History */}
        <section className="bg-[#FAFAFA] py-24 lg:py-32">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">History</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">沿革</h2>
            </div>
            <div className="space-y-0">
              {[
                { date: "2026年1月", title: "LilQ設立", desc: "個人事業主として創業。動画編集・切り抜きサービスの提供を開始。" },
                { date: "2026年2月", title: "公式サイト公開", desc: "lilq.jp にてコーポレートサイトを公開。オンラインでの受注体制を構築。" },
                { date: "2026年3月", title: "TCGオンライン対戦ツール：プレリリース", desc: "自社開発のWebアプリ第1弾として、ブラウザベースのカードゲーム対戦ツールをリリース。" },
                { date: "2026年4月", title: "サイトリニューアル", desc: "コーポレートサイトを全面リニューアル。アプリ開発事業の紹介ページを追加。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6 border-b border-zinc-200 last:border-b-0">
                  <div className="w-28 shrink-0 text-sm font-bold text-zinc-400 pt-1">{item.date}</div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Representative */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Representative</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">代表プロフィール</h2>
            </div>
            <div className="md:flex gap-16 items-center max-w-3xl mx-auto">
              <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                {/*
                  【画像差し替えガイド: 代表者アイコン】
                  現在の「MH」テキストを写真に差し替える場合は、以下のdivを消してimgタグを配置してください。
                  - 推奨サイズ：400x400px (正方形)
                  - 推奨フォーマット：WebP または PNG
                  - 差し替え例：
                    <img src="/images/founder.webp" alt="宮宅 晴規" className="w-40 h-40 rounded-full object-cover shadow-lg" />
                */}
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-black shadow-lg">
                  MH
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-extrabold text-zinc-900 mb-1">宮宅 晴規</h3>
                <p className="text-zinc-400 text-sm mb-6">Miyake Haruki ／ LilQ 代表</p>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>
                    配信は楽しいのに、編集が追いつかない。そんな声を多く聞いてきました。
                    プロ品質の動画を気軽に頼める価格で提供したいと考え、LilQを立ち上げました。
                  </p>
                  <p>
                    動画編集だけでなく、クリエイターが日々使えるWebアプリの開発にも取り組んでいます。
                    配信者が「配信だけに集中できる世界」をつくる。それがLilQの使命です。
                  </p>
                  <p>
                    まずは1本、気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          titleTop="表現を形に、"
          titleBottom="想像を超える。"
          description="トップレベルの動画制作から、クリエイター向けWebアプリ開発まで。LilQの技術力で、あなたのビジョンを最短距離で実現します。"
        />
      </main>
      <Footer />
    </>
  );
}
