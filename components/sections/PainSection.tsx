"use client";

import { AnimatedSection, AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/ui/animated-section";

const AccentColor = "#4F46E5";

const TimelineClockIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="220" width="320" height="30" rx="8" stroke="#E5E7EB" strokeWidth="1" />
    <line x1="80" y1="220" x2="80" y2="228" stroke="#D1D5DB" strokeWidth="1" />
    <line x1="120" y1="220" x2="120" y2="250" stroke="#D1D5DB" strokeWidth="1" />
    <line x1="160" y1="220" x2="160" y2="228" stroke="#D1D5DB" strokeWidth="1" />
    <line x1="240" y1="220" x2="240" y2="228" stroke="#D1D5DB" strokeWidth="1" />
    <line x1="280" y1="220" x2="280" y2="250" stroke="#D1D5DB" strokeWidth="1" />
    <line x1="320" y1="220" x2="320" y2="228" stroke="#D1D5DB" strokeWidth="1" />

    <rect x="120" y="225" width="160" height="20" rx="4" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="1" />

    <path d="M200 190 L200 260" stroke={AccentColor} strokeWidth="1.5" />
    <polygon points="196,190 204,190 200,198" fill={AccentColor} />

    <circle cx="200" cy="120" r="48" stroke="#9CA3AF" strokeWidth="1" fill="#FFFFFF" />
    <circle cx="200" cy="120" r="40" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="200" y1="120" x2="200" y2="90" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="200" y1="120" x2="220" y2="140" stroke={AccentColor} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="200" cy="120" r="3" fill="#4B5563" />
  </svg>
);

const PenToolIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 160 C80 120, 140 120, 160 60" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" fill="none" />
    <circle cx="40" cy="160" r="4" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="1" />
    <circle cx="160" cy="60" r="4" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="1" />

    <path d="M80 110 L110 50 L140 120 L110 140 Z" fill="#F9FAFB" stroke="#4B5563" strokeWidth="1" strokeLinejoin="round" />
    <line x1="110" y1="90" x2="110" y2="140" stroke="#4B5563" strokeWidth="1" />
    <circle cx="110" cy="50" r="3" fill={AccentColor} />
  </svg>
);

const GraphIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="140" x2="170" y2="140" stroke="#E5E7EB" strokeWidth="1" />
    <line x1="30" y1="100" x2="170" y2="100" stroke="#F3F4F6" strokeWidth="1" />
    <line x1="30" y1="60" x2="170" y2="60" stroke="#F3F4F6" strokeWidth="1" />

    <path d="M30 130 L70 110 L110 120 L160 50" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    <path d="M110 120 L160 50" stroke={AccentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    <circle cx="160" cy="50" r="10" fill={AccentColor} fillOpacity="0.15" />
    <circle cx="160" cy="50" r="3" fill={AccentColor} />
  </svg>
);

const BalanceIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="100" y1="160" x2="100" y2="60" stroke="#9CA3AF" strokeWidth="1.5" />
    <path d="M70 160 L130 160" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />

    <polygon points="100,60 95,70 105,70" fill="#FFFFFF" stroke="#4B5563" strokeWidth="1" />

    <line x1="40" y1="50" x2="160" y2="70" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />

    <line x1="40" y1="50" x2="25" y2="100" stroke="#D1D5DB" strokeWidth="1" />
    <line x1="40" y1="50" x2="55" y2="100" stroke="#D1D5DB" strokeWidth="1" />
    <path d="M20 100 Q40 115 60 100 Z" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="1" />

    <line x1="160" y1="70" x2="145" y2="120" stroke="#D1D5DB" strokeWidth="1" />
    <line x1="160" y1="70" x2="175" y2="120" stroke="#D1D5DB" strokeWidth="1" />
    <path d="M140 120 Q160 135 180 120 Z" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="1" />

    <circle cx="40" cy="95" r="8" fill="#F9FAFB" stroke={AccentColor} strokeWidth="1" />
    <circle cx="40" cy="95" r="3" fill={AccentColor} fillOpacity="0.8" />
  </svg>
);

export default function PainSection() {
  return (
    <section className="bg-[#FFFFFF] w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

        <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px] max-w-[1000px] mx-auto w-full">

          {/* Card 1: Large Hero */}
          <AnimatedStaggerItem className="col-span-1 md:col-span-2 md:row-span-2">
            <div className="relative h-full w-full bg-[#F5F5F7] rounded-[40px] flex flex-col items-center justify-between p-10 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-black/[0.02]">
              <div className="z-10 text-center mt-2">
                <h3 className="text-[32px] md:text-[38px] font-black text-[#1D1D1F] tracking-[-0.06em] leading-tight font-sans">
                  編集に時間が取れない
                </h3>
              </div>
              <div className="w-full flex-grow relative flex items-center justify-center mt-6">
                <TimelineClockIllustration />
              </div>
            </div>
          </AnimatedStaggerItem>

          {/* Card 2: Medium */}
          <AnimatedStaggerItem className="col-span-1 md:col-span-2 md:row-span-1">
            <div className="relative h-full w-full bg-white rounded-[40px] flex flex-row items-center justify-between p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02]">
              <div className="z-10 w-1/2">
                <h3 className="text-[26px] md:text-[32px] font-black text-[#1D1D1F] tracking-[-0.06em] leading-tight font-sans">
                  スキルに<br />不安がある
                </h3>
              </div>
              <div className="w-1/2 h-full flex items-center justify-end">
                <div className="w-[180px] h-full flex items-center justify-center">
                  <PenToolIllustration />
                </div>
              </div>
            </div>
          </AnimatedStaggerItem>

          {/* Card 3: Small */}
          <AnimatedStaggerItem className="col-span-1 md:col-span-1 md:row-span-1">
            <div className="relative h-full w-full bg-white rounded-[40px] flex flex-col items-center justify-between p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02]">
              <div className="z-10 text-center mt-2">
                <h3 className="text-[20px] font-black text-[#1D1D1F] tracking-[-0.05em] leading-tight font-sans">
                  SNSで<br />伸ばしきれない
                </h3>
              </div>
              <div className="w-full flex-grow flex items-center justify-center mt-4">
                <GraphIllustration />
              </div>
            </div>
          </AnimatedStaggerItem>

          {/* Card 4: Small */}
          <AnimatedStaggerItem className="col-span-1 md:col-span-1 md:row-span-1">
            <div className="relative h-full w-full bg-white rounded-[40px] flex flex-col items-center justify-between p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02]">
              <div className="z-10 text-center mt-2">
                <h3 className="text-[20px] font-black text-[#1D1D1F] tracking-[-0.05em] leading-tight font-sans">
                  外注費が<br />高すぎる
                </h3>
              </div>
              <div className="w-full flex-grow flex items-center justify-center mt-4">
                <BalanceIllustration />
              </div>
            </div>
          </AnimatedStaggerItem>

        </AnimatedStaggerContainer>

        {/* Bottom Bridge */}
        <AnimatedSection className="mt-32 mb-16 px-4">
          <div className="flex justify-center items-center w-full">
            <h2 className="text-[36px] md:text-[56px] lg:text-[68px] font-black text-[#1D1D1F] tracking-[-0.08em] leading-[1.15] text-center font-sans max-w-[1000px]">
              配信に集中できる環境を、<br className="md:hidden" />
              LilQがつくる。
            </h2>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
