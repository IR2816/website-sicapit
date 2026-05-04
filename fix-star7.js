const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');
const searchStr = '<div className={\w-12 h-12 rounded-xl \\nflex items-center justify-center shrink-0 group-hover:scale-110\ntransition-transform\}>';
console.log("Includes:", content.includes(searchStr));

const lines = content.split('\n');
console.log(lines[1175]);
