'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { SiteNav } from '../sections/site-nav'
import { raftingPackages } from '@/lib/data/rafting-packages'
import { BUSINESS_HOURS } from '@/lib/data/business-info'
// Security: Import validation functions
import { validateBookingForm, normalizePhoneForWhatsApp, sanitizeTextInput, encodeForURL } from '@/lib/validation'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// Icon yang dipakai saja (bebas dari unused warning)
import {
  Waves,
  Users,
  Star,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Heart,
  Award,
  Camera,
  TreePine,
  CheckCircle2,
  Trophy,
  CalendarDays,
  HelpCircle,
  Play,
  Droplets,
} from 'lucide-react'
import { reviews } from '@/lib/data/reviews'

// ==================== HERO SECTION ====================

function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()

  const isLight =
    mounted &&
    (theme === 'light' ||
      (theme === 'system' && systemTheme === 'light'))

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="beranda"
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/rafting/2.jpeg"
          alt="Rafting Adventure"
          fill
          priority
          quality={75}
          className="w-full h-full object-cover"
        />

        {mounted && (
          <div
            className={`absolute inset-0 ${
              isLight
                ? 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_32%),linear-gradient(135deg,rgba(10,10,10,0.78)_0%,rgba(10,10,10,0.52)_55%,rgba(10,10,10,0.82)_100%)]'
                : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),linear-gradient(135deg,rgba(6,6,6,0.82)_0%,rgba(6,6,6,0.56)_55%,rgba(6,6,6,0.88)_100%)]'
            }`}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          <div className="text-left max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Badge className="bg-brand/12 text-brand border-brand/25 px-4 py-2 text-sm mb-6 rounded-md shadow-none tracking-[0.16em] uppercase">
                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                Kelurahan Semplak, Bogor Barat
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="space-y-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/70">
                Wisata air, budaya, dan kampung hidup
              </p>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight">
                Petualangan
                <span className="block text-brand mt-3">Sicapit</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/78 max-w-2xl leading-relaxed">
                Arung jeram, river tubing, dan suasana kampung yang hidup dalam satu tempat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { icon: Waves, label: 'Rafting' },
                { icon: Droplets, label: 'River Tubing' },
                { icon: Heart, label: 'Kuliner' },
                { icon: Award, label: 'Budaya Lokal' },
              ].map((act, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white text-sm px-4 py-2 rounded-md"
                >
                  <act.icon className="w-4 h-4 text-brand" />
                  {act.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-brand text-white hover:bg-brand/90 px-8 py-7 text-lg rounded-2xl transition-colors font-bold group"
                onClick={() =>
                  document
                    .querySelector('#paket')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Lihat Paket Rafting
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-7 text-lg rounded-2xl backdrop-blur-sm font-bold bg-white/5"
                onClick={() =>
                  document
                    .querySelector('#galeri')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Camera className="w-5 h-5 mr-2" />
                Galeri Foto
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-3 max-w-2xl"
            >
              {[
                { value: '15,000+', label: 'Peserta puas' },
                { value: '12+', label: 'Tahun pengalaman' },
                { value: '4.9', label: 'Rating Google' },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/8 backdrop-blur-sm px-4 py-3 min-w-[140px]">
                  <div className="text-2xl font-heading font-extrabold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/10 bg-black/18 p-4 md:p-5 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(0,242,254,0.10),transparent_30%)] pointer-events-none" />
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-8 relative min-h-[320px] md:min-h-[520px] rounded-[28px] overflow-hidden border border-white/10">
                  <Image
                    src="/assets/images/rafting/4.jpeg"
                    alt="Rafting Sicapit"
                    fill
                    priority={false}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-md border border-white/15 bg-black/35 px-3 py-2 text-white text-xs uppercase tracking-[0.2em] font-mono">
                    Sungai Cisadane
                  </div>
                  <div className="absolute left-4 bottom-4 right-4">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-white/70 text-sm uppercase tracking-[0.2em] font-mono">Rute unggulan</p>
                        <p className="text-white font-heading text-2xl md:text-3xl font-bold">Arus, alam, dan kampung dalam satu frame.</p>
                      </div>
                      <div className="hidden sm:block rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-right backdrop-blur-md">
                        <p className="text-white/60 text-xs uppercase tracking-[0.2em]">Jarak</p>
                        <p className="text-white font-bold text-lg">27 km</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3">
                  <div className="rounded-[24px] border border-white/10 bg-white/8 backdrop-blur-md p-5 min-h-[150px] flex flex-col justify-between">
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-mono">Cocok untuk</p>
                      <p className="text-white font-heading text-2xl font-bold mt-2">Rombongan</p>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">Cocok untuk keluarga, sekolah, dan perusahaan.</p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/8 backdrop-blur-md p-5 min-h-[150px] flex flex-col justify-between">
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-mono">Kesan utama</p>
                      <p className="text-white font-heading text-2xl font-bold mt-2">Menantang</p>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">Visual kuat, hierarki jelas, dan alur scroll yang tenang.</p>
                  </div>

                  <div className="col-span-2 rounded-[24px] border border-white/10 bg-[#0f0f0f]/70 p-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-mono">Warna dominan</p>
                      <p className="text-white font-heading text-xl md:text-2xl font-bold mt-1">Air, tanah, merah</p>
                    </div>
                    <div className="flex -space-x-2">
                      <span className="w-7 h-7 rounded-full bg-[#00f2fe] border border-white/30" />
                      <span className="w-7 h-7 rounded-full bg-[#4A3728] border border-white/30" />
                      <span className="w-7 h-7 rounded-full bg-brand border border-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==================== ABOUT SECTION ====================

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: MapPin,
      title: 'Lokasi Strategis',
      desc: 'Hanya 10 km dari pusat Kota Bogor. Akses mudah dengan kendaraan pribadi maupun umum.',
    },
    {
      icon: Waves,
      title: 'Rafting & River Tubing',
      desc: 'Arung jeram & river tubing di Sungai Cisadane. Tersedia untuk semua tingkat kesulitan.',
    },
    {
      icon: Heart,
      title: 'Wisata Kuliner',
      desc: 'Ragam kuliner khas Bogor tersedia di area wisata, dari tradisional hingga jajanan lokal.',
    },
    {
      icon: Award,
      title: 'Kesenian Lokal',
      desc: 'Pertunjukan budaya autentik khas Bogor, perpaduan wisata alam dan budaya.',
    },
    {
      icon: TreePine,
      title: 'Suasana Alam Asri',
      desc: 'Dikelilingi pepohonan hijau dan udara segar untuk pengalaman wisata yang menyenangkan.',
    },
    {
      icon: Users,
      title: 'Menggerakkan Ekonomi',
      desc: 'Membuka peluang usaha masyarakat sekitar: homestay, warung, hingga jasa pemandu.',
    },
  ]

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/rafting/4.jpeg"
                alt="Keindahan Sungai Rafting"
                width={600}
                height={500}
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-surface rounded-xl shadow-xl p-4 lg:p-5 border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="font-bold text-brand text-lg">12+ Tahun</p>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">Pengalaman Rafting</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-brand border-brand/50 px-3 py-1 mb-4">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-6">
              Petualangan
              <span className="text-brand"> Kampung Sicapit</span>
            </h2>
            <p className="text-muted-foreground dark:text-slate-300 text-lg leading-relaxed mb-8">
              Kampung Sicapit menghadirkan rafting, river tubing, dan suasana kampung dalam satu pengalaman yang aman dan berkesan.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-3 p-4 rounded-xl hover:bg-brand/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <feature.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-white text-sm mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==================== PACKAGES SECTION ====================

interface PackagesSectionProps {
  onSelectPackage: (pkgName: string) => void
}

const PackagesSection = ({ onSelectPackage }: PackagesSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isOpenNow, setIsOpenNow] = useState(true)

  // Real-time Business Hours Status Detector
  useEffect(() => {
    const checkStatus = () => {
      try {
        const now = new Date()
        const currentHour = now.getHours()
        // Default rafting hours usually 08:00 - 17:00
        if (currentHour >= 8 && currentHour < 17) {
          setIsOpenNow(true)
        } else {
          setIsOpenNow(false)
        }
      } catch (_) {
        // Abaikan error parse jika terjadi di browser tua, default true
        setIsOpenNow(true) 
      }
    }
    checkStatus()
    const interval = setInterval(checkStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="paket" className="py-20 lg:py-28 bg-surface-strong" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-brand border-brand/50 px-3 py-1 mb-4">
            Paket Rafting
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pilih Paket <span className="text-brand">Petualangan</span> Anda
          </h2>
          <p className="text-muted-foreground dark:text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            Tersedia berbagai pilihan paket rafting yang disesuaikan untuk setiap tingkat 
            keahlian, dari yang baru pertama kali hingga yang sudah berpengalaman.
          </p>
          
          {/* Info Badges & Real-time Status */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-md border px-4 py-2 rounded-full text-sm font-medium text-foreground shadow-sm">
              {isOpenNow ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Buka Sekarang</span>
                </>
              ) : (
                <>
                  <span className="h-2 w-2 rounded-full bg-destructive"></span>
                  <span className="text-destructive font-bold">Tutup Sementara</span>
                </>
              )}
              <span className="text-muted-foreground">| {BUSINESS_HOURS.label}</span>
            </div>
            
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
              <Users className="w-4 h-4" />
              <span>Kapasitas: Minimal 10 Orang</span>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {raftingPackages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative h-full group ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-amber-500 text-white px-4 py-1 shadow-lg border-none animate-pulse">
                    Paling Populer
                  </Badge>
                </div>
              )}
              <Card className={`h-full overflow-hidden transition-all duration-300 flex flex-col justify-between bg-background/60 backdrop-blur-md ${
                pkg.popular
                  ? 'border-brand shadow-xl ring-2 ring-brand/20'
                  : 'border-black/10 dark:border-white/10 hover:border-brand/50'
              }`}>
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className={`${pkg.difficultyColor} border-0 px-3 py-1 text-white`}>
                        {pkg.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <pkg.icon className="w-5 h-5 text-brand" />
                      <span className="text-sm text-muted-foreground dark:text-slate-400">{pkg.subtitle}</span>
                    </div>
                    <CardTitle className="text-2xl text-foreground dark:text-white group-hover:text-brand transition-colors">{pkg.name}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground dark:text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {pkg.distance}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <div className="mb-4">
                      <span className="text-3xl font-extrabold text-brand">{pkg.price}</span>
                      <span className="text-muted-foreground dark:text-slate-400 text-sm"> /orang</span>
                    </div>
                    <div className="space-y-2">
                      {pkg.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="pt-0">
                  <Button
                    className={`w-full rounded-xl py-5 font-bold text-base transition-all ${
                      pkg.popular
                        ? 'bg-brand text-white hover:bg-brand/90 shadow-lg shadow-brand/20'
                        : 'bg-foreground text-background hover:bg-foreground/90'
                    }`}
                    onClick={() => onSelectPackage(pkg.name)}
                  >
                    Pesan Paket {pkg.name}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== GALLERY SECTION ====================

const slideshowImages = [
  '/assets/images/rafting/image.png',
  '/assets/images/rafting/imagee.png',
  '/assets/images/rafting/image-copy.png',
  '/assets/images/rafting/image-copy-2.png',
  '/assets/images/rafting/image-copy-3.png',
  '/assets/images/rafting/image-copy-4.png',
  '/assets/images/rafting/image-copy-5.png',
  '/assets/images/rafting/image-copy-6.png',
  '/assets/images/rafting/image-copy-7.png',
  '/assets/images/rafting/image-copy-8.png',
  '/assets/images/rafting/image-copy-9.png',
  '/assets/images/rafting/image-copy-10.png',
  '/assets/images/rafting/image-copy-11.png',
  '/assets/images/rafting/image-copy-12.png',
  '/assets/images/rafting/image-copy-13.png',
  '/assets/images/rafting/image-copy-14.png',
  '/assets/images/rafting/image-copy-15.png',
  '/assets/images/rafting/image-copy-16.png',
  '/assets/images/rafting/1.jpeg',
  '/assets/images/rafting/2.jpeg',
  '/assets/images/rafting/5.jpeg',
  '/assets/images/rafting/6.jpeg',
  '/assets/images/rafting/7.jpeg',
  '/assets/images/rafting/8.jpeg',
]

const bentoItemsLayout = [
  {
    src: '/assets/images/rafting/3.jpeg',
    title: 'Pemandu Ahli',
    tag: 'Tim Kami',
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/4.jpeg',
    title: 'Bersama Tim',
    tag: 'Keluarga',
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/7.jpeg',
    title: 'Arus Deras',
    tag: 'Aktivitas',
    colSpan: 'col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/6.jpeg',
    title: 'Petualangan Seru',
    tag: 'Aktivitas',
    colSpan: 'col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/1.jpeg',
    title: 'Aksi di Rapids',
    tag: 'Aktivitas',
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/5.jpeg',
    title: 'Mengayuh Bersama',
    tag: 'Aktivitas',
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    type: 'image',
  },
]

const videoItems = [
  // Hapus "/rafting" karena di struktur Anda, folder videos langsung di bawah public/assets/
  { src: '/assets/rafting/videos/Jeram-Bagol.webm', title: 'Jeram Bagol', tag: 'Video' },
  { src: '/assets/rafting/videos/Konservasi.webm', title: 'Konservasi', tag: 'Video' },
  { src: '/assets/rafting/videos/Rafting.webm', title: 'Aksi di Air', tag: 'Video' },
  { src: '/assets/rafting/videos/Video.webm', title: 'Keseruan Rafting', tag: 'Video' },
  { src: '/assets/rafting/videos/Rafting_1.webm', title: 'Petualangan Sungai', tag: 'Video' },
  { src: '/assets/rafting/videos/Rafting_2.webm', title: 'Tantangan Arus', tag: 'Video' },
]

function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [isPaused])

  const tagColors: Record<string, string> = {
    'Aktivitas': 'bg-brand text-white',
    'Lanskap': 'bg-amber-500 text-white',
    'Tim Kami': 'bg-sky-500 text-white',
    'Keluarga': 'bg-rose-500 text-white',
    'Video': 'bg-purple-500 text-white',
  }

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-surface-strong" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-brand border-brand/50 px-3 py-1 mb-4">
            Galeri Foto
          </Badge>
          {/* UBAH DI BARIS INI: Menggunakan text-foreground agar gelap di light mode, dan putih di dark mode */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-4">
            Momen <span className="text-brand">Tak Terlupakan</span>
          </h2>
          {/* UBAH JUGA DI SINI: text-muted-foreground agar teks deskripsi adaptif */}
          <p className="text-muted-foreground dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Potret singkat petualangan rafting dan suasana kampung.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-2 sm:gap-4"
        >
          {/* Slideshow Card */}
          <div 
            className="relative group overflow-hidden rounded-2xl md:rounded-3xl col-span-2 row-span-2 shadow-lg bg-black cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {slideshowImages.map((src, i) => (
              <AnimatePresence key={src}>
                {slideIndex === i && (
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    src={src}
                    alt={`Slideshow ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-contain"
                    onClick={() => setSelectedImg(src)}
                  />
                )}
              </AnimatePresence>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute top-4 left-4 z-10">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md bg-white/20 text-white border border-white/30">
                Sorotan Utama
              </span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setSlideIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length) }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors z-10"
            >
              ❮
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSlideIndex((prev) => (prev + 1) % slideshowImages.length) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors z-10"
            >
              ❯
            </button>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
              <motion.div
                className="h-full bg-brand"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.5, ease: 'linear' }}
                key={slideIndex}
              />
            </div>
          </div>

          {/* Static Bento Tiles */}
          {bentoItemsLayout.map((item, i) => (
            <div
              key={i}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl shadow-md ${item.colSpan} ${item.rowSpan}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setSelectedImg(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                  hoveredIdx === i ? 'scale-105 brightness-90' : 'scale-100 brightness-100'
                }`}
               loading="lazy" />
              <div className="absolute top-4 left-4 z-10">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md border border-black/10 dark:border-white/10 ${tagColors[item.tag] || 'bg-black/40 text-white'}`}>
                  {item.tag}
                </span>
              </div>
              <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent ${hoveredIdx === i ? 'opacity-100' : 'opacity-0'}`} />
              <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ${hoveredIdx === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <div className="flex items-center gap-2 text-brand">
                  <Camera className="w-4 h-4" />
                  <span className="text-sm font-medium">Lihat Detail</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Video Showcase */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videoItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md aspect-video bg-black"
              onClick={() => setSelectedImg(item.src)}
              whileHover={{ scale: 1.02 }}
            >
              <video src={item.src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" muted loop playsInline autoPlay />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-brand/90 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 left-3 text-white font-bold text-sm bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dialog Preview */}
        <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
          <DialogContent className="max-w-4xl bg-black/95 border-none text-white p-2">
            <DialogHeader className="sr-only">
              <DialogTitle>Preview</DialogTitle>
              <DialogDescription>Media Preview</DialogDescription>
            </DialogHeader>
            {selectedImg && (
              <div className="relative w-full flex items-center justify-center">
                {selectedImg.endsWith('.mp4') || selectedImg.endsWith('.webm') ? (
                  <video src={selectedImg} controls autoPlay className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
                ) : (
                  <img src={selectedImg} alt="Preview" className="w-full h-auto max-h-[80vh] object-contain rounded-lg"  loading="lazy" />
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

// ==================== TESTIMONIALS SECTION ====================

function TestimonialsSection() {
  const customerReviews = reviews.map((review) => ({
    name: review.author,
    rating: review.rating,
    text: review.text,
    date: review.time,
    avatar: review.author.charAt(0),
    bgColor: 'bg-brand/20',
    source: 'Google Reviews',
  }))

  return (
    <section id="testimoni" className="py-20 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-brand border-brand/50 px-3 py-1 mb-4">
          Testimoni
        </Badge>
          <h2 className="text-3xl font-bold text-foreground dark:text-white">Ulasan Pengunjung</h2>
      </div>
      <div className="flex gap-6 animate-marquee whitespace-nowrap w-max px-4">
        {customerReviews.map((rev, i) => (
          <Card key={i} className="w-[300px] shrink-0 inline-block whitespace-normal p-5 border border-muted/50 bg-background/50 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-brand ${rev.bgColor}`}>
                {rev.avatar}
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground">{rev.name}</h4>
                <p className="text-xs text-muted-foreground">{rev.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5 text-amber-500 mb-2">
              {[...Array(rev.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-amber-500" />)}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">&quot;{rev.text}&quot;</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

// ==================== FAQ SECTION ====================

const faqs = [
  {
    q: 'Apakah aman untuk pemula yang tidak bisa berenang?',
    a: 'Sangat aman. Peserta memakai pelampung, helm, dan didampingi pemandu bersertifikat.',
    icon: HelpCircle,
    tag: 'Keamanan',
  },
  {
    q: 'Berapa jumlah minimal peserta untuk booking?',
    a: 'Ideal 4-6 orang per perahu, dan booking disarankan untuk grup 10 orang atau lebih.',
    icon: CalendarDays,
    tag: 'Persiapan',
  },
]

function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-20 bg-surface" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-brand border-brand/50 px-3 py-1 mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold text-foreground dark:text-white">FAQ Singkat</h2>
        </motion.div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-4 bg-background/50">
              <AccordionTrigger className="hover:no-underline font-bold text-foreground">
                <div className="flex items-center gap-3 text-left">
                  <faq.icon className="w-5 h-5 text-brand shrink-0" />
                  {faq.q}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

// ==================== MAIN PAGE COMPONENT ====================

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    pax: 10,
    date: '',
    notes: '',
    documentation: false,
  })

  // Derived state untuk kalkulator biaya langsung (Tanpa useEffect)
  const selectedPkgData = raftingPackages.find(
    (p) => p.name.toLowerCase().includes(formData.package.toLowerCase()) || 
           formData.package.toLowerCase().includes(p.name.toLowerCase())
  )
  
  const basePrice = selectedPkgData ? parseInt(selectedPkgData.price.replace(/\D/g, '')) || 185000 : 185000
  const paxCount = Math.max(1, formData.pax)
  const docPrice = formData.documentation ? 150000 : 0
  
  const estimatedTotal = (basePrice * paxCount) + docPrice

  const handleSelectPackageDirectly = (pkgName: string) => {
    setFormData((prev) => ({ ...prev, package: pkgName }))
    document.querySelector('#booking-form')?.scrollIntoView({ behavior: 'smooth' })
  }

const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault()
    
    // SECURITY: Validate all form inputs before processing
    const validation = validateBookingForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      package: formData.package,
      pax: formData.pax,
      date: formData.date,
      documentation: formData.documentation,
    })
    
    if (!validation.valid) {
      // Show validation errors
      const errorMessages = Object.values(validation.errors).join('\n')
      alert(`Mohon perbaiki kesalahan berikut:\n\n${errorMessages}`)
      return
    }
    
    // SECURITY: Normalize phone number for WhatsApp
    const normalizedPhone = normalizePhoneForWhatsApp(formData.phone)
    if (!normalizedPhone) {
      alert('Nomor telepon tidak valid. Mohon gunakan format 08xx atau +62xx')
      return
    }
    
    // SECURITY: Sanitize user inputs to prevent injection
    const sanitizedName = sanitizeTextInput(formData.name, 100)
    const sanitizedEmail = sanitizeTextInput(formData.email, 254)
    const sanitizedNotes = sanitizeTextInput(formData.notes, 500)
    const sanitizedPackage = sanitizeTextInput(formData.package, 100)
    
    const formattedTotal = estimatedTotal.toLocaleString('id-ID')
    const docText = formData.documentation ? 'Ya (Premium DSLR/Action Cam)' : 'Tidak'

    // SECURITY: Use sanitized values in message, avoid direct user input injection
    const message = 
      `Halo Wisata Air Kampung Sicapit!\n\n` +
      `Saya ingin mengajukan booking petualangan dengan data berikut:\n` +
      `• Nama: ${sanitizedName}\n` +
      `• No. WA: ${formData.phone}\n` +
      `• Email: ${sanitizedEmail}\n` +
      `• Paket Pilihan: ${sanitizedPackage || 'Belum Memilih'}\n` +
      `• Jumlah Peserta: ${formData.pax} Pax\n` +
      `• Tanggal Trip: ${formData.date}\n` +
      `• Tambah Dokumentasi: ${docText}\n` +
      `• Catatan Tambahan: ${sanitizedNotes || '-'}\n\n` +
      `*Estimasi Total Live Perhitungan:* Rp ${formattedTotal}\n\n` +
      `Mohon info ketersediaan slot jadwalnya. Terima kasih!`
    
    // SECURITY: Use environment variable with fallback to prevent exposure
    // Only fallback if absolutely necessary - should always be set in .env
    const rawPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE
    
    if (!rawPhone) {
      alert('Nomor kontak tidak tersedia. Mohon hubungi kami melalui media sosial.')
      return
    }
    
    // SECURITY: Use proper URL encoding
    const encodedMessage = encodeForURL(message)
    
    // Redirect to WhatsApp with properly encoded parameters
    // Using window.location.href to handle potential popup blockers
    window.location.href = `https://wa.me/${normalizedPhone}?text=${encodedMessage}`
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-brand selection:text-white">
      <SiteNav brand="Sicapit" />
      <HeroSection />
      <AboutSection />
      <PackagesSection onSelectPackage={handleSelectPackageDirectly} />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />

      {/* Booking Form Section with Live Calculator */}
      <section id="booking-form" className="py-20 bg-surface border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-brand/10 text-brand mb-3 px-3 py-1">Online Booking</Badge>
            <h2 className="text-3xl font-bold text-foreground">Formulir Reservasi</h2>
            <p className="text-muted-foreground mt-2">Isi data singkat untuk cek estimasi cepat.</p>
          </div>

          <Card className="p-6 md:p-8 shadow-xl border border-muted/60 bg-background/80 backdrop-blur-md">
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" placeholder="Masukkan nama Anda" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">No. WhatsApp</Label>
                  <Input id="phone" type="tel" placeholder="08xxxxxxxxxx" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@contoh.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package">Pilih Paket Wisata</Label>
                  <Select value={formData.package} onValueChange={(val) => setFormData({ ...formData, package: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih paket rafting" />
                    </SelectTrigger>
                    <SelectContent>
                      {raftingPackages.map((p, idx) => (
                        <SelectItem key={idx} value={p.name}>{p.name} ({p.price})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pax">Jumlah Peserta (Pax - Min. 10 Disarankan)</Label>
                  <Input id="pax" type="number" min={1} value={formData.pax} onChange={(e) => setFormData({ ...formData, pax: parseInt(e.target.value) || 1 })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Tanggal Kegiatan</Label>
                  <Input id="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border p-4 shadow-sm bg-muted/20">
                <div className="space-y-0.5 pr-4">
                  <Label htmlFor="doc" className="text-sm font-bold cursor-pointer">Tambah dokumentasi premium (+Rp 150.000)</Label>
                  <p className="text-xs text-muted-foreground">Foto dan video aksi untuk seluruh tim.</p>
                </div>
                <input
                  id="doc"
                  type="checkbox"
                  checked={formData.documentation}
                  onChange={(e) => setFormData({ ...formData, documentation: e.target.checked })}
                  className="h-5 w-5 accent-brand rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Catatan Tambahan</Label>
                <Textarea id="notes" placeholder="Tulis catatan singkat jika ada." value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} />
              </div>

              {/* LIVE PRICING CALCULATOR BOARD */}
              <div className="bg-brand/5 dark:bg-brand/10 p-5 rounded-2xl space-y-2 border border-brand/20">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal Paket ({formData.pax} Orang)</span>
                  <span className="font-medium text-foreground">
                    Rp {((estimatedTotal - (formData.documentation ? 150000 : 0))).toLocaleString('id-ID')}
                  </span>
                </div>
                {formData.documentation && (
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Dokumentasi DSLR Premium (Flat rate)</span>
                    <span className="font-medium text-foreground">Rp 150.000</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold border-t pt-3 text-foreground">
                  <span>Estimasi Total Pembayaran:</span>
                  <span className="text-xl text-brand">Rp {estimatedTotal.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <Button type="submit" className="w-full bg-brand text-white hover:bg-brand/90 py-6 text-lg font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 fill-white" />
                Kirim Registrasi Langsung ke WhatsApp
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Floating Action Button for WhatsApp */}
      {/* SECURITY: Use environment variable instead of hardcoded phone number */}
      {process.env.NEXT_PUBLIC_CONTACT_1_PHONE && (
        <a
          href={`https://wa.me/${normalizePhoneForWhatsApp(process.env.NEXT_PUBLIC_CONTACT_1_PHONE)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
          aria-label="Hubungi WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-white transition-transform group-hover:rotate-12"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}
    </div>
  )
}