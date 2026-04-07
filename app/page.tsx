import type { Metadata } from "next";
import SiteNavbar from "@/components/shared/SiteNavbar";
import ScrollProgress from "@/components/shared/ScrollProgress";
import MobileCTA from "@/components/shared/MobileCTA";
import Hero from "@/components/sections/Hero";
import TrustTicker from "@/components/sections/TrustTicker";
import About from "@/components/sections/About";
import Innovation from "@/components/sections/Innovation";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/shared/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Design Homes Pty Ltd | New Home Builders Brisbane, Gold Coast & Sunshine Coast",
  description: "Quality residential builders in South East Queensland. New homes, duplexes, townhouses, custom builds & Queenslander homes across Brisbane, Gold Coast & Sunshine Coast. QBCC Licensed.",
  keywords: [
    "new home builders Brisbane",
    "home builders Gold Coast",
    "home builders Sunshine Coast",
    "new home construction SEQ",
    "residential builders Queensland",
    "custom home builders",
    "duplex builders Brisbane",
    "townhouse construction",
    "Queenslander homes",
    "QBCC licensed builder",
  ],
  openGraph: {
    title: "Design Homes Pty Ltd | New Home Builders Brisbane, Gold Coast & Sunshine Coast",
    description: "Quality residential builders in South East Queensland. New homes, duplexes, townhouses & custom builds. QBCC Licensed.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Design Homes - Quality residential builders in South East Queensland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Homes | New Home Builders SEQ",
    description: "Quality residential builders in South East Queensland. New homes, duplexes, townhouses & custom builds. QBCC Licensed.",
    images: ["/images/hero-home.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <MobileCTA />
      <SiteNavbar />
      <Hero />
      <TrustTicker />
      <About />
      <div className="section-divider-top">
        <Innovation />
      </div>
      <Services />
      {/* <div className="section-divider-top">
        <Portfolio />
      </div> */}
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
      <SiteFooter />
    </main>
  );
}
