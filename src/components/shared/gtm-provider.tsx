'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/lib/gtm'

/**
 * Provider client-side que dispara page_view a cada troca de rota
 * (Next.js SPA navigation).
 *
 * SCROLL DEPTH: não rastreamos aqui — o container GTM usa o trigger nativo
 * SCROLL_DEPTH (trigger 46), que detecta automaticamente 10/25/50/75/90%
 * e dispara as tags [GA4] 0 | Scroll (47), [Meta Ads] 0 | Scroll (54)
 * e [API] 0 | Scroll (63).
 *
 * PAGE VIEW SPA: o All Pages trigger (2147479553) só dispara no hard-load.
 * Por isso empurramos page_view manualmente a cada mudança de pathname.
 */
export function GTMProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // No primeiro render o GTM já dispara All Pages — pulamos para evitar duplicata.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    trackPageView(pathname)
  }, [pathname])

  return <>{children}</>
}
