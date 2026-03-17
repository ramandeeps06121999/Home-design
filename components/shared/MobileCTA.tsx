"use client";

import { useState, useEffect } from "react";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-[#0d1117]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex gap-3">
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FF5A1F] text-white py-3.5 rounded-xl font-semibold text-sm transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          Get a Free Quote
        </Link>
        <a
          href="tel:+61123456789"
          className="w-14 h-[50px] bg-white/10 rounded-xl flex items-center justify-center text-white transition-all hover:bg-white/20"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
