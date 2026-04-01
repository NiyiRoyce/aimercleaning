import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";
import { features } from "@/lib/data";
import { images } from "@/lib/images";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full bg-[#E8F5F0] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#38a67e]/6 blur-2xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel className="mb-4 justify-center">Why Choose Us</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-[#0F1F2E] leading-tight">
            Built On Trust,
            <br />
            <em className="not-italic font-light text-[#38a67e]">
              Proven By Results.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>

          {/* Image + CTA */}
          <div className="reveal reveal-delay-2 flex flex-col gap-8">

            {/* Image with hover */}
            <div className="group relative h-[380px] rounded-3xl overflow-hidden
                            shadow-xl shadow-[#0F1F2E]/10
                            transition-shadow duration-500
                            hover:shadow-2xl hover:shadow-[#0F1F2E]/20">
              <Image
                src={images.whyUs.main}
                alt={images.whyUs.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F2E]/30 to-transparent" />
              {/* Green tint on hover */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[#38a67e]/0 transition-colors duration-500 group-hover:bg-[#38a67e]/8"
              />
            </div>

            {/* Guarantee card with hover */}
            <div className="group flex items-start gap-5 p-6 rounded-2xl bg-[#E8F5F0] border border-transparent
                            transition-all duration-300 ease-out
                            hover:border-[#38a67e]/30 hover:shadow-lg hover:shadow-[#38a67e]/8 hover:-translate-y-1">
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#38a67e] text-lg shadow-sm
                            transition-all duration-300 group-hover:bg-[#38a67e] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#38a67e]/30"
              >
                ◎
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-[#0F1F2E] mb-1 transition-colors duration-300 group-hover:text-[#38a67e]">
                  We Stand Behind Every Clean
                </h4>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  If it&apos;s not right, we will come back and make it right, no haggling, 
                  no extra charges, no excuses. Your Joy, Our Growth.
                </p>
              </div>
            </div>

            <Button href="#contact" variant="outline" className="self-start">
              Request a Quote →
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}