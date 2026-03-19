'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, UserRound, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Produtos', href: '/solucoes' },
  { label: 'Planos', href: '/precos' },
  { label: 'Sobre nós', href: '/sobre' },
  { label: 'Blog', href: '/blog' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 py-6 transition-all duration-300',
          scrolled
            ? 'border-brand-dark/5 border-b bg-white/80 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/brand/Logo Teloos Principal.png"
                alt={siteConfig.name}
                width={220}
                height={64}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Nav Central */}
            <nav className="hidden items-center gap-10 lg:flex">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-brand-dark/70 hover:text-brand-blue text-[15px] font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Ações Direita */}
            <div className="flex items-center gap-3">
              <Link
                href="/entrar"
                className="text-brand-dark/80 hover:text-brand-blue hidden text-[15px] font-semibold transition-colors sm:block"
              >
                <span className="inline-flex items-center gap-2">
                  <UserRound className="h-4 w-4" strokeWidth={2.5} />
                  Entrar
                </span>
              </Link>

              <Button
                asChild
                className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-11 rounded-full px-7 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="/demo">Solicitar demo</Link>
              </Button>

              {/* Mobile menu button */}
              <button
                type="button"
                className="text-brand-dark/80 hover:text-brand-blue hover:bg-brand-blue/5 inline-flex items-center justify-center rounded-full p-2 transition-colors lg:hidden"
                aria-label="Abrir menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Panel */}
      <div
        className={cn(
          'fixed inset-0 z-50 transition-opacity duration-700 lg:hidden',
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={cn(
            'absolute inset-0 bg-black/40 transition-opacity duration-700',
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={cn(
            'border-brand-blue/10 absolute top-0 right-0 h-full w-[320px] max-w-[85vw] border-l bg-white shadow-2xl',
            'transition-all duration-700',
            mobileMenuOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-4 opacity-0'
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <div className="border-brand-blue/10 flex items-center justify-between border-b p-4">
            <span className="text-brand-dark/80 text-sm font-bold">Menu</span>
            <button
              type="button"
              className="text-brand-dark/80 hover:text-brand-blue hover:bg-brand-blue/5 inline-flex items-center justify-center rounded-full p-2 transition-colors"
              aria-label="Fechar menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 p-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-dark/80 hover:text-brand-blue hover:bg-brand-blue/5 rounded-xl px-3 py-2 text-[15px] font-semibold transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="border-brand-blue/10 mt-2 border-t pt-2">
              <Link
                href="/entrar"
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-blue hover:text-brand-blue/90 hover:bg-brand-blue/5 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[15px] font-semibold transition-colors"
              >
                <UserRound className="h-4 w-4" strokeWidth={2.5} />
                Entrar
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
