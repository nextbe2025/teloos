'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, UserRound, X, ChevronDown, UtensilsCrossed, Bike, Smartphone, PieChart } from 'lucide-react'

const PRODUCT_SUBMENU = [
  {
    label: 'Operação & Atendimento',
    description: 'PDV, Mesas e Cozinha (KDS)',
    href: '/solucoes/operacao-e-atendimento',
    icon: UtensilsCrossed
  },
  {
    label: 'Delivery & Vendas',
    description: 'App próprio e Integrador iFood',
    href: '/solucoes/delivery',
    icon: Bike
  },
  {
    label: 'Autoatendimento',
    description: 'Cardápio Digital e Totens',
    href: '/solucoes/autoatendimento',
    icon: Smartphone
  },
  {
    label: 'Gestão & Financeiro',
    description: 'Controle de estoque e relatórios',
    href: '/solucoes/gestao-e-financeiro',
    icon: PieChart
  }
]

const NAV_LINKS = [
  { label: 'Planos', href: '/precos' },
  { label: 'Sobre nós', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

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
              {/* Menu Produtos com Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className="text-brand-dark/70 hover:text-brand-blue flex items-center gap-1 text-[15px] font-medium transition-colors duration-200 focus:outline-none"
                >
                  Produtos
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isProductsOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -left-4 top-full pt-6"
                    >
                      <div className="w-[450px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                        <div className="grid grid-cols-1 gap-1">
                          {PRODUCT_SUBMENU.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-slate-50"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              <div className="bg-brand-blue/5 text-brand-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:bg-brand-blue group-hover:text-white">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div className="flex flex-col text-left">
                                <span className="text-brand-dark text-[14px] font-bold">{item.label}</span>
                                <span className="text-brand-dark/40 text-[12px] font-medium">{item.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
                <Link href="/contato">Solicitar demo</Link>
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
