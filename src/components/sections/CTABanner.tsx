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
          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#38a67e]/15 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#38a67e]/10 blur-3xl pointer-events-none"
          />

          {/* Decorative corner brackets */}
          <div
            aria-hidden
            className="absolute top-7 left-7 w-7 h-7 border-t-2 border-l-2 border-[#38a67e]/40 rounded-tl-sm"
          />
          <div
            aria-hidden
            className="absolute top-7 right-7 w-7 h-7 border-t-2 border-r-2 border-[#38a67e]/40 rounded-tr-sm"
          />
          <div
            aria-hidden
            className="absolute bottom-7 left-7 w-7 h-7 border-b-2 border-l-2 border-[#38a67e]/40 rounded-bl-sm"
          />
          <div
            aria-hidden
            className="absolute bottom-7 right-7 w-7 h-7 border-b-2 border-r-2 border-[#38a67e]/40 rounded-br-sm"
          />

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

            {/* Right: buttons + small trust line */}
            <div className="flex flex-col gap-4 lg:items-end shrink-0">
              <Button
                href="#contact"
                variant="primary"
                className="bg-[#38a67e] hover:bg-[#2d9470] w-full lg:w-auto"
              >
                Book a Cleaner →
              </Button>
              <Button
                href="#services"
                variant="outline"
                className="border-white/25 text-white hover:bg-white hover:text-[#0F1F2E] w-full lg:w-auto"
              >
                View Services
              </Button>
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