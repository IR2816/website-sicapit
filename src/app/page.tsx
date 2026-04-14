import Image from "next/image";
import Link from "next/link";

import { LiveGallery } from "./sections/live-gallery";
import { ReviewsCarousel } from "./sections/reviews-carousel";
import { ScrollReveal } from "./sections/scroll-reveal";
import { SiteNav } from "./sections/site-nav";
import { VideoShowcase } from "./sections/video-showcase";

const guidePoints = [
  {
    title: "Alam Asri",
    text: "Pegunungan hijau, aliran sungai yang tenang, dan udara sejuk untuk liburan atau sekadar rehat singkat dari keramaian.",
  },
  {
    title: "Budaya Lokal Otentik",
    text: "Menyaksikan berbagai kegiatan warga setempat, sambutan hangat, dan merasakan rasa kampung yang otentik.",
  },
  {
    title: "Spot Foto Premium",
    text: "Mulai dari jembatan bambu, taman pintu masuk yang asri, hingga berbagai sudut desa yang paling fotogenik.", 
  },
];

const travelTips = [
  "Datang pada waktu pagi hari untuk mendapatkan pencahayaan terbaik saat di lokasi.",
  "Gunakan alas kaki anti selip untuk area pinggir sungai dan taman berbatu.",
  "Hubungi kontak kami terlebih dahulu untuk koordinasi jika datang bersama rombongan besar.",
];

const reviews = [
  {
      author: "Budi Santoso",
      avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff",
      isLocalGuide: true,
      rating: 5,
      time: "3 minggu yang lalu",
      text: "Tempat wisata ini seperti hidden gem di Garut! Tidak menyangka ada kawasan seindah ini dengan perpaduan sungai kecil dan taman hijau. Spot fotonya banyak.",
    },
    {
      author: "Siti Aminah",
      avatar: "https://ui-avatars.com/api/?name=Siti+Aminah&background=D83A64&color=fff",
      isLocalGuide: false,
      rating: 5,
      time: "Sebulan yang lalu",
      text: "Warga lokal sangat ramah, fasilitas di sekitar kampung wisata ini sudah lumayan lengkap. Sangat menikmati berjalan-jalan di jalur setapaknya sore-sore. Bikin pikiran tenang.",
    },
    {
      author: "Andi Pratama",
      avatar: "https://ui-avatars.com/api/?name=Andi+Pratama&background=3A8A2F&color=fff",
      isLocalGuide: true,
      rating: 5,
      time: "2 bulan yang lalu",
      text: "Anak-anak betah karena udaranya sejuk, warga sekitar menyambut dengan hangat, dan area bermain/kumpulnya luas. Konsep desanya tertata dengan baik.",
    }  ];
const videoHighlights = [
  {
    title: "Dancer Parade",
    desc: "Cuplikan suasana intim dari pertunjukan budaya dan gerak lokal di tengah kampung.",
    src: "/assets/videos/Dancer_1.webm",
    poster: "/assets/images/3.jpg",
  },
  {
    title: "Rafting Si Capit",
    desc: "Kegiatan air menantang adrenalin untuk Anda yang mencari pengalaman aktif.",   
    src: "/assets/videos/Rafting_1.webm",
    poster: "/assets/images/4.jpg",
  },
  {
    title: "Jeram Si Capit",
    desc: "Aksi manuver dan keseruan bermain air di aliran sungai desa wisata.",
    src: "/assets/videos/Rafting_2.webm",
    poster: "/assets/images/6.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white pb-0 m-0">
      <SiteNav brand="Si Capit" />

      {/* Hero Section */}
      <header className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/1.jpg"
            alt="Pemandangan Kampung Wisata Si Capit"
            fill
            className="object-cover scale-105"
            priority
            quality={100}
          />
          {/* Deep dark gradient overlay mapping outdoor aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a] z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 text-center max-w-4xl pt-16">
          <ScrollReveal>
            <div className="relative inline-flex items-center justify-center isolate mb-8">
              <div className="absolute inset-0 bg-brand/30 blur-2xl rounded-full mix-blend-screen scale-150 animate-pulse"></div>
              <span className="relative z-10 inline-block py-2 px-6 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs md:text-sm font-black tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(249,115,22,0.3)] backdrop-blur-md">
                Desa Wisata Keajaiban Alam
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-[1.1] mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter">
              Petualangan Anda <br className="hidden md:block" />
              Dimulai Dari <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#ff9b52] to-brand blur-[0.3px]">Sini.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300/90 mb-12 max-w-2xl mx-auto leading-relaxed md:leading-loose font-medium drop-shadow-md">
              Eksplorasi alam asri, keseruan bermain air, dan hangatnya budaya lokal di Kampung Wisata Si Capit. 
              Lepaskan penat, nikmati udara sejuk, dan bawa pulang memori berharga.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#about" className="px-8 py-4 bg-brand hover:bg-[#e85d04] text-white font-black tracking-wide rounded-[12px] md:rounded-full w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]">
                Mulai Eksplorasi
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
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Kenapa Memilih Kami</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">Mengapa Si Capit?</h2>
                <p className="text-muted mt-4 leading-relaxed">Si Capit menghadirkan paket lengkap petualangan ringan dan rehat singkat. Temukan sisi lain Garut melalui beragam pengalaman otentik secara langsung bersama kami.</p>
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

        {/* Gallery System */}
        <section id="gallery" className="py-24 bg-surface-strong">
          <div className="container mx-auto px-6 md:px-12 mb-12">
            <ScrollReveal>
              <span className="text-brand font-bold uppercase tracking-wider text-sm">Visual</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Galeri Petualangan</h2>
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
              <span className="text-brand font-bold uppercase tracking-wider text-sm">Sinematik Rekaman</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Cuplikan Kamera</h2>
              <p className="text-muted mt-4 max-w-2xl">Beberapa momen menginspirasi yang menangkap langsung adrenalin dan semangat eksplorasi di kampung Si Capit, khusus untuk Anda.</p>
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
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">Tips Petualang</h2>
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

        {/* Location & Footer */}
        <section id="lokasi" className="py-24 border-t border-line relative z-20">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand font-bold uppercase tracking-wider text-sm">Aksesibilitas</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Lokasi & Rute</h2>
                <p className="text-muted mt-4">Akses yang cukup terjangkau dari pusat kota Garut. Siapkan kendaraan yang fit, let&apos;s go!</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-surface p-2 md:p-4 rounded-3xl border border-line shadow-shadow">
                <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[400px] border border-line relative">
                  <iframe title="Peta Lokasi Kampung Si Capit" src="https://maps.google.com/maps?q=Kampung%20Wisata%20Si%20Capit%20Garut&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

      <footer className="py-8 border-t border-line bg-background text-center">
        <p className="text-muted text-sm font-sans">© 2026 Kampung Wisata Si Capit. Semua Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}
