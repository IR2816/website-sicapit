const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');

content = content.replace(
  '{[...Array(6)].map((_, i) => (\\s*<motion.div\\s*key={i}\\s*className=\"absolute w-2 h-2 bg-brand/30 rounded-full\"\\s*initial={{ x: Math.random\\(\\) \\* 1440, y: 900 }}'.replace(/\\s+/g, '\\s+'),
  '{mounted && [...Array(6)].map((_, i) => (\\n            <motion.div\\n              key={i}\\n              className=\"absolute w-2 h-2 bg-brand/30 rounded-full\"\\n              initial={{ x: Math.random() * 1440, y: 900 }}' 
)

fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
