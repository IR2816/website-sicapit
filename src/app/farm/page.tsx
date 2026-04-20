import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "../sections/site-nav";

export default function FarmPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-green-500 selection:text-white">
      <SiteNav brand="Sicapit" />

      {/* Hero Section */}
      <header className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/2.jpg"
            alt="Suasana Farm Sicapit"
            fill
            sizes="100vw"
            className="object-cover scale-105"
            priority
          />
          {/* Gradient transitions from dark (for navbar) to light (to match the content below) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#f8fafc] z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center max-w-3xl pt-12">
          <span className="inline-block py-2 px-6 rounded-full bg-green-100/90 border border-green-300 text-green-700 text-xs md:text-sm font-black tracking-widest uppercase mb-6 shadow-sm">
            Eko Edukasi
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.7)]">
            Kembali ke <br/><span className="text-green-700 drop-shadow-sm">Pelukan Alam.</span>
          </h1>
          <p className="text-lg text-slate-800 font-bold leading-relaxed mb-10 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] bg-white/30 backdrop-blur-sm py-4 px-6 rounded-2xl border border-white/50 shadow-sm mx-auto">
            Tinggalkan *gadget* sejenak. Biarkan tangan merasakan sejuknya tanah, telinga mendengar riuhnya ternak, dan mata dimanjakan hamparan hijau.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="py-20 relative z-20">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/assets/images/2.jpg" alt="Aktivitas Farm" fill className="object-cover" />
            </div>
            
            {/* Text Checklist */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-slate-800">Menyapa & Merawat</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Taman ternak dan kebun kami dikonsep khusus agar ramah anak (Kids Friendly). Cocok untuk melatih empati sang buah hati terhadap satwa dan tanaman.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 font-bold">1</div>
                  <span className="text-slate-700 font-semibold">Beri Pakan Ikan Terapi di Kolam Jernih</span>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 font-bold">2</div>
                  <span className="text-slate-700 font-semibold">Menanam & Memanen Sayuran Organik</span>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 font-bold">3</div>
                  <span className="text-slate-700 font-semibold">Taman Domba & Kelinci yang Aman Dibelai</span>
                </li>
              </ul>

              <div className="mt-10">
                <Link href="/" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition">
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


