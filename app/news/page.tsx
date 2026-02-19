import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { news } from "@/content/news";

export const metadata: Metadata = {
  title: "ニュース | LilQ",
  description: "LilQの最新ニュース・お知らせ",
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}年${parseInt(m, 10)}月${parseInt(d, 10)}日`;
}

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            トップに戻る
          </Link>

          <h1 className="text-3xl font-semibold text-foreground mb-2">
            ニュース
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            会社のお知らせや更新情報をお届けします。
          </p>

          <ul className="space-y-6">
            {news.map((item, i) => (
              <li key={i} className="card-surface p-6">
                <time
                  dateTime={item.date}
                  className="text-xs text-muted-foreground block mb-2"
                >
                  {formatDate(item.date)}
                </time>
                <h2 className="font-semibold text-foreground text-lg mb-2">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      {item.title}
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  ) : (
                    item.title
                  )}
                </h2>
                {item.body && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {news.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              お知らせはまだありません。
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
