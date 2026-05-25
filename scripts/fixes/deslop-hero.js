const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Hero glowy badge to organic text
code = code.replace(/<div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white\/5 border border-white\/10 backdrop-blur-xl mb-10 shadow-\[0_4px_24px_rgba\(0,0,0,0.4\)\]">/,
  '<div className="inline-flex items-center justify-center gap-3 mb-10">');
code = code.replace(/<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"><\/span>\s*<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"><\/span>/,
  '<span className="h-[1px] w-8 bg-brand"></span>');
code = code.replace(/<span className="text-foreground\/80 dark:text-white\/90 text-xs md:text-sm font-bold tracking-\[0.15em\] uppercase">/,
  '<span className="font-mono text-brand text-xs md:text-sm font-medium tracking-[0.2em] uppercase">');

// Clean up Hero heading drop shadows and change structure
code = code.replace(/className="font-heading text-4xl md:text-6xl lg:text-\[5.5rem\] font-extrabold text-foreground dark:text-white leading-\[1.1\] md:leading-\[1.15\] mb-8 max-w-5xl mx-auto tracking-tight drop-shadow-\[[\s\S]*?\] dark:drop-shadow-2xl"/,
  'className="font-heading italic text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 max-w-4xl mx-auto tracking-normal"');
code = code.replace(/drop-shadow-\[[\s\S]*?\]/g, ''); // all shadows
code = code.replace(/dark:drop-shadow-none/g, '');
code = code.replace(/dark:drop-shadow-\[[\s\S]*?\]/g, '');

// Clean Hero buttons
code = code.replace(/shadow-\[0_8px_32px_rgba\(220,38,38,0.4\)\] hover:shadow-\[0_8px_40px_rgba\(220,38,38,0.6\)\]/g, '');
code = code.replace(/bg-surface-strong\/60 dark:bg-\[#111111\]\/60 hover:bg-surface-strong\/80 dark:hover:bg-\[#222222\]\/80 text-foreground dark:text-white backdrop-blur-xl border border-line dark:border-white\/20 hover:border-brand\/50/g,
  'bg-transparent border border-line hover:border-brand text-foreground');

// Hero overlay using hardcoded colors
code = code.replace(/from-\[#050505\]\/40 via-transparent to-\[#050505\]/g, 'from-transparent via-transparent to-surface');

// Add wave divider before Kisah
code = code.replace(/<section id="kisah" className="py-24 bg-surface-strong\/50 border-t border-b border-line">/,
  '<div className="w-full overflow-hidden leading-none rotate-180 text-surface rotate-180 -mb-1 relative z-30">\n          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[60px] fill-current">\n            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"></path>\n          </svg>\n        </div>\n        <section id="kisah" className="py-24 bg-surface-strong border-b border-line">');

// Features Card - remove glassmorphism
code = code.replace(/bg-gradient-to-b from-surface to-surface-strong border border-black\/5 dark:border-white\/5 hover:border-brand\/40 transition-all duration-500 shadow-xl overflow-hidden relative/g,
  'bg-surface border border-line hover:border-brand/40 transition-all duration-300 relative rounded-2xl');

// Edu Wisata & Rafting layout
code = code.replace(/border border-line dark:border-white\/5 hover:border-brand\/40 transition-all duration-500 shadow-shadow bg-surface/g,
  'border border-line hover:border-brand/40 transition-all duration-500 bg-surface rounded-none md:rounded-[32px]');

fs.writeFileSync('src/app/page.tsx', code);
console.log('Typography fixes applied!');