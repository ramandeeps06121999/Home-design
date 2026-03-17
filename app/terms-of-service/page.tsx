"use client";

import type { Metadata } from "next";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "Terms of Service | Design Homes Pty Ltd",
  description: "Terms of Service for Design Homes Pty Ltd. Please read these terms carefully before using our website and services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "website terms",
    "Design Homes terms",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/terms-of-service`,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-500">Last updated: March 2026</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">By accessing and using the Design Homes website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 leading-relaxed">Design Homes Pty Ltd provides residential and commercial building services across South East Queensland. All building services are subject to a separate written contract between Design Homes and the client.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">3. Quotes & Pricing</h2>
              <p className="text-gray-600 leading-relaxed">All quotes provided through our website or during consultations are estimates only and subject to final site assessment. A binding price is only established through a signed building contract. Quotes are valid for 30 days unless otherwise stated.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">All content on this website, including text, images, logos, and designs, is the property of Design Homes Pty Ltd and is protected by Australian copyright law. You may not reproduce, distribute, or use any content without our written permission.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">Design Homes Pty Ltd provides this website on an &ldquo;as is&rdquo; basis. We make no warranties about the accuracy or completeness of the information on this site. Our liability for any claim arising from the use of this website is limited to the maximum extent permitted by law.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">6. Licensing</h2>
              <p className="text-gray-600 leading-relaxed">Design Homes Pty Ltd is a licensed builder under the Queensland Building and Construction Commission (QBCC). Our licence number and details are available upon request. All works are carried out in compliance with the Building Act 1975 and the Queensland Building and Construction Commission Act 1991.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">These terms are governed by the laws of Queensland, Australia. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of Queensland.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
              <p className="text-gray-600 leading-relaxed">For questions about these Terms of Service, contact us at:</p>
              <div className="mt-3 text-gray-600">
                <p>Design Homes Pty Ltd</p>
                <p>Brisbane, QLD, Australia</p>
                <p>Email: hello@designhomes.com.au</p>
                <p>Phone: +61 7 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
