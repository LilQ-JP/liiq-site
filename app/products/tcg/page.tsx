import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { Globe, Users, Zap } from "lucide-react";

export const metadata = {
  title: "TCGオンライン対戦ツール | LilQ Products",
  description: "PeerJSを用いたサーバーレスのTCGオンライン対戦ツール。ブラウザだけで手軽に対戦環境を構築できます。",
};

export default function TCGAppPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-[#FCFCFD] pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-[10px] sm:text-sm font-bold tracking-widest uppercase rounded-full mb-3 sm:mb-4">
              プレリリース（限定公開中）
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4 sm:mb-6">
              TCGオンライン対戦ツール
            </h1>
            <p className="text-sm sm:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              リアルタイムでカードの配置や状態を同期できる、ブラウザベースの対戦ツールです。
              現在、一部のユーザー様に向けてプレリリースを実施しています。一般公開までもう少々お待ちください。
            </p>
          </div>
        </section>

        {/* App Preview */}
        <section className="bg-white py-0 -mt-4 sm:-mt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-zinc-50 rounded-2xl sm:rounded-[2rem] shadow-xl overflow-hidden border border-zinc-200 aspect-video flex items-center justify-center">
              <div className="text-center p-6 sm:p-12">
                <div className="mb-4 sm:mb-8 flex justify-center">
                  <img
                    src="/images/TCGTool-iOS-Dark-1024x1024@1x.png"
                    alt="TCGオンライン対戦ツール アイコン"
                    className="w-32 h-32 sm:w-56 sm:h-56 rounded-2xl sm:rounded-[2rem] shadow-2xl shadow-purple-500/30 border border-zinc-100"
                  />
                </div>
                <p className="text-purple-600 font-black tracking-widest text-lg sm:text-2xl mb-2">PLAY NOW</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="bg-white py-10 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-10 text-center">
              <h3 className="text-lg sm:text-2xl font-black mb-2 sm:mb-3 text-zinc-900 tracking-tight">プレリリース版を限定公開中</h3>
              <p className="text-zinc-500 text-sm sm:text-base font-medium">現在はプレリリース版としてお試しいただけます。<br className="hidden sm:block" />以下のボタンからブラウザですぐに対戦をはじめられます。</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/tcg-nexus"
                className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3 bg-purple-600 text-white rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30 text-center flex items-center justify-center gap-2"
              >
                🚀 アプリを開く
              </a>
              <a
                href="https://twitter.com/LilQ_officialJP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3 bg-white text-zinc-900 border border-zinc-200 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm hover:bg-zinc-50 transition-colors text-center"
              >
                X（旧Twitter）をフォロー
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-zinc-50 py-14 sm:py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight text-center mb-10 sm:mb-16">特徴</h2>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              <div className="p-5 sm:p-8 bg-white rounded-2xl sm:rounded-[2rem] border border-zinc-100 shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 flex items-center justify-center rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-blue-600">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3">インストール不要</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  ブラウザのみで動作。アプリのインストールやアカウント登録は一切不要です。URLを開くだけで準備完了。
                </p>
              </div>

              <div className="p-5 sm:p-8 bg-white rounded-2xl sm:rounded-[2rem] border border-zinc-100 shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 flex items-center justify-center rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-emerald-600">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3">超低遅延のP2P通信</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  PeerJS(WebRTC)を利用したサーバーレス通信。プレイヤー同士が直接接続するため、サクサク快適。
                </p>
              </div>

              <div className="p-5 sm:p-8 bg-white rounded-2xl sm:rounded-[2rem] border border-zinc-100 shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 flex items-center justify-center rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-purple-600">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3">かんたんルーム共有</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  「部屋を作る」ボタンを押してルームIDを相手に伝えるだけ。離れた友人とすぐに本格的な対戦が楽しめます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
