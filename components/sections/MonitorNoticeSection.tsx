"use client";

import { Warning } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function MonitorNoticeSection() {
    return (
        <section className="px-5 sm:px-8 max-w-7xl mx-auto -mb-12 relative z-10">
            <AnimatedSection>
                <div
                    className="p-6 sm:p-8 text-center"
                    style={{
                        background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)",
                        borderRadius: "20px",
                        border: "1px solid rgba(245,158,11,0.3)",
                        boxShadow: "0 4px 20px rgba(245,158,11,0.25)",
                        color: "#1a1a1a",
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-3">
                        <h3 className="text-lg sm:text-xl font-extrabold flex items-center justify-center gap-2">
                            <Warning size={24} weight="bold" />
                            モニター価格は2026年3月31日をもって終了します
                        </h3>
                        <div className="space-y-1.5 font-medium text-sm" style={{ color: "rgba(26,26,26,0.75)" }}>
                            <p>4月1日以降はショート動画¥3,000〜、切り抜き動画¥8,000〜の通常価格に改定されます。</p>
                            <p className="font-bold border-b-2 border-[#1a1a1a] inline-block" style={{ color: "#1a1a1a" }}>
                                現在ご依頼いただいた方は、継続依頼に限り特別価格を適用いたします。
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}
