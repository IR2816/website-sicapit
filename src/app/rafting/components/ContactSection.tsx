'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    paket: '',
    peserta: '',
    catatan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6285773246998';
    const paketMap: Record<string, string> = {
      family: 'Paket Pamili 7Km - Rp 150.000/orang',
      konservasi: 'Paket Konservasi 12Km - Rp 200.000/orang',
      petualangan: 'Paket Petualangan 27Km - Rp 350.000/orang',
    };
    const paketNama = paketMap[formData.paket] || formData.paket;
    const pesan = `Halo, saya ingin memesan rafting di Kampung Wisata siCapit!\n\n*Nama:* ${formData.nama}\n*WhatsApp:* ${formData.whatsapp}\n*Paket:* ${paketNama}\n*Jumlah Peserta:* ${formData.peserta} orang\n*Catatan:* ${formData.catatan || '-'}`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesan)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/30 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-600/20 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/10  rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10  text-emerald-100 text-sm font-semibold mb-6">
              Hubungi Kami
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Siap Memulai
              <br />
              Petualangan Anda?
            </h2>
            <p className="text-lg text-emerald-100 leading-relaxed mb-8">
              Jangan tunda lagi! Hubungi tim kami untuk konsultasi gratis dan dapatkan penawaran terbaik.
              Tim customer service kami siap membantu Anda 7 hari seminggu.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-white/10  flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-emerald-200">Telepon / WhatsApp</p>
                  <p className="font-semibold text-white">+62 857-7324-6998</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-white/10  flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-emerald-200">Email</p>
                  <p className="font-semibold text-white">kampungsiCapit@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-white/10  flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-emerald-200">Lokasi</p>
                  <p className="font-semibold text-white">Kampung Wisata SiCapit, Gg. Flamboyan I No.1, Semplak, Bogor Barat</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-white/10  flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-emerald-200">Jam Operasional</p>
                  <p className="font-semibold text-white">Setiap Hari, 08:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#0a0a0a] rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Pesan Sekarang</h3>
              <p className="text-slate-400 text-sm mb-6">Isi formulir di bawah untuk konsultasi gratis</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="bg-[#121820] text-slate-100 w-full px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="08xx-xxxx-xxxx"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="bg-[#121820] text-slate-100 w-full px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Paket yang Diminati</label>
                  <select
                    required
                    value={formData.paket}
                    onChange={(e) => setFormData({ ...formData, paket: e.target.value })}
                    className="bg-[#121820] text-slate-100 w-full px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-slate-400"
                  >
                    <option value="">Pilih paket...</option>
                    <option value="family">Paket Pamili 7Km - Rp 150.000/orang</option>
                    <option value="konservasi">Paket Konservasi 12Km - Rp 200.000/orang</option>
                    <option value="petualangan">Paket Petualangan 27Km - Rp 350.000/orang</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Jumlah Peserta</label>
                  <input
                    type="number"
                    placeholder="Contoh: 10 orang"
                    min="10"
                    required
                    value={formData.peserta}
                    onChange={(e) => setFormData({ ...formData, peserta: e.target.value })}
                    className="bg-[#121820] text-slate-100 w-full px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Catatan Tambahan</label>
                  <textarea
                    placeholder="Tanggal yang diinginkan, permintaan khusus, dll."
                    rows={3}
                    value={formData.catatan}
                    onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                    className="bg-[#121820] text-slate-100 w-full px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base py-6 shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-green-500/40 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Kirim via WhatsApp
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-sm text-slate-400 text-center mb-3">Atau hubungi kami via</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="p-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 text-green-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Kampung+Sicapit+Semplak+Bogor+Barat&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/kq7NA1oYMmCArcxP9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white/10  hover:bg-white/10  text-white font-semibold rounded-full transition-all duration-300"
          >
            <MapPin className="w-4 h-4" />
            Buka di Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
