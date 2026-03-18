import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1} group relative flex gap-5 p-6 rounded-2xl bg-white border border-gray-100
                  shadow-sm shadow-[#0F1F2E]/5
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-[#38a67e]/30
                  hover:shadow-xl hover:shadow-[#0F1F2E]/10`}
    >
      {/* Green top accent bar — slides in on hover */}
      <div
        aria-hidden
        className="absolute top-0 left-5 right-5 h-0.5 rounded-full bg-[#38a67e]
                   scale-x-0 origin-left transition-transform duration-300 ease-out
                   group-hover:scale-x-100"
      />

      {/* Icon — background deepens, icon nudges up */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#E8F5F0] flex items-center justify-center text-[#38a67e] text-lg
                   transition-all duration-300 ease-out
                   group-hover:bg-[#38a67e] group-hover:text-white group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-[#38a67e]/30"
      >
        {feature.icon}
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-[#0F1F2E] mb-1 transition-colors duration-300 group-hover:text-[#38a67e]">
          {feature.title}
        </h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}