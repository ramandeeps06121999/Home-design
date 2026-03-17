"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Hammer, Palette, Building2, Wrench, Store } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "Our Services | Design Homes - New Homes, Renovations & More",
  description: "Explore our comprehensive building services: new home builds, renovations, interior design, duplexes, townhouses, custom builds & commercial construction across SEQ.",
  keywords: [
    "home building services Brisbane",
    "renovations Gold Coast",
    "interior design Sunshine Coast",
    "duplex builders SEQ",
    "custom home construction",
    "commercial builders Queensland",
    "townhouse construction",
    "home renovation services",
  ],
  openGraph: {
    title: "Our Building Services | Design Homes Pty Ltd",
    description: "New home builds, renovations, interior design, duplexes, townhouses & commercial construction across Brisbane, Gold Coast & Sunshine Coast.",
    type: "website",
    url: `${siteUrl}/services`,
    images: [
      {
        url: "/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp",
        width: 1200,
        height: 630,
        alt: "Design Homes Building Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Design Homes",
    description: "New home builds, renovations, interior design, duplexes & commercial construction across SEQ.",
    images: ["/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: Home,
    slug: "new-home-builds",
    image: "/images/the-frame-home-construction-P5J5AFM.webp",
    title: "New Home Builds",
    description: "Custom-designed homes tailored to your lifestyle and budget. From concept to completion, we bring your dream home to life with precision craftsmanship.",
    features: ["Custom Floor Plans", "Energy Efficient", "Quality Materials", "Fixed Price Contracts"],
  },
  {
    icon: Hammer,
    slug: "renovations",
    image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP.webp",
    title: "Renovations",
    description: "Transforming existing spaces into modern masterpieces. We breathe new life into your property with stunning, functional renovations.",
    features: ["Kitchen & Bath", "Extensions", "Structural Changes", "Modern Upgrades"],
  },
  {
    icon: Palette,
    slug: "interior-design",
    image: "/images/ImageGen-1-1.webp",
    title: "Interior Design",
    description: "Premium interior design services to complete your dream home. Our designers create spaces that inspire, delight, and reflect your personality.",
    features: ["Space Planning", "Material Selection", "Color Consulting", "3D Visualization"],
  },
  {
    icon: Building2,
    slug: "duplex-townhouses",
    image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-1.webp",
    title: "Duplex & Townhouses",
    description: "Maximize your investment with expertly designed and built duplexes and townhouses. Smart layouts that maximize space and value.",
    features: ["Dual Occupancy", "Investment Ready", "Council Approval", "Smart Design"],
  },
  {
    icon: Wrench,
    slug: "custom-builds",
    image: "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp",
    title: "Custom Builds",
    description: "Unique homes for unique visions. Our custom build service delivers one-of-a-kind homes that are truly yours in every detail.",
    features: ["Bespoke Design", "Premium Finishes", "Unique Architecture", "Full Customization"],
  },
  {
    icon: Store,
    slug: "commercial",
    image: "/images/mirador-building-in-sanchinarro-district-of-madrid-FPSM97G-1.webp",
    title: "Commercial",
    description: "Professional commercial construction services for offices, retail spaces, and mixed-use developments built to the highest standards.",
    features: ["Office Fit-outs", "Retail Spaces", "Mixed Use", "Code Compliant"],
  },
];

const process = [
  { number: "01", title: "Consultation", description: "Free initial meeting to understand your vision, budget, and timeline." },
  { number: "02", title: "Design", description: "Our team creates detailed plans and 3D visualizations for your approval." },
  { number: "03", title: "Approval", description: "We handle all council submissions and regulatory approvals." },
  { number: "04", title: "Construction", description: "Expert construction with regular updates and quality checkpoints." },
  { number: "05", title: "Handover", description: "Final inspection, walkthrough, and handover of your completed project." },
];

export default function ServicesPage() {
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <PageHero
        title="Comprehensive Building &"
        highlight="Design Services"
        description="From new home builds to renovations and commercial projects, we deliver exceptional quality across every project we undertake."
        image="/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      {/* Services Grid */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-5 left-5 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#FF5A1F]" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span key={feature} className="bg-[#fafafa] text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium">{feature}</span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#FF5A1F] font-semibold group/btn text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-[#0d1117] py-24 lg:py-32" ref={processRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#FF5A1F]" />
              <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">Our Process</span>
              <div className="w-8 h-[2px] bg-[#FF5A1F]" />
            </div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.15]">
              How We Bring Your Vision to
              <span className="text-gradient"> Life</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1c2128] rounded-3xl p-8 border border-white/5 hover:border-[#FF5A1F]/20 transition-all duration-500 text-center group hover:-translate-y-2"
              >
                <span className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#FF5A1F]/20 group-hover:text-[#FF5A1F]/40 transition-colors">{step.number}</span>
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold text-white mt-3 mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <SiteFooter />
    </main>
  );
}
