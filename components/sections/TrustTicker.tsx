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
    <div className="bg-white border-y border-black/[0.08] py-5 overflow-hidden">
      <div className="ticker-track flex gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-black/60 text-xs font-medium uppercase tracking-[0.15em] shrink-0">
            <span className="w-1 h-1 bg-black/25 rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
