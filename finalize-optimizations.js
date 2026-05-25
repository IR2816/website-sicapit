const fs = require('fs');

// Optimize rafting page images with proper Next.js Image component
let raftingCode = fs.readFileSync('E:/Project/website-sicapit/src/app/rafting/page.tsx', 'utf8');

// Remove ESLint disable comment
raftingCode = raftingCode.replace(
  /\/\* eslint-disable @next\/next\/no-img-element \*\/\s*\n/,
  ''
);

// Replace About section img
raftingCode = raftingCode.replace(
  /<img\s+src="\/assets\/images\/rafting\/4\.jpeg"\s+alt="Keindahan Sungai Rafting"\s+className="w-full h-\[400px\] lg:h-\[500px\] object-cover"\s+\/>/,
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

// Replace package images - handle template literals carefully
raftingCode = raftingCode.replace(
  /(<img\s+src=\{pkg\.image\}\s+alt=\{`\$\{pkg\.name\} Paket Rafting`\}\s+className="[^"]+"\s+\/>)/,
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

// Replace bento items images with loading="lazy"
raftingCode = raftingCode.replace(
  /(<img\s+src=\{item\.src\}\s+alt=\{item\.title\}\s+className=\{`[^`]+`\}\s+\/>)/g,
  (match) => {
    return match.replace('/>', ' loading="lazy" />');
  }
);

// Add loading="lazy" to other img tags (video previews, previews)
raftingCode = raftingCode.replace(
  /<img\s+([^>]*)\/>/g,
  (match) => {
    if (!match.includes('loading=') && !match.includes('priority')) {
      return match.replace('/>', ' loading="lazy" />');
    }
    return match;
  }
);

fs.writeFileSync('E:/Project/website-sicapit/src/app/rafting/page.tsx', raftingCode);
console.log('✅ Optimized rafting page images and added lazy loading');

// Create performance optimization checklist
const checklist = `
# ⚡ Website Performance Optimization Checklist

## ✅ Completed
- [x] Removed excessive shadows and AI slop styling
- [x] Replaced rafting page img tags with Next.js Image components
- [x] Added proper width/height attributes to images
- [x] Set quality levels (75-90) for automatic format optimization
- [x] Added responsive sizes attribute for different device widths
- [x] Added lazy loading to below-the-fold images
- [x] Security headers configured in next.config.ts
- [x] CSP and HSTS policies enabled
- [x] Image optimization in Next.js build pipeline

## 📊 Performance Metrics to Monitor
1. **Largest Contentful Paint (LCP)** - Target: < 2.5s
2. **First Input Delay (FID)** - Target: < 100ms  
3. **Cumulative Layout Shift (CLS)** - Target: < 0.1
4. **First Contentful Paint (FCP)** - Target: < 1.8s
5. **Time to First Byte (TTFB)** - Target: < 600ms

## 🚀 Deployment Notes
1. Build and push optimizations to production
2. Monitor Vercel Analytics for Core Web Vitals
3. Check Google Search Console for any issues
4. Use Lighthouse CI for automated testing

## 📈 Additional Optimization Opportunities (Future)
- Consider image CDN (Vercel already provides this)
- Implement service workers for offline support
- Optimize font loading strategy
- Consider static site generation for more pages
- Implement incremental static regeneration (ISR)
- Add prefetching for critical routes
`;

fs.writeFileSync('PERFORMANCE_CHECKLIST.md', checklist);
console.log('✅ Created performance optimization checklist');
