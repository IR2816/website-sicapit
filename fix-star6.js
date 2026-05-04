const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');
const lines = content.split('\n');
lines[1032] = '                            className={\w-4 h-4 \\}';
fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', lines.join('\n'));
