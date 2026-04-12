import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "プライバシーポリシー | LilQ",
  description: "LilQにおける個人情報の取り扱い方針（プライバシーポリシー）について。",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        {/* Header */}
        <section className="bg-[#FAFAFA] pt-24 pb-16 border-b border-zinc-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-zinc-400 hover:text-zinc-800 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              トップへ戻る
            </Link>
            <h1 className="text-3xl font-black text-zinc-900">プライバシーポリシー</h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-zinc max-w-none prose-headings:font-bold prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed">
              <p>
                LilQ（以下「当事業」）は、お客様の個人情報保護の重要性について認識し、個人情報の取り扱いに関する基本方針（プライバシーポリシー）を以下のように定めます。
              </p>

              <h3>1. 個人情報の収集・取得について</h3>
              <p>
                当事業は、以下の場合に必要な範囲でお客様の個人情報を取得することがあります。
              </p>
              <ul>
                <li>サービスに関するお問い合わせやご依頼のご連絡時</li>
                <li>お見積もり、ご契約、お支払いなどの各種お手続き時</li>
                <li>当事業が提供するWebアプリケーションのご利用時（IPアドレス等の通信ログ等）</li>
              </ul>

              <h3>2. 取得する個人情報の内容</h3>
              <p>
                お名前、メールアドレス、各種SNSアカウント情報、決済情報（直接弊社は保持せず決済サービス側にて処理されます）、その他ご相談内容に含まれる情報など。
              </p>

              <h3>3. 個人情報の利用目的</h3>
              <p>
                当事業は、取得した個人情報を以下の目的のために利用させていただきます。
              </p>
              <ul>
                <li>お問い合わせ、ご相談に対する回答のご連絡</li>
                <li>サービスの提供、納品、アフターサポートのため</li>
                <li>ご利用代金の請求、確認、決済手続きのため</li>
                <li>サービス改善や新しいサービスの開発に向けた分析のため</li>
              </ul>

              <h3>4. 個人情報の第三者への提供</h3>
              <p>
                当事業は、次の場合を除き、原則としてお客様の同意なく第三者に個人情報を提供することはありません。
              </p>
              <ul>
                <li>法令に基づく場合</li>
                <li>生命、身体または財産の保護のために必要であって、お客様の同意を得ることが困難な場合</li>
                <li>各種サービスの決済手段において、決済代行会社に対して必要な情報を提供する場合</li>
              </ul>

              <h3>5. 個人情報の管理と安全対策</h3>
              <p>
                当事業は、個人情報の漏洩、紛失、改ざんを防止するため、適切なセキュリティ対策を講じ、厳重に管理いたします。
              </p>

              <h3>6. クッキー（Cookie）やアクセス解析ツールについて</h3>
              <p>
                当ウェブサイトおよび各アプリケーションでは、サービスの利便性向上や利用状況の分析のためにCookieや類似のトラッキング技術を利用する場合があります。これらはブラウザの設定により無効化することが可能です。
              </p>

              <h3>7. ウェブアプリケーション（TCGツール等）における通信とデータについて</h3>
              <p>
                当事業が提供するPeerJS(WebRTC)を利用したアプリケーションでは、通信はP2P（Peer to Peer）で行われ、当事業のサーバーに通信内容や個人を特定するデータが保存されることはありません。
              </p>

              <h3>8. プライバシーポリシーの変更</h3>
              <p>
                本ポリシーの内容は、法令の変更やサービス内容の見直しに伴い、適宜改定されることがあります。改定された場合は、当ウェブサイト上でお知らせします。
              </p>

              <h3>9. 個人情報の開示・訂正・削除およびお問い合わせ先</h3>
              <p>
                お客様ご本人からの個人情報の開示、訂正、削除等のご請求がある場合、または本ポリシーに関するお問い合わせについては、以下の窓口までご連絡ください。
              </p>
              <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 mt-6">
                <p className="font-bold text-zinc-900 mb-1">【お問い合わせ窓口】</p>
                <p className="mb-0">LilQ（リルク）</p>
                <p className="mb-0">代表: 宮宅 晴規</p>
                <p className="mb-0">E-mail: contact@lilq-official.com</p>
              </div>
            </div>
            
            <p className="text-xs text-zinc-400 mt-16 text-right">
              2026年2月 制定
            </p>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
