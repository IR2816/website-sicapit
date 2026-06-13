/**
 * JSON-LD Schema definitions untuk SEO
 * Comprehensive structured data for Kampung Wisata Sicapit
 */
import { BUSINESS_HOURS } from './data/business-info'

const SITE_URL = "https://sicapit.vercel.app";
const SITE_NAME = "Kampung Wisata Sicapit";
const SITE_IMAGE = `${SITE_URL}/hero-kampung.png`;
const PHONE = "+62-813-1825-1218";

const ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: "Jalan Raya Semplak Gang Flamboyan 1, RT 03/06",
  addressLocality: "Bogor Barat",
  addressRegion: "Jawa Barat",
  postalCode: "16110",
  addressCountry: "ID"
};

const SOCIAL_LINKS = [
  "https://www.instagram.com/kampung_sicapit/",
  "https://www.tiktok.com/@kampung_sicapit",
  "https://www.youtube.com/@hercemherman4230"
];

const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: BUSINESS_HOURS.open,
  closes: BUSINESS_HOURS.close
};

/** TouristAttraction schema — primary business entity */
export const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": `${SITE_URL}#touristattraction`,
  name: SITE_NAME,
  alternateName: ["Sicapit", "Kampung Sicapit", "Wisata Sicapit"],
  description: "Destinasi wisata terpadu di Bogor yang menawarkan pengalaman rafting sungai Cisadane, edu-wisata budaya Sunda, agrowisata, dan berbagai workshop kreatif di tengah pesona alam pegunungan.",
  url: SITE_URL,
  image: SITE_IMAGE,
  telephone: PHONE,
  address: ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.5551,
    longitude: 106.7611
  },
  areaServed: {
    "@type": "City",
    name: "Bogor",
    "@id": "https://en.wikipedia.org/wiki/Bogor"
  },
  priceRange: "Rp 150.000 - Rp 350.000",
  sameAs: SOCIAL_LINKS,
  openingHoursSpecification: OPENING_HOURS,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "500"
  },
  touristType: ["Family tourism", "Adventure tourism", "Educational tourism", "Cultural tourism"],
  availableLanguage: ["Indonesian", "Sundanese"]
};

/** LocalBusiness schema — for local search visibility */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TouristAttraction"],
  "@id": `${SITE_URL}#localbusiness`,
  name: SITE_NAME,
  image: SITE_IMAGE,
  description: "Destinasi wisata alam dan budaya di Bogor dengan rafting, edu-wisata, dan workshop kreatif.",
  address: ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.5551,
    longitude: 106.7611
  },
  telephone: PHONE,
  url: SITE_URL,
  priceRange: "Rp 150.000 - Rp 350.000",
  openingHoursSpecification: OPENING_HOURS,
  sameAs: SOCIAL_LINKS,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "500"
  },
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, QRIS"
};

/** Organization schema — brand & social presence */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: ["Sicapit", "Kampung Sicapit", "BUMDES Semplak"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/edu-wisata/logo.svg`,
    width: 200,
    height: 200
  },
  description: "Kampung Wisata Sicapit adalah destinasi wisata terpadu di Bogor yang dikelola oleh BUMDES Semplak, menawarkan rafting, edu-wisata, dan edukasi budaya lokal.",
  address: ADDRESS,
  telephone: PHONE,
  sameAs: SOCIAL_LINKS,
  foundingLocation: {
    "@type": "Place",
    name: "Bogor, Jawa Barat, Indonesia"
  }
};

/** WebSite schema — with search action */
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  name: SITE_NAME,
  alternateName: "Sicapit",
  url: SITE_URL,
  inLanguage: "id-ID",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  publisher: {
    "@id": `${SITE_URL}#organization`
  }
};

/** BreadcrumbList schema — site navigation */
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Edu Wisata",
      item: `${SITE_URL}/edu-wisata`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rafting",
      item: `${SITE_URL}/rafting`
    }
  ]
};
