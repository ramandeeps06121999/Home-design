"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, ArrowUp, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "New Home Builds", href: "/services/new-home-builds" },
  { name: "Duplex & Townhouses", href: "/services/duplex-townhouses" },
  { name: "Custom Builds", href: "/services/custom-builds" },
  { name: "Queenslander Homes", href: "/services/queenslander-homes" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function SiteFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0d1117] relative">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-sora text-2xl lg:text-3xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white text-sm">Get the latest news on our projects and building insights.</p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-xl px-5 py-3.5 text-white text-sm placeholder:text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
              />
              <button className="bg-[#D4AF37] hover:bg-[#C49B2A] text-white px-6 py-3.5 rounded-r-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
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
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link href="/" className="relative h-32 w-auto mb-6 block">
              <Image src="/images/logo-main.png" alt="Design Homes Logo" width={260} height={128} className="h-32 w-auto object-contain" />
            </Link>
            <p className="text-white leading-relaxed mb-8 max-w-sm text-sm">
              Queensland-based residential building company delivering quality new homes, duplexes, townhouses and custom builds across South East Queensland.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37] rounded-xl flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-sora text-white font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white hover:text-[#D4AF37] transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-sora text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white hover:text-[#D4AF37] transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-sora text-white font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-white text-sm">
              <li><a href="tel:0436376001" className="hover:text-[#D4AF37] transition-colors">0436 376 001</a></li>
              <li><a href="mailto:harj@thedesignhomes.com.au" className="hover:text-[#D4AF37] transition-colors">harj@thedesignhomes.com.au</a></li>
              <li>South East Queensland</li>
              <li className="pt-2">Mon – Fri: 7am – 5pm</li>
            </ul>
          </motion.div>
        </div>

        {/* QBCC License */}
        <div className="border-t border-white/5 pt-8 pb-6 text-center">
          <p className="text-white font-sora font-bold text-lg lg:text-xl tracking-wide">
            QBCC License No. 15519791
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-white text-sm">
              <p>&copy; {new Date().getFullYear()} Design Homes Pty Ltd.</p>
              <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-[#D4AF37] transition-colors">Terms</Link>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-white text-sm">Built with Precision in SEQ</span>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37] rounded-xl flex items-center justify-center text-white hover:text-white transition-all duration-300"
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
