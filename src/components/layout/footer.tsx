import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/shared'

/**
 * Footer principal do site.
 * Server Component — renderizado no servidor, sem JS no cliente.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-bold text-lg">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  )
}
