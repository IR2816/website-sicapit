'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteNav } from '@/app/sections/site-nav'
import { Badge } from '@/components/ui/badge'

export default function EduWisataEdukasiPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <SiteNav brand="Sicapit" />

      <main className="pt-20">
        <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-line">
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

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="bg-brand/12 text-brand border-brand/25 px-3 py-1 rounded-sm font-mono text-xs uppercase tracking-[0.2em]">
              WIP · Edu Wisata
            </Badge>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">Edukasi</h1>
            <p className="mt-4 text-lg text-white/75 leading-relaxed">
              Halaman ini masih dalam tahap persiapan (Template). Detail informasi, rundown acara, dan panduan lengkap akan segera ditambahkan di sini.
            </p>
            <Link
              href="/edu-wisata"
              className="mt-6 inline-flex items-center text-white/85 hover:text-white transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Edu Wisata
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface-strong/70 border border-line rounded-[2rem] p-12 h-80 flex flex-col items-center justify-center shadow-sm">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6 animate-pulse border border-line">
                <span className="text-2xl">🚧</span>
              </div>
              <p className="text-muted-foreground text-lg text-center font-medium">Segera Hadir</p>
              <p className="text-muted-foreground/60 text-sm text-center mt-2">Struktur komponen akan ditambahkan kemudian.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
