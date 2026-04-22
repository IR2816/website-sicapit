'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HeartPulse, Backpack, Flame } from 'lucide-react';

const items = [
  {
    icon: HeartPulse,
    title: 'Kondisi Tubuh Fit',
    description: 'Pastikan kondisi tubuh sehat dan tidak sedang dalam pengobatan serius.',
  },
  {
    icon: Backpack,
    title: 'Bawa Peralatan',
    description: 'Pakaian ganti, handuk, tabir surya, dan sepatu air yang nyaman.',
  },
  {
    icon: Flame,
    title: 'Semangat Petualangan',
    description: 'Siapkan mental dan nikmati setiap detik seru di arung jeram!',
  },
];

export default function AdventureReady() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/20 text-brand ring-1 ring-emerald-500/30 shadow-[0_0_15px_rgba(22,163,74,0.2)] text-sm font-semibold mb-4">
            Checklist
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            Siap <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#4ade80] to-brand">Petualangan?</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Pastikan semuanya siap sebelum memulai serunya arung jeram di Kampung Sicapit!
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-[#0d1117] border border-white/5 hover:border-brand/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-500"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand shadow-emerald-500/30 ring-1 ring-emerald-400/50 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-full shadow-lg shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-xl hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] hover:scale-105 transition-all duration-300"
          >
            <Flame className="w-5 h-5" />
            Ayo Mulai Petualangan!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
