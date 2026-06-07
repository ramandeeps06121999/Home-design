"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const values = [
  "High-quality finishes",
  "Strong project leadership",
  "Clear and honest communication",
  "Attention to detail at every stage",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-white py-12 lg:py-20 relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side with clip-path reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <Image
                  src="/images/about-construction.jpg"
                  alt="Design Homes construction site"
                  width={600}
                  height={700}
                  className="w-full h-[550px] lg:h-[680px] object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Values Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-6"
              >
                <div className="grid grid-cols-2 gap-3">
                  {values.map((value) => (
                    <div key={value} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full shrink-0" />
                      <span className="text-white text-xs font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">About Us</span>
            </div>

            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.12] tracking-[-0.01em] text-black mb-8">
              Homes defined by quality,
              <span className="text-gradient"> precision & care</span>
            </h2>

            <p className="text-black/60 text-base lg:text-lg leading-relaxed mb-4">
              Design Homes is a Queensland-based residential building company led by Harj Tiwana, bringing over 5 years of building experience and more than a decade of broader construction knowledge as a carpenter to every project.
            </p>

            <p className="text-black/60 text-base lg:text-lg leading-relaxed mb-8">
              With award-winning experience in New Zealand and a strong track record in new builds, we deliver homes that reflect quality workmanship, attention to detail, and lasting value. We believe a well-built home should offer more than visual appeal — it should function effortlessly for everyday living.
            </p>

            <div className="relative rounded-2xl border border-black/[0.08] border-l-[3px] border-l-black/40 bg-black/[0.02] p-6 lg:p-8 mb-8">
              <p className="text-black/70 italic leading-relaxed mb-4">
                &ldquo;At Design Homes, we take pride in delivering homes with integrity, excellence, and a standard of workmanship our clients can be proud of.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <span className="font-sora font-bold text-white text-lg">HT</span>
                </div>
                <div>
                  <h4 className="font-bold text-black text-sm">Harj Tiwana</h4>
                  <p className="text-black/50 text-xs font-semibold">Director — QBCC Builder</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2.5 bg-black text-white px-7 py-3.5 rounded-full font-semibold tracking-tight transition-colors hover:bg-black/90 group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
