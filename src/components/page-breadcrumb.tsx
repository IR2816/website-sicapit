'use client'

import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'

export interface BreadcrumbEntry {
  label: string
  href?: string
}

interface PageBreadcrumbProps {
  items: BreadcrumbEntry[]
  className?: string
}

export function PageBreadcrumb({ items, className = '' }: PageBreadcrumbProps) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 py-3 ${className}`}
    >
      <Breadcrumb>
        <BreadcrumbList className="text-xs sm:text-sm">
          {/* Home link */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/" className="inline-flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {items.map((item, index) => (
            <span key={item.label} className="contents">
              <BreadcrumbSeparator className="text-muted-foreground/50">
                /
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink asChild className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-foreground font-medium">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
