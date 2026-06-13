/**
 * Data informasi kontak Kampung Wisata Sicapit
 */

import { LucideIcon, Phone, Mail, MapPin, Clock } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  desc: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    label: 'Telepon / WhatsApp',
    value: '+62 857-7324-6998',
    desc: 'Respons cepat di jam kerja',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Kampungwisatasicapit382@gmail.com',
    desc: 'Respon dalam 24 jam',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Kampung Wisata SiCapit, Gg. Flamboyan I No.1, Semplak, Bogor Barat',
    desc: 'Kota Bogor, Jawa Barat',
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: 'Setiap Hari, 08:00 - 17:00 WIB',
    desc: 'Termasuk hari libur nasional',
  },
];
