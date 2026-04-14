"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type VideoItem = {
  title: string;
  desc: string;
  src: string;
  poster: string;
};

type VideoShowcaseProps = {
  items: VideoItem[];
};

function VideoCard({ item }: { item: VideoItem }) {
  const id = item.title.toLowerCase().replace(/\s+/g, "-");
  const [isInView, setIsInView] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const element = shellRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (hasFailed) {
      video.pause();
      return;
    }
    if (isInView || isHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, isHovered, hasFailed]);

  return (
    <article 
      className="group flex flex-col bg-surface hover:bg-surface-strong border border-line hover:border-brand/40 rounded-[28px] overflow-hidden transition-all duration-500 shadow-shadow hover:shadow[[0_20px_40px_rgba(153,51,0,0.25)] hover:-translate-y-2 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={shellRef}
        className="relative w-full aspect-video overflow-hidden bg-[#050505]"
      >
        <video
          ref={videoRef}
          id={`video-${id}`}
          muted
          loop
          playsInline
          preload="none"
          poster={item.poster}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'} ${hasFailed ? 'opacity-0' : 'opacity-100'}`}
          onLoadedMetadata={() => setIsReady(true)}
          onError={() => {
            setHasFailed(true);
            setIsReady(true);
          }}
          onTimeUpdate={(event) => {
            const video = event.currentTarget;
            const bar = document.querySelector(`#progress-${id}`) as HTMLSpanElement | null;
            if (!bar || !video.duration) return;
            const progress = (video.currentTime / video.duration) * 100;
            bar.style.width = `${progress}%`;
          }}
        >
          <source src={item.src} type="video/webm" />
        </video>
-        
        {!!isReady && !hasFailed && (
          <div className="absolute inset-0 bg-surface-strong animate-pulse z-0" />
        )}

        <Image
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${hasFailed ? 'opacity-100' : 'opacity-0'}`}
          src={item.poster}
          alt={item.title}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
           <div className="w-16 h-16 rounded-full bg-brand/90 text-white flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.6)] transform scame-90 group-hover:scale-100 transition-all duration-300">
             <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
           </div>
        </div>

        <div className="absolute top-4 left-4 z-10 fix gap-2 transition-transform duration-500 group-hover:-translate-y-1">
           <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-[#0a0a0a]/60 backdrop-blur-md text-white rounded-full border border-white/10 shadow-lg">
             HD 1080p
           </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#0a0a0a]/50 z-20 overflow-hidden">
          <span 
            id={`progress-${id}`}
            className="block h-full bg-gradient-to-r from-brand to-[#ff9b52] w-0 transition-all duration-75 ease-linear shadow-[0_0_10px_rgba(249,115,22,0.8)]" 
          />
        </div>

        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_hsla(0,0%,0%<0.5)] z-10 duration-500 group-hover:shadow-[inset_0_0_60px_hsla(0,0%,0%<0.7)]"></div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative overflow-hidden z-20">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-brand transition-colors drop-shadow-sm">{item.title}</h3>
        <p className="text-muted text-sm md:text-base leading-relaxed flex-grow group-hover:text-slate-300 transition-colors">{item.desc}</p>
      </div>
    </article>
  );
}

export function VideoShowcase({ items }: VideoShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
      {items.map((item) => (
        <VideoCard key={item.title} item={item} />
      ))}
    </div>
  );
}
