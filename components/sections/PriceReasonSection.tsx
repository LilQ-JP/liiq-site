"use client";

import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

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
        <section className="section-forma pt-32 sm:pt-40 section-base" >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <span className="label-sm mb-3 block">Price Update</span>
                        <h2 className="text-2xl sm:text-3xl text-foreground">
                            なぜ価格を改定するのか
                        </h2>
                    </div>
                </AnimatedSection>

                <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {reasons.map((r, i) => (
                        <AnimatedStaggerItem key={i}>
                            <div className="card-glass !p-8 h-full">
                                <div className="text-3xl mb-4">{r.icon}</div>
                                <h3 className="text-lg font-bold text-foreground mb-3">{r.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                            </div>
                        </AnimatedStaggerItem>
                    ))}
                </AnimatedStaggerContainer>
            </div>
        </section>
    );
}
