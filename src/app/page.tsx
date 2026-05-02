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
        {/* Gradient overlay untuk transisi lebih mulus */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] z-10 pointer-events-none"></div>

        <div className="relative z-20 container mx-auto px-4 md:px-12 flex flex-col items-center text-center mt-12 md:mt-24">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
              </span>
              <span className="text-white/90 text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                Selamat Datang di Bogor
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] md:leading-[1.15] mb-8 max-w-5xl mx-auto tracking-tight drop-shadow-2xl">
              Lepaskan Penatmu di <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                Kampung <span className="text-brand">Sicapit.</span>
                {/* SVG Underline Highlight */}
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-brand/40 w-full -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0 10 Q 50 0 100 10 Q 50 2 0 10" />
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed md:leading-loose mb-12 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Kami tak tawarkan kemewahan, hanya udara yang lebih sejuk, air sungai yang mengalir jernih, dan warga yang menyambut hangat. Mampirlah sekadar untuk rehat dari hiruk pikuk kota.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-4">
              <a href="#kisah" className="group relative w-full sm:w-auto px-8 py-4 bg-brand hover:bg-[#15803d] text-white font-bold text-sm tracking-wide rounded-full transition-all duration-300 shadow-[0_8px_32px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Kenali Kami</span>
                <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full z-0"></div>
              </a>
              <a href="#layanan" className="group w-full sm:w-auto px-8 py-4 bg-[#111111]/60 hover:bg-[#222222]/80 text-white backdrop-blur-xl border border-white/20 hover:border-brand/50 font-bold text-sm tracking-wide rounded-full transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1">
                Jelajahi Layanan
                <svg className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <main className="relative z-20">
        
        {/* Profile & History Section - DIPINDAH KE ATAS UNTUK ALUR COMPANY PROFILE COHESIVE */}
        <section id="kisah" className="py-24 bg-surface-strong/50 border-t border-b border-line">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Tentang Profil Kami</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 text-white">Sejarah & Transformasi Sicapit</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl mx-auto text-lg">Dari predikat kampung terkumuh menjadi rujukan wisata hijau tingkat nasional. Inilah dedikasi panjang kami menghidupkan harmoni manusia, sungai, dan alam.</p>
              </div>
            </ScrollReveal>
            <VillageStory />
          </div>
        </section>

        {/* Features / Why Us Grid - DIKEMAS SEBAGAI "VALUE" PERUSAHAAN/KAMPUNG */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Nilai Utama Kami</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">Apa yang Kami Tawarkan?</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed text-lg">Integritas kami membentang dari merawat keseharian lokal yang orisinil, memuliakan alam apa adanya, hingga mengkurasi kesederhanaan menjadi kenangan manis di setiap kunjungan Anda.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guidePoints.map((point, i) => (
                <ScrollReveal key={point.title}>
                  <div className="group h-full p-10 rounded-3xl bg-gradient-to-b from-surface to-surface-strong border border-white/5 hover:border-brand/40 transition-all duration-500 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-black text-2xl mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                      0{i+1}
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4 text-white/90">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{point.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Layanan Kami / Products (Pilih Petualangan) */}
        <section id="layanan" className="py-24 relative overflow-hidden bg-surface-strong/30 border-t border-line">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Layanan & Fasilitas Kami</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4">Pilar Wisata Sicapit</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed text-lg">Sebagai entitas wisata terpadu, kami membagi pengalaman autentik ke dalam dua pilar utama: pemberdayaan agrowisata untuk menumbuhkan kepedulian lingkungan, serta rekreasi adrenalin melintasi derasnya sungai Cisadane.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Agrowisata Card */}
              <ScrollReveal>
                <Link href="/agrowisata" className="group block relative h-[420px] rounded-[32px] overflow-hidden border border-white/5 hover:border-brand/40 transition-all duration-500 shadow-shadow bg-surface">
                  <Image src="/assets/images/2.jpg" alt="Agrowisata Sicapit" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 flex flex-col justify-end h-full">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                      <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-brand/20 border border-brand/30 text-brand text-[10px] font-black tracking-widest uppercase mb-4 backdrop-blur-md">
                        Alam & Budaya
                      </span>
                      <h3 className="font-heading text-3xl font-black text-white mb-2 tracking-tight group-hover:text-brand transition-colors">Agrowisata</h3>
                      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <p className="text-slate-300 text-sm leading-relaxed mt-2">Menyapa hewan ternak, mempelajari persawahan, hingga mempraktikkan seni kerajinan lokal dalam satu pengalaman seru.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-brand font-bold text-sm tracking-wide group-hover:gap-4 transition-all duration-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-8 left-8 md:left-10">
                      Buka Laman Agrowisata 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Rafting Card */}
              <ScrollReveal>
                <Link href="/rafting" className="group block relative h-[420px] rounded-[32px] overflow-hidden border border-white/5 hover:border-[#00f2fe]/40 transition-all duration-500 shadow-shadow bg-surface md:mt-12">
                  <Image src="/assets/images/4.jpg" alt="Rafting Sungai Cisadane Sicapit" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
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
              <p className="text-muted-foreground mt-4 max-w-2xl">Sedikit kebahagiaan dan tawa yang terekam secara alami di halaman kami. Semoga ikut tersenyum.</p>
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
                        <p className="text-muted-foreground leading-relaxed">{tip}</p>
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
                <p className="text-muted-foreground mt-4 leading-relaxed">Beberapa hal yang mungkin terlintas di pikiran Anda sebelum memulai petualangan sederhana di kampung kami.</p>
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
                <p className="text-muted-foreground mt-4">Akses yang cukup terjangkau dari pusat kota Bogor. Siapkan kendaraan yang fit, let&apos;s go!</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-surface p-2 md:p-4 rounded-3xl border border-line shadow-shadow">
                <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[400px] border border-line relative">
                  <iframe title="Peta Lokasi Kampung Sicapit" src="https://maps.google.com/maps?q=Kampung%20Wisata%20SiCapit&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center p-6 lg:px-8">
                  <h3 className="font-heading font-bold text-2xl mb-2">Buka Setiap Hari</h3>
                  <p className="text-muted-foreground mb-8">08:00 - 17:00 WIB. Disarankan booking terlebih dahulu untuk kegiatan kelompok besar.</p>
                  
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




