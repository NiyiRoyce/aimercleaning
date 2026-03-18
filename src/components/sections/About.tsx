import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { images } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#E8F5F0] overflow-hidden">

      {/* Soft ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#38a67e]/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-0 w-[380px] h-[380px] rounded-full bg-[#38a67e]/6 blur-2xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Image column ── */}
          <div className="reveal relative group">

            {/* Inset border ring — tightens on hover */}
            <div
              aria-hidden
              className="absolute top-6 left-6 right-6 bottom-6 rounded-3xl border border-[#38a67e]/30
                         transition-all duration-500 ease-out
                         group-hover:top-3 group-hover:left-3 group-hover:right-3 group-hover:bottom-3
                         group-hover:border-[#38a67e]/50 -z-10"
            />

            {/* Main photo */}
            <div
              className="relative h-[460px] lg:h-[560px] rounded-3xl overflow-hidden
                         shadow-xl shadow-[#0F1F2E]/10
                         transition-shadow duration-500
                         group-hover:shadow-2xl group-hover:shadow-[#0F1F2E]/20"
            >
              <Image
                src={images.about.main}
                alt={images.about.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Green tint overlay — fades in on hover */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[#38a67e]/0 transition-colors duration-500 group-hover:bg-[#38a67e]/10"
              />
            </div>

            {/* Decorative block — drifts on hover */}
            <div
              aria-hidden
              className="absolute -bottom-5 -right-5 w-40 h-40 rounded-2xl bg-[#38a67e]/15 -z-10
                         transition-all duration-500 ease-out
                         group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:bg-[#38a67e]/25"
            />
          </div>

          {/* ── Text column ── */}
          <div className="reveal reveal-delay-2 flex flex-col">

            <SectionLabel className="mb-5">About Us</SectionLabel>

            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-[#0F1F2E] leading-tight mb-6 tracking-tight">
              More Than Cleaning —
              <br />
              <em className="not-italic font-light text-[#38a67e]">
                We Care For Your Space.
              </em>
            </h2>

            <div className="w-12 h-0.5 bg-[#38a67e] rounded-full mb-7" />

            <p className="font-body text-sm text-gray-600 leading-relaxed mb-4">
              AIMER started with a simple belief: a clean home is a foundation
              for a better life. We built our company around that idea —
              assembling a team of dedicated professionals who treat every
              space as if it were their own.
            </p>
            <p className="font-body text-sm text-gray-600 leading-relaxed mb-8">
              From humble beginnings serving a handful of families, we&apos;ve
              grown to serve hundreds of homes and offices across Nigeria —
              delivering consistent, care-driven, eco-friendly cleaning that
              makes a real difference.
            </p>

            <div>
              <Button href="#contact" variant="primary">
                Explore us →
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}