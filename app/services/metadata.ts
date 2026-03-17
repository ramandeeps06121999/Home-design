import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "Our Services | Design Homes - New Homes, Renovations & More",
  description: "Explore our comprehensive building services: new home builds, renovations, interior design, duplexes, townhouses, custom builds & commercial construction across SEQ.",
  keywords: [
    "home building services Brisbane",
    "renovations Gold Coast",
    "interior design Sunshine Coast",
    "duplex builders SEQ",
    "custom home construction",
    "commercial builders Queensland",
    "townhouse construction",
    "home renovation services",
  ],
  openGraph: {
    title: "Our Building Services | Design Homes Pty Ltd",
    description: "New home builds, renovations, interior design, duplexes, townhouses & commercial construction across Brisbane, Gold Coast & Sunshine Coast.",
    type: "website",
    url: `${siteUrl}/services`,
    images: [
      {
        url: "/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp",
        width: 1200,
        height: 630,
        alt: "Design Homes Building Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Design Homes",
    description: "New home builds, renovations, interior design, duplexes & commercial construction across SEQ.",
    images: ["/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
