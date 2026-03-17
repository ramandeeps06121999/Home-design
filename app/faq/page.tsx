"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designhomes.com.au";

export const metadata: Metadata = {
  title: "FAQ | Design Homes - Frequently Asked Questions",
  description: "Find answers to common questions about our building process, pricing, services & more. Design Homes - trusted builders in Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "home building FAQ",
    "renovation questions Brisbane",
    "building process explained",
    "home construction costs SEQ",
    "custom builder questions",
    "renovation timeline",
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

const faqCategories = [
  {
    title: "Building Process",
    faqs: [
      { question: "How long does a typical build take?", answer: "The duration depends on complexity and size, but typically ranges from 6 to 12 months. During our initial consultation, we'll provide a detailed timeline specific to your project, including all phases from design to final handover." },
      { question: "What is the building process from start to finish?", answer: "Our process follows 5 key stages: (1) Free consultation to understand your vision, (2) Design and planning phase, (3) Council approvals and permits, (4) Construction with regular updates, and (5) Final inspection and handover. We keep you informed at every stage." },
      { question: "Do I need council approval for my build?", answer: "Most construction projects require council approval. We handle the entire approval process for you, including preparing and submitting all required documentation. Our experience with local councils ensures a smooth approval process." },
      { question: "Can I make changes during construction?", answer: "While we encourage finalizing all details during the planning phase, we understand that changes may be needed. We have a clear variation process that ensures any changes are documented, priced, and approved before implementation." },
    ],
  },
  {
    title: "Pricing & Contracts",
    faqs: [
      { question: "Do you offer fixed-price contracts?", answer: "Yes, we provide fixed-price contracts to ensure transparency and peace of mind. No hidden costs or surprise expenses during construction. Everything is clearly outlined before we begin." },
      { question: "What is included in the quoted price?", answer: "Our quotes include all construction costs, materials, labor, project management, council fees, and standard inclusions. We provide a comprehensive breakdown so you know exactly what you're paying for." },
      { question: "Do you require a deposit?", answer: "Yes, a deposit is required to secure your build in our schedule. The amount varies based on project size but is typically 5-10% of the total contract value. This is clearly outlined in our contract." },
      { question: "Are there any hidden costs I should be aware of?", answer: "Absolutely not. We pride ourselves on complete transparency. Our fixed-price contracts cover everything outlined in the agreement. Any potential additional costs (like site-specific requirements) are identified during the initial assessment." },
    ],
  },
  {
    title: "Services & Areas",
    faqs: [
      { question: "What areas do you service?", answer: "We service the entire South East Queensland region, including Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan, and surrounding areas. Our team is familiar with local council requirements across all these regions." },
      { question: "Do you help with design and approvals?", answer: "Yes, we offer comprehensive design services and manage the entire approval process. Our in-house design team creates your dream home, and we handle all paperwork and council submissions on your behalf." },
      { question: "Can I see your previous work?", answer: "Absolutely! We have an extensive portfolio of past projects and can arrange site visits for some of our ongoing builds. Visit our portfolio page or contact us to schedule a viewing." },
      { question: "Do you offer warranty on your builds?", answer: "Yes, all our builds come with comprehensive warranties including a 6-year structural warranty as required by Queensland building legislation, plus our own 12-month maintenance warranty covering any defects." },
    ],
  },
];

// FAQPage Schema for SEO
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a typical build take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The duration depends on complexity and size, but typically ranges from 6 to 12 months. During our initial consultation, we'll provide a detailed timeline specific to your project, including all phases from design to final handover."
      }
    },
    {
      "@type": "Question",
      "name": "What is the building process from start to finish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our process follows 5 key stages: (1) Free consultation to understand your vision, (2) Design and planning phase, (3) Council approvals and permits, (4) Construction with regular updates, and (5) Final inspection and handover. We keep you informed at every stage."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need council approval for my build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most construction projects require council approval. We handle the entire approval process for you, including preparing and submitting all required documentation. Our experience with local councils ensures a smooth approval process."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer fixed-price contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide fixed-price contracts to ensure transparency and peace of mind. No hidden costs or surprise expenses during construction. Everything is clearly outlined before we begin."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We service the entire South East Queensland region, including Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan, and surrounding areas. Our team is familiar with local council requirements across all these regions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer warranty on your builds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our builds come with comprehensive warranties including a 6-year structural warranty as required by Queensland building legislation, plus our own 12-month maintenance warranty covering any defects."
      }
    }
  ]
};

export default function FAQPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />

      <PageHero
        title="Frequently Asked"
        highlight="Questions"
        description="Find answers to common questions about our building process, pricing, services, and more."
        image="/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]}
      />

      {/* FAQ Section */}
      <section className="bg-white py-24 lg:py-32" ref={ref}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.15 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-[#FF5A1F]" />
                <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <Accordion className="w-full">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`${catIndex}-${index}`} className="border-b border-gray-100 py-1">
                    <AccordionTrigger className="text-left font-[family-name:var(--font-sora)] text-lg font-semibold text-gray-900 hover:text-[#FF5A1F] transition-colors py-5 [&[data-state=open]]:text-[#FF5A1F]">
                      <div className="flex items-start gap-4">
                        <span className="text-[#FF5A1F]/30 font-bold text-sm mt-1 font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 leading-relaxed pb-5 text-base pl-10">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d1117] rounded-3xl p-10 text-center mt-16"
          >
            <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-white mb-3">Still Have Questions?</h3>
            <p className="text-white text-sm mb-6 max-w-md mx-auto">Can&apos;t find the answer you&apos;re looking for? Our team is happy to help with any questions you have.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#e54e1a] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5A1F]/30 group">
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
