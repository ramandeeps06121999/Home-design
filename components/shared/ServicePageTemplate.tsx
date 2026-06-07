"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

/* ---------- fallback images for related service cards ---------- */
const SERVICE_IMAGE_MAP: Record<string, string> = {
  "/services/new-home-builds": "/images/new-home-build-1.jpg",
  "/services/custom-builds": "/images/custom-built-house.jpg",
  "/services/duplex-townhouses": "/images/duplex-exterior.jpg",
  "/services/queenslander-homes": "/images/queenslander-house.webp",
  "/services/renovations": "/images/renovation-kitchen.jpg",
  "/services/interior-design": "/images/interior-modern-design.jpg",
};

// Icon component that renders based on icon name
function FeatureIcon({ iconName }: { iconName: string }) {
  // Dynamically import and render the icon
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Home: require("lucide-react").Home,
    Hammer: require("lucide-react").Hammer,
    Palette: require("lucide-react").Palette,
    Building2: require("lucide-react").Building2,
    Wrench: require("lucide-react").Wrench,
    Store: require("lucide-react").Store,
    TrendingUp: require("lucide-react").TrendingUp,
    Shield: require("lucide-react").Shield,
    Ruler: require("lucide-react").Ruler,
    Users: require("lucide-react").Users,
    FileCheck: require("lucide-react").FileCheck,
    Paintbrush: require("lucide-react").Paintbrush,
    Lightbulb: require("lucide-react").Lightbulb,
    Sofa: require("lucide-react").Sofa,
    TreePine: require("lucide-react").TreePine,
    BadgeCheck: require("lucide-react").BadgeCheck,
    HardHat: require("lucide-react").HardHat,
    ClipboardCheck: require("lucide-react").ClipboardCheck,
    Wallet: require("lucide-react").Wallet,
    Clock: require("lucide-react").Clock,
    Briefcase: require("lucide-react").Briefcase,
    Award: require("lucide-react").Award,
    Settings: require("lucide-react").Settings,
    MapPin: require("lucide-react").MapPin,
    Gem: require("lucide-react").Gem,
    Layers: require("lucide-react").Layers,
  };

  const IconComponent = icons[iconName];
  if (!IconComponent) return null;
  return <IconComponent className="w-7 h-7 text-black group-hover:text-white transition-colors duration-500" />;
}

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
  features: { iconName: string; title: string; description: string }[];
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

  // Lightbox state for the project gallery
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isLightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
      else if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isLightboxOpen, galleryImages.length]);

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
      <section className="bg-white py-12 lg:py-20" ref={overviewRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Image side with decorative accent */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative h-full"
            >
              <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src={overview.image}
                  alt={overview.title}
                  width={700}
                  height={550}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay at bottom for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                  Overview
                </span>
              </div>
              <h2 className="font-sora text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-black leading-[1.15] mb-8">
                {overview.title}
                <span className="text-gradient"> {overview.highlight}</span>
              </h2>
              <div className="space-y-4 mb-10">
                {overview.description.map((para, i) => (
                  <p
                    key={i}
                    className="text-black/60 text-base lg:text-lg leading-relaxed"
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
                    className="flex items-center gap-3 bg-black/[0.02] rounded-xl px-4 py-3 border border-black/[0.08] hover:border-black/20 hover:bg-black/[0.04] transition-all duration-300"
                  >
                    <CheckCircle2 className="w-[18px] h-[18px] text-black shrink-0" />
                    <span className="text-black/70 text-sm font-medium">
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
      <section className="bg-[#ffffff] py-12 lg:py-20" ref={featuresRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                What We Offer
              </span>
              <span className="h-px w-6 bg-[#D4AF37]" />
            </div>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-black leading-[1.15]">
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
                className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-sm hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.10)] hover:border-black/20 hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-black/[0.04] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-black">
                  <FeatureIcon iconName={feature.iconName} />
                </div>
                <h3 className="font-sora text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-black/60 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery ─── */}
      {galleryImages.length > 0 && (
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-6 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                  Our Work
                </span>
                <span className="h-px w-6 bg-[#D4AF37]" />
              </div>
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-black leading-[1.15]">
                Project <span className="text-gradient">Gallery</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <motion.button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open ${img.alt} in gallery`}
                  key={img.alt}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative block h-[280px] lg:h-[320px] w-full rounded-3xl overflow-hidden group cursor-pointer text-left"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  {/* Zoom affordance */}
                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                    <Sparkles className="h-4 w-4 text-black" />
                  </span>
                  <div className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-sm font-medium font-sora">
                      {img.alt}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Related Services ─── */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Explore More
              </span>
              <span className="h-px w-6 bg-[#D4AF37]" />
            </div>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-black">
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
                    className="group block h-full bg-white rounded-3xl overflow-hidden border border-black/[0.06] hover:shadow-xl hover:shadow-black/[0.06] hover:border-black/10 transition-all duration-500"
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
                        <Sparkles className="w-3.5 h-3.5 text-black" />
                        <span className="text-[11px] font-semibold text-black uppercase tracking-wide">
                          Service
                        </span>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-7">
                      <h3 className="font-sora text-xl font-bold text-black mb-2 group-hover:text-black transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-black/60 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-black font-semibold text-sm">
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

      {/* ─── Gallery Lightbox ─── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close gallery"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)); }}
              aria-label="Previous image"
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
                <Image
                  src={galleryImages[lightboxIndex!].src}
                  alt={galleryImages[lightboxIndex!].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-white/80">
                <p className="font-sora text-sm font-medium">{galleryImages[lightboxIndex!].alt}</p>
                <span className="text-xs text-white/50">{lightboxIndex! + 1} / {galleryImages.length}</span>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)); }}
              aria-label="Next image"
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
