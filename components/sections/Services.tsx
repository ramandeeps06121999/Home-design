"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Hammer, Palette, Building2, Wrench, Store } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Home,
    image: "/images/new-home-build-1.jpg",
    title: "New Home Builds",
    slug: "new-home-builds",
    description: "Custom-designed homes tailored to your lifestyle and budget. From concept to completion, we bring your dream home to life.",
    features: ["Fixed-price contracts", "6-year warranty", "Turnkey solutions"],
  },
  {
    number: "02",
    icon: Hammer,
    image: "/images/renovation-kitchen.jpg",
    title: "Renovations",
    slug: "renovations",
    description: "Transforming existing spaces into modern masterpieces. We breathe new life into your property with stunning renovations.",
    features: ["Kitchen & bathroom", "Extensions", "Full home makeovers"],
  },
  {
    number: "03",
    icon: Palette,
    image: "/images/interior-living-room.jpg",
    title: "Interior Design",
    slug: "interior-design",
    description: "Premium interior design services to complete your dream home. Our designers create spaces that inspire and delight.",
    features: ["Space planning", "3D visualization", "Custom furnishings"],
  },
  {
    number: "04",
    icon: Building2,
    image: "/images/duplex-exterior.jpg",
    title: "Duplex & Townhouses",
    slug: "duplex-townhouses",
    description: "Maximize your property potential with dual occupancy solutions. Perfect for investors and multi-generational families.",
    features: ["Dual occupancy", "Investment focused", "Council approval"],
  },
  {
    number: "05",
    icon: Wrench,
    image: "/images/custom-home-luxury.jpg",
    title: "Custom Builds",
    slug: "custom-builds",
    description: "Bespoke architectural homes designed for unique sites and specific requirements. Your vision, our expertise.",
    features: ["Architectural design", "Challenging sites", "Luxury finishes"],
  },
  {
    number: "06",
    icon: Store,
    image: "/images/commercial-building-modern.jpg",
    title: "Commercial",
    slug: "commercial",
    description: "Professional construction services for offices, retail spaces, and industrial projects. Built to code, delivered on time.",
    features: ["Office fit-outs", "Retail spaces", "BCA compliant"],
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-[#fafafa] py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">Our Services</span>
            <div className="w-8 h-[2px] bg-[#FF5A1F]" />
          </div>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] mb-4">
            Comprehensive Building &
            <span className="text-gradient"> Design Services</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            From new builds to commercial projects, we deliver exceptional quality across every service.
          </p>
        </motion.div>

        {/* 3x2 Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <TiltCard className="group relative h-full">
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    {/* Card container */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-700 border border-gray-100/80 hover:border-[#FF5A1F]/20 h-full flex flex-col">
                      {/* Image area */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Number badge */}
                        <div className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                          <span className="font-sora text-sm font-bold text-[#FF5A1F]">{service.number}</span>
                        </div>

                        {/* Icon badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-[#FF5A1F] rounded-xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>

                        {/* Title overlay at bottom of image */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="font-sora text-xl font-bold text-white drop-shadow-sm">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content area */}
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-gray-500 leading-relaxed text-sm mb-4 flex-1">
                          {service.description}
                        </p>

                        {/* Features list */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((feature, i) => (
                            <span 
                              key={i} 
                              className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* CTA row */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span className="inline-flex items-center gap-2 text-[#FF5A1F] font-semibold text-sm">
                            Learn More
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                          </span>

                          {/* Arrow circle */}
                          <div className="w-9 h-9 rounded-full bg-[#FF5A1F]/10 group-hover:bg-[#FF5A1F] flex items-center justify-center transition-all duration-500">
                            <ArrowRight className="w-4 h-4 text-[#FF5A1F] group-hover:text-white transition-colors duration-500 -rotate-45 group-hover:rotate-0" />
                          </div>
                        </div>

                        {/* Bottom accent line */}
                        <div className="mt-4 h-[2px] bg-gradient-to-r from-[#FF5A1F] to-[#FF5A1F]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-[#FF5A1F] text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,90,31,0.3)] group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
