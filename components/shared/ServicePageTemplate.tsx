"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, type LucideIcon } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

/* ---------- fallback images for related service cards ---------- */
const SERVICE_IMAGE_MAP: Record<string, string> = {
  "/services/new-home-builds": "/images/the-frame-home-construction-P5J5AFM.webp",
  "/services/renovations": "/images/Home-4-e1759734908574.webp",
  "/services/interior-design": "/images/ImageGen-1-1.webp",
  "/services/custom-builds": "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp",
  "/services/duplex-townhouses": "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-1.webp",
  "/services/commercial": "/images/mirador-building-in-sanchinarro-district-of-madrid-FPSM97G-1.webp",
};

interface ServicePageProps {
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroImage: string;
  breadcrumbLabel: string;
  overview: {
    title: string;
    highlight: string;
    description: string[];
    image: string;
  };
  features: { icon: LucideIcon; title: string; description: string }[];
  benefits: string[];
  galleryImages: { src: string; alt: string }[];
  relatedServices: {
    title: string;
    href: string;
    description: string;
    image?: string;
  }[];
}

export default function ServicePageTemplate({
  heroTitle,
  heroHighlight,
  heroDescription,
  heroImage,
  breadcrumbLabel,
  overview,
  features,
  benefits,
  galleryImages,
  relatedServices,
}: ServicePageProps) {
  const overviewRef = useRef(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });

  // Generate Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${heroTitle} ${heroHighlight}`,
    "description": heroDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Design Homes Pty Ltd",
      "@id": `${siteUrl}/#business`
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Brisbane",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "QLD",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "City",
        "name": "Gold Coast",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "QLD",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "City",
        "name": "Sunshine Coast",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "QLD",
          "addressCountry": "AU"
        }
      }
    ],
    "url": `${siteUrl}/services/${breadcrumbLabel.toLowerCase().replace(/\s+/g, '-')}`.replace(/-+/g, '-'),
    "image": heroImage.startsWith('http') ? heroImage : `${siteUrl}${heroImage}`
  };

  return (
    <main className="min-h-screen">
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <SiteNavbar />

      <PageHero
        title={heroTitle}
        highlight={heroHighlight}
        description={heroDescription}
        image={heroImage}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: breadcrumbLabel, href: "#" },
        ]}
      />

      {/* ─── Overview ─── */}
      <section className="bg-white py-24 lg:py-32" ref={overviewRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side with decorative accent */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src={overview.image}
                  alt={overview.title}
                  width={700}
                  height={550}
                  className="w-full h-[420px] lg:h-[540px] object-cover"
                />
                {/* Gradient overlay at bottom for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              {/* Decorative floating accent */}
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-[#FF5A1F]/10 rounded-3xl -z-10 hidden lg:block" />
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-[#FF5A1F]/5 rounded-2xl -z-10 hidden lg:block" />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#FF5A1F]" />
                <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">
                  Overview
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-[1.15] mb-8">
                {overview.title}
                <span className="text-gradient"> {overview.highlight}</span>
              </h2>
              <div className="space-y-4 mb-10">
                {overview.description.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-500 text-base lg:text-lg leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Benefits as styled cards */}
              <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 16 }}
                    animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.06, duration: 0.4 }}
                    className="flex items-center gap-3 bg-gradient-to-r from-[#FF5A1F]/[0.06] to-transparent rounded-xl px-4 py-3 border border-[#FF5A1F]/10 hover:border-[#FF5A1F]/25 hover:from-[#FF5A1F]/[0.1] transition-all duration-300"
                  >
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#FF5A1F] shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="bg-[#fafafa] py-24 lg:py-32" ref={featuresRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#FF5A1F]" />
              <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">
                What We Offer
              </span>
              <div className="w-8 h-[2px] bg-[#FF5A1F]" />
            </div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-gray-900 leading-[1.15]">
              Why Choose Our
              <span className="text-gradient"> Service</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-black/[0.06] hover:border-[#FF5A1F]/20 hover:-translate-y-1 transition-all duration-500 group overflow-hidden"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF5A1F] to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-14 h-14 bg-gradient-to-br from-[#FF5A1F]/10 to-[#FF5A1F]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#FF5A1F] group-hover:to-orange-500 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-[#FF5A1F] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery ─── */}
      {galleryImages.length > 0 && (
        <section className="bg-[#0d1117] py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#FF5A1F]" />
                <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">
                  Our Work
                </span>
                <div className="w-8 h-[2px] bg-[#FF5A1F]" />
              </div>
              <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-white leading-[1.15]">
                Project <span className="text-gradient">Gallery</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-[280px] lg:h-[320px] rounded-3xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-sm font-medium font-[family-name:var(--font-sora)]">
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Related Services ─── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#FF5A1F]" />
              <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">
                Explore More
              </span>
              <div className="w-8 h-[2px] bg-[#FF5A1F]" />
            </div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-gray-900">
              Related <span className="text-gradient">Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => {
              const cardImage =
                service.image ||
                SERVICE_IMAGE_MAP[service.href] ||
                "/images/Home-4-e1759734908574.webp";

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <Link
                    href={service.href}
                    className="group block h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/[0.06] hover:border-[#FF5A1F]/20 transition-all duration-500"
                  >
                    {/* Card image */}
                    <div className="relative h-[220px] overflow-hidden">
                      <Image
                        src={cardImage}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      {/* Floating badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
                        <span className="text-[11px] font-semibold text-gray-800 uppercase tracking-wide">
                          Service
                        </span>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-7">
                      <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF5A1F] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#FF5A1F] font-semibold text-sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
      <SiteFooter />
    </main>
  );
}
