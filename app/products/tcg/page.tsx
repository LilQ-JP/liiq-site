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
        <section className="relative bg-[#FCFCFD] pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-pink-100/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-bold tracking-widest uppercase rounded-full mb-4">
              プレリリース（限定公開中）
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6">
              TCGオンライン対戦ツール
            </h1>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              リアルタイムでカードの配置や状態を同期できる、ブラウザベースの対戦ツールです。
              現在、一部のユーザー様に向けてプレリリースを実施しています。一般公開までもう少々お待ちください。
            </p>
          </div>
        </section>

        {/* App Preview */}
        <section className="bg-white py-0 -mt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 
              【画像差し替えガイド: メインスクリーンショット】
              ここに実際のアプリ画面のスクリーンショットを配置してください。
              - 推奨画像サイズ：1920x1080 (16:9比率)
              - 推奨フォーマット：WebP または 高画質JPEG
              - 差し替え方法：以下の <div className="bg-zinc-50..."> を消して、
                <img src="/images/your-screenshot.webp" alt="アプリ画面" className="w-full rounded-[2rem] shadow-xl border border-zinc-200" />
                に置き換えてください。
            */}
            <div className="bg-zinc-50 rounded-[2rem] shadow-xl overflow-hidden border border-zinc-200 aspect-video flex items-center justify-center">
              <div className="text-center p-12">
                <div className="mb-8 flex justify-center">
                  <img
                    src="/images/TCGTool-iOS-Dark-1024x1024@1x.png"
                    alt="TCGオンライン対戦ツール アイコン"
                    className="w-56 h-56 rounded-[2rem] shadow-2xl shadow-purple-500/30 border border-zinc-100"
                  />
                </div>
                <p className="text-zinc-400 font-black tracking-widest text-2xl mb-2">COMING SOON</p>

              </div>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-black mb-3 text-zinc-900 tracking-tight">ただいま一般公開に向けて準備中です。</h3>
              <p className="text-zinc-500 font-medium">一般公開の開始は、X（旧Twitter）およびYouTubeにて後日お知らせいたします。<br />続報を楽しみにお待ちください。</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                disabled
                className="w-full sm:w-auto px-10 py-4 bg-zinc-200 text-zinc-400 rounded-2xl font-bold text-lg text-center cursor-not-allowed"
              >
                🔒 プレリリース中
              </button>
              <a
                href="https://twitter.com/LilQ_officialJP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-bold text-lg hover:bg-zinc-50 transition-colors text-center"
              >
                X（旧Twitter）をフォロー
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-zinc-50 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight text-center mb-16">特徴</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-[2rem] border border-zinc-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl mb-6 text-blue-600">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">インストール不要</h3>
                <p className="text-zinc-500 leading-relaxed">
                  ブラウザのみで動作。アプリのインストールやアカウント登録は一切不要です。URLを開くだけで準備完了。
                </p>
              </div>

              <div className="p-8 bg-white rounded-[2rem] border border-zinc-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center rounded-xl mb-6 text-emerald-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">超低遅延のP2P通信</h3>
                <p className="text-zinc-500 leading-relaxed">
                  PeerJS(WebRTC)を利用したサーバーレス通信。プレイヤー同士が直接接続するため、サクサク快適。
                </p>
              </div>

              <div className="p-8 bg-white rounded-[2rem] border border-zinc-100 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl mb-6 text-purple-600">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">かんたんルーム共有</h3>
                <p className="text-zinc-500 leading-relaxed">
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
