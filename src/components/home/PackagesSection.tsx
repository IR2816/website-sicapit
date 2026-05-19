'use client'

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

export const packages = [
  {
    name: 'Pamili',
    subtitle: 'Family Fun',
    icon: Waves,
    price: 'Rp 150.000',
    duration: '2-3 Jam',
    distance: '7 km',
    difficulty: 'Mudah',
    difficultyColor: 'bg-emerald-100 text-emerald-700',
    image: '/rafting_assets/rafting_assets/images/gallery-bento4.png',
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
    image: '/rafting_assets/rafting_assets/images/gallery-bento1.png',
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
    image: '/rafting_assets/rafting_assets/images/gallery-bento3.png',
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

export function PackagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { toast } = useToast()

  const handleBooking = (pkgName: string) => {
    const text = encodeURIComponent(`Halo Kampung Sicapit! Saya ingin booking paket ${pkgName}. Mohon info jadwal dan ketersediaannya. Terima kasih!`)
    window.open(`https://wa.me/6285773246998?text=${text}`, '_blank')
  }

  return (
    <section id="paket" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1 mb-4">
            Paket Rafting
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pilih Paket <span className="text-emerald-600">Petualangan</span> Anda
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Tersedia berbagai pilihan paket rafting yang disesuaikan untuk setiap tingkat 
            keahlian, dari yang baru pertama kali hingga yang sudah berpengalaman.
          </p>
          {/* Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
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
                  ? 'border-emerald-300 shadow-lg ring-2 ring-emerald-100'
                  : 'border-gray-200 hover:border-emerald-200'
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
                    <pkg.icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm text-gray-500">{pkg.subtitle}</span>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
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
                    <span className="text-3xl font-bold text-emerald-600">{pkg.price}</span>
                    <span className="text-gray-400 text-sm"> /orang</span>
                  </div>
                  <div className="space-y-2">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full rounded-xl py-5 font-semibold text-base transition-all ${
                      pkg.popular
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200'
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
