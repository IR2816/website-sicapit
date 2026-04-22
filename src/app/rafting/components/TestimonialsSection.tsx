'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rina Wijaya',
    rating: 5,
    time: '2 minggu lalu',
    text: 'Seru banget rafting di sini! Pemandunya profesional, jeramnya mantap, pemandangannya cakep. Pasti balik lagi!',
    avatar: 'R',
    bgColor: 'bg-[#0d1117]0',
    likes: 24,
    replied: false,
  },
  {
    name: 'Budi Santoso',
    rating: 5,
    time: '1 bulan lalu',
    text: 'Team building rafting bareng kantor, semuanya puas! Organisasi rapi dari mulai penjemputan sampai makan siang. Recommended!',
    avatar: 'B',
    bgColor: 'bg-blue-500',
    likes: 18,
    replied: true,
  },
  {
    name: 'Sarah Kim',
    rating: 5,
    time: '3 minggu lalu',
    text: 'Amazing rafting experience! Scenerynya bagus banget dan pemandunya bikin aman. Cocok banget buat pemula kayak saya.',
    avatar: 'S',
    bgColor: 'bg-pink-500',
    likes: 31,
    replied: true,
  },
  {
    name: 'Tom Henderson',
    rating: 5,
    time: '3 hari lalu',
    text: 'Sudah rafting di banyak negara, tapi ini yang paling unik! Pemandangan sungai vulkaniknya kelas dunia. Sangat direkomendasikan!',
    avatar: 'T',
    bgColor: 'bg-[#0a0a0a]0',
    likes: 42,
    replied: false,
  },
  {
    name: 'Dian Pratama',
    rating: 5,
    time: '1 minggu lalu',
    text: 'Pertama kali rafting dan langsung ketagihan! Guide-nya sabar banget ngajarin, makanannya enak. Worth it banget harganya!',
    avatar: 'D',
    bgColor: 'bg-orange-500',
    likes: 15,
    replied: false,
  },
];

const ratingDistribution = [
  { stars: 5, percent: 100 },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 272 92" className="h-5 w-auto" fill="none">
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25c6.2 0 10.57 2.44 13.88 5.63l-3.91 3.91C101.12 31.36 98.02 29 93.5 29c-8.98 0-15.99 7.24-15.99 18.18 0 10.94 7.01 18.18 15.99 18.18 5.82 0 9.13-2.34 11.25-4.46 1.74-1.74 2.88-4.24 3.33-7.66H93.5v-3.94h22.25z" fill="#4285F4"/>
      <path d="M163.39 47.18c0 12.46-9.66 22.18-21.57 22.18-11.91 0-21.57-9.72-21.57-22.18 0-12.54 9.66-22.18 21.57-22.18 11.91 0 21.57 9.64 21.57 22.18zm-9.44 0c0-8.78-6.37-14.79-12.13-14.79-5.76 0-12.13 6.01-12.13 14.79 0 8.71 6.37 14.79 12.13 14.79 5.76 0 12.13-6.08 12.13-14.79z" fill="#EA4335"/>
      <path d="M209.75 47.18c0 12.46-9.66 22.18-21.57 22.18-11.91 0-21.57-9.72-21.57-22.18 0-12.54 9.66-22.18 21.57-22.18 11.91 0 21.57 9.64 21.57 22.18zm-9.44 0c0-8.78-6.37-14.79-12.13-14.79-5.76 0-12.13 6.01-12.13 14.79 0 8.71 6.37 14.79 12.13 14.79 5.76 0 12.13-6.08 12.13-14.79z" fill="#FBBC05"/>
      <path d="M244.62 26.06v41.66c0 16.38-9.66 23.06-21.08 23.06-10.75 0-17.21-7.19-19.63-13.07l8.18-3.4c1.52 3.63 5.23 7.91 11.45 7.91 7.49 0 12.13-4.63 12.13-13.35v-3.04h-.35c-2.24 2.76-6.55 5.17-12 5.17-11.39 0-21.83-9.93-21.83-22.08 0-12.22 10.44-22.26 21.83-22.26 5.44 0 9.76 2.41 12 5.24h.35v-3.84h8.95zm-8.72 21.24c0-8.58-5.73-14.84-13.03-14.84-7.38 0-13.57 6.26-13.57 14.84 0 8.49 6.19 14.62 13.57 14.62 7.3 0 13.03-6.13 13.03-14.62z" fill="#4285F4"/>
      <path d="M34.83 14.28v3.94H19.89V14.28h14.94z" fill="#34A853"/>
      <path d="M42.26 37.64V29.2c0-6.26-2.66-8.71-6.58-8.71-3.41 0-5.86 2.38-5.86 6.82v10.33h-3.94V29.2c0-6.26-2.59-8.71-6.58-8.71-3.34 0-5.86 2.38-5.86 6.82v10.33h-3.94V16.98h3.94v4.07h.08c.87-1.56 2.98-4.56 7.18-4.56 3.89 0 6.35 2.31 7.46 4.85h.12c1.11-1.75 3.57-4.85 7.77-4.85 5.01 0 8.18 3.21 8.18 9.66v11.49h-3.97z" fill="#34A853"/>
    </svg>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimoni" ref={ref} className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Reviews Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-8 mb-12 p-6 sm:p-8 bg-[#0d1117] rounded-2xl border border-white/5"
        >
          {/* Left - Rating */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <GoogleLogo />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-bold text-slate-100">5.0</span>
              <span className="text-lg text-slate-400">/5</span>
            </div>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-emerald-400" />
              ))}
            </div>
            <p className="text-sm text-slate-400">Berdasarkan <strong className="text-slate-300">2.847</strong> ulasan</p>
          </div>

          {/* Right - Distribution */}
          <div className="flex-1 w-full max-w-md space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="text-sm text-slate-400 w-3">{item.stars}</span>
                <Star className="w-4 h-4 fill-amber-400 text-emerald-400 flex-shrink-0" />
                <div className="flex-1 h-2.5 bg-[#1e242d] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.percent}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-amber-400 rounded-full"
                  />
                </div>
                <span className="text-sm text-slate-400 w-10 text-right">{item.percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Ulasan Terbaru
          </h2>
        </motion.div>

        {/* Reviews - Google Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-[#0a0a0a] rounded-xl border border-white/10 p-5 hover:shadow-md transition-shadow duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-sm font-semibold">{review.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-100 text-sm">{review.name}</p>
                    <p className="text-xs text-slate-400">{review.time}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" fill="currentColor" opacity="0.4"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M12 6l1.09 3.26L16.5 9.82l-2.82 2.05.78 3.32L12 13.72 9.54 15.19l.78-3.32L7.5 9.82l3.41-.56L12 6z" fill="currentColor" opacity="0.6"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-emerald-400' : 'fill-gray-200 text-gray-200'}`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {review.text}
              </p>

              {/* Bottom row */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-slate-300 transition-colors group">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                  <span className="text-xs font-medium">{review.likes}</span>
                </button>
                {review.replied && (
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    Balasan pemilik
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Lihat semua ulasan di Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
