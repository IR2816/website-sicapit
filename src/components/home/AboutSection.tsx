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

export function AboutSection() {
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
    <section id="tentang" className="py-20 lg:py-28 bg-white" ref={ref}>
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
                src="/rafting_assets/rafting_assets/images/gallery-bento4.png"
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
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 lg:p-5 border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-emerald-900 text-lg">12+ Tahun</p>
                  <p className="text-sm text-gray-500">Pengalaman Rafting</p>
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
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1 mb-4">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Petualangan
              <span className="text-emerald-600"> Kampung Sicapit</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Kampung Sicapit adalah wisata air yang berlokasi di Kelurahan Semplak, 
              Kecamatan Bogor Barat, Kota Bogor. Destinasi ini menawarkan aktivitas rafting 
              sepanjang <strong>27 km</strong> dan river tubing di Sungai Cisadane, serta 
              didukung wisata kuliner, kesenian lokal, dan suasana alam yang asri.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
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
                  className="flex gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <feature.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
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
