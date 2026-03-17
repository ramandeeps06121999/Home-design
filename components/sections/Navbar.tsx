"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  {
    name: "Services",
    href: "#services",
    children: [
      { name: "New Home Builds", href: "#services" },
      { name: "Renovations", href: "#services" },
      { name: "Interior Design", href: "#services" },
      { name: "Duplex & Townhouses", href: "#services" },
      { name: "Custom Builds", href: "#services" },
      { name: "Commercial", href: "#services" },
    ],
  },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "about", "services", "portfolio", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        <nav className="flex items-center justify-between px-6 lg:px-10 h-20 max-w-[1400px] mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button onClick={() => scrollToSection("#home")} className="relative h-14 w-auto block">
              <Image
                src="/images/logo.webp"
                alt="Design Homes Logo"
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
                priority
              />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  className="relative group"
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 py-2 rounded-lg font-medium text-[15px] transition-all duration-300 flex items-center gap-1 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>

                  {/* Services Dropdown */}
                  {link.children && (
                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-[#1c2128]/95 backdrop-blur-xl border border-white/10 rounded-2xl py-2 min-w-[220px] shadow-2xl shadow-black/50">
                        {link.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => scrollToSection(child.href)}
                            className="block w-full text-left px-5 py-3 text-white/70 text-sm hover:text-white hover:bg-white/5 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <a
              href="tel:+61123456789"
              className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#e54e1a] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#FF5A1F]/30"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
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
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => {
                      if (link.children) {
                        setServicesOpen(!servicesOpen);
                      } else {
                        scrollToSection(link.href);
                      }
                    }}
                    className={`text-2xl font-semibold transition-colors flex items-center gap-2 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#FF5A1F]"
                        : "text-white hover:text-[#FF5A1F]"
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    )}
                  </motion.button>
                  {link.children && servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="flex flex-col items-center gap-3 mt-3"
                    >
                      {link.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => scrollToSection(child.href)}
                          className="text-white/50 text-lg hover:text-[#FF5A1F] transition-colors"
                        >
                          {child.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="tel:+61123456789"
                className="inline-flex items-center gap-2 bg-[#FF5A1F] text-white px-8 py-4 rounded-xl font-semibold mt-4"
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
