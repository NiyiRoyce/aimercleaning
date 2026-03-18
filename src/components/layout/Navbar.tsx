"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar(): React.ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = (): void => setMenuOpen((prev) => !prev);
  const closeMenu = (): void => setMenuOpen(false);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm shadow-black/8 py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <span
            className="font-display text-2xl font-semibold tracking-wide text-[#0F1F2E]
                       transition-colors duration-300 group-hover:text-[#38a67e]"
          >
            AIMER
          </span>
          {/* Dot pulses subtly on hover */}
          <span
            className="w-2 h-2 rounded-full bg-[#38a67e]
                       transition-transform duration-300 group-hover:scale-125"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative font-body text-sm font-medium text-[#0F1F2E]/60
                         px-4 py-2 rounded-full
                         transition-colors duration-200
                         hover:text-[#0F1F2E] hover:bg-[#0F1F2E]/5"
            >
              {link.label}
              {/* Underline pill */}
              <span
                aria-hidden
                className="absolute bottom-1.5 left-1/2 -translate-x-1/2
                           h-px w-0 bg-[#38a67e] rounded-full
                           transition-all duration-300 group-hover:w-5"
              />
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex">
          <Button href="#contact" variant="primary">
            Book a Cleaner
          </Button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg
                     border border-gray-200 bg-white/80 backdrop-blur-sm
                     transition-all duration-200 hover:border-[#38a67e]/40 hover:bg-[#E8F5F0]
                     active:scale-95"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block w-4 h-px bg-[#0F1F2E] rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-[#0F1F2E] rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 w-0" : "w-4"
              }`}
            />
            <span
              className={`block w-4 h-px bg-[#0F1F2E] rounded-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 mx-4 mb-4 rounded-2xl shadow-xl shadow-black/8 overflow-hidden">
          <nav className="flex flex-col px-2 py-3">
            {navLinks.map((link: NavLink, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center justify-between font-body text-sm font-medium
                           text-[#0F1F2E]/70 px-4 py-3 rounded-xl
                           transition-all duration-200
                           hover:text-[#0F1F2E] hover:bg-[#E8F5F0]"
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                {link.label}
                <span
                  aria-hidden
                  className="text-[#38a67e] opacity-0 -translate-x-1
                             transition-all duration-200
                             group-hover:opacity-100 group-hover:translate-x-0"
                >
                  →
                </span>
              </Link>
            ))}
            <div className="px-4 pt-2 pb-1">
              <Button
                href="#contact"
                variant="primary"
                className="w-full justify-center"
              >
                Book a Cleaner
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}