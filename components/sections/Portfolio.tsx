"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";

const categories = ["All", "Custom Build", "New Home Build", "Queenslander"];

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
    category: "Queenslander",
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

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="bg-white py-12 lg:py-20 relative"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-black/50 font-semibold uppercase tracking-[0.2em] text-xs">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-black leading-[1.15]">
              Inspired Homes Built Across
              <span className="text-gradient"> South East Queensland</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-black/60 text-lg leading-relaxed">
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
                  ? "bg-black text-white"
                  : "bg-black/[0.04] text-black/70 hover:bg-black/10 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="flex items-center text-black/60 text-sm ml-2">
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
                className="group relative bg-white border border-black/[0.08] shadow-sm rounded-2xl overflow-hidden cursor-pointer hover:border-black/20 transition-colors duration-500"
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
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg shadow-black/20">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <span className="inline-block bg-black/[0.04] text-black/60 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-sora text-lg font-bold text-black mb-2 group-hover:text-black/60 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-black/60 text-sm">
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
                className="relative rounded-2xl overflow-hidden shrink-0 w-[80vw] snap-center group bg-white border border-black/[0.08] shadow-sm"
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
                  <span className="inline-block bg-black/[0.04] text-black/60 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-sora text-lg font-bold text-black mb-1.5">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-black/60 text-sm">
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
            className="inline-flex items-center gap-3 bg-black/[0.04] hover:bg-black border border-black/10 hover:border-black text-black hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
