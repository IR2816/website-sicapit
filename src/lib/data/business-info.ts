/**
 * Informasi bisnis Kampung Wisata Sicapit
 * Central hub untuk business hours dan info operasional
 */

export const BUSINESS_HOURS = {
  days: 'Setiap Hari',
  dayLabels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
  open: '08:00',
  close: '17:00',
  timezone: 'WIB',
  label: 'Buka Setiap Hari 08:00 - 17:00 WIB',
  description: 'Disarankan booking terlebih dahulu untuk kegiatan kelompok besar.',
} as const;

export const formatBusinessHours = () => {
  return `${BUSINESS_HOURS.open} - ${BUSINESS_HOURS.close} ${BUSINESS_HOURS.timezone}`;
};

export const formatBusinessHoursWithDay = () => {
  return `${BUSINESS_HOURS.days}, ${formatBusinessHours()}`;
};
