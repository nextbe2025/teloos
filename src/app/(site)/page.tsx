import { generateMetadata } from '@/lib/metadata'
import { SiteHeader } from '@/components/layout/site-header'
import { HeroHome } from '@/components/sections/hero-home'
import {
  MetricsSection,
  SolutionsSection,
  WhyTeloosSection,
  AnalyticsSection,
  IntegrationsSection,
  CtaSection,
} from '@/components/sections'

export const metadata = generateMetadata()

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HeroHome />
      <MetricsSection />
      <SolutionsSection />
      <WhyTeloosSection />
      <AnalyticsSection />
      <IntegrationsSection />
      <CtaSection />
    </>
  )
}
