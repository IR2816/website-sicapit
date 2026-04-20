"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  MapPin,
  TreePine,
  Droplets,
  Users,
  GraduationCap,
  Calendar,
  Award,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowUp,
  Menu,
  X,
  Compass,
  Flower2,
  Fish,
  Waves,
  Sprout,
  HandHeart,
  BookOpen,
  Tent,
  Camera,
  UtensilsCrossed,
  CircleDot,
} from "lucide-react";
import { SiteNav } from "../sections/site-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

/* ------------------------------------------------------------------ */
/*  ANIMATED SECTION WRAPPER                                         */
/* ------------------------------------------------------------------ */
function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  FLOATING BACK TO TOP                                             */
/* ------------------------------------------------------------------ */
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-600 dark:bg-emerald-500 dark:bg-emerald-400 p-3 text-white shadow-lg hover:bg-emerald-700 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  COUNTER ANIMATION                                                 */
/* ------------------------------------------------------------------ */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
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

/* ------------------------------------------------------------------ */
/*  TIMELINE ITEM                                                     */
/* ------------------------------------------------------------------ */
function TimelineItem({ year, title, description, icon }: { year: string; title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 shrink-0">
          {icon}
        </div>
        <div className="w-px flex-1 bg-emerald-200 mt-2" />
      </div>
      <div className="pb-10">
        <Badge variant="secondary" className="mb-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:bg-emerald-900/50">
          {year}
        </Badge>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                        */
/* ------------------------------------------------------------------ */
export default function EduSicapit() {
    const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  
  
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#030712]">
      {/* ===== NAVBAR ===== */}
      <SiteNav brand="Sicapit" />

      <main className="flex-1">
        {/* ============================================================ */}
        {/* HERO                                                        */}
        {/* ============================================================ */}
        <section id="beranda" className="relative overflow-hidden group">
          <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center">
            {/* Background Image with Parallax-like scale effect on hover */}
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
              <img
                src="https://picsum.photos/seed/kampung/1920/1080"
                alt="Panorama Sungai Cisadane di Kampung Sicapit"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Overlays for contrast and atmosphere */}
            <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
            
            {/* Optional dot pattern overlay for texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 pt-16 md:pt-24 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Badge className="mb-6 bg-emerald-500/20 backdrop-blur-sm dark:bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-sm px-5 py-1.5 shadow-lg">
                    <Star className="h-4 w-4 mr-2" /> Top 500 ADWI 2024
                  </Badge>
                </motion.div>
                
                <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 drop-shadow-2xl">
                  Kampung <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">Sicapit</span>
                </h1>
                
                <p className="text-xl sm:text-2xl md:text-3xl text-emerald-50 mb-6 font-medium drop-shadow-lg">
                  Desa Wisata Edukasi di Jantung Kota Bogor
                </p>
                
                <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                  Dari kawasan kumuh menjadi destinasi wisata alam dan edukasi yang memukau.
                  Temukan keindahan Sungai Cisadane, kebudayaan Sunda, dan semangat gotong royong.
                </p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-emerald-900/30 transition-all hover:scale-105" asChild>
                    <a href="#wisata">Jelajahi Wisata</a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-emerald-900 rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-105" asChild>
                    <a href="#sejarah">Pelajari Sejarah</a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                onClick={() => document.getElementById('sejarah')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="flex flex-col items-center gap-2 text-white/50 hover:text-white/90 transition-colors">
                  <span className="text-xs font-medium tracking-widest uppercase">SCROLL</span>
                  <ChevronDown className="h-6 w-6" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* QUICK FACTS BAR                                              */}
        {/* ============================================================ */}
        <FadeInSection>
          <div className="bg-emerald-700 text-white py-6">
            <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <MapPin className="h-5 w-5" />, value: 2023, suffix: "", label: "Resmi Kampung Wisata" },
                { icon: <Waves className="h-5 w-5" />, value: 2, suffix: " Sungai", label: "Cisadane & Cidepit" },
                { icon: <Award className="h-5 w-5" />, value: 500, suffix: "+", label: "Peringkat ADWI 2024" },
                { icon: <Users className="h-5 w-5" />, value: 100, suffix: "0+", label: "Pengunjung/Bulan" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2 text-emerald-200">
                    {item.icon}
                    <span className="text-2xl sm:text-3xl font-bold">
                      <Counter target={item.value} suffix={item.suffix} />
                    </span>
                  </div>
                  <span className="text-sm text-emerald-100">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* ============================================================ */}
        {/* SEJARAH (History)                                            */}
        {/* ============================================================ */}
        <section id="sejarah" className="py-16 md:py-24 bg-gradient-to-b from-white dark:from-[#030712] to-emerald-50/30 dark:to-emerald-900/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection className="text-center mb-14">
              <Badge variant="outline" className="mb-3 border-emerald-300 text-emerald-700 dark:text-emerald-400">
                <BookOpen className="h-3 w-3 mr-1" /> Sejarah
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-emerald-950 dark:text-emerald-50">
                Dari &ldquo;Sisi Cai Cidepit&rdquo; menjadi Kampung Wisata
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Perjalanan transformasi Kampung Sicapit merupakan kisah inspiratif tentang bagaimana semangat
                masyarakat dapat mengubah sebuah kawasan menjadi destinasi wisata yang membanggakan.
              </p>
            </FadeInSection>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Name origin */}
              <FadeInSection delay={0.1}>
                <Card className="border-emerald-100 dark:border-emerald-900/50 shadow-sm dark:shadow-none overflow-hidden">
                  <div className="relative flex items-center justify-center p-8 bg-gradient-to-br from-emerald-50 to-white dark:from-[#030712] dark:to-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/30">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white dark:bg-[#030712] rounded-full p-4 shadow-xl border-4 border-white dark:border-emerald-900/50 z-10 group-hover:scale-105 transition-transform duration-500">
                      <img
                        src="/assets/images/Icon.jpg"
                        alt="Maskot Kepiting SiCapit"
                        className="h-full w-full object-contain drop-shadow-sm"
                      />
                    </div>
                    {/* Abstract circular decorations */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-emerald-200 dark:border-emerald-800/40 rounded-full animate-spin-slow opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-emerald-100 dark:border-emerald-900/20 rounded-full animate-spin-slow opacity-30" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 mb-4 text-emerald-950 dark:text-emerald-50">
                      <CircleDot className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      Asal Usul Nama &ldquo;Sicapit&rdquo;
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      Nama <strong>&ldquo;Sicapit&rdquo;</strong> berasal dari bahasa Sunda, yaitu frasa{" "}
                      <em>&ldquo;Sisi Cai Cidepit&rdquo;</em> yang secara harfiah berarti{" "}
                      <strong>&ldquo;kawasan di sisi Sungai Cidepit&rdquo;</strong>. Dalam bahasa Sunda, kata{" "}
                      <em>cai</em> berarti air atau sungai, sehingga nama ini sangat menggambarkan lokasi geografis
                      kampung yang berada di tepian Sungai Cidepit.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      Lambang kampung ini menampilkan seekor <strong>kepiting (kepiting kecil)</strong>,
                      karena secara historis terdapat banyak kepiting kecil yang hidup dan berkembang biak di
                      tepian Sungai Cidepit. Kepiting ini menjadi identitas unik yang membedakan Kampung Sicapit
                      dari kampung-kampung lainnya di sekitarnya.
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-lg p-4 border border-emerald-100 dark:border-emerald-900/50">
                      <p className="text-sm text-emerald-800 dark:text-emerald-300 italic">
                        &ldquo;Sisi Cai Cidepit&rdquo; — Sisi air Sungai Cidepit. Nama yang menggambarkan
                        keharmonisan antara masyarakat dan alam sungai yang menjadi sumber kehidupan.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Timeline */}
              <FadeInSection delay={0.2}>
                <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 mb-4 text-emerald-950 dark:text-emerald-50">
                  <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  Linimasa Transformasi
                </h3>
                <div>
                  <TimelineItem
                    year="Awal"
                    title="Kawasan Kumuh perkotaan"
                    description="Kampung Sicapit bermula sebagai kawasan perkampungan yang tergolong kumuh di lingkungan Kota Bogor. Lingkungan yang belum tertata dengan baik menjadi tantangan bagi masyarakat setempat."
                    icon={<TreePine className="h-5 w-5" />}
                  />
                  <TimelineItem
                    year="2020-an"
                    title="Munculnya Inisiatif Masyarakat"
                    description="Melalui semangat gotong royong dan kepemimpinan lokal, masyarakat mulai menginisiasi perubahan. Program pembersihan sungai, penataan lingkungan, dan pembentukan kelompok-kelompok produktif mulai berjalan."
                    icon={<HandHeart className="h-5 w-5" />}
                  />
                  <TimelineItem
                    year="2023"
                    title="Resmi sebagai Kampung Wisata"
                    description="Kampung Sicapit secara resmi diresmikan sebagai Kampung Wisata pada bulan Desember 2023. Pencapaian ini merupakan hasil dari kerja keras seluruh elemen masyarakat, dukungan pemerintah kota, serta berbagai mitra akademisi."
                    icon={<Award className="h-5 w-5" />}
                  />
                  <TimelineItem
                    year="2023-2024"
                    title="Pencapaian Nasional ADWI"
                    description="Kampung Sicapit berhasil menembus Top 1000 ADWI (Anugerah Desa Wisata Indonesia) 2023 dan meningkat ke Top 500 ADWI 2024, membuktikan potensi dan kualitasnya di tingkat nasional."
                    icon={<Star className="h-5 w-5" />}
                  />
                  <TimelineItem
                    year="Sekarang"
                    title="Destinasi Edu-Wisata Berkembang"
                    description="Terdaftar di Jadesta Kemenparekraf dengan kategori 'Berkembang', Kampung Sicapit terus berkembang dengan berbagai paket wisata edukasi, arung jeram, dan pelestarian budaya Sunda."
                    icon={<GraduationCap className="h-5 w-5" />}
                  />
                </div>
              </FadeInSection>
            </div>

            {/* Inspiration quote */}
            <FadeInSection delay={0.3}>
              <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0 shadow-lg">
                <CardContent className="p-8 md:p-12 text-center">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 mb-4 text-emerald-950 dark:text-emerald-50">
                    &ldquo;Dari Kumuh Menjadi Berkah&rdquo;
                  </h3>
                  <p className="text-emerald-100 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                    Kisah transformasi Kampung Sicapit membuktikan bahwa dengan semangat gotong royong,
                    kepemimpinan yang visioner, dan kecintaan terhadap lingkungan, sebuah kawasan yang
                    tadinya terpinggirkan dapat berubah menjadi destinasi wisata yang membanggakan dan
                    memberikan manfaat ekonomi bagi seluruh masyarakat. Ini adalah contoh nyata bahwa
                    pembangunan pariwisata berbasis masyarakat dapat menjadi motor penggerak ekonomi lokal
                    yang berkelanjutan.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </section>

        {/* ============================================================ */}
        {/* BUDAYA (Culture)                                             */}
        {/* ============================================================ */}
        <section id="budaya" className="py-16 md:py-24 bg-white dark:bg-[#030712]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection className="text-center mb-14">
              <Badge variant="outline" className="mb-3 border-amber-300 text-amber-700">
                <Flower2 className="h-3 w-3 mr-1" /> Kebudayaan
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-emerald-950 dark:text-emerald-50">
                Warisan Budaya Sunda yang Hidup
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Kampung Sicapit menjadi wadah pelestarian budaya Sunda melalui seni tari, kerajinan tangan,
                dan nilai-nilai luhur masyarakat Sunda yang tetap dijaga.
              </p>
            </FadeInSection>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <FadeInSection delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://picsum.photos/seed/budaya/800/1000" alt="Tari Jaipong di Kampung Sicapit" className="w-full h-[400px] sm:h-[500px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <Badge className="bg-amber-500 text-white border-0">
                      <Flower2 className="h-3 w-3 mr-1" /> Seni Pertunjukan
                    </Badge>
                    <p className="text-white font-semibold mt-2">Festival Jaipong Kampung Sicapit</p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.2} className="space-y-6">
                <Card className="border-amber-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700">
                      <Flower2 className="h-5 w-5" /> Tari Jaipong
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Kampung Sicapit secara aktif melestarikan seni tari Jaipong sebagai salah satu warisan budaya
                      Sunda yang sangat memukau. Festival Jaipong Kampung Sicapit digelar sebagai bagian dari
                      perayaan Hari Jadi Bogor (HJB ke-543), menampilkan keindahan gerakan tari yang enerjik dan
                      penuh gairah. Tari Jaipong merupakan pengembangan dari tari tayub dan ketuk tilu yang
                      dikembangkan oleh Gugum Gumbira pada tahun 1970-an, menjadi simbol kebanggaan budaya
                      Jawa Barat.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700">
                      <Star className="h-5 w-5" /> Kerajinan Caping
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Para ibu-ibu di Kampung Sicapit memiliki keahlian dalam membuat kerajinan caping (topi
                      bambu tradisional) yang dihias secara kreatif dan modern. Caping yang tadinya merupakan
                      pelindung kepala para petani kini diolah menjadi produk souvenir yang menarik bagi
                      pengunjung. Kegiatan ini tidak hanya melestarikan keterampilan tradisional, tetapi juga
                      menjadi sumber penghasilan tambahan bagi keluarga di kampung ini.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700">
                      <Users className="h-5 w-5" /> Filosofi Somaeh Hade ka Semah
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Masyarakat Kampung Sicapit menjunjung tinggi nilai-nilai budaya Sunda, khususnya filosofi{" "}
                      <em>&ldquo;somaeh hade ka semah&rdquo;</em> (baik dan ramah kepada tamu). Keramahan ini
                      menjadi fondasi utama dalam pengembangan pariwisata, di mana setiap pengunjung disambut
                      dengan hangat dan diperlakukan seperti keluarga sendiri. Nilai-nilai seperti{" "}
                      <em>silih asah, silih asih, silih asuh</em> (saling mendidik, saling menyayangi, saling
                      merawat) juga sangat terasa dalam kehidupan sehari-hari masyarakat.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ALAM (Nature)                                                */}
        {/* ============================================================ */}
        <section id="alam" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 dark:from-emerald-900/10 to-white dark:to-[#030712]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection className="text-center mb-14">
              <Badge variant="outline" className="mb-3 border-emerald-300 text-emerald-700 dark:text-emerald-400">
                <TreePine className="h-3 w-3 mr-1" /> Keindahan Alam
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-emerald-950 dark:text-emerald-50">
                Oase Hijau di Tengah Kota Bogor
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Dikelilingi oleh dua sungai dan rimbunan pohon bambu, Kampung Sicapit menyajikan
                pesona alam yang langka di tengah kepadatan perkotaan.
              </p>
            </FadeInSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* River 1 */}
              <FadeInSection delay={0.1}>
                <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/50 h-full">
                  <div className="relative h-48">
                    <img src="https://picsum.photos/seed/alam/1200/800" alt="Ekosistem Sungai Cidepit" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-emerald-500 dark:bg-emerald-400/80 border-0">Sungai Utama</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 mb-4 text-emerald-950 dark:text-emerald-50">
                      <Droplets className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      Sungai Cisadane
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Sungai Cisadane merupakan salah satu sungai terbesar di Jawa Barat yang mengalir
                      melewati Kampung Sicapit. Arus sungai yang moderat dan jalur yang dikelilingi
                      pepohonan bambu menjadikannya lokasi ideal untuk aktivitas arung jeram dan river
                      tubing. Keberadaan sungai ini menjadi sumber kehidupan bagi ekosistem lokal
                      dan menjadi daya tarik utama wisata air.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* River 2 */}
              <FadeInSection delay={0.2}>
                <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/50 h-full">
                  <div className="relative h-48">
                    <img src="https://picsum.photos/seed/bambu/1200/800" alt="Hutan Bambu Kampung Sicapit" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-emerald-500 dark:bg-emerald-400/80 border-0">Hutan Bambu</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 mb-4 text-emerald-950 dark:text-emerald-50">
                      <TreePine className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      Rimbunan Bambu
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Pepohonan bambu yang tumbuh lebat di sepanjang tepian sungai menciptakan kanopi
                      alami yang menyejukkan. Bayangan dari rumpun bambu memberikan kenyamanan bagi
                      para pengunjung yang melakukan arung jeram, menciptakan sensasi unik yang jarang
                      ditemukan di destinasi wisata air lainnya. Bambu juga menjadi bahan baku kerajinan
                      caping yang menjadi produk unggulan kampung.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Ecosystem */}
              <FadeInSection delay={0.3}>
                <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/50 h-full sm:col-span-2 lg:col-span-1">
                  <div className="relative h-48 bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                    <Fish className="h-20 w-20 text-emerald-300" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-emerald-500 dark:bg-emerald-400/80 border-0 text-white">Ekosistem</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 mb-4 text-emerald-950 dark:text-emerald-50">
                      <Fish className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      Keanekaragaman Hayati
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Ekosistem sungai di Kampung Sicapit menampung berbagai jenis flora dan fauna
                      lokal. Kepiting kecil yang menjadi maskot kampung dapat ditemukan di tepian
                      Sungai Cidepit, sementara berbagai jenis ikan air tawar menghuni perairan
                      kedua sungai. Kelompok Wanita Tani (KWT) juga mengelola kebun-kebun yang
                      ditanami berbagai tanaman tropis, menambah kekayaan hayati kawasan ini.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>

            {/* Location Info */}
            <FadeInSection delay={0.4}>
              <Card className="mt-8 border-emerald-100 dark:border-emerald-900/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
                        <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">Lokasi Strategis</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Jl. Raya Semplak RT 03/RW 06, Kel. Semplak, Kec. Bogor Barat</p>
                      </div>
                    </div>
                    <Separator orientation="vertical" className="hidden md:block h-10" />
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
                        <Compass className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">Koordinat GPS</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">-6.551254, 106.759843</p>
                      </div>
                    </div>
                    <Separator orientation="vertical" className="hidden md:block h-10" />
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
                        <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">Landmark</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Dekat Tugu Helicopter, Lanud Atang Sanjaya</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>

            {/* Google Maps Embed */}
            <FadeInSection delay={0.5}>
              <Card className="mt-12 bg-white/5 dark:bg-emerald-950/20 backdrop-blur-xl border border-emerald-200 dark:border-emerald-800/50 overflow-hidden shadow-2xl rounded-3xl">
                <CardContent className="p-0 flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 flex flex-col justify-center bg-emerald-50 dark:bg-emerald-900/10">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                      Temukan Posisi Kami
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      Kampung Wisata Sicapit terletak di daerah asri Semplak, Bogor. Mudah diakses dengan kendaraan pribadi maupun rombongan. 
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Kampung+Wisata+Sicapit+Bogor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 hover:underline underline-offset-4 transition-colors"
                    >
                      Buka di Google Maps
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                  <div className="md:w-2/3 relative h-[350px] md:h-auto">
                    {/* The correct URL to display Sicapit from Homepage Map */}
                    <div className="absolute inset-0 transition-opacity duration-500 hover:opacity-90">
                      <iframe
                        title="Peta Lokasi Kampung Sicapit"
                        src="https://maps.google.com/maps?q=Kampung%20Wisata%20SiCapit&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full object-cover filter contrast-[0.9] saturate-[1.2]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </section>

        {/* ============================================================ */}
        {/* WISATA (Tourism)                                             */}
        {/* ============================================================ */}
        <section id="wisata" className="py-16 md:py-24 bg-white dark:bg-[#030712]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection className="text-center mb-14">
              <Badge variant="outline" className="mb-3 border-emerald-300 text-emerald-700 dark:text-emerald-400">
                <Compass className="h-3 w-3 mr-1" /> Wisata & Atraksi
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-emerald-950 dark:text-emerald-50">
                Petualangan Seru Menanti Anda
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Dari arung jeram yang mendebarkan hingga pengalaman menginap di kampung,
                temukan berbagai aktivitas seru yang bisa dinikmati bersama keluarga dan sahabat.
              </p>
            </FadeInSection>

            {/* Rafting hero image */}
            <FadeInSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
                <img src="https://picsum.photos/seed/rafting/1200/800" alt="Arung Jeram di Kampung Sicapit" className="w-full h-[300px] sm:h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="px-8 md:px-12 max-w-lg">
                    <Badge className="bg-emerald-500 dark:bg-emerald-400 text-white border-0 mb-3">
                      <Waves className="h-3 w-3 mr-1" /> Atraksi Unggulan
                    </Badge>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 mb-4 text-emerald-950 dark:text-emerald-50">
                      Arung Jeram di Bawah Kanopi Bambu
                    </h3>
                    <p className="text-white/80 mb-4">
                      Pengalaman arung jeram yang unik — menyusuri Sungai Cisadane sambil
                      menikmati teduhnya rindang pohon bambu. Sensasi yang tidak akan Anda
                      temukan di tempat lain!
                    </p>
                    <Button className="bg-emerald-500 dark:bg-emerald-400 hover:bg-emerald-600 dark:bg-emerald-500 dark:bg-emerald-400 text-white">
                      Lihat Paket Wisata
                    </Button>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Tourism cards */}
            <Tabs defaultValue="air" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="air" className="data-[state=active]:bg-emerald-100 dark:bg-emerald-900/50 data-[state=active]:text-emerald-700 dark:text-emerald-400">
                  <Waves className="h-4 w-4 mr-2 hidden sm:inline" /> Wisata Air
                </TabsTrigger>
                <TabsTrigger value="budaya" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700">
                  <Flower2 className="h-4 w-4 mr-2 hidden sm:inline" /> Wisata Budaya
                </TabsTrigger>
                <TabsTrigger value="fasilitas" className="data-[state=active]:bg-emerald-100 dark:bg-emerald-900/50 data-[state=active]:text-emerald-700 dark:text-emerald-400">
                  <Star className="h-4 w-4 mr-2 hidden sm:inline" /> Fasilitas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="air">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Arung Jeram (Rafting)",
                      icon: <Waves className="h-6 w-6" />,
                      desc: "Atraksi utama Kampung Sicapit! Arung jeram di Sungai Cisadane dengan rute yang dikelilingi pohon bambu rimbun. Arus sungai yang moderat cocok untuk pemula maupun yang berpengalaman. Tim pemandu profesional akan menemani setiap perjalanan Anda.",
                      tag: "Populer",
                    },
                    {
                      title: "River Tubing",
                      icon: <Droplets className="h-6 w-6" />,
                      desc: "Nikmati sensasi mengambang di atas ban karet menyusuri aliran sungai. Aktivitas yang lebih santai dibanding arung jeram, cocok untuk semua umur. Rasakan kesegaran air Sungai Cisadane sambil menikmati pemandangan alam sekitar.",
                      tag: "Keluarga",
                    },
                    {
                      title: "Susur Sungai",
                      icon: <Compass className="h-6 w-6" />,
                      desc: "Eksplorasi sungai dengan perahu karet untuk menikmati keindahan alam dari perspektif yang berbeda. Kampung Sicapit menyediakan 3 perahu karet untuk aktivitas susur sungai, termasuk program susur sungai sambil mengangkut sampah.",
                      tag: "Petualangan",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="border-emerald-100 dark:border-emerald-900/50 hover:shadow-md dark:shadow-none transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
                            {item.icon}
                          </div>
                          <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">{item.tag}</Badge>
                        </div>
                        <CardTitle className="text-lg mt-4">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="budaya">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Spot Foto Instagramable",
                      icon: <Camera className="h-6 w-6" />,
                      desc: "Berbagai spot foto yang menarik telah disiapkan di seputar kampung, mulai dari spot alam di tepi sungai hingga spot budaya dengan ornamen tradisional Sunda. Cocok untuk mengisi feed media sosial Anda!",
                    },
                    {
                      title: "Cafe Sicapit",
                      icon: <UtensilsCrossed className="h-6 w-6" />,
                      desc: "Menikmati kudapan dan minuman di Cafe Sicapit dengan suasana alam yang asri. Kafe ini menyajikan aneka makanan lokal dan minuman segar, tempat yang sempurna untuk bersantai setelah beraktivitas.",
                    },
                    {
                      title: "Kuliner Lokal",
                      icon: <UtensilsCrossed className="h-6 w-6" />,
                      desc: "Rasakan cita rasa autentik kulinan Sunda di area kuliner Kampung Sicapit. Berbagai makanan tradisional disajikan langsung oleh masyarakat setempat, memberikan pengalaman kuliner yang otentik.",
                    },
                    {
                      title: "Ngalun Ban & Gajebo",
                      icon: <Compass className="h-6 w-6" />,
                      desc: "Aktivitas lokal unik dan area peristirahatan (Gajebo) yang menyediakan tempat berteduh sambil menikmati suasana kampung. Tempat ideal untuk bersantai dan berinteraksi dengan warga sekitar.",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="border-amber-100 hover:shadow-md dark:shadow-none transition-shadow">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                          {item.icon}
                        </div>
                        <CardTitle className="text-lg mt-4">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fasilitas">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { icon: <MapPin className="h-5 w-5" />, label: "Area Parkir" },
                    { icon: <Users className="h-5 w-5" />, label: "Balai Pertemuan" },
                    { icon: <UtensilsCrossed className="h-5 w-5" />, label: "Cafe & Kuliner" },
                    { icon: <Star className="h-5 w-5" />, label: "Kios Souvenir" },
                    { icon: <Camera className="h-5 w-5" />, label: "Spot Foto" },
                    { icon: <TreePine className="h-5 w-5" />, label: "Gajebo (Teduh)" },
                    { icon: <Fish className="h-5 w-5" />, label: "Perikanan" },
                    { icon: <Droplets className="h-5 w-5" />, label: "Kamar Mandi Umum" },
                  ].map((item, i) => (
                    <Card key={i} className="border-emerald-50 text-center p-4 hover:shadow-sm dark:shadow-none transition-shadow">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* ============================================================ */}
        {/* EDUKASI (Education)                                          */}
        {/* ============================================================ */}
        <section id="edukasi" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 dark:from-emerald-900/10 to-white dark:to-[#030712]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection className="text-center mb-14">
              <Badge variant="outline" className="mb-3 border-emerald-300 text-emerald-700 dark:text-emerald-400">
                <GraduationCap className="h-3 w-3 mr-1" /> Edukasi
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-emerald-950 dark:text-emerald-50">
                Belajar Sambil Bersenang-senang
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Kampung Sicapit menawarkan berbagai program edukasi yang dirancang untuk memberikan
                pengalaman belajar langsung di alam dan lingkungan masyarakat.
              </p>
            </FadeInSection>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <FadeInSection delay={0.2} className="space-y-6 order-2 lg:order-1">
                <Card className="border-emerald-100 dark:border-emerald-900/50 overflow-hidden">
                  <div className="relative h-48">
                    <img src="https://picsum.photos/seed/farm/1200/800" alt="Program Berkebun Bersama Sicapit" className="h-full w-full object-cover" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-emerald-600 dark:bg-emerald-500 dark:bg-emerald-400 text-white">Rp 50.000/orang</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
                      <h3 className="font-heading text-xl md:text-2xl flex items-center gap-2 m-0">
                        <Sprout className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        Berkebun Bersama Sicapit
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Program edukasi pertanian yang memungkinkan pengunjung belajar langsung tentang
                      teknik bercocok tanam dari para petani lokal. Peserta akan diajarkan cara menanam,
                      merawat, dan memanen berbagai jenis sayuran dan tanaman herbal. Program ini
                      dikelola oleh Kelompok Wanita Tani (KWT) yang berpengalaman dan penuh semangat
                      berbagi pengetahuan.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs">Pertanian Organik</Badge>
                      <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs">Tanaman Herbal</Badge>
                      <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs">Kelompok Wanita Tani</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-emerald-100 dark:border-emerald-900/50">
                  <CardContent className="p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h3 className="font-heading text-lg flex items-center gap-2 m-0 leading-none">
                        <Tent className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        Semalam di Sicapit
                      </h3>
                      <Badge className="bg-amber-500 hover:bg-amber-600 text-white shadow-sm shrink-0">Rp 500.000</Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Pengalaman menginap satu malam di kampung untuk merasakan langsung kehidupan
                      masyarakat desa. Pengunjung akan disambut sebagai bagian dari keluarga kampung,
                      menikmati makanan tradisional, belajar kegiatan sehari-hari masyarakat, dan
                      bangun pagi dengan suara alam. Program ini memberikan pemahaman mendalam tentang
                      budaya dan kehidupan masyarakat Sunda.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-amber-50 text-amber-700 text-xs">Homestay</Badge>
                      <Badge variant="secondary" className="bg-amber-50 text-amber-700 text-xs">Kuliner Tradisional</Badge>
                      <Badge variant="secondary" className="bg-amber-50 text-amber-700 text-xs">Immersion</Badge>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={0.3} className="order-1 lg:order-2 space-y-6">
                <Card className="border-emerald-100 dark:border-emerald-900/50 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-heading text-xl">
                      <GraduationCap className="h-6 w-6" /> Mitra Akademis
                    </CardTitle>
                    <CardDescription className="text-gray-500 max-w-sm">Beberapa institusi pendidikan yang telah bermitra dengan Kampung Sicapit</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      {
                        name: "IPB University",
                        desc: "Mahasiswa melakukan penelitian skripsi tentang potensi alam dan pertanian di Kampung Sicapit, menjalin kolaborasi riset yang berkelanjutan.",
                      },
                      {
                        name: "Universitas Indonesia",
                        desc: "Program studi pariwisata Fakultas Vokasi UI melakukan kunjungan studi lapangan untuk mempelajari pengembangan desa wisata.",
                      },
                      {
                        name: "SMP Presiden",
                        desc: "Siswa junior high school mengikuti program Agri Techno Sociopreneur, belajar tentang teknologi pertanian modern dan kewirausahaan sosial.",
                      },
                      {
                        name: "UIN Jakarta",
                        desc: "Penelitian akademik tentang pemetaan distribusi desa wisata, menjadikan Sicapit sebagai studi kasus kampung wisata rintisan.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-emerald-50/80 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 border border-emerald-100 dark:border-emerald-900/30 transition-colors group">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">{item.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white border-0 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <GraduationCap className="h-40 w-40 transform rotate-12" />
                  </div>
                  <CardContent className="p-8 md:p-10 relative z-10">
                    <h3 className="font-heading text-xl md:text-2xl flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <BookOpen className="h-6 w-6 text-emerald-100" />
                      </div>
                      Riset & Pengembangan
                    </h3>
                    <p className="text-emerald-50 text-base leading-relaxed">
                      Kampung Sicapit telah menjadi objek penelitian komprehensif menggunakan kerangka analisis{" "}
                      <strong className="text-white drop-shadow-md">4A</strong> (Attractions, Accessibility, Amenities, Ancillary) dan analisis{" "}
                      <strong className="text-white drop-shadow-md">SWOT</strong> untuk merumuskan strategi pengembangan pariwisata berkelanjutan.
                      Penelitian ini menjadi acuan bagi pengembangan desa wisata secara nasional.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* KOMUNITAS (Community)                                         */}
        {/* ============================================================ */}
        <section id="komunitas" className="py-16 md:py-24 bg-white dark:bg-[#030712]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection className="text-center mb-14">
              <Badge variant="outline" className="mb-3 border-emerald-300 text-emerald-700 dark:text-emerald-400">
                <HandHeart className="h-3 w-3 mr-1" /> Komunitas
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-emerald-950 dark:text-emerald-50">
                Semangat Gotong Royong
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Kekuatan Kampung Sicapit terletak pada masyarakatnya yang kompak dan penuh semangat
                dalam membangun kampung melalui gotong royong.
              </p>
            </FadeInSection>

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              <FadeInSection delay={0.1} className="lg:col-span-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/gotongroyong/1200/800" alt="Gotong Royong di Kampung Sicapit" className="w-full h-[350px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 mb-4 text-emerald-950 dark:text-emerald-50">Gotong Royong Masyarakat</h3>
                    <p className="text-white/80 text-sm">
                      Kegiatan bersih-bersih kampung dan penjagaan lingkungan sungai secara rutin dilakukan bersama.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.2} className="lg:col-span-2 space-y-4">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Pemberdayaan Perempuan",
                    desc: "Para ibu-ibu aktif dalam membuat kerajinan caping dekoratif, mengelola KWT, dan mengembangkan produk UMKM lokal.",
                  },
                  {
                    icon: <Sprout className="h-5 w-5" />,
                    title: "Kelompok Wanita Tani (KWT)",
                    desc: "Kelompok ini mengelola kebun pertanian, memproduksi tanaman herbal dan sayuran organik, sekaligus menjadi penggerak wisata edukasi.",
                  },
                  {
                    icon: <TreePine className="h-5 w-5" />,
                    title: "Pelestarian Lingkungan",
                    desc: "Program 'Susur Sungai sambil Angkut Sampah' dan bersih-bersih kampung rutin dilakukan sebagai bentuk kepedulian terhadap lingkungan.",
                  },
                  {
                    icon: <Award className="h-5 w-5" />,
                    title: "Pengakuan & Penghargaan",
                    desc: "Top 1000 ADWI 2023, Top 500 ADWI 2024, dan terverifikasi di Jadesta Kemenparekraf sebagai desa wisata kategori 'Berkembang'.",
                  },
                ].map((item, i) => (
                  <Card key={i} className="border-emerald-50 p-4 hover:shadow-sm dark:shadow-none transition-shadow">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </FadeInSection>
            </div>

            {/* Development progress */}
            <FadeInSection delay={0.3}>
              <Card className="mt-12 border-emerald-100 dark:border-emerald-900/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    Indikator Pengembangan Kampung
                  </CardTitle>
                  <CardDescription>Berdasarkan penilaian kampung tematik Kota Bogor — Kecamatan Bogor Barat</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Skor Kampung Sicapit</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">56.58</span>
                    </div>
                    <Progress value={56.58} className="h-2" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Rata-rata Kec. Bogor Barat: 72.08</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Meskipun skor Kampung Sicapit masih menjadi yang terendah di Kecamatan Bogor Barat,
                    angka ini justru menunjukkan bahwa masih terdapat potensi besar yang dapat dikembangkan.
                    Dengan berbagai program yang sudah berjalan dan dukungan yang terus meningkat,
                    Kampung Sicapit terus bergerak menuju peringkat yang lebih baik. Pencapaian
                    Top 500 ADWI 2024 adalah bukti bahwa kualitas wisata kampung ini diakui secara nasional,
                    meskipun penilaian kampung tematik di tingkat kota masih perlu ditingkatkan.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FAQ                                                          */}
        {/* ============================================================ */}
        <section id="faq" className="py-20 md:py-32 bg-gray-50/50 dark:bg-[#030712] relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px]" />
            <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-400/5 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeInSection className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-emerald-300 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-700/50 dark:text-emerald-300 px-4 py-1">
                Pertanyaan Umum
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                FAQ — Pertanyaan yang Sering Diajukan
              </h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Temukan jawaban lengkap seputar wisata edukasi, fasilitas, sejarah, dan cara berkunjung ke Kampung Wisata Sicapit.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    q: "Apa itu Kampung Sicapit?",
                    a: "Kampung Sicapit adalah desa wisata edukasi (edu-wisata) yang terletak di Kelurahan Semplak, Kecamatan Bogor Barat, Kota Bogor, Jawa Barat. Kampung ini resmi diresmikan sebagai kampung wisata pada Desember 2023 dan menawarkan berbagai atraksi wisata air, edukasi pertanian, dan pelestarian budaya Sunda.",
                  },
                  {
                    q: "Bagaimana cara menuju Kampung Sicapit?",
                    a: "Kampung Sicapit berlokasi di Jalan Raya Semplak RT 03/RW 06, Kelurahan Semplak, Kecamatan Bogor Barat. Kampung ini berada dekat Tugu Helicopter, Lanud Atang Sanjaya. Dari pusat Kota Bogor, kampung ini dapat ditempuh dengan kendaraan pribadi atau transportasi umum dalam waktu sekitar 20-30 menit.",
                  },
                  {
                    q: "Berapa harga tiket masuk dan paket wisata?",
                    a: "Paket 'Berkebun Bersama Sicapit' dibanderol seharga Rp 50.000 per orang, sementara paket 'Semalam di Sicapit' seharga Rp 500.000. Untuk harga arung jeram, river tubing, dan aktivitas lainnya, silakan hubungi kontak resmi Kampung Sicapit di 081318251228.",
                  },
                  {
                    q: "Aktivitas apa saja yang bisa dilakukan di Kampung Sicapit?",
                    a: "Ada banyak aktivitas yang bisa dinikmati, antara lain: arung jeram di Sungai Cisadane, river tubing, susur sungai, berkebun bersama (edu-wisata pertanian), menginap semalam di kampung, menikmati kuliner lokal di Cafe Sicapit, berfoto di spot-spot instagramable, membeli kerajinan caping sebagai souvenir, dan belajar tentang budaya Sunda.",
                  },
                  {
                    q: "Apakah Kampung Sicapit cocok untuk kunjungan keluarga dan anak-anak?",
                    a: "Ya, sangat cocok! Kampung Sicapit memiliki konsep edu-wisata yang ramah keluarga. Anak-anak dapat belajar tentang pertanian dan lingkungan melalui program Berkebun Bersama. Beberapa sekolah seperti SMP Presiden bahkan sudah menjadikan kampung ini sebagai lokasi study tour. Aktivitas river tubing juga aman untuk keluarga dengan pendampingan pemandu.",
                  },
                  {
                    q: "Dari mana asal nama 'Sicapit'?",
                    a: "Nama 'Sicapit' berasal dari bahasa Sunda 'Sisi Cai Cidepit' yang berarti 'kawasan di sisi Sungai Cidepit'. Lambang kampung berupa kepiting karena dahulu banyak ditemukan kepiting kecil di tepian Sungai Cidepit. Sungai Cidepit adalah salah satu dari dua sungai yang mengapit kampung ini, selain Sungai Cisadane.",
                  },
                  {
                    q: "Bagaimana sejarah transformasi Kampung Sicapit?",
                    a: "Kampung Sicapit bermula dari kawasan perkampungan yang tergolong kumuh. Melalui semangat gotong royong dan inisiatif masyarakat, kawasan ini secara bertahap ditata dan diubah menjadi destinasi wisata. Pada Desember 2023, kampung ini resmi diresmikan sebagai Kampung Wisata. Pencapaiannya terus meningkat dengan masuknya ke Top 1000 ADWI 2023 dan Top 500 ADWI 2024.",
                  },
                ].map((item, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`item-${i}`}
                    className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-emerald-100 dark:border-emerald-800/30 rounded-2xl px-6 py-2 shadow-sm transition-all hover:shadow-md data-[state=open]:bg-white dark:data-[state=open]:bg-emerald-950/20 data-[state=open]:border-emerald-300 dark:data-[state=open]:border-emerald-700/50"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:no-underline py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed pb-5 text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInSection>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      

      <BackToTop />
    </div>
  );
}








