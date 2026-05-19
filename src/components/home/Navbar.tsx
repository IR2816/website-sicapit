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

export function Navbar() {
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
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg group-hover:bg-emerald-700 transition-colors">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
                Kampung Sicapit
              </h1>
              <p className={`text-xs leading-tight transition-colors ${scrolled ? 'text-emerald-600' : 'text-emerald-200'}`}>
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
                  scrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/6285773246998?text=Halo%20Kampung%20Sicapit%2C%20saya%20ingin%20booking%20rafting!', '_blank')}
              className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
              size="sm"
            >
              <CalendarDays className="w-4 h-4 mr-2" />
              Pesan Sekarang
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-bold text-lg text-emerald-900">Kampung Sicapit</h2>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
                <div className="p-4 border-t">
                  <Button
                    onClick={() => window.open('https://wa.me/6285773246998?text=Halo%20Kampung%20Sicapit%2C%20saya%20ingin%20booking%20rafting!', '_blank')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
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
