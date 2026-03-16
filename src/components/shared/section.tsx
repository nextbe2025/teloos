import { cn } from '@/lib/utils'
import type { WithChildren, WithClassName } from '@/types'

interface SectionProps extends WithChildren, WithClassName {
  as?: 'section' | 'div' | 'article'
  id?: string
}

/**
 * Wrapper de seção com espaçamento vertical padronizado.
 * Usado para envolver todas as seções de página.
 */
export function Section({ children, className, as: Tag = 'section', id }: SectionProps) {
  return (
    <Tag id={id} className={cn('py-16 md:py-24 lg:py-32', className)}>
      {children}
    </Tag>
  )
}
