import SectionLabel from "@/components/ui/SectionLabel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  // Duplicate for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-white">

      <div className="flex flex-col lg:flex-row min-h-[540px]">

        {/* ── Left: Dark header panel ── */}
        <div className="relative flex-shrink-0 lg:w-[420px] bg-[#0F1F2E] flex flex-col justify-center
                        px-10 py-20 lg:py-24 overflow-hidden">

          {/* Decorative green glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#38a67e]/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-10 right-0 w-40 h-40 rounded-full bg-[#38a67e]/8 blur-2xl"
          />

          {/* Decorative corner rule */}
          <div
            aria-hidden
            className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-[#38a67e]/40 rounded-tl-sm"
          />
          <div
            aria-hidden
            className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-[#38a67e]/40 rounded-br-sm"
          />

          <div className="relative z-10">
            <SectionLabel className="mb-5 text-[#38a67e] border-[#38a67e]/30">
              Testimonials
            </SectionLabel>

            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              Don&apos;t Take
              <br />
              <em className="not-italic font-light text-[#38a67e]">
                Our Word For It.
              </em>
            </h2>

            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              We offer clear service agreements and high-standard execution for offices, job sites, and private properties. Get your space ready for business today.
            </p>

            {/* Accent rule */}
            <div className="mt-8 w-12 h-0.5 rounded-full bg-[#38a67e]" />
          </div>
        </div>

        {/* ── Right: Marquee panel ── */}
        <div className="relative flex-1 bg-gray-50/80 flex flex-col justify-center py-16 overflow-hidden">

          {/* Fade masks */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10
                       bg-gradient-to-r from-gray-50/80 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10
                       bg-gradient-to-l from-gray-50/80 to-transparent"
          />

          {/* Row 1 — scrolls left */}
          <div className="flex gap-5 mb-5 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
            {doubled.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} index={i} />
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex gap-5 w-max animate-[marquee_35s_linear_infinite_reverse] hover:[animation-play-state:paused]">
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} index={i} />
            ))}
          </div>
        </div>

      </div>

      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}