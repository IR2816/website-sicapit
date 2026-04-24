'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const slides = [
  {
    src: '/assets/images/rafting/5.jpeg',
    alt: 'Momen rafting Kampung Sicapit',
    title: 'Menaklukkan Jeram',
    subtitle: 'Kekompakan tim di Sungai Cisadane',
  },
  {
    src: '/assets/images/rafting/6.jpeg',
    alt: 'Momen rafting Kampung Sicapit',
    title: 'Keindahan Alam',
    subtitle: 'Pemandangan spektakuler selama arung jeram',
  },
  {
    src: '/assets/images/rafting/7.jpeg',
    alt: 'Momen rafting Kampung Sicapit',
    title: 'Momen Kebersamaan',
    subtitle: 'Kenangan seru bersama di Kampung siCapit',
  },
  {
    src: '/assets/images/rafting/8.jpeg',
    alt: 'Momen rafting Kampung Sicapit',
    title: 'Petualangan Seru',
    subtitle: 'Tantangan dan kebahagiaan di setiap jeram',
  },
  {
    src: '/assets/images/rafting/9.jpeg',
    alt: 'Momen rafting Kampung Sicapit',
    title: 'Keseruan Tanpa Henti',
    subtitle: 'Tawa dan adrenalin menjadi satu',
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <section id="galeri" ref={ref} className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0a0a0a] text-teal-700 text-sm font-semibold mb-4">
            Galeri Foto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
            Momen <span className="text-gradient">Tak Terlupakan</span>
          </h2>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Slideshow Container */}
          <div className="relative overflow-hidden rounded-3xl aspect-square sm:aspect-video lg:aspect-[16/9] max-h-[70vh] mx-auto shadow-2xl shadow-black/10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={slides[currentSlide].src}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {slides[currentSlide].title}
                      </h3>
                      <p className="text-base sm:text-lg text-white/80 max-w-xl">
                        {slides[currentSlide].subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => { prevSlide(); setIsPlaying(false); }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0a0a0a]/ backdrop-blur-md hover:bg-[#0a0a0a]/ text-white flex items-center justify-center transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => { nextSlide(); setIsPlaying(false); }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0a0a0a]/ backdrop-blur-md hover:bg-[#0a0a0a]/ text-white flex items-center justify-center transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-3 sm:top-5 right-3 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a0a0a]/ backdrop-blur-md hover:bg-[#0a0a0a]/ text-white flex items-center justify-center transition-all duration-300 border border-white/20"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            {/* Slide Counter */}
            <div className="absolute top-3 sm:top-5 left-3 sm:left-5 px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-md text-white text-sm font-medium border border-white/10">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                  setIsPlaying(false);
                }}
                className="group relative"
              >
                <div
                  className={`transition-all duration-500 rounded-full ${
                    index === currentSlide
                      ? 'w-10 h-3 bg-[#0d1117]0'
                      : 'w-3 h-3 bg-gray-300 group-hover:bg-emerald-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-400 mb-4">Follow kami untuk lebih banyak momen seru!</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.tiktok.com/@kampung_sicapit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z"/>
              </svg>
              @kampung_sicapit
            </a>
            <a
              href="https://www.instagram.com/kampung_sicapit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              @kampung_sicapit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
