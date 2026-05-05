'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
  Mail,
  Instagram,
  ChevronUp,
  Landmark,
  GraduationCap,
  Lightbulb,
  Target,
  TrendingUp,
  ArrowLeft,
  Bird,
  Flower2,
  Gamepad2
} from 'lucide-react'

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.section
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
    <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-kampung.png" alt="Kampung Wisata Indonesia" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge className="mb-4 px-3 py-1 text-sm bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Halaman Edukasi
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Mengenal <span className="text-emerald-400">Kampung Wisata</span> Indonesia
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            Jelajahi keindahan budaya, tradisi, dan alam desa Indonesia melalui konsep pariwisata berbasis masyarakat yang berkelanjutan dan memberdayakan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-600/25"
              onClick={() => document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mulai Belajar <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali ke Beranda
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
    { icon: MapPin, value: 2000, suffix: '+', label: 'Kampung Wisata di Indonesia' },
    { icon: Users, value: 34, suffix: ' Provinsi', label: 'Dengan Program Desa Wisata' },
    { icon: TrendingUp, value: 15, suffix: ' Juta', label: 'Kunjungan Wisatawan/Tahun' },
    { icon: Heart, value: 75, suffix: '%', label: 'Kontribusi Ekonomi Lokal' },
  ]
  return (
    <AnimatedSection className="py-12 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="text-center text-white">
              <stat.icon className="w-7 h-7 mx-auto mb-2 text-emerald-200" />
              <div className="text-2xl sm:text-3xl font-bold mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-emerald-100 text-xs sm:text-sm">{stat.label}</p>
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
    <AnimatedSection id="tentang" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-emerald-700 border-emerald-300 bg-emerald-50 text-xs sm:text-sm">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            Tentang Kampung Wisata
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Apa Itu <span className="text-emerald-600">Kampung Wisata</span>?
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kampung wisata atau desa wisata adalah sebuah konsep pengembangan pariwisata yang berbasis pada potensi kearifan lokal masyarakat desa. Konsep ini menggabungkan keindahan alam, keunikan budaya, dan kreativitas warga lokal untuk menciptakan pengalaman wisata yang autentik dan berkelanjutan.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg text-emerald-800">
                  <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-emerald-600" />
                  </div>
                  Definisi Resmi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Menurut Kementerian Desa, Pembangunan Daerah Tertinggal dan Transmigrasi (Kemendes PDTT), Desa Wisata adalah desa yang memiliki potensi wisata dan sumber daya alam, sumber daya manusia, serta nilai-nilai tradisi budaya yang layak dikembangkan sebagai daya tarik wisata. Desa wisata bukan sekadar objek wisata, melainkan sebuah ekosistem pariwisata yang melibatkan seluruh komponen masyarakat dalam pengelolaan, pengembangan, dan pemanfaatan hasil pariwisata.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg text-amber-800">
                  <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-amber-600" />
                  </div>
                  Filosofi Utama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Filosofi dasar kampung wisata adalah &ldquo;berkelanjutan&rdquo; dan &ldquo;berdaya&rdquo;. Konsep ini mengutamakan kelestarian lingkungan, pelestarian budaya, dan peningkatan kesejahteraan masyarakat lokal. Setiap aktivitas wisata dirancang untuk memberikan manfaat ekonomi langsung kepada warga desa, sekaligus menjaga keaslian dan keasrian lingkungan kampung. Para wisatawan tidak hanya menikmati keindahan, tetapi juga belajar dan berinteraksi langsung dengan kehidupan masyarakat desa.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg text-purple-800">
                  <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  Tujuan Pengembangan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Tujuan utama pengembangan kampung wisata meliputi tiga aspek utama: memperkuat ekonomi lokal melalui diversifikasi pendapatan desa, melestarikan kekayaan budaya dan tradisi yang mulai tergerus modernisasi, serta menciptakan kesadaran lingkungan hidup di kalangan masyarakat dan wisatawan. Selain itu, kampung wisata juga berfungsi sebagai sarana edukasi antar-budaya, memperkenalkan kearifan lokal Indonesia kepada dunia.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/hero-kampung.png" alt="Pemandangan Kampung Wisata" className="w-full h-[420px] object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-3.5 flex items-center gap-3"
            >
              <div className="w-11 h-11 bg-emerald-100 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">ADWI 2024</p>
                <p className="text-xs text-gray-500">50 Desa Wisata Terbaik Indonesia</p>
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
      desc: 'Indonesia yang kaya akan keanekaragaman hayati menawarkan keindahan alam desa yang luar biasa. Mulai dari sawah terasering yang ikonik, hutan tropis yang lebat, sungai yang jernih, perbukitan yang asri, hingga pantai-pantai tersembunyi yang masih perawan. Setiap kampung wisata memiliki karakteristik alam yang unik dan menjadi daya tarik utama bagi wisatawan yang mendambakan ketenangan jauh dari hiruk-pikuk kota.',
      color: 'emerald'
    },
    {
      icon: Landmark,
      title: 'Warisan Budaya',
      desc: 'Setiap kampung wisata memiliki warisan budaya yang kaya dan beragam, mulai dari arsitektur rumah adat, upacara adat, seni pertunjukan seperti wayang, tari tradisional, dan gamelan, hingga kerajinan tangan khas daerah. Tradisi turun-temurun seperti gotong royong, nyadran, dan labuhan menjadi daya tarik edukasi yang tak ternilai. Wisatawan dapat menyaksikan langsung dan turut serta dalam berbagai aktivitas budaya tersebut.',
      color: 'amber'
    },
    {
      icon: UtensilsCrossed,
      title: 'Kuliner Lokal',
      desc: 'Kuliner kampung menjadi salah satu daya tarik utama wisatawan. Setiap daerah memiliki masakan tradisional yang dibuat dari bahan-bahan lokal segar dengan resep warisan nenek moyang. Dari nasi liwet, gudeg, rendang, rawon, hingga jajanan pasar tradisional seperti onde-onde, klepon, dan lupis. Banyak kampung wisata menawarkan program cooking class di mana wisatawan bisa belajar memasak masakan tradisional langsung dari para koki lokal.',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Kebersamaan Masyarakat',
      desc: 'Kekuatan terbesar kampung wisata terletak pada kebersamaan dan keramahan masyarakatnya. Budaya gotong royong yang masih kuat terjaga membuat pengalaman berkunjung ke kampung wisata terasa hangat dan personal. Wisatawan disambut dengan senyuman tulus dan keramahan khas Indonesia. Interaksi langsung dengan warga lokal memberikan pengalaman wisata yang autentik, membuka wawasan tentang kehidupan masyarakat desa yang sederhana namun kaya makna.',
      color: 'sky'
    },
  ]
  const colorMap: Record<string, { bg: string; icon: string; text: string; border: string }> = {
    emerald: { bg: 'bg-emerald-50', icon: 'bg-emerald-100 text-emerald-600', text: 'text-emerald-700', border: 'border-emerald-200' },
    amber: { bg: 'bg-amber-50', icon: 'bg-amber-100 text-amber-600', text: 'text-amber-700', border: 'border-amber-200' },
    red: { bg: 'bg-red-50', icon: 'bg-red-100 text-red-600', text: 'text-red-700', border: 'border-red-200' },
    sky: { bg: 'bg-sky-50', icon: 'bg-sky-100 text-sky-600', text: 'text-sky-700', border: 'border-sky-200' },
  }
  return (
    <AnimatedSection id="potensi" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-emerald-700 border-emerald-300 bg-emerald-50 text-xs sm:text-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Potensi & Keunggulan
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Potensi yang Tidak Terbatas
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kampung wisata Indonesia menyimpan beragam potensi yang menjadikannya destinasi wisata edukasi yang tak tertandingi di dunia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {potensi.map((item, i) => {
            const c = colorMap[item.color]
            return (
              <motion.div key={i} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className={`h-full border ${c.border} ${c.bg} hover:shadow-lg transition-all`}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className={`w-10 h-10 ${c.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.desc}</p>
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
      image: '/agrowisata.png',
      icon: Leaf,
      title: 'Agrowisata & Pertanian',
      desc: 'Belajar bertani secara organik, panen sayuran, menanam padi di sawah, dan memahami siklus pertanian tradisional. Wisatawan dapat merasakan langsung proses dari benih hingga panen, serta memahami pentingnya keberlanjutan pertanian dalam menjaga ketahanan pangan lokal.',
      tag: 'Populer',
      tagColor: 'bg-emerald-500'
    },
    {
      image: '/batik-workshop.png',
      icon: Palette,
      title: 'Workshop Batik & Kerajinan',
      desc: 'Mempelajari seni membatik tradisional dari para pengrajin berpengalaman. Wisatawan bisa mencoba membuat batik tulis atau cap, serta belajar tentang filosofi di balik setiap motif batik yang mencerminkan kekayaan budaya nusantara yang penuh makna filosofis dan estetika tinggi.',
      tag: 'Favorit',
      tagColor: 'bg-amber-500'
    },
    {
      image: '/kuliner.png',
      icon: Coffee,
      title: 'Kuliner Tradisional',
      desc: 'Ikuti kelas memasak masakan tradisional menggunakan bahan-bahan lokal segar dari kebun desa. Pelajari resep turun-temurun yang telah diwariskan selama ber generasi, dan nikmati hasil masakan bersama masyarakat lokal dalam suasana yang hangat dan akrab.',
      tag: 'Wajib Coba',
      tagColor: 'bg-red-500'
    },
    {
      image: '/homestay.png',
      icon: HomeIcon,
      title: 'Homestay & Pengalaman Lokal',
      desc: 'Tinggal bersama keluarga lokal di rumah-rumah tradisional yang nyaman. Rasakan kehidupan sehari-hari masyarakat desa, mulai dari bangun pagi untuk mengikuti aktivitas pertanian, belajar membuat kue tradisional, hingga duduk-duduk di teras menikmati suasana sore yang tenang.',
      tag: 'Rekomendasi',
      tagColor: 'bg-purple-500'
    },
    {
      image: '/kerajinan.png',
      icon: Scissors,
      title: 'Kerajinan Tangan & Seni',
      desc: 'Bergabung dalam workshop pembuatan kerajinan tangan seperti anyaman bambu, gerabah, ukiran kayu, dan tenun tradisional. Setiap karya memiliki cerita dan filosofi tersendiri yang merefleksikan budaya dan kearifan lokal masyarakat kampung.',
      tag: 'Edukatif',
      tagColor: 'bg-teal-500'
    },
    {
      image: '/hero-kampung.png',
      icon: Fish,
      title: 'Wisata Alam & Petualangan',
      desc: 'Jelajahi keindahan alam sekitar kampung melalui trekking, bersepeda menembus perbukitan, berenang di sungai jernih, atau menikmati sunrise dari puncak bukit. Aktivitas alam ini dirancang untuk memperkenalkan kekayaan biodiversitas lokal sekaligus membangun kesadaran lingkungan.',
      tag: 'Adventure',
      tagColor: 'bg-sky-500'
    },
  ]
  return (
    <AnimatedSection id="aktivitas" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-emerald-700 border-emerald-300 bg-emerald-50 text-xs sm:text-sm">
            <Compass className="w-3.5 h-3.5 mr-1.5" />
            Aktivitas Wisata
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pengalaman yang Tak Terlupakan
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai aktivitas menarik menanti Anda di kampung wisata. Setiap pengalaman dirancang untuk memberikan edukasi sekaligus hiburan yang bermakna.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img src={act.image} alt={act.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className={`absolute top-3 left-3 ${act.tagColor} text-white border-0 text-xs`}>
                    {act.tag}
                  </Badge>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-bold text-white">{act.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 leading-relaxed text-sm">{act.desc}</p>
                  <Button variant="ghost" className="mt-3 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-semibold text-sm">
                    Pelajari Selengkapnya <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Button>
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
    { name: 'Penanaman Padi', image: '/agrowisata.png', desc: 'Turun langsung ke sawah untuk mengalami proses menanam padi secara tradisional. Wisatawan akan belajar tentang sistem irigasi subak, teknik menanam bibit padi, hingga memahami siklus pertanian padi dari persiapan lahan hingga panen yang merupakan bagian penting dari budaya agraris Indonesia.' },
    { name: 'Tanaman Hias', image: '/tanaman-hias.png', desc: 'Mengenal berbagai jenis tanaman hias tropis yang menjadi komoditas unggulan kampung wisata. Peserta dapat belajar teknik pembibitan, penyetekan, penanaman, hingga cara merangkai tanaman hias untuk dekorasi rumah dan kebutuhan komersial.' },
  ]
  const budayaItems = [
    { name: 'Tarian Jaipong', image: '/tarian-jaipong.png', desc: 'Mempelajari Tarian Jaipong, tarian tradisional Sunda yang dinamis dan penuh gairah. Wisatawan akan diajarkan langkah-langkah dasar jaipong, gerakan tangan yang khas, serta memahami filosofi di balik setiap gerakan yang mencerminkan kehidupan masyarakat Sunda.' },
    { name: 'Angklung', image: '/angklung.png', desc: 'Mengenal dan bermain angklung, alat musik tradisional Indonesia yang terbuat dari bambu dan telah diakui UNESCO sebagai warisan budaya dunia. Peserta akan belajar teknik bermain, membaca notasi angklung, serta bermain bersama dalam kelompok orkestra angklung.' },
    { name: 'Gamelan', image: '/gamelan.png', desc: 'Mengenal gamelan, ensembel musik tradisional Indonesia yang terdiri dari berbagai instrumen perkusi seperti gong, kenong, saron, dan bonang. Peserta akan belajar teknik bermain gamelan serta memahami perannya dalam berbagai upacara adat dan pertunjukan budaya.' },
    { name: 'Mapag Tamu', image: '/mapag-tamu.png', desc: 'Menyaksikan dan mempelajari prosesi Mapag Tamu, upacara penyambutan tamu kehormatan dalam adat Sunda. Wisatawan akan memahami makna setiap rangkaian upacara, mulai dari tetabuhan musik, tarian penyambutan, hingga prosesi penyambutan yang penuh simbol dan arti.' },
    { name: 'Mapag Pengantin', image: '/mapag-pengantin.png', desc: 'Mengenal prosesi Mapag Pengantin, tradisi pernikahan adat Sunda yang melibatkan rangkaian upacara sakral dan penuh makna. Wisatawan akan memahami filosofi di balik setiap tahapan mulai dari ngeuyeuk seureuh, siraman, hingga akad nikah dalam balutan budaya Sunda yang elegan.' },
    { name: 'Kecapian', image: '/kecapian.png', desc: 'Belajar seni bela diri Kecapian, tradisi pencak silat khas Sunda yang menggunakan perisai (kecap) dan toya (tongkat). Peserta akan diajarkan teknik dasar pertahanan dan serang, gerakan kaki yang lincah, serta nilai-nilai spiritual dan kearifan lokal yang terkandung di dalamnya.' },
  ]
  const animalEduItems = [
    { name: 'Ngambil Ikan di Kolam', image: '/mancing-kolam.png', desc: 'Mengalami sensasi menangkap ikan langsung dari kolam menggunakan tangan atau alat tradisional seperti pancing dan bubu. Aktivitas ini mengajarkan tentang ekosistem perairan, teknik budidaya ikan, serta nilai kebersamaan dalam budaya makan bersama yang menjadi tradisi masyarakat desa.' },
    { name: 'Memberi Makan Kambing', image: '/memberi-makan-kambing.png', desc: 'Berinteraksi langsung dengan kambing dan belajar tentang teknik peternakan kambing yang berkelanjutan. Peserta akan diberi kesempatan untuk memberi makan, memerah susu, dan memahami peran ternak dalam kehidupan ekonomi rumah tangga petani di pedesaan Indonesia.' },
    { name: 'Edukasi Kelinci', image: '/edukasi-kelinci.png', desc: 'Mengenal lebih dekat kelinci melalui program edukasi yang mengajarkan tentang jenis-jenis kelinci, cara merawat, memberi makan, dan memahami perilaku hewan. Aktivitas ini sangat cocok untuk anak-anak dan berfungsi sebagai sarana edukasi tentang kehidupan hewan dan tanggung jawab merawat.' },
  ]
  const permainanTradisional = [
    { name: 'Congklak', image: '/congklak.png', desc: 'Permainan strategi tradisional menggunakan papan dan biji-bijian yang melatih logika dan ketelitian.' },
    { name: 'Gobak Sodor', image: '/gobak-sodor.png', desc: 'Permainan tim tradisional yang menguji kecepatan, strategi, dan kerjasama antar anggota tim.' },
    { name: 'Lompat Tali', image: '/lompat-tali.png', desc: 'Aktivitas fisik tradisional yang melatih kelincahan dan irama, biasa dimainkan secara berkelompok.' },
    { name: 'Gundu', image: '/gundu.png', desc: 'Permainan tradisional menggunakan batu kecil atau gundu yang melatih ketepatan dan konsentrasi.' },
    { name: 'Bakiak', image: '/bakiak.png', desc: 'Permainan menggunakan alat dari kayu yang melatih kekompakan tim dan koordinasi gerak bersama.' },
    { name: 'Galasin', image: '/galasin.png', desc: 'Permainan kombinasi antara petak umpet dan galah asin yang menguji kecepatan, ketangkasan, dan strategi tim.' },
  ]

  return (
    <AnimatedSection id="kategori" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-emerald-700 border-emerald-300 bg-emerald-50 text-xs sm:text-sm">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            Program Edukasi
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kategori Program Edukasi
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kampung wisata menawarkan berbagai program edukasi yang dikategorikan berdasarkan tema utama, memberikan pengalaman belajar yang menyenangkan dan mendalam bagi semua kalangan.
          </p>
        </div>

        <Tabs defaultValue="agrowisata" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-md border h-auto p-1">
            <TabsTrigger value="agrowisata" className="py-3 sm:py-4 data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-600 text-xs sm:text-sm font-semibold rounded-lg transition-all">
              <Flower2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              <span className="hidden xs:inline">Agrowisata</span>
              <span className="xs:hidden">Agro</span>
            </TabsTrigger>
            <TabsTrigger value="budaya" className="py-3 sm:py-4 data-[state=active]:bg-amber-500 data-[state=active]:text-white text-gray-600 text-xs sm:text-sm font-semibold rounded-lg transition-all">
              <Landmark className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              Budaya
            </TabsTrigger>
            <TabsTrigger value="animal" className="py-3 sm:py-4 data-[state=active]:bg-sky-500 data-[state=active]:text-white text-gray-600 text-xs sm:text-sm font-semibold rounded-lg transition-all">
              <Bird className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              Animal Edu
            </TabsTrigger>
          </TabsList>

          {/* Agrowisata Tab */}
          <TabsContent value="agrowisata" className="mt-0">
            <div className="grid md:grid-cols-2 gap-5">
              {agrowisataItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full border border-emerald-200 bg-white hover:shadow-lg transition-all overflow-hidden group">
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-emerald-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Flower2 className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-base font-bold text-white drop-shadow-md">{item.name}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Budaya Tab */}
          <TabsContent value="budaya" className="mt-0">
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {budayaItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full border border-amber-200 bg-white hover:shadow-lg transition-all overflow-hidden group">
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-amber-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Landmark className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-base font-bold text-white drop-shadow-md">{item.name}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Permainan Tradisional Sub-section */}
            <div className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-sm">
              <div className="bg-amber-500 px-6 py-4 flex items-center gap-3">
                <Gamepad2 className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white">Permainan Tradisional</h3>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Selain seni dan budaya, kampung wisata juga melestarikan berbagai permainan tradisional yang edukatif dan menyenangkan. Permainan-permainan ini mengajarkan nilai-nilai kebersamaan, sportivitas, dan keterampilan sosial kepada anak-anak maupun dewasa.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {permainanTradisional.map((game, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="bg-amber-50 border border-amber-100 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
                    >
                      <div className="relative h-28 sm:h-32 overflow-hidden">
                        <img src={game.image} alt={game.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <h4 className="font-bold text-white text-xs sm:text-sm drop-shadow-md">{game.name}</h4>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-gray-500 text-xs leading-relaxed">{game.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Animal Edu Tab */}
          <TabsContent value="animal" className="mt-0">
            <div className="grid md:grid-cols-3 gap-5">
              {animalEduItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full border border-sky-200 bg-white hover:shadow-lg transition-all overflow-hidden group">
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-sky-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Bird className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-base font-bold text-white drop-shadow-md">{item.name}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
      desc: 'Musim kemarau (April-Oktober) adalah waktu ideal untuk mengunjungi kampung wisata. Cuaca cerah memudahkan aktivitas outdoor, dan pemandangan sawah yang menghijau sangat memukau. Beberapa kampung wisata juga mengadakan festival atau acara adat tertentu pada bulan-bulan tertentu, sehingga sebaiknya cek jadwal acara sebelum merencanakan kunjungan.',
    },
    {
      icon: Sun,
      title: 'Persiapan & Perlengkapan',
      desc: 'Gunakan pakaian yang nyaman dan sopan, mengingat Anda akan berkunjung ke lingkungan masyarakat yang menjunjung adat istiadat. Bawa sunblock, topi, sepatu nyaman untuk trekking, serta obat-obatan pribadi. Siapkan juga uang tunai dalam pecahan kecil karena banyak transaksi di kampung wisata masih menggunakan uang tunai dan tidak tersedia mesin ATM.',
    },
    {
      icon: ShieldCheck,
      title: 'Etika & Sopan Santun',
      desc: 'Hormati adat istiadat dan kebiasaan lokal setempat. Selalu minta izin sebelum mengambil foto, terutama saat mengambil gambar orang atau upacara adat. Berpakaian sopan saat mengunjungi tempat-tempat sakral atau bersejarah. Tunjukkan rasa hormat kepada tetua adat dan sesepuh desa, serta ikuti arahan yang diberikan oleh pemandu lokal.',
    },
    {
      icon: Heart,
      title: 'Dukung Ekonomi Lokal',
      desc: 'Belilah oleh-oleh dan produk kerajinan langsung dari pengrajin lokal. Makan di warung-warung masyarakat, bukan di restoran besar. Gunakan jasa pemandu lokal dan homestay yang dikelola warga desa. Setiap rupiah yang Anda belanjakan di kampung wisata akan langsung berdampak pada kesejahteraan masyarakat lokal dan keberlangsungan program wisata desa.',
    },
    {
      icon: Camera,
      title: 'Dokumentasi & Sharing',
      desc: 'Abadikan momen-momen berharga selama di kampung wisata, namun ingat untuk tetap menikmati pengalaman secara langsung tanpa terlalu fokus pada kamera. Bagikan pengalaman positif Anda melalui media sosial untuk membantu promosi kampung wisata tersebut. Gunakan hashtag resmi kampung wisata jika tersedia untuk meningkatkan visibilitas.',
    },
    {
      icon: Clock,
      title: 'Durasi Kunjungan',
      desc: 'Disarankan minimal menghabiskan 2-3 hari di kampung wisata untuk mendapatkan pengalaman yang menyeluruh. Kunjungan singkat satu hari mungkin tidak cukup untuk menikmati seluruh aktivitas dan merasakan suasana autentik kehidupan desa. Untuk pengalaman yang lebih mendalam, pertimbangkan untuk tinggal lebih lama dan ikut serta dalam aktivitas harian masyarakat.',
    },
  ]
  return (
    <AnimatedSection id="panduan" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-emerald-700 border-emerald-300 bg-emerald-50 text-xs sm:text-sm">
            <Compass className="w-3.5 h-3.5 mr-1.5" />
            Panduan Wisatawan
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tips Berkunjung ke Kampung Wisata
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Persiapkan kunjungan Anda dengan baik agar mendapatkan pengalaman yang maksimal dan bermakna di kampung wisata.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">{tip.desc}</p>
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
      a: 'Biaya berkunjung ke kampung wisata sangat terjangkau dan bervariasi tergantung pada kampung wisata yang dikunjungi. Umumnya, biaya masuk berkisar antara Rp 10.000 hingga Rp 50.000 per orang. Untuk paket lengkap termasuk homestay, makan, dan aktivitas, biayanya berkisar Rp 200.000 hingga Rp 500.000 per orang per hari. Beberapa kampung wisata bahkan tidak memungut biaya masuk dan hanya mengenakan biaya untuk aktivitas tertentu.'
    },
    {
      q: 'Apakah kampung wisata cocok untuk dikunjungi bersama anak-anak?',
      a: 'Sangat cocok! Kampung wisata merupakan destinasi wisata edukasi yang ideal untuk anak-anak. Mereka dapat belajar tentang alam, pertanian, kerajinan, dan budaya secara langsung melalui pengalaman interaktif. Banyak kampung wisata yang menyediakan program khusus untuk keluarga dan anak-anak, seperti belajar bertani, membuat kerajinan, memasak tradisional, dan bermain permainan tradisional yang menyenangkan sekaligus edukatif.'
    },
    {
      q: 'Bagaimana cara menuju kampung wisata dari kota besar?',
      a: 'Aksesibilitas kampung wisata terus meningkat seiring dengan perkembangan infrastruktur di Indonesia. Sebagian besar kampung wisata dapat dijangkau dengan kendaraan pribadi atau transportasi umum dari kota-kota besar terdekat. Beberapa kampung wisata bahkan sudah memiliki jalan aspal yang baik dan akses transportasi reguler. Untuk kampung wisata yang terletak di lokasi yang lebih terpencil, biasanya tersedia jasa antar-jemput yang disediakan oleh pengelola kampung wisata.'
    },
    {
      q: 'Apakah tersedia akomodasi modern di kampung wisata?',
      a: 'Akomodasi di kampung wisata umumnya berupa homestay yang dikelola oleh warga lokal. Meskipun sederhana, homestay-homestay ini umumnya bersih, nyaman, dan dilengkapi dengan fasilitas dasar yang memadai seperti kamar mandi dalam, air bersih, dan listrik. Beberapa kampung wisata yang lebih berkembang juga telah menyediakan glamping (glamorous camping), cottage, atau villa yang lebih modern namun tetap mempertahankan nuansa tradisional.'
    },
    {
      q: 'Apa saja contoh kampung wisata terbaik di Indonesia?',
      a: 'Indonesia memiliki banyak kampung wisata yang telah diakui secara nasional dan internasional. Beberapa yang terkenal antara lain: Desa Penglipuran di Bali yang terkenal dengan arsitektur rumah adatnya yang seragam, Desa Borobudur di Jawa Tengah yang menawarkan wisata budaya di sekitar Candi Borobudur, Desa Wae Rebo di Flores yang terkenal dengan rumah adatnya yang unik, Desa Sambi di Boyolali yang terkenal dengan agrowisata kopi dan sayuran, serta Desa Nglanggeran di Gunungkidul yang terkenal dengan geo-wisata dan sunrise point-nya.'
    },
    {
      q: 'Bagaimana cara ikut berpartisipasi dalam pengembangan kampung wisata?',
      a: 'Ada banyak cara untuk berpartisipasi dalam pengembangan kampung wisata. Anda bisa menjadi relawan di program-program pembinaan desa wisata yang diadakan oleh pemerintah atau organisasi non-profit, menjadi mentor atau konsultan untuk pengembangan usaha wisata desa, berinvestasi dalam produk-produk kampung wisata, atau sekadar mengunjungi dan mempromosikan kampung wisata melalui media sosial. Setiap bentuk dukungan Anda sangat berarti bagi keberlangsungan dan perkembangan kampung wisata.'
    },
  ]
  return (
    <AnimatedSection id="faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-emerald-700 border-emerald-300 bg-emerald-50 text-xs sm:text-sm">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            FAQ
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Temukan jawaban untuk pertanyaan umum seputar kampung wisata di Indonesia.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-5 sm:px-6 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4 text-sm sm:text-base">
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
  return (
    <AnimatedSection className="py-16 lg:py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Siap Menjelajahi Kampung Wisata?
        </h2>
        <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          Mulailah perjalanan Anda menuju pengalaman wisata yang autentik, edukatif, dan bermakna. Temukan keajaiban kampung wisata Indonesia dan dukung pembangunan pariwisata berkelanjutan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-7 py-5 text-base rounded-xl shadow-lg transition-all">
            <MapPin className="mr-2 w-5 h-5" />
            Temukan Kampung Wisata
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-7 py-5 text-base rounded-xl">
            <Phone className="mr-2 w-5 h-5" />
            Hubungi Kami
          </Button>
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
          className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ─── Main Page ─── */
export default function KampungWisataPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
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
    </div>
  )
}
