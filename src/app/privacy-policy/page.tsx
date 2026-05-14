import { SiteNav } from '@/app/sections/site-nav'
import { SiteFooter as Footer } from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Kampung Wisata Sicapit',
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-surface dark:bg-background min-h-screen flex flex-col">
      <SiteNav brand="Sicapit" />
      <main className="flex-1 container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white">Kebijakan Privasi (Privacy Policy)</h1>
        <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6">
          <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
          <p>Selamat datang di Kampung Wisata Sicapit. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda bagikan kepada kami.</p>
          
          <h2 className="text-2xl font-bold text-foreground dark:text-white mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara langsung kepada kami saat Anda menghubungi kami via WhatsApp, melakukan reservasi, atau berlangganan pembaruan pemasaran. Ini mungkin termasuk nama, alamat email, nomor telepon, dan rincian pemesanan Anda.</p>

          <h2 className="text-2xl font-bold text-foreground dark:text-white mt-8 mb-4">2. Penggunaan Informasi</h2>
          <p>Informasi yang kami kumpulkan digunakan untuk:</p>
          <ul className="list-disc pl-6">
            <li>Memproses dan mengkonfirmasi reservasi kunjungan atau paket wisata.</li>
            <li>Berkomunikasi dengan Anda terkait layanan, syarat, dan pembaruan operasional.</li>
            <li>Melakukan perbaikan pengalaman wisatawan di Kampung Sicapit.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground dark:text-white mt-8 mb-4">3. Perlindungan Data</h2>
          <p>Kami menggunakan standar keamanan yang wajar untuk melindungi informasi Anda dari akses, perubahan, atau pengungkapan yang tidak sah.</p>

          <h2 className="text-2xl font-bold text-foreground dark:text-white mt-8 mb-4">4. Perubahan Kebijakan</h2>
          <p>Kami berhak memperbarui kebijakan ini sesekali. Kebijakan yang diperbarui akan diposting di halaman ini. Kami mengundang Anda untuk memeriksanya secara berkala.</p>

          <h2 className="text-2xl font-bold text-foreground dark:text-white mt-8 mb-4">Hubungi Kami</h2>
          <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kontak pengurus yang tercantum di menu bawah halaman.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}