import type { Step } from "@/types";

interface StepCardProps {
  step: Step;
  index: number;
  isLast: boolean;
}

export default function StepCard({ step, index, isLast }: StepCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`reveal reveal-delay-${index + 1} relative`}>
      {/* Vertical connector — between cards */}
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-10 border-l border-dashed border-[#38a67e]/40 z-0" />
      )}

      <div
        className={`group relative flex flex-col md:flex-row items-center gap-8 md:gap-14
                    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {/* ── Number badge ── */}
        <div className="relative flex-shrink-0 z-10">
          {/* Outer ring — expands on hover */}
          <div
            className="absolute inset-0 rounded-full border-2 border-[#38a67e]/20 scale-100
                       transition-all duration-500 ease-out
                       group-hover:scale-125 group-hover:border-[#38a67e]/10"
          />
          <div
            className="relative w-24 h-24 rounded-full bg-white border-2 border-[#38a67e]/30 shadow-lg shadow-[#38a67e]/10
                       flex items-center justify-center
                       transition-all duration-300 ease-out
                       group-hover:bg-[#38a67e] group-hover:border-[#38a67e] group-hover:shadow-xl group-hover:shadow-[#38a67e]/25"
          >
            <span
              className="font-display text-4xl font-light text-[#38a67e]
                          transition-colors duration-300 group-hover:text-white"
            >
              {step.number}
            </span>
          </div>
        </div>

        {/* ── Content card ── */}
        <div
          className="relative flex-1 bg-white rounded-2xl border border-gray-100 p-8
                     shadow-sm shadow-[#0F1F2E]/5
                     transition-all duration-300 ease-out
                     group-hover:-translate-y-1
                     group-hover:shadow-xl group-hover:shadow-[#0F1F2E]/10
                     group-hover:border-[#38a67e]/25"
        >
          {/* Accent bar */}
          <div
            aria-hidden
            className={`absolute top-0 h-0.5 rounded-full bg-[#38a67e] w-12
                        scale-x-0 transition-transform duration-300 ease-out origin-left
                        group-hover:scale-x-100
                        ${isEven ? "left-8" : "right-8 origin-right"}`}
          />

          <p className="font-body text-xs font-semibold tracking-widest text-[#38a67e] uppercase mb-2">
            Step {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display text-2xl font-semibold text-[#0F1F2E] mb-3 leading-snug
                         transition-colors duration-300 group-hover:text-[#38a67e]">
            {step.title}
          </h3>
          <p className="font-body text-sm text-gray-500 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}