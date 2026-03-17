import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "Contact Us | Design Homes - Brisbane, Gold Coast & Sunshine Coast",
  description: "Get in touch with Design Homes for a free consultation & quote. Serving Brisbane, Gold Coast & Sunshine Coast. Call +61 7 1234 5678 or email hello@designhomes.com.au",
  keywords: [
    "contact home builders Brisbane",
    "home builders Gold Coast contact",
    "builders Sunshine Coast",
    "free quote home construction",
    "home building consultation SEQ",
    "Design Homes contact",
    "custom builder enquiry",
    "renovation quote Queensland",
  ],
  openGraph: {
    title: "Contact Us | Design Homes Pty Ltd",
    description: "Get in touch for a free consultation & quote. Serving Brisbane, Gold Coast & Sunshine Coast. Call +61 7 1234 5678.",
    type: "website",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: "/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Design Homes - Free Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Design Homes",
    description: "Get in touch for a free consultation & quote. Serving Brisbane, Gold Coast & Sunshine Coast.",
    images: ["/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
