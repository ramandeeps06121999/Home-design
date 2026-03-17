"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";

const contactInfo = [
  { icon: Phone, title: "Phone", content: "+61 123 456 789", href: "tel:+61123456789" },
  { icon: Mail, title: "Email", content: "hello@designhomes.com.au", href: "mailto:hello@designhomes.com.au" },
  { icon: MapPin, title: "Location", content: "Brisbane, QLD, Australia", href: "#" },
  { icon: Clock, title: "Business Hours", content: "Mon – Fri: 8am – 5pm", href: "#" },
];

const serviceAreas = ["Brisbane", "Gold Coast", "Sunshine Coast", "Ipswich", "Logan"];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <PageHero
        title="Let's Talk About Your"
        highlight="Project"
        description="Ready to start building? Contact us today for a free consultation and quote. Our team is ready to bring your vision to life."
        image="/images/engineer-desk-with-object-paper-and-tablet-with-bl-ZGS9T68-1.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      {/* Contact Form Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 bg-[#fafafa] rounded-2xl flex items-center justify-center group-hover:bg-[#FF5A1F] transition-colors duration-300 shadow-sm border border-gray-100">
                      <item.icon className="w-5 h-5 text-[#FF5A1F] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mb-10">
                <h4 className="font-[family-name:var(--font-sora)] font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span key={area} className="bg-[#fafafa] text-gray-600 px-4 py-2 rounded-full text-sm font-medium border border-gray-100">{area}</span>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-[#fafafa] rounded-3xl h-64 flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#FF5A1F]/40 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Brisbane, QLD, Australia</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#fafafa] rounded-3xl p-8 lg:p-12 border border-gray-100">
                <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-500 text-sm mb-8">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 font-medium text-sm">First Name</Label>
                        <Input id="firstName" placeholder="John" required className="h-13 rounded-xl border-gray-200 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/20 bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 font-medium text-sm">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required className="h-13 rounded-xl border-gray-200 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/20 bg-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="h-13 rounded-xl border-gray-200 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/20 bg-white" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+61 400 000 000" className="h-13 rounded-xl border-gray-200 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/20 bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-gray-700 font-medium text-sm">Service Required</Label>
                        <select id="service" className="w-full h-13 px-4 rounded-xl border border-gray-200 focus:border-[#FF5A1F] focus:ring-2 focus:ring-[#FF5A1F]/20 focus:outline-none bg-white text-sm text-gray-700">
                          <option value="">Select a service</option>
                          <option value="new-home">New Home Build</option>
                          <option value="renovation">Renovation</option>
                          <option value="interior">Interior Design</option>
                          <option value="duplex">Duplex / Townhouse</option>
                          <option value="custom">Custom Build</option>
                          <option value="commercial">Commercial</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium text-sm">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your project..." required rows={5} className="rounded-xl border-gray-200 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/20 resize-none bg-white" />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#FF5A1F] hover:bg-[#e54e1a] text-white rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5A1F]/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
