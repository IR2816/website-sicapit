"use client";

import { ScrollReveal } from "./scroll-reveal";

const awards = [
  {
    title: "1.000 Besar Desa Wisata Indonesia",
    desc: "ADWI Kemenparekraf RI dari total 7.000+ desa secara nasional. Simbol kebangkitan ekonomi sektor pariwisata.",
    year: "2023",
    icon: (
      <svg className="w-10 h-10 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    ),
  },
  {
    title: "Juara 1 Kebersihan Kota Bogor",
    desc: "Kategori bantaran sungai tingkat Kota Bogor, bukti nyata tekat transformasi RW.06.",
    year: "2023",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    isSpecial: true,
  },
  {
    title: "500 Besar Desa Wisata Indonesia",
    desc: "ADWI Kemenparekraf RI menuju 'Pariwisata Hijau Berkelas Dunia' dari 7.300+ desa.",
    year: "2024",
    icon: (
      <svg className="w-10 h-10 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
  }
];

export function VillageAwards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
      {awards.map((award, i) => (
        <ScrollReveal key={i}>
          <div
            className={`h-full relative overflow-hidden rounded-[24px] p-8 border hover:-translate-y-2 transition-all duration-300 ${
              award.isSpecial 
                ? 'bg-brand border-brand/50 text-white shadow-[0_10px_30px_rgba(22,163,74,0.3)] hover:shadow-[0_10px_40px_rgba(22,163,74,0.5)]' 
                : 'bg-surface border-line hover:border-brand/40 text-slate-300 shadow-shadow'
            }`}
          >
            {/* Background Icon Watermark */}
            <div className={`absolute -right-6 -bottom-6 opacity-10 scale-150 pointer-events-none ${award.isSpecial ? 'text-black' : 'text-brand'}`}>
              {award.icon}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${award.isSpecial ? 'bg-white/20' : 'bg-brand/10'}`}>
                  {award.icon}
                </div>
                <span className={`text-3xl font-black font-heading ${award.isSpecial ? 'text-white/30' : 'text-line'}`}>
                  {award.year}
                </span>
              </div>
              <h3 className={`font-heading text-xl md:text-2xl font-bold mb-3 ${award.isSpecial ? 'text-white' : 'text-white'}`}>
                {award.title}
              </h3>
              <p className={`leading-relaxed text-sm ${award.isSpecial ? 'text-white/80' : 'text-muted'}`}>
                {award.desc}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}


