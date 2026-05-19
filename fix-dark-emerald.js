const fs = require('fs');
function fix(file) {
  let c = fs.readFileSync(file, 'utf-8');
  c = c.replace(/\bbg-emerald-100(?!\/)/g, 'bg-emerald-100 dark:bg-emerald-900/30');
  c = c.replace(/\bbg-emerald-50(?!\/)/g, 'bg-emerald-50 dark:bg-emerald-900/20');
  c = c.replace(/\btext-emerald-700(?!\/)/g, 'text-emerald-700 dark:text-emerald-400');
  c = c.replace(/\btext-emerald-800(?!\/)/g, 'text-emerald-800 dark:text-emerald-300');
  c = c.replace(/\btext-emerald-900(?!\/)/g, 'text-emerald-900 dark:text-emerald-200');
  fs.writeFileSync(file, c);
}
fix('src/app/rafting/page.tsx');
fix('src/app/edu-wisata/page.tsx');

