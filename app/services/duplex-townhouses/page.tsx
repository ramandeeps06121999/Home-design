"use client";

import { Building2, TrendingUp, Shield, Ruler, Users, FileCheck } from "lucide-react";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export default function DuplexTownhousesPage() {
  return (
    <ServicePageTemplate
      heroTitle="Duplex &"
      heroHighlight="Townhouses"
      heroDescription="Maximize your property's potential with expertly designed and built duplexes and townhouses. Smart investments, beautifully built."
      heroImage="/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-1.webp"
      breadcrumbLabel="Duplex & Townhouses"
      overview={{
        title: "Smart Investments,",
        highlight: "Beautifully Built",
        description: [
          "Dual occupancy and multi-dwelling builds are one of the smartest property investment strategies available. Our experienced team specializes in designing and building duplexes and townhouses that maximize return while maintaining exceptional living standards.",
          "We navigate the complex planning and approval processes, optimize designs for your specific block, and deliver builds that attract quality tenants or buyers. Whether you're building to live in one and rent the other, or as a pure investment, we have the expertise to make it work.",
        ],
        image: "/images/mirador-building-in-sanchinarro-district-of-madrid-FPSM97G-1.webp",
      }}
      features={[
        { icon: Building2, title: "Dual Occupancy Design", description: "Optimized designs that maximize the use of your block while meeting all council requirements and setback rules." },
        { icon: TrendingUp, title: "Investment Maximization", description: "Strategic design choices that maximize rental yields and capital growth for your property investment." },
        { icon: Shield, title: "Council Compliance", description: "Expert navigation of council requirements, including town planning, building approvals, and compliance certificates." },
        { icon: Ruler, title: "Smart Layouts", description: "Clever floor plans that provide privacy, natural light, and functional living spaces for each dwelling." },
        { icon: Users, title: "Tenant Appeal", description: "Modern finishes and thoughtful design elements that attract and retain quality tenants." },
        { icon: FileCheck, title: "Turnkey Solutions", description: "Complete packages from feasibility assessment to final handover, including all approvals and certifications." },
      ]}
      benefits={[
        "Feasibility assessment",
        "Council approval handling",
        "Investment-focused design",
        "Fixed-price contracts",
        "Quality construction",
        "Strata title setup",
        "Landscaping included",
        "Rental-ready finish",
      ]}
      galleryImages={[
        { src: "/images/mirador-building-in-sanchinarro-district-of-madrid-FPSM97G-1.webp", alt: "Duplex 1" },
        { src: "/images/modern-rooftop-patio-with-sunset-view-8SF9VVP-1.webp", alt: "Townhouse 1" },
        { src: "/images/Home-4-e1759734908574.webp", alt: "Townhouse 2" },
      ]}
      relatedServices={[
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Looking for a single dwelling? Check out our new home builds." },
        { title: "Commercial", href: "/services/commercial", description: "For larger multi-unit developments and commercial projects." },
        { title: "Interior Design", href: "/services/interior-design", description: "Premium interiors to maximize your property's appeal." },
      ]}
    />
  );
}
