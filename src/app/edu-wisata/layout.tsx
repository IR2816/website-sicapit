import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kampung Sicapit - Edu Wisata',
  description:
    'Pelajari tentang kampung wisata Sicapit, potensi wisata desa, kegiatan budaya, kuliner tradisional, dan panduan lengkap untuk mengunjungi kampung wisata.',
  keywords: [
    'kampung wisata',
    'wisata desa',
    'edukasi wisata',
    'budaya Indonesia',
    'tourism village',
    'sicapit',
    'edu wisata',
  ],
  icons: {
    icon: '/assets/images/Icon.jpg',
  },
  openGraph: {
    title: 'Kampung Sicapit - Edu Wisata',
    description: 'Pelajari tentang kampung wisata Sicapit dan kekayaan budaya desa',
    type: 'website',
  },
};

export default function EduWisataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
