import { Suspense } from 'react'
import { Footer } from '@/components/layout/footer'
// import { WhatsAppButton } from '@/components/shared/whatsapp-button'
import { AttributionTracker } from '@/components/shared/attribution-tracker'
import { CookieBanner } from '@/components/shared/cookie-banner'

/**
 * Layout do grupo de rotas do site público.
 * O Header está integrado dentro da HeroSection na home page.
 * Para páginas internas, adicione um Header específico dentro de cada page.tsx.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>{children}</main>
      <Footer />
      {/* <WhatsAppButton /> */}
      <CookieBanner />
      <Suspense fallback={null}>
        <AttributionTracker />
      </Suspense>
    </>
  )
}
