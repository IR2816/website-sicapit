'use client'

import { organizationSchema, breadcrumbSchema } from '@/lib/schema'

/**
 * Komponen untuk render JSON-LD Schema Scripts
 * Digunakan untuk structured data dan SEO
 */
export function JsonLdScripts() {
  return (
    <>
      {/* Organization + TouristAttraction Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        suppressHydrationWarning
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
    </>
  )
}
