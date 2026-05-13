/**
 * Data paket rafting Kampung Wisata Sicapit
 */

import { LucideIcon, Waves, Zap, Trophy } from 'lucide-react';

export interface RaftingPackage {
  name: string;
  subtitle: string;
  icon: LucideIcon;
  price: string;
  duration: string;
  distance: string;
  difficulty: string;
  difficultyColor: string;
  image: string;
  features: string[];
  popular: boolean;
}

export const raftingPackages: RaftingPackage[] = [
  {
    name: 'Pamili',
    subtitle: 'Family Fun',
    icon: Waves,
    price: 'Rp 150.000',
    duration: '2-3 Jam',
    distance: '7 km',
    difficulty: 'Mudah',
    difficultyColor: 'bg-emerald-100 text-brand',
    image: '/assets/images/rafting/4.jpeg',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
    popular: false,
  },
  {
    name: 'Konservasi',
    subtitle: 'Most Popular',
    icon: Zap,
    price: 'Rp 200.000',
    duration: '3-4 Jam',
    distance: '12 km',
    difficulty: 'Sedang',
    difficultyColor: 'bg-amber-100 text-amber-700',
    image: '/assets/images/rafting/1.jpeg',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
    popular: true,
  },
  {
    name: 'Petualangan',
    subtitle: 'Pro Challenge',
    icon: Trophy,
    price: 'Rp 350.000',
    duration: '4-5 Jam',
    distance: '27 km',
    difficulty: 'Sulit',
    difficultyColor: 'bg-red-100 text-red-700',
    image: '/assets/images/rafting/3.jpeg',
    features: [
      'Nasi Box',
      'Kopi Break',
      'Kelapa Muda',
      'Guide Profesional',
      'Asuransi',
      'Transportasi',
    ],
    popular: false,
  },
];

/**
 * Get package by name
 */
export const getPackageByName = (name: string): RaftingPackage | undefined => {
  return raftingPackages.find((pkg) => pkg.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get popular packages first
 */
export const getSortedPackages = (): RaftingPackage[] => {
  return [...raftingPackages].sort((a, b) => {
    if (a.popular === b.popular) return 0;
    return a.popular ? -1 : 1;
  });
};
