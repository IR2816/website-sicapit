import { TransitionScreen } from "@/components/TransitionScreen";
import { SiteFooter } from "@/components/Footer";
import type { Metadata } from "next";
import { Inter, Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    default: "Kampung Wisata Sicapit | Desa Wisata Bogor",
    template: "%s | Sicapit",
  },
  description: "Eksplorasi alam asri, keseruan bermain air, dan hangatnya budaya lokal di Kampung Wisata Sicapit. Destinasi wisata terbaik di Bogor untuk petualangan dan liburan keluarga.",
  keywords: ["Wisata Bogor", "Kampung Wisata Sicapit", "Desa Wisata", "Rafting Bogor", "Liburan Alam", "Spot Foto Hijau"],
  authors: [{ name: "Kampung Wisata Sicapit" }],
  creator: "Kampung Wisata Sicapit",
  publisher: "Kampung Wisata Sicapit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kampung Wisata Sicapit | Desa Wisata Bogor",
    description: "Eksplorasi alam asri, keseruan bermain air, dan hangatnya budaya lokal di Kampung Wisata Sicapit.",
    url: "https://sicapit.com", // Ganti dengan domain asli nanti
    siteName: "Kampung Wisata Sicapit",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampung Wisata Sicapit",
    description: "Destinasi wisata alam terbaik di Bogor untuk petualangan dan keluarga.",
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
      className={cn("h-full", "antialiased", "scroll-smooth", inter.variable, montserrat.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0a0a0a] text-slate-100">
        <TransitionScreen />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}





