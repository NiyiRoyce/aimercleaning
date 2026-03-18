import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">

      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[700px] h-[400px] rounded-full bg-[#38a67e]/8 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">

        {/* ── Accent block ── */}
        <div className="relative rounded-3xl bg-[#0F1F2E] overflow-hidden px-10 py-16 lg:px-20 lg:py-20">

          {/* Inner decorative glows */}
          <div aria-hidden className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#38a67e]/15 blur-3xl pointer-events-none" />
          <div aria-hidden className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#38a67e]/10 blur-3xl pointer-events-none" />

          {/* Decorative corner brackets */}
          <div aria-hidden className="absolute top-7 left-7 w-7 h-7 border-t-2 border-l-2 border-[#38a67e]/40 rounded-tl-sm" />
          <div aria-hidden className="absolute top-7 right-7 w-7 h-7 border-t-2 border-r-2 border-[#38a67e]/40 rounded-tr-sm" />
          <div aria-hidden className="absolute bottom-7 left-7 w-7 h-7 border-b-2 border-l-2 border-[#38a67e]/40 rounded-bl-sm" />
          <div aria-hidden className="absolute bottom-7 right-7 w-7 h-7 border-b-2 border-r-2 border-[#38a67e]/40 rounded-br-sm" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left: copy */}
            <div className="max-w-xl">
              <span className="inline-block font-body text-xs tracking-[0.2em] uppercase text-[#38a67e] mb-5">
                Get Started Today
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5">
                Your Space Is One
                <br />
                <em className="font-light not-italic text-[#38a67e]">
                  Booking Away.
                </em>
              </h2>
              <p className="font-body text-sm text-white/55 leading-relaxed">
                Flexible scheduling that works around you. Transparent pricing
                with no surprises. Cleaners who treat your space like their own.
                That&apos;s the AIMER standard — every single visit.
              </p>
            </div>

            {/* Right: buttons */}
            <div className="flex flex-col gap-4 lg:items-end shrink-0">

              {/* Primary — green fill */}
              <Button
                href="#contact"
                variant="primary"
                className="bg-[#38a67e] hover:bg-[#2d9470] shadow-lg shadow-[#38a67e]/25 w-full lg:w-auto"
              >
                Book a Cleaner →
              </Button>

              {/* Outline — white border, fills green on hover (always readable on navy bg) */}
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center gap-2
                           font-body font-medium text-sm tracking-wide rounded-full
                           px-7 py-3.5 w-full lg:w-auto overflow-hidden
                           border-2 border-white/25 text-white
                           transition-all duration-300 ease-out
                           hover:border-[#38a67e] hover:bg-[#38a67e] hover:text-white
                           hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#38a67e]/25
                           active:scale-[0.97]"
              >
                <span className="relative z-10">View Services</span>
                {/* Shimmer */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                             -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"
                />
              </a>

              <p className="font-body text-xs text-white/30 text-center lg:text-right mt-1">
                No commitment. Cancel anytime.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}