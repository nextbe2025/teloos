import { generateMetadata } from '@/lib/metadata'
import { SiteHeader } from '@/components/layout/site-header'
import { PlansSection } from '@/components/sections'

export const metadata = generateMetadata({
  title: 'Planos e Preços',
  description:
    'Encontre o plano ideal para o seu negócio. Soluções completas para operação, delivery e gestão com o melhor custo-benefício do mercado.',
})

export default function PrecosPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <h1 className="sr-only">Planos e Preços do Sistema Teloos</h1>
        <PlansSection />
      </main>
    </>
  )
}
