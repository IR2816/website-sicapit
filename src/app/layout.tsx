import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kampung Wisata Si Capit | Desa Wisata Garut",
    template: "%s | Si Capit",
  },
  description: "Eksplorasi alam asri, keseruan bermain air, dan hangatnya budaya lokal di Kampung Wisata Si Capit. Destinasi wisata terbaik di Garut untuk petualangan dan liburan keluarga.",
  keywords: ["Wisata Garut", "Kampung Wisata Si Capit", "Desa Wisata", "Rafting Garut", "Liburan Alam", "Spot Foto Hijau"],
  authors: [{ name: "Kampung Wisata Si Capit" }],
  creator: "Kampung Wisata Si Capit",
  publisher: "Kampung Wisata Si Capit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kampung Wisata Si Capit | Desa Wisata Garut",
    description: "Eksplorasi alam asri, keseruan bermain air, dan hangatnya budaya lokal di Kampung Wisata Si Capit.",
    url: "https://sicapit.com", // Ganti dengan domain asli nanti
    siteName: "Kampung Wisata Si Capit",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampung Wisata Si Capit",
    description: "Destinasi wisata alam terbaik di Garut untuk petualangan dan keluarga.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0a0a0a] text-slate-100">{children}</body>
    </html>
  );
}
