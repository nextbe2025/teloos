import { generateMetadata } from '@/lib/metadata'
import { SiteHeader } from '@/components/layout/site-header'
import { HeroHome } from '@/components/sections/hero-home'
import {
  MetricsSection,
  SolutionsSection,
  SegmentsSection,
  WhyTeloosSection,
  AnalyticsSection,
  IntegrationsSection,
  CtaSection,
} from '@/components/sections'

export const metadata = generateMetadata({
  title: 'Teloos | Sistemas para Food Service',
  description:
    'Sistemas modernos e eficientes para gestão de bares, restaurantes e delivery. Tecnologia de ponta, automação e controle total da sua operação.',
})

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HeroHome />
      <MetricsSection />
      <SolutionsSection />
      <SegmentsSection />
      <WhyTeloosSection />
      <AnalyticsSection />
      <IntegrationsSection />
      <CtaSection />
    </>
  )
}
