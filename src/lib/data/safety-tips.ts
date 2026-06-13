/**
 * Data tips keselamatan rafting
 */

import { LucideIcon, LifeBuoy, HardHat, Users, AlertTriangle, BookOpen, Info } from 'lucide-react';

export interface SafetyTip {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bgLight: string;
  iconColor: string;
}

export const safetyTips: SafetyTip[] = [
  {
    icon: LifeBuoy,
    title: 'Wajib Pakai Pelampung',
    desc: 'Selalu kenakan life jacket (pelampung) yang disediakan. Pastikan ukuran pas dan buckle terkunci rapat sebelum memulai rafting. Pelampung berstandar internasional dan telah diuji kelayakannya.',
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: HardHat,
    title: 'Helm Wajib Dipakai',
    desc: 'Gunakan helm yang disediakan sepanjang aktivitas rafting. Helm melindungi kepala dari benturan batu atau benda lain. Pastikan tali helm terikat kencang dan tidak bergeser.',
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Users,
    title: 'Dengarkan Pemandu',
    desc: 'Ikuti semua instruksi pemandu tanpa terkecuali. Pemandu kami bersertifikat SAFI dan berpengalaman. Mereka akan memberikan briefing teknik mendayung, posisi duduk, dan apa yang harus dilakukan saat rafting.',
    color: 'from-emerald-500 to-green-500',
    bgLight: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: AlertTriangle,
    title: 'Patuhi Batasan Arus',
    desc: 'Jangan melebih batas kemampuan Anda. Pilih paket sesuai level pengalaman. Peserta pemula wajib mengikuti rute Grade II-III. Jika merasa tidak nyaman, segera beritahu pemandu.',
    color: 'from-red-500 to-rose-500',
    bgLight: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: BookOpen,
    title: 'Ikuti Briefing dengan Seksama',
    desc: 'Perhatikan baik-baik saat briefing sebelum rafting dimulai. Pemandu akan menjelaskan teknik mendayung yang benar, cara menahan dayung, posisi aman di rakit, dan prosedur evakuasi darurat.',
    color: 'from-violet-500 to-purple-500',
    bgLight: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Info,
    title: 'Kondisi Fisik Harus Sehat',
    desc: 'Pastikan dalam kondisi fisik yang sehat dan tidak sedang mengonsumsi alkohol. Peserta dengan riwayat jantung, epilepsy, atau kondisi medis tertentu wajib konsultasi dokter terlebih dahulu.',
    color: 'from-teal-500 to-emerald-500',
    bgLight: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
];
