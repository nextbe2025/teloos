'use client'

import { useEffect, useRef, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/gtm'

/**
 * Componente interno que lida com o rastreamento para ter acesso aos hooks.
 */
function GTMTrackingHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // No primeiro render o GTM já dispara All Pages — pulamos para evitar duplicata.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Usamos um timer curto (100ms) para garantir que o Next.js já tenha 
    // atualizado o metadata (document.title) no DOM antes do disparo.
    // Isso evita que o GA4 capture o título da página anterior.
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    const timer = setTimeout(() => {
      trackPageView(url)
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  return null
}

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
 * Por isso empurramos page_view manualmente a cada mudança de pathname/searchParams.
 */
export function GTMProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <GTMTrackingHandler />
      </Suspense>
      {children}
    </>
  )
}
