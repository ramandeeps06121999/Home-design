"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael & Sarah Johnson",
    location: "Gold Coast, QLD",
    project: "Custom Home Build",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?u=michael",
    text: "Design Homes exceeded every expectation. From the initial consultation to handover, the team was professional, transparent, and genuinely cared about bringing our vision to life. Our home is everything we dreamed of and more.",
  },
  {
    name: "Emma Richardson",
    location: "Brisbane, QLD",
    project: "Full Renovation",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?u=emma",
    text: "We were nervous about renovating our 1970s home, but Design Homes made the process seamless. They transformed our dated house into a modern masterpiece while preserving the character we loved. Couldn't be happier!",
  },
  {
    name: "David & Lisa Chen",
    location: "Sunshine Coast, QLD",
    project: "Duplex Build",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?u=david",
    text: "Outstanding quality and communication throughout our duplex build. The fixed-price contract gave us peace of mind, and the team delivered on time. We've already recommended Design Homes to three of our friends.",
  },
  {
    name: "James O'Brien",
    location: "Brisbane, QLD",
    project: "New Home Build",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?u=james",
    text: "From day one, Jason and the team treated our project like it was their own home. The attention to detail is remarkable — every finish, every corner, every material choice was carefully considered. Truly world-class.",
  },
  {
    name: "Rachel & Tom Williams",
    location: "Gold Coast, QLD",
    project: "Interior Design",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?u=rachel",
    text: "The interior design team at Design Homes completely transformed our living space. They understood our style perfectly and created rooms that are both beautiful and functional. We get compliments from every visitor!",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 * i,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex-shrink-0 w-[340px] sm:w-auto"
    >
      <div className="relative h-full bg-[#1c2128] rounded-2xl border border-white/[0.06] p-7 lg:p-8 flex flex-col gap-6 transition-all duration-500 hover:border-[#FF5A1F]/30 hover:shadow-[0_0_40px_-12px_rgba(255,90,31,0.15)]">
        {/* Decorative corner quote */}
        <div className="absolute top-5 right-5 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500">
          <Quote className="w-16 h-16 text-[#FF5A1F]" />
        </div>

        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#FF5A1F] text-[#FF5A1F]"
            />
          ))}
        </div>

        {/* Quote text */}
        <blockquote className="text-white/70 text-[15px] leading-[1.75] font-light flex-1 relative z-10">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-white/[0.06]" />

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#FF5A1F]/20 ring-offset-2 ring-offset-[#1c2128] flex-shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-[family-name:var(--font-sora)] font-semibold text-white text-sm truncate">
              {testimonial.name}
            </h4>
            <p className="text-white/35 text-xs mt-0.5">{testimonial.location}</p>
          </div>
          <span className="ml-auto text-[11px] font-medium text-[#FF5A1F]/70 bg-[#FF5A1F]/[0.08] px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            {testimonial.project}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-[#0d1117] py-24 lg:py-36 relative overflow-hidden"
      ref={ref}
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF5A1F]/[0.025] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF5A1F]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF5A1F]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Large decorative quote mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-20 left-6 lg:left-16 pointer-events-none"
      >
        <Quote className="w-24 h-24 lg:w-36 lg:h-36 text-[#FF5A1F]/[0.06]" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">
              Client Stories
            </span>
            <div className="w-8 h-[2px] bg-[#FF5A1F]" />
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.15] mb-5">
            Trusted by Families Across
            <span className="text-gradient"> South East QLD</span>
          </h2>
          <p className="text-white/40 text-base lg:text-lg leading-relaxed">
            Real stories from real homeowners who trusted us to build their
            dream homes.
          </p>
        </motion.div>

        {/* Cards - Desktop: 3-column grid, Mobile: horizontal scroll */}

        {/* Desktop Grid (3 visible) */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>

        {/* Second row desktop - 2 cards centered */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-6">
          <div className="col-start-1">
            <TestimonialCard testimonial={testimonials[3]} index={3} />
          </div>
          <div className="col-start-2">
            <TestimonialCard testimonial={testimonials[4]} index={4} />
          </div>
        </div>

        {/* Mobile: Horizontal scrolling cards */}
        <div className="lg:hidden flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="snap-start">
              <TestimonialCard testimonial={testimonial} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 lg:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {/* Stacked avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {testimonials.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#0d1117]"
                >
                  <Image
                    src={item.avatar}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-[#FF5A1F] border-2 border-[#0d1117] flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">50+</span>
              </div>
            </div>
            <span className="text-white/40 text-sm">Happy families</span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white/10" />

          {/* Rating summary */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#FF5A1F] text-[#FF5A1F]"
                />
              ))}
            </div>
            <span className="text-white/40 text-sm">
              5.0 average rating
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white/10" />

          {/* Years */}
          <div className="text-white/40 text-sm">
            <span className="text-white font-semibold">15+</span> years of
            excellence
          </div>
        </motion.div>
      </div>
    </section>
  );
}
