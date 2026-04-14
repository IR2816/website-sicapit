"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type SiteNavProps = {
  brand: string;
};

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#gallery", label: "Galeri" },
  { href: "#video", label: "Video" },
  { href: "#reviews", label: "Ulasan" },
  { href: "#lokasi", label: "Lokasi" },
];

export function SiteNav({ brand }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center w-full px-4 ${
        scrolled ? "pt-4" : "pt-8"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 overflow-hidden ${
          scrolled
            ? "w-full max-w-4xl bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 py-3 px-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            : "w-full max-w-7xl bg-transparent py-4 px-2 md:px-12 border border-transparent rounded-none shadow-none"
        }`}
      >
        <Link href="/" className="flex flex-col group">
          <span className="text-[9px] uppercase font-semibold text-brand tracking-[0.2em] transform transition-transform group-hover:translate-x-0.5">Kampung Wisata</span>
          <span className="font-heading font-black text-xl text-white tracking-tighter mix-blend-difference">{brand}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#lokasi"
            className="px-6 py-2.5 bg-brand/10 hover:bg-brand text-brand hover:text-white border border-brand/20 hover:border-brand text-[13px] font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0)] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
          >
            Rencanakan Trip
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-[80px] left-4 right-4 bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col px-6 py-6 shadow-2xl animate-fade-in z-40">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-base font-bold border-b border-white/5 text-slate-300 hover:text-brand transition-colors flex justify-between items-center"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            ))}
            <a
              href="#lokasi"
              className="mt-4 px-6 py-4 bg-brand text-white text-center font-bold rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              onClick={() => setOpen(false)}
            >
              Rencanakan Trip Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
