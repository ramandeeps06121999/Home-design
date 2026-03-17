"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
  { value: 50, suffix: "+", label: "Homes Built" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Completion Rate" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-white py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side with clip-path reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <Image
                  src="/images/builders-working.jpg"
                  alt="Modern Architecture"
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[620px] object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-6"
              >
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-[family-name:var(--font-sora)] text-2xl lg:text-3xl font-bold text-white">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-white/60 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating decorative accents */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF5A1F]/10 rounded-3xl -z-10 animate-float" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FF5A1F]/5 rounded-2xl -z-10 animate-float-delayed" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#FF5A1F]" />
              <span className="text-[#FF5A1F] font-semibold uppercase tracking-wider text-sm">About Us</span>
            </div>

            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] mb-8">
              Built today for the needs of
              <span className="text-gradient"> tomorrow</span>
            </h2>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8">
              Our commitment to excellence ensures that every project we undertake
              is executed with precision and care. We believe in creating homes
              that are not just beautiful, but also functional and sustainable.
            </p>

            <div className="relative bg-[#faf9f8] rounded-2xl p-6 lg:p-8 mb-8 border-l-4 border-[#FF5A1F]">
              <p className="text-gray-600 italic leading-relaxed mb-4">
                &ldquo;With over 15 years of experience, we have built a reputation for delivering exceptional results that stand the test of time.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#FF5A1F]/20">
                  <Image src="https://i.pravatar.cc/100?u=ceo" alt="Jason Smith - Managing Director" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Jason Smith</h4>
                  <p className="text-[#FF5A1F] text-xs font-semibold">Managing Director</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-3 bg-[#FF5A1F] hover:bg-[#e54e1a] text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5A1F]/30 group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
