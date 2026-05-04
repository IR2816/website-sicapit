const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');

const newHeroSection = \// ==================== HERO SECTION ====================
function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Video overlay (matching homepage robust overlay) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/rafting/2.jpeg"
          alt="Rafting Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0a0a]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand/20 rounded-full"
            initial={{
              x: Math.random() * 1440,
              y: 900,
            }}
            animate={{
              y: -100,
              x: \\\+=\\\\\\,
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="bg-brand/20 text-brand border-brand/30 px-4 py-1.5 text-sm mb-6 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            Kelurahan Semplak, Bogor Barat
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8"
        >
          Selamat Datang di
          <br />
          <span className="text-brand drop-shadow-md">Kampung Sicapit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Destinasi wisata air terpadu yang memadukan adrenalin dan keasrian alam. Jelajahi keindahan Sungai Cisadane lewat pengalaman edukasi, river tubing, dan rafting terbaik di Kota Bogor.
        </motion.p>

        {/* Activities Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {[
            { icon: Waves, label: 'Rafting' },
            { icon: Droplets, label: 'River Tubing' },
            { icon: Heart, label: 'Wisata Kuliner' },
            { icon: Award, label: 'Kesenian Lokal' },
            { icon: TreePine, label: 'Alam Asri' },
          ].map((act, i) => (
            <span key={i} className="flex items-center gap-2 bg-surface/30 backdrop-blur-md border border-white/10 text-white text-sm px-4 py-2 rounded-full hover:bg-surface/50 transition-colors">
              <act.icon className="w-4 h-4 text-brand" />
              {act.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-brand text-white hover:bg-brand/80 px-8 py-6 text-lg rounded-2xl shadow-[0_0_40px_rgba(22,163,74,0.3)] transition-all font-bold"
            onClick={() => document.querySelector('#paket')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lihat Paket Rafting
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl backdrop-blur-sm font-bold bg-white/5"
            onClick={() => document.querySelector('#galeri')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Camera className="w-5 h-5 mr-2" />
            Galeri Foto
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-12"
        >
          {[
            { icon: Users, value: '15,000+', label: 'Peserta Puas' },
            { icon: Trophy, value: '12+', label: 'Tahun Pengalaman' },
            { icon: Star, value: '4.9', label: 'Rating Google' },
            { icon: MapPin, value: '27 km', label: 'Jalur Rafting' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-brand" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-7 h-12 rounded-full border-2 border-white/20 flex justify-center pt-2 bg-black/20 backdrop-blur-sm hover:border-brand/50 transition-colors">
          <div className="w-1.5 h-2.5 rounded-full bg-brand" />
        </div>
      </motion.div>
    </section>
  )
}\;

// Extract the old HeroSection using regex. This is basic but will work since we control the file structure well enough.
const [beforeHero, rest] = content.split('// ==================== HERO SECTION ====================');
const [, afterHero] = rest.split('// ==================== ABOUT SECTION ====================');

content = beforeHero + newHeroSection + '\n\n// ==================== ABOUT SECTION ====================' + afterHero;
fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
console.log('Hero section replaced successfully');
