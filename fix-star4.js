const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');
const searchStr = 'className={w-4 h-4 \\\\}';
content = content.replace('className={w-4 h-4 \\}', 'className={\w-4 h-4 \\}');
fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
