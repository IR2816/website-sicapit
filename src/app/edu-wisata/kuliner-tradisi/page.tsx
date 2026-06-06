'use client'

import { SiteNav } from '@/app/sections/site-nav'
import { normalizePhoneForWhatsApp } from '@/lib/validation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ChefHat, Coffee, Flame, Phone, UtensilsCrossed } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function KulinerTradisiPage() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE

  return (
    <div className="min-h-screen flex flex-col bg-surface text-foreground antialiased selection:bg-brand selection:text-white">
      <SiteNav brand="Sicapit" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image src="/assets/images/7.jpg" alt="Kuliner Tradisi Sicapit" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-surface" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30 px-3 py-1 mb-4 rounded-sm font-mono text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
            <UtensilsCrossed className="w-3.5 h-3.5 mr-1.5 inline" /> Edu Wisata
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Kuliner <span className="text-amber-500">Tradisi</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Mencicipi masakan lokal khas desa yang dibuat menggunakan bahan-bahan dari kebun sendiri.
          </p>
          <Link href="/edu-wisata">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Edu Wisata
            </Button>
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <main className="flex-1 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Cita Rasa Khas Kampung Sicapit</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Program kuliner mengajak Anda mencoba masakan rumahan khas warga Sicapit. Anda juga berkesempatan untuk melihat proses memasaknya secara langsung.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Resep Leluhur', icon: UtensilsCrossed, desc: 'Masakan yang dimasak dengan bumbu rahasia turun-temurun.' },
                  { title: 'Tungku Kayu Bakar', icon: Flame, desc: 'Aroma khas dari proses memasak tradisional.' },
                  { title: 'Bahan Segar', icon: ChefHat, desc: 'Bahan masakan diambil langsung dari kebun pada hari itu juga.' },
                  { title: 'Kopi & Wedang', icon: Coffee, desc: 'Minuman hangat lokal untuk menemani pagi atau sore Anda.' },
                ].map((item, i) => (
                  <div key={i} className="group p-5 rounded-2xl bg-surface-strong/50 border border-line hover:bg-surface hover:border-amber-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex gap-4 relative z-10">
                      <div className="bg-surface border border-line group-hover:border-amber-500/20 group-hover:bg-amber-500/10 p-3 rounded-xl text-amber-500 h-fit shadow-sm transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-amber-500 transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-line">
              <Image src="/assets/images/7.jpg" alt="Menikmati Makanan Lokal" fill className="object-cover" />
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-surface-strong border-t border-line text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ChefHat className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-heading mb-4">Pesan Paket Kuliner</h2>
          <p className="text-muted-foreground mb-8 text-lg">Pesan paket makan siang tradisional bersama rombongan Anda dengan menu khas Kampung Sicapit.</p>
          {contactPhone && (
            <a href={`https://wa.me/${normalizePhoneForWhatsApp(contactPhone)}?text=Halo,%20saya%20tertarik%20dengan%20paket%20Kuliner%20Tradisional`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl">
                <Phone className="w-5 h-5 mr-2 fill-white" /> Reservasi via WhatsApp
              </Button>
            </a>
          )}
        </div>
      </section>
    </div>
  )
}
