"use client";

import type { Metadata } from "next";
import { Home, Ruler, Shield, Leaf, Hammer, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "New Home Builds Brisbane, Gold Coast & Sunshine Coast | Design Homes",
  description: "Custom new home builders in SEQ. We design & build quality homes tailored to your lifestyle across Brisbane, Gold Coast & Sunshine Coast. Fixed-price contracts.",
  keywords: [
    "new home builds Brisbane",
    "custom home construction Gold Coast",
    "new home builders Sunshine Coast",
    "house and land packages SEQ",
    "custom home design Queensland",
    "energy efficient homes",
    "fixed price home builds",
    "new home construction",
  ],
  openGraph: {
    title: "New Home Builds | Custom Home Construction SEQ",
    description: "Custom new home builders across Brisbane, Gold Coast & Sunshine Coast. Fixed-price contracts, energy efficient designs & quality craftsmanship.",
    type: "article",
    url: `${siteUrl}/services/new-home-builds`,
    images: [
      {
        url: "/images/the-frame-home-construction-P5J5AFM.webp",
        width: 1200,
        height: 630,
        alt: "New Home Builds - Design Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Home Builds | Design Homes",
    description: "Custom new home builders across Brisbane, Gold Coast & Sunshine Coast. Fixed-price contracts & quality craftsmanship.",
    images: ["/images/the-frame-home-construction-P5J5AFM.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/services/new-home-builds`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewHomeBuildsPage() {
  return (
    <ServicePageTemplate
      heroTitle="Custom New"
      heroHighlight="Home Builds"
      heroDescription="From concept to completion, we design and build custom homes tailored to your lifestyle, budget, and aspirations."
      heroImage="/images/the-frame-home-construction-P5J5AFM.webp"
      breadcrumbLabel="New Home Builds"
      overview={{
        title: "Your Dream Home,",
        highlight: "Built to Last",
        description: [
          "Building a new home is one of life's most exciting journeys. At Design Homes, we make the process seamless and enjoyable, guiding you through every step from initial concept to handing over the keys.",
          "Our team of experienced architects, designers, and builders work together to create homes that are not only beautiful but also functional, energy-efficient, and built to the highest Australian standards.",
        ],
        image: "/images/Home-4-e1759734908574.webp",
      }}
      features={[
        { icon: Home, title: "Custom Floor Plans", description: "Every home is uniquely designed to match your family's needs, lifestyle, and the specific characteristics of your block." },
        { icon: Ruler, title: "Precision Engineering", description: "We use the latest construction techniques and technologies to ensure structural integrity and longevity." },
        { icon: Shield, title: "Fixed-Price Contracts", description: "No surprises. Our fixed-price contracts give you complete peace of mind throughout the build process." },
        { icon: Leaf, title: "Energy Efficient", description: "Smart design principles and quality materials ensure your home is energy efficient, reducing long-term running costs." },
        { icon: Hammer, title: "Quality Materials", description: "We source only premium materials from trusted Australian suppliers, ensuring durability and lasting beauty." },
        { icon: Clock, title: "On-Time Delivery", description: "Our project management expertise ensures your home is delivered on schedule, with regular progress updates." },
      ]}
      benefits={[
        "Custom designed to your brief",
        "QBCC licensed builder",
        "6-year structural warranty",
        "Fixed-price contracts",
        "Energy-efficient design",
        "Premium material selection",
        "Regular progress updates",
        "Full project management",
      ]}
      galleryImages={[
        { src: "/images/Home-4-e1759734908574.webp", alt: "New Home Build 1" },
        { src: "/images/the-frame-home-construction-P5J5AFM.webp", alt: "New Home Build 2" },
        { src: "/images/modern-villa-with-pool-and-deck-H27FA57.webp", alt: "New Home Build 3" },
      ]}
      relatedServices={[
        { title: "Interior Design", href: "/services/interior-design", description: "Complete your new home with our premium interior design services." },
        { title: "Custom Builds", href: "/services/custom-builds", description: "Looking for something truly unique? Explore our custom build options." },
        { title: "Duplex & Townhouses", href: "/services/duplex-townhouses", description: "Maximize your investment with dual occupancy builds." },
      ]}
    />
  );
}
