import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LilQ｜配信の神シーン、500円で切り抜きます",
  description:
    "LilQは配信者向けの動画切り抜き・編集サービスです。ショート動画500円〜。Adobe Premiere Proでプロ品質の動画を制作。VTuber・ゲーム実況者・雑談配信者を全力サポート。",
  keywords: ["動画編集", "切り抜き", "VTuber", "ゲーム実況", "ショート動画", "低価格", "LilQ"],
  openGraph: {
    title: "LilQ｜配信の神シーン、500円で切り抜きます",
    description:
      "LilQは配信者向けの動画切り抜き・編集サービスです。ショート動画500円〜。プロ品質の動画を圧倒的低価格で。",
    siteName: "LilQ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LilQ｜配信の神シーン、500円で切り抜きます",
    description: "LilQは配信者向けの動画切り抜き・編集サービスです。ショート動画500円〜。",
    site: "@LilQ_officialJP",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LilQ（リルク）",
  description: "VTuber・ゲーム実況者・雑談配信者向けの動画編集・切り抜きサービス",
  url: "https://lilq.jp",
  telephone: "080-9838-5540",
  email: "contact@lilq-official.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "旭町3番9号リブリコーポ樹103",
    addressLocality: "相模原市南区",
    addressRegion: "神奈川県",
    postalCode: "252-0304",
    addressCountry: "JP",
  },
  sameAs: ["https://twitter.com/LilQ_officialJP"],
  priceRange: "¥500〜",
  serviceType: "動画編集・切り抜きサービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="glass" className={notoSansJP.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
