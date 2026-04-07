import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Design Homes Pty Ltd | Custom Home Builders Brisbane, Gold Coast & Sunshine Coast",
    template: "%s | Design Homes Pty Ltd",
  },
  description: "Award-winning custom home builders in South East Queensland. We specialize in new home builds, renovations, duplexes, townhouses & commercial projects across Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "custom home builders",
    "Brisbane",
    "Gold Coast",
    "Sunshine Coast",
    "SEQ",
    "new homes",
    "duplexes",
    "townhouses",
    "renovations",
    "interior design",
    "commercial construction",
    "Queensland builders",
    "home construction",
    "residential builders",
    "Design Homes",
  ],
  authors: [{ name: "Design Homes Pty Ltd" }],
  creator: "Design Homes Pty Ltd",
  publisher: "Design Homes Pty Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Design Homes Pty Ltd",
    title: "Design Homes Pty Ltd | Custom Home Builders Brisbane, Gold Coast & Sunshine Coast",
    description: "Award-winning custom home builders in South East Queensland. New homes, renovations, duplexes & commercial projects.",
    images: [
      {
        url: "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp",
        width: 1200,
        height: 630,
        alt: "Design Homes - Custom Home Builders in Brisbane, Gold Coast & Sunshine Coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Homes Pty Ltd | Custom Home Builders SEQ",
    description: "Award-winning custom home builders in South East Queensland. New homes, renovations, duplexes & commercial projects.",
    images: ["/images/modern-villa-with-pool-and-deck-H27FA57-1.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "construction",
  classification: "Business",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  other: {
    "theme-color": "#D4AF37",
    "msapplication-TileColor": "#D4AF37",
    "msapplication-config": "/browserconfig.xml",
  },
};

// Viewport configuration for theme color and responsive design
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D4AF37" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Design Homes Pty Ltd",
  description: "Award-winning custom home builders in South East Queensland specializing in new home builds, renovations, duplexes, townhouses, and commercial projects.",
  url: siteUrl,
  telephone: "+61 7 1234 5678",
  email: "hello@designhomes.com.au",
  image: `${siteUrl}/images/modern-villa-with-pool-and-deck-H27FA57-1.webp`,
  logo: `${siteUrl}/logo.webp`,
  priceRange: "$$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "Brisbane",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
    {
      "@type": "City",
      name: "Gold Coast",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
    {
      "@type": "City",
      name: "Sunshine Coast",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-27.4698",
    longitude: "153.0251",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    // Add social media URLs when available
    // "https://www.facebook.com/designhomes",
    // "https://www.instagram.com/designhomes",
    // "https://www.linkedin.com/company/designhomes",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Building Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Home Builds",
          description: "Custom-designed homes tailored to your lifestyle and budget.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovations",
          description: "Transform existing spaces into modern masterpieces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Design",
          description: "Premium interior design services for your dream home.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Duplex & Townhouses",
          description: "Expertly designed and built dual occupancy properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Builds",
          description: "Unique homes for unique visions and challenging sites.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Construction",
          description: "Professional commercial building services for offices and retail.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  foundingDate: "2008",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "25",
  },
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Design Homes Pty Ltd",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.webp`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61 7 1234 5678",
    contactType: "sales",
    email: "hello@designhomes.com.au",
    availableLanguage: ["English"],
    areaServed: "AU",
  },
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Design Homes Pty Ltd",
  description: "Award-winning custom home builders in South East Queensland",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect hints for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch hints for common resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              localBusinessSchema,
              organizationSchema,
              websiteSchema,
            ]),
          }}
        />
      </head>
      <body
        className={`${sora.variable} antialiased bg-[#0d1117]`}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
