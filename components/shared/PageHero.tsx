"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  highlight?: string;
  description: string;
  image: string;
  breadcrumb: { label: string; href: string }[];
}

export default function PageHero({ title, highlight, description, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover" priority quality={85} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          {breadcrumb.map((item, i) => (
            <span key={item.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/30">/</span>}
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  i === breadcrumb.length - 1 ? "text-[#FF5A1F]" : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl"
        >
          {title}
          {highlight && <span className="text-gradient"> {highlight}</span>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
