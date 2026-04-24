'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users, Zap, Star, Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'Paket Pamili',
    image: '/assets/images/rafting/2.jpeg',
    level: '7 Km',
    levelColor: 'bg--500/10 text--400',
    distance: '7 Km',
    price: 'Rp 150.000',
    pricePer: '/orang',
    description: 'Paket rafting santai untuk keluarga dan pemula. Nikmati keindahan alam Sungai Cisadane sambil mengarungi jeram-jeram kecil yang aman dan menyenangkan.',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
  },
  {
    name: 'Paket Konservasi',
    image: '/assets/images/rafting/3.jpeg',
    level: '12 Km',
    levelColor: 'bg--500/10 text--400',
    distance: '12 Km',
    price: 'Rp 200.000',
    pricePer: '/orang',
    description: 'Paket petualangan yang lebih panjang dengan jeram menantang. Cocok untuk mereka yang ingin menikmati sensasi rafting sekaligus menjaga kelestarian alam.',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
  },
  {
    name: 'Paket Petualangan',
    image: '/assets/images/rafting/4.jpeg',
    level: '27 Km',
    levelColor: 'bg--500/10 text--400',
    distance: '27 Km',
    price: 'Rp 350.000',
    pricePer: '/orang',
    description: 'Paket ekstrem untuk para pencari adrenalin sejati. Jarak terpanjang dengan jeram terberat dan pemandangan alam yang luar biasa indah.',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
  },
];

export default function PackagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="paket" ref={ref} className="py-20 lg:py-28 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg--500/10 text--400 text-sm font-semibold mb-4">
            Paket Rafting Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            Pilih Petualangan <span className="text-brand">Anda</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Kami menyediakan tiga pilihan paket rafting di Sungai Cisadane. Minimal 10 orang per rombongan.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 group flex flex-col"
            >
              {/* Top Accent Bar */}
              <div className={`h-1.5 w-full ${index === 0 ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : index === 1 ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 'bg-gradient-to-r from-red-400 to-red-500'}`} />

              {/* Package Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6 lg:p-8 flex flex-col flex-1">
                {/* Package Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-100">
                      {pkg.name}
                    </h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${pkg.levelColor}`}>
                      {pkg.level}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {pkg.description}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <Zap className="w-4 h-4" />
                    {pkg.distance}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <Users className="w-4 h-4" />
                    Min. 10 Orang
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 my-6" />

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-100">{pkg.price}</span>
                    <span className="text-sm text-slate-400">{pkg.pricePer}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Include</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <Check className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                        <span className="text-sm text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-base py-6 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-[1.02]"
                >
                  Pilih Paket
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
