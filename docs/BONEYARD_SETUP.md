# Boneyard Skeleton Loading Setup

## Apa itu Boneyard?

Boneyard adalah framework skeleton loading yang otomatis capture layout dari UI real Anda. Tidak perlu manual membuat skeleton - cukup wrap component dengan `<Skeleton>` dan boneyard akan generate pixel-perfect skeletons.

## Setup yang sudah dilakukan:

✅ Package `boneyard-js` sudah di-install
✅ `boneyard.config.json` sudah di-konfigurasi
✅ `src/components/ui/skeleton.tsx` sudah di-enhance untuk support boneyard
✅ `.gitignore` sudah di-update untuk exclude `/src/bones`

## Cara menggunakan:

### 1. Wrap component dengan Skeleton + name prop:

```tsx
import { Skeleton } from '@/components/ui/skeleton'
import { ReviewsCarousel } from './reviews-carousel'

export function ReviewsSection({ isLoading, data }) {
  return (
    <Skeleton name="reviews-carousel" loading={isLoading}>
      <ReviewsCarousel reviews={data} />
    </Skeleton>
  )
}
```

### 2. Jalankan CLI untuk generate bones:

```bash
# Terminal 1 - Dev server harus running
npm run dev

# Terminal 2 - Generate bones (di saat yang sama)
npx boneyard-js build --watch
```

### 3. Boneyard akan:
- ✨ Capture layout dari setiap `<Skeleton name="...">` component
- 📐 Generate pada breakpoint: 375px, 768px, 1280px
- 🎬 Auto-generate shimmer animation
- 📁 Output ke `src/bones/` sebagai `.bones.json`

## Contoh use case di project:

### ReviewsCarousel yang loading:
```tsx
import { Skeleton } from '@/components/ui/skeleton'

export function ReviewsCarouselWrapper({ isLoading, reviews }) {
  return (
    <Skeleton 
      name="reviews-carousel" 
      loading={isLoading}
    >
      <ReviewsCarousel reviews={reviews} />
    </Skeleton>
  )
}
```

### Hero Slider yang loading:
```tsx
<Skeleton 
  name="hero-slider" 
  loading={isLoadingHero}
>
  <HeroSlider slides={heroData} />
</Skeleton>
```

## Props yang bisa di-customize:

```tsx
<Skeleton
  name="component-name"           // Required: unique name untuk setiap skeleton
  loading={isLoading}             // Show skeleton atau real content
  color="#e5e5e5"                // Bone fill color (default: dari config)
  darkColor="rgba(255,255,255)" // Dark mode color
  animate="shimmer"              // Animation: pulse, shimmer, solid
  stagger={true}                 // Stagger delay antar bones
  transition={300}               // Fade out duration
  boneClass="my-bone"            // CSS class untuk each bone
>
  {/* Your actual component */}
</Skeleton>
```

## Tips:

1. **Pertama kali generate:** Bisa ambil waktu 10-20 detik per breakpoint
2. **Watch mode:** Dengan `--watch`, bones auto-regenerate saat component berubah (via HMR)
3. **Troubleshoot:** Pastikan dev server running di `http://localhost:3000`
4. **Custom breakpoints:** Edit `boneyard.config.json` untuk ubah viewport sizes

## File config:

- **boneyard.config.json** - Konfigurasi global untuk CLI
- **src/bones/** - Generated bones (auto-created, jangan di-edit manual)
- **src/components/ui/skeleton.tsx** - Skeleton component yang sudah enhanced

Sekarang siap digunakan! 🎉
