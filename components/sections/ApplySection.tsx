"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Send, Check } from "lucide-react";
import { formspreeApplyId, basePath } from "@/lib/constants";

type FormData = {
  name: string;
  email: string;
  sns: string;
  serviceType: string;
  streamUrl: string;
  message: string;
};

export default function ApplySection() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    sns: "",
    serviceType: "",
    streamUrl: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (!formspreeApplyId) {
      setSubmitting(false);
      alert("フォームが設定されていません。X @LilQ_officialJP へDMでお申し込みください。");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeApplyId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _replyto: form.email,
          _subject: `【LilQ お申し込み】${form.name || "名無し"} さんから`,
        }),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      router.push(`${basePath}/apply/thanks`);
    } catch {
      setSubmitting(false);
      alert("送信に失敗しました。X @LilQ_officialJP へDMをお願いします。");
    }
  };

  return (
    <section id="apply" className="section section-alt section-pattern pattern-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 min-w-0">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">お申し込み</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            お申し込みフォーム
          </h2>
          <p className="text-muted-foreground">
            まずは気軽にご依頼ください。
            <br className="sm:hidden" />
            相談だけでも大歓迎です。
          </p>
        </AnimatedHeader>

        <AnimatedSection>
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-10 items-start max-w-5xl mx-auto min-w-0 w-full">
          <div className="lg:col-span-2 space-y-5 min-w-0">
            <div className="card-surface p-6 min-w-0 overflow-hidden">
              <h3 className="font-bold text-foreground text-base mb-4">依頼前のご確認</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                {[
                  "最短24時間で納品",
                  "修正2回まで無料",
                  "全額返金保証",
                  "相談だけでもOK",
                  "個人情報は厳重管理",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface p-6 min-w-0 overflow-hidden">
              <h4 className="font-bold text-foreground text-sm mb-3">サービス料金</h4>
              <div className="space-y-2 text-sm">
                {[
                  ["ショート動画（60秒）", "¥500"],
                  ["切り抜き動画（5分程度）", "¥3,000"],
                  ["カスタム動画", "要相談"],
                ].map(([label, price]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-bold text-foreground">{price}</span>
                  </div>
                ))}
              </div>
              <Badge variant="outline" className="text-xs mt-4 bg-black text-white border border-black/10">モニター価格で受付中</Badge>
            </div>
          </div>

          <div className="lg:col-span-3 min-w-0">
            <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8 space-y-5 min-w-0 overflow-hidden">
              <div className="grid sm:grid-cols-2 gap-5 min-w-0">
                <div className="min-w-0">
                  <Label htmlFor="name">お名前（ハンドルネーム可・会社名でもOK）</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="例: LilQ"
                    className="mt-2"
                  />
                </div>
                <div className="min-w-0">
                  <Label htmlFor="email">メールアドレス（必須）</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="contact@example.com"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 min-w-0">
                <div className="min-w-0">
                  <Label htmlFor="sns">SNSアカウント（X IDなど）</Label>
                  <Input
                    id="sns"
                    name="sns"
                    value={form.sns}
                    onChange={handleChange}
                    placeholder="@example"
                    className="mt-2"
                  />
                </div>
                <div className="min-w-0">
                  <Label htmlFor="serviceType">依頼内容（必須）</Label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    required
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-ring"
                  >
                    <option value="">選択してください</option>
                    <option value="short">ショート動画（¥500）</option>
                    <option value="clip">切り抜き動画（¥3,000）</option>
                    <option value="custom">カスタム動画（要相談）</option>
                    <option value="consult">まずは相談したい</option>
                  </select>
                </div>
              </div>

              <div className="min-w-0">
                <Label htmlFor="streamUrl">
                配信URL
                <br className="sm:hidden" />
                （素材となる配信アーカイブ）
              </Label>
                <Input
                  id="streamUrl"
                  type="url"
                  name="streamUrl"
                  value={form.streamUrl}
                  onChange={handleChange}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="mt-2"
                />
              </div>

              <div className="min-w-0">
                <Label htmlFor="message">ご要望・詳細</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="切り抜きたいシーンのタイムスタンプや希望する雰囲気などをご記入ください。"
                  className="mt-2"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
                />
                <span className="text-xs text-muted-foreground">
                  入力情報はサービス提供のみに使用します。
                  <br className="sm:hidden" />
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    プライバシーポリシー
                  </Link>
                  に同意の上、送信してください。
                </span>
              </label>

              <Button type="submit" size="lg" className="w-full rounded-full" disabled={submitting || !privacyAgreed}>
                <Send className="w-5 h-5 mr-2" />
                {submitting ? "送信中…" : "依頼する・相談する（無料）"}
              </Button>
            </form>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
