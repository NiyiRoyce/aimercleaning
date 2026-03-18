import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20"
    >
      {/* Soft background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8F5F0] rounded-bl-[80px] -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 lg:py-24">
          {/* Left: Text */}
          <div>
            <SectionLabel className="mb-6">Professional Cleaning</SectionLabel>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#0F1F2E] leading-[1.05] tracking-tight mb-6">
              A Clean Home,
              <br />
              <em className="font-light text-[#38a67e] not-italic">
                A Fresh Start.
              </em>
            </h1>

            <p className="font-body text-base text-gray-500 leading-relaxed max-w-md mb-10">
              Professional cleaning you can trust — whether it&apos;s your
              home, office, or that one messy corner. Eco-friendly products,
              verified cleaners, guaranteed results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button href="#contact" variant="primary">
                Book a Cleaner →
              </Button>
              <Button href="#services" variant="outline">
                Explore Services
              </Button>
            </div>

            {/* Inline trust note */}
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["A", "C", "F"].map((initial) => (
                  <div
                    key={initial}
                    className="w-8 h-8 rounded-full bg-[#0F1F2E] border-2 border-white flex items-center justify-center text-white font-display text-xs"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-gray-500">
                <span className="font-semibold text-[#0F1F2E]">500+</span>{" "}
                happy homes cleaned this year
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative h-[520px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/15">
              <Image
                src={images.hero.main}
                alt={images.hero.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F2E]/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-black/10 px-6 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5F0] flex items-center justify-center text-[#38a67e] text-lg">
                ✦
              </div>
              <div>
                <p className="font-body text-xs text-gray-400">Average Rating</p>
                <p className="font-display text-xl font-semibold text-[#0F1F2E]">
                  4.9 / 5.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}