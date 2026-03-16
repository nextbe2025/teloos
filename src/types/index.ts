/**
 * Tipos globais compartilhados entre os componentes do site.
 * Centraliza as interfaces para evitar duplicação.
 */

/** Representa um item de navegação */
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

/** Representa um componente que aceita className customizada */
export interface WithClassName {
  className?: string
}

/** Representa um componente com children */
export interface WithChildren {
  children: React.ReactNode
}

/** Combina className e children */
export type PropsWithClassName<T = unknown> = T & WithClassName

/** SEO Props reutilizáveis por página */
export interface PageSeoProps {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}
