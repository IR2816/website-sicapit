# 📦 Project Structure Guide

## Root Directory (Clean & Organized)
```
website-sicapit/
├── 📄 package.json              ← Dependencies & scripts
├── 📄 tsconfig.json             ← TypeScript config
├── 📄 next.config.ts            ← Next.js configuration
├── 📄 eslint.config.mjs          ← Linting rules
├── 📄 postcss.config.mjs         ← PostCSS setup
├── 📄 components.json            ← shadcn/ui config
├── 📄 CLAUDE.md                  ← ⭐ BACA INI: Agent instructions & project rules
├── 📄 CODEBASE.md                ← Architecture documentation
├── 📄 DESIGN.md                  ← Design system & styling guide
├── 📄 BACKLOG.md                 ← Task backlog
├── 📄 README.md                  ← Project overview
├── 📁 src/                       ← Source code
├── 📁 public/                    ← Static assets
├── 📁 prisma/                    ← Database schema
├── 📁 docs/                      ← 📖 Extended documentation
├── 📁 scripts/                   ← 🔧 Utility & fix scripts
└── 📁 assets/                    ← Development assets
```

## 📖 docs/ - Extended Documentation
```
docs/
├── AGENTS.md                     ← Multi-agent setup guide
├── BONEYARD_SETUP.md            ← Old project setup (archived)
├── CLAUDE.md                     ← Copy of CLAUDE.md for reference
├── CLEANUP_SUMMARY.md            ← This project cleanup record
├── PERFORMANCE_CHECKLIST.md      ← Performance optimization checklist
├── PERFORMANCE_OPTIMIZATION.md   ← Optimization details & metrics
├── SECURITY.md                   ← Security considerations
└── boneyard.config.json          ← Old config (archived)
```

## 🔧 scripts/ - Utility Scripts
```
scripts/
├── README.md                     ← Script documentation
├── 📁 data/                      ← Data insertion scripts
│   ├── insert-reviews.js
│   ├── insert-reviews2.js
│   ├── insert-reviews3.js
│   └── insert-reviews4.js
├── 📁 fixes/                     ← Bug fix scripts (Deprecated - for reference)
│   ├── fix-dark-emerald.js
│   ├── fix-dark-mode.js
│   ├── fix-design.js
│   ├── fix-hydration.js
│   ├── fix-star*.js
│   ├── fix-typography.js
│   ├── replace-hero*.js
│   └── rewrite-agrowisata*.js
└── 📁 utilities/                 ← Active utility scripts
    ├── check-vars.js             ← Check CSS variables
    ├── create-templates.js       ← Template generator
    ├── download-images.js        ← Batch image downloader
    ├── finalize-optimizations.js ← Finalize optimizations
    ├── imgFix.js                 ← Image fixing utility
    ├── MathFix.js                ← Math notation fixer
    ├── migrate.js                ← Migration scripts
    ├── optimize-*.js             ← Performance optimization
    └── rename-eduwisata.js       ← Batch rename utility
```

## 📁 src/ - Application Source
```
src/
├── 📁 app/                       ← Next.js App Router
│   ├── page.tsx                  ← Home page
│   ├── layout.tsx                ← Root layout
│   ├── globals.css               ← Global styles & CSS variables
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── 📁 sections/              ← Reusable page sections
│   ├── 📁 edu-wisata/            ← Education tourism routes
│   ├── 📁 rafting/               ← Rafting service routes
│   ├── 📁 privacy-policy/
│   └── 📁 terms-of-service/
├── 📁 components/                ← React components
│   ├── Footer.tsx
│   ├── Providers.tsx
│   ├── ThemeToggle.tsx
│   ├── 📁 home/                  ← Home page components
│   ├── 📁 ui/                    ← Shadcn UI primitives
│   └── 📁 layout/                ← Layout components
├── 📁 hooks/                     ← Custom React hooks
│   ├── use-auto-theme.ts
│   ├── use-mobile.ts
│   └── use-toast.ts
├── 📁 lib/                       ← Utilities & helpers
│   ├── utils.ts
│   ├── db.ts
│   ├── schema.ts
│   └── 📁 data/                  ← Static data
└── 📁 generated/                 ← Auto-generated types
    └── prisma/
```

## ✨ Key Guidelines

### When Adding New Scripts
- **Bug fixes** → `scripts/fixes/` (but mark as deprecated if not actively used)
- **Data/utilities** → `scripts/utilities/`
- **Data insertion** → `scripts/data/`

### When Adding Documentation
- **API/architecture** → docs/ (reference docs)
- **Setup/getting started** → Root level (README.md, CLAUDE.md, etc)
- **Guides** → docs/

### Root Level Rule
Only keep files here if they're referenced frequently:
- ✅ CLAUDE.md - Referenced every dev session
- ✅ DESIGN.md - Design decisions
- ✅ CODEBASE.md - Architecture reference
- ✅ BACKLOG.md - Task tracking
- ❌ Loose .js files - Move to scripts/
- ❌ Performance docs - Move to docs/

---

**Last reorganized:** 2026-05-25  
**Build status:** ✅ Passing (3.2s)
