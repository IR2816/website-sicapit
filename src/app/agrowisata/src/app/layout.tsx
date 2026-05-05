import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kampung Wisata - Halaman Edukasi",
  description:
    "Pelajari tentang kampung wisata Indonesia, potensi wisata desa, kegiatan budaya, kuliner tradisional, dan panduan lengkap untuk mengunjungi kampung wisata.",
  keywords: [
    "kampung wisata",
    "wisata desa",
    "edukasi wisata",
    "budaya Indonesia",
    "tourism village",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Kampung Wisata - Halaman Edukasi",
    description: "Pelajari tentang kampung wisata Indonesia dan kekayaan budaya desa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
