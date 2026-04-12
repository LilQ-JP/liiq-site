import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { ArrowLeft, User, Code2, Scissors, Music, Gamepad2, PenTool, Users } from "lucide-react";

export const metadata = {
  title: "チームメンバー | LilQ",
  description: "LilQを支えるクリエイター、エンジニア、デザイナーたちのご紹介。",
};

// チームメンバーのデータ
const teamMembers = [
  {
    role: "代表 / エンジニア / クリエイター",
    name: "宮宅 晴規",
    nameAlphabet: "Miyake Haruki",
    avatar: "MH",
    avatarBg: "from-blue-500 to-purple-500",
    description: "LilQの代表であり、全事業の統括を行う。フロントエンドからバックエンドまでのWebアプリ開発基盤の構築と、動画編集事業のディレクションを担当。自身もイチ・クリエイターとして現場の声をプロダクトに反映させることを信条としている。",
    skills: ["Next.js", "TypeScript", "動画ディレクション", "UI/UXデザイン"],
    icon: <Code2 className="w-5 h-5" />
  },
  {
    role: "COO / ビデオエディター",
    name: "津留 豊",
    nameAlphabet: "Tsuru Yutaka",
    avatar: "TY",
    avatarBg: "from-emerald-400 to-teal-500",
    description: "LilQのCOOとして、会社全体の運営・経営管理を統括。現場ではビデオエディターとしても活動し、スムーズなプロジェクト進行とクオリティ管理を両立させている。運営と制作の両面からチームを支える要の存在。",
    skills: ["プロジェクトマネジメント", "運営管理", "動画編集", "ディレクション"],
    icon: <Users className="w-5 h-5" />
  },
  {
    role: "Creative Director / ビデオエディター",
    name: "古澤 怜真",
    nameAlphabet: "Furusawa Ryoma",
    avatar: "FR",
    avatarBg: "from-rose-400 to-pink-500",
    description: "クリエイティブディレクターとして、動画編集案件のメインクオリティを統括。制作依頼の窓口対応から実際の編集作業まで幅広く担当し、クライアントの要望を的確に映像へと落とし込むプロフェッショナル。",
    skills: ["Premiere Pro", "クリエイティブディレクション", "動画編集", "コンテ制作"],
    icon: <PenTool className="w-5 h-5" />
  }
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-[#FAFAFA] pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[10%] w-[20%] h-[20%] bg-purple-100/30 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-zinc-400 hover:text-zinc-800 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-1" />
              トップへ戻る
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              チームメンバー
            </h1>
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
              LilQは、各分野のプロフェッショナルが集まるクリエイティブチームです。
              技術とデザイン、そして「面白いものを創る」という熱量で、クリエイターを支援します。
            </p>
          </div>
        </section>

        {/* Team List */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 lg:space-y-16 mt-4">
              {teamMembers.map((member, i) => (
                <div key={i} className="group relative bg-[#FAFAFA] rounded-[2rem] border border-zinc-200 p-8 sm:p-10 hover:shadow-xl hover:border-zinc-300 transition-all duration-300">
                  <div className="md:flex gap-10 items-start">
                    {/* Avatar */}
                    <div className="shrink-0 mb-8 md:mb-0">
                      <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br ${member.avatarBg} flex items-center justify-center text-white text-3xl font-black shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                        {member.avatar}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-zinc-200 text-zinc-600 shadow-sm">
                          {member.icon}
                        </span>
                        <span className="text-xs font-bold text-zinc-500 tracking-widest uppercase">
                          {member.role}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-1">
                        {member.name}
                      </h2>
                      <p className="text-zinc-400 font-medium mb-6">
                        {member.nameAlphabet}
                      </p>
                      
                      <p className="text-zinc-600 leading-relaxed max-w-3xl mb-8">
                        {member.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {member.skills.map(skill => (
                          <span key={skill} className="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-700 text-xs font-bold rounded-full shadow-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Join Us Box */}
            <div className="mt-20 p-10 sm:p-12 bg-zinc-900 rounded-[2rem] text-center relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-[-50%] left-[-10%] w-[40%] h-[150%] bg-purple-500/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                  メンバー募集中
                </h3>
                <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed mb-8">
                  LilQでは、動画編集者やデザイナー、エンジニアなど、一緒にクリエイター支援のサービスを創り上げる仲間を探しています。
                </p>
                <a
                  href="https://twitter.com/LilQ_officialJP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-bold transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98]"
                >
                  XのDMでコンタクトをとる
                </a>
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
