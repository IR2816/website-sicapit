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
import { contactInfo } from '@/lib/data/contact-info'
import { useToast } from '@/hooks/use-toast'
import { MapPin, ChevronRight } from 'lucide-react'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    date: '',
    participants: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    toast({
      title: 'Booking Berhasil Dikirim!',
      description: `Terima kasih ${formData.name}! Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi.`,
    })
    setFormData({ name: '', phone: '', email: '', package: '', date: '', participants: '', message: '' })
  }

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1 mb-4">
            Kontak & Booking
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Rafting Kampung<span className="text-emerald-600">siCapit</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau langsung booking paket rafting 
            impian Anda. Tim kami siap membantu!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                  <info.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{info.label}</p>
                  <p className="font-semibold text-gray-900">{info.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{info.desc}</p>
                </div>
              </div>
            ))}

            {/* Google Maps Embed */}
            <div className="mt-6 rounded-xl overflow-hidden border h-52">
              <iframe
                src="https://maps.google.com/maps?q=Kampung+Wisata+SiCapit+Gg+Flamboyan+I+Semplak+Bogor+Barat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kampung Sicapit"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/fibsTokQEMytXsGRA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Buka di Google Maps
            </a>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Formulir Booking</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        placeholder="Masukkan nama Anda"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">No. WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@contoh.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="package">Pilih Paket</Label>
                      <Select
                        value={formData.package}
                        onValueChange={(val) => setFormData({ ...formData, package: val })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih paket rafting" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pamili">Paket Pamili - Rp 150.000</SelectItem>
                          <SelectItem value="konservasi">Paket Konservasi - Rp 200.000</SelectItem>
                          <SelectItem value="petualangan">Paket Petualangan - Rp 350.000 (Min. 10 Orang)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Tanggal Keberangkatan</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="participants">Jumlah Peserta</Label>
                      <Input
                        id="participants"
                        type="number"
                        min="1"
                        max="100"
                        placeholder="Jumlah orang"
                        value={formData.participants}
                        onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Catatan Tambahan</Label>
                    <Textarea
                      id="message"
                      placeholder="Ada permintaan khusus? (opsional)"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-xl font-semibold text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Booking
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
