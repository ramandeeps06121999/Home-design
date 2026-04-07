"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "New Home Builds", href: "/services/new-home-builds" },
      { name: "Duplex & Townhouses", href: "/services/duplex-townhouses" },
      { name: "Custom Builds", href: "/services/custom-builds" },
      { name: "Queenslander Homes", href: "/services/queenslander-homes" },
    ],
  },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0d1117]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 lg:px-10 h-36 pt-4 max-w-[1400px] mx-auto">
          <Link href="/" className="relative h-32 w-auto block">
            <Image
              src="/images/logo-main.png"
              alt="Design Homes Logo"
              width={260}
              height={128}
              className="h-32 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg font-medium text-[15px] transition-all duration-300 flex items-center gap-1 ${
                      active ? "text-white" : "text-white hover:text-white"
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    )}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>

                  {link.children && (
                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-[#1c2128]/95 backdrop-blur-xl border border-white/10 rounded-2xl py-2 min-w-[220px] shadow-2xl shadow-black/50">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block w-full text-left px-5 py-3 text-sm transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${
                              pathname === child.href
                                ? "text-[#D4AF37] bg-white/5"
                                : "text-white hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="tel:0436376001"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C49B2A] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D4AF37]/30"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0d1117]/98 backdrop-blur-xl lg:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex flex-col items-center">
                  {link.children ? (
                    <>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`text-2xl font-semibold transition-colors flex items-center gap-2 ${
                          isActive(link.href) ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </motion.button>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="flex flex-col items-center gap-3 mt-3"
                        >
                          <Link href="/services" className="text-white text-lg hover:text-[#D4AF37] transition-colors">
                            All Services
                          </Link>
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="text-white text-lg hover:text-[#D4AF37] transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-2xl font-semibold transition-colors ${
                          isActive(link.href) ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="tel:0436376001"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-semibold mt-4"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
