const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');
const lines = content.split('\n');
const newLines = lines.map(line => {
    if (line.includes('className={w-4 h-4 \\}')) {
        return line.replace('className={w-4 h-4 \\}', 'className={\w-4 h-4 \\}');
    }
    return line;
});
fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', newLines.join('\n'));
