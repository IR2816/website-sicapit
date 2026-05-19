export const metadata = {
  title: 'Edu Wisata Bogor - Wisata Edukasi Pertanian Sicapit',
  description: 'Pelajari pertanian berkelanjutan dan kearifan lokal di Edu Wisata Sicapit. Nikmati pengalaman edukatif langsung dari petani dan komunitas lokal Bogor.',
  keywords: 'Edu Wisata Bogor, Wisata Edukasi Pertanian, Kampung Wisata Edukasi, Belajar Pertanian, Wisata Agro Semplak, Pertanian Organik',
  openGraph: {
    title: 'Edu Wisata Bogor - Wisata Edukasi Pertanian',
    description: 'Pelajari pertanian berkelanjutan dan kearifan lokal di Sicapit.',
    images: [{ url: 'https://sicapit.vercel.app/hero-kampung.png', width: 1200, height: 630 }],
  }
}

export default function EduWisataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}