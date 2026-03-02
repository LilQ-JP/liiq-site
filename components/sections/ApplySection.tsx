"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { PaperPlaneTilt, Check } from "@phosphor-icons/react";
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
  const [monitorAgreed, setMonitorAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    if (!formspreeApplyId) { setSubmitting(false); alert(site.apply.form.alertNoForm); return; }
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
    <section
      id="apply"
      className="section-forma"
      style={{
        background: "#F2F2F0",
        backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 60%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 min-w-0">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-12">
            <span className="label-sm mb-3 block">{site.apply.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">{site.apply.title}</h2>
            <p className="text-muted-foreground">
              {site.apply.descriptionLines[0]}
              <br className="hidden sm:block" />
              {site.apply.descriptionLines[1]}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-5 items-start max-w-5xl mx-auto min-w-0 w-full">
            {/* Side cards */}
            <div className="lg:col-span-2 space-y-4 min-w-0">
              <div className="card-glass !p-6 min-w-0 overflow-hidden">
                <h3 className="font-bold text-foreground text-base mb-4">{site.apply.precheckTitle}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {site.apply.precheckItems.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <Check size={16} weight="bold" className="text-foreground shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                  {form.serviceType === "short-monitor" && (
                    <label className="flex items-start gap-2.5 cursor-pointer mt-2 p-3 rounded-xl border"
                      style={{
                        background: "rgba(139,92,246,0.06)",
                        borderColor: "rgba(139,92,246,0.2)",
                      }}
                    >
                      <input
                        type="checkbox" checked={monitorAgreed}
                        onChange={(e) => setMonitorAgreed(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded accent-purple-600 shrink-0"
                      />
                      <span className="leading-snug text-sm font-semibold text-foreground">制作実績としてサイト・SNSへの掲載に同意する（モニター価格適用条件）</span>
                    </label>
                  )}
                </div>
              </div>

              <div className="card-glass !p-6 min-w-0 overflow-hidden">
                <h4 className="font-bold text-foreground text-sm mb-4">{site.apply.priceTitle}</h4>
                <div className="space-y-2.5 text-sm">
                  {site.apply.priceItems.map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.label}</span>
                      <div className="flex items-center gap-2">
                        {"originalPrice" in item && (
                          <span className="text-muted-foreground/50 line-through text-xs font-semibold">
                            {(item as any).originalPrice}
                          </span>
                        )}
                        <span className="font-bold text-foreground">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="tag-dark text-xs mt-4 inline-block">{site.apply.priceBadge}</span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 min-w-0">
              <form onSubmit={handleSubmit} className="card-glass !p-6 sm:!p-8 space-y-5 min-w-0 overflow-hidden">
                <div className="grid sm:grid-cols-2 gap-5 min-w-0">
                  <div className="min-w-0">
                    <Label htmlFor="name" className="text-foreground/70 text-sm font-semibold">{site.apply.form.nameLabel}</Label>
                    <input
                      id="name" name="name" value={form.name} onChange={handleChange}
                      placeholder={site.apply.form.namePlaceholder}
                      className="input-forma mt-2"
                    />
                  </div>
                  <div className="min-w-0">
                    <Label htmlFor="email" className="text-foreground/70 text-sm font-semibold">{site.apply.form.emailLabel}</Label>
                    <input
                      id="email" type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder={site.apply.form.emailPlaceholder}
                      className="input-forma mt-2"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 min-w-0">
                  <div className="min-w-0">
                    <Label htmlFor="sns" className="text-foreground/70 text-sm font-semibold">{site.apply.form.snsLabel}</Label>
                    <input
                      id="sns" name="sns" value={form.sns} onChange={handleChange}
                      placeholder={site.apply.form.snsPlaceholder}
                      className="input-forma mt-2"
                    />
                  </div>
                  <div className="min-w-0">
                    <Label htmlFor="serviceType" className="text-foreground/70 text-sm font-semibold">{site.apply.form.serviceTypeLabel}</Label>
                    <select
                      id="serviceType" name="serviceType" value={form.serviceType} onChange={handleChange} required
                      className="input-forma mt-2"
                    >
                      <option value="">{site.apply.form.serviceTypePlaceholder}</option>
                      {site.apply.form.serviceTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="min-w-0">
                  <Label htmlFor="streamUrl" className="text-foreground/70 text-sm font-semibold">{site.apply.form.streamUrlLabel}</Label>
                  <input
                    id="streamUrl" type="url" name="streamUrl" value={form.streamUrl} onChange={handleChange}
                    placeholder={site.apply.form.streamUrlPlaceholder}
                    className="input-forma mt-2"
                  />
                </div>

                <div className="min-w-0">
                  <Label htmlFor="message" className="text-foreground/70 text-sm font-semibold">{site.apply.form.messageLabel}</Label>
                  <textarea
                    id="message" name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder={site.apply.form.messagePlaceholder}
                    className="input-forma mt-2 resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox" checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded accent-purple-600"
                  />
                  <span className="text-xs text-muted-foreground">
                    {site.apply.form.privacyText}
                    <Link href="/privacy-policy" className="text-foreground hover:underline ml-1 font-medium">
                      {site.apply.form.privacyLinkLabel}
                    </Link>
                    {site.apply.form.privacyTextAfter}
                  </span>
                </label>

                <div className="text-center text-sm text-muted-foreground bg-[#f5f5f5] p-3 rounded-xl border border-black/[0.04]">
                  {site.apply.form.noticeText.split('。').map((segment, idx, arr) => (
                    <span key={idx}>
                      {segment}{idx < arr.length - 1 ? '。' : ''}
                      {idx === 0 && <br className="hidden sm:block" />}
                    </span>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={submitting || !privacyAgreed || (form.serviceType === "short-monitor" && !monitorAgreed)}
                  className="w-full btn-primary-gradient py-3.5 text-base disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <PaperPlaneTilt size={20} weight="bold" />
                  {submitting ? site.apply.form.submittingLabel : site.apply.form.submitLabel}
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
