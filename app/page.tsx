import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LogoBanner from "@/components/sections/LogoBanner";
import PainSection from "@/components/sections/PainSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorksSection from "@/components/sections/WorksSection";
import NewsSection from "@/components/sections/NewsSection";
import FlowSection from "@/components/sections/FlowSection";
import ProfileSection from "@/components/sections/ProfileSection";
import ClipGeniusSection from "@/components/sections/ClipGeniusSection";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import ApplySection from "@/components/sections/ApplySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-w-0 overflow-x-hidden">
        <HeroSection />
        <LogoBanner />
        <PainSection />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <NewsSection />
        <FlowSection />
        <ProfileSection />
        <ClipGeniusSection />
        <CTABanner />
        <FAQSection />
        <ApplySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
