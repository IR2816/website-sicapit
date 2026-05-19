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

export const faqItems = [
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

export function FAQSection() {
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
    <section id="faq" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1 mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pertanyaan <span className="text-emerald-600">Umum</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
                className="bg-gray-50 border border-gray-200 rounded-xl px-5 data-[state=open]:bg-white data-[state=open]:border-emerald-200 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <item.icon className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-0">
                  <div className="ml-8 pl-4 border-l-2 border-emerald-200">
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 ${tagColors[item.tag] || 'bg-gray-100 text-gray-600'}`}>
                      {item.tag}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
          <p className="text-gray-500 text-sm mb-4">Masih ada pertanyaan lain?</p>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
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
