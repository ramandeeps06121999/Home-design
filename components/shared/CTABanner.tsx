"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

interface CTABannerProps {
  title?: string;
  highlight?: string;
  description?: string;
}

export default function CTABanner({
  title = "Ready to Start Your",
  highlight = "Project?",
  description = "Get in touch with our team today for a free consultation and detailed quote.",
}: CTABannerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-[#0d1117] py-20 lg:py-28" ref={ref}>
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {title}
            <span className="text-gradient"> {highlight}</span>
          </h2>
          <p className="text-white text-lg mb-10 max-w-[550px] mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#FF5A1F] hover:bg-[#e54e1a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5A1F]/30 group"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+61123456789"
              className="inline-flex items-center gap-2 text-white hover:text-white font-medium transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              +61 123 456 789
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
