'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Apakah saya perlu pengalaman rafting sebelumnya?',
    answer: 'Tidak perlu! Tersedia paket untuk semua tingkat pengalaman. Pemandu kami akan memberikan briefing lengkap dan pelatihan teknik dasar sebelum memulai.',
  },
  {
    question: 'Apakah peralatan rafting sudah termasuk?',
    answer: 'Ya, semua paket sudah termasuk peralatan lengkap seperti helm, pelampung, dayung, dan perahu karet. Semua peralatan memenuhi standar keselamatan dan diperiksa secara rutin.',
  },
  {
    question: 'Bagaimana jika cuaca buruk pada hari yang dijadwalkan?',
    answer: 'Keselamatan prioritas utama kami. Jika kondisi tidak memungkinkan, kami akan menjadwalkan ulang tanpa biaya tambahan atau memberikan refund penuh.',
  },
  {
    question: 'Berapa batasan usia peserta?',
    answer: 'Minimal usia 7 tahun untuk semua paket. Peserta harus dalam kondisi sehat dan tidak memiliki riwayat penyakit jantung atau epilepsi.',
  },
  {
    question: 'Berapa jumlah peserta minimum?',
    answer: 'Minimal 10 orang per rombongan. Untuk pemesanan individu, kami biasanya menggabungkan Anda dengan rombongan lain.',
  },
  {
    question: 'Apa yang harus dibawa?',
    answer: 'Bawa pakaian ganti, handuk, tabir surya, dan sepatu air. Jangan membawa barang berharga karena berisiko basah. Kami menyediakan tempat penyimpanan yang aman.',
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/20 text-brand ring-1 ring-emerald-500/30 shadow-[0_0_15px_rgba(22,163,74,0.2)] text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            Pertanyaan <span className="text-brand">Umum</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan rafting kami.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl border border-white/10 overflow-hidden hover:border-emerald-500/50 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="font-semibold text-slate-100 pr-4 group-hover:text-emerald-400 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
