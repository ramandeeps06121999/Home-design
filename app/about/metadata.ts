import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "About Us | Design Homes Pty Ltd - Brisbane, Gold Coast & Sunshine Coast",
  description: "Learn about Design Homes Pty Ltd - trusted custom home builders since 2008. Serving Brisbane, Gold Coast & Sunshine Coast with quality craftsmanship and exceptional service.",
  keywords: [
    "about Design Homes",
    "home builders Brisbane",
    "custom builders Gold Coast",
    "home construction company Sunshine Coast",
    "SEQ builders",
    "family owned builders",
    "Queensland construction company",
  ],
  openGraph: {
    title: "About Design Homes Pty Ltd | Trusted SEQ Builders Since 2008",
    description: "Learn about our journey from a small Brisbane team to South East Queensland's trusted builder. 15+ years of quality craftsmanship.",
    type: "website",
    url: `${siteUrl}/about`,
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "About Design Homes - Trusted SEQ Builders Since 2008",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Design Homes | Trusted SEQ Builders Since 2008",
    description: "Learn about our journey from a small Brisbane team to South East Queensland's trusted builder.",
    images: ["/images/about-team.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
