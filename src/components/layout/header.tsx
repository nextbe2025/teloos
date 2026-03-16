import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/shared'

/**
 * Header principal do site.
 * Server Component — sem estado ou interatividade.
 * Para menu mobile, extraia um Client Component separado (ex: MobileNav).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
