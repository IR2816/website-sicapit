'use client'
import { SiteNav } from '../sections/site-nav'

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
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useToast } from '@/hooks/use-toast'
import {
  Waves,
  Mountain,
  Shield,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  Heart,
  Award,
  Camera,
  TreePine,
  CheckCircle2,
  Zap,
  Trophy,
  CalendarDays,
  ArrowUp,
  HelpCircle,
  LifeBuoy,
  Play,
  Droplets,
  UserCheck,
  BaggageClaim,
  HardHat,
  AlertTriangle,
  Info,
  BookOpen,
} from 'lucide-react'

// ==================== NAVBAR ====================
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Paket', href: '#paket' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Keselamatan', href: '#keselamatan' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ]

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#beranda')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shadow-lg group-hover:bg-brand/80 text-white transition-colors">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-brand' : 'text-white'}`}>
                Kampung Sicapit
              </h1>
              <p className={`text-xs leading-tight transition-colors ${scrolled ? 'text-brand' : 'text-emerald-200'}`}>
                Wisata Air Bogor
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-emerald-100/80 ${
                  scrolled ? 'text-slate-200 hover:text-brand' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/6285773246998?text=Halo%20Kampung%20Sicapit%2C%20saya%20ingin%20booking%20rafting!', '_blank')}
              className="ml-4 bg-brand text-white hover:bg-brand/80 text-white text-white rounded-lg"
              size="sm"
            >
              <CalendarDays className="w-4 h-4 mr-2" />
              Pesan Sekarang
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-200' : 'text-white'}`}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-surface p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-bold text-lg text-brand">Kampung Sicapit</h2>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="w-full text-left px-4 py-3 rounded-lg text-slate-200 hover:bg-brand/10 hover:text-brand font-medium transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
                <div className="p-4 border-t">
                  <Button
                    onClick={() => window.open('https://wa.me/6285773246998?text=Halo%20Kampung%20Sicapit%2C%20saya%20ingin%20booking%20rafting!', '_blank')}
                    className="w-full bg-brand text-white hover:bg-brand/80 text-white text-white rounded-lg"
                  >
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}

// ==================== HERO SECTION ====================
function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="beranda" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/rafting/2.jpeg"
          alt="Rafting Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {mounted && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand/30 rounded-full"
            initial={{ x: Math.random() * 1440, y: 900 }}
            animate={{ y: -100, x: `+=${Math.random() * 200 - 100}` }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Badge className="bg-brand/10 text-brand border-brand/20 px-4 py-2 text-sm mb-6 backdrop-blur-md rounded-full shadow-lg">
            <MapPin className="w-3.5 h-3.5 mr-1.5" /> Kelurahan Semplak, Bogor Barat
          </Badge>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6">
          Selamat Datang di<br /><span className="text-brand drop-shadow-md">Kampung Sicapit</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
          Destinasi wisata air terpadu yang memadukan adrenalin dan keasrian alam. Jelajahi keindahan Sungai Cisadane lewat pengalaman edukasi, river tubing, dan rafting terbaik di Kota Bogor.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { icon: Waves, label: 'Rafting' },
            { icon: Droplets, label: 'River Tubing' },
            { icon: Heart, label: 'Wisata Kuliner' },
            { icon: Award, label: 'Kesenian Lokal' },
            { icon: TreePine, label: 'Alam Asri' },
          ].map((act, i) => (
            <span key={i} className="flex items-center gap-2 bg-surface/30 backdrop-blur-xl border border-white/10 text-white text-sm md:text-base px-5 py-2.5 rounded-full hover:bg-surface/50 transition-colors drop-shadow-md">
              <act.icon className="w-4 h-4 text-brand" /> {act.label}
            </span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-brand text-white hover:bg-brand/90 px-8 py-7 text-lg rounded-full shadow-[0_0_40px_rgba(22,163,74,0.4)] transition-all font-bold group" onClick={() => document.querySelector('#paket')?.scrollIntoView({ behavior: 'smooth' })}>
            Lihat Paket Rafting <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-7 text-lg rounded-full backdrop-blur-sm font-bold bg-black/20" onClick={() => document.querySelector('#galeri')?.scrollIntoView({ behavior: 'smooth' })}>
            <Camera className="w-5 h-5 mr-2" /> Galeri Foto
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-12 pb-16">
          {[
            { icon: Users, value: '15,000+', label: 'Peserta Puas' },
            { icon: Trophy, value: '12+', label: 'Tahun Pengalaman' },
            { icon: Star, value: '4.9', label: 'Rating Google' },
            { icon: MapPin, value: '27 km', label: 'Jalur Rafting' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 group-hover:scale-110 hover:bg-brand/20 transition-all">
                  <stat.icon className="w-6 h-6 text-brand" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2 drop-shadow-lg">{stat.value}</div>
              <div className="text-sm font-medium text-slate-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
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
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/rafting/4.jpeg"
                alt="Keindahan Sungai Rafting"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-surface rounded-xl shadow-xl p-4 lg:p-5 border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="font-bold text-brand text-lg">12+ Tahun</p>
                  <p className="text-sm text-slate-400">Pengalaman Rafting</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Badge className="bg-emerald-100 text-brand border-brand/50 px-3 py-1 mb-4">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Petualangan
              <span className="text-brand"> Kampung Sicapit</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Kampung Sicapit adalah wisata air yang berlokasi di Kelurahan Semplak, 
              Kecamatan Bogor Barat, Kota Bogor. Destinasi ini menawarkan aktivitas rafting 
              sepanjang <strong>27 km</strong> dan river tubing di Sungai Cisadane, serta 
              didukung wisata kuliner, kesenian lokal, dan suasana alam yang asri.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Kehadiran wisata ini juga membantu meningkatkan perekonomian masyarakat sekitar. 
              Dengan tim pemandu bersertifikat dan peralatan berstandar keselamatan tertinggi, 
              kami menawarkan pengalaman arung jeram yang aman, seru, dan berkesan.
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
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <feature.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
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
const packages = [
  {
    name: 'Pamili',
    subtitle: 'Family Fun',
    icon: Waves,
    price: 'Rp 150.000',
    duration: '2-3 Jam',
    distance: '7 km',
    difficulty: 'Mudah',
    difficultyColor: 'bg-emerald-100 text-brand',
    image: '/assets/images/rafting/4.jpeg',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
    popular: false,
  },
  {
    name: 'Konservasi',
    subtitle: 'Most Popular',
    icon: Zap,
    price: 'Rp 200.000',
    duration: '3-4 Jam',
    distance: '12 km',
    difficulty: 'Sedang',
    difficultyColor: 'bg-amber-100 text-amber-700',
    image: '/assets/images/rafting/1.jpeg',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
    popular: true,
  },
  {
    name: 'Petualangan',
    subtitle: 'Pro Challenge',
    icon: Trophy,
    price: 'Rp 350.000',
    duration: '4-5 Jam',
    distance: '27 km',
    difficulty: 'Sulit',
    difficultyColor: 'bg-red-100 text-red-700',
    image: '/assets/images/rafting/3.jpeg',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
    popular: false,
  },
]

function PackagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { toast } = useToast()

  const handleBooking = (pkgName: string) => {
    const text = encodeURIComponent(`Halo Kampung Sicapit! Saya ingin booking paket ${pkgName}. Mohon info jadwal dan ketersediaannya. Terima kasih!`)
    window.open(`https://wa.me/6285773246998?text=${text}`, '_blank')
  }

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
          <Badge className="bg-emerald-100 text-brand border-brand/50 px-3 py-1 mb-4">
            Paket Rafting
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pilih Paket <span className="text-brand">Petualangan</span> Anda
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            Tersedia berbagai pilihan paket rafting yang disesuaikan untuk setiap tingkat 
            keahlian, dari yang baru pertama kali hingga yang sudah berpengalaman.
          </p>
          {/* Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-brand/10 border border-brand/50 text-brand px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              <span>Jam Operasional: Buka Setiap Hari 08.00 – 17.00 WIB</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <Users className="w-4 h-4" />
              <span>Kapasitas: Minimal 10 Orang</span>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-amber-500 text-white px-4 py-1 shadow-lg">
                    Paling Populer
                  </Badge>
                </div>
              )}
              <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.popular
                  ? 'border-brand/50 shadow-lg ring-2 ring-emerald-100'
                  : 'border-white/10 hover:border-brand/50'
              }`}>
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className={`${pkg.difficultyColor} border-0 px-3 py-1`}>
                      {pkg.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <pkg.icon className="w-5 h-5 text-brand" />
                    <span className="text-sm text-slate-400">{pkg.subtitle}</span>
                  </div>
                  <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
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
                    <span className="text-3xl font-bold text-brand">{pkg.price}</span>
                    <span className="text-slate-400 text-sm"> /orang</span>
                  </div>
                  <div className="space-y-2">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full rounded-xl py-5 font-semibold text-base transition-all ${
                      pkg.popular
                        ? 'bg-brand text-white hover:bg-brand/80 text-white text-white shadow-lg shadow-emerald-200'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => handleBooking(pkg.name)}
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

// ==================== GALLERY SECTION (BENTO LAYOUT) ====================
const slideshowImages = [
  '/assets/images/rafting/image.png',
  '/assets/images/rafting/imagee.png',
  '/assets/images/rafting/image copy.png',
  '/assets/images/rafting/image copy 2.png',
  '/assets/images/rafting/image copy 3.png',
  '/assets/images/rafting/image copy 4.png',
  '/assets/images/rafting/image copy 5.png',
  '/assets/images/rafting/image copy 6.png',
  '/assets/images/rafting/image copy 7.png',
  '/assets/images/rafting/image copy 8.png',
  '/assets/images/rafting/image copy 9.png',
  '/assets/images/rafting/image copy 10.png',
  '/assets/images/rafting/image copy 11.png',
  '/assets/images/rafting/image copy 12.png',
  '/assets/images/rafting/image copy 13.png',
  '/assets/images/rafting/image copy 14.png',
  '/assets/images/rafting/image copy 15.png',
  '/assets/images/rafting/image copy 16.png',
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
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/4.jpeg',
    title: 'Bersama Tim',
    tag: 'Keluarga',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/7.jpeg',
    title: 'Arus Deras',
    tag: 'Aktivitas',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/6.jpeg',
    title: 'Petualangan Seru',
    tag: 'Aktivitas',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/1.jpeg',
    title: 'Aksi di Rapids',
    tag: 'Aktivitas',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/5.jpeg',
    title: 'Mengayuh Bersama',
    tag: 'Aktivitas',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
]

const videoItems = [
  {
    src: '/assets/videos/Jeram Bagol.webm',
    title: 'Jeram Bagol',
    tag: 'Video',
  },
  {
    src: '/assets/videos/Konservasi.webm',
    title: 'Konservasi',
    tag: 'Video',
  },
  {
    src: '/assets/videos/Rafting.webm',
    title: 'Aksi di Air',
    tag: 'Video',
  },
  {
    src: '/assets/videos/Video.webm',
    title: 'Keseruan Rafting',
    tag: 'Video',
  },
]

function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance slideshow
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [isPaused])

  const tagColors: Record<string, string> = {
    'Aktivitas': 'bg-brand/100/90 text-white',
    'Lanskap': 'bg-amber-500/90 text-white',
    'Tim Kami': 'bg-sky-500/90 text-white',
    'Keluarga': 'bg-rose-500/90 text-white',
    'Video': 'bg-purple-500/90 text-white',
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
          <Badge className="bg-emerald-100 text-brand border-brand/50 px-3 py-1 mb-4">
            Galeri Foto
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Momen <span className="text-brand">Tak Terlupakan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Lihat keindahan dan keseruan petualangan rafting kami melalui galeri foto.
            Setiap momen adalah kenangan berharga.
          </p>
        </motion.div>

        {/* Modern Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4"
        >
          {/* Item 1: The Slideshow (2x2 Tile) */}
          <div 
            className="relative group overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 shadow-lg bg-black cursor-pointer"
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

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            
            {/* Tag Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md bg-white/20 text-white border border-white/30">
                Sorotan Utama
              </span>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); setSlideIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length) }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSlideIndex((prev) => (prev + 1) % slideshowImages.length) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
              <motion.div
                className="h-full bg-emerald-400"
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
              className={`relative group cursor-pointer overflow-hidden rounded-3xl shadow-md ${item.colSpan} ${item.rowSpan}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setSelectedImg(item.src)}
            >
              {/* Media */}
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    hoveredIdx === i ? 'scale-110 brightness-90' : 'scale-100 brightness-100'
                  }`}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    hoveredIdx === i ? 'scale-110 brightness-90' : 'scale-100 brightness-100'
                  }`}
                />
              )}

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 ${tagColors[item.tag] || 'bg-black/40 text-white'}`}>
                  {item.tag}
                </span>
              </div>

              {/* Overlay gradient */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                hoveredIdx === i ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ${
                  hoveredIdx === i
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                <h3 className="text-white font-bold text-lg leading-tight mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-emerald-300">
                  {item.type === 'video' ? <Play className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
                  <span className="text-sm font-medium">{item.type === 'video' ? 'Putar Video' : 'Lihat Detail'}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Uncropped Videos Showcase */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {videoItems.map((item, i) => (
            <motion.div
              key={`vid-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="relative group w-full aspect-[4/5] cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-black flex items-center justify-center"
              onClick={() => setSelectedImg(item.src)}
            >
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md bg-purple-500/90 text-white border border-white/20 shadow-sm">
                  {item.tag}
                </span>
              </div>
              {/* Overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <h3 className="text-white font-bold text-lg lg:text-xl mb-1 leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Putar</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImg} onOpenChange={() => setSelectedImg(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none overflow-hidden flex items-center justify-center">
          <DialogHeader className="sr-only">
            <DialogTitle>Galeri Momen Rafting</DialogTitle>
            <DialogDescription>Preview momen rafting</DialogDescription>
          </DialogHeader>
          {selectedImg && (
            <div className="relative w-full flex items-center justify-center bg-transparent">
              {selectedImg.endsWith('.mp4') || selectedImg.endsWith('.webm') ? (
                <video
                  src={selectedImg}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <img
                  src={selectedImg}
                  alt="Preview"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

// ==================== TESTIMONIALS SECTION ====================
const customerReviews = [ { name: 'Budi Santoso', rating: 5, text: 'Pengalaman rafting yang luar biasa! Instrukturnya sangat profesional dan ramah. Jeramnya seru tapi tetap aman. Pasti akan kembali lagi bawa keluarga!', date: '2 minggu yang lalu', avatar: 'B', bgColor: 'bg-emerald-500', source: 'Google Reviews' }, { name: 'Siska Pratiwi', rating: 5, text: 'Fasilitasnya lengkap dan bersih. Pemandangan sepanjang sungai sangat indah. Makanan setelah rafting juga enak banget, khas sunda.', date: '1 bulan yang lalu', avatar: 'S', bgColor: 'bg-orange-500', source: 'Google Reviews' }, { name: 'Rudi Hermawan', rating: 4, text: 'Seru banget buat acara gathering kantor! Tim Si Capit bisa handle rombongan besar dengan baik. Safety procedure-nya jelas dan tegas.', date: '2 bulan yang lalu', avatar: 'R', bgColor: 'bg-blue-500', source: 'Google Reviews' }, { name: 'Anita Wijaya', rating: 5, text: 'Awalnya deg-degan karena belum pernah rafting, tapi mas-mas guide-nya bikin tenang. Pengalaman yang tak terlupakan! Recommended banget 12 km.', date: '3 bulan yang lalu', avatar: 'A', bgColor: 'bg-purple-500', source: 'Google Reviews' }, { name: 'Keluarga Kusuma', rating: 5, text: 'Sangat cocok untuk liburan keluarga. Anak-anak (12 tahun) sangat enjoy karena airnya aman dan ada bagian lompat bebas ke air. Best holiday ever!', date: '3 bulan yang lalu', avatar: 'K', bgColor: 'bg-rose-500', source: 'Google Reviews' } ];
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Duplicate for seamless marquee
  const duplicatedReviews = [...customerReviews, ...customerReviews]

  return (
    <section id="testimoni" className="py-24 lg:py-32 bg-surface overflow-hidden relative" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-brand/10 text-brand border-brand/20 px-4 py-1.5 mb-6 text-sm">
            Testimoni & Pengalaman
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Apa Kata <span className="text-brand">Mereka</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ulasan asli dari para petualang yang telah menjajal keseruan rafting dan menikmati asrinya Kampung Wisata Sicapit.
          </p>
          
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-3 mt-8 bg-surface-strong/50 border border-white/5 py-4 px-6 rounded-full inline-flex mx-auto">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400 drop-shadow-sm" />
              ))}
            </div>
            <div className="w-px h-6 bg-white/20 mx-2" />
            <span className="text-2xl font-bold text-white font-heading">4.9</span>
            <span className="text-slate-400 text-sm font-medium">Berdasarkan ulasan asli di Google</span>
          </div>
        </motion.div>

        {/* Marquee Carousel (inspired by sliding testimonials) */}
        <div 
          className="relative w-full flex overflow-hidden group pb-8"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedReviews.map((review, i) => (
              <Card key={i} className="shrink-0 w-[350px] md:w-[450px] border-white/5 bg-surface-strong shadow-lg hover:border-brand/30 transition-all duration-300">
                <CardContent className="p-6 md:p-8 flex flex-col h-full justify-between">
                  <div>
                    {/* Top row: source badge + stars */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium bg-black/20 px-3 py-1.5 rounded-full border border-white/5">
                        <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Ulasan Google Maps
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-4 h-4 ${j < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-600 fill-slate-600"}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="text-slate-300 text-base leading-relaxed mb-8 italic">
                      &quot;{review.text}&quot;
                    </p>
                  </div>

                  {/* Author row */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${review.bgColor || "bg-brand/20"} shadow-inner`}>
                      <span className="text-white font-bold text-lg">{review.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading font-bold text-white text-base truncate">{review.name}</p>
                      <p className="text-sm text-slate-400">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
             href="https://www.google.com/maps/search/?api=1&query=Kampung+Wisata+Sicapit" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center h-12 md:h-14 px-8 py-3 rounded-full text-base font-bold bg-white text-black hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl group"
          >
            <svg className="w-5 h-5 mr-3 text-blue-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Lihat Semua Ulasan di Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== SAFETY SECTION ====================
const safetyTips = [
  {
    icon: LifeBuoy,
    title: 'Wajib Pakai Pelampung',
    desc: 'Selalu kenakan life jacket (pelampung) yang disediakan. Pastikan ukuran pas dan buckle terkunci rapat sebelum memulai rafting. Pelampung berstandar internasional dan telah diuji kelayakannya.',
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: HardHat,
    title: 'Helm Wajib Dipakai',
    desc: 'Gunakan helm yang disediakan sepanjang aktivitas rafting. Helm melindungi kepala dari benturan batu atau benda lain. Pastikan tali helm terikat kencang dan tidak bergeser.',
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Users,
    title: 'Dengarkan Pemandu',
    desc: 'Ikuti semua instruksi pemandu tanpa terkecuali. Pemandu kami bersertifikat SAFI dan berpengalaman. Mereka akan memberikan briefing teknik mendayung, posisi duduk, dan apa yang harus dilakukan saat rafting.',
    color: 'from-emerald-500 to-green-500',
    bgLight: 'bg-brand/10',
    iconColor: 'text-brand',
  },
  {
    icon: AlertTriangle,
    title: 'Patuhi Batasan Arus',
    desc: 'Jangan melebih batas kemampuan Anda. Pilih paket sesuai level pengalaman. Peserta pemula wajib mengikuti rute Grade II-III. Jika merasa tidak nyaman, segera beritahu pemandu.',
    color: 'from-red-500 to-rose-500',
    bgLight: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: BookOpen,
    title: 'Ikuti Briefing dengan Seksama',
    desc: 'Perhatikan baik-baik saat briefing sebelum rafting dimulai. Pemandu akan menjelaskan teknik mendayung yang benar, cara menahan dayung, posisi aman di rakit, dan prosedur evakuasi darurat.',
    color: 'from-violet-500 to-purple-500',
    bgLight: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Info,
    title: 'Kondisi Fisik Harus Sehat',
    desc: 'Pastikan dalam kondisi fisik yang sehat dan tidak sedang mengonsumsi alkohol. Peserta dengan riwayat jantung, epilepsy, atau kondisi medis tertentu wajib konsultasi dokter terlebih dahulu.',
    color: 'from-teal-500 to-emerald-500',
    bgLight: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
]

function SafetySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="keselamatan" className="py-20 lg:py-28 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-red-100 text-red-600 border-red-200 px-3 py-1 mb-4">
            <Shield className="w-3 h-3 mr-1" />
            Keselamatan
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tips <span className="text-brand">Keselamatan</span> Rafting
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Keselamatan adalah prioritas utama kami. Berikut hal-hal penting yang wajib 
            diketahui sebelum mengikuti aktivitas arung jeram.
          </p>
        </motion.div>

        {/* Safety Tips Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyTips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-white/5 hover:shadow-lg transition-all duration-300 hover:border-brand/50 group overflow-hidden">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${tip.bgLight} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <tip.icon className={`w-6 h-6 ${tip.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-base mb-2">{tip.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 p-6 bg-brand/10 border border-brand/50 rounded-2xl flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
            <Shield className="w-5 h-5 text-brand" />
          </div>
          <div>
            <h4 className="font-bold text-brand mb-1">Keselamatan Adalah Prioritas Kami</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Di Rafting Kampung SiCapit, keselamatan peserta adalah yang utama. Setiap pemandu 
              terlatih dalam pertolongan pertama serta water rescue. 
              Tim rescue kami selalu siaga di setiap titik jalur rafting untuk memastikan 
              pengalaman petualangan Anda aman dan menyenangkan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== FAQ SECTION ====================
const faqItems = [
  {
    q: 'Apakah saya harus bisa berenang untuk ikut rafting?',
    a: 'Tidak perlu bisa berenang! Semua peserta akan diberikan life jacket (pelampung) berkualitas tinggi. Pemandu kami juga sudah terlatih untuk menangani berbagai situasi di air. Yang penting Anda tidak takut air dan siap untuk seru-seruan!',
    icon: LifeBuoy,
    tag: 'Keamanan',
  },
  {
    q: 'Sebaiknya membawa apa saja saat rafting?',
    a: 'Cukup bawa pakaian ganti, handuk, dan sunblock. Gunakan kaos dan celana pendek yang tidak kebesaran (hindari jeans). Sepatu atau sandal gunung yang melekat di kaki. Hindari membawa barang bawaan berlebihan karena akan mengganggu aktivitas di rakit.',
    icon: BaggageClaim,
    tag: 'Persiapan',
  },
  {
    q: 'Apakah rafting aman untuk anak-anak?',
    a: 'Untuk Paket Pamili (7 km), anak usia minimal 5 tahun sudah bisa ikut dengan pendampingan orang tua. Arus pada rute ini relatif tenang dan cocok untuk keluarga. Untuk Paket Konservasi dan Petualangan, minimal usia 12 tahun dengan kondisi fisik sehat.',
    icon: UserCheck,
    tag: 'Usia',
  },
  {
    q: 'Bagaimana jika cuaca hujan pada hari H?',
    a: 'Rafting tetap berlangsung saat hujan karena Anda akan basah anyway! Hujan justru membuat arus sungai lebih seru. Aktivitas hanya akan ditunda atau dibatalkan jika terjadi banjir besar atau kondisi sungai berbahaya. Keputusan ada di pihak pemandu untuk keselamatan semua peserta.',
    icon: Droplets,
    tag: 'Cuaca',
  },
  {
    q: 'Saya pemula total, paket mana yang cocok?',
    a: 'Untuk pemula, sangat direkomendasikan Paket Pamili dengan jarak 7 km. Arusnya tergolong ringan dan pemandu akan memberikan briefing lengkap tentang teknik mendayung dan posisi tubuh sebelum mulai. Yang penting ikuti instruksi pemandu dan nikmati perjalanannya!',
    icon: HelpCircle,
    tag: 'Kesulitan',
  },
  {
    q: 'Bagaimana cara booking dan pembayarannya?',
    a: 'Booking bisa langsung melalui WhatsApp kami di +62 857-7324-6998. Setelah konfirmasi jadwal, Anda bisa melakukan DP 50% dan pelunasan di tempat sebelum keberangkatan. Kami menerima transfer bank dan e-wallet.',
    icon: CalendarDays,
    tag: 'Booking',
  },
]

function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const tagColors: Record<string, string> = {
    'Keamanan': 'bg-red-100 text-red-600',
    'Persiapan': 'bg-blue-100 text-blue-600',
    'Usia': 'bg-purple-100 text-purple-600',
    'Cuaca': 'bg-sky-100 text-sky-600',
    'Kesulitan': 'bg-orange-100 text-orange-600',
    'Booking': 'bg-teal-100 text-teal-600',
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-emerald-100 text-brand border-brand/50 px-3 py-1 mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pertanyaan <span className="text-brand">Umum</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Hal-hal penting yang perlu kamu tahu sebelum rafting. Supaya lebih siap dan pede!
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-surface-strong border border-white/10 rounded-xl px-5 data-[state=open]:bg-surface data-[state=open]:border-brand/50 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <item.icon className="w-5 h-5 text-brand shrink-0" />
                    <span className="font-semibold text-white text-sm sm:text-base">{item.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-0">
                  <div className="ml-8 pl-4 border-l-2 border-brand/50">
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 ${tagColors[item.tag] || 'bg-surface/50 text-slate-300'}`}>
                      {item.tag}
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-slate-400 text-sm mb-4">Masih ada pertanyaan lain?</p>
          <Button
            className="bg-brand text-white hover:bg-brand/80 text-white text-white rounded-lg"
            onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone className="w-4 h-4 mr-2" />
            Hubungi Kami
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== CTA SECTION ====================
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-20 lg:py-28 bg-brand text-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-surface rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-surface rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/30">
            🌊 Rafting Kampung SiCapit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Berpetualangan<br className="hidden sm:block" /> dengan <span className="text-emerald-200">Seru?</span>
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Jangan tunda lagi! Bergabunglah bersama ribuan peserta yang sudah merasakan 
            serunya menantang arus sungai bersama SiCapit. Dijamin seru, aman, dan penuh kenangan!
          </p>
          {/* Opening Hours Badge */}
          <div className="inline-flex items-center gap-3 bg-white/15 border border-white/30 backdrop-blur-sm rounded-2xl px-6 py-4 mb-8">
            <Clock className="w-5 h-5 text-emerald-200 shrink-0" />
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Buka Setiap Hari</p>
              <p className="text-emerald-200 text-sm">Jam 08.00 – 17.00 WIB</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontak">
              <Button className="bg-surface text-brand hover:bg-brand/10 font-bold px-8 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Booking Sekarang 🚀
              </Button>
            </a>
            <a href="https://wa.me/6285773246998" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/20 bg-transparent font-semibold px-8 py-4 text-base rounded-xl">
                Hubungi via WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== CONTACT / BOOKING SECTION ====================
function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    date: '',
    participants: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    toast({
      title: 'Booking Berhasil Dikirim!',
      description: `Terima kasih ${formData.name}! Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi.`,
    })
    setFormData({ name: '', phone: '', email: '', package: '', date: '', participants: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telepon / WhatsApp',
      value: '+62 857-7324-6998',
      desc: 'Respons cepat di jam kerja',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Kampungwisatasicapit382@gmail.com',
      desc: 'Respon dalam 24 jam',
    },
    {
      icon: MapPin,
      label: 'Lokasi',
      value: 'Kampung Wisata SiCapit, Gg. Flamboyan I No.1, Semplak, Bogor Barat',
      desc: 'Kota Bogor, Jawa Barat',
    },
    {
      icon: Clock,
      label: 'Jam Operasional',
      value: 'Setiap Hari, 08:00 - 17:00 WIB',
      desc: 'Termasuk hari libur nasional',
    },
  ]

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-emerald-100 text-brand border-brand/50 px-3 py-1 mb-4">
            Kontak & Booking
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Rafting Kampung<span className="text-brand">siCapit</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau langsung booking paket rafting 
            impian Anda. Tim kami siap membantu!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-brand/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                  <info.icon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-0.5">{info.label}</p>
                  <p className="font-semibold text-white">{info.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{info.desc}</p>
                </div>
              </div>
            ))}

            {/* Google Maps Embed */}
            <div className="mt-6 rounded-xl overflow-hidden border h-52">
              <iframe
                src="https://maps.google.com/maps?q=Kampung+Wisata+SiCapit+Gg+Flamboyan+I+Semplak+Bogor+Barat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kampung Sicapit"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/fibsTokQEMytXsGRA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-brand hover:text-brand font-medium transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Buka di Google Maps
            </a>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="border-white/10 shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-6">Formulir Booking</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        placeholder="Masukkan nama Anda"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">No. WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@contoh.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="package">Pilih Paket</Label>
                      <Select
                        value={formData.package}
                        onValueChange={(val) => setFormData({ ...formData, package: val })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih paket rafting" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pamili">Paket Pamili - Rp 150.000</SelectItem>
                          <SelectItem value="konservasi">Paket Konservasi - Rp 200.000</SelectItem>
                          <SelectItem value="petualangan">Paket Petualangan - Rp 350.000 (Min. 10 Orang)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Tanggal Keberangkatan</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="participants">Jumlah Peserta</Label>
                      <Input
                        id="participants"
                        type="number"
                        min="1"
                        max="100"
                        placeholder="Jumlah orang"
                        value={formData.participants}
                        onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Catatan Tambahan</Label>
                    <Textarea
                      id="message"
                      placeholder="Ada permintaan khusus? (opsional)"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand text-white hover:bg-brand/80 text-white text-white py-5 rounded-xl font-semibold text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Booking
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==================== FOOTER ====================
function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Kampung Sicapit</h3>
                <p className="text-xs text-emerald-400">Wisata Air Bogor</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Wisata air terpercaya di Sungai Cisadane, Bogor. Menawarkan rafting, river tubing, 
              wisata kuliner, dan kesenian lokal dengan suasana alam yang asri.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map((social) => (
                <button
                  key={social}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand text-white flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Menu</h4>
            <ul className="space-y-2">
              {['Beranda', 'Tentang Kami', 'Paket Rafting', 'Galeri Foto', 'Testimoni', 'Kontak'].map((link) => (
                <li key={link}>
                  <button
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors"
                    onClick={() => {
                      const href = `#${link.toLowerCase().replace(/\s+/g, '').replace('kami', '')}`
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-2">
              {[
                'Arung Jeram Keluarga',
                'Team Building',
                'Rafting Corporate',
                'Outbound Adventure',
                'Camping & Rafting',
                'River Tubing',
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Kampung Wisata SiCapit, Gg. Flamboyan I No.1, Semplak, Bogor Barat</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-400 text-sm">+62 857-7324-6998</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-400 text-sm">Kampungwisatasicapit382@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-400 text-sm">Setiap Hari, 08:00 - 17:00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; 2024 Kampung Sicapit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-slate-400 hover:text-gray-300 text-sm transition-colors">
              Kebijakan Privasi
            </button>
            <button className="text-slate-400 hover:text-gray-300 text-sm transition-colors">
              Syarat & Ketentuan
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-brand text-white hover:bg-brand/80 text-white text-white shadow-lg flex items-center justify-center z-50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

// ==================== MAIN PAGE ====================
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav brand="Sicapit" />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PackagesSection />
        <GallerySection />
        <TestimonialsSection />
        <SafetySection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285773246998?text=Halo%20Rafting%20Kampung%20SiCapit%2C%20saya%20ingin%20booking%20rafting!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-105 group"
        aria-label="Chat via WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-white shrink-0"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="font-semibold text-sm whitespace-nowrap">Booking via WhatsApp</span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30 pointer-events-none" />
      </a>
    </div>
  )
}








