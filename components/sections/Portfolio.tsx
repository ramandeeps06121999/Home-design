"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";

const categories = ["All", "Custom Build", "Renovation", "New Home Build"];

const projects = [
  {
    image: "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp",
    title: "Luxury Pool Villa",
    location: "Gold Coast",
    category: "Custom Build",
  },
  {
    image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-1.webp",
    title: "Rooftop Paradise",
    location: "Brisbane",
    category: "Renovation",
  },
  {
    image: "/images/mirador-building-in-sanchinarro-district-of-madrid-FPSM97G-1.webp",
    title: "Modern Apartment Complex",
    location: "Sunshine Coast",
    category: "Custom Build",
  },
  {
    image: "/images/Home-4-e1759734908574.webp",
    title: "Contemporary Family Home",
    location: "Brisbane",
    category: "New Home Build",
  },
  {
    image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-2.webp",
    title: "Hillside Retreat",
    location: "Gold Coast",
    category: "Custom Build",
  },
  {
    image: "/images/the-frame-home-construction-P5J5AFM.webp",
    title: "Suburban Dream Home",
    location: "Sunshine Coast",
    category: "New Home Build",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="bg-[#0d1117] py-24 lg:py-32 relative"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
    >
      {/* Cursor glow */}
      {showGlow && (
        <div
          className="pointer-events-none absolute z-0 w-[500px] h-[500px] rounded-full"
          style={{
            left: glowPos.x - 250,
            top: glowPos.y - 250,
            background:
              "radial-gradient(circle, rgba(255,90,31,0.07) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[#A88725] font-semibold uppercase tracking-wider text-sm">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.15]">
              Inspired Homes Built Across
              <span className="text-gradient"> South East Queensland</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white text-lg leading-relaxed">
              We take pride in our diverse portfolio of projects, ranging from
              luxury villas to modern urban apartments.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30"
                  : "bg-white/5 text-white hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="flex items-center text-white text-sm ml-2">
            {filteredProjects.length} Projects
          </span>
        </motion.div>

        {/* Desktop Uniform Grid */}
        <AnimatePresence mode="popLayout">
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                layout
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden cursor-pointer hover:border-[#A88725]/30 transition-colors duration-500"
              >
                {/* Image Container - Fixed aspect ratio for uniformity */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover arrow button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <span className="inline-block bg-[#D4AF37]/10 text-[#A88725] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-sora text-lg font-bold text-white mb-2 group-hover:text-[#A88725] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden shrink-0 w-[80vw] snap-center group bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-[#D4AF37]/10 text-[#A88725] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-sora text-lg font-bold text-white mb-1.5">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#A88725] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
