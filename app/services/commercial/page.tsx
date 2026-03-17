"use client";

import { Store, Building2, FileCheck, Clock, Shield, Users } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function CommercialPage() {
  return (
    <ServicePageTemplate
      heroTitle="Commercial"
      heroHighlight="Construction"
      heroDescription="Professional commercial building services for offices, retail spaces, and mixed-use developments. Built to the highest standards."
      heroImage="/images/mirador-building-in-sanchinarro-district-of-madrid-FPSM97G-1.webp"
      breadcrumbLabel="Commercial"
      overview={{
        title: "Professional Commercial",
        highlight: "Solutions",
        description: [
          "Our commercial construction division delivers high-quality office fit-outs, retail spaces, and mixed-use developments across South East Queensland. We bring the same attention to detail and quality standards from our residential work to every commercial project.",
          "Whether you're fitting out a new office, building a retail space, or developing a mixed-use property, our experienced team manages every aspect of the project to ensure it's delivered on time, on budget, and to specification.",
        ],
        image: "/images/formwork-pillars-ready-for-concrete-pouring-in-con-73RVT8G.webp",
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
        { src: "/images/mirador-building-in-sanchinarro-district-of-madrid-FPSM97G-1.webp", alt: "Commercial 1" },
        { src: "/images/formwork-pillars-ready-for-concrete-pouring-in-con-73RVT8G.webp", alt: "Commercial 2" },
        { src: "/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp", alt: "Commercial 3" },
      ]}
      relatedServices={[
        { title: "Duplex & Townhouses", href: "/services/duplex-townhouses", description: "Multi-dwelling residential developments." },
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Quality residential construction services." },
        { title: "Renovations", href: "/services/renovations", description: "Commercial renovation and refurbishment services." },
      ]}
    />
  );
}
