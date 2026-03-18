import SectionLabel from "@/components/ui/SectionLabel";
import StepCard from "@/components/ui/StepCard";
import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#E8F5F0] overflow-hidden">

      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-[#38a67e]/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-20 w-[340px] h-[340px] rounded-full bg-white/60 blur-2xl"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel className="mb-4 justify-center">How It Works</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-[#0F1F2E] leading-tight">
            From Booking to
            <br />
            <em className="not-italic font-light text-[#38a67e]">
              Spotless — In Three Steps.
            </em>
          </h2>
          <p className="font-body text-sm text-gray-500 mt-5 max-w-md mx-auto leading-relaxed">
            No back-and-forth, no guesswork. Book in minutes, we show up
            prepared, and you walk into a space that speaks for itself.
          </p>
        </div>

        {/* Zigzag steps */}
        <div className="flex flex-col gap-10">
          {steps.map((step, i) => (
            <StepCard
              key={step.id}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}