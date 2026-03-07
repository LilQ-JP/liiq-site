"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { PaperPlaneTilt, EnvelopeSimple } from "@phosphor-icons/react";
import { XLogo } from "@/components/ui/x-logo";
import { gasUrl, basePath } from "@/lib/constants";
import site from "@/content/site.json";

type ContactForm = { name: string; email: string; message: string };

export default function ContactSection() {
  const router = useRouter();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (!gasUrl) {
      setSubmitting(false);
      alert("システム設定中です。設定完了までしばらくお待ちください。");
      return;
    }

    const searchParams = new URLSearchParams();
    searchParams.append("type", "contact");
    Object.entries(form).forEach(([key, value]) => searchParams.append(key, value));

    try {
      await fetch(gasUrl, {
        method: "POST",
        body: searchParams,
        mode: "no-cors"
      });
      router.push(`${basePath}/contact/thanks`);
    } catch {
      setSubmitting(false);
      alert(site.contact.form.alertFailed);
    }
  };

  return (
    <section id="contact" className="section-forma section-base" >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="label-sm mb-3 block">{site.contact.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">{site.contact.title}</h2>
            <p className="text-muted-foreground">
              {site.contact.descriptionLines[0]}
              <br className="hidden sm:block" />
              {site.contact.descriptionLines[1]}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedStaggerContainer className="grid sm:grid-cols-2 gap-4 mb-8">
          <AnimatedStaggerItem>
            <a
              href={site.site.twitterUrl} target="_blank" rel="noopener noreferrer"
              className="card-glass !p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
                <XLogo className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-foreground">{site.contact.cards.xTitle}</div>
                <div className="text-sm text-muted-foreground">{site.site.twitterHandle}</div>
              </div>
            </a>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem>
            <a
              href={`mailto:${site.site.email}`}
              className="card-glass !p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
                <EnvelopeSimple size={20} weight="duotone" className="text-foreground" />
              </div>
              <div>
                <div className="font-bold text-foreground">{site.contact.cards.emailTitle}</div>
                <div className="text-sm text-muted-foreground">{site.site.email}</div>
              </div>
            </a>
          </AnimatedStaggerItem>
        </AnimatedStaggerContainer>

        <AnimatedSection>
          <div className="card-glass !p-8">
            <h3 className="font-bold text-foreground text-lg mb-6 text-center">{site.contact.form.title}</h3>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="contact-name" className="text-foreground/70 text-sm font-semibold">{site.contact.form.nameLabel}</Label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={onChange} placeholder={site.contact.form.namePlaceholder} className="input-forma mt-2" />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-foreground/70 text-sm font-semibold">{site.contact.form.emailLabel}</Label>
                  <input id="contact-email" type="email" name="email" value={form.email} onChange={onChange} required placeholder={site.contact.form.emailPlaceholder} className="input-forma mt-2" />
                </div>
              </div>
              <div>
                <Label htmlFor="contact-message" className="text-foreground/70 text-sm font-semibold">{site.contact.form.messageLabel}</Label>
                <textarea id="contact-message" name="message" value={form.message} onChange={onChange} required rows={5} placeholder={site.contact.form.messagePlaceholder} className="input-forma mt-2 resize-none" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={privacyAgreed} onChange={(e) => setPrivacyAgreed(e.target.checked)} className="mt-0.5 h-4 w-4 rounded accent-purple-600" />
                <span className="text-xs text-muted-foreground">
                  {site.contact.form.privacyText}
                  <Link href="/privacy-policy" className="text-foreground hover:underline ml-1 font-medium">{site.contact.form.privacyLinkLabel}</Link>
                  {site.contact.form.privacyTextAfter}
                </span>
              </label>
              <button type="submit" disabled={submitting || !privacyAgreed} className="w-full btn-primary-gradient py-3.5 text-base disabled:opacity-30 disabled:cursor-not-allowed">
                <PaperPlaneTilt size={20} weight="bold" />
                {submitting ? site.contact.form.submittingLabel : site.contact.form.submitLabel}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
