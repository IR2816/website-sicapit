import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "../sections/site-nav";

export default function RaftingPage() {
  return (
    <div className="min-h-screen bg-[#071318] text-slate-200 font-sans selection:bg-[#00f2fe] selection:text-[#071318]">
      <SiteNav brand="Sicapit" />

      {/* Hero Section */}
      <header className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/4.jpg"
            alt="Rafting Sungai Sicapit"
            fill
            sizes="100vw"
            className="object-cover scale-105 opacity-60"
            priority
          />
          {/* Aqua / Deep Sea Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#01090d]/90 via-[#00f2fe]/20 to-[#071318] z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center max-w-3xl pt-12">
          <span className="inline-block py-2 px-6 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/40 text-[#00f2fe] text-xs md:text-sm font-black tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,242,254,0.4)] backdrop-blur-sm">
            Pacu Adrenalin
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Tantang Jeram <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-white">Sungai Cisadane.</span>
          </h1>
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10 drop-shadow-md">
            Rasakan cipratan air segar dan deru ombak sungai. Bersiap untuk mengayuh melintasi batuan vulkanik di rute 5 Kilometer yang menguji kekompakan.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="py-20 relative z-20 border-t border-[#00f2fe]/20">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#0b1b22] p-8 rounded-3xl border border-[#00f2fe]/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center">
              <svg className="w-12 h-12 text-[#00f2fe] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-xl font-bold text-white mb-2">Durasi Arung</h3>
              <p className="text-slate-400 text-sm">Sekitar 2 - 3 Jam perjalanan air dengan titik istirahat (Rest Area).</p>
            </div>
            <div className="bg-[#0b1b22] p-8 rounded-3xl border border-[#00f2fe]/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center">
              <svg className="w-12 h-12 text-[#00f2fe] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <h3 className="text-xl font-bold text-white mb-2">Fasilitas Keamanan</h3>
              <p className="text-slate-400 text-sm">Helm, Pelampung SNI, Perahu Karet, & Pemandu Profesional (River Guide).</p>
            </div>
            <div className="bg-[#0b1b22] p-8 rounded-3xl border border-[#00f2fe]/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center">
              <svg className="w-12 h-12 text-[#00f2fe] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <h3 className="text-xl font-bold text-white mb-2">Sistem Rombongan</h3>
              <p className="text-slate-400 text-sm">Min. keberangkatan 4 Orang/Perahu. Cocok untuk acara instansi/korporat.</p>
            </div>
          </div>
          
          <div className="text-center mt-12 pb-16">
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-[#00f2fe]/20 border border-white/10 hover:border-[#00f2fe]/50 text-white rounded-full transition-all duration-300">
              <svg className="w-5 h-5 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}


