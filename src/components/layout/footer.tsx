import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/shared'
import { Zap, Instagram, Linkedin } from 'lucide-react'

const FOOTER_LINKS = {
  produto: [
    { label: 'Plataforma', href: '/solucoes' },
    { label: 'Integrações', href: '/integracoes' },
    { label: 'Preços', href: '/precos' },
    { label: 'Changelog', href: '/changelog' },
  ],
  empresa: [
    { label: 'Sobre nós', href: '/sobre' },
    { label: 'Parceiros', href: '/parceiros' },
    { label: 'Carreiras', href: '/carreiras' },
    { label: 'Blog', href: '/blog' },
  ],
  segmentos: [
    { label: 'Restaurantes', href: '/segmentos/restaurantes' },
    { label: 'Pizzarias', href: '/segmentos/pizzarias' },
    { label: 'Dark Kitchens', href: '/segmentos/dark-kitchens' },
    { label: 'Redes & Franquias', href: '/segmentos/redes' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue">
                <Zap className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Sistemas integrados de gestão para food service. Do pedido ao relatório financeiro, tudo em um lugar.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-blue transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-blue transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links cols */}
          {[
            { title: 'Produto', links: FOOTER_LINKS.produto },
            { title: 'Empresa', links: FOOTER_LINKS.empresa },
            { title: 'Segmentos', links: FOOTER_LINKS.segmentos },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-white/70 transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-white/70 transition-colors">Termos de uso</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

