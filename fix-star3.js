const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');
const searchStr = 'className={w-4 h-4 \\}';
console.log("Includes:", content.includes(searchStr));
const idx = content.indexOf('className={w-4');
console.log(content.substring(idx - 10, idx + 50));
content = content.replace(/className=\{w-4 h-4 \\\}/g, 'className={\w-4 h-4 \\}');
fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
