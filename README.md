# 🏘️ Website Sicapit - Agro Wisata

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-7.7-lightblue?logo=prisma)](https://www.prisma.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

Website resmi Sicapit - destinasi wisata pertanian dan agro-tourism yang menawarkan pengalaman unik di tengah keindahan alam pedesaan.

---

## 🎯 Fitur Utama

- 🌾 **Agro-Wisata** - Jelajahi berbagai aktivitas pertanian dan wisata alam
- 🏠 **Homestay** - Menginap di rumah asri dengan nuansa tradisional
- 🎨 **Workshop Batik** - Pembelajaran seni batik langsung dari para ahli
- 🍜 **Kuliner Tradisional** - Nikmati cita rasa autentik masakan lokal
- 🎋 **Kerajinan Tangan** - Melihat dan belajar pembuatan kerajinan tradisional
- 🏞️ **Wisata Alam** - Menjelajahi keindahan alam sekitar
- 🚣 **Rafting** - Petualangan rafting di sungai yang menantang
- ⭐ **Live Gallery** - Galeri foto dan video pengalaman pengunjung
- 💬 **Reviews** - Testimoni dan ulasan dari pengunjung

---

## 🛠️ Tech Stack

| Teknologi | Versi | Deskripsi |
|-----------|-------|----------|
| **Next.js** | 16.2 | Framework React modern |
| **TypeScript** | 5.0+ | Type-safe JavaScript |
| **Tailwind CSS** | 3.4+ | Styling utility-first |
| **Prisma** | 7.7 | ORM untuk database |
| **Radix UI** | Latest | Komponen UI yang accessible |
| **Framer Motion** | 12.38 | Animasi smooth |
| **Embla Carousel** | 8.6 | Carousel component |

---

## 📦 Struktur Project

```
website-sicapit/
├── 📁 src/
│   ├── app/                    # Next.js app directory
│   │   ├── agrowisata/         # Halaman agro-wisata
│   │   ├── rafting/            # Halaman rafting
│   │   ├── privacy-policy/     # Kebijakan privasi
│   │   └── terms-of-service/   # Syarat & ketentuan
│   ├── components/             # React components
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utility functions
├── 📁 prisma/
│   └── schema.prisma           # Database schema
├── 📁 scripts/
│   ├── fixes/                  # Script untuk perbaikan
│   ├── data/                   # Script untuk data insertion
│   └── utilities/              # Script utility
├── 📁 public/                  # Static assets
├── 📁 docs/                    # Dokumentasi
└── 📋 Config files             # tsconfig, next.config, etc
```

---

## 🚀 Memulai

### Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** atau **yarn** atau **pnpm**

### Installation

```bash
# Clone repository
git clone https://github.com/IR2816/website-sicapit.git
cd website-sicapit

# Install dependencies
npm install
# atau
yarn install
# atau
pnpm install
```

### Setup Environment

Buat file `.env.local` di root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/sicapit"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 📸 Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="./public/assets/images/hero-kampung.png" width="300" alt="Hero Image">
        <br><small>Halaman Utama</small>
      </td>
      <td align="center">
        <img src="./public/assets/images/homestay.png" width="300" alt="Homestay">
        <br><small>Homestay</small>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./public/assets/images/kerajinan.png" width="300" alt="Kerajinan">
        <br><small>Kerajinan Tangan</small>
      </td>
      <td align="center">
        <img src="./public/assets/images/kuliner.png" width="300" alt="Kuliner">
        <br><small>Kuliner Tradisional</small>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./public/assets/images/batik-workshop.png" width="300" alt="Workshop Batik">
        <br><small>Workshop Batik</small>
      </td>
      <td align="center">
        <img src="./public/assets/images/agrowisata.png" width="300" alt="Agrowisata">
        <br><small>Agro-Wisata</small>
      </td>
    </tr>
  </table>
</div>

---

## 🔧 Available Commands

```bash
# Development
npm run dev          # Jalankan dev server

# Production
npm run build        # Build untuk production
npm start            # Jalankan production server

# Maintenance
npm run lint         # Check code quality dengan ESLint
```

---

## 📚 Dokumentasi Penting

- [📖 AGENTS.md](./docs/AGENTS.md) - Konfigurasi agents
- [🤖 CLAUDE.md](./docs/CLAUDE.md) - Instruksi AI Claude

---

## 🗂️ Scripts Directory

Folder `scripts/` berisi utility scripts untuk development:

- **`scripts/fixes/`** - Script untuk perbaikan dan transformasi
- **`scripts/data/`** - Script untuk insertsi data
- **`scripts/utilities/`** - Script utility umum

Lihat [scripts/README.md](./scripts/README.md) untuk detail lebih lanjut.

---

## 📝 Database

Project menggunakan **Prisma** sebagai ORM. Untuk setup database:

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Open Prisma Studio (GUI)
npx prisma studio
```

---

## 🌐 Deployment

### Deploy ke Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau langsung push ke GitHub dan connect di [Vercel Dashboard](https://vercel.com).

### Deploy Manual

```bash
npm run build
npm start
```

---

## 📋 .gitignore

Project sudah dilengkapi dengan `.gitignore` yang comprehensive untuk:
- Dependencies (`node_modules/`)
- Environment files (`.env`, `.env.local`)
- Build outputs (`/.next/`, `/out/`)
- Logs dan temporary files
- IDE configurations

---

## 🤝 Contributing

Kontribusi selalu diterima! Untuk kontribusi:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

## 📄 License

Project ini bersifat private. Hubungi maintainer untuk informasi lebih lanjut.

---

## 👨‍💼 Maintainer

- **GitHub**: [@IR2816](https://github.com/IR2816)

---

## 📞 Hubungi Kami

Untuk pertanyaan dan informasi lebih lanjut tentang **Website Sicapit**, silakan hubungi melalui website atau social media kami.

---

<div align="center">
  <p>Made with ❤️ for Sicapit Community</p>
  <p>Last Updated: May 2026</p>
</div>
