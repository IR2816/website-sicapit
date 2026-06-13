/**
 * Data FAQ untuk accordion di halaman utama
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Di mana letak persisnya Kampung Sicapit?",
    answer: "Kampung Wisata Sicapit terletak di Bogor. Anda bisa mengikuti panduan rute melalui peta interaktif yang ada di bagian bawah laman ini untuk mencapai titik kumpul yang telah kami sediakan.",
  },
  {
    question: "Apakah area wisata ini bisa dikunjungi tanpa reservasi?",
    answer: "Anda bisa datang kapan saja untuk berkunjung. Namun untuk aktivitas berkelompok seperti rafting, edukasi budaya, atau reservasi kemah, kami sangat menyarankan untuk Booking/Reservasi terlebih dahulu untuk memastikan persiapan pemandu wisata dan tempat.",
  },
  {
    question: "Berapa kapasitas maksimal untuk rombongan besar?",
    answer: "Kami dapat melayani rombongan keluarga besar hingga korporat dengan kapasitas hingga ratusan peserta sekaligus. Harap menghubungi salah satu narahubung kami jauh-jauh hari agar kami bisa merencanakan penyambutan dan tempat istirahat dengan layak.",
  },
  {
    question: "Apa saja fasilitas umum yang tersedia?",
    answer: "Terdapat area bersantai, kamar bilas dan mandi (terutama setelah rafting/bermain air), lahan parkir untuk mobil/motor pribadi, mushola kecil yang cukup untuk beribadah harian, serta warung lokal untuk membeli sekadar minum dan jajan.",
  },
  {
    question: "Apakah aman untuk anak kecil atau lansia?",
    answer: "Sangat bersahabat. Area Farm dan Edukasi dikondisikan landai dan aman. Namun bagi lansia yang ingin sekadar berjalan di tepi sungai perlu ekstra hati-hati pada batu-batuan yang berlumut.",
  },
];
