const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');

// 1. Remove Navbar usage
content = content.replace(/<Navbar \/>/g, '<SiteNav brand="Sicapit" />');

// 2. Remove Footer usage
content = content.replace(/<Footer \/>/g, '');

// 3. Add SiteNav import
if (!content.includes('import { SiteNav }')) {
  content = content.replace(/import \{.*?\} from 'lucide-react'/g, match => match + "\nimport { SiteNav } from '../sections/site-nav'");
}

// 4. Colors replacement (Light to Dark)
// Backgrounds
content = content.replace(/bg-white\/[0-9]+/g, match => match); // keep semi-transparent valid
content = content.replace(/bg-white(?!\/)/g, 'bg-surface');
content = content.replace(/bg-gray-50/g, 'bg-surface-strong');
content = content.replace(/bg-gray-100/g, 'bg-surface/50');
content = content.replace(/bg-gray-200/g, 'bg-surface-strong');

// Emerald to Brand
content = content.replace(/bg-emerald-600/g, 'bg-brand text-white');
content = content.replace(/bg-emerald-700/g, 'bg-brand/80 text-white');
content = content.replace(/bg-emerald-50/g, 'bg-brand/10');
content = content.replace(/bg-emerald-500/g, 'bg-brand');
content = content.replace(/text-emerald-[6789]00/g, 'text-brand');
content = content.replace(/text-emerald-500/g, 'text-brand');

// Text Colors
content = content.replace(/text-gray-900/g, 'text-white');
content = content.replace(/text-gray-800/g, 'text-slate-100');
content = content.replace(/text-gray-700/g, 'text-slate-200');
content = content.replace(/text-gray-600/g, 'text-slate-300');
content = content.replace(/text-gray-500/g, 'text-slate-400');
content = content.replace(/text-gray-400/g, 'text-slate-400');

// Borders
content = content.replace(/border-gray-100/g, 'border-white/5');
content = content.replace(/border-gray-200/g, 'border-white/10');
content = content.replace(/border-gray-300/g, 'border-white/10');
content = content.replace(/border-emerald-[2345]00/g, 'border-brand/50');

// Avoid breaking card and component imports - the standard Shadcn UI components.
// Ensure classes align nicely.

fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
console.log('Script executed');
