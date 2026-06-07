import type { Metadata } from "next";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Queenslander Home Builders Brisbane, Gold Coast & Sunshine Coast",
  description: "Authentic Queenslander home builders across SEQ. Traditional character homes with wraparound verandahs, VJ walls and modern comfort in Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "Queenslander home builders Brisbane",
    "Queenslander homes Gold Coast",
    "traditional Queenslander Sunshine Coast",
    "character home builders Queensland",
    "Queenslander renovation",
    "wraparound verandah homes",
    "elevated timber homes",
    "heritage style builders SEQ",
  ],
  openGraph: {
    title: "Queenslander Home Builders | Authentic Character Homes",
    description: "Authentic Queenslander home builders across Brisbane, Gold Coast & Sunshine Coast. Traditional character with modern comfort.",
    type: "article",
    url: `${siteUrl}/services/queenslander-homes`,
    images: [
      {
        url: "/images/queenslander-house.webp",
        width: 1200,
        height: 630,
        alt: "Queenslander Homes - Design Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queenslander Homes | Design Homes",
    description: "Authentic Queenslander home builders across SEQ. Traditional character with modern comfort.",
    images: ["/images/queenslander-house.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/services/queenslander-homes`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QueenslanderHomesPage() {
  return (
    <ServicePageTemplate
      heroTitle="Authentic"
      heroHighlight="Queenslander Homes"
      heroDescription="Timeless Queenslander homes that honour traditional character while delivering the comfort, efficiency and quality of a modern build."
      heroImage="/images/queenslander-house.webp"
      breadcrumbLabel="Queenslander Homes"
      overview={{
        title: "Classic Character, Built for",
        highlight: "Modern Living",
        description: [
          "The Queenslander is an icon of South East Queensland — elevated, breezy, and full of character. We build new Queenslander-style homes that capture that timeless charm, from wraparound verandahs and VJ walls to high ceilings and classic timber detailing.",
          "Beneath the traditional character sits a thoroughly modern home: energy-efficient design, contemporary kitchens and bathrooms, and open-plan living that suits the way families live today. The result is a home with genuine soul and lasting value.",
        ],
        image: "/images/hero-home.jpg",
      }}
      features={[
        { iconName: "Award", title: "Authentic Character", description: "Traditional Queenslander proportions, rooflines and street presence, faithfully recreated in a brand-new home." },
        { iconName: "TreePine", title: "Wraparound Verandahs", description: "Generous verandahs that capture the breeze, extend your living space, and define the classic Queenslander look." },
        { iconName: "Ruler", title: "Elevated Design", description: "Raised construction that suits sloping blocks, improves airflow, and creates valuable space underneath." },
        { iconName: "Paintbrush", title: "VJ Walls & Detailing", description: "Period-correct VJ panelling, fretwork, breezeways and timber detailing for an authentic finish." },
        { iconName: "Home", title: "Modern Comfort", description: "Open-plan living, contemporary kitchens and bathrooms, and energy-efficient design throughout." },
        { iconName: "Shield", title: "Quality Construction", description: "Durable materials and meticulous workmanship, backed by our QBCC licence and structural warranty." },
      ]}
      benefits={[
        "Authentic Queenslander character",
        "Wraparound verandahs",
        "High ceilings & VJ walls",
        "Elevated, breezy design",
        "Modern energy efficiency",
        "Open-plan living",
        "Fixed-price contracts",
        "Comprehensive warranty",
      ]}
      galleryImages={[
        { src: "/images/queenslander-house.webp", alt: "Queenslander Home 1" },
        { src: "/images/new-home-build-2.jpg", alt: "Queenslander Home 2" },
        { src: "/images/home-extension.jpg", alt: "Queenslander Home 3" },
      ]}
      relatedServices={[
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Custom-designed new homes tailored to your lifestyle and budget." },
        { title: "Custom Builds", href: "/services/custom-builds", description: "Bespoke homes for unique sites and specific requirements." },
        { title: "Renovations & Extensions", href: "/services/renovations", description: "Restore or extend an existing Queenslander with expert care." },
      ]}
    />
  );
}
