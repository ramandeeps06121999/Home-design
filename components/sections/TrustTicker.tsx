"use client";

const items = [
  "QBCC Licensed Builder",
  "New Builds",
  "Duplexes",
  "Townhouses",
  "Custom Builds",
  "Queenslander Homes",
  "Brisbane",
  "Gold Coast",
  "Sunshine Coast",
  "Fixed Price Contracts",
  "Fully Insured",
  "Award-Winning Experience",
];

export default function TrustTicker() {
  return (
    <div className="bg-[#0d1117] border-y border-white/5 py-5 overflow-hidden">
      <div className="ticker-track flex gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-white text-sm font-medium uppercase tracking-wider shrink-0">
            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
