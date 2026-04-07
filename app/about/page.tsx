"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Shield, Award, Users, Target, Heart, Zap } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 50, suffix: "+", label: "Homes Built", description: "Across South East Queensland" },
  { value: 15, suffix: "+", label: "Years Experience", description: "In residential construction" },
  { value: 100, suffix: "%", label: "Completion Rate", description: "On time, every time" },
  { value: 4.9, suffix: "/5", label: "Client Rating", description: "Average satisfaction score" },
];

const values = [
  { icon: Shield, title: "Integrity", description: "We operate with complete transparency and honesty in every interaction with our clients." },
  { icon: Target, title: "Precision", description: "Every detail matters. We apply meticulous attention to deliver flawless results." },
  { icon: Heart, title: "Passion", description: "We are genuinely passionate about creating beautiful homes that families love." },
  { icon: Zap, title: "Innovation", description: "We embrace modern building techniques and materials to deliver superior quality." },
  { icon: Award, title: "Excellence", description: "We never settle for good enough. We push for the highest standard in everything." },
  { icon: Users, title: "Collaboration", description: "We work closely with clients, architects, and trades to ensure seamless delivery." },
];

const timeline = [
  { year: "2008", title: "Founded", description: "Design Homes was established with a vision to build quality custom homes in Brisbane." },
  { year: "2012", title: "Gold Coast Expansion", description: "Expanded operations to the Gold Coast, delivering luxury builds along the coastline." },
  { year: "2016", title: "50th Home", description: "Celebrated our 50th completed home build, a major milestone for our growing team." },
  { year: "2020", title: "Sunshine Coast", description: "Extended our services to the Sunshine Coast region, covering all of South East Queensland." },
  { year: "2024", title: "Award-Winning", description: "Recognized by the HIA for excellence in residential construction and design innovation." },
];

export default function AboutPage() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <PageHero
        title="Building Dreams Since"
        highlight="2008"
        description="We are a team of passionate builders, designers, and project managers committed to creating exceptional homes across South East Queensland."
        image="/images/hero-construction.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]}
      />

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-sora text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#fafafa] py-24 lg:py-32" ref={storyRef}>
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
                  alt="Our Story"
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
                <div className="w-8 h-[2px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-sm">Our Story</span>
              </div>
              <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] mb-8">
                From a Small Team to South East Queensland&apos;s
                <span className="text-gradient"> Trusted Builder</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Design Homes was founded in 2008 by Jason Smith, a builder with a vision to create homes that truly reflect the lifestyle and aspirations of Australian families.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Over the years, we&apos;ve grown from a small team working on local projects in Brisbane to one of South East Queensland&apos;s most trusted residential builders. Our portfolio now spans custom homes, duplexes, townhouses, renovations, and commercial projects across Brisbane, Gold Coast, and Sunshine Coast.
              </p>

              <div className="relative bg-white rounded-2xl p-6 lg:p-8 border-l-4 border-[#D4AF37] shadow-sm">
                <p className="text-gray-600 italic leading-relaxed mb-4">
                  &ldquo;Every home we build is a reflection of our commitment to quality, innovation, and our client&apos;s vision. We don&apos;t just build houses — we create homes.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#D4AF37]/20">
                    <Image src="https://i.pravatar.cc/100?u=ceo" alt="Jason Smith" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Jason Smith</h4>
                    <p className="text-[#D4AF37] text-xs font-semibold">Managing Director</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 lg:py-32" ref={valuesRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-sm">Our Values</span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15]">
              The Principles That
              <span className="text-gradient"> Guide Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-[#fafafa] rounded-3xl p-8 hover:shadow-lg transition-all duration-500 group border border-gray-100 hover:border-[#D4AF37]/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#D4AF37]/20 group-hover:to-[#D4AF37]/10 transition-all duration-500">
                  <value.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-sora text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0d1117] py-24 lg:py-32" ref={timelineRef}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-sm">Our Journey</span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.15]">
              Key Milestones in Our
              <span className="text-gradient"> History</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:py-10 ${index % 2 === 0 ? "" : "lg:direction-rtl"}`}
                >
                  <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}>
                    <span className="text-[#D4AF37] font-sora text-4xl font-bold">{item.year}</span>
                    <h3 className="font-sora text-2xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                    <p className="text-white leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-sm">Our Team</span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="font-sora text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15]">
              Meet the People Behind
              <span className="text-gradient"> Design Homes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Jason Smith", role: "Managing Director", avatar: "ceo" },
              { name: "Sarah Chen", role: "Head of Design", avatar: "sarah" },
              { name: "Mark Thompson", role: "Project Manager", avatar: "mark" },
              { name: "Emily Davis", role: "Client Relations", avatar: "emily" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden">
                  <Image
                    src={`https://i.pravatar.cc/400?u=${member.avatar}`}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-sora text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#D4AF37] text-sm font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Want to Work With" highlight="Our Team?" description="Contact us to discuss your project and see how we can bring your vision to life." />
      <SiteFooter />
    </main>
  );
}
