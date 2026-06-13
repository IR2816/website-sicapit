/**
 * Data sub-halaman Edu Wisata Sicapit
 */

import { LucideIcon, BookOpen, Mountain, Leaf, UtensilsCrossed, Scissors, Palette, Home as HomeIcon } from 'lucide-react';

export interface EduSubPage {
  href: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
  image: string;
}

export const eduSubPages: EduSubPage[] = [
  {
    href: '/edu-wisata/edukasi',
    icon: BookOpen,
    title: 'Edukasi Lengkap',
    desc: 'Pelajari sejarah, potensi, dan program edukasi kampung wisata secara mendalam.',
    tag: 'Mulai Disini',
    tagColor: 'bg-brand',
    image: '/assets/images/5.jpg',
  },
  {
    href: '/edu-wisata/wisata-alam',
    icon: Mountain,
    title: 'Wisata Alam',
    desc: 'Jelajahi keindahan alam sekitar kampung Sicapit yang asri dan menyegarkan.',
    tag: 'Alam',
    tagColor: 'bg-emerald-600',
    image: '/hero-kampung.png',
  },
  {
    href: '/edu-wisata/pertanian',
    icon: Leaf,
    title: 'Pertanian & Agrowisata',
    desc: 'Belajar bertani organik, panen sayuran, dan memahami siklus pertanian tradisional.',
    tag: 'Agrowisata',
    tagColor: 'bg-emerald-600',
    image: '/assets/images/5.jpg',
  },
  {
    href: '/edu-wisata/kuliner-tradisi',
    icon: UtensilsCrossed,
    title: 'Kuliner Tradisi',
    desc: 'Cicipi masakan khas desa dengan bahan lokal segar dan resep turun-temurun.',
    tag: 'Kuliner',
    tagColor: 'bg-amber-600',
    image: '/assets/images/7.jpg',
  },
  {
    href: '/edu-wisata/kerajinan-tangan',
    icon: Scissors,
    title: 'Kerajinan Tangan',
    desc: 'Kreasi seni dan kerajinan tradisional langsung dari pengrajin lokal berpengalaman.',
    tag: 'Kerajinan',
    tagColor: 'bg-purple-600',
    image: '/assets/edu-wisata/musik-sunda.jpg',
  },
  {
    href: '/edu-wisata/workshop-batik',
    icon: Palette,
    title: 'Workshop Batik',
    desc: 'Praktik langsung membatik dengan teknik tradisional dan modern.',
    tag: 'Workshop',
    tagColor: 'bg-indigo-600',
    image: '/assets/images/3.jpg',
  },
  {
    href: '/edu-wisata/homestay',
    icon: HomeIcon,
    title: 'Homestay',
    desc: 'Pengalaman menginap autentik di rumah warga dengan suasana kekeluargaan.',
    tag: 'Penginapan',
    tagColor: 'bg-rose-600',
    image: '/hero-kampung.png',
  },
];
