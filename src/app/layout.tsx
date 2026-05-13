import { TransitionScreen } from "@/components/TransitionScreen";
import { SiteFooter } from "@/components/Footer";
import { JsonLdScripts } from "@/components/JsonLdScripts";
import { Providers } from "@/components/Providers";
import { ThemeInitializer } from "@/components/ThemeInitializer";
import NextTopLoader from "nextjs-toploader";
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
    default: "Kampung Wisata Sicapit | Pesona Alam & Edukasi Budaya Bogor",
    template: "%s | Sicapit",
  },
  description: "Rasakan ketenangan alam, pacu adrenalin dengan rafting, dan pelajari budaya lokal di Kampung Wisata Sicapit. Destinasi wisata terpadu terbaik di Bogor.",
  keywords: ["Wisata Bogor", "Kampung Wisata", "Kampung Sicapit", "Rafting Cisadane", "Wisata Edukasi", "Agrowisata", "Liburan Alam Bogor", "Sungai Cisadane", "BUMDES Semplak"],
  authors: [{ name: "Kampung Wisata Sicapit" }],
  creator: "Kampung Wisata Sicapit",
  publisher: "Kampung Wisata Sicapit",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sicapit.vercel.app/",
    siteName: "Kampung Wisata Sicapit",
    title: "Kampung Wisata Sicapit | Pesona Alam & Edukasi Budaya",
    description: "Rasakan ketenangan alam, pacu adrenalin dengan rafting, dan pelajari budaya lokal di Kampung Wisata Sicapit.",
    images: [{ url: "https://sicapit.vercel.app/hero-kampung.png", width: 1200, height: 630, alt: "Kampung Wisata Sicapit" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampung Wisata Sicapit | Pesona Alam & Edukasi Budaya",
    description: "Destinasi wisata alam terpadu terbaik di Bogor untuk berpetualang dan bersantai bersama keluarga.",
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-surface text-foreground transition-colors duration-300">
        <Providers>
          <ThemeInitializer>
            <NextTopLoader color="#dc2626" showSpinner={false} />
            <JsonLdScripts />
            <TransitionScreen />
            {children}
            <SiteFooter />
          </ThemeInitializer>
        </Providers>
      </body>
    </html>
  );
}





