import type { Metadata } from "next";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Home Renovations Brisbane, Gold Coast & Sunshine Coast | Design Homes",
  description: "Expert home renovation services across SEQ. Kitchen, bathroom, extensions & full home transformations. Quality craftsmanship in Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "home renovations Brisbane",
    "kitchen renovations Gold Coast",
    "bathroom renovations Sunshine Coast",
    "house extensions SEQ",
    "home makeover Queensland",
    "renovation builders",
    "heritage restoration",
    "modern home upgrades",
  ],
  openGraph: {
    title: "Home Renovations | Transform Your Space",
    description: "Expert home renovation services across Brisbane, Gold Coast & Sunshine Coast. Kitchen, bathroom, extensions & full home transformations.",
    type: "article",
    url: `${siteUrl}/services/renovations`,
    images: [
      {
        url: "/images/renovation-kitchen.jpg",
        width: 1200,
        height: 630,
        alt: "Home Renovations - Design Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Renovations | Design Homes",
    description: "Expert home renovation services across SEQ. Kitchen, bathroom, extensions & full home transformations.",
    images: ["/images/modern-rooftop-patio-with-sunset-view-8SF9VVP.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/services/renovations`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RenovationsPage() {
  return (
    <ServicePageTemplate
      heroTitle="Home"
      heroHighlight="Renovations"
      heroDescription="Transform your existing space into something extraordinary. From kitchen makeovers to complete home transformations."
      heroImage="/images/renovation-kitchen.jpg"
      breadcrumbLabel="Renovations"
      overview={{
        title: "Breathing New Life Into",
        highlight: "Your Space",
        description: [
          "Whether you're looking to modernize an outdated kitchen, add an extension, or completely transform your home, our renovation team delivers exceptional results that exceed expectations.",
          "We understand that living through a renovation can be challenging. That's why we plan meticulously, communicate clearly, and work efficiently to minimize disruption to your daily life.",
        ],
        image: "/images/renovation-bathroom.jpg",
      }}
      features={[
        { iconName: "Hammer", title: "Kitchen & Bathroom", description: "Complete kitchen and bathroom renovations with modern finishes, quality fixtures, and smart storage solutions." },
        { iconName: "BadgeCheck", title: "Home Extensions", description: "Add extra living space, bedrooms, or outdoor areas that seamlessly integrate with your existing home." },
        { iconName: "Shield", title: "Structural Changes", description: "From removing walls to adding stories, we handle all structural modifications safely and to code." },
        { iconName: "TrendingUp", title: "Value Adding", description: "Our renovations are designed to maximize your property value while improving your living experience." },
        { iconName: "Paintbrush", title: "Modern Upgrades", description: "Update finishes, lighting, flooring, and fixtures to bring your home into the modern era." },
        { iconName: "Wrench", title: "Heritage Restoration", description: "Sensitive restoration of heritage homes that preserves character while adding modern comforts." },
      ]}
      benefits={[
        "Minimal disruption",
        "Transparent pricing",
        "Experienced team",
        "Quality finishes",
        "Structural expertise",
        "Council approvals handled",
        "12-month warranty",
        "Regular communication",
      ]}
      galleryImages={[
        { src: "/images/renovation-kitchen.jpg", alt: "Renovation 1" },
        { src: "/images/renovation-bathroom.jpg", alt: "Renovation 2" },
        { src: "/images/home-extension.jpg", alt: "Renovation 3" },
      ]}
      relatedServices={[
        { title: "Interior Design", href: "/services/interior-design", description: "Complement your renovation with professional interior design." },
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Starting from scratch? Explore our new home build service." },
        { title: "Custom Builds", href: "/services/custom-builds", description: "For truly bespoke transformations and unique projects." },
      ]}
    />
  );
}
