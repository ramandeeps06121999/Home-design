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
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav
          className={`mx-auto flex h-16 items-center justify-between lg:h-20 ${
            isScrolled
              ? "mt-3 w-[90%] max-w-[1100px] rounded-full border border-white/10 bg-[#000000]/85 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:w-[80%] lg:px-8"
              : "w-full max-w-[1240px] px-6 lg:px-10"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative block h-11 w-auto shrink-0 lg:h-14">
            <Image
              src="/images/logo-cropped.png"
              alt="Design Homes"
              width={532}
              height={610}
              className="h-11 w-auto object-contain lg:h-14"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 lg:flex">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.name} className="group relative">
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-300 ${
                        active ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.children && (
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                      {/* animated gold underline */}
                      <span
                        className={`pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left bg-[#D4AF37] transition-transform duration-300 ${
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>

                    {link.children && (
                      <div className="invisible absolute left-0 top-full translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="min-w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#000000]/95 py-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block px-5 py-2.5 text-sm transition-colors duration-200 ${
                                pathname === child.href
                                  ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                                  : "text-white/70 hover:bg-white/5 hover:text-white"
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
            <a
              href="tel:0436376001"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-[#D4AF37]/30"
            >
              <Phone className="h-4 w-4" />
              0436 376 001
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 text-white lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#000000]/98 pt-24 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center gap-7 pt-10">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="flex flex-col items-center">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className={`flex items-center gap-2 text-2xl font-medium transition-colors ${
                        isActive(link.href) ? "text-[#D4AF37]" : "text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 flex flex-col items-center gap-3"
                      >
                        <Link href="/services" onClick={closeMobileMenu} className="text-lg text-white/60 hover:text-[#D4AF37]">
                          All Services
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="text-lg text-white/60 hover:text-[#D4AF37]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`text-2xl font-medium transition-colors ${
                      isActive(link.href) ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <a
                href="tel:0436376001"
                onClick={closeMobileMenu}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-semibold text-white"
              >
                <Phone className="h-5 w-5" />
                0436 376 001
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
