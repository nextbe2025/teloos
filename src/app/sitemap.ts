import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

/**
 * Sitemap gerado dinamicamente pelo Next.js.
 * Adicione as páginas do site conforme forem criadas.
 * Acesso: /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/solucoes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
