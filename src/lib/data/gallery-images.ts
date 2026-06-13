/**
 * Data galeri gambar untuk live gallery di halaman utama
 */

export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  src: string;
  fallback: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "gerbang", title: "Gerbang Kampung Sicapit", caption: "Area masuk kampung wisata dengan nuansa kanal dan taman.", src: "/assets/images/1.jpg", fallback: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
  { id: "taman", title: "Taman Sicapit", caption: "Spot favorit untuk foto rombongan dan wisata komunitas.", src: "/assets/images/2.jpg", fallback: "https://images.unsplash.com/photo-1501554728187-ce583db33af7" },
  { id: "komunitas", title: "Aktivitas Komunitas", caption: "Ruang kumpul warga dan pengunjung dalam kegiatan budaya.", src: "/assets/images/3.jpg", fallback: "https://images.unsplash.com/photo-1458442310124-dde6edb43d10" },
  { id: "panggung", title: "Panggung Kegiatan", caption: "Dokumentasi event komunitas dan agenda wisata lokal.", src: "/assets/images/5.jpg", fallback: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205" },
  { id: "rafting", title: "Petualangan Rafting", caption: "Keseruan rafting jadi salah satu pengalaman unggulan yang bisa dinikmati pengunjung di Sicapit.", src: "/assets/images/rafting/8.jpeg", fallback: "https://images.unsplash.com/photo-1510798831971-661eb04b3739" },
  { id: "jembatan", title: "Jembatan Kampung", caption: "Jalur kecil yang sering dipakai untuk menikmati lanskap desa.", src: "/assets/images/4.jpg", fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { id: "sudut-siang", title: "Sudut Siang Hari", caption: "Nuansa kampung saat cahaya siang jatuh ke taman dan jalan setapak.", src: "/assets/images/6.jpg", fallback: "https://images.unsplash.com/photo-1460317442991-0ec209397118" },
  { id: "sunset", title: "Sunset di Sicapit", caption: "Momen sore dengan langit hangat yang cocok untuk penutup kunjungan.", src: "/assets/images/sunset-image.jpg", fallback: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" },
];
