import { SiteNav } from "@/app/sections/site-nav";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function KulinerTradisiPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white pt-32 pb-12">
      <SiteNav brand="Sicapit" />
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link href="/agrowisata" className="inline-flex items-center text-brand hover:text-green-500 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Agrowisata
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Kuliner Tradisi</h1>
        <p className="text-xl text-slate-300 mb-12">
          Halaman ini masih dalam tahap persiapan (Template). Detail informasi, rundown acara, dan panduan lengkap akan segera ditambahkan di sini.
        </p>

        <div className="bg-[#161b22] border border-white/10 rounded-[2rem] p-12 h-80 flex flex-col items-center justify-center shadow-xl">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse border border-white/10">
            <span className="text-2xl">🚧</span>
          </div>
          <p className="text-slate-400 text-lg text-center font-medium">Segera Hadir</p>
          <p className="text-slate-500 text-sm text-center mt-2">Struktur komponen akan ditambahkan kemudian.</p>
        </div>
      </div>
    </div>
  );
}
