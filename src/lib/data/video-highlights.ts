/**
 * Data video highlight untuk showcase di halaman utama
 */

export interface VideoHighlight {
  title: string;
  desc: string;
  src: string;
  poster: string;
}

export const videoHighlights: VideoHighlight[] = [
  {
    title: "Dancer Parade",
    desc: "Cuplikan suasana intim dari pertunjukan budaya dan gerak lokal di tengah kampung.",
    src: "/assets/videos/dancer-1.webm",
    poster: "/assets/images/3.jpg",
  },
  {
    title: "Rafting Sicapit",
    desc: "Kegiatan wahana Tirta yang menantang adrenalin untuk anda di sungai Cisadane sepanjang 7km dengan panorama hutan Cifor dan jeram bagol yang menjadi icon jeram di sungai Cisadane. Di pandu oleh skipper dari masyarakat yang dilatih secara kompeten oleh pelatih profesional dan bersertifikasi. Kegiatan wahana Tirta ini sudah dilindungi asuransi yang memadai untuk keamanan rafting sicapit di sungai Cisadane.",   
    src: "/assets/rafting/videos/rafting-1.webm",
    poster: "/assets/images/4.jpg",
  },
  {
    title: "Jeram Sicapit",
    desc: "Aliran sungai Cisadane yang melintasi di perkampungan Sicapit.",
    src: "/assets/rafting/videos/rafting-2.webm",
    poster: "/assets/images/6.jpg",
  },
];
