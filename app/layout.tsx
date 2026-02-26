import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import site from "@/content/site.json";

const notoSansJP = Noto_Sans_JP({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.meta.siteTitle,
  description: site.meta.siteDescription,
  keywords: site.meta.keywords,
  openGraph: site.meta.openGraph,
  twitter: site.meta.twitter,
};

const jsonLd = site.jsonLd;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="glass" className={notoSansJP.variable}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BWG8ZGTTS8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-BWG8ZGTTS8');
             `,
          }}
        />
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
