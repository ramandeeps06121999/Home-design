import type { Metadata } from "next";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "Interior Design Services Brisbane, Gold Coast & Sunshine Coast",
  description: "Premium interior design services across SEQ. Space planning, material selection, 3D visualization & styling for homes in Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "interior design Brisbane",
    "interior designers Gold Coast",
    "home styling Sunshine Coast",
    "space planning SEQ",
    "interior decoration Queensland",
    "3D visualization",
    "color consulting",
    "material selection",
  ],
  openGraph: {
    title: "Interior Design Services | Premium Home Styling",
    description: "Premium interior design services across Brisbane, Gold Coast & Sunshine Coast. Space planning, material selection & 3D visualization.",
    type: "article",
    url: `${siteUrl}/services/interior-design`,
    images: [
      {
        url: "/images/interior-living-room.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Services - Design Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design | Design Homes",
    description: "Premium interior design services across SEQ. Space planning, material selection & 3D visualization.",
    images: ["/images/ImageGen-1-1.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/services/interior-design`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InteriorDesignPage() {
  return (
    <ServicePageTemplate
      heroTitle="Premium Interior"
      heroHighlight="Design"
      heroDescription="Creating inspiring interiors that reflect your personality, lifestyle, and taste. From concept boards to final styling."
      heroImage="/images/interior-living-room.jpg"
      breadcrumbLabel="Interior Design"
      overview={{
        title: "Spaces That Inspire &",
        highlight: "Delight",
        description: [
          "Our interior design team brings spaces to life with a perfect blend of aesthetics and functionality. We work closely with you to understand your style preferences, how you use each space, and what makes you feel at home.",
          "From initial concept boards and 3D visualizations to material selection and final styling, we handle every aspect of the design process to deliver interiors that truly reflect who you are.",
        ],
        image: "/images/interior-luxury-modern.jpg",
      }}
      features={[
        { iconName: "Palette", title: "Color Consulting", description: "Expert color schemes that set the mood and create cohesion throughout your home's interior spaces." },
        { iconName: "BadgeCheck", title: "3D Visualization", description: "See your new interior before construction begins with detailed 3D renders and virtual walkthroughs." },
        { iconName: "Lightbulb", title: "Lighting Design", description: "Strategic lighting plans that enhance ambiance, highlight features, and improve functionality." },
        { iconName: "Layers", title: "Material Selection", description: "Access to premium materials, tiles, stones, and finishes from Australia's top suppliers." },
        { iconName: "Sofa", title: "Furniture & Styling", description: "Custom furniture specifications and complete styling to create a magazine-worthy finish." },
        { iconName: "Paintbrush", title: "Space Planning", description: "Optimized layouts that maximize space efficiency while maintaining beautiful flow between rooms." },
      ]}
      benefits={[
        "Personalized design approach",
        "3D visualization included",
        "Access to premium suppliers",
        "Full project coordination",
        "Budget-conscious options",
        "Trend-aware styling",
        "Sustainable materials",
        "End-to-end service",
      ]}
      galleryImages={[
        { src: "/images/interior-living-room.jpg", alt: "Interior Design 1" },
        { src: "/images/interior-luxury-modern.jpg", alt: "Interior Design 2" },
        { src: "/images/interior-modern-design.jpg", alt: "Interior Design 3" },
      ]}
      relatedServices={[
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Build a new home with interior design included from day one." },
        { title: "Renovations", href: "/services/renovations", description: "Renovating? Let us redesign your interiors at the same time." },
        { title: "Custom Builds", href: "/services/custom-builds", description: "Bespoke builds with fully customized interiors." },
      ]}
    />
  );
}
