const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');
const lines = content.split('\n');
lines[1046] = '                      <div className={\w-12 h-12 rounded-full flex items-center justify-center \ shadow-inner\}>';
fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', lines.join('\n'));
