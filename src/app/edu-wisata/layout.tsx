import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edu Wisata Anak & Outbound Bogor - Kampung Wisata Sicapit',
  description: 'Program edu wisata anak & outbound di Kampung Wisata Sicapit. Field trip, agrowisata, kuliner tradisional, dan workshop budaya untuk semua usia.',
  keywords: ['wisata edukasi bogor', 'edu wisata anak', 'outbound bogor', 'field trip bogor', 'wisata belajar', 'kampung wisata sicapit', 'wisata pendidikan bogor'],
  authors: [{ name: 'Kampung Wisata Sicapit' }],
  openGraph: {
    title: 'Edu Wisata Anak & Outbound Bogor - Kampung Wisata Sicapit',
    description: 'Program edu wisata & outbound di Kampung Wisata Sicapit. Agrowisata, kuliner tradisional, dan workshop budaya.',
    type: 'website',
    url: 'https://sicapit.vercel.app/edu-wisata',
    siteName: 'Kampung Wisata Sicapit',
    images: [{ url: 'https://sicapit.vercel.app/hero-kampung.png', width: 1200, height: 630, alt: 'Edu Wisata Kampung Sicapit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edu Wisata Anak & Outbound Bogor - Kampung Wisata Sicapit',
    description: 'Program edu wisata & outbound di Kampung Wisata Sicapit untuk semua usia.',
  },
};

export default function EduWisataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
