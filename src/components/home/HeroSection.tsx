/* eslint-disable react-hooks/purity */
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

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/rafting_assets/images/gallery-bento2.png"
          alt="Rafting Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1440),
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 900,
            }}
            animate={{
              y: -100,
              x: `+=${Math.random() * 200 - 100}`,
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30 px-4 py-1.5 text-sm mb-6 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            Kelurahan Semplak, Bogor Barat
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg mb-6"
        >
          Selamat Datang di
          <br />
          <span className="text-emerald-300">Kampung Sicapit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-shadow"
        >
          Kampung Sicapit adalah wisata air yang berlokasi di Kelurahan Semplak, 
          Kecamatan Bogor Barat, Kota Bogor, sekitar 10 km dari pusat kota. 
          Destinasi ini menawarkan aktivitas rafting dan river tubing di Sungai Cisadane.
        </motion.p>

        {/* Activities Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {[
            { icon: Waves, label: 'Rafting' },
            { icon: Droplets, label: 'River Tubing' },
            { icon: Heart, label: 'Wisata Kuliner' },
            { icon: Award, label: 'Kesenian Lokal' },
            { icon: TreePine, label: 'Alam Asri' },
          ].map((act, i) => (
            <span key={i} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-3 py-1.5 rounded-full">
              <act.icon className="w-3.5 h-3.5 text-emerald-300" />
              {act.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl shadow-emerald-900/30 hover:shadow-emerald-900/40 transition-all"
            onClick={() => document.querySelector('#paket')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lihat Paket Rafting
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            onClick={() => document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Camera className="w-5 h-5 mr-2" />
            Galeri Foto
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {[
            { icon: Users, value: '15,000+', label: 'Peserta Puas' },
            { icon: Trophy, value: '12+', label: 'Tahun Pengalaman' },
            { icon: Star, value: '4.9', label: 'Rating Google' },
            { icon: MapPin, value: '27 km', label: 'Jalur Rafting' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  )
}
