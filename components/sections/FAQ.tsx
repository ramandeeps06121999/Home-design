"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical build take?",
    answer:
      "The duration of a build depends on the complexity and size of the project, but typically ranges from 6 to 12 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project, including all phases from design to final handover.",
  },
  {
    question: "Do you offer fixed-price contracts?",
    answer:
      "Yes, we provide fixed-price contracts to ensure transparency and peace of mind for our clients. This means no hidden costs or surprise expenses during the construction process. Everything is clearly outlined before we begin, so you know exactly what to expect.",
  },
  {
    question: "Can I see your previous work?",
    answer:
      "Absolutely! We have a gallery of past projects and can even arrange site visits for some of our ongoing builds. We also have many satisfied clients who are happy to share their experiences with you. Contact us to schedule a viewing of our portfolio.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service the entire South East Queensland region, including Brisbane, Gold Coast, Sunshine Coast, and surrounding areas. Our team is familiar with local council requirements and building regulations across all these regions.",
  },
  {
    question: "Do you help with design and approvals?",
    answer:
      "Yes, we offer comprehensive design services and can manage the entire approval process for you. Our in-house design team works closely with you to create your dream home, and we handle all the paperwork and council submissions on your behalf.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[#A88725] font-semibold uppercase tracking-wider text-sm">
                FAQ
              </span>
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] mb-6">
              Common Questions About
              <span className="text-gradient"> Building</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Find answers to the most frequently asked questions about our building process, pricing, and services.
            </p>

            {/* CTA Card */}
            <div className="bg-[#0d1117] rounded-3xl p-8 text-white">
              <h3 className="font-sora text-xl font-bold mb-3">
                Still have questions?
              </h3>
              <p className="text-white text-sm mb-6 leading-relaxed">
                Can&apos;t find the answer you&apos;re looking for? Our team is happy to help.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C49B2A] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 group"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-100 py-1 group"
                >
                  <AccordionTrigger className="text-left font-sora text-lg lg:text-xl font-semibold text-gray-900 hover:text-[#A88725] transition-colors duration-300 py-6 [&[data-state=open]]:text-[#A88725]">
                    <div className="flex items-start gap-4">
                      <span className="text-[#A88725]/30 group-hover:text-[#A88725]/60 font-bold text-sm mt-1 font-mono transition-colors duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 leading-relaxed pb-6 text-base pl-10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
