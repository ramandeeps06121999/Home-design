"use client";

const items = [
  "QBCC Licensed Builder",
  "50+ Homes Built",
  "15+ Years Experience",
  "Brisbane",
  "Gold Coast",
  "Sunshine Coast",
  "Fixed Price Contracts",
  "HIA Member",
  "100% Completion Rate",
  "Fully Insured",
];

export default function TrustTicker() {
  return (
    <div className="bg-[#0d1117] border-y border-white/5 py-5 overflow-hidden">
      <div className="ticker-track flex gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-white text-sm font-medium uppercase tracking-wider shrink-0">
            <span className="w-1.5 h-1.5 bg-[#FF5A1F] rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
