import type { Metadata } from "next";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Custom Home Builders Brisbane, Gold Coast & Sunshine Coast",
  description: "Bespoke custom home builders across SEQ. Unique architectural designs, challenging sites & premium finishes in Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "custom home builders Brisbane",
    "bespoke homes Gold Coast",
    "architectural homes Sunshine Coast",
    "luxury home builders SEQ",
    "unique home designs Queensland",
    "challenging site builders",
    "architect collaboration",
    "premium home construction",
  ],
  openGraph: {
    title: "Custom Home Builders | Bespoke Architectural Homes",
    description: "Bespoke custom home builders across Brisbane, Gold Coast & Sunshine Coast. Unique architectural designs, challenging sites & premium finishes.",
    type: "article",
    url: `${siteUrl}/services/custom-builds`,
    images: [
      {
        url: "/images/custom-home-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Home Builds - Design Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Builds | Design Homes",
    description: "Bespoke custom home builders across SEQ. Unique architectural designs, challenging sites & premium finishes.",
    images: ["/images/custom-home-luxury.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/services/custom-builds`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CustomBuildsPage() {
  return (
    <ServicePageTemplate
      heroTitle="Bespoke"
      heroHighlight="Custom Builds"
      heroDescription="One-of-a-kind homes for unique visions. From architectural masterpieces to homes on challenging sites, we bring the extraordinary to life."
      heroImage="/images/custom-home-luxury.jpg"
      breadcrumbLabel="Custom Builds"
      overview={{
        title: "Where Vision Meets",
        highlight: "Craftsmanship",
        description: [
          "Custom builds are where our passion truly shines. These are projects that push boundaries, challenge conventions, and result in homes that are genuinely one-of-a-kind. Whether it's a hillside masterpiece, a waterfront retreat, or an architectural statement, we have the expertise to deliver.",
          "Our team thrives on complexity. We work closely with architects, engineers, and artisan craftspeople to bring ambitious designs to life, while ensuring every element meets our exacting quality standards.",
        ],
        image: "/images/bespoke-architecture.jpg",
      }}
      features={[
        { iconName: "Wrench", title: "Bespoke Design", description: "Fully customized designs that reflect your unique vision, from architectural concept through to finished details." },
        { iconName: "Award", title: "Premium Finishes", description: "Access to the finest materials, fixtures, and finishes from around the world for a truly luxury result." },
        { iconName: "Gem", title: "Unique Architecture", description: "We specialize in complex architectural designs including cantilevered structures, curved walls, and innovative forms." },
        { iconName: "MapPin", title: "Challenging Sites", description: "Expert solutions for difficult blocks including steep slopes, waterfront, bushfire zones, and flood-prone areas." },
        { iconName: "Shield", title: "Engineering Excellence", description: "Advanced structural engineering solutions that make seemingly impossible designs a reality." },
        { iconName: "Paintbrush", title: "Artisan Craftsmanship", description: "We engage specialist craftspeople for bespoke joinery, metalwork, stone masonry, and other artisan finishes." },
      ]}
      benefits={[
        "Fully bespoke design",
        "Architect collaboration",
        "Complex site expertise",
        "Premium material sourcing",
        "Artisan craftsmanship",
        "Structural innovation",
        "Dedicated project manager",
        "Comprehensive warranty",
      ]}
      galleryImages={[
        { src: "/images/custom-home-luxury.jpg", alt: "Custom Build 1" },
        { src: "/images/bespoke-architecture.jpg", alt: "Custom Build 2" },
        { src: "/images/modern-unique-house.jpg", alt: "Custom Build 3" },
      ]}
      relatedServices={[
        { title: "New Home Builds", href: "/services/new-home-builds", description: "For standard custom homes with efficient build processes." },
        { title: "Queenslander Homes", href: "/services/queenslander-homes", description: "Authentic Queenslander homes with traditional character and modern comfort." },
        { title: "Duplex & Townhouses", href: "/services/duplex-townhouses", description: "Maximize your investment with expertly built dual occupancy properties." },
      ]}
    />
  );
}
