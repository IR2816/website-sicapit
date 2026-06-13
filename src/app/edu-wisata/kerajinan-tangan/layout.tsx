import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kerajinan Tangan & Workshop Seni Bogor - Kampung Sicapit',
  description: 'Workshop kerajinan tangan di Kampung Wisata Sicapit. Buat suvenir bambu, mainkan alat musik Sunda, dan bawa pulang karya buatan tangan Anda.',
  keywords: ['kerajinan tangan bogor', 'workshop kerajinan', 'souvenir khas bogor', 'seni tradisional bogor', 'kerajinan bambu bogor'],
  openGraph: {
    title: 'Kerajinan Tangan & Workshop Seni - Kampung Sicapit',
    description: 'Buat suvenir bambu dan mainkan alat musik Sunda di workshop kerajinan Kampung Sicapit.',
    type: 'website',
    url: 'https://sicapit.vercel.app/edu-wisata/kerajinan-tangan',
    siteName: 'Kampung Wisata Sicapit',
  },
};

export default function KerajinanTanganLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
