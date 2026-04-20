import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="pt-20 pb-10 border-t border-line bg-surface-strong relative z-20 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Kolom 1: Brand & Sosial Media */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-brand/50 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                <Image src="/assets/images/Icon.jpg" alt="Logo Sicapit" fill sizes="64px" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-brand tracking-[0.2em] drop-shadow-md">Kampung Wisata</span>
                <span className="font-heading font-black text-2xl md:text-3xl text-white tracking-tighter drop-shadow-md">Sicapit</span>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-8 max-w-sm">Teman Wisata Terbaikmu. Kampung tematik dengan keindahan alam, wisata air menantang, dan kehangatan warga lokal di pinggir Sungai Cisadane.</p>
            
            <div className="flex items-center gap-3">
              <a href="https://youtube.com/@hercemherman4230" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-slate-300 hover:text-[#FF0000] border border-line hover:border-[#FF0000]/50 transition-all hover:scale-110 shadow-sm" aria-label="YouTube">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>
              </a>
              <a href="https://instagram.com/kampung_sicapit" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-slate-300 hover:text-[#E1306C] border border-line hover:border-[#E1306C]/50 transition-all hover:scale-110 shadow-sm" aria-label="Instagram">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://tiktok.com/@kampung_sicapit" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-slate-300 hover:text-[#00f2fe] border border-line hover:border-[#00f2fe]/50 transition-all hover:scale-110 shadow-sm" aria-label="TikTok">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Kontak Pengurus */}
          <div className="flex flex-col">
            <h3 className="font-heading font-bold text-xl mb-6">Hubungi Kami</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-wide">Hermansyah</p>
                  <p className="text-slate-400 text-sm">0813-1825-1218</p>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-wide">Rany Maulida</p>
                  <p className="text-slate-400 text-sm">0813-1700-1223</p>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-wide">Dedy</p>
                  <p className="text-slate-400 text-sm">0857-1703-3126</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Alamat */}
          <div className="flex flex-col">
            <h3 className="font-heading font-bold text-xl mb-6">Alamat Kami</h3>
            <div className="flex items-start gap-4 p-6 bg-surface/50 rounded-2xl border border-line hover:border-white/20 transition-colors shadow-sm backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] shrink-0 mt-1 border border-[#EA4335]/20">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <p className="text-slate-300 text-sm leading-loose">
                <strong className="text-white block mb-2 text-base font-bold tracking-wide">Kampung Wisata Sicapit</strong>
                Jalan Raya Semplak Gang Flamboyan 1,<br/>
                RT 03/06 Kel. Semplak,<br/>
                Kec. Bogor Barat
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">&copy; {new Date().getFullYear()} Kampung Wisata Sicapit. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}