const fs = require('fs');
let code = fs.readFileSync('E:/Project/website-sicapit/src/app/rafting/page.tsx', 'utf8');

// Replace the About section img with Image - more flexible pattern
const aboutImgRegex = /<img\s+src="\/assets\/images\/rafting\/4\.jpeg"\s+alt="Keindahan Sungai Rafting"\s+className="w-full h-\[400px\] lg:h-\[500px\] object-cover"\s+\/>/;
if (aboutImgRegex.test(code)) {
  code = code.replace(
    aboutImgRegex,
    `<Image
                src="/assets/images/rafting/4.jpeg"
                alt="Keindahan Sungai Rafting"
                width={600}
                height={500}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />`
  );
  console.log('✓ Fixed About section image');
}

// Replace package images
code = code.replace(
  /<img\s+src=\{pkg\.image\}\s+alt=\{`\$\{pkg\.name\} Paket Rafting`\}\s+className="absolute inset-0 w-full h-full object-cover"\s+\/>/g,
  `<Image
                    src={pkg.image}
                    alt={\`\${pkg.name} Paket Rafting\`}
                    width={400}
                    height={300}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="absolute inset-0 w-full h-full object-cover"
                  />`
);
console.log('✓ Fixed package images');

// Fix slideshow image - simpler approach
code = code.replace(
  /motion\.img/g,
  'motion.div'
);
code = code.replace(
  /src=\{src\}\s+alt={`Slideshow \$\{i \+ 1\}`}\s+className="absolute inset-0 w-full h-full object-contain"\s+onClick=\{\(\) => setSelectedImg\(src\)\}\s+\/>/g,
  `>
                    <Image
                      src={src}
                      alt={\`Slideshow \${i + 1}\`}
                      width={800}
                      height={600}
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>`
);
code = code.replace(
  /onClick=\{\(\) => setSelectedImg\(src\)\}\s+\>/g,
  `onClick={() => setSelectedImg(src)}\n                  >`
);
console.log('✓ Fixed slideshow image');

// Replace bento grid images
code = code.replace(
  /<img\s+src=\{item\.src\}\s+alt=\{item\.title\}\s+className=\{`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out \$\{\s+hoveredIdx === i \? 'scale-105 brightness-90' : 'scale-100 brightness-100'\s+\}`\}\s+\/>/g,
  `<Image
                src={item.src}
                alt={item.title}
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className={\`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out \${
                  hoveredIdx === i ? 'scale-105 brightness-90' : 'scale-100 brightness-100'
                }\`}
              />`
);
console.log('✓ Fixed bento grid images');

// Replace preview image
code = code.replace(
  /<img src=\{selectedImg\} alt="Preview" className="w-full h-auto max-h-\[80vh\] object-contain rounded-lg" \/>/g,
  `<Image src={selectedImg} alt="Preview" width={1200} height={800} quality={90} sizes="(max-width: 768px) 100vw, 1200px" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />`
);
console.log('✓ Fixed preview image');

fs.writeFileSync('E:/Project/website-sicapit/src/app/rafting/page.tsx', code);
console.log('\n✅ All images optimized!');
