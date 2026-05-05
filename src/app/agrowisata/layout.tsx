export const metadata = {
  title: 'Pusat Agrowisata - Kampung Wisata Sicapit',
  description: 'Jelajahi keindahan agrowisata, pertanian berkelanjutan, dan kearifan lokal di Kampung Wisata Sicapit. Dapatkan pengalaman tak terlupakan belajar langsung dari alam.',
  openGraph: {
    title: 'Pusat Agrowisata - Kampung Wisata Sicapit',
    description: 'Jelajahi keindahan agrowisata, pertanian berkelanjutan, dan kearifan lokal.',
    images: [{ url: 'https://sicapit.vercel.app/hero-kampung.png', width: 1200, height: 630 }],
  }
}

export default function AgrowisataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}