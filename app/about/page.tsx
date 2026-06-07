"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Target, Heart, Zap, Users, Home, Building2, Wrench, Landmark, ArrowRight } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const values = [
  { icon: Shield, title: "Integrity", description: "We operate with complete transparency and honesty in every interaction with our clients." },
  { icon: Target, title: "Attention to Detail", description: "Every detail matters. We apply meticulous attention to deliver flawless results at every stage." },
  { icon: Heart, title: "Quality Workmanship", description: "We take pride in superior craftsmanship, ensuring every home is built to the highest standard." },
  { icon: Zap, title: "Strong Project Leadership", description: "Clear direction and hands-on management from start to completion on every project." },
  { icon: Award, title: "Excellence", description: "Award-winning experience from New Zealand, now brought to every Queensland project." },
  { icon: Users, title: "Honest Communication", description: "Clear, transparent updates throughout the building process. No surprises, no hidden costs." },
];

export default function AboutPage() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <PageHero
        title="Quality Homes Built with"
        highlight="Care & Pride"
        description="Led by Harj Tiwana, Design Homes brings over 5 years of building experience and more than a decade of construction knowledge to every project across South East Queensland."
        image="/images/about-construction.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]}
      />

      {/* Our Story */}
      <section className="bg-[#ffffff] py-12 lg:py-20" ref={storyRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Design Homes team on site"
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Our Story</span>
              </div>
              <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-black leading-[1.15] mb-8">
                From New Zealand to Queensland&apos;s
                <span className="text-gradient"> Trusted Builder</span>
              </h2>
              <p className="text-black/60 text-lg leading-relaxed mb-6">
                Design Homes is a Queensland-based residential building company led by Harj Tiwana, bringing over 5 years of building experience and more than a decade of broader construction knowledge as a carpenter to every project.
              </p>
              <p className="text-black/60 text-base leading-relaxed mb-6">
                With a strong track record in new builds, including award-winning experience in New Zealand, we are committed to delivering homes that reflect quality workmanship, attention to detail, and lasting value.
              </p>
              <p className="text-black/60 text-base leading-relaxed mb-8">
                That same standard now shapes every Design Homes project — combining proven industry knowledge with a commitment to professionalism, craftsmanship, and client satisfaction. We believe a well-built home should offer more than visual appeal. It should function effortlessly for everyday living and provide lasting value for years to come.
              </p>

              <div className="relative bg-white rounded-2xl p-6 lg:p-8 border-l-4 border-black/15 shadow-sm">
                <p className="text-black/70 italic leading-relaxed mb-4">
                  &ldquo;At Design Homes, we take pride in delivering homes with integrity, excellence, and a standard of workmanship our clients can be proud of.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/[0.04] flex items-center justify-center ring-2 ring-black/10">
                    <span className="font-sora font-bold text-black text-lg">HT</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm">Harj Tiwana</h4>
                    <p className="text-black text-xs font-semibold">Director — QBCC Builder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">What We Build</span>
              <span className="h-px w-6 bg-[#D4AF37]" />
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-black leading-[1.15]">
              Residential Building
              <span className="text-gradient"> Specialists</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, slug: "new-home-builds", title: "New Home Builds", image: "/images/hero-home.jpg", description: "Custom-designed homes tailored to your lifestyle and budget." },
              { icon: Building2, slug: "duplex-townhouses", title: "Duplex & Townhouses", image: "/images/townhouse-new.webp", description: "Dual occupancy solutions for investors and families." },
              { icon: Wrench, slug: "custom-builds", title: "Custom Builds", image: "/images/custom-built-house.jpg", description: "Bespoke homes for unique sites and specific requirements." },
              { icon: Landmark, slug: "queenslander-homes", title: "Queenslander Homes", image: "/images/queenslander-house.webp", description: "Traditional character with modern living standards." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.10)]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                      <item.icon className="h-5 w-5 text-black" />
                    </div>
                    <h3 className="absolute bottom-4 left-4 right-4 font-sora text-lg font-bold text-white drop-shadow-sm">{item.title}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex-1 text-black/60 text-sm leading-relaxed">{item.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-black">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#ffffff] py-12 lg:py-20" ref={valuesRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Why Choose Us</span>
              <span className="h-px w-6 bg-[#D4AF37]" />
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-black leading-[1.15]">
              The Values That
              <span className="text-gradient"> Define Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.10)] transition-all duration-500 group border border-black/[0.08] hover:border-black/20"
              >
                <div className="w-14 h-14 bg-black/[0.04] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-black group-hover:text-white">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-sora text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-black/60 leading-relaxed text-[15px]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QBCC Licensed */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-black/[0.08] bg-black/[0.02] px-8 py-14 lg:py-16 text-center shadow-[0_24px_60px_-20px_rgba(0,0,0,0.08)]"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-sora text-2xl lg:text-3xl font-bold text-black mb-3">
              QBCC Licensed Builder
            </h3>
            <p className="text-black/70 text-lg mb-2">Licence No. 15519791</p>
            <p className="text-black/50 text-sm max-w-xl mx-auto">
              Fully licensed and insured to deliver residential building projects across Queensland. Your project is in safe, qualified hands.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABanner title="Ready to Build Your" highlight="Dream Home?" description="Contact us to discuss your project. We're here to answer any questions and bring your vision to life." />
      <SiteFooter />
    </main>
  );
}
