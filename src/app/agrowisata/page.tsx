'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TreePine, BookOpen, MapPin, Heart, Sparkles, Leaf, ChevronRight, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SiteNav } from '@/app/sections/site-nav'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
}

export default function AgrowisataHome() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-emerald-500/30">
      <SiteNav brand="Sicapit" />
      
      <main className="flex flex-col pt-16">
        {/* --- HERO SECTION --- */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image 
                src="/hero-kampung.png" 
                alt="Agrowisata Indonesia" 
                fill 
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/10 dark:bg-white/10 backdrop-blur-md border border-line dark:border-white/20 text-foreground/90 dark:text-white/90">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium tracking-wide">Pusat Informasi Agrowisata</span>
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground dark:text-white tracking-tight leading-[1.1]">
                Menyatu dengan <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Alam Tradisi</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg sm:text-xl text-foreground/80 dark:text-white/80 max-w-2xl mx-auto leading-relaxed">
                Jelajahi keindahan budaya, sistem pertanian berkelanjutan, dan kearifan lokal pedesaan Indonesia secara interaktif.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all hover:scale-105 w-full sm:w-auto font-semibold group"
                  asChild
                >
                  <Link href="/agrowisata/pertanian">
                    <TreePine className="mr-2 w-5 h-5 transition-transform group-hover:-rotate-12" />
                    Mulai Eksplorasi
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 text-white border-white/20 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all w-full sm:w-auto font-medium group"
                  asChild
                >
                  <Link href="#informasi">
                    Pelajari Ciri Khas
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10" />
        </section>

        {/* --- QUICK INFO SECTION --- */}
        <section id="informasi" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-emerald-600 dark:text-emerald-400 border-emerald-600/30 bg-emerald-500/10 rounded-full font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Daya Tarik Agrowisata
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-foreground">
                Harmoni Sempurna Alam & Manusia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Setiap kampung wisata menyimpan ekosistem luar biasa yang siap memberikan pengalaman dan pemahaman baru bagi para penjelajah sejati.
              </p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: MapPin, title: 'Tersebar Luas', desc: 'Ribuan desa wisata asri dengan keunikannya di penjuru Nusantara.', color: 'from-blue-500/20 to-cyan-500/20', iconColor: 'text-blue-500' },
                { icon: Sun, title: 'Iklim Tropis', desc: 'Mendukung ragam flora & fauna eksotis yang bisa dipelajari sepanjang bulan.', color: 'from-amber-500/20 to-orange-500/20', iconColor: 'text-amber-500' },
                { icon: Heart, title: 'Ekonomi Lokal', desc: 'Memberdayakan warga lokal langsung demi pariwisata yang mandiri.', color: 'from-rose-500/20 to-pink-500/20', iconColor: 'text-rose-500' },
                { icon: BookOpen, title: 'Wawasan Praktis', desc: 'Belajar langsung rekreasi, agrikultur, dan tradisi otentik.', color: 'from-emerald-500/20 to-teal-500/20', iconColor: 'text-emerald-500' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="h-full border-border/50 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 overflow-hidden group">
                    <CardHeader className="pb-4 relative">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center bg-background shadow-sm border border-border/50 mb-4 group-hover:scale-110 transition-transform duration-500">
                        <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-32 relative overflow-hidden bg-emerald-950/20 mt-10 rounded-t-[3rem] sm:rounded-t-[5rem] mx-2 sm:mx-6 mb-6 border border-emerald-900/30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Siap untuk Petualangan Edukatif?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Kami telah merangkum kegiatan agrowisata untuk berbagai pengalaman bertani, kerajinan tangan, hingga memetik hasil alam.
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-7 text-lg rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 group"
              asChild
            >
              <Link href="/agrowisata/wisata-alam">
                Jelajahi Sekarang
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
