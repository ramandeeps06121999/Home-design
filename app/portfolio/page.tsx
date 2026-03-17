"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const categories = ["All", "Custom Build", "Renovation", "New Home Build", "Commercial"];

const projects = [
  {
    image: "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp",
    title: "Luxury Pool Villa",
    location: "Gold Coast",
    category: "Custom Build",
    description: "A stunning 5-bedroom villa with infinity pool, featuring floor-to-ceiling glass and premium finishes throughout.",
    size: "450m²",
    year: "2024",
  },
  {
    image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-1.webp",
    title: "Rooftop Paradise",
    location: "Brisbane",
    category: "Renovation",
    description: "Complete rooftop transformation with outdoor kitchen, lounge area, and panoramic city views.",
    size: "120m²",
    year: "2023",
  },
  {
    image: "/images/mirador-building-in-sanchinarro-district-of-madrid-FPSM97G-1.webp",
    title: "Modern Apartment Complex",
    location: "Sunshine Coast",
    category: "Commercial",
    description: "A contemporary 12-unit apartment building featuring modern design and sustainable building practices.",
    size: "2,400m²",
    year: "2023",
  },
  {
    image: "/images/Home-4-e1759734908574.webp",
    title: "Contemporary Family Home",
    location: "Brisbane",
    category: "New Home Build",
    description: "A modern family home with open-plan living, four bedrooms, and a beautifully landscaped garden.",
    size: "320m²",
    year: "2024",
  },
  {
    image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-2.webp",
    title: "Hillside Retreat",
    location: "Gold Coast",
    category: "Custom Build",
    description: "Built into the hillside with spectacular ocean views, this custom home maximizes natural light and ventilation.",
    size: "380m²",
    year: "2022",
  },
  {
    image: "/images/the-frame-home-construction-P5J5AFM.webp",
    title: "Suburban Dream Home",
    location: "Sunshine Coast",
    category: "New Home Build",
    description: "A classic Australian home designed for family living with modern amenities and energy-efficient features.",
    size: "280m²",
    year: "2023",
  },
  {
    image: "/images/modern-villa-with-pool-and-deck-H27FA57.webp",
    title: "Coastal Luxury Home",
    location: "Gold Coast",
    category: "Custom Build",
    description: "A premium beachside residence with resort-style pool, outdoor entertaining, and high-end finishes.",
    size: "520m²",
    year: "2024",
  },
  {
    image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-3.webp",
    title: "Penthouse Renovation",
    location: "Brisbane",
    category: "Renovation",
    description: "Complete transformation of a dated penthouse into a modern luxury space with panoramic city views.",
    size: "200m²",
    year: "2024",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <PageHero
        title="Our Portfolio of"
        highlight="Exceptional Builds"
        description="Explore our diverse range of completed projects across South East Queensland, from luxury custom homes to commercial developments."
        image="/images/modern-villa-with-pool-and-deck-H27FA57-1.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }]}
      />

      {/* Portfolio Grid */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                layout
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[300px] lg:h-[350px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute top-5 left-5">
                    <span className="bg-[#FF5A1F] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-gray-900" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-2">
                      <span>{project.location}</span>
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      <span>{project.size}</span>
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-sora)] text-xl lg:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Inspired by What You"
        highlight="See?"
        description="Let's create something extraordinary for you. Start your journey with a free consultation."
      />
      <SiteFooter />
    </main>
  );
}
