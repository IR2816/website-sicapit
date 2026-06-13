/**
 * Data galeri rafting: slideshow, bento layout, dan video items
 */

export interface BentoItem {
  src: string;
  title: string;
  tag: string;
  colSpan: string;
  rowSpan: string;
  offset?: string;
  type: 'image' | 'video';
}

export interface VideoItem {
  src: string;
  title: string;
  tag: string;
}

export const raftingSlideshowImages: string[] = [
  '/assets/images/rafting/image.png',
  '/assets/images/rafting/imagee.png',
  '/assets/images/rafting/image-copy.png',
  '/assets/images/rafting/image-copy-2.png',
  '/assets/images/rafting/image-copy-3.png',
  '/assets/images/rafting/image-copy-4.png',
  '/assets/images/rafting/image-copy-5.png',
  '/assets/images/rafting/image-copy-6.png',
  '/assets/images/rafting/image-copy-7.png',
  '/assets/images/rafting/image-copy-8.png',
  '/assets/images/rafting/image-copy-9.png',
  '/assets/images/rafting/image-copy-10.png',
  '/assets/images/rafting/image-copy-11.png',
  '/assets/images/rafting/image-copy-12.png',
  '/assets/images/rafting/image-copy-13.png',
  '/assets/images/rafting/image-copy-14.png',
  '/assets/images/rafting/image-copy-15.png',
  '/assets/images/rafting/image-copy-16.png',
  '/assets/images/rafting/1.jpeg',
  '/assets/images/rafting/2.jpeg',
  '/assets/images/rafting/5.jpeg',
  '/assets/images/rafting/6.jpeg',
  '/assets/images/rafting/7.jpeg',
  '/assets/images/rafting/8.jpeg',
];

export const raftingBentoItems: BentoItem[] = [
  {
    src: '/assets/images/rafting/3.jpeg',
    title: 'Pemandu Ahli',
    tag: 'Tim Kami',
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-2',
    offset: 'md:-translate-y-2',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/4.jpeg',
    title: 'Bersama Tim',
    tag: 'Keluarga',
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    offset: 'md:translate-y-2',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/7.jpeg',
    title: 'Arus Deras',
    tag: 'Aktivitas',
    colSpan: 'col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
    offset: 'md:-translate-y-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/6.jpeg',
    title: 'Petualangan Seru',
    tag: 'Aktivitas',
    colSpan: 'col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-2',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/1.jpeg',
    title: 'Aksi di Rapids',
    tag: 'Aktivitas',
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    offset: 'md:-translate-y-1',
    type: 'image',
  },
  {
    src: '/assets/images/rafting/5.jpeg',
    title: 'Mengayuh Bersama',
    tag: 'Aktivitas',
    colSpan: 'col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    offset: 'md:translate-y-1',
    type: 'image',
  },
];

export const raftingVideoItems: VideoItem[] = [
  { src: '/assets/rafting/videos/jeram-bagol.webm', title: 'Jeram Bagol', tag: 'Video' },
  { src: '/assets/rafting/videos/konservasi.webm', title: 'Konservasi', tag: 'Video' },
  { src: '/assets/rafting/videos/rafting.webm', title: 'Aksi di Air', tag: 'Video' },
  { src: '/assets/rafting/videos/video.webm', title: 'Keseruan Rafting', tag: 'Video' },
  { src: '/assets/rafting/videos/rafting-1.webm', title: 'Petualangan Sungai', tag: 'Video' },
  { src: '/assets/rafting/videos/rafting-2.webm', title: 'Tantangan Arus', tag: 'Video' },
];
