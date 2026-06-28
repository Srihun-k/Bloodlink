const trustFeatures = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Licence verified",
    desc: "NACO & state-board cross-checks",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      </svg>
    ),
    title: "City-aware routing",
    desc: "Distance & traffic-aware ETA",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Live status",
    desc: "Per-unit chain of custody",
  },
];

export default function Trust() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/doc.webp"
              alt="Doctor"
              className="w-full h-[420px] lg:h-[560px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B1A1A] mb-5">
              Built for Clinicians, Audited for Trust
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-[#1A1A1A] mb-8">
              Verified banks.
              <br />
              Eligible donors.
              <br />
              Auditable trail.
            </h2>

            <p className="text-lg leading-8 text-[#6B6560] mb-12">
              Every blood bank on the network is licence-verified. Donor
              eligibility is checked against the WHO 12-week interval. Every
              unit has an immutable history—from collection to transfusion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {trustFeatures.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="border border-[#E8E2DB] rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-[#8B1A1A] mb-4">
                    {icon}
                  </div>

                  <h3 className="font-bold text-[#1A1A1A] text-base mb-2">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-[#6B6560]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}