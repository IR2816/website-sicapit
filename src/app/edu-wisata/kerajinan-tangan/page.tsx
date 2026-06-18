'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiteNav } from '@/app/sections/site-nav'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { ChevronDown, ChevronUp, Phone } from 'lucide-react'
import { normalizePhoneForWhatsApp } from '@/lib/validation'

interface Program {
  title: string
  category: string
  duration: string
  image: string
  desc: string
}

const programs: Program[] = [
  { title: 'Kerajinan Bambu', category: 'Kerajinan', duration: '2 jam', image: '/assets/images/3.jpg', desc: 'Buat suvenir dari bambu lokal bersama pengrajin yang sudah menekuni ini sejak muda.' },
  { title: 'Angklung & Gamelan', category: 'Musik', duration: '1.5 jam', image: '/assets/edu-wisata/angklung.png', desc: 'Belajar memainkan angklung dan gamelan dari seniman Sunda Kampung Sicapit.' },
  { title: 'Tari Jaipong', category: 'Seni Pertunjukan', duration: '2 jam', image: '/assets/edu-wisata/tari-jaipong.jpg', desc: 'Gerakan dasar tari Jaipong dari penari kampung yang tampil di setiap acara desa.' },
  { title: 'Anyaman & Tenun', category: 'Kerajinan', duration: '2.5 jam', image: '/assets/edu-wisata/bakiak.jpg', desc: 'Belajar teknik anyaman tradisional menggunakan bahan alami dari kebun.' },
  { title: 'Musik Tradisional Sunda', category: 'Musik', duration: '1.5 jam', image: '/assets/edu-wisata/musik-sunda.jpg', desc: 'Mengenal harmoni Sunda dan mencoba alat musik tradisional lainnya.' },
  { title: 'Pencak Silat', category: 'Seni Pertunjukan', duration: '1.5 jam', image: '/assets/edu-wisata/pencak-silat.jpg', desc: 'Pelajari jurus dasar pencak silat dari pelatih lokal yang masih aktif.' },
]

const faqs = [
  { q: 'Apakah perlu pengalaman sebelumnya?', a: 'Tidak perlu sama sekali. Workshop dirancang untuk pemula. Instruktur akan membimbing dari nol. Yang penting datang dengan semangat mencoba.' },
  { q: 'Usia berapa yang boleh ikut?', a: 'Semua usia bisa berpartisipasi. Anak-anak di bawah 10 tahun sebaiknya didampingi orang tua. Workshop kerajinan bambu dan angklung paling populer di kalangan anak sekolah.' },
  { q: 'Apakah hasil kerajinan bisa dibawa pulang?', a: 'Ya, semua hasil karya peserta boleh dibawa pulang sebagai kenang-kenangan. Untuk kerajinan bambu, kami siapkan packaging sederhana.' },
  { q: 'Bisakah request jenis kerajinan tertentu?', a: 'Kami menyediakan beberapa pilihan workshop standar. Untuk request khusus (misalnya untuk event sekolah atau korporat), hubungi kami minimal 1 minggu sebelumnya.' },
]

const tabs = ['Semua', 'Kerajinan', 'Musik', 'Seni Pertunjukan'] as const

export default function KerajinanTanganPage() {
  const [activeTab, setActiveTab] = useState<string>('Semua')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE

  const filtered = activeTab === 'Semua'
    ? programs
    : programs.filter((p) => p.category === activeTab)

  return (
    <div className="min-h-screen bg-surface text-foreground antialiased selection:bg-brand selection:text-white">
      <SiteNav brand="Sicapit" />
      <PageBreadcrumb items={[{ label: 'Edu Wisata', href: '/edu-wisata' }, { label: 'Kerajinan Tangan' }]} />

      <main>
        {/* ── SECTION 1 — HERO ── */}
        <section aria-labelledby="hero-heading" className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden pt-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/edu-wisata/musik-sunda.jpg"
              alt="Kesenian tradisional Kampung Sicapit"
              fill
              priority
              quality={75}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          </div>
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
            <h1
              id="hero-heading"
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-3xl"
            >
              Tangan Anda yang Bicara.{' '}
              <span className="block mt-1">Bukan Algoritma.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Workshop kerajinan dan kesenian tradisional langsung dari tangan-tangan terampil warga Sicapit.
            </p>
          </div>
        </section>

        {/* ── SECTION 2 — TENTANG ── */}
        <section aria-labelledby="tentang-heading" className="py-20 lg:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">
              <div>
                <h2
                  id="tentang-heading"
                  className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-6"
                >
                  Kesenian Sicapit{' '}
                  <span className="text-purple-500">hidup di tangan warganya.</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5">
                  Di Kampung Sicapit masih ada pengrajin bambu yang membuat perkakas bukan karena hobi,
                  tapi karena memang pakai setiap hari. Masih ada kelompok angklung yang latihan setiap
                  Jumat sore bukan untuk turis, tapi karena mereka menikmati musiknya. Kesenian di sini
                  bukan pertunjukan — ini bagian dari kehidupan sehari-hari.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
                  Workshop yang kami tawarkan adalah kesempatan untuk duduk bersama mereka. Bukan menonton
                  dari kejauhan, tapi mencoba sendiri. Tangan Anda akan merasakan beratnya bambu, halusnya
                  anyaman, dan getaran angklung yang tidak bisa Anda rasakan dari video YouTube.
                </p>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-2">
                  <p className="font-heading text-xl sm:text-2xl italic text-foreground leading-relaxed">
                    &ldquo;Saya pikir bikin suvenir dari bambu itu gampang. Ternyata butuh kesabaran luar biasa. Pulang dari sini saya jadi lebih menghargai buatan tangan.&rdquo;
                  </p>
                </blockquote>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-line">
                  <Image
                    src="/assets/edu-wisata/gamelan.png"
                    alt="Alat musik gamelan tradisional di Kampung Sicapit"
                    fill
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — KATEGORI PROGRAM ── */}
        <section aria-labelledby="program-heading" className="py-20 lg:py-28 bg-background border-t border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="program-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2"
            >
              Pilih workshop Anda.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8">
              Setiap workshop dipandu pengrajin atau seniman lokal yang menekuni bidang ini puluhan tahun.
            </p>

            {/* Tab Filter */}
            <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter workshop">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-purple-500 text-white shadow-md'
                      : 'border border-line text-foreground hover:border-purple-500/40 hover:text-purple-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Program Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prog) => (
                <article
                  key={prog.title}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full tracking-wide uppercase">
                      {prog.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1.5">
                      {prog.title}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed mb-2 line-clamp-2">
                      {prog.desc}
                    </p>
                    <span className="text-white/50 text-xs font-mono uppercase tracking-wider">
                      {prog.duration}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — TIPS + FAQ ── */}
        <section aria-labelledby="tips-faq-heading" className="py-20 lg:py-28 bg-[#E8E0D0] dark:bg-[#1a1509] border-t border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Tips */}
              <div>
                <h2 id="tips-faq-heading" className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                  Tips Workshop
                </h2>
                <ol className="space-y-5">
                  {[
                    { title: 'Pakai pakaian yang tidak masalah kotor.', body: 'Kerajinan bambu menghasilkan serpihan. Anyaman menggunakan bahan alami. Kenakan pakaian yang santai saja.' },
                    { title: 'Bawa kamera, bukan ekspektasi.', body: 'Hasil karya Anda mungkin tidak sempurna. Itu bagian dari pengalaman. Yang penting adalah proses belajarnya.' },
                    { title: 'Tanya cerita di balik setiap alat.', body: 'Setiap alat musik dan perkakas punya sejarah. Pengrajin senang bercerita kalau Anda bertanya dengan tulus.' },
                    { title: 'Booking minimal H-5 untuk rombongan.', body: 'Bahan baku disiapkan sesuai jumlah peserta. Instruktur juga perlu persiapan. Jangan datang mendadak dengan 30 orang.' },
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold font-heading">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-heading font-bold text-foreground text-base sm:text-lg">{tip.title}</p>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-0.5">{tip.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                  Pertanyaan Umum
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                        openFaq === i ? 'border-purple-500/40 bg-surface' : 'border-line bg-surface/60 hover:border-purple-500/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-foreground text-sm sm:text-base hover:text-purple-500 transition-colors"
                        aria-expanded={openFaq === i}
                      >
                        <span className="pr-4">{faq.q}</span>
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 flex-shrink-0" />
                        )}
                      </button>
                      <div
                        className={`grid transition-all duration-300 ${
                          openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA — WhatsApp ── */}
        <section className="py-16 lg:py-20 bg-surface-strong border-t border-line">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Ingin mencoba workshop?
            </h2>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg">
              Hubungi kami untuk jadwal workshop dan ketersediaan instruktur.
            </p>
            {contactPhone && (
              <a
                href={`https://wa.me/${normalizePhoneForWhatsApp(contactPhone)}?text=${encodeURIComponent('Halo, saya ingin info workshop Kerajinan Tangan di Kampung Sicapit.')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi via WhatsApp"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand/90 text-white font-bold text-base sm:text-lg rounded-2xl transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 fill-white" />
                Hubungi via WhatsApp
              </a>
            )}
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      {contactPhone && (
        <a
          href={`https://wa.me/${normalizePhoneForWhatsApp(contactPhone)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
          aria-label="Hubungi WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white transition-transform group-hover:rotate-12">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}
    </div>
  )
}
