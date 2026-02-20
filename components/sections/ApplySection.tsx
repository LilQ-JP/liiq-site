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
import site from "@/content/site.json";

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
      alert(site.apply.form.alertNoForm);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeApplyId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _replyto: form.email,
          _subject: `${site.apply.form.subjectPrefix}${form.name || site.apply.form.subjectFallbackName}${site.apply.form.subjectSuffix}`,
        }),
      });
      if (!res.ok) throw new Error(site.apply.form.errorSend);
      router.push(`${basePath}/apply/thanks`);
    } catch {
      setSubmitting(false);
      alert(site.apply.form.alertFailed);
    }
  };

  return (
    <section id="apply" className="section section-alt section-pattern pattern-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 min-w-0">
        <AnimatedHeader className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">{site.apply.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            {site.apply.title}
          </h2>
          <p className="text-muted-foreground">
            {site.apply.descriptionLines[0]}
            <br className="sm:hidden" />
            {site.apply.descriptionLines[1]}
          </p>
        </AnimatedHeader>

        <AnimatedSection>
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-10 items-start max-w-5xl mx-auto min-w-0 w-full">
          <div className="lg:col-span-2 space-y-5 min-w-0">
            <div className="card-surface p-6 min-w-0 overflow-hidden">
              <h3 className="font-bold text-foreground text-base mb-4">{site.apply.precheckTitle}</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                {site.apply.precheckItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface p-6 min-w-0 overflow-hidden">
              <h4 className="font-bold text-foreground text-sm mb-3">{site.apply.priceTitle}</h4>
              <div className="space-y-2 text-sm">
                {site.apply.priceItems.map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-bold text-foreground">{item.price}</span>
                  </div>
                ))}
              </div>
              <Badge variant="outline" className="text-xs mt-4 bg-black text-white border border-black/10">{site.apply.priceBadge}</Badge>
            </div>
          </div>

          <div className="lg:col-span-3 min-w-0">
            <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8 space-y-5 min-w-0 overflow-hidden">
              <div className="grid sm:grid-cols-2 gap-5 min-w-0">
                <div className="min-w-0">
                  <Label htmlFor="name">{site.apply.form.nameLabel}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={site.apply.form.namePlaceholder}
                    className="mt-2"
                  />
                </div>
                <div className="min-w-0">
                  <Label htmlFor="email">{site.apply.form.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={site.apply.form.emailPlaceholder}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 min-w-0">
                <div className="min-w-0">
                  <Label htmlFor="sns">{site.apply.form.snsLabel}</Label>
                  <Input
                    id="sns"
                    name="sns"
                    value={form.sns}
                    onChange={handleChange}
                    placeholder={site.apply.form.snsPlaceholder}
                    className="mt-2"
                  />
                </div>
                <div className="min-w-0">
                  <Label htmlFor="serviceType">{site.apply.form.serviceTypeLabel}</Label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    required
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-ring"
                  >
                    <option value="">{site.apply.form.serviceTypePlaceholder}</option>
                    {site.apply.form.serviceTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="min-w-0">
                <Label htmlFor="streamUrl">{site.apply.form.streamUrlLabel}</Label>
                <Input
                  id="streamUrl"
                  type="url"
                  name="streamUrl"
                  value={form.streamUrl}
                  onChange={handleChange}
                  placeholder={site.apply.form.streamUrlPlaceholder}
                  className="mt-2"
                />
              </div>

              <div className="min-w-0">
                <Label htmlFor="message">{site.apply.form.messageLabel}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={site.apply.form.messagePlaceholder}
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
                  {site.apply.form.privacyText}
                  <br className="sm:hidden" />
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    {site.apply.form.privacyLinkLabel}
                  </Link>
                  {site.apply.form.privacyTextAfter}
                </span>
              </label>

              <Button type="submit" size="lg" className="w-full rounded-full" disabled={submitting || !privacyAgreed}>
                <Send className="w-5 h-5 mr-2" />
                {submitting ? site.apply.form.submittingLabel : site.apply.form.submitLabel}
              </Button>
            </form>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
