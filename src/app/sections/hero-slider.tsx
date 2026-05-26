/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const images = [
  { src: "/assets/images/1.jpg", alt: "Pemandangan Kampung Wisata Sicapit" },
  { src: "/assets/images/5.jpg", alt: "Suasana Asri Alam Sicapit" },
  { src: "/assets/images/rafting/8.jpeg", alt: "Aktivitas rafting di Kampung Wisata Sicapit" },
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
          className={`absolute inset-0 transition-[opacity,transform] duration-[1400ms] ease-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className={`object-cover transition-transform duration-[12000ms] ease-out ${
              index === currentIndex ? "scale-100" : "scale-[1.03]"
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
              ? 'bg-gradient-to-b from-white/55 via-white/30 to-white/10' 
              : 'bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/45 to-[#0a0a0a]/85'
          }`} 
        />
      )}
    </div>
  );
}


