const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');
const searchStr = 'const TestimonialsSection';
console.log("Includes:", content.includes(searchStr));

const lines = content.split('\n');
const idx = lines.findIndex(line => line.includes('const TestimonialsSection'));
if(idx > -1) {
    console.log(lines.slice(idx, idx+15).join('\n'));
}

