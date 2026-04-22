'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, Users, MapPin, Award } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/raftinghero/1920/1080"
          alt="Arung Jeram - Rapid Rush"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
      </div>

      {/* Animated Water Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#0a0a0a]/ rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0a]/ backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Petualangan #1 di Indonesia
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-emerald-300 font-semibold mb-2"
        >
          Rafting Kampung <span className="text-brand">siCapit</span>
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-tight mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter"
        >
          Rasakan Adrenalin
          <br />
          <span className="text-emerald-400">Arung Jeram</span> Terbaik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8"
        >
          Nikmati pengalaman rafting yang mendebarkan dengan keamanan tertinggi.
          Pemandu profesional, peralatan berkualitas, dan pemandangan alam yang memukau menanti Anda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            onClick={() => scrollToSection('#paket')}
            size="lg"
            className="bg-brand hover:-translate-y-1 shadow-[0_0_30px_rgba(22,163,74,0.4)] text-white font-bold text-lg px-8 py-6 transition-all duration-300"
          >
            Lihat Paket Rafting
          </Button>
          <Button
            onClick={() => scrollToSection('#tentang')}
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-[#0a0a0a]/ font-semibold text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
          >
            Pelajari Lebih Lanjut
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-5 sm:gap-8"
        >
          {[
            { icon: Shield, value: '100%', label: 'Aman' },
            { icon: MapPin, value: '27Km', label: 'Jalur Sungai' },
            { icon: Award, value: '✓', label: 'Sertifikat' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0a0a0a]/ backdrop-blur-sm border border-white/20">
              <stat.icon className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white leading-none">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80 mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('#tentang')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,100 L0,100 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>
    </section>
  );
}
