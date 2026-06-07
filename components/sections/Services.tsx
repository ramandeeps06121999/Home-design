"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Home, Building2, Wrench, Landmark } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Home,
    image: "/images/hero-home.jpg",
    title: "New Home Builds",
    slug: "new-home-builds",
    description:
      "Custom-designed homes tailored to your lifestyle and budget — from concept to completion with quality workmanship and attention to detail.",
    features: ["Fixed-price contracts", "6-year warranty", "Turnkey solutions"],
  },
  {
    number: "02",
    icon: Building2,
    image: "/images/townhouse-new.webp",
    imagePosition: "object-top",
    title: "Duplex & Townhouses",
    slug: "duplex-townhouses",
    description:
      "Maximise your property potential with dual occupancy solutions — perfect for investors and multi-generational families.",
    features: ["Dual occupancy", "Investment focused", "Council approval"],
  },
  {
    number: "03",
    icon: Wrench,
    image: "/images/custom-built-house.jpg",
    title: "Custom Builds",
    slug: "custom-builds",
    description:
      "Bespoke architectural homes designed for unique sites and specific requirements. Your vision, our expertise and craftsmanship.",
    features: ["Architectural design", "Challenging sites", "Luxury finishes"],
  },
  {
    number: "04",
    icon: Landmark,
    image: "/images/queenslander-house.webp",
    title: "Queenslander Homes",
    slug: "queenslander-homes",
    description:
      "Beautiful Queenslander-style homes that honour traditional character while incorporating modern living standards and quality finishes.",
    features: ["Traditional character", "Modern amenities", "Heritage style"],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-[#ffffff] py-12 lg:py-20" ref={ref}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
              Our Services
            </span>
            <span className="h-px w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-sora text-3xl font-semibold leading-[1.12] tracking-[-0.01em] text-black md:text-4xl lg:text-[44px]">
            Quality residential
            <span className="text-gradient"> building services</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black/60">
            From new builds to custom projects, we deliver exceptional quality and
            craftsmanship across every service.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)]"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden lg:h-72">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover ${service.imagePosition || "object-center"} transition-transform duration-[800ms] ease-out group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                      <span className="font-sora text-sm font-semibold text-black">
                        {service.number}
                      </span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5 flex items-center gap-2.5">
                      <Icon className="h-5 w-5 text-white" />
                      <h3 className="font-sora text-xl font-semibold text-white drop-shadow-sm lg:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    <p className="mb-5 flex-1 text-[15px] leading-relaxed text-black/60">
                      {service.description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-black/[0.06] pt-4">
                      <span className="text-sm font-semibold text-black">
                        Learn more
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.06] transition-all duration-500 group-hover:bg-black">
                        <ArrowUpRight className="h-4 w-4 text-black transition-colors duration-500 group-hover:text-white" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition-colors hover:bg-black/90"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
