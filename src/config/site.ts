/**
 * Configuração central do site.
 * Altere os valores aqui para refletir em todo o projeto.
 */
export const siteConfig = {
  name: 'Teloos',
  tagline: 'Sistemas para Food Service',
  description:
    'Sistemas modernos e eficientes para gestão de food service. Tecnologia premium para o seu negócio.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://teloos.com.br',
  locale: 'pt-BR',

  /** Usado em metadata og:image e Twitter card */
  ogImage: '/brand/og-image.png',

  /** Links de navegação principal */
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],

  /** Redes sociais */
  social: {
    instagram: 'https://instagram.com/teloossistemas',
    linkedin: 'https://linkedin.com/company/teloos',
    whatsapp: 'https://wa.me/5541936181651',
  },

  /** Informações de contato */
  contact: {
    email: 'contato@teloos.com.br',
    phone: '(11) 99999-9999',
  },
} as const

export type SiteConfig = typeof siteConfig
