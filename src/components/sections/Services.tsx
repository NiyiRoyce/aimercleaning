import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* Ambient background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#E8F5F0] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-[#38a67e]/6 blur-2xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel className="mb-4">Our Services</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-[#0F1F2E] leading-tight">
              Every Space,
              <br />
              <em className="not-italic font-light text-[#38a67e]">
                Handled With Precision.
              </em>
            </h2>
          </div>
          <p className="font-body text-sm text-gray-500 leading-relaxed max-w-sm lg:text-right">
            From a commercial site to a premium home, AIMER arrives equipped with a systematic,
            high-standard process. We get the job done right so your space is ready for business, living, or handover.
          </p>
        </div>

        {/* Grid — no wrapper divs, cards handle their own hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}