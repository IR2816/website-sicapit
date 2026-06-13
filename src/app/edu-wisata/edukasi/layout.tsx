import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Edukasi Kampung Wisata Sicapit',
  description: 'Program edukasi alam dan budaya di Kampung Wisata Sicapit. Pembelajaran outdoor, pengenalan tradisi lokal, dan kegiatan interaktif untuk anak-anak.',
  keywords: ['edukasi alam bogor', 'wisata edukasi anak', 'pembelajaran outdoor', 'edukasi budaya bogor', 'program edukasi desa'],
  openGraph: {
    title: 'Program Edukasi Kampung Wisata Sicapit',
    description: 'Pembelajaran outdoor dan pengenalan tradisi lokal untuk anak-anak di Kampung Wisata Sicapit.',
    type: 'website',
    url: 'https://sicapit.vercel.app/edu-wisata/edukasi',
    siteName: 'Kampung Wisata Sicapit',
  },
};

export default function EdukasiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
