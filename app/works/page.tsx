import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorksGrid from "@/components/sections/WorksGrid";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "制作実績 | LilQ",
  description: "LilQの制作実績一覧。ショート動画の事例をご覧いただけます。",
};

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            トップに戻る
          </Link>

          <div className="text-center mb-12 sm:mb-14">
            <Badge variant="secondary" className="mb-3 text-sm sm:text-base px-4 py-1.5">制作実績</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
              制作実績一覧
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              実際に制作した動画を一覧で掲載しています。
            </p>
          </div>

          <WorksGrid />

          <p className="text-center text-sm sm:text-base text-muted-foreground mt-8">
            モニター期間中のため実績数は少ないですが、随時更新します。
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
