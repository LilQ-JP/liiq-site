"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedHeader, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const faqs = site.faq.items;

export default function FAQSection() {
  return (
    <section id="faq" className="section section-base">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedHeader className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">{site.faq.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            {site.faq.title}
          </h2>
          <p className="text-muted-foreground">
            {site.faq.descriptionLines[0]}
            <br className="sm:hidden" />
            {site.faq.descriptionLines[1]}
          </p>
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
