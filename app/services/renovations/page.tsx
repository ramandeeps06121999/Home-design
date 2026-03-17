"use client";

import { Hammer, Sparkles, Shield, TrendingUp, Paintbrush, Wrench } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function RenovationsPage() {
  return (
    <ServicePageTemplate
      heroTitle="Home"
      heroHighlight="Renovations"
      heroDescription="Transform your existing space into something extraordinary. From kitchen makeovers to complete home transformations."
      heroImage="/images/modern-rooftop-patio-with-sunset-view-8SF9VVP.webp"
      breadcrumbLabel="Renovations"
      overview={{
        title: "Breathing New Life Into",
        highlight: "Your Space",
        description: [
          "Whether you're looking to modernize an outdated kitchen, add an extension, or completely transform your home, our renovation team delivers exceptional results that exceed expectations.",
          "We understand that living through a renovation can be challenging. That's why we plan meticulously, communicate clearly, and work efficiently to minimize disruption to your daily life.",
        ],
        image: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP.webp",
      }}
      features={[
        { icon: Hammer, title: "Kitchen & Bathroom", description: "Complete kitchen and bathroom renovations with modern finishes, quality fixtures, and smart storage solutions." },
        { icon: Sparkles, title: "Home Extensions", description: "Add extra living space, bedrooms, or outdoor areas that seamlessly integrate with your existing home." },
        { icon: Shield, title: "Structural Changes", description: "From removing walls to adding stories, we handle all structural modifications safely and to code." },
        { icon: TrendingUp, title: "Value Adding", description: "Our renovations are designed to maximize your property value while improving your living experience." },
        { icon: Paintbrush, title: "Modern Upgrades", description: "Update finishes, lighting, flooring, and fixtures to bring your home into the modern era." },
        { icon: Wrench, title: "Heritage Restoration", description: "Sensitive restoration of heritage homes that preserves character while adding modern comforts." },
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
        { src: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-1.webp", alt: "Renovation 1" },
        { src: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-2.webp", alt: "Renovation 2" },
        { src: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-3.webp", alt: "Renovation 3" },
      ]}
      relatedServices={[
        { title: "Interior Design", href: "/services/interior-design", description: "Complement your renovation with professional interior design." },
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Starting from scratch? Explore our new home build service." },
        { title: "Custom Builds", href: "/services/custom-builds", description: "For truly bespoke transformations and unique projects." },
      ]}
    />
  );
}
