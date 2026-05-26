'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteNav } from '@/app/sections/site-nav'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

export default function EduWisataHome() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <SiteNav brand="Sicapit" />

      <main className="pt-20">
        <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-line">
          <div className="absolute inset-0">
            <Image
              src="/hero-kampung.png"
              alt="Edu Wisata Sicapit"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-surface" />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Badge className="bg-brand/12 text-brand border-brand/25 px-3 py-1 rounded-sm font-mono text-xs uppercase tracking-[0.2em]">
                WIP · Edu Wisata
              </Badge>
              <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Halaman Edu Wisata sedang kami susun.
              </h1>
              <p className="mt-4 text-lg text-white/75 leading-relaxed">
                Konten utama, galeri, dan panduan aktivitas Edu Wisata masih dalam tahap perapihan. Kami akan menambahkan detail lengkapnya segera.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand text-white hover:bg-brand/90 px-8 py-6 text-base font-bold rounded-2xl">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Kembali ke Beranda
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-bold rounded-2xl">
                  <Link href="/rafting">
                    Lihat Rafting
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="space-y-4">
                <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs font-mono">Sedang Dipersiapkan</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold">Struktur Edu Wisata</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Kami sedang menyusun narasi, foto, serta detail aktivitas agar pengalaman Edu Wisata dapat dipahami dengan jelas.
                </p>
              </div>
              <div className="rounded-3xl border border-line bg-surface-strong/60 p-6">
                <div className="flex items-center gap-3 text-brand">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold text-sm uppercase tracking-[0.2em]">Checklist WIP</span>
                </div>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li>Detail kegiatan pertanian & edukasi</li>
                  <li>Jadwal kunjungan dan alur pengalaman</li>
                  <li>Galeri kegiatan warga dan workshop</li>
                  <li>Informasi paket Edu Wisata</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
