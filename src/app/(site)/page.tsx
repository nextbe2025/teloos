import { generateMetadata } from '@/lib/metadata'
import {
  HeroSection,
  MetricsSection,
  SolutionsSection,
  BenefitsSection,
  DashboardPreviewSection,
  IntegrationsSection,
  TestimonialsSection,
  CtaSection,
} from '@/components/sections'

export const metadata = generateMetadata()

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <SolutionsSection />
      <BenefitsSection />
      <DashboardPreviewSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

