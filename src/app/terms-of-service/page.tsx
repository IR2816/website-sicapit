import SiteNav from '@/sections/site-nav'
import { SiteFooter as Footer } from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - Kampung Wisata Sicapit',
}

export default function TermsOfService() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SiteNav brand="Sicapit" />
      <main className="flex-1 container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Syarat & Ketentuan (Terms of Service)</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
          <p>Dengan mengakses atau menggunakan situs web dan layanan Kampung Wisata Sicapit, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Layanan Kami</h2>
          <p>Kampung Wisata Sicapit menyediakan informasi publik tentang aktivitas rekreasi, edukasi, agrowisata, dan rafting. Aktivitas fisik tertentu mungkin memiliki batasan usia dan memerlukan persetujuan risiko sebelum pelaksanaan.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Reservasi & Pembatalan</h2>
          <p>Reservasi untuk aktivitas wisata (termasuk rafting, camping, dll.) bergantung pada ketersediaan. Pengembalian uang untuk pembatalan acara dapat tunduk pada kebijakan khusus yang akan disampaikan pada saat reservasi bersama tim kami.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Keselamatan</h2>
          <p>Wisatawan wajib mematuhi seluruh petunjuk keselamatan dari instruktur dan pemandu wisata, khususnya untuk area rafting. Pengelola tidak bertanggung jawab atas insiden atau cedera yang secara langsung disebabkan oleh kelalaian pengunjung dalam mengikuti arahan.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Hak Kekayaan Intelektual</h2>
          <p>Semua konten dalam website ini, termasuk teks, gambar, video, dan logo dilindungi hak cipta dan tidak boleh disalin tanpa izin tertulis dari pihak pengelola.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}