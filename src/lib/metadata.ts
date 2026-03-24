import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface MetadataProps {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}

/**
 * Gera metadata Next.js padronizado para cada página.
 * Uso: `export const metadata = generateMetadata({ title: 'Sobre', description: '...' })`
 */
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const pageTitle = title ?? `${siteConfig.name} | ${siteConfig.tagline}`

  const pageDescription = description ?? siteConfig.description
  const ogImage = image ?? siteConfig.ogImage

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: './',
    },
  }
}
