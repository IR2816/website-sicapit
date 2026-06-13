import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homestay Penginapan Desa Wisata Bogor - Kampung Sicapit',
  description: 'Homestay autentik di Kampung Wisata Sicapit. Menginap di rumah warga, nikmati sarapan lokal, dan rasakan kehidupan perkampungan yang hangat.',
  keywords: ['homestay bogor', 'penginapan desa wisata', 'homestay murah bogor', 'menginap di kampung', 'penginapan bogor'],
  openGraph: {
    title: 'Homestay Penginapan Desa Wisata - Kampung Sicapit',
    description: 'Menginap autentik di rumah warga dengan suasana perkampungan yang hangat di Kampung Sicapit.',
    type: 'website',
    url: 'https://sicapit.vercel.app/edu-wisata/homestay',
    siteName: 'Kampung Wisata Sicapit',
  },
};

export default function HomestayLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
