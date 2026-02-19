"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, Check } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  sns: string;
  serviceType: string;
  streamUrl: string;
  message: string;
};

export default function ApplySection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    sns: "",
    serviceType: "",
    streamUrl: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="apply" className="section section-alt section-pattern pattern-dots">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <AnimatedSection>
          <div className="card-surface p-12">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">ご依頼ありがとうございます</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              お申し込みを受け付けました。24時間以内にメールまたはXのDMにてご連絡いたします。
            </p>
            <p className="text-sm text-muted-foreground">
              急ぎの場合は X @LilQ_officialJP までDMください。
            </p>
          </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="section section-alt section-pattern pattern-dots">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">お申し込み</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            お申し込みフォーム
          </h2>
          <p className="text-muted-foreground">まずは気軽にご依頼ください。相談だけでも大歓迎です。</p>
        </AnimatedHeader>

        <AnimatedSection>
        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-5">
            <div className="card-surface p-6">
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

            <div className="card-surface p-6">
              <h4 className="font-bold text-foreground text-sm mb-3">サービス料金</h4>
              <div className="space-y-2 text-sm">
                {[
                  ["ショート動画（〜60秒）", "¥500〜"],
                  ["切り抜き動画（5分程度）", "¥3,000〜"],
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

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-surface p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">お名前（ハンドルネーム可）</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="例: はるき"
                    className="mt-2"
                  />
                </div>
                <div>
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

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
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
                <div>
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
                    <option value="short">ショート動画（¥500〜）</option>
                    <option value="clip">切り抜き動画（¥3,000〜）</option>
                    <option value="custom">カスタム動画（要相談）</option>
                    <option value="consult">まずは相談したい</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="streamUrl">配信URL（素材となる配信アーカイブ）</Label>
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

              <div>
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

              <p className="text-xs text-muted-foreground">
                入力情報はサービス提供のみに使用します。
                <a href="/privacy-policy" className="text-primary hover:underline ml-1">プライバシーポリシー</a>
                に同意の上、送信してください。
              </p>

              <Button type="submit" size="lg" className="w-full rounded-full">
                <Send className="w-5 h-5 mr-2" />
                依頼する・相談する（無料）
              </Button>
            </form>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
