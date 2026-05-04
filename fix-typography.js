const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');

// Replace all h1, h2, h3, h4 inline font-bold to include font-heading
content = content.replace(/className="([^"]*)text-([2345]xl|lg|xl)([^"]*)"/g, (match, p1, p2, p3) => {
    // If it's a heading or looks like a large text, give it font-heading.
    // Actually, safer just to replace text-4xl/text-3xl font-bold with font-heading
    if (match.includes('font-heading')) return match;
    if (match.includes('font-bold') || match.includes('font-extrabold')) {
        return \className="\text-\\ font-heading"\;
    }
    return match;
});

// Since the regex might be tricky, let's just make it simple:
content = content.replace(/className="([^"]*font-bold[^"]*text-(2xl|3xl|4xl|5xl|6xl)[^"]*)"/g, 'className=" font-heading"');
content = content.replace(/className="([^"]*text-(2xl|3xl|4xl|5xl|6xl)[^"]*font-bold[^"]*)"/g, 'className=" font-heading"');

// And remove some unwanted bg-white
content = content.replace(/bg-white\s/g, 'bg-surface ');

fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
console.log('Script executed, added font-heading');
