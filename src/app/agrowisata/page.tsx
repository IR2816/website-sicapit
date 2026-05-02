import { SiteNav } from "../sections/site-nav";

export default function AgrowisataPage() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col">
      <SiteNav brand="Sicapit" />
      {/* 
        Halo! Ini adalah halaman gabungan untuk Farm dan Education (Agrowisata).
        Silakan tambahkan komponen atau konten dari Farm dan Education di sini.
        Tempat ini sudah disiapkan untuk dikerjakan.
      */}
      <div className="container mx-auto px-4 py-32 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black tracking-[0.2em] uppercase mb-4 backdrop-blur-md">Eksplorasi Dua Dimensi</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-xl">
            Sinergi <span className="text-brand">Alam & Budaya</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Menyelami harmoni kehidupan agrikultur yang menenangkan dan melestarikan kearifan tradisi lokal dalam satu destinasi edukatif.
          </p>
        </div>
        
        {/* Bento Grid Layout Parallel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Konten Farm / Pertanian */}
          <section className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-gradient-to-b from-surface to-[#0a150c] border border-brand/20 hover:border-brand/50 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-bl-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand font-black text-3xl mb-8 shadow-inner shadow-brand/20">
              🌱
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white font-heading">Ruang Tumbuh <br/><span className="text-brand">(Farm)</span></h2>
            <p className="text-slate-300/90 leading-relaxed mb-8">
              Pusat pembelajaran berbasis alam liar. Pengunjung dapat berinteraksi dengan peternakan mini, metode budidaya akuaponik, hingga tata cara bercocok tanam organik yang merawat bumi.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand text-sm">🐄</div>
                <span className="text-white/80 font-medium">Interaksi Satwa Ternak</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand text-sm">🐟</div>
                <span className="text-white/80 font-medium">Kolam Pembenihan Ikan</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand text-sm">🌿</div>
                <span className="text-white/80 font-medium">Workshop Tanam Organik</span>
              </div>
            </div>
          </section>

          {/* Konten Education / Edukasi Budaya */}
          <section className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-gradient-to-b from-surface to-[#150a0f] border border-[#e1306c]/20 hover:border-[#e1306c]/50 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e1306c]/5 rounded-bl-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-[#e1306c]/10 border border-[#e1306c]/30 flex items-center justify-center text-[#e1306c] font-black text-3xl mb-8 shadow-inner shadow-[#e1306c]/20">
              🎭
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white font-heading">Ruang Cipta <br/><span className="text-[#e1306c]">(Edukasi)</span></h2>
            <p className="text-slate-300/90 leading-relaxed mb-8">
              Panggung luhur untuk merawat tradisi. Menghubungkan generasi muda dengan akar leluhur melalui pementasan budaya partisipatif dan bengkel seni kerajinan tangan lokal.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e1306c]/20 flex items-center justify-center text-[#e1306c] text-sm">💃</div>
                <span className="text-white/80 font-medium">Latihan Tari Daerah</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e1306c]/20 flex items-center justify-center text-[#e1306c] text-sm">🎋</div>
                <span className="text-white/80 font-medium">Anyaman Bambu Kreatif</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e1306c]/20 flex items-center justify-center text-[#e1306c] text-sm">🥁</div>
                <span className="text-white/80 font-medium">Bermain Alat Musik Lokal</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
