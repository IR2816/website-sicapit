'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Waves, Utensils, Palette, TreePine, Users, Award, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Lokasi Strategis',
    description: 'Berlokasi di Kelurahan Semplak, Kecamatan Bogor Barat, hanya sekitar 10 km dari pusat Kota Bogor. Akses mudah dijangkau dengan kendaraan pribadi maupun umum.',
  },
  {
    icon: Waves,
    title: 'Rafting & River Tubing',
    description: 'Nikmati serunya arung jeram dan river tubing di Sungai Cisadane dengan pemandangan alam yang asri. Tersedia berbagai tingkat kesulitan untuk semua kalangan.',
  },
  {
    icon: Utensils,
    title: 'Wisata Kuliner',
    description: 'Temukan ragam kuliner khas Bogor yang lezat setelah seharian berpetualang. Dari makanan tradisional hingga jajanan khas lokal tersedia di area wisata.',
  },
  {
    icon: Palette,
    title: 'Kesenian Lokal',
    description: 'Saksikan pertunjukan kesenian dan budaya lokal yang menjadi daya tarik tersendiri. Perpaduan wisata alam dan budaya yang autentik khas Bogor.',
  },
  {
    icon: TreePine,
    title: 'Suasana Alam Asri',
    description: 'Dikelilingi pepohonan hijau dan udara segar yang menyegarkan. Lingkungan alam yang terjaga membuat pengalaman wisata Anda semakin menyenangkan.',
  },
  {
    icon: Users,
    title: 'Menggerakkan Ekonomi',
    description: 'Kehadiran Kampung Sicapit membuka peluang usaha bagi masyarakat sekitar, mulai dari homestay, warung makan, hingga jasa pemandu lokal.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tentang" ref={ref} className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 p-8 sm:p-10 lg:p-14 mb-14"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10  rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10  rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10  rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-white/10  rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-emerald-200 text-sm font-semibold">Tentang Destinasi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Selamat Datang di <br className="hidden sm:block" />
              <span className="text-emerald-400">Kampung Sicapit</span>
            </h2>

            <p className="text-lg sm:text-xl text-emerald-100 leading-relaxed max-w-3xl">
              Kampung Sicapit adalah wisata air yang berlokasi di <strong className="text-white">Kelurahan Semplak, Kecamatan Bogor Barat, Kota Bogor</strong>, sekitar 10 km dari pusat kota. Destinasi ini menawarkan aktivitas rafting dan river tubing di Sungai Cisadane, serta didukung wisata kuliner, kesenian lokal, dan suasana alam yang asri. Kehadiran wisata ini juga membantu meningkatkan perekonomian masyarakat sekitar.
            </p>

            <p className="text-lg sm:text-xl text-emerald-100 leading-relaxed max-w-3xl mt-4">
              Dengan <strong className="text-emerald-400">tim pemandu bersertifikat</strong> dan <strong className="text-emerald-400">peralatan berstandar keselamatan tertinggi</strong>, kami menawarkan pengalaman arung jeram yang aman, seru, dan berkesan di sungai-sungai terindah Indonesia.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {[' rafting', 'River Tubing', 'Wisata Kuliner', 'Kesenian Lokal', 'Alam Asri'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-white/10  backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-[#0d1117] hover:bg-[#0d1117] border border-white/5 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-[#0d1117] to-[#121820] p-8 sm:p-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="p-3 bg-emerald-600 rounded-xl shadow-lg shadow-emerald-600/20">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div className="p-3 bg-brand rounded-xl shadow-lg shadow-emerald-500/20">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-slate-300 leading-relaxed">
                Dengan <strong className="text-emerald-400">tim pemandu bersertifikat</strong> dan <strong className="text-emerald-400">peralatan berstandar keselamatan tertinggi</strong>, kami menawarkan pengalaman arung jeram yang aman, seru, dan berkesan di sungai-sungai terindah Indonesia.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
