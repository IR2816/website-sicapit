/**
 * Data FAQ untuk halaman rafting
 */

import { LucideIcon, HelpCircle, CalendarDays } from 'lucide-react';

export interface RaftingFaqItem {
  q: string;
  a: string;
  icon: LucideIcon;
  tag: string;
}

export const raftingFaqs: RaftingFaqItem[] = [
  {
    q: 'Apakah aman untuk pemula yang tidak bisa berenang?',
    a: 'Sangat aman. Peserta memakai pelampung, helm, dan didampingi pemandu bersertifikat.',
    icon: HelpCircle,
    tag: 'Keamanan',
  },
  {
    q: 'Berapa jumlah minimal peserta untuk booking?',
    a: 'Ideal 4-6 orang per perahu, dan booking disarankan untuk grup 10 orang atau lebih.',
    icon: CalendarDays,
    tag: 'Persiapan',
  },
];
