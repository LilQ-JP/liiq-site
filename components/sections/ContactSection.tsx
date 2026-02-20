"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Send, Mail } from "lucide-react";
import { XLogo } from "@/components/ui/x-logo";
import { formspreeContactId, basePath } from "@/lib/constants";
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

    if (!formspreeContactId) {
      setSubmitting(false);
      alert(site.contact.form.alertNoForm);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeContactId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _replyto: form.email,
          _subject: `${site.contact.form.subjectPrefix}${form.name || site.contact.form.subjectFallbackName}${site.contact.form.subjectSuffix}`,
        }),
      });
      if (!res.ok) throw new Error(site.contact.form.errorSend);
      router.push(`${basePath}/contact/thanks`);
    } catch {
      setSubmitting(false);
      alert(site.contact.form.alertFailed);
    }
  };

  return (
    <section id="contact" className="section section-base">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">{site.contact.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            {site.contact.title}
          </h2>
          <p className="text-muted-foreground">
            {site.contact.descriptionLines[0]}
            <br className="sm:hidden" />
            {site.contact.descriptionLines[1]}
          </p>
        </AnimatedHeader>

        <AnimatedStaggerContainer className="grid sm:grid-cols-2 gap-5 mb-8">
          <AnimatedStaggerItem>
          <a
            href={site.site.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-surface p-5 flex items-center gap-4 hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
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
            className="card-surface p-5 flex items-center gap-4 hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-foreground">{site.contact.cards.emailTitle}</div>
              <div className="text-sm text-muted-foreground">{site.site.email}</div>
            </div>
          </a>
          </AnimatedStaggerItem>
        </AnimatedStaggerContainer>

        <AnimatedSection>
        <div className="card-surface p-8">
          <h3 className="font-bold text-foreground text-lg mb-6 text-center">{site.contact.form.title}</h3>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="contact-name">{site.contact.form.nameLabel}</Label>
                <Input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={site.contact.form.namePlaceholder}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="contact-email">{site.contact.form.emailLabel}</Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder={site.contact.form.emailPlaceholder}
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="contact-message">{site.contact.form.messageLabel}</Label>
              <Textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                placeholder={site.contact.form.messagePlaceholder}
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
                {site.contact.form.privacyText}
                <Link href="/privacy-policy" className="text-primary hover:underline ml-1">
                  {site.contact.form.privacyLinkLabel}
                </Link>
                {site.contact.form.privacyTextAfter}
              </span>
            </label>
            <Button type="submit" size="lg" className="w-full rounded-full" disabled={submitting || !privacyAgreed}>
              <Send className="w-5 h-5 mr-2" />
              {submitting ? site.contact.form.submittingLabel : site.contact.form.submitLabel}
            </Button>
          </form>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
