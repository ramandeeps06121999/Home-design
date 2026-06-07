"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Award, CheckCircle2 } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "QBCC Licensed" },
  { icon: Award, label: "Award-Winning Builder" },
  { icon: CheckCircle2, label: "Fully Insured" },
];

const highlights = [
  "Fixed-price contracts — no hidden costs",
  "End-to-end project management",
  "Quality workmanship with attention to detail",
];

const whyUs = [
  { title: "Quality Workmanship", desc: "Every detail crafted with precision and care" },
  { title: "Honest Communication", desc: "Clear, transparent updates at every stage" },
  { title: "Award-Winning Experience", desc: "Proven excellence from New Zealand to Queensland" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#000000] py-12 lg:py-20" ref={ref}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mb-7 flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <item.icon className="h-4 w-4 text-white/70" />
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                </div>
              ))}
            </div>

            <h2 className="font-sora text-3xl font-semibold leading-[1.1] tracking-[-0.01em] text-white md:text-4xl lg:text-[52px]">
              Ready to build your
              <span className="text-gradient"> dream home?</span>
            </h2>
            <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-white/70">
              From new builds to duplexes and custom projects — let&apos;s create
              something extraordinary together.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white/70" />
                  <span className="text-[15px] text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-semibold tracking-tight text-black transition-colors hover:bg-white/90"
              >
                Contact Us Today
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0436376001"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 px-8 py-4 text-base font-semibold tracking-tight text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-[18px] w-[18px]" />
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right: Why choose us */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
              <h3 className="mb-8 text-center font-sora text-3xl font-semibold text-white">
                Why choose <span className="text-gradient">us?</span>
              </h3>
              <div className="space-y-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h4 className="mb-1 font-sora text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-white/60" />
                <p className="text-sm text-white/80">Currently accepting new projects for 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
