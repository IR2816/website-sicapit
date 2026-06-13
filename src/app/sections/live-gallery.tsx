"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { galleryImages as items } from "@/lib/data/gallery-images";

export function LiveGallery() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [brokenSources, setBrokenSources] = useState<Record<string, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState(false);

  const activeItem = items[active];
  const resolvedItems = useMemo(() => items.map(item => ({ ...item, resolvedSrc: brokenSources[item.id] ? item.fallback : item.src })), [brokenSources]);

  // Reset loading state when active image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [active]);

  useEffect(() => {
    if (lightboxOpen) return;
    const interval = setInterval(() => setActive(prev => (prev + 1) % items.length), 5500);
    return () => clearInterval(interval);
  }, [lightboxOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActive(p => (p + 1) % items.length);
      if (e.key === "ArrowLeft") setActive(p => (p - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div 
          className="group relative flex-grow aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-[32px] bg-surface-strong border border-line cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          {/* Skeleton placeholder while image loads */}
          {!imageLoaded && (
            <div className="absolute inset-0 z-10 bg-surface-strong animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-3">
                <div className="h-4 w-24 bg-line rounded animate-pulse" />
                <div className="h-8 w-3/4 bg-line rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-line rounded animate-pulse" />
              </div>
            </div>
          )}
          <Image 
            src={resolvedItems[active].resolvedSrc} 
            alt={activeItem.title} 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-[transform,filter,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:contrast-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoadingComplete={() => setImageLoaded(true)}
            onError={() => setBrokenSources(p => ({...p, [activeItem.id]: true}))} 
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="transform transition-all duration-500 translate-y-0 group-hover:-translate-y-1">
              <div className="flex gap-3 mb-3">
                <span className="px-3 py-1 bg-brand/12 text-brand border border-brand/25 rounded-md text-[10px] font-bold uppercase tracking-[0.18em]">Gallery Showcase</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-2">{activeItem.title}</h2>
              <p className="text-muted-foreground dark:text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">{activeItem.caption}</p>
            </div>
          </div>

          <div className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 absolute inset-y-0 left-0 w-1/2 flex items-center justify-start p-4">
            <button onClick={e => { e.stopPropagation(); setActive(p => (p - 1 + items.length) % items.length); }} className="w-14 h-14 rounded-full bg-black/30 text-foreground dark:text-white flex items-center justify-center border border-white/10 transition-colors hover:bg-black/50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
          </div>
          <div className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 absolute inset-y-0 right-0 w-1/2 flex items-center justify-end p-4">
            <button onClick={e => { e.stopPropagation(); setActive(p => (p + 1) % items.length); }} className="w-14 h-14 rounded-full bg-black/30 text-foreground dark:text-white flex items-center justify-center border border-white/10 transition-colors hover:bg-black/50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <aside className="hidden xl:flex w-80 flex-col bg-surface border border-line rounded-[32px] p-8 shadow-sm">
          <span className="text-brand font-bold uppercase tracking-[0.18em] text-sm bg-brand/10 inline-block w-fit px-3 py-1 rounded-md mb-6">Detail Spot</span>
          <h4 className="font-heading text-2xl font-bold mb-4 text-foreground dark:text-white">{activeItem.title}</h4>
          <p className="text-muted-foreground text-base leading-relaxed flex-grow">{activeItem.caption}</p>
          <div className="space-y-4 pt-6 border-t border-line">
            <div className="flex justify-between items-center"><span className="text-sm text-muted-foreground">Urutan</span><strong className="font-mono text-foreground dark:text-white">{String(active + 1).padStart(2, "0")} <span className="text-muted-foreground/60">/ {items.length}</span></strong></div>
            <div className="flex justify-between items-center"><span className="text-sm text-muted-foreground">Interaksi</span><strong className="text-brand text-sm">Klik untuk Zoom</strong></div>
          </div>
        </aside>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {resolvedItems.map((item, index) => (
          <button key={item.id} onClick={() => setActive(index)} className={"relative flex-shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden transition-all duration-300 snap-center border border-line/70"}>
            <Image 
              src={item.resolvedSrc} 
              alt={item.title} 
              fill 
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover" 
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <button className="absolute inset-0 bg-black/90 animate-in fade-in duration-300" onClick={() => setLightboxOpen(false)} />
          <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-surface dark:bg-[#111111] border border-line rounded-3xl overflow-hidden shadow-sm animate-in zoom-in-95 duration-300">
            <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/55 text-foreground dark:text-white transition-colors hover:bg-black/75">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div className="relative flex-grow min-h-[50vh] md:min-h-[70vh] bg-black">
              <Image 
                src={resolvedItems[active].resolvedSrc} 
                alt={resolvedItems[active].title} 
                fill 
                sizes="100vw"
                className="object-contain" 
              />
            </div>
            <div className="p-6 bg-surface-strong dark:bg-[#0a0a0a] border-t border-line">
              <h3 className="font-heading text-2xl font-bold text-foreground dark:text-white mb-2">{resolvedItems[active].title}</h3>
              <p className="text-muted-foreground">{resolvedItems[active].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



