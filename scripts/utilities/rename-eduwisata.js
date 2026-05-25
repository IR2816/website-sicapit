const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    if (content.includes('Agrowisata')) {
        content = content.replace(/Agrowisata/g, 'Edu Wisata');
        changed = true;
    }
    if (content.match(/agrowisata(?![A-Za-z0-png])/)) {
        content = content.replace(/agrowisata/g, 'edu-wisata');
        changed = true;
    }
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + filePath);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceInFile(fullPath);
        }
    }
}

traverseDir('E:/Project/website-sicapit/src');

// Rename folder
const oldDir = 'E:/Project/website-sicapit/src/app/agrowisata';
const newDir = 'E:/Project/website-sicapit/src/app/edu-wisata';
if (fs.existsSync(oldDir)) {
    fs.renameSync(oldDir, newDir);
    console.log('Renamed folder agrowisata to edu-wisata');
}
