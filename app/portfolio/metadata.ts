import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "Portfolio | Design Homes - Completed Projects Brisbane, Gold Coast & SEQ",
  description: "View our portfolio of completed projects. Custom homes, renovations, duplexes & commercial builds across Brisbane, Gold Coast & Sunshine Coast. Award-winning craftsmanship.",
  keywords: [
    "home building portfolio Brisbane",
    "completed projects Gold Coast",
    "custom home examples Sunshine Coast",
    "renovation portfolio SEQ",
    "duplex projects Queensland",
    "home construction gallery",
    "before after renovations",
    "luxury home portfolio",
  ],
  openGraph: {
    title: "Our Portfolio | Completed Projects Across SEQ",
    description: "Explore our diverse range of completed projects across Brisbane, Gold Coast & Sunshine Coast. Custom homes, renovations, duplexes & commercial builds.",
    type: "website",
    url: `${siteUrl}/portfolio`,
    images: [
      {
        url: "/images/portfolio-luxury-1.jpg",
        width: 1200,
        height: 630,
        alt: "Design Homes Portfolio - Completed Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Design Homes",
    description: "Explore our completed projects across Brisbane, Gold Coast & Sunshine Coast. Custom homes, renovations & commercial builds.",
    images: ["/images/portfolio-luxury-1.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
