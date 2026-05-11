'use client'

import { cn } from "@/lib/utils"
import { Skeleton as BoneyardSkeleton } from 'boneyard-js/react'
import { ReactNode } from 'react'

interface SkeletonProps extends React.ComponentProps<"div"> {
  loading?: boolean
  name?: string
  children?: ReactNode
}

function Skeleton({ 
  className, 
  loading = false, 
  name, 
  children,
  ...props 
}: SkeletonProps) {
  // If used as a bone placeholder (just a div)
  if (!loading && !name) {
    return (
      <div
        data-slot="skeleton"
        className={cn("bg-accent animate-pulse rounded-md", className)}
        {...props}
      />
    )
  }

  // If used with loading state and name, use Boneyard Skeleton
  if (name) {
    return (
      <BoneyardSkeleton 
        name={name} 
        loading={loading}
        color="rgb(229, 229, 229)"
        darkColor="rgba(255, 255, 255, 0.08)"
        animate="shimmer"
      >
        {children}
      </BoneyardSkeleton>
    )
  }

  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Skeleton }


