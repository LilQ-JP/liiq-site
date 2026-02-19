"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, Mail } from "lucide-react";
import { XLogo } from "@/components/ui/x-logo";

type ContactForm = { name: string; email: string; message: string };

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="section section-base">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <AnimatedSection>
          <div className="card-surface p-12">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">お問い合わせありがとうございます</h3>
            <p className="text-muted-foreground">24時間以内にご連絡いたします。</p>
          </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section section-base">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">お問い合わせ</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            お問い合わせ
          </h2>
          <p className="text-muted-foreground">依頼前の相談・ご質問など、何でもお気軽にどうぞ。</p>
        </AnimatedHeader>

        <AnimatedStaggerContainer className="grid sm:grid-cols-2 gap-5 mb-8">
          <AnimatedStaggerItem>
          <a
            href="https://twitter.com/LilQ_officialJP"
            target="_blank"
            rel="noopener noreferrer"
            className="card-surface p-5 flex items-center gap-4 hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
              <XLogo className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <div className="font-bold text-foreground">X (Twitter) でDM</div>
              <div className="text-sm text-muted-foreground">@LilQ_officialJP</div>
            </div>
          </a>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
          <a
            href="mailto:contact@lilq-official.com"
            className="card-surface p-5 flex items-center gap-4 hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-foreground">メールで連絡</div>
              <div className="text-sm text-muted-foreground">contact@lilq-official.com</div>
            </div>
          </a>
          </AnimatedStaggerItem>
        </AnimatedStaggerContainer>

        <AnimatedSection>
        <div className="card-surface p-8">
          <h3 className="font-bold text-foreground text-lg mb-6 text-center">フォームから送信</h3>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="contact-name">お名前（任意）</Label>
                <Input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="例: はるき"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="contact-email">メールアドレス（必須）</Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="contact@example.com"
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="contact-message">お問い合わせ内容（必須）</Label>
              <Textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                placeholder="ご質問・ご相談内容をご記入ください。"
                className="mt-2"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full">
              <Send className="w-5 h-5 mr-2" />送信する
            </Button>
          </form>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
