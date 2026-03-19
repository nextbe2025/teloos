import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { UserRound } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Segmentos', href: '/segmentos' },
  { label: 'Preços', href: '/precos' },
  { label: 'Sobre', href: '/sobre' },
]

export function Header() {
  return (
    <header className="border-brand-blue/10 sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/Logo Teloos Principal.png"
            alt={siteConfig.name}
            width={220}
            height={64}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-blue text-sm font-medium text-gray-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/entrar"
            className="hover:text-brand-blue hidden text-sm font-medium text-gray-500 transition-colors md:block"
          >
            <span className="inline-flex items-center gap-2">
              <UserRound className="h-4 w-4" strokeWidth={2.5} />
              Entrar
            </span>
          </Link>
          <Button
            asChild
            className="bg-brand-orange hover:bg-brand-orange/90 shadow-brand-orange/20 h-9 px-5 text-white shadow-md"
          >
            <Link href="/demo">Solicitar demo</Link>
          </Button>
        </div>
      </Container>
    </header>
  )
}
