"use client";

import type { Metadata } from "next";
import { Store, Building2, FileCheck, Clock, Shield, Users } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "Commercial Builders Brisbane, Gold Coast & Sunshine Coast | Design Homes",
  description: "Professional commercial construction across SEQ. Office fit-outs, retail spaces & mixed-use developments in Brisbane, Gold Coast & Sunshine Coast. BCA compliant.",
  keywords: [
    "commercial builders Brisbane",
    "office fit outs Gold Coast",
    "retail construction Sunshine Coast",
    "commercial construction SEQ",
    "mixed use development Queensland",
    "shop fitters",
    "commercial renovations",
    "BCA compliant builders",
  ],
  openGraph: {
    title: "Commercial Construction | Professional Building Services",
    description: "Professional commercial construction across Brisbane, Gold Coast & Sunshine Coast. Office fit-outs, retail spaces & mixed-use developments.",
    type: "article",
    url: `${siteUrl}/services/commercial`,
    images: [
      {
        url: "/images/commercial-building-modern.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Construction - Design Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Construction | Design Homes",
    description: "Professional commercial construction across SEQ. Office fit-outs, retail spaces & mixed-use developments.",
    images: ["/images/commercial-building-modern.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/services/commercial`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommercialPage() {
  return (
    <ServicePageTemplate
      heroTitle="Commercial"
      heroHighlight="Construction"
      heroDescription="Professional commercial building services for offices, retail spaces, and mixed-use developments. Built to the highest standards."
      heroImage="/images/commercial-building-modern.jpg"
      breadcrumbLabel="Commercial"
      overview={{
        title: "Professional Commercial",
        highlight: "Solutions",
        description: [
          "Our commercial construction division delivers high-quality office fit-outs, retail spaces, and mixed-use developments across South East Queensland. We bring the same attention to detail and quality standards from our residential work to every commercial project.",
          "Whether you're fitting out a new office, building a retail space, or developing a mixed-use property, our experienced team manages every aspect of the project to ensure it's delivered on time, on budget, and to specification.",
        ],
        image: "/images/retail-store-exterior.jpg",
      }}
      features={[
        { icon: Store, title: "Office Fit-outs", description: "Modern office spaces designed for productivity, collaboration, and employee wellbeing." },
        { icon: Building2, title: "Retail Construction", description: "Eye-catching retail spaces that attract customers and enhance the shopping experience." },
        { icon: FileCheck, title: "Code Compliance", description: "Full compliance with BCA, fire safety, accessibility standards, and local council requirements." },
        { icon: Clock, title: "Minimal Downtime", description: "Efficient construction schedules that minimize disruption to your business operations." },
        { icon: Shield, title: "Quality Assurance", description: "Rigorous quality control processes throughout every phase of construction." },
        { icon: Users, title: "Stakeholder Management", description: "Professional communication with all stakeholders including tenants, landlords, and authorities." },
      ]}
      benefits={[
        "Commercial expertise",
        "BCA compliance",
        "Minimal disruption",
        "Project management",
        "Safety focused",
        "Budget control",
        "Quality guaranteed",
        "Timely completion",
      ]}
      galleryImages={[
        { src: "/images/commercial-building-modern.jpg", alt: "Commercial 1" },
        { src: "/images/retail-store-exterior.jpg", alt: "Commercial 2" },
        { src: "/images/commercial-building-modern.jpg", alt: "Commercial 3" },
      ]}
      relatedServices={[
        { title: "Duplex & Townhouses", href: "/services/duplex-townhouses", description: "Multi-dwelling residential developments." },
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Quality residential construction services." },
        { title: "Renovations", href: "/services/renovations", description: "Commercial renovation and refurbishment services." },
      ]}
    />
  );
}
