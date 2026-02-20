import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/site.json";

export default function ContactThanksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen flex items-center justify-center px-5">
        <div className="max-w-2xl w-full text-center">
          <div className="card-surface p-12">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">{site.pages.contactThanks.title}</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {site.pages.contactThanks.messageLines[0]}
            </p>
            <Button asChild className="rounded-full">
              <Link href="/">{site.pages.contactThanks.backLabel}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
