export const metadata = {
  title: 'Rafting Sicapit - Pacu Adrenalin Anda',
  description: 'Tantang nyali Anda di jeram Cisadane bersama paket Rafting Sicapit. Terjamin aman dengan pemandu profesional dan fasilitas lengkap untuk rombongan.',
  openGraph: {
    title: 'Rafting Sicapit - Pacu Adrenalin',
    description: 'Tantang nyali Anda di jeram Cisadane bersama paket Rafting Sicapit.',
    images: [{ url: 'https://sicapit.vercel.app/assets/images/Rafting/Jeram%20Bagol.jpg', width: 1200, height: 630 }],
  }
}

export default function RaftingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}