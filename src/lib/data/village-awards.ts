/**
 * Data penghargaan kampung wisata Sicapit
 */

import { LucideIcon, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export interface VillageAward {
  title: string;
  desc: string;
  year: string;
  icon: LucideIcon;
  isSpecial?: boolean;
}

export const villageAwards: VillageAward[] = [
  {
    title: "1.000 Besar Desa Wisata Indonesia",
    desc: "ADWI Kemenparekraf RI dari total 7.000+ desa secara nasional. Simbol kebangkitan ekonomi sektor pariwisata.",
    year: "2023",
    icon: ShieldCheck,
  },
  {
    title: "Juara 1 Kebersihan Kota Bogor",
    desc: "Kategori bantaran sungai tingkat Kota Bogor, bukti nyata tekat transformasi RW.06.",
    year: "2023",
    icon: Clock,
    isSpecial: true,
  },
  {
    title: "500 Besar Desa Wisata Indonesia",
    desc: "ADWI Kemenparekraf RI menuju 'Pariwisata Hijau Berkelas Dunia' dari 7.300+ desa.",
    year: "2024",
    icon: Sparkles,
  },
];
