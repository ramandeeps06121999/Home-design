"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Building2, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Building2,
    number: "01",
    title: "Modern Architecture",
    description:
      "We combine contemporary design with traditional craftsmanship to create unique living spaces that reflect your personality and lifestyle.",
    link: "#services",
    cta: "View Projects",
    image: "/images/the-frame-home-construction-P5J5AFM.webp",
    imageAlt: "Modern home construction frame",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality Assurance",
    description:
      "Our rigorous quality control processes ensure that every detail meets our high standards. We never compromise on quality.",
    link: "#contact",
    cta: "Our Process",
    image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP.webp",
    imageAlt: "Modern rooftop patio with sunset view",
  },
];

export default function Innovation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      className="bg-[#0d1117] py-24 lg:py-32 relative overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
    >
      {/* Cursor glow */}
      {showGlow && (
        <div
          className="pointer-events-none absolute z-0 w-[500px] h-[500px] rounded-full transition-opacity duration-300"
          style={{
            left: glowPos.x - 250,
            top: glowPos.y - 250,
            background:
              "radial-gradient(circle, rgba(255,90,31,0.07) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Subtle background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5A1F]/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5A1F]/3 rounded-full blur-[100px] -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">
              Innovation & Excellence
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.15] max-w-2xl">
            Building Trust Through Innovation, Quality &
            <span className="text-gradient"> Excellence.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-6 lg:gap-7">
          {/* Large Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden h-[400px] lg:h-full lg:min-h-[540px] group row-span-1"
          >
            <Image
              src="/images/modern-villa-with-pool-and-deck-H27FA57.webp"
              alt="Modern Villa with Pool"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-[#FF5A1F] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Featured Project
              </span>
              <h3 className="font-[family-name:var(--font-sora)] text-2xl lg:text-3xl font-bold text-white mt-3">
                Luxury Pool Villa
              </h3>
              <p className="text-white text-sm mt-1.5">
                Gold Coast, QLD
              </p>
            </div>
          </motion.div>

          {/* Feature Cards with Images */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="bg-[#1c2128] rounded-3xl overflow-hidden flex flex-col border border-white/5 hover:border-[#FF5A1F]/20 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(255,90,31,0.15)]"
            >
              {/* Card Image */}
              <div className="relative h-[200px] lg:h-[180px] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2128] via-transparent to-transparent" />

                {/* Floating number badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#0d1117]/70 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                  <span className="font-[family-name:var(--font-sora)] text-sm font-bold text-[#FF5A1F]">
                    {feature.number}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <div className="flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF5A1F]/20 to-[#FF5A1F]/5 rounded-xl flex items-center justify-center mb-5 group-hover:from-[#FF5A1F]/30 group-hover:to-[#FF5A1F]/10 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-[#FF5A1F]" />
                  </div>

                  <h3 className="font-[family-name:var(--font-sora)] text-xl lg:text-[22px] font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>

                <button
                  onClick={() =>
                    document
                      .querySelector(feature.link)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-6 inline-flex items-center gap-2 bg-white/5 hover:bg-[#FF5A1F] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 w-fit group/btn cursor-pointer"
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
