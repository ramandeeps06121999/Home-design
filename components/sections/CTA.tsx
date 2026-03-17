"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Award, Users, CheckCircle2 } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "QBCC Licensed" },
  { icon: Award, label: "HIA Member" },
  { icon: Users, label: "50+ Happy Families" },
];

const highlights = [
  "Fixed-price contracts — no hidden costs",
  "End-to-end project management",
  "15+ years of building excellence",
];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden -mt-[200px]" ref={ref}>
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0 -mt-[200px]" style={{ y: bgY }}>
        <Image
          src="/images/todd-kent-178j8tJrNlc-unsplash-2048x1365.webp"
          alt="Construction Background"
          fill
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-[#0d1117]/95" style={{ marginTop: '-200px' }} />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5A1F]/30 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5A1F]/30 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                >
                  <item.icon className="w-4 h-4 text-[#FF5A1F]" />
                  <span className="text-white text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="font-sora text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6">
              Ready to Build Your
              <span className="text-gradient"> Dream Home?</span>
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8 max-w-[520px]">
              From new builds to duplexes and custom projects — let&apos;s create something extraordinary together.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FF5A1F] shrink-0" />
                  <span className="text-white text-[15px]">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-[#FF5A1F]/20 animate-ping-slow" />
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-3 bg-[#FF5A1F] hover:bg-[#e54e1a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF5A1F]/40 group"
                >
                  Get a Free Quote
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                href="tel:+61123456789"
                className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-[#FF5A1F] group-hover:rotate-12 transition-transform" />
                Call Us Now
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-10 relative">
              {/* Orange accent */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-[#FF5A1F] to-transparent rounded-full" />

              <div className="text-center mb-8">
                <div className="font-sora text-7xl font-bold text-white mb-2">
                  100<span className="text-gradient">%</span>
                </div>
                <p className="text-white text-sm uppercase tracking-wider">Project Completion Rate</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-2xl p-5 text-center border border-white/5">
                  <div className="font-sora text-3xl font-bold text-white">50+</div>
                  <p className="text-white text-sm mt-1">Homes Built</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 text-center border border-white/5">
                  <div className="font-sora text-3xl font-bold text-white">15+</div>
                  <p className="text-white text-sm mt-1">Years Exp.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 rounded-xl p-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
                <p className="text-white text-sm">
                  Currently accepting new projects for 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
