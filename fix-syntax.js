const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix Edu Wisata function names
    if (content.match(/function Edu Wisata/)) {
        content = content.replace(/function Edu Wisata/g, 'function EduWisata');
        changed = true;
    }
    
    // Fix edu-wisata variable names
    if (content.match(/const edu-wisata/)) {
        content = content.replace(/const edu-wisata/g, 'const eduwisata');
        changed = true;
    }
    if (content.match(/edu-wisataItems/)) {
        content = content.replace(/edu-wisataItems/g, 'eduwisataItems');
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed ' + filePath);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            fixFile(fullPath);
        }
    }
}

traverseDir('E:/Project/website-sicapit/src');
