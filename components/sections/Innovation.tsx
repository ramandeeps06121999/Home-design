"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Building2,
    number: "01",
    title: "Modern Architecture",
    description:
      "Contemporary design meets traditional craftsmanship to create unique living spaces that reflect your personality and lifestyle.",
    link: "#services",
    cta: "View Projects",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality Assurance",
    description:
      "Rigorous quality control ensures every detail meets our high standards. We never compromise on workmanship.",
    link: "#contact",
    cta: "Our Process",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Innovation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden bg-white py-12 lg:py-20"
      ref={ref}
    >
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 max-w-2xl lg:mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
              Innovation &amp; Excellence
            </span>
          </div>
          <h2 className="font-sora text-3xl font-semibold leading-[1.12] tracking-[-0.01em] text-black md:text-4xl lg:text-[44px]">
            Building trust through innovation, quality
            <span className="text-gradient"> &amp; excellence</span>
          </h2>
        </motion.div>

        {/* Body: featured image + feature list */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="group relative h-[360px] overflow-hidden rounded-[2rem] lg:h-auto lg:min-h-[460px]"
          >
            <Image
              src="/images/modern-villa-with-pool-and-deck-H27FA57.webp"
              alt="Luxury pool villa built by Design Homes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-8 bottom-8">
              <span className="inline-block rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black">
                Featured Project
              </span>
              <h3 className="mt-3 font-sora text-2xl font-semibold text-white lg:text-3xl">
                Luxury Pool Villa
              </h3>
              <p className="mt-1 text-sm text-white/70">Gold Coast, QLD</p>
            </div>
          </motion.div>

          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="flex flex-col justify-center divide-y divide-black/[0.08] rounded-[2rem] border border-black/[0.08] bg-black/[0.015] px-7 lg:px-10"
          >
            {features.map((feature) => (
              <div key={feature.title} className="group flex gap-5 py-8 lg:py-9">
                <span className="font-sora text-3xl font-light leading-none text-black/20 lg:text-4xl">
                  {feature.number}
                </span>
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04] transition-colors duration-500 group-hover:bg-black/10">
                      <feature.icon className="h-5 w-5 text-black" />
                    </span>
                    <h3 className="font-sora text-xl font-semibold text-black">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-black/60">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.link}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-black/60"
                  >
                    {feature.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
