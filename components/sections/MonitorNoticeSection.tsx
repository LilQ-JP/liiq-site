"use client";

import { AlertTriangle } from "lucide-react";
import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";

export default function MonitorNoticeSection() {
    return (
        <section className="px-5 sm:px-8 max-w-7xl mx-auto -mb-12 relative z-10">
            <AnimatedSection>
                <div className="bg-yellow-400 text-black p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-yellow-500 text-center">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h3 className="text-xl sm:text-2xl font-black flex items-center justify-center gap-2">
                            <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8" />
                            モニター価格は2026年3月31日をもって終了します
                        </h3>
                        <div className="space-y-2 mt-2 font-medium text-sm sm:text-base">
                            <p>4月1日以降はショート動画¥3,000〜、切り抜き動画¥8,000〜の通常価格に改定されます。</p>
                            <p className="font-bold border-b-2 border-black inline-block">現在ご依頼いただいた方は、継続依頼に限り特別価格を適用いたします。</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}
