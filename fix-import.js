const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');

// Insert SiteNav export
if (!content.includes('import { SiteNav }')) {
  // Find "use client" and insert after it
  content = content.replace(/'use client'\r?\n/, "'use client'\nimport { SiteNav } from '../sections/site-nav'\n");
}

fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
console.log('Script executed');
