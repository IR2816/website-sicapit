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

export const safetyTips = [
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
    bgLight: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
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

export function SafetySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="keselamatan" className="py-20 lg:py-28 bg-white" ref={ref}>
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tips <span className="text-emerald-600">Keselamatan</span> Rafting
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
              <Card className="h-full border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 group overflow-hidden">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${tip.bgLight} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <tip.icon className={`w-6 h-6 ${tip.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base mb-2">{tip.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
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
          className="mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h4 className="font-bold text-emerald-900 mb-1">Keselamatan Adalah Prioritas Kami</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
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
