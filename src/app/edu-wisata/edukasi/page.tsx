'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SiteNav } from '@/app/sections/site-nav'
import { normalizePhoneForWhatsApp } from '@/lib/validation'
import {
  TreePine,
  UtensilsCrossed,
  Palette,
  Home as HomeIcon,
  Users,
  MapPin,
  CalendarDays,
  Star,
  ArrowRight,
  ChevronDown,
  Heart,
  BookOpen,
  Camera,
  Leaf,
  Sparkles,
  Compass,
  Sun,
  Mountain,
  Fish,
  Scissors,
  Coffee,
  ShieldCheck,
  Clock,
  Phone,
  ChevronUp,
  Landmark,
  GraduationCap,
  Lightbulb,
  Target,
  TrendingUp,
  ArrowLeft,
  Bird,
  Flower2
} from 'lucide-react'

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({ children, className = '', delay = 0, id }: { children: React.ReactNode; className?: string; delay?: number; id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ─── Counter Animation ─── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])
  return <span ref={ref}>{count.toLocaleString('id-ID')}{suffix}</span>
}

/* ─── Page Header ─── */
function PageHeader() {
  return (
    <section className="relative h-[60vh] min-h-[460px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src="/assets/images/2.jpg" alt="Edukasi Kampung Wisata SiCapit" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-surface" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge className="mb-4 px-3 py-1 text-sm bg-brand/20 text-brand border-brand/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Halaman Edukasi
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Mengenal <span className="text-brand">Kampung Wisata</span> SiCapit
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Program pembelajaran mengenai pertanian, seni, dan budaya lokal untuk sekolah dan rombongan wisata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-brand hover:bg-brand/90 text-white rounded-xl shadow-lg font-bold px-8 py-6 text-base"
              onClick={() => document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mulai Belajar <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-surface/10 border-white/30 text-white hover:bg-surface/20 rounded-xl font-bold px-8 py-6 text-base"
              onClick={() => window.location.href = '/edu-wisata'}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Kembali ke Edu Wisata
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        onClick={() => document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>
    </section>
  )
}

/* ─── Stats Section ─── */
function StatsSection() {
  const stats = [
    { icon: MapPin, value: 2000, suffix: '+', label: 'Kampung Wisata SiCapit' },
    { icon: Users, value: 34, suffix: ' Provinsi', label: 'Dengan Program Desa Wisata' },
    { icon: TrendingUp, value: 15, suffix: ' Juta', label: 'Kunjungan Wisatawan/Tahun' },
    { icon: Heart, value: 75, suffix: '%', label: 'Kontribusi Ekonomi Lokal' },
  ]
  return (
    <AnimatedSection className="py-12 bg-surface-strong border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-brand" />
              <div className="text-2xl sm:text-3xl font-heading font-bold mb-1 text-foreground">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <AnimatedSection id="tentang" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-brand border-brand/30 bg-brand/10 text-sm font-medium tracking-wide">
            <BookOpen className="w-4 h-4 mr-2" />
            Tentang Kampung Wisata
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Apa Itu <span className="text-brand">Kampung Wisata</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kampung wisata atau desa wisata adalah sebuah konsep pengembangan pariwisata yang berbasis pada potensi kearifan lokal masyarakat desa. Konsep ini menggabungkan keindahan alam, keunikan budaya, dan kreativitas warga lokal untuk menciptakan pengalaman wisata yang autentik dan berkelanjutan.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border border-line shadow-sm hover:border-brand/40 hover:shadow-md transition-all bg-surface-strong/50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-brand" />
                  </div>
                  Definisi Resmi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Menurut Kementerian Desa, Pembangunan Daerah Tertinggal dan Transmigrasi (Kemendes PDTT), Desa Wisata adalah desa yang memiliki potensi wisata dan sumber daya alam, sumber daya manusia, serta nilai-nilai tradisi budaya yang layak dikembangkan sebagai daya tarik wisata. Desa wisata bukan sekadar objek wisata, melainkan sebuah ekosistem pariwisata yang melibatkan seluruh komponen masyarakat dalam pengelolaan, pengembangan, dan pemanfaatan hasil pariwisata.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-line shadow-sm hover:border-brand/40 hover:shadow-md transition-all bg-surface-strong/50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-brand" />
                  </div>
                  Filosofi Utama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Filosofi dasar kampung wisata adalah &ldquo;berkelanjutan&rdquo; dan &ldquo;berdaya&rdquo;. Konsep ini mengutamakan kelestarian lingkungan, pelestarian budaya, dan peningkatan kesejahteraan masyarakat lokal. Setiap aktivitas wisata dirancang untuk memberikan manfaat ekonomi langsung kepada warga desa, sekaligus menjaga keaslian dan keasrian lingkungan kampung.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-line shadow-sm hover:border-brand/40 hover:shadow-md transition-all bg-surface-strong/50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-brand" />
                  </div>
                  Tujuan Pengembangan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Tujuan utama pengembangan kampung wisata meliputi tiga aspek utama: memperkuat ekonomi lokal melalui diversifikasi pendapatan desa, melestarikan kekayaan budaya dan tradisi yang mulai tergerus modernisasi, serta menciptakan kesadaran lingkungan hidup di kalangan masyarakat dan wisatawan.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-xl border border-line">
              <img src="/hero-kampung.png" alt="Pemandangan Kampung Wisata" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-surface border border-line rounded-2xl shadow-xl p-5 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center">
                <Star className="w-7 h-7 text-brand" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-lg">ADWI 2024</p>
                <p className="text-sm text-muted-foreground">50 Desa Wisata Terbaik Indonesia</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Potensi Section ─── */
function PotensiSection() {
  const potensi = [
    {
      icon: Mountain,
      title: 'Potensi Alam',
      desc: 'Indonesia yang kaya akan keanekaragaman hayati menawarkan keindahan alam desa yang luar biasa. Mulai dari sawah terasering yang ikonik, hutan tropis yang lebat, sungai yang jernih, perbukitan yang asri, hingga alam yang masih perawan. Setiap kampung wisata memiliki karakteristik alam yang unik.',
    },
    {
      icon: Landmark,
      title: 'Warisan Budaya',
      desc: 'Setiap kampung wisata memiliki warisan budaya yang kaya dan beragam, mulai dari arsitektur rumah adat, upacara adat, seni pertunjukan seperti wayang, tari tradisional, dan gamelan, hingga kerajinan tangan khas daerah. Tradisi turun-temurun menjadi daya tarik edukasi.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Kuliner Lokal',
      desc: 'Kuliner kampung menjadi salah satu daya tarik utama wisatawan. Setiap daerah memiliki masakan tradisional yang dibuat dari bahan-bahan lokal segar dengan resep warisan nenek moyang. Nikmati sajian unik yang tidak ditemukan di perkotaan.',
    },
    {
      icon: Users,
      title: 'Kebersamaan Masyarakat',
      desc: 'Kekuatan terbesar kampung wisata terletak pada kebersamaan dan keramahan masyarakatnya. Budaya gotong royong yang masih kuat terjaga membuat pengalaman berkunjung ke kampung wisata terasa hangat dan personal.',
    },
  ]
  return (
    <AnimatedSection id="potensi" className="py-16 lg:py-24 bg-surface-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-brand border-brand/30 bg-brand/10 text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4 mr-2" />
            Potensi & Keunggulan
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kekayaan Potensi Tanpa Batas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kampung wisata SiCapit menghadirkan pengalaman unik yang menggabungkan keindahan alam, kekayaan budaya lokal, dan peluang edukasi luar biasa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {potensi.map((item, i) => {
            return (
              <motion.div key={i} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="h-full border border-line bg-surface hover:shadow-lg transition-all group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-4 text-xl text-foreground group-hover:text-brand transition-colors">
                      <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                        <item.icon className="w-6 h-6" />
                      </div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Activities Section ─── */
function ActivitiesSection() {
  const activities = [
    {
      image: '/assets/images/5.jpg',
      icon: Leaf,
      title: 'Agrowisata & Pertanian',
      desc: 'Belajar bertani secara organik, panen sayuran, menanam padi di sawah, dan memahami siklus pertanian tradisional secara langsung.',
      tag: 'Populer',
    },
    {
      image: '/assets/images/7.jpg',
      icon: Coffee,
      title: 'Kuliner Tradisional',
      desc: 'Ikuti kelas memasak masakan tradisional menggunakan bahan-bahan lokal segar dari kebun desa dengan panduan warga lokal.',
      tag: 'Wajib Coba',
    },
    {
      image: '/hero-kampung.png',
      icon: Fish,
      title: 'Wisata Alam & Petualangan',
      desc: 'Jelajahi keindahan alam sekitar kampung melalui aktivitas trekking, berenang di sungai jernih, dan menikmati udara asri.',
      tag: 'Adventure',
    },
  ]
  return (
    <AnimatedSection id="aktivitas" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-brand border-brand/30 bg-brand/10 text-sm font-medium tracking-wide">
            <Compass className="w-4 h-4 mr-2" />
            Aktivitas Wisata
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pengalaman yang Tak Terlupakan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Berbagai aktivitas menarik menanti Anda di kampung wisata. Setiap pengalaman dirancang untuk memberikan edukasi sekaligus hiburan yang bermakna.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="overflow-hidden h-full border border-line bg-surface-strong shadow-sm hover:shadow-xl transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <img src={act.image} alt={act.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-brand text-white border-0 text-xs px-3 py-1 font-bold uppercase tracking-wider">
                    {act.tag}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-xl font-bold text-white mb-1">{act.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed text-base">{act.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Kategori Program Edukasi Section ─── */
function KategoriEdukasiSection() {
  const agrowisataItems = [
    { name: 'Bonsai', image: '/assets/edu-wisata/bonsai.jpg', desc: 'Belajar teknik dasar dan perawatan bonsai lokal; pemangkasan, pembentukan, dan pemeliharaan estetika tanaman.' },
    { name: 'Penanaman Padi', image: '/assets/images/5.jpg', desc: 'Turun langsung ke sawah untuk mengalami proses menanam padi secara tradisional. Wisatawan akan belajar tentang sistem irigasi, teknik menanam, hingga memahami siklus panen.' },
    { name: 'Tanaman Hias', image: '/assets/edu-wisata/bonsai.jpg', desc: 'Mengenal berbagai jenis tanaman hias tropis yang dibudidayakan di kampung; teknik pembibitan, perawatan, dan pemasaran kecil.' },
  ]
  const budayaItems = [
    { name: 'Puncak Silat', image: '/assets/edu-wisata/pencak_silat.webp', desc: 'Belajar dasar-dasar pencak silat tradisional dalam sesi aman dan terstruktur untuk pemula.' },
    { name: 'Tarian Tradisional', image: '/assets/edu-wisata/tari_jaipong.jpg', desc: 'Pelajari berbagai tarian tradisional lokal, gerakan dasar, dan makna budaya di baliknya.' },
    { name: 'Musik Sunda', image: '/assets/edu-wisata/musik_sunda.jpg', desc: 'Mengenal musik tradisional Sunda dengan praktik alat musik dan ritme sederhana.' },
    { name: 'Enggrang', image: '/assets/edu-wisata/enggrang.jpg', desc: 'Mencoba keseimbangan menggunakan enggrang tradisional sambil memahami permainan rakyat.' },
    { name: 'Congklak', image: '/assets/edu-wisata/congklak.jpg', desc: 'Permainan papan tradisional yang melatih strategi, ketelitian, dan kebersamaan antar pemain.' },
    { name: 'Gobak Sodor', image: '/assets/edu-wisata/gobak_sodor.jpg', desc: 'Permainan tim tradisional yang menguji kelincahan, strategi, dan kerja sama dalam kelompok.' },
    { name: 'Lompat Tali', image: '/assets/edu-wisata/lompat_tali.jpg', desc: 'Aktivitas lompat tali berkelompok yang menyenangkan dan baik untuk koordinasi serta kebugaran.' },
    { name: 'Gundu', image: '/assets/edu-wisata/gundu.jpg', desc: 'Permainan tradisional menggunakan kelereng yang melatih fokus, ketepatan, dan keterampilan motorik halus.' },
    { name: 'Bakiak', image: '/assets/edu-wisata/bakiak.jpg', desc: 'Permainan sepatu kayu tradisional yang menuntut koordinasi, keseimbangan, dan kebersamaan tim.' },
  ]
  const animalEduItems = [
    { name: 'Ngambil Ikan di Kolam', image: '/assets/images/1.jpg', desc: 'Mengalami sensasi menangkap ikan langsung dari kolam menggunakan alat tradisional. Aktivitas mengajarkan ekosistem perairan dan budidaya sederhana.' },
    { name: 'Memberi Makan Kambing', image: '/assets/images/2.jpg', desc: 'Interaksi dengan kambing dan belajar dasar perawatan ternak serta peran ternak dalam ekonomi rumah tangga.' },
    { name: 'Edukasi Kelinci', image: '/assets/images/6.jpg', desc: 'Mengenal perawatan kelinci, memberi makan, dan perilaku yang aman untuk anak-anak.' },
    { name: 'Berkuda', image: '/assets/edu-wisata/berkuda.jpg', desc: 'Pengenalan dasar berkuda di arena aman dengan pemandu berpengalaman.' },
  ]
  return (
    <AnimatedSection id="kategori" className="py-16 lg:py-24 bg-surface-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-brand border-brand/30 bg-brand/10 text-sm font-medium tracking-wide">
            <BookOpen className="w-4 h-4 mr-2" />
            Program Edukasi
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kategori Program Edukasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kampung wisata menawarkan berbagai program edukasi yang dikategorikan berdasarkan tema utama, memberikan pengalaman belajar yang menyenangkan dan mendalam bagi semua kalangan.
          </p>
        </div>

        <Tabs defaultValue="agrowisata" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-10 bg-surface border border-line h-auto p-2 rounded-2xl shadow-sm">
            <TabsTrigger value="agrowisata" className="py-4 data-[state=active]:bg-brand data-[state=active]:text-white text-muted-foreground text-sm sm:text-base font-bold rounded-xl transition-all">
              <Flower2 className="w-5 h-5 mr-2" />
              <span className="hidden xs:inline">Agrowisata</span>
              <span className="xs:hidden">Agro</span>
            </TabsTrigger>
            <TabsTrigger value="budaya" className="py-4 data-[state=active]:bg-brand data-[state=active]:text-white text-muted-foreground text-sm sm:text-base font-bold rounded-xl transition-all">
              <Landmark className="w-5 h-5 mr-2" />
              Budaya
            </TabsTrigger>
            <TabsTrigger value="animal" className="py-4 data-[state=active]:bg-brand data-[state=active]:text-white text-muted-foreground text-sm sm:text-base font-bold rounded-xl transition-all">
              <Bird className="w-5 h-5 mr-2" />
              Animal Edu
            </TabsTrigger>
          </TabsList>

          {/* Agrowisata Tab */}
          <TabsContent value="agrowisata" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agrowisataItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <Card className="h-full border border-line bg-surface hover:shadow-lg transition-all overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand/90 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                          <Flower2 className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-white drop-shadow-md">{item.name}</h3>
                      </div>
                    </div>
                    <CardContent className="pt-5">
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Budaya Tab */}
          <TabsContent value="budaya" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {budayaItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <Card className="h-full border border-line bg-surface hover:shadow-lg transition-all overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand/90 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                          <Landmark className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-white drop-shadow-md">{item.name}</h3>
                      </div>
                    </div>
                    <CardContent className="pt-5">
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Animal Edu Tab */}
          <TabsContent value="animal" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {animalEduItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <Card className="h-full border border-line bg-surface hover:shadow-lg transition-all overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand/90 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                          <Bird className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-white drop-shadow-md">{item.name}</h3>
                      </div>
                    </div>
                    <CardContent className="pt-5">
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedSection>
  )
}

/* ─── Guide Section ─── */
function GuideSection() {
  const tips = [
    {
      icon: CalendarDays,
      title: 'Waktu Terbaik Berkunjung',
      desc: 'Musim kemarau (April-Oktober) adalah waktu ideal. Cuaca cerah memudahkan aktivitas outdoor, dan pemandangan sawah yang menghijau sangat memukau.',
    },
    {
      icon: Sun,
      title: 'Persiapan & Perlengkapan',
      desc: 'Gunakan pakaian yang nyaman dan sopan. Bawa sunblock, topi, sepatu nyaman untuk trekking, serta siapkan uang tunai dalam pecahan kecil.',
    },
    {
      icon: ShieldCheck,
      title: 'Etika & Sopan Santun',
      desc: 'Hormati adat istiadat dan kebiasaan lokal setempat. Selalu minta izin sebelum mengambil foto orang atau upacara adat.',
    },
    {
      icon: Heart,
      title: 'Dukung Ekonomi Lokal',
      desc: 'Belilah oleh-oleh dan produk kerajinan langsung dari pengrajin lokal. Makan di warung-warung masyarakat dan gunakan jasa pemandu lokal.',
    },
    {
      icon: Camera,
      title: 'Dokumentasi & Sharing',
      desc: 'Abadikan momen berharga, namun ingat untuk tetap menikmati pengalaman secara langsung tanpa terlalu fokus pada kamera.',
    },
    {
      icon: Clock,
      title: 'Durasi Kunjungan',
      desc: 'Disarankan minimal menghabiskan 2-3 hari di kampung wisata untuk mendapatkan pengalaman yang menyeluruh dan mendalam.',
    },
  ]
  return (
    <AnimatedSection id="panduan" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-brand border-brand/30 bg-brand/10 text-sm font-medium tracking-wide">
            <Compass className="w-4 h-4 mr-2" />
            Panduan Wisatawan
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tips Berkunjung
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Persiapkan kunjungan Anda dengan baik agar mendapatkan pengalaman yang maksimal dan bermakna di kampung wisata.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="h-full border border-line bg-surface-strong shadow-sm hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-4 text-lg text-foreground">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-5 h-5 text-brand" />
                    </div>
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{tip.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── FAQ Section ─── */
function FAQSection() {
  const faqs = [
    {
      q: 'Berapa biaya yang diperlukan untuk mengunjungi kampung wisata?',
      a: 'Biaya berkunjung ke kampung wisata sangat terjangkau. Umumnya, biaya masuk berkisar antara Rp 10.000 hingga Rp 50.000 per orang. Untuk paket lengkap termasuk homestay, makan, dan aktivitas, biayanya bervariasi tergantung paket yang dipilih.'
    },
    {
      q: 'Apakah kampung wisata cocok untuk dikunjungi bersama anak-anak?',
      a: 'Sangat cocok! Kampung wisata merupakan destinasi wisata edukasi yang ideal untuk anak-anak. Mereka dapat belajar tentang alam, pertanian, kerajinan, dan budaya secara langsung melalui pengalaman interaktif.'
    },
    {
      q: 'Bagaimana cara menuju kampung wisata Sicapit?',
      a: 'Aksesibilitas ke Kampung Wisata Sicapit sangat mudah, berlokasi di Kelurahan Semplak dan dapat dijangkau dengan kendaraan pribadi atau transportasi umum sekitar 10 km dari pusat kota Bogor.'
    },
    {
      q: 'Apakah tersedia akomodasi di kampung wisata?',
      a: 'Akomodasi di kampung wisata berupa homestay yang dikelola oleh warga lokal. Homestay ini bersih, nyaman, dan dilengkapi dengan fasilitas dasar yang memadai seperti kamar mandi dan air bersih, memberikan nuansa tradisional yang kuat.'
    },
    {
      q: 'Bagaimana cara booking paket Edu Wisata?',
      a: 'Anda bisa menghubungi kami langsung melalui tombol WhatsApp yang tersedia di website ini. Kami akan memberikan detail paket, harga terbaru, dan ketersediaan jadwal untuk Anda atau rombongan.'
    },
  ]
  return (
    <AnimatedSection id="faq" className="py-16 lg:py-24 bg-surface-strong">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-brand border-brand/30 bg-brand/10 text-sm font-medium tracking-wide">
            <BookOpen className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pertanyaan Umum
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-line rounded-xl px-5 sm:px-6 bg-surface shadow-sm data-[state=open]:border-brand/40 transition-all">
              <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-foreground hover:no-underline hover:text-brand py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  )
}

/* ─── CTA Section ─── */
function CTASection() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE
  const contactName = process.env.NEXT_PUBLIC_CONTACT_1_NAME || 'Kami'

  return (
    <AnimatedSection className="py-20 lg:py-28 bg-gradient-to-br from-[#1a1209] via-[#251b0f] to-[#1a1209] relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-brand rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Siap Menjelajahi Kampung Wisata?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mulailah perjalanan Anda menuju pengalaman wisata yang autentik, edukatif, dan bermakna. Temukan keajaiban kampung wisata SiCapit dan dukung pembangunan pariwisata berkelanjutan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {contactPhone && (
            <a
              href={`https://wa.me/${normalizePhoneForWhatsApp(contactPhone)}?text=${encodeURIComponent(`Halo ${contactName}, saya tertarik untuk booking program Edu Wisata di Kampung Sicapit. Bisa minta informasi paketnya?`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-7 text-lg rounded-2xl shadow-lg transition-all font-bold w-full sm:w-auto">
                <Phone className="mr-3 w-6 h-6 fill-white" />
                Hubungi via WhatsApp
              </Button>
            </a>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Scroll to Top Button ─── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-surface border border-line text-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-surface-strong transition-colors"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ─── Main Page ─── */
export default function KampungWisataEdukasiPage() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-brand selection:text-white">
      <SiteNav brand="Sicapit" />
      <PageHeader />
      <main className="flex-1">
        <StatsSection />
        <AboutSection />
        <PotensiSection />
        <ActivitiesSection />
        <KategoriEdukasiSection />
        <GuideSection />
        <FAQSection />
        <CTASection />
      </main>
      <ScrollToTop />
      
      {/* Floating WhatsApp Button */}
      {contactPhone && (
        <a
          href={`https://wa.me/${normalizePhoneForWhatsApp(contactPhone)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
          aria-label="Hubungi WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-white transition-transform group-hover:rotate-12"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}
    </div>
  )
}
