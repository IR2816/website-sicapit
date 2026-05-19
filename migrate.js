const fs = require('fs');
const path = require('path');

const srcDir = 'E:/Project/website-sicapit/src';
const raftingDir = path.join(srcDir, 'app/rafting');

// 1. Move components/home to src/components/home
const oldHomeComps = path.join(raftingDir, 'components/home');
const newHomeComps = path.join(srcDir, 'components/home');
if (!fs.existsSync(path.dirname(newHomeComps))) {
    fs.mkdirSync(path.dirname(newHomeComps), { recursive: true });
}
if (fs.existsSync(oldHomeComps) && !fs.existsSync(newHomeComps)) {
    fs.renameSync(oldHomeComps, newHomeComps);
    console.log('Moved components/home to src/components/home');
}

// 2. Delete old page.tsx
const oldPage = path.join(raftingDir, 'page.tsx');
if (fs.existsSync(oldPage)) {
    fs.unlinkSync(oldPage);
    console.log('Deleted old page.tsx');
}

// 3. Move app/page.tsx to page.tsx
const newPage = path.join(raftingDir, 'app/page.tsx');
if (fs.existsSync(newPage)) {
    fs.renameSync(newPage, path.join(raftingDir, 'page.tsx'));
    console.log('Moved app/page.tsx to page.tsx');
}

// 4. Update image/video paths in src/components/home/*.tsx
const files = fs.readdirSync(newHomeComps).filter(f => f.endsWith('.tsx'));
for (const file of files) {
    const filePath = path.join(newHomeComps, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if we need to replace Paths
    let changed = false;
    if (content.includes('/images/')) {
        content = content.replace(/\/images\//g, '/rafting_assets/images/');
        changed = true;
    }
    if (content.includes('/videos/')) {
        content = content.replace(/\/videos\//g, '/rafting_assets/videos/');
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated paths in ' + file);
    }
}
