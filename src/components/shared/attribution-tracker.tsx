'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { readAttributionFromUrl, saveAttribution } from '@/lib/attribution'

export function AttributionTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const attribution = readAttributionFromUrl(searchParams, {
      landing_page: window.location.href,
      referrer: document.referrer,
    })

    if (attribution) saveAttribution(attribution)
  }, [pathname, searchParams])

  return null
}
