import { SiteNav } from "../sections/site-nav";
import Link from "next/link";
import Image from "next/image";

export default function AgrowisataPage() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col pt-24 pb-10">
      <SiteNav brand="Sicapit" />
      {/* 
        Halaman gabungan untuk Farm dan Education (Agrowisata).
      */}
      <div className="container mx-auto px-4 py-8 z-10 relative flex-1">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black tracking-[0.2em] uppercase mb-4 backdrop-blur-md">Eksplorasi Dua Dimensi</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-xl font-heading">
            Agrowisata <span className="text-brand">& Edukasi</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Menyelami harmoni kehidupan agrikultur yang menenangkan dan melestarikan kearifan tradisi lokal dalam satu destinasi wisata edukatif di Kampung Sicapit.
          </p>
        </div>
        
        {/* Bento Grid Layout Parallel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Konten Farm / Pertanian */}
          <section className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-gradient-to-b from-[#111111] to-[#0a150c] border border-brand/20 hover:border-brand/50 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-bl-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            
            <div className="relative w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden">
              <Image src="/assets/images/2.jpg" alt="Farm Sicapit" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a150c] to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-white font-heading">Ruang Tumbuh <br/><span className="text-brand">(Mini Farm)</span></h2>
            <p className="text-slate-300/90 leading-relaxed mb-8 flex-1">
              Pusat pembelajaran berbasis alam liar. Anda dan keluarga dapat berinteraksi dengan peternakan mini, memberi pakan ikan, hingga belajar tata cara bercocok tanam organik yang ramah anak.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand text-sm">🐄</div>
                <span className="text-white/80 font-medium">Interaksi Satwa Ternak & Beri Pakan</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand text-sm">🌿</div>
                <span className="text-white/80 font-medium">Workshop Tanam & Panen Organik</span>
              </div>
            </div>

            <Link href="/farm" className="mt-auto block w-full text-center py-4 bg-brand/10 hover:bg-brand text-brand hover:text-white rounded-xl font-bold border border-brand/30 transition-all duration-300">
              Jelajahi Farm
            </Link>
          </section>

          {/* Konten Education / Edukasi Budaya */}
          <section className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-gradient-to-b from-[#111111] to-[#150a0f] border border-[#e1306c]/20 hover:border-[#e1306c]/50 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e1306c]/5 rounded-bl-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            
            <div className="relative w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden">
              <Image src="/assets/images/rafting/image copy 6.png" alt="Edu Sicapit" fill className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150a0f] to-transparent"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-white font-heading">Ruang Cipta <br/><span className="text-[#e1306c]">(Edukasi & Sejarah)</span></h2>
            <p className="text-slate-300/90 leading-relaxed mb-8 flex-1">
              Panggung luhur merawat tradisi. Menghubungkan generasi muda dengan akar budaya melalui sejarah transformasi Sicapit, pementasan partisipatif, dan bengkel seni kerajinan lokal.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e1306c]/20 flex items-center justify-center text-[#e1306c] text-sm">📖</div>
                <span className="text-white/80 font-medium">Sejarah &quot;Sisi Cai Cidepit&quot;</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e1306c]/20 flex items-center justify-center text-[#e1306c] text-sm">🎋</div>
                <span className="text-white/80 font-medium">Kreasi Anyaman & Budaya Lokal</span>
              </div>
            </div>

            <Link href="/education" className="mt-auto block w-full text-center py-4 bg-[#e1306c]/10 hover:bg-[#e1306c] text-[#e1306c] hover:text-white rounded-xl font-bold border border-[#e1306c]/30 transition-all duration-300">
              Pelajari Edukasi
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
