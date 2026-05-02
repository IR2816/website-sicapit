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
      <div className="container mx-auto px-4 py-32 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-brand drop-shadow-lg">
          Agrowisata (Farm & Education)
        </h1>
        
        {/* Konten Farm / Pertanian */}
        <section className="mb-12 border border-white/10 p-8 rounded-3xl bg-surface">
          <h2 className="text-2xl font-bold mb-4 text-white">Bagian Pertanian (Farm)</h2>
          <p className="text-slate-300">Tempatkan komponen dan konten Farm di sini...</p>
          {/* Tambahkan komponen farm di bawah ini */}
          
        </section>

        {/* Konten Education / Edukasi */}
        <section className="border border-white/10 p-8 rounded-3xl bg-surface">
          <h2 className="text-2xl font-bold mb-4 text-white">Bagian Edukasi (Education)</h2>
          <p className="text-slate-300">Tempatkan komponen dan konten Education di sini...</p>
          {/* Tambahkan komponen education di bawah ini */}
          
        </section>
      </div>
    </main>
  );
}
