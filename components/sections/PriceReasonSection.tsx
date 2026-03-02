"use client";

import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";

export default function PriceReasonSection() {
    const reasons = [
        {
            icon: "✨",
            title: "適正な品質を届けるため",
            desc: "モニター期間を経て、VTuber専門チームとしての編集品質・対応スピードをさらに高めました。その分のコストを価格に反映しています。",
        },
        {
            icon: "👥",
            title: "チーム体制を強化するため",
            desc: "3人体制での安定した制作・納期厳守・修正対応を続けるために、持続可能な価格設計にしました。",
        },
        {
            icon: "🙏",
            title: "既存クライアント様への感謝",
            desc: "モニター期間中にご依頼いただいた方には、継続依頼に限り特別価格を適用いたします。",
        },
    ];

    return (
        <section className="section bg-zinc-50 dark:bg-zinc-900/50 pt-32 pb-20 sm:pt-40 sm:pb-[var(--section-padding)]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <AnimatedHeader className="text-center mb-12">
                    <Badge variant="outline" className="mb-3 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50">Price Update</Badge>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                        なぜ価格を改定するのか
                    </h2>
                </AnimatedHeader>

                <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reasons.map((r, i) => (
                        <AnimatedStaggerItem key={i}>
                            <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4">{r.icon}</div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {r.desc}
                                </p>
                            </div>
                        </AnimatedStaggerItem>
                    ))}
                </AnimatedStaggerContainer>
            </div>
        </section>
    );
}
