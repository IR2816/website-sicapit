'use client'

import { SiteNav } from '@/app/sections/site-nav'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { normalizePhoneForWhatsApp } from '@/lib/validation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ArrowLeft, Scissors, Phone, Music, Hammer, Palette, Gift, Clock, Users, CheckCircle2, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function KerajinanTanganPage() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE

  return (
    <div className="min-h-screen flex flex-col bg-surface text-foreground antialiased selection:bg-brand selection:text-white">
      <SiteNav brand="Sicapit" />
      <PageBreadcrumb items={[{ label: 'Edu Wisata', href: '/edu-wisata' }, { label: 'Kerajinan Tangan' }]} />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0">
          <Image src="/assets/edu-wisata/musik-sunda.jpg" alt="Kerajinan Tangan Sicapit" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-surface" />
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-1.5 mb-6 rounded-sm font-mono text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
            <Scissors className="w-3.5 h-3.5 mr-1.5 inline" /> Edu Wisata
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Kesenian & <span className="text-purple-400">Kerajinan</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Belajar membuat kerajinan lokal dan mengenal alat musik tradisional.
          </p>
          <Link href="/edu-wisata">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 mb-12">
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Edu Wisata
            </Button>
          </Link>
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: '3+', label: 'Jenis Kerajinan' },
              { value: '100%', label: 'Buatan Tangan' },
            ].map((stat, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/8 backdrop-blur-sm px-5 py-3">
                  <div className="text-xl font-heading font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
          <ChevronDown className="w-7 h-7" aria-label="Scroll ke bawah" />
        </div>
      </section>

      {/* Content Section */}
      <main className="flex-1 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-line lg:order-1 order-2 shadow-2xl">
              <Image src="/assets/images/3.jpg" alt="Alat Kesenian Desa" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-purple-500/80 text-white border-0 text-xs backdrop-blur-sm">Kesenian Tradisional</Badge>
              </div>
            </div>
            <div className="lg:order-2 order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-500/20 bg-purple-500/8 text-purple-500 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                <Scissors className="w-3 h-3" /> Kerajinan Tangan
              </div>
              <h2 className="text-3xl font-heading font-bold mb-6">Warisan Kreativitas Desa</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Warga di sini masih aktif membuat kerajinan bambu dan memainkan alat musik Sunda. Melalui program ini, pengunjung bisa melihat langsung proses pembuatannya dan mencoba memainkannya.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Kerajinan Bambu', icon: Hammer, desc: 'Membuat suvenir sederhana dari bahan baku bambu lokal.' },
                  { title: 'Alat Musik Sunda', icon: Music, desc: 'Mengenal dan berlatih memainkan harmoni tradisional.' },
                  { title: 'Seni Kreatif', icon: Palette, desc: 'Ekspresikan diri Anda dengan gaya seni khas desa.' },
                  { title: 'Oleh-oleh Karya Sendiri', icon: Gift, desc: 'Bawa pulang hasil buatan tangan sebagai kenang-kenangan.' },
                ].map((item, i) => (
                  <div key={i} className="group p-5 rounded-2xl bg-surface-strong/50 border border-line hover:bg-surface hover:border-purple-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex gap-4 relative z-10">
                      <div className="bg-surface border border-line group-hover:border-purple-500/20 group-hover:bg-purple-500/10 p-3 rounded-xl text-purple-500 h-fit shadow-sm transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-purple-500 transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Practical Info Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 mb-3">Info Praktis</Badge>
            <h2 className="text-2xl font-heading font-bold">Informasi Workshop</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Durasi Workshop', desc: 'Sesi berlangsung 1-2 jam dengan pendampingan penuh.' },
              { icon: Users, title: 'Peserta', desc: 'Minimal 10 orang. Terbuka untuk sekolah dan komunitas.' },
              { icon: CheckCircle2, title: 'Yang Disediakan', desc: 'Bahan baku, alat kerja, dan instruktur lokal.' },
              { icon: Gift, title: 'Hasil Karya', desc: 'Peserta membawa pulang suvenir buatan sendiri.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-line bg-surface text-center hover:border-purple-500/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-purple-500" />
                </div>
                <h4 className="font-bold text-foreground mb-1.5">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-surface-strong border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 mb-3">Galeri</Badge>
            <h2 className="text-2xl font-heading font-bold">Galeri Kerajinan</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/assets/edu-wisata/angklung.png', alt: 'Angklung tradisional Sunda', span: 'md:col-span-1 md:row-span-2 aspect-[4/3] md:aspect-auto' },
              { src: '/assets/edu-wisata/gamelan.png', alt: 'Alat musik gamelan', span: 'aspect-[4/3]' },
              { src: '/assets/edu-wisata/musik-sunda.jpg', alt: 'Musik tradisional Sunda', span: 'aspect-[4/3]' },
            ].map((img, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden border border-line group ${img.span}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-16 bg-surface border-t border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 mb-3">FAQ</Badge>
            <h2 className="text-2xl font-heading font-bold">Pertanyaan Umum</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: 'Apakah perlu pengalaman sebelumnya?', a: 'Tidak perlu. Workshop ini dirancang untuk pemula dengan pendampingan instruktur berpengalaman.' },
              { q: 'Usia berapa yang boleh ikut?', a: 'Semua usia bisa berpartisipasi. Anak-anak di bawah 10 tahun sebaiknya didampingi orang tua.' },
              { q: 'Apakah hasil kerajinan bisa dibawa pulang?', a: 'Ya, semua hasil karya peserta boleh dibawa pulang sebagai kenang-kenangan.' },
              { q: 'Bisakah request jenis kerajinan tertentu?', a: 'Kami menyediakan beberapa pilihan. Hubungi kami untuk request khusus sesuai kebutuhan rombongan Anda.' },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-line rounded-xl px-5 bg-surface-strong/50 hover:border-purple-500/30 transition-colors">
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-purple-500 hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#150a1f] via-[#1e0f2b] to-[#150a1f] relative overflow-hidden border-t border-line">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <Scissors className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Informasi Kunjungan</h2>
          <p className="text-white/60 mb-8 text-lg">Hubungi kami jika Anda ingin mengadakan kunjungan kelompok atau sekolah untuk sesi kerajinan tangan.</p>
          {contactPhone && (
            <a href={`https://wa.me/${normalizePhoneForWhatsApp(contactPhone)}?text=Halo,%20saya%20tertarik%20mencoba%20Kesenian%20dan%20Kerajinan%20Tangan`} target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-7 text-lg rounded-2xl shadow-lg font-bold">
                <Phone className="w-5 h-5 mr-2 fill-white" /> Info Lebih Lanjut
              </Button>
            </a>
          )}
        </div>
      </section>
    </div>
  )
}
