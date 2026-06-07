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

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-12 lg:py-20" ref={ref}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                FAQ
              </span>
            </div>
            <h2 className="font-sora text-3xl font-semibold leading-[1.12] tracking-[-0.01em] text-black md:text-4xl lg:text-[44px]">
              Common questions about
              <span className="text-gradient"> building</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-black/60">
              Find answers to the most frequently asked questions about our building
              process, pricing, and services.
            </p>

            {/* CTA card */}
            <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-8 text-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)]">
              <h3 className="font-sora text-xl font-semibold">Still have questions?</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Can&apos;t find the answer you&apos;re looking for? Our team is happy to help.
              </p>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-black"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border-b border-black/[0.06] py-1"
                >
                  <AccordionTrigger className="py-6 text-left font-sora text-lg font-semibold text-black transition-colors duration-300 hover:text-black/60 lg:text-xl">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 font-mono text-sm font-semibold text-black/30 transition-colors duration-300 group-hover:text-black/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-10 text-base leading-relaxed text-black/60 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
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
