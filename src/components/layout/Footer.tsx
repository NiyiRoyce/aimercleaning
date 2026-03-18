import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Residential", href: "#services" },
    { label: "Commercial", href: "#services" },
    { label: "Deep Cleaning", href: "#services" },
    { label: "Office Cleaning", href: "#services" },
  ],
  "About AIMER": [
    { label: "Our Story", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Trust: [
    { label: "Guarantee", href: "#why-us" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Instagram", href: "#", icon: "in" },
  { label: "Twitter", href: "#", icon: "x" },
  { label: "LinkedIn", href: "#", icon: "li" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0F1F2E] text-white overflow-hidden">

      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#38a67e]/8 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-[#38a67e]/6 blur-2xl" />

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #38a67e 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-20">

        {/* ── Top: Brand + CTA strip ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/8">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-3xl font-semibold tracking-wide text-white">AIMER</span>
            <span className="w-2 h-2 rounded-full bg-[#38a67e]" />
          </div>
          <p className="font-body text-sm text-white/40 max-w-xs leading-relaxed">
            Professional cleaning for homes and offices across Canada —
            verified cleaners, eco-friendly products, guaranteed results.
          </p>
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 font-body text-sm font-medium
                       bg-[#38a67e] text-white rounded-full px-6 py-3 shrink-0 overflow-hidden
                       shadow-lg shadow-[#38a67e]/25
                       transition-all duration-300 ease-out
                       hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#38a67e]/35
                       active:scale-[0.97]"
          >
            <span className="relative z-10">Book a Cleaner →</span>
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                         -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"
            />
          </Link>
        </div>

        {/* ── Middle: Links grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">

          {/* Socials column */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-white/35 mb-5">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex items-center gap-3 w-fit"
                >
                  <span
                    className="w-8 h-8 rounded-lg border border-white/15 bg-white/5
                               flex items-center justify-center text-white/40 font-body text-xs font-medium
                               transition-all duration-300
                               group-hover:border-[#38a67e] group-hover:bg-[#38a67e] group-hover:text-white
                               group-hover:shadow-md group-hover:shadow-[#38a67e]/30"
                  >
                    {s.icon}
                  </span>
                  <span className="font-body text-sm text-white/40 transition-colors duration-200 group-hover:text-white/80">
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-white/35 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1.5 font-body text-sm text-white/50
                                 transition-all duration-200 hover:text-white w-fit"
                    >
                      <span
                        aria-hidden
                        className="w-0 h-px bg-[#38a67e] transition-all duration-200 group-hover:w-3"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/25">
            © {new Date().getFullYear()} AIMER Cleaning Services. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38a67e]/60" />
            <p className="font-body text-xs text-white/25">
              Crafted with care for clean spaces.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}