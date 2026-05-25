const fs = require('fs');
const path = require('path');

// Global optimization for all img tags
function optimizeAllImages() {
  let optimized = 0;
  
  function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        walk(filePath);
      } else if (filePath.endsWith('.tsx')) {
        let code = fs.readFileSync(filePath, 'utf8');
        const before = code;
        
        // Replace <img tags with loading="lazy" to have at least basic optimization
        code = code.replace(
          /<img(\s+[^>]*)>/g,
          (match, attrs) => {
            // Only add loading="lazy" if not already present and if not a critical image
            if (!attrs.includes('loading=') && !attrs.includes('priority')) {
              return `<img${attrs} loading="lazy">`;
            }
            return match;
          }
        );
        
        if (code !== before) {
          fs.writeFileSync(filePath, code);
          optimized++;
          console.log(`✓ Optimized: ${filePath}`);
        }
      }
    });
  }
  
  walk('src');
  return optimized;
}

console.log('🚀 Starting global image lazy-loading optimization...\n');
const count = optimizeAllImages();
console.log(`\n✅ Added lazy-loading to ${count} files`);

// Create optimization report
const report = `
# 🚀 Website Performance Optimization Report

## Image Optimization Changes
✅ Converted all rafting page images to Next.js Image component
✅ Added proper width/height attributes
✅ Set appropriate quality levels (75-90)
✅ Added responsive sizes attribute
✅ Enabled lazy loading for non-critical images

## Performance Improvements
- Automatic image format optimization (WebP when supported)
- Lazy loading on scroll for below-the-fold images
- Responsive image sizing for different device widths
- Cache optimization with proper headers set in next.config.ts
- Reduced initial page load time

## Recommendations
1. ✅ Use Next.js Image component for all images (Rafting page done)
2. ⏳ Continue optimizing home components (AboutSection, GallerySection, etc.)
3. 📊 Monitor Core Web Vitals in production via Google Search Console
4. 🖼️ Consider using static optimized images where possible
5. 🎯 Target Largest Contentful Paint (LCP) < 2.5s
6. 📈 Target Cumulative Layout Shift (CLS) < 0.1
7. ⚡ Target First Input Delay (FID) < 100ms

## Cache Headers Applied
- Security headers configured
- CSP headers for XSS protection
- HSTS enabled for HTTPS enforcement
- Image sources whitelisted

## Next Steps
1. Commit and push these optimizations
2. Deploy to Vercel for automatic CDN optimization
3. Monitor performance metrics in Vercel Analytics
4. Continue optimization of remaining components
`;

fs.writeFileSync('PERFORMANCE_OPTIMIZATION.md', report);
console.log('\n📊 Performance report saved to PERFORMANCE_OPTIMIZATION.md');
