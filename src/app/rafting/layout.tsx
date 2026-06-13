import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rafting Sungai Cisadane - Kampung Wisata Sicapit Bogor',
  description: 'Arung jeram & river tubing di Sungai Cisadane bersama Kampung Wisata Sicapit. Paket rafting mulai 5km, cocok untuk pemula hingga berpengalaman. Pesan sekarang!',
  keywords: ['rafting bogor', 'arung jeram sicapit', 'rafting sungai cisadane', 'paket rafting bogor', 'wisata air bogor', 'rafting murah bogor', 'river tubing bogor'],
  authors: [{ name: 'Kampung Wisata Sicapit' }],
  openGraph: {
    title: 'Rafting Sungai Cisadane - Kampung Wisata Sicapit Bogor',
    description: 'Arung jeram & river tubing di Sungai Cisadane. Paket rafting untuk semua tingkat, dipandu skipper bersertifikasi.',
    type: 'website',
    url: 'https://sicapit.vercel.app/rafting',
    siteName: 'Kampung Wisata Sicapit',
    images: [{ url: 'https://sicapit.vercel.app/hero-kampung.png', width: 1200, height: 630, alt: 'Rafting Kampung Wisata Sicapit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafting Sungai Cisadane - Kampung Wisata Sicapit Bogor',
    description: 'Arung jeram & river tubing di Sungai Cisadane. Paket rafting untuk semua tingkat.',
  },
};

export default function RaftingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
