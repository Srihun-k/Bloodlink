export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="bg-[#8B1A1A] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">Save a Life Today</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Register as a donor. It takes 60 seconds.
            </h2>
          </div>
          <a
            href="#"
            className="shrink-0 bg-white text-[#8B1A1A] font-bold px-8 py-4 rounded-xl hover:bg-[#F2EDE8] transition-colors flex items-center gap-2"
          >
            Become a donor
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F2EDE8] border-t border-[#E0D9D1] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#8B1A1A] rounded-md flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/>
                </svg>
              </div>
              <span className="font-bold text-[#1A1A1A] text-lg">BloodLink</span>
            </div>
            <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
              BloodLink is a centralised, hospital-grade platform that connects donors, blood banks and emergency responders to move the right blood to the right patient — fast.
            </p>
            <p className="text-[#9CA3AF] text-xs">Available 24×7 · Made in India · For research/demo use.</p>
          </div>

          {/* Platform links */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A] mb-5">Platform</p>
            <div className="flex flex-col gap-3">
              {['About', 'Features', 'Find Blood', 'Contact'].map((link) => (
                <a key={link} href="#" className="text-sm text-[#6B6560] hover:text-[#8B1A1A] transition-colors">{link}</a>
              ))}
            </div>
          </div>

          {/* Get involved */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A] mb-5">Get Involved</p>
            <div className="flex flex-col gap-3">
              {['Become a donor', 'Sign in', 'Emergency request'].map((link) => (
                <a key={link} href="#" className="text-sm text-[#6B6560] hover:text-[#8B1A1A] transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
