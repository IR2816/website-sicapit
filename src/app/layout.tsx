import { TransitionScreen } from "@/components/TransitionScreen";
import { SiteFooter } from "@/components/Footer";
import { JsonLdScripts } from "@/components/JsonLdScripts";
import { Providers } from "@/components/Providers";
import { ThemeInitializer } from "@/components/ThemeInitializer";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, DM_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kampung Wisata Sicapit | Pesona Alam & Edukasi Budaya Bogor",
    template: "%s | Sicapit",
  },
  description: "Rasakan ketenangan alam, pacu adrenalin dengan rafting, dan pelajari budaya lokal di Kampung Wisata Sicapit. Destinasi wisata terpadu terbaik di Bogor.",
  keywords: ["kampung wisata sicapit", "wisata bogor", "desa wisata", "kampung wisata bogor", "wisata edukasi bogor", "wisata alam bogor", "BUMDES Semplak", "liburan alam bogor"],
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
      className={cn("h-full", "antialiased", "scroll-smooth", sourceSerif.variable, playfair.variable, dmMono.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-surface text-foreground transition-colors duration-300">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}
        <Providers>
          <ThemeInitializer>
            <NextTopLoader color="#dc2626" showSpinner={false} />
            <JsonLdScripts />
            <TransitionScreen />
            {children}
            <SiteFooter />
          </ThemeInitializer>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}





