/**
 * Data fitur utama untuk section About di halaman rafting dan home
 */

import { LucideIcon, MapPin, Waves, Heart, Award, TreePine, Users } from 'lucide-react';

export interface AboutFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const aboutFeatures: AboutFeature[] = [
  {
    icon: MapPin,
    title: 'Lokasi Strategis',
    desc: 'Hanya 10 km dari pusat Kota Bogor. Akses mudah dengan kendaraan pribadi maupun umum.',
  },
  {
    icon: Waves,
    title: 'Rafting & River Tubing',
    desc: 'Arung jeram & river tubing di Sungai Cisadane. Tersedia untuk semua tingkat kesulitan.',
  },
  {
    icon: Heart,
    title: 'Wisata Kuliner',
    desc: 'Ragam kuliner khas Bogor tersedia di area wisata, dari tradisional hingga jajanan lokal.',
  },
  {
    icon: Award,
    title: 'Kesenian Lokal',
    desc: 'Pertunjukan budaya autentik khas Bogor, perpaduan wisata alam dan budaya.',
  },
  {
    icon: TreePine,
    title: 'Suasana Alam Asri',
    desc: 'Dikelilingi pepohonan hijau dan udara segar untuk pengalaman wisata yang menyenangkan.',
  },
  {
    icon: Users,
    title: 'Menggerakkan Ekonomi',
    desc: 'Membuka peluang usaha masyarakat sekitar: homestay, warung, hingga jasa pemandu.',
  },
];
