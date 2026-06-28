const stats = [
  { value: '12,408', label: 'Active Donors' },
  { value: '217', label: 'Blood Banks' },
  { value: '3,194', label: 'Lives Saved' },
  { value: '11 min', label: 'Median Dispatch' },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-[#E8E2DB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8E2DB]">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-8 py-8">
              <div className="text-3xl font-black text-[#1A1A1A] mb-1">{value}</div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#6B6560]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart matching callout */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="bg-[#1A1A1A] text-white rounded-xl px-6 py-5 flex items-start gap-3 max-w-lg ml-auto">
          <svg className="mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
          </svg>
          <p className="text-sm leading-relaxed">
            <strong>Smart matching engine</strong> cross-references compatibility, distance, expiry & transport time — so you don't have to.
          </p>
        </div>
      </div>
    </section>
  );
}
