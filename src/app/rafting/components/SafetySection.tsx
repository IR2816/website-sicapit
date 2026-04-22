'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, AlertTriangle, LifeBuoy, Users, Ban, ThermometerSun, HeartPulse, HandMetal } from 'lucide-react';

const safetyTips = [
  {
    icon: LifeBuoy,
    title: 'Wajib Pakai Pelampung',
    description: 'Selalu kenakan life jacket yang disediakan dengan benar sebelum naik perahu. Pastikan semua buckle terpasang rapat dan ukuran sesuai badan Anda.',
  },
  {
    icon: ShieldCheck,
    title: 'Dengarkan Briefing Pemandu',
    description: 'Perhatikan setiap instruksi dari pemandu sebelum memulai. Mereka akan mengajarkan teknik dayung, posisi duduk, dan cara menghadapi jeram.',
  },
  {
    icon: Ban,
    title: 'Jangan Berdiri di Perahu',
    description: 'Selalu duduk dengan kaki terlipat di dalam perahu saat mengarungi jeram. Berdiri bisa membuat perahu oleng dan menyebabkan terjatuh.',
  },
  {
    icon: HandMetal,
    title: 'Genggam Dayung dengan Benar',
    description: 'Pastikan kedua tangan selalu memegang dayung. Jangan melepas dayung saat melewati jeram agar tidak terbentur perahu atau teman.',
  },
  {
    icon: ThermometerSun,
    title: 'Gunakan Sunblock & Sepatu Air',
    description: 'Oleskan sunblock sebelum rafting karena terpapar matahari langsung. Gunakan sepatu air atau sandal yang menempel kuat di kaki.',
  },
  {
    icon: HeartPulse,
    title: 'Jaga Kondisi Fisik',
    description: 'Pastikan tubuh dalam keadaan sehat dan fit. Jangan rafting dalam keadaan lelah, mabuk, atau sedang mengonsumsi obat-obatan.',
  },
];

const emergencyTips = [
  {
    icon: AlertTriangle,
    title: 'Jatuh ke Air?',
    description: 'Tenang! Tetap mengapung dengan posisi kaki menghadap arus. Jangan panik, pemandu akan segera menolong Anda.',
  },
  {
    icon: Users,
    title: 'Perahu Terbalik?',
    description: 'Jauhi perahu yang terbalik, berenang ke tepian, dan tunggu instruksi pemandu. Tim rescue kami siap siaga setiap saat.',
  },
];

export default function SafetySection() {
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
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold mb-4">
            Keselamatan Prioritas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            Tips <span className="text-gradient">Keselamatan</span> Rafting
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Keamanan Anda adalah prioritas utama kami. Berikut hal-hal penting yang wajib diketahui sebelum rafting.
          </p>
        </motion.div>

        {/* Safety Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {safetyTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/10 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 flex items-center justify-center mb-4 transition-colors">
                <tip.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-bold text-slate-100 mb-2">{tip.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Emergency Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0a0a0a]/ rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0a0a0a]/ rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#0a0a0a]/ rounded-xl">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Tips Darurat
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {emergencyTips.map((tip, index) => (
                <div key={index} className="bg-[#0a0a0a]/ backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <tip.icon className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-bold text-white">{tip.title}</h4>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            <p className="text-white/70 text-sm mt-6">
              ⚠️ Semua pemandu kami terlatih dalam pertolongan pertama dan penanganan darurat di sungai.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
