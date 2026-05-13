/**
 * JSON-LD Schema definitions untuk SEO
 */
import { BUSINESS_HOURS } from './data/business-info'

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": "https://sicapit.vercel.app",
  name: "Kampung Wisata Sicapit",
  alternateName: ["Sicapit", "Kampung Sicapit", "Wisata Sicapit"],
  description: "Destinasi wisata terpadu di Bogor yang menawarkan pengalaman rafting, agrowisata, dan edukasi budaya lokal.",
  url: "https://sicapit.vercel.app",
  image: "https://sicapit.vercel.app/hero-kampung.png",
  telephone: "+62-813-1825-1218",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Raya Semplak Gang Flamboyan 1, RT 03/06",
    addressLocality: "Bogor Barat",
    addressRegion: "Jawa Barat",
    postalCode: "16110",
    addressCountry: "ID"
  },
  areaServed: {
    "@type": "City",
    name: "Bogor",
    "@id": "https://en.wikipedia.org/wiki/Bogor"
  },
  priceRange: "Rp 150.000 - Rp 350.000",
  sameAs: [
    "https://www.instagram.com/kampung_sicapit/",
    "https://www.tiktok.com/@kampung_sicapit",
    "https://www.youtube.com/@hercemherman4230"
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: BUSINESS_HOURS.open,
    closes: BUSINESS_HOURS.close
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "500"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kampung Wisata Sicapit",
  image: "https://sicapit.vercel.app/hero-kampung.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Raya Semplak Gang Flamboyan 1",
    addressLocality: "Bogor Barat",
    addressRegion: "Jawa Barat",
    postalCode: "16110",
    addressCountry: "ID"
  },
  telephone: "+62-813-1825-1218",
  url: "https://sicapit.vercel.app"
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sicapit.vercel.app"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Agrowisata",
      item: "https://sicapit.vercel.app/agrowisata"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rafting",
      item: "https://sicapit.vercel.app/rafting"
    }
  ]
};
