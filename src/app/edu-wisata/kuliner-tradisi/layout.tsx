import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kuliner Tradisional Bogor & Masakan Khas Sunda - Kampung Sicapit',
  description: 'Cicipi kuliner tradisional di Kampung Wisata Sicapit. Masakan khas Sunda dengan bahan segar dari kebun lokal, dimasak resep turun-temurun.',
  keywords: ['kuliner tradisional bogor', 'makanan khas sunda', 'wisata kuliner bogor', 'masakan desa bogor', 'kuliner sunda bogor'],
  openGraph: {
    title: 'Kuliner Tradisional Bogor - Kampung Sicapit',
    description: 'Masakan khas Sunda dengan bahan segar lokal dan resep turun-temurun di Kampung Sicapit.',
    type: 'website',
    url: 'https://sicapit.vercel.app/edu-wisata/kuliner-tradisi',
    siteName: 'Kampung Wisata Sicapit',
  },
};

export default function KulinerTradisiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
