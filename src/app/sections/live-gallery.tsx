"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const items = [
  { id: "gerbang", title: "Gerbang Kampung Si Capit", caption: "Area masuk kampung wisata dengan nuansa kanal dan taman.", src: "/assets/images/1.jpg", fallback: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
  { id: "taman", title: "Taman Si Capit", caption: "Spot favorit untuk foto rombongan dan wisata komunitas.", src: "/assets/images/2.jpg", fallback: "https://images.unsplash.com/photo-1501554728187-ce583db33af7" },
  { id: "komunitas", title: "Aktivitas Komunitas", caption: "Ruang kumpul warga dan pengunjung dalam kegiatan budaya.", src: "/assets/images/3.jpg", fallback: "https://images.unsplash.com/photo-1458442310124-dde6edb43d10" },
  { id: "panggung", title: "Panggung Kegiatan", caption: "Dokumentasi event komunitas dan agenda wisata lokal.", src: "/assets/images/5.jpg", fallback: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205" },
  { id: "gazebo", title: "Spot Kampung Si Capit", caption: "Gazebo dan ruang santai untuk menikmati suasana kampung.", src: "/assets/images/7.jpg", fallback: "https://images.unsplash.com/photo-1510798831971-661eb04b3739" },
  { id: "jembatan", title: "Jembatan Kampung", caption: "Jalur kecil yang sering dipakai untuk menikmati lanskap desa.", src: "/assets/images/4.jpg", fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { id: "sudut-siang", title: "Sudut Siang Hari", caption: "Nuansa kampung saat cahaya siang jatuh ke taman dan jalan setapak.", src: "/assets/images/6.jpg", fallback: "https://images.unsplash.com/photo-1460317442991-0ec209397118" },
  { id: "sunset", title: "Sunset di Si Capit", caption: "Momen sore dengan langit hangat yang cocok untuk penutup kunjungan.", src: "/assets/images/Sunset Image.jpg", fallback: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" }
];

export function LiveGallery() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [brokenSources, setBrokenSources] = useState<Record<string, boolean>>({});

  const activeItem = items[active];
  const resolvedItems = useMemo(() => items.map(item => ({ ...item, resolvedSrc: brokenSources[item.id] ? item.fallback : item.src })), [brokenSources]);

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
          className="group relative flex-grow aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-[38px] bg-surface-strong border border-white/5 shadow-2xl cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <Image src={resolvedItems[active].resolvedSrc} alt={activeItem.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" onError={() => setBrokenSources(p => ({...p, [activeItem.id]: true}))} />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 max-h:from-black/90 via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="transform transition-all duration-300 translate-y-0">
              <div className="flex gap-3 mb-3">
                <span className="px-3 py-1 bg-brand/20 text-brand backdrop-blur-md border border-brand/30 rounded-full text-[10px] font-bold uppercase tracking-wider">Gallery Showcase</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">{activeItem.title}</h2>
              <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">{activeItem.caption}</p>
            </div>
          </div>

          <div className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 absolute inset-y-0 left-0 w-1/2 flex items-center justify-start p-4">
            <button onClick={e => { e.stopPropagation(); setActive(p => (p - 1 + items.length) % items.length); }} className="w-16 h-16 rounded-full bg-black/40 hover:bg-brand backdrop-blur-md text-white flex items-center justify-center border border-white/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
          </div>
          <div className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 absolute inset-y-0 right-0 w-1/2 flex items-center justify-end p-4">
            <button onClick={e => { e.stopPropagation(); setActive(p => (p + 1) % items.length); }} className="w-16 h-16 rounded-full bg-black/40 hover:bg-brand backdrop-blur-md text-white flex items-center justify-center border border-white/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <aside className="hidden xl:flex w-80 flex-col bg-surface border border-white/5 rounded-[38px] p-8 shadow-2xl">
          <span className="text-brand font-bold uppercase tracking-wider text-sm bg-brand/10 inline-block w-fit px-3 py-1 rounded-full mb-6">Detail Spot</span>
          <h4 className="font-heading text-2xl font-bold mb-4 text-white">{activeItem.title}</h4>
          <p className="text-slate-400 text-base leading-relaxed flex-grow">{activeItem.caption}</p>
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Urutan</span><strong className="font-mono text-white">{String(active + 1).padStart(2, "0")} <span className="text-slate-500">/ {items.length}</span></strong></div>
            <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Interaksi</span><strong className="text-brand text-sm">Klik untuk Zoom</strong></div>
          </div>
        </aside>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {resolvedItems.map((item, index) => (
          <button key={item.id} onClick={() => setActive(index)} className={"relative flex-shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden transition-all duration-300 snap-center "}>
            <Image src={item.resolvedSrc} alt={item.title} fill className="object-cover" />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <button className="absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-300" onClick={() => setLightboxOpen(false)} />
          <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-brand text-white backdrop-blur-md transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div className="relative flex-grow min-h-[50vh] md:min-h-[70vh] bg-black">
              <Image src={resolvedItems[active].resolvedSrc} alt={resolvedItems[active].title} fill className="object-contain" />
            </div>
            <div className="p-6 bg-[#0a0a0a] border-t border-white/10">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">{resolvedItems[active].title}</h3>
              <p className="text-slate-400">{resolvedItems[active].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
