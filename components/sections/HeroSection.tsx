"use client";

import { motion } from "framer-motion";
import { heroCards } from "@/content/heroCards";
import { Clock, ArrowsClockwise, ShieldCheck } from "@phosphor-icons/react";
import site from "@/content/site.json";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  type WorkItem =
    | { type: "youtube"; id: string; channel: string }
    | { type: "mp4"; url: string; channel: string };

  const works: WorkItem[] = [
    { type: "mp4", url: "/videos_01.mp4", channel: "ココマルハピー" },
    { type: "mp4", url: "/videos_02.mp4", channel: "ココマルハピー" },
    { type: "youtube", id: "a1tT9K_7d1U", channel: "とみたけかれる" },
    { type: "youtube", id: "GZibrcuxyMY", channel: "松野アマネ" }
  ];

  const chips = [
    { icon: Clock, text: site.hero.featureChips[0] },
    { icon: ArrowsClockwise, text: site.hero.featureChips[1] },
    { icon: ShieldCheck, text: site.hero.featureChips[2] },
  ];

  // Split title into words for stagger animation
  const titleWords = site.hero.titleLines.join("").split("");

  return (
    <section
      className="relative overflow-hidden section-forma section-base"
      style={{
        backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 60%)",
      }}
    >
      <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 min-w-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Text and CTA */}
          <div className="flex-1 min-w-0 flex flex-col items-start text-left w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, ease }}
              className="mb-6"
            >
              <span className="badge-hero">
                {site.hero.badge}
              </span>
            </motion.div>

            {/* Giant heading with word stagger */}
            <motion.h1
              className="max-w-4xl mb-6"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {site.hero.titleLines.map((line, lineIdx) => (
                <span key={lineIdx}>
                  {line.split("").map((char, i) => (
                    <motion.span
                      key={`${lineIdx}-${i}`}
                      className="inline-block"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease,
                        delay: 0.1 + (lineIdx * line.length + i) * 0.03,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {lineIdx < site.hero.titleLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="max-w-xl mb-10"
              style={{ color: "#666", fontSize: "1.1rem", lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, ease, delay: 0.4 }}
            >
              {site.hero.descriptionLines[0]}
              <br className="hidden sm:block" />
              {site.hero.descriptionLines[1]}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-14 sm:mb-16"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, ease, delay: 0.5 }}
            >
              <button onClick={() => go("#apply")} className="btn-primary-gradient">
                {site.hero.buttons.apply}
              </button>
              <button onClick={() => go("#works")} className="btn-secondary-glass">
                {site.hero.buttons.works}
              </button>
            </motion.div>

            {/* Feature chips */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10 sm:mb-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {chips.map((c, i) => (
                <span key={i} className="tag-dark">
                  <c.icon size={14} weight="bold" className="mr-1.5" />
                  {c.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Video + Cards */}
          <div className="w-full lg:w-[540px] xl:w-[600px] shrink-0">
            <div className="flex flex-col gap-5 items-stretch min-w-0">
              {/* Video carousel */}
              <motion.div
                className="relative w-full min-w-0 mx-auto"
                initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease, delay: 0.5 }}
              >
                <div
                  className="overflow-hidden p-3 sm:p-4"
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="-mx-1.5">
                    <motion.div
                      className="flex w-[400%]"
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    >
                      {[...works, ...works].map((v, i) => (
                        <div key={i} className="w-[12.5%] px-1.5 flex-none flex flex-col gap-2">
                          <div className="relative w-full overflow-hidden bg-black aspect-[9/16] shadow-md border border-black/5" style={{ borderRadius: "16px" }}>
                            {v.type === "youtube" ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&loop=1&playlist=${v.id}&controls=0&playsinline=1`}
                                title={`YouTube Shorts - ${v.channel}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                              />
                            ) : (
                              <video
                                src={v.url}
                                autoPlay muted loop playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <div className="text-[14px] text-foreground/80 font-bold px-1 text-center truncate mt-1">
                            {v.channel}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM COLUMN: Info Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 lg:mt-14"

          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease, delay: 0.65 }}
        >
          {heroCards.map((card, cardIdx) => {
            const Icon = card.icon;
            const isPrice = card.segments.some((seg) => seg.style === "price");
            return (
              <div
                key={card.label}
                className={`hero-card flex items-center gap-3 px-4 py-4 min-w-[200px] shrink-0 text-left ${isPrice
                  ? "text-white"
                  : "text-foreground"
                  }`}
                style={isPrice ? {
                  background: "linear-gradient(145deg, #7c3aed 0%, #5b21b6 100%)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                  boxShadow: "0 4px 12px rgba(124,58,237,0.3), 0 12px 30px rgba(124,58,237,0.15)",
                } : {
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "20px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)",
                }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isPrice ? "bg-white/10" : "bg-black/[0.04]"
                  }`}>
                  <Icon className={`w-5 h-5 ${isPrice ? "text-white/70" : "text-foreground/60"}`} strokeWidth={2.5} />
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className={`hero-card-label mb-0.5 ${isPrice ? "text-white/50" : "text-foreground/40"}`}>
                    {card.label}
                  </p>
                  <p className={`hero-card-body m-0 ${card.segments.some((s) => s.style === "price") ? "hero-card-body-lg" : ""}`}>
                    {card.segments.map((seg, i) =>
                      seg.style === "linebreak" ? (
                        <span key={i} className="block">{seg.text}</span>
                      ) : seg.style === "strikethrough" ? (
                        <span key={i} className={`line-through text-sm font-bold mr-1.5 align-middle ${isPrice ? "text-white/30" : "text-foreground/30"}`}>
                          {seg.text}
                        </span>
                      ) : (
                        <span key={i} className={seg.style === "price" ? "hero-card-price !text-white" : ""}>
                          {seg.text}
                        </span>
                      )
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
