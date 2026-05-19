const fs = require('fs');
let c = fs.readFileSync('src/app/rafting/page.tsx', 'utf-8');
c = c.replace(/\bbg-white(?!\/)/g, 'bg-surface dark:bg-[#111111]');
c = c.replace(/\bbg-gray-50(?!\/)/g, 'bg-surface-strong/50 dark:bg-zinc-900');
c = c.replace(/\btext-gray-900(?!\/)/g, 'text-foreground dark:text-white');
c = c.replace(/\btext-gray-[456]00(?!\/)/g, 'text-muted-foreground dark:text-slate-300');
c = c.replace(/\bborder-gray-200(?!\/)/g, 'border-line dark:border-white/10');
fs.writeFileSync('src/app/rafting/page.tsx', c);

