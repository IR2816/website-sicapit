const fs = require('fs');
const path = require('path');

const activities = [
  { id: 'pertanian', title: 'Agrowisata (Pertanian)' },
  { id: 'workshop-batik', title: 'Workshop Batik' },
  { id: 'kuliner-tradisi', title: 'Kuliner Tradisi' },
  { id: 'homestay', title: 'Homestay' },
  { id: 'kerajinan-tangan', title: 'Kerajinan Tangan' },
  { id: 'wisata-alam', title: 'Wisata Alam' },
];

const basePath = path.join(process.cwd(), 'src', 'app', 'agrowisata');

activities.forEach(act => {
  const dirPath = path.join(basePath, act.id);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `import { SiteNav } from "@/app/sections/site-nav";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ${act.id.replace(/-./g, x => x[1].toUpperCase()).replace(/^./, x => x.toUpperCase())}Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white pt-32 pb-12">
      <SiteNav brand="Sicapit" />
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link href="/agrowisata" className="inline-flex items-center text-brand hover:text-green-500 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Agrowisata
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">${act.title}</h1>
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
`;
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

// Update page.tsx buttons to use Links
let pageContent = fs.readFileSync(path.join(basePath, 'page.tsx'), 'utf-8');

// Replace the <Button> Selengkapnya with Next.js <Link>
pageContent = pageContent.replace(
  /<Button variant="ghost" className="w-fit text-brand hover:text-brand hover:bg-brand\/10 px-4 py-2 font-bold p-0">[\s\S]*?<\/Button>/g, 
  `<Link href="#" className="inline-flex items-center w-fit text-brand hover:text-green-400 px-4 py-2 font-bold p-0 transition-colors">
                    Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>`
);

// Specifically map the temporary href="#" links to actual routes
const links = [
  '/agrowisata/pertanian', 
  '/agrowisata/workshop-batik', 
  '/agrowisata/kuliner-tradisi', 
  '/agrowisata/homestay', 
  '/agrowisata/kerajinan-tangan', 
  '/agrowisata/wisata-alam'
];
let linkIndex = 0;
pageContent = pageContent.replace(/href="#"/g, () => {
    if (linkIndex < links.length) {
        return `href="${links[linkIndex++]}"`;
    }
    return 'href="#"';
});

fs.writeFileSync(path.join(basePath, 'page.tsx'), pageContent);
console.log('Templates created and links updated successfully!');
