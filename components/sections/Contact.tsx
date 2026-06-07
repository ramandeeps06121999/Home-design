"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  { icon: Phone, title: "Phone", content: "0436 376 001", href: "tel:0436376001" },
  { icon: Mail, title: "Email", content: "harj@thedesignhomes.com.au", href: "mailto:harj@thedesignhomes.com.au" },
  { icon: MapPin, title: "Location", content: "South East Queensland, Australia", href: "#" },
  { icon: Clock, title: "Business Hours", content: "Mon – Fri: 7am – 5pm", href: "#" },
];

const inputClass =
  "h-13 rounded-xl border-black/10 bg-[#ffffff] focus:border-black focus:ring-black/10";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="bg-[#ffffff] py-12 lg:py-20" ref={ref}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Contact Us
              </span>
            </div>
            <h2 className="font-sora text-3xl font-semibold leading-[1.12] tracking-[-0.01em] text-black md:text-4xl lg:text-[44px]">
              Let&apos;s talk about your
              <span className="text-gradient"> project</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-black/60">
              Ready to start building? Contact us today to discuss your project.
              We&apos;re here to answer any questions and bring your vision to life.
            </p>

            <div className="mt-10 space-y-5">
              {contactInfo.map((item) => (
                <a key={item.title} href={item.href} className="group flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-sm font-semibold text-black">{item.title}</h4>
                    <p className="text-sm text-black/55">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            <div className="rounded-[2rem] border border-black/[0.06] bg-white p-8 shadow-xl shadow-black/[0.03] lg:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black">
                    <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-sora text-2xl font-semibold text-black">Message Sent!</h3>
                  <p className="text-black/60">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-black/70">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required className={inputClass} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-black/70">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required className={inputClass} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-black/70">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className={inputClass} />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-black/70">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+61 400 000 000" className={inputClass} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium text-black/70">Service Required</Label>
                      <select
                        id="service"
                        name="service"
                        className="h-13 w-full rounded-xl border border-black/10 bg-[#ffffff] px-4 text-sm text-black/70 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                      >
                        <option value="">Select a service</option>
                        <option value="new-home">New Home Build</option>
                        <option value="duplex">Duplex / Townhouse</option>
                        <option value="custom">Custom Build</option>
                        <option value="queenslander">Queenslander Home</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-black/70">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      required
                      rows={4}
                      className="resize-none rounded-xl border-black/10 bg-[#ffffff] focus:border-black focus:ring-black/10"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black text-base font-semibold text-white transition-colors hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
