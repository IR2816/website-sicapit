export const metadata = {
  title: 'Rafting Cisadane - Arung Jeram Sicapit Bogor',
  description: 'Pacu adrenalin Anda di jeram Cisadane dengan paket rafting profesional. Termasuk guide berpengalaman, peralatan safety lengkap, dan snack untuk rombongan.',
  keywords: 'Rafting Cisadane, River Tubing Bogor, Arung Jeram Bogor, Paket Rafting Murah, Rafting Semplak, Water Sports Bogor',
  openGraph: {
    title: 'Rafting Cisadane - Arung Jeram Sicapit',
    description: 'Pacu adrenalin Anda di jeram Cisadane bersama Sicapit.',
    images: [{ url: 'https://sicapit.vercel.app/assets/images/rafting/jeram-bagol.jpg', width: 1200, height: 630 }],
  }
}

export default function RaftingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}