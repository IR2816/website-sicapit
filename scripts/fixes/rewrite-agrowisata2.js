const fs = require('fs');
const path = require('path');

const content = `"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "../sections/scroll-reveal";
import { SiteNav } from "../sections/site-nav";
import {
  Users,
  MapPin,
  Star,
  ArrowRight,
  ChevronDown,
  Heart,
  Mountain,
  UtensilsCrossed,
  ChevronUp,
  Landmark,
  GraduationCap,
  Lightbulb,
  Target,
  TrendingUp,
  ArrowLeft,
  Bird,
  Flower2
} from "lucide-react";

/* ─── Generic Section Content Reveal ─── */
function FadeSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Counter Animation ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString("id-ID")}{suffix}</span>;
}

/* ─── Page Header ─── */
function PageHeader() {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden border-b border-line" id="home">
      <div className="absolute inset-0">
        <Image src="/hero-kampung.png" alt="Kampung Wisata Indonesia" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 md:mt-20">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
            </span>
            <span className="text-white/90 text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
              Halaman Edukasi
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.1] md:leading-[1.15] mb-8 tracking-tight drop-shadow-2xl">
            Mengenal <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              Kampung <span className="text-brand">Wisata</span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-brand/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path fill="currentColor" d="M0 10 Q 50 0 100 10 Q 50 2 0 10" />
              </svg>
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed md:leading-loose mb-12 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Jelajahi keindahan budaya, tradisi, dan alam desa Indonesia melalui konsep pariwisata berbasis masyarakat yang berkelanjutan dan memberdayakan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-4">
            <a href="#tentang" className="group relative w-full sm:w-auto px-8 py-4 bg-brand hover:bg-[#15803d] text-white font-bold text-sm tracking-wide rounded-full transition-all duration-300 shadow-[0_8px_32px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">Mulai Belajar <ArrowRight className="w-4 h-4" /></span>
            </a>
            <Link href="/" className="group w-full sm:w-auto px-8 py-4 bg-[#111111]/60 hover:bg-[#222222]/80 text-white backdrop-blur-xl border border-white/20 font-bold text-sm tracking-wide rounded-full transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
          </div>
        </ScrollReveal>
      </div>
      
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer z-20"
        onClick={() => document.querySelector("#tentang")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>
    </header>
  );
}

/* ─── Stats Section ─── */
function StatsSection() {
  const stats = [
    { icon: MapPin, value: 2000, suffix: "+", label: "Kampung Wisata" },
    { icon: Users, value: 34, suffix: " Provinsi", label: "Desa Tersebar" },
    { icon: TrendingUp, value: 15, suffix: " Juta", label: "Kunjungan / Tahun" },
    { icon: Heart, value: 75, suffix: "%", label: "Ekonomi Lokal Naik" },
  ];
  return (
    <section className="py-12 bg-surface-strong/50 border-b border-line">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="text-center p-6 rounded-3xl bg-surface border border-white/5 shadow-xl">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-brand" />
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section id="tentang" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold uppercase tracking-wider text-sm">Tentang Kampung Wisata</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 text-white">Apa Itu <span className="text-brand">Kampung Wisata</span>?</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl mx-auto text-lg">
              Konsep pengembangan pariwisata yang berbasis pada potensi kearifan lokal masyarakat desa. Menggabungkan alam, budaya, dan kreativitas warga untuk pengalaman yang tak terlupakan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              { icon: GraduationCap, title: "Definisi Resmi", text: "Desa Wisata adalah desa yang memiliki potensi wisata, sumber daya alam & manusia, serta nilai tradisi budaya. Bukan sekadar objek, melainkan sebuah ekosistem pariwisata yang melibatkan seluruh masyarakat." },
              { icon: Lightbulb, title: "Filosofi Utama", text: "Berkelanjutan dan berdaya. Mengutamakan kelestarian lingkungan, pelestarian budaya, dan peningkatan kesejahteraan lokal. Wisatawan belajar dan berinteraksi langsung." },
              { icon: Target, title: "Tujuan Pengembangan", text: "Memperkuat ekonomi lokal melalui diversifikasi pendapatan desa, melestarikan kekayaan budaya, serta menciptakan kesadaran lingkungan antar-budaya." }
            ].map((box, i) => (
              <ScrollReveal key={i}>
                <Card className="border border-white/5 bg-gradient-to-b from-surface to-surface-strong hover:border-brand/40 transition-all duration-500 shadow-xl overflow-hidden group">
                  <div className="flex p-6 sm:p-8 gap-5">
                    <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <box.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2 text-white/90">{box.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{box.text}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="relative">
            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative border border-white/10 group">
                 <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 z-10 transition-colors"></div>
                 <Image src="/hero-kampung.png" alt="Pemandangan Kampung Wisata" width={800} height={1000} className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-surface-strong/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] p-5 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">ADWI 2024</p>
                  <p className="text-sm text-muted-foreground font-medium">Banyak Desa Wisata Terbaik</p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Potensi Section ─── */
function PotensiSection() {
  const potensi = [
    { icon: Mountain, title: "Potensi Alam", desc: "Sawah terasering ikonik, hutan tropis lebat, bukit asri, dan sungai yang jernih menenangkan jiwa.", delay: 0.1 },
    { icon: Landmark, title: "Warisan Budaya", desc: "Arsitektur rumah adat, seni pertunjukan wayang, gamelan, hingga kerajinan tangan khas daerah.", delay: 0.2 },
    { icon: UtensilsCrossed, title: "Kuliner Lokal", desc: "Dari nasi liwet, gudeg, hingga jajanan pasar autentik. Resep turun temurun yang langsung dibuat segar.", delay: 0.3 },
    { icon: Users, title: "Kebersamaan", desc: "Kekuatan gotong royong dan keramahan khas Indonesia yang menyambut setiap tamu bak keluarga sendiri.", delay: 0.4 },
  ];
  
  return (
    <section id="potensi" className="py-24 bg-surface-strong/40 border-t border-line">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold uppercase tracking-wider text-sm">Potensi & Keunggulan</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 text-white">Pesona Tak Terbatas</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl mx-auto text-lg">
              Karakter unik yang menjadikan setiap sudut kampung destinasi edukasi mendalam.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {potensi.map((item, i) => (
            <FadeSection key={i} delay={item.delay}>
              <Card className="h-full bg-gradient-to-br from-surface to-surface-strong border border-white/5 hover:border-brand/40 transition-all duration-500 shadow-xl overflow-hidden relative group p-8 rounded-[2rem]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center flex-shrink-0 mb-6">
                  <item.icon className="w-7 h-7 text-brand" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-white/90">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
              </Card>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Activities Section ─── */
function ActivitiesSection() {
  const activities = [
    { image: "/agrowisata.png", title: "Agrowisata", desc: "Siklus pertanian tradisional hingga panen.", tag: "Populer", tagColor: "bg-brand/20 text-brand border border-brand/40" },
    { image: "/batik-workshop.png", title: "Workshop Batik", desc: "Mempelajari seni membatik dari pengrajin.", tag: "Favorit", tagColor: "bg-amber-500/20 text-amber-400 border border-amber-500/40" },
    { image: "/kuliner.png", title: "Kuliner Tradisi", desc: "Ikuti kelas memasak resep nenek moyang.", tag: "Wajib Coba", tagColor: "bg-red-500/20 text-red-400 border border-red-500/40" },
    { image: "/homestay.png", title: "Homestay", desc: "Berdiam di rumah tradisional merasakan hari desa.", tag: "Rekomendasi", tagColor: "bg-purple-500/20 text-purple-400 border border-purple-500/40" },
    { image: "/kerajinan.png", title: "Kerajinan Tangan", desc: "Anyaman bambu hingga karya pahat.", tag: "Edukatif", tagColor: "bg-sky-500/20 text-sky-400 border border-sky-500/40" },
    { image: "/hero-kampung.png", title: "Wisata Alam", desc: "Jelajahi perbukitan hingga sungai jernih.", tag: "Petualangan", tagColor: "bg-teal-500/20 text-teal-400 border border-teal-500/40" },
  ];

  return (
    <section id="aktivitas" className="py-24 bg-surface border-t border-line">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold uppercase tracking-wider text-sm">Aktivitas</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 text-white">Pengalaman Membekas</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <FadeSection key={i} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-[2rem] bg-surface-strong border border-white/5 hover:border-brand/30 transition-all duration-500 shadow-xl flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <Image src={act.image} alt={act.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-strong via-transparent to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={\`px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-sm \${act.tagColor}\`}>{act.tag}</span>
                  </div>
                </div>
                <div className="p-8 pt-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">{act.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">{act.desc}</p>
                  <Button variant="ghost" className="w-fit text-brand hover:text-brand hover:bg-brand/10 px-4 py-2 font-bold p-0">
                    Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Kategori Program Edukasi Section ─── */
function KategoriEdukasiSection() {
  const agrowisataItems = [
    { name: "Bonsai", desc: "Belajar seni merawat dan membentuk pohon bonsai jenis langka dan unggulan." },
    { name: "Penanaman Padi", desc: "Sistem irigasi subak, teknik menanam hingga siklus panen tradisional." },
    { name: "Tanaman Hias", desc: "Teknik menyetek, pembibitan hingga komersialisasi tanaman segar." },
  ];
  const budayaItems = [
    { name: "Pencak Silat", desc: "Seni bela diri sarat makna, ajaran teknik, napas dan kebatinan." },
    { name: "Tarian Tradisional", desc: "Jaipong dan Pendet, memahami filosofi setiap lekuk gerakan." },
    { name: "Lantun Musik Sunda", desc: "Alat musik bambu, angklung dan calung yang selaras alam." },
    { name: "Enggrang", desc: "Permainan titian bambu penguji konsentrasi dan keseimbangan masa kecil." },
  ];
  const animalEduItems = [
    { name: "Ngambil Ikan Kolam", desc: "Merasakan serunya menangkap bawal/lele beralaskan lumpur." },
    { name: "Memberi Makan Kambing", desc: "Persiapan pakan ternak hingga manfaat perah susu." },
    { name: "Edukasi Kelinci", desc: "Menyayangi mamalia mungil di padang rumput mini." },
    { name: "Edukasi Berkuda", desc: "Teknik harmoni penunggang dan kuda serta melatih ketelitian." },
  ];

  return (
    <section id="kategori" className="py-24 bg-surface-strong/40 border-t border-line">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
           <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold uppercase tracking-wider text-sm">Program Edukasi</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 text-white">Menyelami Kurikulum Alam</h2>
          </div>
        </ScrollReveal>

        <Tabs defaultValue="agrowisata" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-surface border border-white/10 rounded-2xl h-auto p-1.5 shadow-2xl">
            <TabsTrigger value="agrowisata" className="py-4 data-[state=active]:bg-brand data-[state=active]:text-white text-muted-foreground text-sm font-bold uppercase tracking-wider rounded-xl transition-all">
               <Flower2 className="hidden sm:inline-block w-4 h-4 mr-2" /> Agrowisata
            </TabsTrigger>
            <TabsTrigger value="budaya" className="py-4 data-[state=active]:bg-[#111111] data-[state=active]:text-white text-muted-foreground text-sm font-bold uppercase tracking-wider rounded-xl border border-transparent data-[state=active]:border-white/10 transition-all">
               <Landmark className="hidden sm:inline-block w-4 h-4 mr-2" /> Seni Budaya
            </TabsTrigger>
            <TabsTrigger value="animal" className="py-4 data-[state=active]:bg-[#111111] data-[state=active]:text-white text-muted-foreground text-sm font-bold uppercase tracking-wider rounded-xl border border-transparent data-[state=active]:border-white/10 transition-all">
               <Bird className="hidden sm:inline-block w-4 h-4 mr-2" /> Fauna
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agrowisata">
            <div className="grid md:grid-cols-3 gap-6">
              {agrowisataItems.map((item, i) => (
                <FadeSection key={i} delay={i * 0.1} className="p-8 rounded-[2rem] bg-gradient-to-b from-surface to-surface-strong border border-white/5 hover:border-brand/40 shadow-xl group">
                  <Flower2 className="w-8 h-8 text-brand mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </FadeSection>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="budaya">
            <div className="grid md:grid-cols-2 gap-6">
               {budayaItems.map((item, i) => (
                <FadeSection key={i} delay={i * 0.1} className="p-8 rounded-[2rem] bg-gradient-to-b from-surface to-surface-strong border border-white/5 hover:border-white/20 shadow-xl group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <Landmark className="w-8 h-8 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </FadeSection>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="animal">
            <div className="grid md:grid-cols-2 gap-6">
               {animalEduItems.map((item, i) => (
                <FadeSection key={i} delay={i * 0.1} className="p-8 rounded-[2rem] bg-gradient-to-b from-surface to-surface-strong border border-white/5 hover:border-sky-500/30 shadow-xl group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <Bird className="w-8 h-8 text-sky-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </FadeSection>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

/* ─── Guide / FAQ / CTA Section ─── */
function BottomSections() {
  const faqs = [
    { q: "Berapa biaya kunjungan rata-rata?", a: "Berkisar antara Rp 50.000 hingga Rp 300.000 tergantung paket edukasi, homestay, atau sekadar entrance fee ringan." },
    { q: "Aman kah untuk anak kecil/balita?", a: "Sangat direkomendasikan. Kami mengusung konsep Kids Friendly dengan pemandu yang selalu bersiaga." },
    { q: "Bisakah datang rombongan besar sekolah?", a: "Tentu, kami sering menampung karyawisata hingga ratusan murid dengan pemisahan pos per kelompok." },
  ];

  return (
    <div className="relative">
      <section className="py-24 bg-surface border-t border-line">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
           <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-brand font-bold uppercase tracking-wider text-sm">FAQ</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 text-white">Pertanyaan Sering Diajukan</h2>
            </div>
          </ScrollReveal>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={\`item-\${i}\`} className="border border-white/10 rounded-2xl px-6 bg-surface-strong/50 data-[state=open]:border-brand/40 overflow-hidden transition-colors">
                <AccordionTrigger className="text-left text-lg font-bold text-white py-6 hover:no-underline hover:text-brand transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-brand">
         <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Mulai Kisah Anda di Desa Kami.</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">Bukan liburan ke kota maju, namun perjalanan pulang untuk menjadi manusia seutuhnya.</p>
          <Button size="lg" className="bg-white hover:bg-neutral-200 text-brand px-10 py-7 text-lg rounded-full font-bold shadow-2xl transition-transform hover:-translate-y-1">
             Rencanakan Liburan Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
}

/* ─── Scroll to Top Button ─── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white hover:bg-neutral-200 text-brand rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex items-center justify-center transition-colors"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Export ─── */
export default function KampungWisataPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white pb-0 m-0 bg-background text-foreground">
      <SiteNav brand="Sicapit" />
      <PageHeader />
      <main>
        <StatsSection />
        <AboutSection />
        <PotensiSection />
        <ActivitiesSection />
        <KategoriEdukasiSection />
        <BottomSections />
      </main>
      <ScrollToTop />
    </div>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'app', 'agrowisata', 'page.tsx'), content);
console.log('Done!');
