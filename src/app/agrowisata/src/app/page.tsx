'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TreePine, BookOpen, MapPin, Users, Heart, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-kampung.png" alt="Kampung Wisata Indonesia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/30">
                <TreePine className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Selamat Datang di<br />
              <span className="text-emerald-400">Kampung Wisata</span> Indonesia
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Platform edukasi dan informasi lengkap tentang kampung wisata di Indonesia. Jelajahi keindahan budaya, tradisi, dan alam desa.
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:shadow-xl hover:shadow-emerald-600/40"
              onClick={() => window.location.href = '/edukasi'}
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Buka Halaman Edukasi
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-emerald-700 border-emerald-300 bg-emerald-50">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Kenapa Kampung Wisata?
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pesona Desa yang Tak Terbatas
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kampung wisata menyimpan kekayaan alam, budaya, dan kuliner yang siap dijelajahi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: '2,000+ Kampung', desc: 'Desa wisata tersebar di seluruh Indonesia dengan karakteristik unik masing-masing.' },
              { icon: Users, title: '34 Provinsi', desc: 'Program desa wisata aktif di hampir seluruh provinsi dari Sabang hingga Merauke.' },
              { icon: Heart, title: 'Berkelanjutan', desc: 'Pariwisata yang ramah lingkungan dan memberdayakan masyarakat lokal secara langsung.' },
              { icon: BookOpen, title: 'Edukatif', desc: 'Pengalaman wisata yang kaya akan pembelajaran budaya, pertanian, dan tradisi.' },
            ].map((item, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-base font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Edukasi */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ingin Tahu Lebih Lanjut?
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Kunjungi halaman edukasi kami untuk mempelajari segala hal tentang kampung wisata Indonesia secara lengkap dan mendalam.
          </p>
          <Button
            size="lg"
            className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl shadow-lg transition-all"
            onClick={() => window.location.href = '/edukasi'}
          >
            Ke Halaman Edukasi
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
