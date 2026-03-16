import { cn } from '@/lib/utils'
import type { WithChildren, WithClassName } from '@/types'

interface ContainerProps extends WithChildren, WithClassName {}

/**
 * Container padronizado para todo o site.
 * Centraliza e limita a largura do conteúdo com padding lateral responsivo.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
