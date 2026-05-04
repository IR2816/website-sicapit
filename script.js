const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/src/app/page.tsx', 'utf-8');

// Replace videos
content = content.replace(/'\/videos\//g, "'/assets/videos/");
content = content.replace(/"\/videos\//g, '"/assets/videos/');

// Replace /images/assets/
content = content.replace(/'\/images\/assets\//g, "'/assets/images/rafting/");
content = content.replace(/"\/images\/assets\//g, '"/assets/images/rafting/');

// Replace /images/gallery-bento... with random images from rafting
const bentoImagesToReplace = {
  'gallery-bento1.png': '1.jpeg',
  'gallery-bento2.png': '2.jpeg',
  'gallery-bento3.png': '3.jpeg',
  'gallery-bento4.png': '4.jpeg',
  'gallery-bento5.png': '5.jpeg',
  'gallery-bento6.png': '6.jpeg',
  'gallery-bento7.png': '7.jpeg',
  'gallery-bento8.png': '8.jpeg',
};
for (const [bento, replace] of Object.entries(bentoImagesToReplace)) {
  content = content.replace(new RegExp('/images/' + bento, 'g'), '/assets/images/rafting/' + replace);
}

fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
console.log('Done!');
