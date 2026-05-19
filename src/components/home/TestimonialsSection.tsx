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

export const customerReviews = [
  {
    name: 'Havid R.',
    rating: 5,
    date: '2 bulan lalu',
    text: 'Arung jeram terbaik di Indonesia, khususnya di Jawa Barat. Saya sudah berkali-kali ke sini, pelayanannya luar biasa, pemandu arung jeramnya hebat, dan resepsionisnya sangat ramah. Pasti bakal balik lagi!',
    source: 'Pelanggan',
    avatar: 'H',
    avatarColor: 'bg-blue-500',
  },
  {
    name: 'Dinda P.',
    rating: 5,
    date: '3 minggu lalu',
    text: 'Seru banget rafting di sini, pemandangannya bagus & pemandunya juga pada asik jadi ga tegang. Pokoknya bakal nyoba lagi liburan berikutnya!!',
    source: 'Pelanggan',
    avatar: 'D',
    avatarColor: 'bg-pink-500',
  },
  {
    name: 'Agung S.',
    rating: 5,
    date: '1 bulan lalu',
    text: 'Pertama kali coba rafting dan langsung ketagihan! Pemandu sangat profesional, arusnya pas buat pemula. Aman dan menyenangkan. Sangat direkomendasikan!',
    source: 'Pelanggan',
    avatar: 'A',
    avatarColor: 'bg-emerald-500',
  },
  {
    name: 'Maya Angelina',
    rating: 5,
    date: '1 bulan lalu',
    text: 'Penilaian 10/10! Penuh dengan tawa dan kegembiraan! Pemandunya ramah-ramah, fasilitas oke, pelayanannya juga oke banget. Bakal balik lagi buat nyobain yang 13km nanti!',
    source: 'Pelanggan',
    avatar: 'M',
    avatarColor: 'bg-violet-500',
  },
  {
    name: 'Fajar Nugroho',
    rating: 5,
    date: '2 minggu lalu',
    text: 'Kami sangat bersenang-senang! Buat yang mau rafting ini sangat direkomendasikan, pelayanannya bagus, stafnya juga semua asik jadi saat rafting seru banget. Cuma agak jauh dari parkiran ya hehe.',
    source: 'Pelanggan',
    avatar: 'F',
    avatarColor: 'bg-amber-500',
  },
  {
    name: 'Lina Kartika',
    rating: 5,
    date: '3 bulan lalu',
    text: 'Sangat direkomendasikan untuk pemula yang mau mencoba bermain rafting. Saya baru pertama kali merasakan bermain rafting, sangat aman dan pemandunya sabar banget ngajarin.',
    source: 'Pelanggan',
    avatar: 'L',
    avatarColor: 'bg-teal-500',
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimoni" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1 mb-4">
            Testimoni Pelanggan
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-emerald-600">Mereka</span>?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ulasan asli dari para peserta rafting yang telah bertualang bersama kami.
          </p>
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.8</span>
            <span className="text-gray-400 text-sm">dari 2.400+ ulasan</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {customerReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-emerald-200 bg-white">
                <CardContent className="pt-5 pb-5">
                  {/* Top row: source badge + stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" /></svg>
                      Ulasan Terverifikasi
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3.5 h-3.5 ${
                            j < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">
                    {review.text}
                  </p>

                  {/* Author row */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className={`w-9 h-9 rounded-full ${review.avatarColor} flex items-center justify-center`}>
                      <span className="text-white font-semibold text-sm">{review.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-lg">
            Lihat Semua Ulasan di Google
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
