import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshop Batik & Seni Budaya Bogor - Kampung Sicapit',
  description: 'Workshop batik & seni budaya di Kampung Wisata Sicapit. Belajar tarian Jaipong, teknik batik, dan motif tradisional langsung dari pengrajin lokal.',
  keywords: ['workshop batik bogor', 'belajar batik', 'batik tulis bogor', 'seni budaya bogor', 'tarian jaipong bogor'],
  openGraph: {
    title: 'Workshop Batik & Seni Budaya - Kampung Sicapit',
    description: 'Belajar batik, tarian Jaipong, dan motif tradisional dari pengrajin lokal di Kampung Sicapit.',
    type: 'website',
    url: 'https://sicapit.vercel.app/edu-wisata/workshop-batik',
    siteName: 'Kampung Wisata Sicapit',
  },
};

export default function WorkshopBatikLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
