/**
 * Data ulasan pelanggan rafting
 */

export interface CustomerReview {
  name: string;
  rating: number;
  date: string;
  text: string;
  source: string;
  avatar: string;
  avatarColor: string;
}

export const customerReviews: CustomerReview[] = [
  {
    name: 'Havid R.',
    rating: 5,
    date: '2 bulan lalu',
    text: 'Arung jeram terbaik di Indonesia, khususnya di Jawa Barat. Saya sudah berkali-kali ke sini, pelayanannya luar biasa, pemandu arung jeramnya hebat, dan resepsionisnya sangat ramah. Pasti bakal balik lagi!',
    source: 'Pelanggan',
    avatar: 'H',
    avatarColor: 'bg-blue-500',
  },
  {
    name: 'Dinda P.',
    rating: 5,
    date: '3 minggu lalu',
    text: 'Seru banget rafting di sini, pemandangannya bagus & pemandunya juga pada asik jadi ga tegang. Pokoknya bakal nyoba lagi liburan berikutnya!!',
    source: 'Pelanggan',
    avatar: 'D',
    avatarColor: 'bg-pink-500',
  },
  {
    name: 'Agung S.',
    rating: 5,
    date: '1 bulan lalu',
    text: 'Pertama kali coba rafting dan langsung ketagihan! Pemandu sangat profesional, arusnya pas buat pemula. Aman dan menyenangkan. Sangat direkomendasikan!',
    source: 'Pelanggan',
    avatar: 'A',
    avatarColor: 'bg-emerald-500',
  },
  {
    name: 'Maya Angelina',
    rating: 5,
    date: '1 bulan lalu',
    text: 'Penilaian 10/10! Penuh dengan tawa dan kegembiraan! Pemandunya ramah-ramah, fasilitas oke, pelayanannya juga oke banget. Bakal balik lagi buat nyobain yang 13km nanti!',
    source: 'Pelanggan',
    avatar: 'M',
    avatarColor: 'bg-violet-500',
  },
  {
    name: 'Fajar Nugroho',
    rating: 5,
    date: '2 minggu lalu',
    text: 'Kami sangat bersenang-senang! Buat yang mau rafting ini sangat direkomendasikan, pelayanannya bagus, stafnya juga semua asik jadi saat rafting seru banget. Cuma agak jauh dari parkiran ya hehe.',
    source: 'Pelanggan',
    avatar: 'F',
    avatarColor: 'bg-amber-500',
  },
  {
    name: 'Lina Kartika',
    rating: 5,
    date: '3 bulan lalu',
    text: 'Sangat direkomendasikan untuk pemula yang mau mencoba bermain rafting. Saya baru pertama kali merasakan bermain rafting, sangat aman dan pemandunya sabar banget ngajarin.',
    source: 'Pelanggan',
    avatar: 'L',
    avatarColor: 'bg-teal-500',
  },
];
