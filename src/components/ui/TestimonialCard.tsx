import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div
      className="group relative flex-shrink-0 w-[340px] flex flex-col justify-between p-7 rounded-2xl
                 bg-white border border-gray-100
                 shadow-sm shadow-[#0F1F2E]/5
                 transition-all duration-300 ease-out
                 hover:-translate-y-2
                 hover:shadow-xl hover:shadow-[#0F1F2E]/12
                 hover:border-[#38a67e]/30
                 cursor-default select-none"
    >
      {/* Accent bar */}
      <div
        aria-hidden
        className="absolute top-0 left-7 right-7 h-0.5 rounded-full bg-[#38a67e]
                   scale-x-0 origin-left transition-transform duration-300 ease-out
                   group-hover:scale-x-100"
      />

      <div>
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span
              key={i}
              className="text-[#38a67e] text-sm inline-block transition-transform duration-200 ease-out group-hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Decorative quote mark */}
        <div
          aria-hidden
          className="font-display text-5xl leading-none text-[#38a67e]/15 -ml-0.5 mb-1
                     transition-colors duration-300 group-hover:text-[#38a67e]/30"
        >
          &ldquo;
        </div>

        <p className="font-display text-base font-light text-[#0F1F2E] leading-relaxed italic -mt-3">
          {testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3
                      transition-colors duration-300 group-hover:border-[#38a67e]/15">
        <div
          className="w-9 h-9 rounded-full bg-[#E8F5F0] flex items-center justify-center
                     text-[#38a67e] font-display font-semibold text-sm
                     transition-all duration-300
                     group-hover:bg-[#38a67e] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#38a67e]/30"
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-body font-medium text-sm text-[#0F1F2E] transition-colors duration-300 group-hover:text-[#38a67e]">
            {testimonial.name}
          </p>
          <p className="font-body text-xs text-gray-400">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}