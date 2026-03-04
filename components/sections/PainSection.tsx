"use client";

import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

const AccentColor = "#4F46E5";

const DefsAndGradients = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={AccentColor} stopOpacity="0.15" />
        <stop offset="100%" stopColor={AccentColor} stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="accent-gradient-strong" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={AccentColor} stopOpacity="0.8" />
        <stop offset="100%" stopColor={AccentColor} stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

const TimelineClockIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Architectural grid background */}
    <path d="M0 50H400 M0 150H400 M0 250H400 M100 0V300 M300 0V300" stroke="#F3F4F6" strokeWidth="1" />

    {/* Gear & Clock Base */}
    <circle cx="200" cy="120" r="60" stroke="#1F2937" strokeWidth="2.5" fill="none" />
    <circle cx="200" cy="120" r="48" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
    <circle cx="200" cy="120" r="30" stroke="#1F2937" strokeWidth="1.5" fill="url(#accent-gradient)" />
    <circle cx="200" cy="120" r="6" fill="#1F2937" />

    {/* Minimalist Gear teeth */}
    {[...Array(8)].map((_, i) => (
      <line key={i} x1="200" y1="56" x2="200" y2="44" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" transform={`rotate(${i * 45} 200 120)`} />
    ))}

    {/* Hands */}
    <line x1="200" y1="120" x2="200" y2="80" stroke={AccentColor} strokeWidth="3" strokeLinecap="round" />
    <line x1="200" y1="120" x2="230" y2="100" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />

    {/* Video Timeline Layer */}
    <rect x="60" y="220" width="280" height="40" rx="6" stroke="#D1D5DB" strokeWidth="1.5" fill="#FFFFFF" />

    {/* Timeline tracks */}
    <line x1="60" y1="230" x2="340" y2="230" stroke="#E5E7EB" strokeWidth="1" />
    <line x1="60" y1="250" x2="340" y2="250" stroke="#E5E7EB" strokeWidth="1" />

    {/* Video block */}
    <rect x="120" y="234" width="100" height="12" rx="3" fill="url(#accent-gradient)" stroke={AccentColor} strokeWidth="1.5" />

    {/* Playhead */}
    <path d="M200 190 L200 270" stroke={AccentColor} strokeWidth="2.5" />
    <polygon points="193,190 207,190 200,202" fill={AccentColor} />

    {/* Technical accents */}
    <circle cx="120" cy="240" r="2" fill="#4B5563" />
    <circle cx="220" cy="240" r="2" fill="#4B5563" />
    <line x1="160" y1="220" x2="160" y2="225" stroke="#9CA3AF" strokeWidth="1.5" />
    <line x1="240" y1="220" x2="240" y2="225" stroke="#9CA3AF" strokeWidth="1.5" />
    <line x1="200" y1="260" x2="200" y2="280" stroke={AccentColor} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
  </svg>
);

const PenToolIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Architectural grid background */}
    <line x1="100" y1="0" x2="100" y2="200" stroke="#F3F4F6" strokeWidth="1" />
    <line x1="0" y1="100" x2="200" y2="100" stroke="#F3F4F6" strokeWidth="1" />

    {/* Diamond / Pen structure */}
    <path d="M100 30 L160 80 L100 170 L40 80 Z" stroke="#1F2937" strokeWidth="2.5" fill="url(#accent-gradient)" strokeLinejoin="round" />

    {/* Facets */}
    <path d="M40 80 L160 80" stroke="#1F2937" strokeWidth="1.5" />
    <path d="M100 30 L100 170" stroke="#1F2937" strokeWidth="1.5" />
    <path d="M100 30 L70 80 L100 170" stroke="#9CA3AF" strokeWidth="1" />
    <path d="M100 30 L130 80 L100 170" stroke="#9CA3AF" strokeWidth="1" />

    {/* Light reflection accents */}
    <line x1="110" y1="50" x2="140" y2="80" stroke={AccentColor} strokeWidth="2" strokeLinecap="round" />
    <line x1="115" y1="45" x2="145" y2="75" stroke={AccentColor} strokeWidth="1" strokeLinecap="round" opacity="0.6" />

    {/* Technical connection points & dashed extensions */}
    <line x1="10" y1="80" x2="35" y2="80" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="165" y1="80" x2="190" y2="80" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="100" y1="10" x2="100" y2="25" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="100" y1="175" x2="100" y2="190" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Geometric nodes */}
    <circle cx="100" cy="30" r="4" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
    <circle cx="40" cy="80" r="4" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
    <circle cx="160" cy="80" r="4" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
    <circle cx="100" cy="170" r="4" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
    <circle cx="100" cy="80" r="3" fill={AccentColor} />
  </svg>
);

const GraphIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid */}
    <line x1="30" y1="135" x2="170" y2="135" stroke="#F3F4F6" strokeWidth="1.5" />
    <line x1="30" y1="100" x2="170" y2="100" stroke="#F3F4F6" strokeWidth="1.5" />
    <line x1="30" y1="65" x2="170" y2="65" stroke="#F3F4F6" strokeWidth="1.5" />

    {/* Axes */}
    <line x1="28" y1="170" x2="170" y2="170" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="30" y1="172" x2="30" y2="30" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />

    {/* Glow under trend line */}
    <path d="M30 170 C70 160, 100 130, 120 90 S150 60, 170 40 L170 170 Z" fill="url(#accent-gradient)" />

    {/* Trend line */}
    <path d="M30 170 C70 160, 100 130, 120 90 S150 60, 170 40" stroke={AccentColor} strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Data points */}
    <circle cx="120" cy="90" r="4.5" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
    <circle cx="170" cy="40" r="7" fill="#FFFFFF" stroke={AccentColor} strokeWidth="2.5" />
    <circle cx="170" cy="40" r="2.5" fill={AccentColor} />

    {/* Technical markings */}
    <line x1="120" y1="90" x2="120" y2="170" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="4 4" />
    <line x1="170" y1="40" x2="170" y2="170" stroke={AccentColor} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

    <path d="M26 40 L34 40" stroke="#9CA3AF" strokeWidth="2" />
    <path d="M26 100 L34 100" stroke="#9CA3AF" strokeWidth="2" />
  </svg>
);

const BalanceIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base and pillar */}
    <path d="M70 170 L130 170" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M90 170 L100 35 L110 170 Z" fill="url(#accent-gradient)" stroke="#9CA3AF" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="100" y1="35" x2="100" y2="170" stroke="#1F2937" strokeWidth="2" />

    {/* Beam */}
    <line x1="40" y1="60" x2="160" y2="60" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />

    {/* Pivot point */}
    <circle cx="100" cy="60" r="6" fill="#FFFFFF" stroke={AccentColor} strokeWidth="2.5" />
    <circle cx="100" cy="60" r="2" fill={AccentColor} />

    {/* Left pan */}
    <line x1="40" y1="60" x2="25" y2="110" stroke="#9CA3AF" strokeWidth="1.5" />
    <line x1="40" y1="60" x2="55" y2="110" stroke="#9CA3AF" strokeWidth="1.5" />
    <path d="M20 110 Q40 125 60 110 Z" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="40" cy="104" r="9" fill="url(#accent-gradient-strong)" />

    {/* Right pan */}
    <line x1="160" y1="60" x2="145" y2="110" stroke="#9CA3AF" strokeWidth="1.5" />
    <line x1="160" y1="60" x2="175" y2="110" stroke="#9CA3AF" strokeWidth="1.5" />
    <path d="M140 110 Q160 125 180 110 Z" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />
    {/* Clean geometric square instead of coin to represent structured balance */}
    <rect x="153" y="96" width="14" height="14" rx="2" fill="#FFFFFF" stroke={AccentColor} strokeWidth="2" transform="rotate(15 160 103)" />

    {/* Architectural alignment lines */}
    <line x1="15" y1="60" x2="28" y2="60" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="172" y1="60" x2="185" y2="60" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="100" y1="15" x2="100" y2="25" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

export default function PainSection() {
  // Ultra-premium aesthetic classes with responsive adjustments
  // Reduced shadow diffusion and scale on mobile to avoid clutter
  const cardShadows = "shadow-[0_4px_16px_rgba(0,0,0,0.02),0_12px_40px_rgba(0,0,0,0.04),0_30px_70px_rgba(0,0,0,0.06)] md:shadow-[0_8px_32px_rgba(0,0,0,0.03),0_24px_80px_rgba(0,0,0,0.05),0_60px_140px_rgba(0,0,0,0.08)]";
  const cardClass = `relative h-full w-full bg-[#FFFFFF] rounded-[32px] md:rounded-[40px] ${cardShadows} border border-black/[0.03] overflow-hidden`;
  // Responsive title scaling using modern CSS clamp for smoothness
  const titleClass = "font-black text-[#1D1D1F] tracking-[-0.06em] md:tracking-[-0.08em] leading-tight font-sans";

  return (
    <section className="bg-[#FFFFFF] w-full py-16 sm:py-24 md:py-32 overflow-hidden">
      <DefsAndGradients />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

        {/* Grid layout: Stacked on mobile, 2 Cols on Tablet, 4 Cols on Desktop */}
        <AnimatedStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[240px] sm:auto-rows-[260px] md:auto-rows-[280px] max-w-[1000px] mx-auto w-full">

          {/* Card 1: Large Hero - Full width on smallest mobile, 2 cols on tablet+ */}
          <AnimatedStaggerItem className="col-span-1 sm:col-span-2 row-span-1 md:row-span-2">
            <div className={`${cardClass} flex flex-col items-center justify-between p-6 sm:p-8 md:p-10`}>
              <div className="z-10 text-center mt-2">
                <h3 className={`${titleClass} text-[24px] sm:text-[28px] md:text-[38px]`}>
                  編集に時間が取れない
                </h3>
              </div>
              <div className="w-full flex-grow relative flex items-center justify-center mt-4 md:mt-6">
                <div className="w-full max-w-[320px] md:max-w-none">
                  <TimelineClockIllustration />
                </div>
              </div>
            </div>
          </AnimatedStaggerItem>

          {/* Card 2: Medium - Horizontal layout on tablet+, vertical on mobile if needed (kept row-span 1 here) */}
          <AnimatedStaggerItem className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1">
            <div className={`${cardClass} flex flex-row items-center justify-between p-6 sm:p-8 md:p-10`}>
              <div className="z-10 w-3/5 sm:w-1/2">
                <h3 className={`${titleClass} text-[20px] sm:text-[24px] md:text-[32px]`}>
                  スキルに<br className="hidden sm:block" />不安がある
                </h3>
              </div>
              <div className="w-2/5 sm:w-1/2 h-full flex items-center justify-end">
                <div className="w-full max-w-[120px] sm:max-w-[180px] h-auto flex items-center justify-center relative">
                  <PenToolIllustration />
                </div>
              </div>
            </div>
          </AnimatedStaggerItem>

          {/* Card 3: Small */}
          <AnimatedStaggerItem className="col-span-1 sm:col-span-1 md:col-span-1 row-span-1">
            <div className={`${cardClass} flex flex-col items-center justify-between p-6 md:p-8`}>
              <div className="z-10 text-center mt-2">
                <h3 className={`${titleClass} text-[18px] sm:text-[20px] md:text-[20px]`}>
                  SNSで<br />伸ばしきれない
                </h3>
              </div>
              <div className="w-full flex-grow flex items-center justify-center mt-3 md:mt-4 relative">
                <div className="w-full max-w-[140px] md:max-w-none">
                  <GraphIllustration />
                </div>
              </div>
            </div>
          </AnimatedStaggerItem>

          {/* Card 4: Small */}
          <AnimatedStaggerItem className="col-span-1 sm:col-span-1 md:col-span-1 row-span-1">
            <div className={`${cardClass} flex flex-col items-center justify-between p-6 md:p-8`}>
              <div className="z-10 text-center mt-2">
                <h3 className={`${titleClass} text-[18px] sm:text-[20px] md:text-[20px]`}>
                  外注費が<br />高すぎる
                </h3>
              </div>
              <div className="w-full flex-grow flex items-center justify-center mt-3 md:mt-4 relative">
                <div className="w-full max-w-[140px] md:max-w-none">
                  <BalanceIllustration />
                </div>
              </div>
            </div>
          </AnimatedStaggerItem>

        </AnimatedStaggerContainer>

        {/* Bottom Bridge - Significant font scaling for mobile */}
        <AnimatedSection className="mt-20 sm:mt-24 md:mt-32 mb-12 sm:mb-16 px-4">
          <div className="flex justify-center items-center w-full">
            <h2 className={`${titleClass} text-[28px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-[1.2] md:leading-[1.15] text-center max-w-[1000px]`}>
              配信に集中できる環境を、<br className="md:hidden" />
              LilQがつくる。
            </h2>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
