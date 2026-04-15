import Image from "next/image";
import Link from "next/link";

import { LiveGallery } from "./sections/live-gallery";
import { ReviewsCarousel } from "./sections/reviews-carousel";
import { ScrollReveal } from "./sections/scroll-reveal";
import { SiteNav } from "./sections/site-nav";
import { VideoShowcase } from "./sections/video-showcase";
import { HeroSlider } from "./sections/hero-slider";
import { FaqAccordion } from "./sections/faq-accordion";
import { VillageStory } from "./sections/village-story";
import { VillageAwards } from "./sections/village-awards";

const guidePoints = [
  {
    title: "Alam Asri Seadanya",
    text: "Hamparan hijau, aliran sungai yang jernih, dan udara yang masih segar untuk sekadar menjernihkan napas dari kepenatan kota.",
  },
  {
    title: "Keseharian Lokal",
    text: "Tiada yang di-setting. Anda bebas berbaur dengan warga dan melihat sendiri aktivitas kampung atau sekadar ngobrol santai.",
  },
  {
    title: "Sederhana tapi Membekas",
    text: "Taman pintu masuk yang hijau atau jembatan bambu sekadarnya bisa menjadi titik rekam gambar kecil bersama keluarga tercinta.", 
  },
];

const travelTips = [
  "Datang pada waktu pagi hari untuk mendapatkan pencahayaan terbaik saat di lokasi.",
  "Gunakan alas kaki anti selip untuk area pinggir sungai dan taman berbatu.",
  "Hubungi kontak kami terlebih dahulu untuk koordinasi jika datang bersama rombongan besar.",
];

const reviews = [
  {
      author: "D' Suroso",
      avatar: "https://ui-avatars.com/api/?name=D+Suroso&background=0D8ABC&color=fff",
      isLocalGuide: true,
      rating: 5,
      time: "2024",
      text: "Kampung sicapit, kampung yang lingkungannya sudah di jaga oleh para pengurus sicapit dan warga nya.",
      attachedImage: "/assets/images/Rating D' Suroso.jpg",
    },
    {
      author: "abdullah hilmi",
      avatar: "https://ui-avatars.com/api/?name=abdullah+hilmi&background=D83A64&color=fff",
      isLocalGuide: true,
      rating: 5,
      time: "2024",
      text: "Good..",
    },
    {
      author: "ranti Cantik",
      avatar: "https://ui-avatars.com/api/?name=ranti+Cantik&background=3A8A2F&color=fff",
      isLocalGuide: false,
      rating: 5,
      time: "2024",
      text: "Nice place.",
    },
    {
      author: "Ramadhan Ramadhan",
      avatar: "https://ui-avatars.com/api/?name=Ramadhan+Ramadhan&background=F0A500&color=fff",
      isLocalGuide: false,
      rating: 5,
      time: "2024",
      text: "Mantul",
    },
    {
      author: "heri yanto",
      avatar: "https://ui-avatars.com/api/?name=heri+yanto&background=8B3A8A&color=fff",
      isLocalGuide: true,
      rating: 5,
      time: "2024",
      text: "Tak akan terlupakan mantap tempatnya.",
    }
  ];
const videoHighlights = [
  {
    title: "Dancer Parade",
    desc: "Cuplikan suasana intim dari pertunjukan budaya dan gerak lokal di tengah kampung.",
    src: "/assets/videos/Dancer_1.webm",
    poster: "/assets/images/3.jpg",
  },
  {
    title: "Rafting Sicapit",
    desc: "Kegiatan air menantang adrenalin untuk Anda yang mencari pengalaman aktif.",   
    src: "/assets/videos/Rafting_1.webm",
    poster: "/assets/images/4.jpg",
  },
  {
    title: "Jeram Sicapit",
    desc: "Aksi manuver dan keseruan bermain air di aliran sungai desa wisata.",
    src: "/assets/videos/Rafting_2.webm",
    poster: "/assets/images/6.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white pb-0 m-0">
      <SiteNav brand="Sicapit" />

      {/* Hero Section */}
      <header className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="home">
        <HeroSlider />

        <div className="relative z-20 container mx-auto px-6 md:px-12 text-center max-w-4xl pt-16">
          <ScrollReveal>
            <div className="relative inline-flex items-center justify-center isolate mb-8">
              <div className="absolute inset-0 bg-brand/30 blur-2xl rounded-full mix-blend-screen scale-150 animate-pulse"></div>
              <span className="relative z-10 inline-block py-2 px-6 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs md:text-sm font-black tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(22,163,74,0.3)] backdrop-blur-md">
                Selamat Datang di Bogor
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-[1.1] mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter">
              Singgah Sejenak di <br className="hidden md:block" />
              Kampung <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#4ade80] to-brand blur-[0.3px]">Sicapit.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300/90 mb-12 max-w-2xl mx-auto leading-relaxed md:leading-loose font-medium drop-shadow-md">
              Kami tak tawarkan kemewahan, hanya udara yang lebih sejuk, air sungai yang mengalir jernih, dan warga yang menyambut hangat. Mampirlah sekadar untuk rehat dari hiruk pikuk kota.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#about" className="px-8 py-4 bg-brand hover:bg-[#15803d] text-white font-black tracking-wide rounded-[12px] md:rounded-full w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:shadow-[0_0_40px_rgba(22,163,74,0.6)]">
                Lihat Kampung Kami
              </a>
              <a href="#video" className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-white backdrop-blur-xl border border-white/20 hover:border-white/40 font-bold tracking-wide rounded-[12px] md:rounded-full w-full sm:w-auto transition-all duration-300 flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-slate-300 group-hover:text-brand transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Tonton Teaser
              </a>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <main className="relative z-20">
        {/* Features / Why Us Grid */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Sekilas Tentang Kami</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">Apa yang Ada di Sini?</h2>
                <p className="text-muted mt-4 leading-relaxed">Kami hanya sekumpulan desa kecil yang ingin berbagi kesederhanaan. Temukan ritme hidup yang lebih perlahan dan membumi lewat keseharian yang bisa Anda rasakan langsung.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guidePoints.map((point, i) => (
                <ScrollReveal key={point.title}>
                  <div className="h-full p-8 rounded-3xl bg-surface border border-line hover:border-brand/30 transition-colors shadow-shadow">
                    <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand font-black text-xl mb-6">
                      0{i+1}
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{point.title}</h3>
                    <p className="text-muted leading-relaxed text-sm">{point.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Profile & History Section */}
        <section id="kisah" className="py-24 bg-surface-strong/50 border-t border-b border-line">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Profil Kampung</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 text-white">Kisah Transformasi Sicapit</h2>
                <p className="text-muted mt-4 leading-relaxed max-w-2xl mx-auto">Dari predikat kampung terkumuh menjadi inspirasi pariwisata hijau tingkat nasional. Inilah perjalanan panjang kami membangun ruang hidup yang bermanfaat.</p>
              </div>
            </ScrollReveal>
            <VillageStory />
          </div>
        </section>

        {/* Awards Section */}
        <section id="penghargaan" className="py-24 bg-[url('/assets/images/5.jpg')] bg-cover bg-center bg-fixed relative">
          <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm z-0"></div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-white/70 font-bold uppercase tracking-wider text-sm">Kebanggaan Kampung</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 text-white">Jejak Prestasi</h2>
                <p className="text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto">Torehan langkah nyata dedikasi warga yang berhasil diakui di level kota hingga panggung nasional.</p>
              </div>
            </ScrollReveal>
            <VillageAwards />
          </div>
        </section>

        {/* Pilih Petualangan Grid / Layanan Kami */}
        <section id="layanan" className="py-24 relative overflow-hidden bg-surface-strong/30 border-t border-line">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Pilih Pengalamanmu</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">Jelajahi Sudut Sicapit</h2>
                <p className="text-muted mt-4 leading-relaxed">Pilih petualangan mana yang paling cocok dengan irama hidupmu. Mulai dari yang menantang adrenalin, merawat nilai sosial di ruang edukasi, hingga menyapa alam dan satwa di area pertanian asri.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Farm Card */}
              <ScrollReveal>
                <Link href="/farm" className="group block relative h-[420px] rounded-[32px] overflow-hidden border border-white/5 hover:border-brand/40 transition-all duration-500 shadow-shadow bg-surface">
                  <Image src="/assets/images/2.jpg" alt="Farm Edukasi Sicapit" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 flex flex-col justify-end h-full">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                      <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-brand/20 border border-brand/30 text-brand text-[10px] font-black tracking-widest uppercase mb-4 backdrop-blur-md">
                        Mengenal Alam
                      </span>
                      <h3 className="font-heading text-3xl font-black text-white mb-2 tracking-tight group-hover:text-brand transition-colors">Farm</h3>
                      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <p className="text-slate-300 text-sm leading-relaxed mt-2">Menyapa hewan ternak, memberi makan ikan di kolam budidaya, serta mempelajari siklus berkebun ramah lingkungan.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-brand font-bold text-sm tracking-wide group-hover:gap-4 transition-all duration-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-8 left-8 md:left-10">
                      Buka Laman Farm 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Rafting Card */}
              <ScrollReveal>
                <Link href="/rafting" className="group block relative h-[420px] rounded-[32px] overflow-hidden border border-white/5 hover:border-[#00f2fe]/40 transition-all duration-500 shadow-shadow bg-surface md:mt-12">
                  <Image src="/assets/images/4.jpg" alt="Rafting Sungai Cisadane Sicapit" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 flex flex-col justify-end h-full">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                      <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-[#00f2fe]/20 border border-[#00f2fe]/30 text-[#00f2fe] text-[10px] font-black tracking-widest uppercase mb-4 backdrop-blur-md">
                        Pacu Adrenalin
                      </span>
                      <h3 className="font-heading text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#00f2fe] transition-colors">Rafting</h3>
                      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <p className="text-slate-300 text-sm leading-relaxed mt-2">Hanyutlah dalam jeram 5km yang seru atau santai mengarung di jalur tubing khusus sejauh 2km.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#00f2fe] font-bold text-sm tracking-wide group-hover:gap-4 transition-all duration-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-8 left-8 md:left-10">
                      Buka Laman Rafting 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Edukasi Card */}
              <ScrollReveal>
                <Link href="/education" className="group block relative h-[420px] rounded-[32px] overflow-hidden border border-white/5 hover:border-[#E1306C]/40 transition-all duration-500 shadow-shadow bg-surface md:mt-4">
                  <Image src="/assets/images/3.jpg" alt="Edukasi Budaya Sicapit" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 flex flex-col justify-end h-full">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                      <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-[#E1306C]/20 border border-[#E1306C]/30 text-[#E1306C] text-[10px] font-black tracking-widest uppercase mb-4 backdrop-blur-md">
                        Seni Budaya
                      </span>
                      <h3 className="font-heading text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#E1306C] transition-colors">Edukasi</h3>
                      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <p className="text-slate-300 text-sm leading-relaxed mt-2">Bawa serta keluarga menonton riuhnya parade budaya lokal dan mempraktikkan seni kerajinan anyaman bambu khas Sunda.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#E1306C] font-bold text-sm tracking-wide group-hover:gap-4 transition-all duration-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-8 left-8 md:left-10">
                      Buka Laman Edukasi 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Gallery System */}
        <section id="gallery" className="py-24 bg-surface-strong">
          <div className="container mx-auto px-6 md:px-12 mb-12">
            <ScrollReveal>
              <span className="text-brand font-bold uppercase tracking-wider text-sm">Album Sederhana</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Sedikit Potret Kampung</h2>
            </ScrollReveal>
          </div>
          <div className="container mx-auto px-6 md:px-12">
            <LiveGallery />
          </div>
        </section>

        {/* Video Showcase Section */}
        <section id="video" className="py-24">
          <div className="container mx-auto px-6 md:px-12 mb-12">
            <ScrollReveal>
              <span className="text-brand font-bold uppercase tracking-wider text-sm">Lensa Warga</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Sedikit Tayangan</h2>
              <p className="text-muted mt-4 max-w-2xl">Sedikit kebahagiaan dan tawa yang terekam secara alami di halaman kami. Semoga ikut tersenyum.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <VideoShowcase items={videoHighlights} />
          </ScrollReveal>
        </section>

        {/* Tips & Review */}
        <section id="reviews" className="py-24 bg-surface-strong">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <div className="flex flex-col h-full justify-center">
                  <span className="text-brand font-bold uppercase tracking-wider text-sm">Persiapan</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">Pesan Sebelum Mampir</h2>
                  <ul className="space-y-4">
                    {travelTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="min-w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-1">
                          <span className="w-2 h-2 rounded-full bg-brand"></span>
                        </div>
                        <p className="text-muted leading-relaxed">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-surface p-8 md:p-12 rounded-3xl border border-line">
                  <div className="flex items-center gap-3 mb-8">
                    <svg viewBox="0 0 488 512" className="w-8 h-8 shrink-0"><path fill="#4285F4" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white shadow-shadow">Ulasan Google Maps</h2>
                  </div>
                  <ReviewsCarousel reviews={reviews} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 relative z-20">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Pertanyaan Umum</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">Yang Sering Ditanyakan</h2>
                <p className="text-muted mt-4 leading-relaxed">Beberapa hal yang mungkin terlintas di pikiran Anda sebelum memulai petualangan sederhana di kampung kami.</p>
              </div>
            </ScrollReveal>
            <FaqAccordion />
          </div>
        </section>

        {/* Location & Footer */}
        <section id="lokasi" className="py-24 border-t border-line relative z-20">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Aksesibilitas</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Lokasi & Rute</h2>
                <p className="text-muted mt-4">Akses yang cukup terjangkau dari pusat kota Bogor. Siapkan kendaraan yang fit, let&apos;s go!</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-surface p-2 md:p-4 rounded-3xl border border-line shadow-shadow">
                <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[400px] border border-line relative">
                  <iframe title="Peta Lokasi Kampung Sicapit" src="https://maps.google.com/maps?q=Kampung%20Wisata%20SiCapit&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center p-6 lg:px-8">
                  <h3 className="font-heading font-bold text-2xl mb-2">Buka Setiap Hari</h3>
                  <p className="text-muted mb-8">08:00 - 17:00 WIB. Disarankan booking terlebih dahulu untuk kegiatan kelompok besar.</p>
                  
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-full block text-center px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#25D366]/20">
                    Hubungi WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="pt-20 pb-10 border-t border-line bg-surface-strong relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Kolom 1: Brand & Sosial Media */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand/50 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                  <Image src="/assets/images/Icon.jpg" alt="Logo Sicapit" fill sizes="64px" className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-brand tracking-[0.2em]">Kampung Wisata</span>
                  <span className="font-heading font-black text-3xl text-white tracking-tighter">Sicapit</span>
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-8 max-w-sm">Teman Wisata Terbaikmu. Kampung tematik dengan keindahan alam, wisata air menantang, dan kehangatan warga lokal di pinggir Sungai Cisadane.</p>
              
              <div className="flex items-center gap-3">
                <a href="https://youtube.com/@hercemherman4230" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-slate-300 hover:text-[#FF0000] border border-line hover:border-[#FF0000]/50 transition-all hover:scale-110" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>
                </a>
                <a href="https://instagram.com/kampung_sicapit" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-slate-300 hover:text-[#E1306C] border border-line hover:border-[#E1306C]/50 transition-all hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07l0.02,0.001c1.171,0.053,1.808,0.24,2.227,0.395c0.558,0.216,0.957,0.473,1.378,0.892c0.419,0.42,0.676,0.82,0.892,1.378c0.155,0.419,0.342,1.056,0.395,2.227l0.001,0.02C21.988,8.416,22,8.796,22,12c0,3.204-0.012,3.584-0.07,4.85l-0.001,0.02c-0.053,1.171-0.24,1.808-0.395,2.227c-0.216,0.558-0.473,0.957-0.892,1.378c-0.42,0.419-0.82,0.676-1.378,0.892c-0.419,0.155-1.056,0.342-2.227,0.395l-0.02,0.001C15.584,21.988,15.204,22,12,22c-3.204,0-3.584-0.012-4.85-0.07l-0.02-0.001c-1.171-0.053-1.808-0.24-2.227-0.395c-0.558-0.216-0.957-0.473-1.378-0.892c-0.419-0.42-0.676-0.82-0.892-1.378c-0.155-0.419-0.342-1.056-0.395-2.227l-0.001-0.02C2.012,15.584,2,15.204,2,12c0-3.204,0.012-3.584,0.07-4.85l0.001-0.02c0.053-1.171,0.24-1.808,0.395-2.227c0.216-0.558,0.473-0.957,0.892-1.378c0.42-0.419,0.82-0.676,1.378-0.892c0.419-0.155,1.056-0.342,2.227-0.395l0.02-0.001C8.416,2.012,8.796,2,12,2.163 M12,0C8.741,0,8.333,0.014,7.053,0.072C5.775,0.131,4.901,0.334,4.14,0.63c-0.79,0.306-1.458,0.73-2.128,1.399c-0.67,0.67-1.093,1.338-1.399,2.128c-0.296,0.761-0.499,1.634-0.558,2.913C0.014,8.333,0,8.741,0,12c0,3.259,0.014,3.667,0.072,4.947c0.059,1.279,0.262,2.152,0.558,2.913c0.306,0.79,0.73,1.458,1.399,2.128c0.67,0.67,1.338,1.093,2.128,1.399c0.761,0.296,1.634,0.499,2.913,0.558C8.333,23.986,8.741,24,12,24c3.259,0,3.667-0.014,4.947-0.072c1.279-0.059,2.152-0.262,2.913-0.558c0.79-0.306,1.458-0.73,2.128-1.399c0.67-0.67,1.093-1.338,1.399-2.128c0.296-0.761,0.499-1.634,0.558-2.913C23.986,15.667,24,15.259,24,12c0-3.259-0.014-3.667-0.072-4.947c-0.059-1.279-0.262-2.152-0.558-2.913c-0.306-0.79-0.73-1.458-1.399-2.128c-0.67-0.67-1.338-1.093-2.128-1.399c-0.761-0.296-1.634-0.499-2.913-0.558C15.667,0.014,15.259,0,12,0z M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162c3.403,0,6.162-2.759,6.162-6.162C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4c2.209,0,4,1.791,4,4C16,14.209,14.209,16,12,16z M18.406,4.155c-0.795,0-1.44,0.645-1.44,1.44c0,0.795,0.645,1.44,1.44,1.44c0.795,0,1.44-0.645,1.44-1.44C19.846,4.8,19.201,4.155,18.406,4.155z"/></svg>
                </a>
                <a href="https://tiktok.com/@kampung_sicapit" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-slate-300 hover:text-[#00f2fe] border border-line hover:border-[#00f2fe]/50 transition-all hover:scale-110" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
              </div>
            </div>

            {/* Kolom 2: Kontak Pengurus */}
            <div className="flex flex-col">
              <h3 className="font-heading font-bold text-xl mb-6">Hubungi Kami</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold tracking-wide">Hermansyah</p>
                    <p className="text-slate-400 text-sm">0813-1825-1218</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold tracking-wide">Rany Maulida</p>
                    <p className="text-slate-400 text-sm">0813-1700-1223</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold tracking-wide">Dedy</p>
                    <p className="text-slate-400 text-sm">0857-1703-3126</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Kolom 3: Alamat */}
            <div className="flex flex-col">
              <h3 className="font-heading font-bold text-xl mb-6">Alamat Kami</h3>
              <div className="flex items-start gap-4 p-6 bg-surface rounded-2xl border border-line hover:border-white/20 transition-colors shadow-shadow">
                <div className="w-12 h-12 rounded-full bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] shrink-0 mt-1 border border-[#EA4335]/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <p className="text-slate-300 text-sm leading-loose">
                  <strong className="text-white block mb-2 text-base font-bold tracking-wide">Kampung Wisata Sicapit</strong>
                  Jalan Raya Semplak Gang Flamboyan 1,<br/>
                  RT 03/06 Kel. Semplak,<br/>
                  Kec. Bogor Barat
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-line text-center flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-sm font-sans flex items-center gap-1 mx-auto md:mx-0">
              © {new Date().getFullYear()} Kampung Wisata Sicapit. Semua Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400 font-medium">
              <a href="#" className="hover:text-brand transition-colors">Kebijakan Privasi</a>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <a href="#" className="hover:text-brand transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
