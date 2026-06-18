'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { SiteNav } from '../sections/site-nav'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Gallery4 } from '@/components/ui/gallery4'
import {
  TreePine,
  BookOpen,
  MapPin,
  Heart,
  Sparkles,
  ChevronRight,
  Phone,
  ChevronDown,
} from 'lucide-react'
import { normalizePhoneForWhatsApp } from '@/lib/validation'
import { eduSubPages as subPages } from '@/lib/data/edu-wisata-subpages'

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ─── Sub-page Card Data (imported from @/lib/data/edu-wisata-subpages) ─── */

/* ─── Hero Section ─── */
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
          src="/assets/images/2.jpg"
          alt="Edu Wisata Sicapit"
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
          <div className="text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Badge className="bg-brand/12 text-brand border-brand/25 px-4 py-2 text-sm mb-6 rounded-md shadow-none tracking-[0.16em] uppercase">
                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                Kampung Wisata Sicapit
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="space-y-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/70">
                Edukasi, Budaya & Alam dalam satu paket
              </p>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight max-w-2xl">
                Edu Wisata
                <span className="block text-brand mt-3">Sicapit</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/78 max-w-2xl leading-relaxed">
                Program pariwisata desa yang dikelola oleh warga lokal, meliputi edukasi pertanian, alam, dan budaya.
              </p>
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
                    .querySelector('#program')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Jelajahi Program
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-7 text-lg rounded-2xl backdrop-blur-sm font-bold bg-white/5"
                onClick={() =>
                  document
                    .querySelector('#tentang')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Tentang Kami
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 grid grid-cols-2 gap-3 max-w-xl sm:flex sm:flex-wrap"
            >
              {[
                { value: '6+', label: 'Program edukasi' },
                { value: '100%', label: 'Berbasis masyarakat' },
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
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[32px] border border-white/10 bg-black/18 p-3 md:p-4 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,242,254,0.08),transparent_28%)] pointer-events-none" />
              <div className="relative aspect-[6/5] rounded-[28px] overflow-hidden border border-white/10">
                <Image
                  src="/assets/images/5.jpg"
                  alt="Pemandangan persawahan dan pedesaan Sicapit"
                  fill
                  priority={false}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-white/80 text-[11px] uppercase tracking-[0.22em] font-mono backdrop-blur-md">
                  Kampung Sicapit
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 px-1 pb-1">
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-sm">
                  <p className="text-white/55 text-[11px] uppercase tracking-[0.18em] font-mono">Tema</p>
                  <p className="text-white font-heading text-xl font-bold mt-1">Edukasi</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-sm">
                  <p className="text-white/55 text-[11px] uppercase tracking-[0.18em] font-mono">Cocok untuk</p>
                  <p className="text-white font-heading text-xl font-bold mt-1">Semua Usia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer z-10"
        onClick={() => document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-7 h-7" aria-label="Scroll ke bawah" />
      </motion.div>
    </section>
  )
}

/* ─── About Section ─── */
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: MapPin,
      title: 'Lokasi Strategis',
      desc: 'Berada di Kelurahan Semplak, hanya 10 km dari pusat Kota Bogor.',
    },
    {
      icon: TreePine,
      title: 'Suasana Asri',
      desc: 'Dikelilingi pepohonan hijau, sungai, dan udara segar pegunungan.',
    },
    {
      icon: Heart,
      title: 'Berkelanjutan',
      desc: 'Pariwisata ramah lingkungan yang memberdayakan masyarakat lokal.',
    },
    {
      icon: BookOpen,
      title: 'Edukatif',
      desc: 'Pengalaman wisata kaya pembelajaran budaya, pertanian, dan tradisi.',
    },
  ]

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/5.jpg"
                alt="Keindahan Kampung Sicapit"
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
                  <Sparkles className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="font-bold text-brand text-lg">6+ Program</p>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">Edukasi Wisata</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-brand/20 bg-brand/8 text-brand text-xs font-semibold uppercase tracking-[0.18em]">
              Tentang Edu Wisata
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-tight">
              Belajar Sambil
              <span className="text-brand"> Berwisata</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { value: 'Edukasi', label: 'Budaya & tradisi' },
                { value: 'Pertanian', label: 'Agrowisata organik' },
                { value: 'Kuliner', label: 'Masakan tradisional' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-line bg-surface-strong/60 p-4">
                  <p className="font-heading text-lg font-bold text-foreground dark:text-white">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-line bg-surface-strong/40 p-5 md:p-6">
              <p className="text-muted-foreground dark:text-slate-300 text-base md:text-lg leading-relaxed">
                Edu Wisata Sicapit menyediakan kegiatan agrowisata, pengenalan kesenian tradisional, dan fasilitas homestay milik warga setempat.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="flex gap-3 p-4 rounded-2xl border border-line bg-surface/70 hover:border-brand/30 hover:bg-brand/6 transition-colors group"
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



/* ─── CTA Section ─── */
function CTASection() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE
  const contactName = process.env.NEXT_PUBLIC_CONTACT_1_NAME || 'Kami'

  return (
    <AnimatedSection className="py-20 lg:py-28 bg-gradient-to-br from-[#1a1209] via-[#251b0f] to-[#1a1209] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-brand rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Siap Menjelajahi Kampung Wisata?
        </h2>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Mulailah perjalanan Anda menuju pengalaman wisata yang autentik, edukatif, dan bermakna. Hubungi kami untuk informasi lebih lanjut dan booking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {contactPhone && (
            <a
              href={`https://wa.me/${normalizePhoneForWhatsApp(contactPhone)}?text=${encodeURIComponent(`Halo ${contactName}, saya tertarik dengan program Edu Wisata Kampung Sicapit. Bisa info lebih lanjut?`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-7 text-lg rounded-2xl shadow-lg transition-all font-bold"
              >
                <Phone className="w-5 h-5 mr-2 fill-white" />
                Hubungi via WhatsApp
              </Button>
            </a>
          )}
          <Link href="/edu-wisata/edukasi">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-7 text-lg rounded-2xl backdrop-blur-sm font-bold bg-white/5"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Halaman Edukasi Lengkap
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Main Page ─── */
export default function EduWisataPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-brand selection:text-white">
      <SiteNav brand="Sicapit" />
      <PageBreadcrumb items={[{ label: 'Edu Wisata' }]} />
      <HeroSection />
      <AboutSection />
      <Gallery4
        title="Pilihan Program Anda"
        description="Berbagai program edukasi dan wisata yang dirancang untuk memberikan pengalaman autentik di Kampung Sicapit."
        items={subPages.map((page, idx) => ({
          id: idx.toString(),
          title: page.title,
          description: page.desc,
          href: page.href,
          image: page.image,
        }))}
      />
      <CTASection />

      {/* Floating WhatsApp Button */}
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
