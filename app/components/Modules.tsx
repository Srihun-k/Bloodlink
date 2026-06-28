const modules = [
  {
    tag: 'Donor Module',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    headline: 'Donate. Track. Be the reason someone goes home.',
    body: 'Register in 60 seconds, view your full donation history, update your profile and get notified when your blood type is critically low in your city.',
    dark: false,
    stat: null,
  },
  {
    tag: 'Hospital Module',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    headline: 'Find compatible blood without the phone tree.',
    body: 'Search inventory across all partner banks, raise priority emergency requests with one tap, and track status from dispatch to delivery.',
    dark: false,
    stat: null,
  },
  {
    tag: 'Blood Bank Module',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/>
      </svg>
    ),
    headline: 'Manage units. Reduce waste. Respond faster.',
    body: 'Add, edit and retire units with a live expiry forecast. Hospital requests reach you ranked by urgency, compatibility and turnaround.',
    dark: true,
    stat: { wastage: '-73%', response: '11 min' },
  },
  {
    tag: 'Admin',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    headline: 'Total network visibility.',
    body: 'Live analytics, donor/bank/hospital verification & city-level health.',
    dark: false,
    stat: null,
  },
];

export default function Modules() {
  return (
    <section className="bg-[#F2EDE8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#8B1A1A] mb-4">What BloodLink Does</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight">
              Four roles. One central nervous system for blood supply.
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="text-[#6B6560] text-lg leading-relaxed">
              Hospitals stop chasing phone numbers. Blood banks stop losing units to expiry. Donors stop wondering if their donation actually mattered. Admins finally see the whole picture.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {modules.map(({ tag, icon, headline, body, dark, stat }) => (
            <div
              key={tag}
              className={`rounded-2xl p-8 border ${
                dark
                  ? 'bg-[#1A1A1A] text-white border-transparent'
                  : 'bg-white text-[#1A1A1A] border-[#E8E2DB]'
              }`}
            >
              <div className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-6 ${
                dark ? 'text-[#8B1A1A]' : 'text-[#8B1A1A]'
              }`}>
                {icon}
                {tag}
              </div>
              <div className={`w-0.5 h-8 mb-4 ${dark ? 'bg-[#8B1A1A]' : 'bg-[#8B1A1A]'}`}></div>
              <h3 className={`text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>
                {headline}
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? 'text-[#9CA3AF]' : 'text-[#6B6560]'}`}>
                {body}
              </p>
              {stat && (
                <div className="flex gap-8 mt-8">
                  <div>
                    <div className="text-3xl font-black text-white">{stat.wastage}</div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Wastage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">{stat.response}</div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Response</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
