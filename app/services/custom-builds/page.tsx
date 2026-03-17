"use client";

import { Wrench, Star, Gem, Mountain, Shield, Paintbrush } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function CustomBuildsPage() {
  return (
    <ServicePageTemplate
      heroTitle="Bespoke"
      heroHighlight="Custom Builds"
      heroDescription="One-of-a-kind homes for unique visions. From architectural masterpieces to homes on challenging sites, we bring the extraordinary to life."
      heroImage="/images/modern-villa-with-pool-and-deck-H27FA57-1.webp"
      breadcrumbLabel="Custom Builds"
      overview={{
        title: "Where Vision Meets",
        highlight: "Craftsmanship",
        description: [
          "Custom builds are where our passion truly shines. These are projects that push boundaries, challenge conventions, and result in homes that are genuinely one-of-a-kind. Whether it's a hillside masterpiece, a waterfront retreat, or an architectural statement, we have the expertise to deliver.",
          "Our team thrives on complexity. We work closely with architects, engineers, and artisan craftspeople to bring ambitious designs to life, while ensuring every element meets our exacting quality standards.",
        ],
        image: "/images/modern-villa-with-pool-and-deck-H27FA57.webp",
      }}
      features={[
        { icon: Wrench, title: "Bespoke Design", description: "Fully customized designs that reflect your unique vision, from architectural concept through to finished details." },
        { icon: Star, title: "Premium Finishes", description: "Access to the finest materials, fixtures, and finishes from around the world for a truly luxury result." },
        { icon: Gem, title: "Unique Architecture", description: "We specialize in complex architectural designs including cantilevered structures, curved walls, and innovative forms." },
        { icon: Mountain, title: "Challenging Sites", description: "Expert solutions for difficult blocks including steep slopes, waterfront, bushfire zones, and flood-prone areas." },
        { icon: Shield, title: "Engineering Excellence", description: "Advanced structural engineering solutions that make seemingly impossible designs a reality." },
        { icon: Paintbrush, title: "Artisan Craftsmanship", description: "We engage specialist craftspeople for bespoke joinery, metalwork, stone masonry, and other artisan finishes." },
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
        { src: "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp", alt: "Custom Build 1" },
        { src: "/images/modern-villa-with-pool-and-deck-H27FA57.webp", alt: "Custom Build 2" },
        { src: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-2.webp", alt: "Custom Build 3" },
      ]}
      relatedServices={[
        { title: "New Home Builds", href: "/services/new-home-builds", description: "For standard custom homes with efficient build processes." },
        { title: "Interior Design", href: "/services/interior-design", description: "Complete your custom home with bespoke interior design." },
        { title: "Renovations", href: "/services/renovations", description: "Transform an existing property into something extraordinary." },
      ]}
    />
  );
}
