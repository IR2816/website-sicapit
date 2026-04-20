"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type SiteNavProps = {
  brand: string;
};

const links = [
  { href: "/", label: "Beranda" },
  { href: "/farm", label: "Farm" },
  { href: "/rafting", label: "Rafting" },
  { href: "/education", label: "Edukasi" },
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
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 overflow-visible ${
          scrolled
            ? "w-full max-w-4xl bg-[#111111]/80 backdrop-blur-xl border border-white/10 py-3 px-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            : "w-full max-w-6xl bg-black/30 backdrop-blur-md py-3.5 px-6 md:px-10 border border-white/10 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 overflow-hidden rounded-full border-2 border-brand/80 shadow-[0_0_15px_rgba(249,115,22,0.6)] group-hover:scale-105 transition-transform duration-300">
            <Image src="/assets/images/Icon.jpg" alt="Logo Sicapit" fill sizes="48px" className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-brand tracking-[0.2em] transform transition-transform group-hover:translate-x-0.5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Kampung Wisata</span>
            <span className="font-heading font-black text-xl text-white tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{brand}</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-bold text-[#ffffff] hover:text-brand drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="#lokasi"
            className="px-6 py-2.5 bg-brand hover:bg-[#ffffff] text-[#ffffff] hover:text-brand border-none text-[13px] font-bold rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)]"
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
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-bold border-b border-white/5 text-white hover:text-brand transition-colors flex justify-between items-center"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
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


