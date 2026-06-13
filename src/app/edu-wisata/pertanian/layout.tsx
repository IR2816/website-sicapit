import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wisata Pertanian & Agrowisata Bogor - Kampung Sicapit',
  description: 'Agrowisata interaktif di Kampung Wisata Sicapit. Belajar bertani organik, panen sayuran segar, dan pahami siklus pertanian tradisional Bogor.',
  keywords: ['wisata pertanian bogor', 'agrowisata bogor', 'belajar bertani', 'agro edukasi', 'pertanian organik bogor'],
  openGraph: {
    title: 'Wisata Pertanian & Agrowisata Bogor - Kampung Sicapit',
    description: 'Belajar bertani organik dan panen sayuran segar di agrowisata Kampung Sicapit.',
    type: 'website',
    url: 'https://sicapit.vercel.app/edu-wisata/pertanian',
    siteName: 'Kampung Wisata Sicapit',
  },
};

export default function PertanianLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
