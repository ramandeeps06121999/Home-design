"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback } from "react";
import { ArrowRight, ArrowDown, Shield, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const avatars = [
  "https://i.pravatar.cc/100?u=1",
  "https://i.pravatar.cc/100?u=2",
  "https://i.pravatar.cc/100?u=3",
];

const trustBadges = [
  { icon: Shield, label: "QBCC Licensed" },
  { icon: Award, label: "15+ Years" },
  { icon: CheckCircle2, label: "Fully Insured" },
];

const titleWords = [
  { text: "Design", gradient: false },
  { text: " ", gradient: false },
  { text: "Homes", gradient: true },
];

function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.15);
    y.set((e.clientY - cy) * 0.15);
  }, [x, y]);

  const handleLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Parallax Background Video */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0d1117]" />
      </motion.div>

      {/* Grain overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      {/* Content with parallax */}
      <motion.div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-20" style={{ y: contentY, opacity }}>
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">Licensed QBCC Builder — South East Queensland</span>
          </div>
        </motion.div>

        {/* Split-Text Title */}
        <div className="text-center mb-6">
          <h1 className="font-[family-name:var(--font-sora)] text-[clamp(48px,11vw,140px)] font-bold text-white leading-[0.9] tracking-[-0.04em]">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block ${word.gradient ? "text-gradient" : ""}`}
                style={{ perspective: "1000px" }}
              >
                {word.text === " " ? "\u00A0" : word.text}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/60 text-lg md:text-xl max-w-[600px] mx-auto mb-12 lg:mb-16 leading-relaxed"
        >
          Building new homes, duplexes, townhouses and custom builds across South East Queensland.
        </motion.p>

        {/* CTAs with pulse ring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 lg:mb-20"
        >
          <div className="relative">
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full bg-[#FF5A1F]/30 animate-ping-slow" />
            <MagneticButton
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative inline-flex items-center gap-3 bg-[#FF5A1F] hover:bg-[#e54e1a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5A1F]/30 group cursor-pointer"
            >
              Get a Free Quote
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </MagneticButton>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full lg:w-auto"
          >
            <div className="glass rounded-3xl p-8 lg:p-10 max-w-[380px] mx-auto lg:mx-0">
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-6xl lg:text-7xl font-bold font-[family-name:var(--font-sora)] text-white mb-2"
              >
                100<span className="text-gradient">%</span>
              </motion.div>
              <p className="text-lg font-semibold text-white mb-6">Project Completion Rate</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#FF5A1F] rounded-full" />
                  50+ Homes Built Across SEQ
                </li>
                <li className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#FF5A1F] rounded-full" />
                  Serving Brisbane, Gold Coast & Sunshine Coast
                </li>
              </ul>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      className="relative w-10 h-10 rounded-full border-2 border-[#1c2128] overflow-hidden"
                    >
                      <Image src={avatar} alt={`Team member ${index + 1}`} fill className="object-cover" />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="w-10 h-10 rounded-full bg-[#FF5A1F] flex items-center justify-center text-white font-bold ml-1"
                >
                  +
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges with slide-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap justify-center lg:justify-end gap-4"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.12, type: "spring", stiffness: 100 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3"
              >
                <badge.icon className="w-5 h-5 text-[#FF5A1F]" />
                <span className="text-white/80 text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
