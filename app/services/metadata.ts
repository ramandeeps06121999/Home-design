import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Our Services | Design Homes - New Homes, Duplexes, Custom Builds & Queenslander Homes",
  description: "Explore our comprehensive building services: new home builds, duplexes, townhouses, custom builds & Queenslander homes across SEQ.",
  keywords: [
    "home building services Brisbane",
    "duplex builders SEQ",
    "custom home construction",
    "Queenslander homes Queensland",
    "townhouse construction",
    "new home builds Gold Coast",
    "custom builds Sunshine Coast",
  ],
  openGraph: {
    title: "Our Building Services | Design Homes Pty Ltd",
    description: "New home builds, duplexes, townhouses, custom builds & Queenslander homes across Brisbane, Gold Coast & Sunshine Coast.",
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
    description: "New home builds, duplexes, custom builds & Queenslander homes across SEQ.",
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
