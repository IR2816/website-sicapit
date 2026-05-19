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

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-20 lg:py-28 bg-emerald-600 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
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
              <Button className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-8 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
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
