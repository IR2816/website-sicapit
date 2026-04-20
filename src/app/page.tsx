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

      
    </div>
  );
}




