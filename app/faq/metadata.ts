import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "FAQ | Design Homes - Frequently Asked Questions",
  description: "Find answers to common questions about our building process, pricing, services & more. Design Homes - trusted builders in Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "home building FAQ",
    "new home build questions Brisbane",
    "building process explained",
    "home construction costs SEQ",
    "custom builder questions",
    "building timeline",
    "building warranty Queensland",
    "council approval process",
  ],
  openGraph: {
    title: "FAQ | Frequently Asked Questions",
    description: "Find answers to common questions about our building process, pricing, services & more. Trusted builders in Brisbane, Gold Coast & Sunshine Coast.",
    type: "website",
    url: `${siteUrl}/faq`,
  },
  twitter: {
    card: "summary",
    title: "FAQ | Design Homes",
    description: "Find answers to common questions about our building process, pricing & services.",
  },
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
