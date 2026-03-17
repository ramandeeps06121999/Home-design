"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "New Home Builds", href: "#services" },
  { name: "Renovations", href: "#services" },
  { name: "Interior Design", href: "#services" },
  { name: "Duplex & Townhouses", href: "#services" },
  { name: "Custom Builds", href: "#services" },
  { name: "Commercial", href: "#services" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d1117] relative">
      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-[family-name:var(--font-sora)] text-2xl lg:text-3xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white text-sm">
                Get the latest news on our projects and building insights.
              </p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-xl px-5 py-3.5 text-white text-sm placeholder:text-white focus:outline-none focus:border-[#FF5A1F]/50 transition-colors"
              />
              <button className="bg-[#FF5A1F] hover:bg-[#e54e1a] text-white px-6 py-3.5 rounded-r-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={scrollToTop} className="relative h-14 w-auto mb-6 block">
              <Image
                src="/images/logo.webp"
                alt="Design Homes Logo"
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </button>
            <p className="text-white leading-relaxed mb-8 max-w-sm text-sm">
              Custom home builders specializing in high-quality residential
              construction across South East Queensland. Building dreams since
              2008.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-[#FF5A1F] rounded-xl flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-[family-name:var(--font-sora)] text-white font-bold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white hover:text-[#FF5A1F] transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-[family-name:var(--font-sora)] text-white font-bold text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-white hover:text-[#FF5A1F] transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-[family-name:var(--font-sora)] text-white font-bold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-white text-sm">
              <li>+61 123 456 789</li>
              <li>hello@designhomes.com.au</li>
              <li>Brisbane, QLD, Australia</li>
              <li className="pt-2">Mon – Fri: 8am – 5pm</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} Design Homes Pty Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-white text-sm">Built with Precision in SEQ</span>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-white/5 hover:bg-[#FF5A1F] rounded-xl flex items-center justify-center text-white hover:text-white transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
