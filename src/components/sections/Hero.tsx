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
              Specializing in post-construction cleaning and commercial facility maintenance. We deliver high-standard, move-in ready results for job sites, offices, and residential properties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button href="#contact" variant="primary">
                Request a Quote →
              </Button>
              <Button href="#services" variant="outline">
                Explore Services
              </Button>
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
          </div>
        </div>
      </div>
    </section>
  );
}