"use client";

import { Palette, Eye, Lightbulb, Layers, Sofa, Paintbrush } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function InteriorDesignPage() {
  return (
    <ServicePageTemplate
      heroTitle="Premium Interior"
      heroHighlight="Design"
      heroDescription="Creating inspiring interiors that reflect your personality, lifestyle, and taste. From concept boards to final styling."
      heroImage="/images/ImageGen-1-1.webp"
      breadcrumbLabel="Interior Design"
      overview={{
        title: "Spaces That Inspire &",
        highlight: "Delight",
        description: [
          "Our interior design team brings spaces to life with a perfect blend of aesthetics and functionality. We work closely with you to understand your style preferences, how you use each space, and what makes you feel at home.",
          "From initial concept boards and 3D visualizations to material selection and final styling, we handle every aspect of the design process to deliver interiors that truly reflect who you are.",
        ],
        image: "/images/ImageGen-1-1.webp",
      }}
      features={[
        { icon: Palette, title: "Color Consulting", description: "Expert color schemes that set the mood and create cohesion throughout your home's interior spaces." },
        { icon: Eye, title: "3D Visualization", description: "See your new interior before construction begins with detailed 3D renders and virtual walkthroughs." },
        { icon: Lightbulb, title: "Lighting Design", description: "Strategic lighting plans that enhance ambiance, highlight features, and improve functionality." },
        { icon: Layers, title: "Material Selection", description: "Access to premium materials, tiles, stones, and finishes from Australia's top suppliers." },
        { icon: Sofa, title: "Furniture & Styling", description: "Custom furniture specifications and complete styling to create a magazine-worthy finish." },
        { icon: Paintbrush, title: "Space Planning", description: "Optimized layouts that maximize space efficiency while maintaining beautiful flow between rooms." },
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
        { src: "/images/ImageGen-1-1.webp", alt: "Interior Design 1" },
        { src: "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp", alt: "Interior Design 2" },
        { src: "/images/Home-4-e1759734908574.webp", alt: "Interior Design 3" },
      ]}
      relatedServices={[
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Build a new home with interior design included from day one." },
        { title: "Renovations", href: "/services/renovations", description: "Renovating? Let us redesign your interiors at the same time." },
        { title: "Custom Builds", href: "/services/custom-builds", description: "Bespoke builds with fully customized interiors." },
      ]}
    />
  );
}
