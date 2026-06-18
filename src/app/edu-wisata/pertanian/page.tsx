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
  { title: 'Menanam Padi di Sawah', category: 'Sawah', duration: '2 jam', image: '/assets/images/5.jpg', desc: 'Turun ke sawah, belajar teknik tanam padi dari petani yang sudah puluhan tahun bercocok tanam.' },
  { title: 'Kebun Sayur Organik', category: 'Kebun', duration: '1.5 jam', image: '/assets/edu-wisata/tanaman-hias.png', desc: 'Petik sayuran segar langsung dari kebun organik warga untuk bekal masak siang.' },
  { title: 'Pembibitan & Stek Tanaman', category: 'Kebun', duration: '2 jam', image: '/assets/edu-wisata/bonsai.jpg', desc: 'Belajar teknik pembibitan dan stek dari petani tanaman hias Sicapit.' },
  { title: 'Panen Raya Musiman', category: 'Sawah', duration: '3 jam', image: '/assets/edu-wisata/agrowisata.png', desc: 'Ikut panen padi atau jagung saat musimnya. Pengalaman yang tidak bisa dijadwalkan.' },
  { title: 'Sistem Irigasi Tradisional', category: 'Edukasi', duration: '1 jam', image: '/assets/images/2.jpg', desc: 'Pelajari cara warga mengatur air dari sungai ke sawah dengan sistem bagi adil.' },
  { title: 'Kompos & Pupuk Alami', category: 'Edukasi', duration: '1.5 jam', image: '/assets/images/4.jpg', desc: 'Buat kompos dari limbah kebun dan pelajari siklus nutrisi tanah tanpa bahan kimia.' },
]

const faqs = [
  { q: 'Apakah anak-anak boleh ikut bertani?', a: 'Boleh sekali. Program ini dirancang aman untuk semua usia. Anak-anak didampingi pemandu dan diberi alat yang sesuai ukuran mereka. Kegiatan paling populer di antara rombongan sekolah.' },
  { q: 'Apa yang harus dibawa?', a: 'Kenakan pakaian yang tidak masalah kotor, sepatu tertutup yang bisa basah, dan topi. Sunblock disarankan. Semua alat tani disediakan di lokasi.' },
  { q: 'Apakah hasil panen bisa dibawa pulang?', a: 'Ya, peserta boleh membawa pulang sebagian sayuran atau hasil panen sebagai oleh-oleh. Tergantung musim dan ketersediaan.' },
  { q: 'Kapan waktu terbaik untuk kunjungan pertanian?', a: 'Pagi hari (07:00-10:00) adalah waktu terbaik karena udara sejuk dan petani sudah mulai bekerja. Musim tanam berbeda-beda setiap bulan, hubungi kami untuk info terkini.' },
]

const tabs = ['Semua', 'Sawah', 'Kebun', 'Edukasi'] as const

export default function PertanianPage() {
  const [activeTab, setActiveTab] = useState<string>('Semua')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE

  const filtered = activeTab === 'Semua'
    ? programs
    : programs.filter((p) => p.category === activeTab)

  return (
    <div className="min-h-screen bg-surface text-foreground antialiased selection:bg-brand selection:text-white">
      <SiteNav brand="Sicapit" />
      <PageBreadcrumb items={[{ label: 'Edu Wisata', href: '/edu-wisata' }, { label: 'Pertanian' }]} />

      <main>
        {/* ── SECTION 1 — HERO ── */}
        <section aria-labelledby="hero-heading" className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden pt-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/5.jpg"
              alt="Area persawahan Kampung Sicapit"
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
              Turun ke Sawah.{' '}
              <span className="block mt-1">Kotorkan Tangan Anda.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Belajar bertani langsung dari petani Sicapit yang sudah puluhan tahun mengolah tanah ini.
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
                  Pertanian di Sicapit{' '}
                  <span className="text-emerald-500">bukan atraksi wisata.</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5">
                  Sawah dan kebun di Kampung Sicapit bukan dibuat untuk turis. Mereka sudah ada sebelum
                  kampung ini jadi destinasi wisata. Petani di sini bukan pemeran — mereka memang petani,
                  yang setiap pagi turun ke sawah dan setiap sore pulang dengan hasil panen di punggung.
                  Program agrowisata ini adalah cara warga berbagi kehidupan mereka dengan pengunjung.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
                  Yang membuat pertanian Sicapit menarik: semua organik. Warga memilih tidak pakai pestisida
                  kimia bukan karena tren, tapi karena tanah di sini sudah cukup subur dari aliran dua sungai.
                  Anda akan melihat langsung bagaimana padi, sayur, dan tanaman hias tumbuh tanpa bantuan
                  bahan sintetis.
                </p>
                <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
                  <p className="font-heading text-xl sm:text-2xl italic text-foreground leading-relaxed">
                    &ldquo;Saya kira menanam padi itu mudah. Ternyata ada seninya. Petani di sini sabar sekali mengajari.&rdquo;
                  </p>
                </blockquote>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-line">
                  <Image
                    src="/assets/edu-wisata/agrowisata.png"
                    alt="Area agrowisata Kampung Sicapit"
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
              Pilih aktivitas pertanian.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8">
              Semua program dipandu petani lokal yang ahli di bidangnya.
            </p>

            {/* Tab Filter */}
            <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter aktivitas pertanian">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'border border-line text-foreground hover:border-emerald-500/40 hover:text-emerald-500'
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
                    <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full tracking-wide uppercase">
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
                  Tips Berkunjung
                </h2>
                <ol className="space-y-5">
                  {[
                    { title: 'Pakai sepatu yang bisa kotor.', body: 'Sawah itu berlumpur. Sepatu tertutup yang tidak masalah basah adalah pilihan terbaik. Sandal akan tenggelam.' },
                    { title: 'Bawa topi dan sunblock.', body: 'Sawah tidak punya pohon peneduh. Matahari Bogor di atas jam 10 bisa sangat terik.' },
                    { title: 'Datang pagi, pulang sebelum siang.', body: 'Petani mulai kerja jam 6 pagi. Datang pagi berarti melihat proses paling aktif. Setelah jam 11, sawah biasanya sepi.' },
                    { title: 'Tanya musim tanam dulu.', body: 'Tidak semua program tersedia sepanjang tahun. Panen raya hanya saat musimnya. Hubungi kami untuk jadwal terkini.' },
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold font-heading">
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
                        openFaq === i ? 'border-emerald-500/40 bg-surface' : 'border-line bg-surface/60 hover:border-emerald-500/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-foreground text-sm sm:text-base hover:text-emerald-500 transition-colors"
                        aria-expanded={openFaq === i}
                      >
                        <span className="pr-4">{faq.q}</span>
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
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
              Siap turun ke sawah?
            </h2>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg">
              Hubungi kami untuk info jadwal kunjungan dan musim tanam terkini.
            </p>
            {contactPhone && (
              <a
                href={`https://wa.me/${normalizePhoneForWhatsApp(contactPhone)}?text=${encodeURIComponent('Halo, saya ingin info program Pertanian di Kampung Sicapit.')}`}
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
