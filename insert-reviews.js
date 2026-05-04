const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');

const reviewsData = \
const customerReviews = [
  {
    name: 'Budi Santoso',
    rating: 5,
    text: 'Pengalaman rafting yang luar biasa! Instrukturnya sangat profesional dan ramah. Jeramnya seru tapi tetap aman. Pasti akan kembali lagi bawa keluarga!',
    date: '2 minggu yang lalu',
    avatar: 'B',
    bgColor: 'bg-emerald-500',
    source: 'Google Reviews'
  },
  {
    name: 'Siska Pratiwi',
    rating: 5,
    text: 'Fasilitasnya lengkap dan bersih. Pemandangan sepanjang sungai sangat indah. Makanan setelah rafting juga enak banget, khas sunda.',
    date: '1 bulan yang lalu',
    avatar: 'S',
    bgColor: 'bg-orange-500',
    source: 'Google Reviews'
  },
  {
    name: 'Rudi Hermawan',
    rating: 4,
    text: 'Seru banget buat acara gathering kantor! Tim Si Capit bisa handle rombongan besar dengan baik. Safety procedure-nya jelas dan tegas.',
    date: '2 bulan yang lalu',
    avatar: 'R',
    bgColor: 'bg-blue-500',
    source: 'Google Reviews'
  },
  {
    name: 'Anita Wijaya',
    rating: 5,
    text: 'Awalnya deg-degan karena belum pernah rafting, tapi mas-mas guide-nya bikin tenang. Pengalaman yang tak terlupakan! Recommended banget 12 km.',
    date: '3 bulan yang lalu',
    avatar: 'A',
    bgColor: 'bg-purple-500',
    source: 'Google Reviews'
  },
  {
    name: 'Keluarga Kusuma',
    rating: 5,
    text: 'Sangat cocok untuk liburan keluarga. Anak-anak (12 tahun) sangat enjoy karena airnya aman dan ada bagian lompat bebas ke air. Best holiday ever!',
    date: '3 bulan yang lalu',
    avatar: 'K',
    bgColor: 'bg-rose-500',
    source: 'Google Reviews'
  }
];
\;

content = content.replace('function TestimonialsSection() {', reviewsData + '\nfunction TestimonialsSection() {');
fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
