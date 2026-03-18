import Image from "next/image";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1} group relative overflow-hidden rounded-2xl bg-white border border-gray-100
                  shadow-sm shadow-[#0F1F2E]/5
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:shadow-xl hover:shadow-[#0F1F2E]/10
                  hover:border-[#38a67e]/30`}
    >
      {/* Green top accent bar — slides in on hover */}
      <div
        aria-hidden
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-[#38a67e] z-10
                   scale-x-0 origin-left transition-transform duration-300 ease-out
                   group-hover:scale-x-100"
      />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-[#0F1F2E] mb-2 leading-snug">
          {service.title}
        </h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed">
          {service.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-[#38a67e] text-sm font-medium font-body
                        transition-all duration-300 group-hover:gap-2">
          Learn more <span>→</span>
        </div>
      </div>
    </div>
  );
}