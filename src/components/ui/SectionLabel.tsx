interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-[#38a67e] ${className}`}
    >
      <span className="w-4 h-px bg-[#38a67e]" />
      {children}
    </span>
  );
}