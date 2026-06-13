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

export const slideshowImages = [
  '/rafting_assets/images/rafting.png',
  '/rafting_assets/images/rafting-extra.png',
  '/rafting_assets/images/rafting-copy-1.png',
  '/rafting_assets/images/rafting-copy-2.png',
  '/rafting_assets/images/rafting-copy-3.png',
  '/rafting_assets/images/rafting-copy-4.png',
  '/rafting_assets/images/rafting-copy-5.png',
  '/rafting_assets/images/rafting-copy-6.png',
  '/rafting_assets/images/rafting-copy-7.png',
  '/rafting_assets/images/rafting-copy-8.png',
  '/rafting_assets/images/rafting-copy-9.png',
  '/rafting_assets/images/rafting-copy-10.png',
  '/rafting_assets/images/rafting-copy-11.png',
  '/rafting_assets/images/rafting-copy-12.png',
  '/rafting_assets/images/rafting-copy-13.png',
  '/rafting_assets/images/rafting-copy-14.png',
  '/rafting_assets/images/rafting-copy-15.png',
  '/rafting_assets/images/rafting-copy-16.png',
  '/rafting_assets/images/gallery-bento1.png',
  '/rafting_assets/images/gallery-bento2.png',
  '/rafting_assets/images/gallery-bento5.png',
  '/rafting_assets/images/gallery-bento6.png',
  '/rafting_assets/images/gallery-bento7.png',
  '/rafting_assets/images/gallery-bento8.png',
]

const bentoItemsLayout = [
  {
    src: '/rafting_assets/images/gallery-bento3.png',
    title: 'Pemandu Ahli',
    tag: 'Tim Kami',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/rafting_assets/images/gallery-bento4.png',
    title: 'Bersama Tim',
    tag: 'Keluarga',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/rafting_assets/images/gallery-bento7.png',
    title: 'Arus Deras',
    tag: 'Aktivitas',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/rafting_assets/images/gallery-bento6.png',
    title: 'Petualangan Seru',
    tag: 'Aktivitas',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/rafting_assets/images/gallery-bento1.png',
    title: 'Aksi di Rapids',
    tag: 'Aktivitas',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
  {
    src: '/rafting_assets/images/gallery-bento5.png',
    title: 'Mengayuh Bersama',
    tag: 'Aktivitas',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    type: 'image',
  },
]

const videoItems = [
  {
    src: '/rafting_assets/videos/jeram-bagol.webm',
    title: 'Jeram Bagol',
    tag: 'Video',
  },
  {
    src: '/rafting_assets/videos/konservasi.webm',
    title: 'Konservasi',
    tag: 'Video',
  },
  {
    src: '/rafting_assets/videos/rafting.webm',
    title: 'Aksi di Air',
    tag: 'Video',
  },
  {
    src: '/rafting_assets/videos/video.webm',
    title: 'Keseruan Rafting',
    tag: 'Video',
  },
]

export function GallerySection() {
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
    'Aktivitas': 'bg-emerald-500/90 text-white',
    'Lanskap': 'bg-amber-500/90 text-white',
    'Tim Kami': 'bg-sky-500/90 text-white',
    'Keluarga': 'bg-rose-500/90 text-white',
    'Video': 'bg-purple-500/90 text-white',
  }

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1 mb-4">
            Galeri Foto
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Momen <span className="text-emerald-600">Tak Terlupakan</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
