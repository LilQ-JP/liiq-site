import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "プライバシーポリシー | LilQ",
};

const sections = [
  {
    title: "1. 収集する情報",
    content: `LilQ（以下「当サービス」）は、サービス提供・お問い合わせ対応のために以下の情報を収集します。
・メールアドレス
・SNSアカウント（X IDなど）
・お名前（ハンドルネーム可）
・配信URL・動画URL（素材として使用するもの）
・その他、お客様が任意でご提供いただいた情報`,
  },
  {
    title: "2. 情報の利用目的",
    content: `収集した個人情報は、以下の目的のみに使用します。
・サービスの提供およびご連絡
・お問い合わせへの回答
・サービス改善のための分析（個人を特定しない形での統計利用）
・法的義務の履行`,
  },
  {
    title: "3. 第三者への提供",
    content: "当サービスは、法令に基づく場合を除き、お客様の個人情報を第三者に提供・開示・共有することはありません。",
  },
  {
    title: "4. 情報の管理",
    content: "お客様の個人情報は適切な安全管理措置を講じて厳重に管理します。不正アクセス・紛失・漏洩・改ざんを防止するための適切な対策を実施します。",
  },
  {
    title: "5. クッキー（Cookie）について",
    content: "当サービスのWebサイトでは、サービス向上のためにクッキーを使用する場合があります。ブラウザの設定によりクッキーを無効にすることができますが、一部のサービスがご利用いただけなくなる場合があります。",
  },
  {
    title: "6. 個人情報の開示・訂正・削除",
    content: "お客様は、当サービスが保有する自身の個人情報について、開示・訂正・削除を請求することができます。ご希望の場合は、以下のメールアドレスまでお問い合わせください。",
  },
  {
    title: "7. プライバシーポリシーの変更",
    content: "当サービスは、法令の改正やサービス内容の変更等に伴い、本プライバシーポリシーを変更することがあります。変更した場合は、当Webサイト上にて告知します。",
  },
  {
    title: "8. お問い合わせ",
    content: `個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
LilQ（リルク）
代表: 宮宅 晴規
Email: contact@lilq-official.com
X: @LilQ_officialJP`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          トップに戻る
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">
          プライバシーポリシー
        </h1>
        <p className="text-sm text-muted-foreground mb-10">最終更新日：2026年</p>

        <div className="card-surface p-8 space-y-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            LilQ（リルク）（以下「当サービス」）は、お客様の個人情報の保護を重要な責務と認識し、
            以下のプライバシーポリシーを定め、適切な取り扱いに努めます。
          </p>

          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-base font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-8 text-center">
          © {new Date().getFullYear()} LilQ（リルク）. All rights reserved.
        </p>
      </div>
    </main>
  );
}
