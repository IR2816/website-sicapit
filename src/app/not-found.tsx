import Link from 'next/link'
import { ChevronRight, Home, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-surface via-surface-strong to-surface flex items-center justify-center px-4 py-12 lg:py-20">
      <div className="w-full max-w-2xl">
        {/* Error Animation Container */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Error Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full w-32 h-32 animate-pulse"></div>
            <div className="relative bg-red-100/20 border border-red-500/30 rounded-full p-6 backdrop-blur-sm">
              <AlertTriangle className="w-16 h-16 text-red-500" strokeWidth={1.5} />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-malam">
              404
            </h1>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-malam/90 mb-2">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Sepertinya jalan yang Anda ambil tersesat di perjalanan menuju Kampung Sicapit. Mari kita kembali ke jalur yang tepat.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-brand text-white hover:bg-brand/90 font-bold rounded-xl shadow-lg shadow-brand/20 group gap-2"
              >
                <Home className="w-5 h-5" />
                Kembali ke Beranda
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/rafting" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-brand/50 text-malam hover:bg-brand/5 font-bold rounded-xl gap-2"
              >
                Jelajahi Rafting
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full pt-8 border-t border-line">
            <Link
              href="/"
              className="group p-4 rounded-xl border border-line hover:border-brand/50 hover:bg-brand/5 transition-all text-center"
            >
              <p className="text-sm font-semibold text-malam group-hover:text-brand transition-colors">
                Beranda
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Mulai dari sini
              </p>
            </Link>
            <Link
              href="/rafting"
              className="group p-4 rounded-xl border border-line hover:border-brand/50 hover:bg-brand/5 transition-all text-center"
            >
              <p className="text-sm font-semibold text-malam group-hover:text-brand transition-colors">
                Rafting
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Paket & booking
              </p>
            </Link>
            <Link
              href="/agrowisata"
              className="group p-4 rounded-xl border border-line hover:border-brand/50 hover:bg-brand/5 transition-all text-center"
            >
              <p className="text-sm font-semibold text-malam group-hover:text-brand transition-colors">
                Agrowisata
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Wisata alam & edukasi
              </p>
            </Link>
          </div>

          {/* Footer Help Text */}
          <div className="mt-8 p-6 bg-blue-100/30 border border-blue-500/30 rounded-2xl backdrop-blur-sm">
            <p className="text-sm text-blue-900/80">
              <span className="font-semibold">Butuh bantuan?</span> Hubungi kami melalui WhatsApp untuk pertanyaan lebih lanjut tentang paket wisata kami.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}