'use client';
import { useState, useEffect } from 'react';

const bloodTypes = [
  { type: 'A+', units: 82, critical: false },
  { type: 'A-', units: 64, critical: false },
  { type: 'B+', units: 41, critical: false },
  { type: 'B-', units: 22, critical: true },
  { type: 'AB+', units: 71, critical: false },
  { type: 'AB-', units: 9, critical: true },
  { type: 'O+', units: 96, critical: false },
  { type: 'O-', units: 33, critical: false },
];

export default function Hero() {
  const [seconds, setSeconds] = useState(12);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s <= 0 ? 30 : s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[#F2EDE8] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 border border-[#D0C9C2] rounded-full px-4 py-1.5 text-xs font-medium text-[#6B6560] mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
            Live in 38 Cities · BloodLink V1.0
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.05] mb-6">
            When seconds<br />
            decide <span className="text-[#8B1A1A]">life,</span><br />
            make the right call.
          </h1>

          <p className="text-[#6B6560] text-lg leading-relaxed mb-10 max-w-lg">
            BloodLink connects hospitals, blood banks and verified donors on one trauma-grade platform — so the right blood reaches the right patient before the clock does.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#" className="bg-[#8B1A1A] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#6B1212] transition-colors flex items-center gap-2">
              Raise an emergency request
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#" className="border border-[#1A1A1A] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-md hover:bg-[#1A1A1A] hover:text-white transition-colors">
              Become a donor
            </a>
          </div>

          <a href="#" className="text-sm text-[#1A1A1A] font-medium flex items-center gap-1 hover:text-[#8B1A1A] transition-colors">
            Search blood near you
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        {/* Right — Inventory Snapshot */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E8E2DB] p-6">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]">Live Inventory Snapshot</span>
            <span className="text-xs text-[#6B6560]">updated {seconds}s ago</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {bloodTypes.map(({ type, units, critical }) => (
              <div
                key={type}
                className={`relative rounded-xl p-3 border ${
                  critical
                    ? 'border-[#8B1A1A] ring-1 ring-[#8B1A1A]'
                    : 'border-[#E8E2DB]'
                }`}
              >
                {critical && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#8B1A1A] text-white text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">
                    Critical
                  </span>
                )}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-2 ${
                  critical ? 'bg-[#8B1A1A]' : 'bg-[#8B1A1A]'
                }`}>
                  {type}
                </div>
                <div className="text-xl font-black text-[#1A1A1A]">{units}</div>
                <div className="text-[10px] text-[#6B6560] font-medium tracking-widest uppercase">Units</div>
              </div>
            ))}
          </div>

          <a href="#" className="mt-5 flex items-center gap-1 text-sm text-[#8B1A1A] font-semibold hover:underline">
            View full inventory & banks
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
