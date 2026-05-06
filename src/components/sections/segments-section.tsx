'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Utensils,
  Coffee,
  Beer,
  Pizza,
  Croissant,
  Store,
  IceCream,
  Wine,
  Beef,
  Truck,
  Footprints,
  Shirt,
  Car,
  Package,
  Leaf,
  ShoppingCart,
  PawPrint,
  Droplets,
  BookOpen,
  Plus,
} from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { cn } from '@/lib/utils'

const ALIMENTACAO = [
  { name: 'Pizzarias',       icon: Pizza,       color: 'bg-red-50 text-red-500' },
  { name: 'Hamburguerias',   icon: Store,       color: 'bg-blue-50 text-blue-500' },
  { name: 'Bares',           icon: Beer,        color: 'bg-yellow-50 text-yellow-600' },
  { name: 'Cafeterias',      icon: Coffee,      color: 'bg-amber-50 text-amber-600' },
  { name: 'Lanchonetes',     icon: Utensils,    color: 'bg-orange-50 text-orange-500' },
  { name: 'Padarias',        icon: Croissant,   color: 'bg-orange-50 text-orange-700' },
  { name: 'Confeitarias',    icon: Croissant,   color: 'bg-pink-50 text-pink-500' },
  { name: 'Sorveterias',     icon: IceCream,    color: 'bg-pink-50 text-pink-600' },
  { name: 'Fast Food',       icon: Store,       color: 'bg-red-50 text-red-600' },
  { name: 'Food Truck',      icon: Truck,       color: 'bg-slate-50 text-slate-600' },
  { name: 'Açougue',         icon: Beef,        color: 'bg-red-50 text-red-800' },
  { name: 'Wine Bars',       icon: Wine,        color: 'bg-purple-50 text-purple-600' },
]

const VAREJO = [
  { name: 'Lojas de Roupas',          icon: Shirt,        color: 'bg-purple-50 text-purple-500' },
  { name: 'Lojas de Calçados',        icon: Footprints,   color: 'bg-blue-50 text-blue-500' },
  { name: 'Autopeças',                icon: Car,          color: 'bg-slate-50 text-slate-600' },
  { name: 'Casa e Embalagens',        icon: Package,      color: 'bg-amber-50 text-amber-600' },
  { name: 'Suplementos',              icon: Leaf,         color: 'bg-green-50 text-green-600' },
  { name: 'Produtos Naturais',        icon: Leaf,         color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Mercados e Mercearias',    icon: ShoppingCart, color: 'bg-orange-50 text-orange-500' },
  { name: 'Pet Shops',                icon: PawPrint,     color: 'bg-yellow-50 text-yellow-600' },
  { name: 'Dist. de Bebidas',         icon: Droplets,     color: 'bg-blue-50 text-blue-600' },
  { name: 'Adegas',                   icon: Wine,         color: 'bg-purple-50 text-purple-700' },
  { name: 'Papelarias',               icon: BookOpen,     color: 'bg-pink-50 text-pink-500' },
  { name: 'Farmácias',                icon: Plus,         color: 'bg-green-50 text-green-600' },
]

const TABS = [
  { key: 'alimentacao', label: 'Alimentação', segments: ALIMENTACAO },
  { key: 'varejo',      label: 'Varejo',      segments: VAREJO },
]

export function SegmentsSection() {
  const [activeTab, setActiveTab] = useState('alimentacao')

  const active = TABS.find((t) => t.key === activeTab)!

  return (
    <Section className="bg-white py-24 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue mb-4 inline-block text-[13px] font-bold tracking-[0.2em] uppercase"
            >
              SEGMENTOS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-dark text-[34px] leading-tight font-black sm:text-[42px] lg:text-[48px]"
            >
              Feito para o seu <br />
              <span className="text-brand-blue">tipo de negócio.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-dark/50 max-w-[400px] text-[17px] leading-relaxed lg:pb-2"
          >
            Seja qual for o seu segmento, a Teloos se adapta à sua operação
            com tecnologia, agilidade e suporte de verdade.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="mb-10 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                'relative rounded-full px-7 py-2.5 text-[14px] font-semibold transition-all duration-300',
                activeTab === tab.key
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'text-brand-dark/50 hover:text-brand-dark'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          >
            {active.segments.map((segment, idx) => (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 text-center transition-all hover:border-slate-200 hover:bg-white hover:shadow-md"
              >
                <div
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110',
                    segment.color
                  )}
                >
                  <segment.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="text-brand-dark text-[13px] font-semibold leading-tight">
                  {segment.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  )
}
