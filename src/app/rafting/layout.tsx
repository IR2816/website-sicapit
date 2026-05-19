import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kampung Sicapit - Wisata Rafting & River Tubing Bogor',
  description: 'Wisata air Kampung Sicapit di Bogor - Rafting & River Tubing di Sungai Cisadane. Lokasi strategis di Kelurahan Semplak, hanya 10 km dari pusat kota. Pesan sekarang!',
  keywords: ['rafting', 'arung jeram', 'river tubing', 'wisata bogor', 'kampung sicapit', 'sungai cisadane', 'wisata air', 'adventure'],
  authors: [{ name: 'Kampung Sicapit' }],
  icons: {
    icon: '/assets/images/Icon.jpg',
  },
  openGraph: {
    title: 'Kampung Sicapit - Wisata Rafting Bogor',
    description: 'Wisata rafting & river tubing di Sungai Cisadane, Bogor',
    type: 'website',
  },
};

export default function RaftingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
