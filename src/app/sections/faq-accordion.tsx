"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";

const faqs = [
  {
    question: "Di mana letak persisnya Kampung Sicapit?",
    answer: "Kampung Wisata Sicapit terletak di Bogor. Anda bisa mengikuti panduan rute melalui peta interaktif yang ada di bagian bawah laman ini untuk mencapai titik kumpul yang telah kami sediakan.",
  },
  {
    question: "Apakah area wisata ini bisa dikunjungi tanpa reservasi?",
    answer: "Anda bisa datang kapan saja untuk sekadar mampir (walk-in). Namun untuk aktivitas berkelompok seperti rafting, edukasi budaya, atau reservasi kemah, kami sangat menyarankan untuk Booking/Reservasi terlebih dahulu untuk memastikan kesediaan.",
  },
  {
    question: "Berapa kapasitas maksimal untuk rombongan besar?",
    answer: "Kami dapat melayani rombongan keluarga besar hingga korporat dengan kapasitas hingga ratusan peserta sekaligus. Harap menghubungi salah satu narahubung kami jauh-jauh hari agar kami bisa merencanakan penyambutan dan tempat istirahat dengan layak.",
  },
  {
    question: "Apa saja fasilitas umum yang tersedia?",
    answer: "Terdapat area bersantai, kamar bilas dan mandi (terutama setelah rafting/bermain air), lahan parkir untuk mobil/motor pribadi, mushola kecil yang cukup untuk beribadah harian, serta warung lokal untuk membeli sekadar minum dan jajan.",
  },
  {
    question: "Apakah aman untuk anak kecil atau lansia?",
    answer: "Sangat bersahabat. Area Farm dan Edukasi dikondisikan landai dan aman. Namun bagi lansia yang ingin sekadar berjalan di tepi sungai perlu ekstra hati-hati pada batu-batuan yang berlumut.",
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-12 bg-surface p-6 md:p-8 rounded-3xl border border-line">
      {faqs.map((faq, index) => (
        <ScrollReveal key={index}>
          <div className={`border-b border-line last:border-b-0 ${index === 0 ? 'mt-0' : 'mt-2'}`}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-6 flex items-center justify-between text-left group"
            >
              <h3 className={`font-heading text-lg font-bold pr-6 transition-colors duration-300 ${openIndex === index ? 'text-brand' : 'text-slate-200 group-hover:text-brand/80'}`}>
                {faq.question}
              </h3>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-brand bg-brand text-white rotate-180 shadow-[0_0_15px_rgba(22,163,74,0.5)]' 
                    : 'border-line text-slate-400 group-hover:border-brand/40 group-hover:text-brand'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'
              }`}
            >
              <p className="text-muted-foreground leading-relaxed pr-10 text-sm md:text-base border-l-2 border-brand/30 pl-4 py-1">
                {faq.answer}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}


