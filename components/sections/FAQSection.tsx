"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

const faqs = [
  { q: "どんな配信でも対応できますか？", a: "はい、VTuber・ゲーム実況・雑談配信など、ほとんどのジャンルに対応しています。まずはお気軽にご相談ください。" },
  { q: "素材の送り方を教えてください。", a: "YouTubeやTwitchなどの配信アーカイブURLをフォームにご記入ください。非公開・メンバー限定の場合は別途ご相談ください。" },
  { q: "修正の回数制限はありますか？", a: "各プランにつき2回まで無料で修正に対応しています。3回目以降は1回あたり500円の追加料金が発生します。" },
  { q: "納期の目安を教えてください。", a: "ショート動画は最短24時間、切り抜き動画は2〜3営業日が目安です。Priority Production（+3,000円）で優先対応も可能です。" },
  { q: "キャンセルはできますか？", a: "制作開始前のキャンセルは全額返金いたします。制作途中のキャンセルについては別途ご相談ください。" },
  { q: "納品物の著作権は誰にありますか？", a: "納品後の著作権はお客様に帰属します。YouTube・TikTok・X等、どのプラットフォームでもご自由にお使いいただけます。" },
  { q: "VTuberのアバターや版権素材がある場合は？", a: "ご提供いただいたアバター・素材・BGMをそのまま使用します。著作権のある素材についてはお客様側での使用許諾の確認をお願いしています。" },
  { q: "領収書・請求書の発行は可能ですか？", a: "はい、対応可能です。ご依頼時にご連絡いただければ発行いたします。" },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section section-base">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            よくある質問
          </h2>
          <p className="text-muted-foreground">ご不明な点はお気軽にお問い合わせください。</p>
        </AnimatedHeader>

        <AnimatedStaggerContainer>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AnimatedStaggerItem key={i}>
            <AccordionItem
              value={`item-${i}`}
              className="card-surface px-6"
            >
              <AccordionTrigger className="text-left font-bold text-foreground py-5 text-sm sm:text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
            </AnimatedStaggerItem>
          ))}
        </Accordion>
        </AnimatedStaggerContainer>
      </div>
    </section>
  );
}
