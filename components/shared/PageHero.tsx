"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

interface PageHeroProps {
  title: string;
  highlight?: string;
  description: string;
  image: string;
  breadcrumb: { label: string; href: string }[];
}

export default function PageHero({ title, highlight, description, image, breadcrumb }: PageHeroProps) {
  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href.startsWith('http') ? item.href : `${siteUrl}${item.href}`
    }))
  };

  return (
    <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover" priority quality={85} />
        {/* Bottom-up gradient for content visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-black/60 to-transparent" />
        {/* Top-down gradient for navbar visibility - stronger at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
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
              {i > 0 && <span className="text-white">/</span>}
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  i === breadcrumb.length - 1 ? "text-[#D4AF37]" : "text-white hover:text-white"
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
          className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl"
        >
          {title}
          {highlight && <span className="text-gradient"> {highlight}</span>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
