/**
 * Data FAQ rafting (versi lengkap untuk komponen home)
 */

import { LucideIcon, LifeBuoy, BaggageClaim, UserCheck, Droplets, HelpCircle, CalendarDays } from 'lucide-react';

export interface RaftingFaqDetail {
  q: string;
  a: string;
  icon: LucideIcon;
  tag: string;
}

export const raftingFaqDetails: RaftingFaqDetail[] = [
  {
    q: 'Apakah saya harus bisa berenang untuk ikut rafting?',
    a: 'Tidak perlu bisa berenang! Semua peserta akan diberikan life jacket (pelampung) berkualitas tinggi. Pemandu kami juga sudah terlatih untuk menangani berbagai situasi di air. Yang penting Anda tidak takut air dan siap untuk seru-seruan!',
    icon: LifeBuoy,
    tag: 'Keamanan',
  },
  {
    q: 'Sebaiknya membawa apa saja saat rafting?',
    a: 'Cukup bawa pakaian ganti, handuk, dan sunblock. Gunakan kaos dan celana pendek yang tidak kebesaran (hindari jeans). Sepatu atau sandal gunung yang melekat di kaki. Hindari membawa barang bawaan berlebihan karena akan mengganggu aktivitas di rakit.',
    icon: BaggageClaim,
    tag: 'Persiapan',
  },
  {
    q: 'Apakah rafting aman untuk anak-anak?',
    a: 'Untuk Paket Pamili (7 km), anak usia minimal 5 tahun sudah bisa ikut dengan pendampingan orang tua. Arus pada rute ini relatif tenang dan cocok untuk keluarga. Untuk Paket Konservasi dan Petualangan, minimal usia 12 tahun dengan kondisi fisik sehat.',
    icon: UserCheck,
    tag: 'Usia',
  },
  {
    q: 'Bagaimana jika cuaca hujan pada hari H?',
    a: 'Rafting tetap berlangsung saat hujan karena Anda akan basah anyway! Hujan justru membuat arus sungai lebih seru. Aktivitas hanya akan ditunda atau dibatalkan jika terjadi banjir besar atau kondisi sungai berbahaya. Keputusan ada di pihak pemandu untuk keselamatan semua peserta.',
    icon: Droplets,
    tag: 'Cuaca',
  },
  {
    q: 'Saya pemula total, paket mana yang cocok?',
    a: 'Untuk pemula, sangat direkomendasikan Paket Pamili dengan jarak 7 km. Arusnya tergolong ringan dan pemandu akan memberikan briefing lengkap tentang teknik mendayung dan posisi tubuh sebelum mulai. Yang penting ikuti instruksi pemandu dan nikmati perjalanannya!',
    icon: HelpCircle,
    tag: 'Kesulitan',
  },
  {
    q: 'Bagaimana cara booking dan pembayarannya?',
    a: 'Booking bisa langsung melalui WhatsApp kami di +62 857-7324-6998. Setelah konfirmasi jadwal, Anda bisa melakukan DP 50% dan pelunasan di tempat sebelum keberangkatan. Kami menerima transfer bank dan e-wallet.',
    icon: CalendarDays,
    tag: 'Booking',
  },
];
