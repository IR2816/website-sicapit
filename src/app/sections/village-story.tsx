"use client";

import { ScrollReveal } from "./scroll-reveal";

const timeline = [
  {
    year: "2015 – 2023",
    title: "Semangat Kepemudaan",
    desc: "Perjalanan ini dimulai dari pergerakan kecil oleh Karang Taruna RW.06 (Bapak Hermansyah). Fokus utama kami awalnya murni pada pengembangan potensi pemuda untuk membangun solidaritas antarwarga dan membentuk karakter komunitas yang solid.",
  },
  {
    year: "2021",
    title: "Titik Balik: Teguran Alam",
    desc: "Sebuah kenyataan pahit menghantam kami; dinobatkan sebagai 'Kampung Terkumuh dan Terkotor' se-Kelurahan Semplak. Predikat ini menjadi tamparan sekaligus alarm. Kami sadar, kebersihan bukan sekadar estetika, melainkan pondasi harga diri wilayah.",
  },
  {
    year: "2022",
    title: "Dari Limbah Menjadi Berkah",
    desc: "Kami mulai melihat 'permata tersembunyi' di sungai kami. Dibentuklah Kompepar (Kelompok Penggerak Pariwisata) Sicapit, menyatukan pemuda dan pengurus RW untuk mengintegrasikan kebersihan lingkungan dengan wisata berbasis pemberdayaan masyarakat.",
  },
  {
    year: "Kini",
    title: "Filosofi Sisi Cai Cidepit",
    desc: "Nama 'Sicapit' adalah singkatan berbahasa Sunda: Pinggiran Air Sungai Cidepit. Logo kepiting kami pilih sebagai pengingat sejarah lokal bahwa aliran sungai ini dahulu adalah habitat alami kepiting yang tak ternilai, kekayaan ekosistem yang harus terus dijaga.",
  }
];

export function VillageStory() {
  return (
    <div className="max-w-5xl mx-auto mt-16 md:mt-24">
      <ScrollReveal>
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent border border-brand/20 mb-16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          <svg className="w-10 h-10 text-brand/40 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
          <p className="text-xl md:text-2xl text-center text-slate-200 font-medium italic mt-4 mb-4 leading-relaxed relative z-10 px-4 md:px-8">
            &quot;Sicapit adalah bukti nyata bahwa sebuah predikat buruk bukanlah akhir dari segalanya, melainkan awal dari sebuah transformasi besar jika ada kemauan untuk bergerak bersama.&quot;
          </p>
        </div>
      </ScrollReveal>

      <div className="relative border-l-2 border-line ml-4 md:ml-0 md:border-l-0">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-line -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <ScrollReveal key={index}>
              <div className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Center dot for desktop, left dot for mobile */}
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 rounded-full bg-brand shadow-[0_0_10px_rgba(22,163,74,0.8)] md:-translate-x-1/2 mt-1.5 md:mt-0 top-0 md:top-auto z-10"></div>
                
                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <span className="inline-block py-1 px-3 rounded-full bg-surface-strong border border-line text-brand text-xs font-bold tracking-widest mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}


