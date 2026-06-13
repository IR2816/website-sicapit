'use client'

import {
  touristAttractionSchema,
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
  breadcrumbSchema,
} from '@/lib/schema'

/**
 * Komponen untuk render JSON-LD Schema Scripts
 * Comprehensive structured data for SEO
 */
export function JsonLdScripts() {
  const schemas = [
    touristAttractionSchema,
    localBusinessSchema,
    organizationSchema,
    webSiteSchema,
    breadcrumbSchema,
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          suppressHydrationWarning
        />
      ))}
    </>
  )
}
