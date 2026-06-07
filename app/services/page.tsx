"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Building2, Wrench, Landmark, Hammer, Sofa } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const services = [
  {
    icon: Home,
    slug: "new-home-builds",
    image: "/images/new-home-build-1.jpg",
    title: "New Home Builds",
    description: "Custom-designed homes tailored to your lifestyle and budget. From concept to completion, we bring your dream home to life with precision craftsmanship.",
    features: ["Custom Floor Plans", "Energy Efficient", "Quality Materials", "Fixed Price Contracts"],
  },
  {
    icon: Building2,
    slug: "duplex-townhouses",
    image: "/images/duplex-exterior.jpg",
    title: "Duplex & Townhouses",
    description: "Maximise your investment with expertly designed and built duplexes and townhouses. Smart layouts that maximise space and value.",
    features: ["Dual Occupancy", "Investment Ready", "Council Approval", "Smart Design"],
  },
  {
    icon: Wrench,
    slug: "custom-builds",
    image: "/images/custom-built-house.jpg",
    title: "Custom Builds",
    description: "Unique homes for unique visions. Our custom build service delivers one-of-a-kind homes that are truly yours in every detail.",
    features: ["Bespoke Design", "Premium Finishes", "Unique Architecture", "Full Customisation"],
  },
  {
    icon: Landmark,
    slug: "queenslander-homes",
    image: "/images/queenslander-house.webp",
    title: "Queenslander Homes",
    description: "Authentic Queenslander homes that blend traditional character with modern comfort. We honour the classic style while delivering contemporary livability.",
    features: ["Traditional Character", "Modern Comfort", "Elevated Design", "Wraparound Verandahs"],
  },
  {
    icon: Hammer,
    slug: "renovations",
    image: "/images/renovation-kitchen.jpg",
    title: "Renovations & Extensions",
    description: "Transform your existing home with expert renovations and extensions. From kitchens and bathrooms to full home transformations, delivered with minimal disruption.",
    features: ["Kitchens & Bathrooms", "Home Extensions", "Full Renovations", "Modern Upgrades"],
  },
  {
    icon: Sofa,
    slug: "interior-design",
    image: "/images/interior-modern-design.jpg",
    title: "Interior Design",
    description: "Bring your spaces to life with bespoke interior design. From concept boards and material selection to 3D visualisation and final styling.",
    features: ["Concept Boards", "Material Selection", "3D Visualisation", "Styling & Finishes"],
  },
];

const process = [
  { number: "01", title: "Consultation", description: "Free initial meeting to understand your vision, budget, and timeline." },
  { number: "02", title: "Design", description: "Our team creates detailed plans and 3D visualisations for your approval." },
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
        description="From new home builds to duplexes, custom builds and Queenslander homes, we deliver exceptional quality across every project we undertake."
        image="/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      {/* Services Grid */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-black/[0.08] shadow-sm transition-all duration-500 group hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.10)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-5 left-5 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-sora text-2xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-black/60 leading-relaxed text-[15px] mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span key={feature} className="border border-black/10 text-black/60 px-3 py-1.5 rounded-lg text-xs font-medium">{feature}</span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-black font-semibold group/btn text-sm"
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
      <section className="bg-white py-12 lg:py-20" ref={processRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Our Process</span>
              <span className="h-px w-6 bg-[#D4AF37]" />
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-black leading-[1.15]">
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
                className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-sm hover:border-black/20 transition-all duration-500 text-center group hover:-translate-y-2"
              >
                <span className="font-sora text-4xl font-bold text-black/20 group-hover:text-black/35 transition-colors">{step.number}</span>
                <h3 className="font-sora text-lg font-bold text-black mt-3 mb-2">{step.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{step.description}</p>
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
