"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import site from "@/content/site.json";

export default function FAQSection() {
  return (
    <section id="faq" className="section-forma section-base" >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-12">
            <span className="label-sm mb-3 block">{site.faq.badge}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground">{site.faq.title}</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 sm:mt-3">
              {site.faq.descriptionLines[0]}
              {site.faq.descriptionLines[1]}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-2">
            {site.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-0 px-6"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "16px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                <AccordionTrigger className="text-left text-[13px] sm:text-[15px] font-semibold text-foreground hover:no-underline py-4 sm:py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
