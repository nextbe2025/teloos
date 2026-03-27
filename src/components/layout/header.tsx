'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  UserRound,
  ChevronDown,
  UtensilsCrossed,
  Smartphone,
  PieChart,
  Bike,
} from 'lucide-react'

const PRODUCT_SUBMENU = [
  {
    label: 'Operação & Atendimento',
    description: 'PDV, Mesas e Cozinha (KDS)',
    href: '/solucoes/operacao-e-atendimento',
    icon: UtensilsCrossed,
  },
  {
    label: 'Delivery & Vendas',
    description: 'App próprio e Integrador iFood',
    href: '/solucoes/delivery',
    icon: Bike,
  },
  {
    label: 'Autoatendimento',
    description: 'Cardápio Digital e Totens',
    href: '/solucoes/autoatendimento',
    icon: Smartphone,
  },
  {
    label: 'Gestão & Financeiro',
    description: 'Controle de estoque e relatórios',
    href: '/solucoes/gestao-e-financeiro',
    icon: PieChart,
  },
]

const NAV_LINKS = [
  { label: 'Segmentos', href: '/segmentos' },
  { label: 'Preços', href: '/precos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)

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
          {/* Menu Produtos com Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="hover:text-brand-blue flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors focus:outline-none">
              Produtos
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  isProductsOpen && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-4 pt-4"
                >
                  <div className="w-[450px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                    <div className="grid grid-cols-1 gap-1">
                      {PRODUCT_SUBMENU.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-slate-50"
                        >
                          <div className="bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-brand-dark text-sm font-bold">
                              {item.label}
                            </span>
                            <span className="text-brand-dark/40 text-xs font-medium">
                              {item.description}
                            </span>
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
            <Link href="/contato">Solicitar demo</Link>
          </Button>
        </div>
      </Container>
    </header>
  )
}
