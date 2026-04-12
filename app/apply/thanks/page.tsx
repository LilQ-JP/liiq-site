"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Upload, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/site.json";

/** プラン別 PayPal 決済リンク */
const paypalLinks: Record<string, { label: string; url: string }> = {
  "short-regular": {
    label: "ショート動画制作（¥1,000〜）",
    url: "https://www.paypal.com/ncp/payment/CVY4BELDWVJCJ",
  },
  "clip-short": {
    label: "切り抜き動画・〜5分（¥5,000）",
    url: "https://www.paypal.com/ncp/payment/NPVJRFL75JURA",
  },
  "clip-long": {
    label: "切り抜き動画・5〜15分（¥8,000）",
    url: "https://www.paypal.com/ncp/payment/KNU6MMRTQR38S",
  },
};

function StepBadge({ num, label, done, active }: { num: string; label: string; done: boolean; active: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${done
          ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110"
          : active
            ? "bg-primary/20 text-primary ring-2 ring-primary/40 animate-pulse"
            : "bg-black/[0.06] text-foreground/40"
          }`}
      >
        {done ? "✓" : num}
      </div>
      <span
        className={`text-[11px] sm:text-xs font-medium transition-colors duration-500 ${done ? "text-primary font-semibold" : active ? "text-foreground" : "text-muted-foreground"
          }`}
      >
        {label}
      </span>
    </div>
  );
}

function StepConnector({ done }: { done: boolean }) {
  return (
    <div className="w-8 sm:w-14 h-0.5 rounded-full overflow-hidden bg-black/10">
      <div
        className={`h-full bg-primary transition-all duration-700 ease-out ${done ? "w-full" : "w-0"}`}
      />
    </div>
  );
}

function ThanksContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "";
  const paypal = paypalLinks[plan];

  // localStorage でステップの進行状態を保持（リロードしても消えない）
  const storageKey = `lilq-thanks-${plan}`;

  const [step2Done, setStep2Done] = useState(false);
  const [step3Done, setStep3Done] = useState(false);

  // マウント後に localStorage から復元（SSR との不一致を防ぐ）
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as { s2: boolean; s3: boolean };
        if (parsed.s2) setStep2Done(true);
        if (parsed.s3) setStep3Done(true);
      }
    } catch { /* ignore */ }
  }, [storageKey]);

  const handleUploadClick = () => {
    setStep2Done(true);
    try { localStorage.setItem(storageKey, JSON.stringify({ s2: true, s3: step3Done })); } catch { /* ignore */ }
  };

  const handlePayClick = () => {
    setStep3Done(true);
    try { localStorage.setItem(storageKey, JSON.stringify({ s2: step2Done, s3: true })); } catch { /* ignore */ }
  };

  const isConsult = plan === "consult";

  return (
    <main className="pt-16 min-h-screen flex items-center justify-center px-5 py-20">
      <div className="max-w-2xl w-full text-center">
        <div className="card-surface p-8 sm:p-12 border-2 border-primary/20">
          {/* ── ヘッダー ── */}
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-primary" />
          </div>

          {isConsult ? (
            /* ── 相談のみ：シンプルな完了メッセージ ── */
            <>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                送信完了しました！
              </h1>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                ご相談内容を受け付けました。<br />
                24時間以内にメールまたはXのDMでご連絡いたします。
              </p>
              <Button
                asChild
                variant="ghost"
                className="rounded-full text-muted-foreground hover:text-foreground"
              >
                <Link href="/">{site.pages.applyThanks.backLabel}</Link>
              </Button>
            </>
          ) : (
            /* ── 通常の申し込み：3ステップフロー ── */
            <>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {site.pages.applyThanks.title}
              </h1>
              <p className="text-muted-foreground text-sm mb-8">
                以下のステップを順番に進めてください。
              </p>

              {/* ── ステップバー ── */}
              <div className="flex items-center justify-center gap-0 mb-10">
                <StepBadge num="1" label="お申し込み" done={true} active={false} />
                <StepConnector done={step2Done} />
                <StepBadge num="2" label="素材アップロード" done={step2Done} active={!step2Done} />
                <StepConnector done={step3Done} />
                <StepBadge num="3" label="納品・お支払い" done={step3Done} active={step2Done && !step3Done} />
              </div>

              {/* ── Step 2: 素材アップロード ── */}
              <div
                className={`p-6 sm:p-8 rounded-2xl mb-6 border transition-all duration-500 ${step2Done
                  ? "bg-primary/5 border-primary/20"
                  : "bg-muted/50 border-black/[0.04]"
                  }`}
              >
                <h2 className="text-lg font-bold text-foreground mb-1 flex items-center justify-center gap-2">
                  <Upload size={20} className="text-primary" />
                  Step 2：素材をアップロード
                  {step2Done && <span className="text-primary text-sm">✓ 完了</span>}
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  以下の専用フォーム（Googleフォーム）から素材データのアップロードをお願いいたします。
                </p>
                <a
                  href={site.pages.applyThanks.uploadButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleUploadClick}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 ${step2Done
                    ? "btn-primary-gradient opacity-70"
                    : "btn-primary-gradient"
                    }`}
                >
                  <Upload size={24} />
                  {site.pages.applyThanks.uploadButtonLabel}
                </a>
                <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-xs text-red-500 font-bold mb-1">
                    ※ 素材のアップロードは必須です。
                  </p>
                  <p className="text-xs text-amber-800 font-semibold">
                    ⚠️ アップロードが完了しましたら、担当者からのご連絡をお待ちください。
                  </p>
                </div>
              </div>

              {/* ── Step 3: お支払い ── */}
              <div
                className={`p-6 sm:p-8 rounded-2xl mb-8 border transition-all duration-500 ${!step2Done
                  ? "bg-muted/30 border-black/[0.02] opacity-50"
                  : step3Done
                    ? "bg-primary/5 border-primary/20"
                    : "bg-muted/50 border-black/[0.04]"
                  }`}
              >
                <h2 className="text-lg font-bold text-foreground mb-1 flex items-center justify-center gap-2">
                  <CreditCard size={20} className="text-primary" />
                  Step 3：納品・お支払い
                  {step3Done && <span className="text-primary text-sm">✓ 完了</span>}
                </h2>
                {paypal ? (
                  <>
                    <p className="text-sm text-muted-foreground mb-1">
                      選択プラン：<span className="font-semibold text-foreground">{paypal.label}</span>
                    </p>
                    <p className="text-sm text-muted-foreground mb-5">
                      制作完了後、データ（Googleドライブ等）をご案内します。
                      <br />納品物のご確認が完了しましたら、お支払いをお願いいたします。
                    </p>
                    {step2Done ? (
                      <a
                        href={paypal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handlePayClick}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                        style={{
                          background: "linear-gradient(135deg, #0070ba 0%, #003087 100%)",
                          color: "#fff",
                        }}
                      >
                        <CreditCard size={24} />
                        PayPalでお支払い
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground italic">
                        制作完了後にお支払いいただけます。現在は担当者からのご連絡をお待ちください。
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    担当者よりお見積もりをご提示後、お支払い方法をご案内いたします。
                  </p>
                )}
              </div>

              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                {site.pages.applyThanks.messageLines[1]}
              </p>

              <Button
                asChild
                variant="ghost"
                className="rounded-full text-muted-foreground hover:text-foreground"
              >
                <Link href="/">{site.pages.applyThanks.backLabel}</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ApplyThanksPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <ThanksContent />
      </Suspense>
      <Footer />
    </>
  );
}
