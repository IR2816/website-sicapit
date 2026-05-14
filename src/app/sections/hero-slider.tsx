"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const images = [
  { src: "/assets/images/1.jpg", alt: "Pemandangan Kampung Wisata Sicapit" },
  { src: "/assets/images/5.jpg", alt: "Suasana Asri Alam Sicapit" },
  { src: "/assets/images/7.jpg", alt: "Keseharian Warga Lokal" },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  const isLight = theme === 'light' || (theme === 'system' && systemTheme === 'light');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className={`object-cover scale-105 transition-transform duration-[10000ms] ${
              index === currentIndex ? "scale-100" : ""
            }`}
            priority={index === 0}
            quality={75}
          />
        </div>
      ))}
      {mounted && (
        <div 
          className={`absolute inset-0 z-10 ${
            isLight 
              ? 'bg-gradient-to-b from-white/70 via-white/50 to-white/30' 
              : 'bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]'
          }`} 
        />
      )}
    </div>
  );
}


