import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Segmentos', href: '/segmentos' },
  { label: 'Preços', href: '/precos' },
  { label: 'Sobre', href: '/sobre' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-blue/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue">
            <Zap className="h-4 w-4 text-white fill-white" />
          </div>
          <span className="text-xl font-bold text-brand-dark tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/entrar"
            className="hidden md:block text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors"
          >
            Entrar
          </Link>
          <Button
            asChild
            className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-md shadow-brand-orange/20 h-9 px-5"
          >
            <Link href="/demo">Solicitar demo</Link>
          </Button>
        </div>
      </Container>
    </header>
  )
}
