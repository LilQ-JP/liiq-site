"use client";

import { NumberSquareOne, NumberSquareTwo, NumberSquareThree, ArrowRight } from "@phosphor-icons/react";
import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";
import site from "@/content/site.json";

const stepIcons = [NumberSquareOne, NumberSquareTwo, NumberSquareThree];
const steps = site.flow.steps;

export default function FlowSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-forma section-base" >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="label-sm mb-3 block">{site.flow.badge}</span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">{site.flow.title}</h2>
            <p className="text-muted-foreground">{site.flow.description}</p>
          </div>
        </AnimatedSection>

        <AnimatedStaggerContainer className="grid lg:grid-cols-3 gap-4 mb-10">
          {steps.map((s, i) => {
            const StepIcon = stepIcons[i] || NumberSquareOne;
            return (
              <AnimatedStaggerItem key={s.step}>
                <div className="card-glass !p-8 h-full">
                  <StepIcon size={36} weight="duotone" className="text-foreground mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedStaggerItem>
            );
          })}
        </AnimatedStaggerContainer>

        <AnimatedSection>
          <div className="text-center">
            <button onClick={() => go("#apply")} className="btn-primary-gradient">
              {site.flow.ctaLabel}
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
