"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
    project: "Queenslander Home",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?u=emma",
    text: "We wanted a classic Queenslander with all the modern comforts, and Design Homes delivered beyond our expectations. They honoured the traditional character while creating a stunning, liveable home. Couldn't be happier!",
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
    text: "From day one, the team treated our project like it was their own home. The attention to detail is remarkable — every finish, every corner, every material choice was carefully considered. Truly world-class.",
  },
  {
    name: "Rachel & Tom Williams",
    location: "Gold Coast, QLD",
    project: "Custom Build",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?u=rachel",
    text: "Design Homes built us a truly unique custom home that perfectly suits our lifestyle. They understood our vision and created spaces that are both beautiful and functional. We get compliments from every visitor!",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="group relative flex h-full flex-col gap-6 rounded-[2rem] border border-black/[0.08] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.10)] lg:p-8">
      <div className="absolute right-6 top-6 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-10">
        <Quote className="h-14 w-14 text-black" />
      </div>

      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
        ))}
      </div>

      <blockquote className="relative z-10 flex-1 text-[15px] leading-[1.75] text-black/70">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <div className="h-px bg-black/[0.04]" />

      <div className="flex items-center gap-4">
        <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
          <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="truncate font-sora text-sm font-semibold text-black">
            {testimonial.name}
          </h4>
          <p className="mt-0.5 text-xs text-black/45">{testimonial.location}</p>
        </div>
        <span className="ml-auto flex-shrink-0 whitespace-nowrap rounded-full bg-black/[0.04] px-2.5 py-1 text-[11px] font-medium text-black/60">
          {testimonial.project}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section className="bg-[#ffffff] py-12 lg:py-20" ref={ref}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mb-10 max-w-2xl text-center lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
              Client Stories
            </span>
            <span className="h-px w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-sora text-3xl font-semibold leading-[1.12] tracking-[-0.01em] text-black md:text-4xl lg:text-[44px]">
            Trusted by families across
            <span className="text-gradient"> South East QLD</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/60 lg:text-lg">
            Real stories from real homeowners who trusted us to build their dream homes.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        >
          <div className="hidden grid-cols-3 gap-6 lg:grid">
            {getVisibleTestimonials().map((t) => (
              <TestimonialCard key={`d-${t.originalIndex}`} testimonial={t} />
            ))}
          </div>
          <div className="lg:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black/70 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex ? "h-2 w-8 bg-black" : "h-2 w-2 bg-black/25 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black/70 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {testimonials.slice(0, 4).map((item, i) => (
                <div key={i} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-[#ffffff]">
                  <Image src={item.avatar} alt="" fill className="object-cover" />
                </div>
              ))}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#ffffff] bg-black">
                <span className="text-[10px] font-semibold text-white">50+</span>
              </div>
            </div>
            <span className="text-sm text-black/60">Happy families</span>
          </div>
          <div className="hidden h-6 w-px bg-black/10 sm:block" />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-sm text-black/60">5.0 average rating</span>
          </div>
          <div className="hidden h-6 w-px bg-black/10 sm:block" />
          <div className="text-sm text-black/60">
            <span className="font-semibold text-black">15+</span> years of excellence
          </div>
        </motion.div>
      </div>
    </section>
  );
}
