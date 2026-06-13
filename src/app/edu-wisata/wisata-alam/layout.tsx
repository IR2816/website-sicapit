import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wisata Alam & Trekking Bogor - Kampung Sicapit',
  description: 'Jelajahi wisata alam Kampung Wisata Sicapit. Trekking ringan, jalan setapak desa, dan suasana sungai yang asri untuk rekreasi keluarga di Bogor.',
  keywords: ['wisata alam bogor', 'hiking bogor', 'trekking sungai bogor', 'jalur alam desa', 'wisata outdoor bogor'],
  openGraph: {
    title: 'Wisata Alam & Trekking Bogor - Kampung Sicapit',
    description: 'Trekking ringan dan suasana alam asri untuk rekreasi keluarga di Kampung Sicapit.',
    type: 'website',
    url: 'https://sicapit.vercel.app/edu-wisata/wisata-alam',
    siteName: 'Kampung Wisata Sicapit',
  },
};

export default function WisataAlamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
