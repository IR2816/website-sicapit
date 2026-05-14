import { SiteNav } from "@/app/sections/site-nav";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WorkshopBatikPage() {
  return (
    <div className="min-h-screen bg-surface dark:bg-[#0d1117] text-foreground dark:text-white pt-32 pb-12">
      <SiteNav brand="Sicapit" />
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link href="/agrowisata" className="inline-flex items-center text-brand hover:text-brand/80 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Agrowisata
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 drop-shadow-md">Workshop Batik</h1>
        <p className="text-xl text-muted-foreground dark:text-slate-300 mb-12">
          Halaman ini masih dalam tahap persiapan (Template). Detail informasi, rundown acara, dan panduan lengkap akan segera ditambahkan di sini.
        </p>

        <div className="bg-surface-strong dark:bg-[#161b22] border border-line dark:border-white/10 rounded-[2rem] p-12 h-80 flex flex-col items-center justify-center shadow-xl">
          <div className="w-16 h-16 bg-white/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse border border-line dark:border-white/10">
            <span className="text-2xl">🚧</span>
          </div>
          <p className="text-muted-foreground dark:text-slate-400 text-lg text-center font-medium">Segera Hadir</p>
          <p className="text-muted-foreground/60 dark:text-slate-500 text-sm text-center mt-2">Struktur komponen akan ditambahkan kemudian.</p>
        </div>
      </div>
    </div>
  );
}
