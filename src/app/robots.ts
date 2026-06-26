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
      disallow: [
        '/entrar',
        '/esqueci-senha',
        '/redefinir-senha',
        '/estrategia-comercial',
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
