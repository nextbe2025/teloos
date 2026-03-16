import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

/**
 * Arquivo robots.txt gerado dinamicamente.
 * Acesso: /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
