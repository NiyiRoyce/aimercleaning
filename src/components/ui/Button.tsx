import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center gap-2 font-body font-medium text-sm tracking-wide " +
    "rounded-full px-7 py-3.5 cursor-pointer overflow-hidden " +
    "transition-all duration-300 ease-out " +
    "active:scale-[0.97] select-none";

  const variants = {
    primary:
      // Solid navy — shimmer sweep + lift on hover, green shadow
      "bg-[#0F1F2E] text-white shadow-md shadow-[#0F1F2E]/20 " +
      "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0F1F2E]/30 hover:bg-[#1a2f42] " +
      "after:absolute after:inset-0 after:rounded-full " +
      "after:bg-gradient-to-r after:from-transparent after:via-white/8 after:to-transparent " +
      "after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-500 after:ease-out",

    outline:
      // Green-tinted border — fills with navy on hover
      "border-2 border-[#0F1F2E] text-[#0F1F2E] bg-transparent " +
      "hover:-translate-y-0.5 hover:bg-[#0F1F2E] hover:text-white hover:shadow-lg hover:shadow-[#0F1F2E]/20 " +
      "after:absolute after:inset-0 after:rounded-full " +
      "after:bg-gradient-to-r after:from-transparent after:via-white/8 after:to-transparent " +
      "after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-500 after:ease-out",

    ghost:
      // Underline reveal with colour shift
      "text-[#0F1F2E] px-0 py-0 rounded-none bg-transparent " +
      "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#38a67e] " +
      "after:transition-all after:duration-300 hover:after:w-full hover:text-[#38a67e]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}