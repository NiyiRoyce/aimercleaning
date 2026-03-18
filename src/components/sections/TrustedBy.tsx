import { stats } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="bg-[#0F1F2E] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center text-center md:py-2 px-6"
            >
              <span className="font-display text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-body text-xs text-white/40 tracking-widest uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}