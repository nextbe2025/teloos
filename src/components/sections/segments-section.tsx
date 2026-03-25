'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Utensils,
  Coffee,
  Beer,
  Pizza,
  Croissant,
  Store,
  IceCream,
  Wine,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { cn } from '@/lib/utils'

const SEGMENTS = [
  {
    name: 'Restaurantes',
    icon: Utensils,
    description: 'A la carte e buffet.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Cafeterias',
    icon: Coffee,
    description: 'Cafés e bistrôs.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    name: 'Bares & Pubs',
    icon: Beer,
    description: 'Comandas e bebidas.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    name: 'Pizzarias',
    icon: Pizza,
    description: 'Delivery otimizado.',
    color: 'bg-red-50 text-red-600',
  },
  {
    name: 'Padarias',
    icon: Croissant,
    description: 'Frente de caixa rápido.',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    name: 'Hamburguerias',
    icon: Store,
    description: 'Combos e pedidos.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Sorveterias',
    icon: IceCream,
    description: 'Balcão e delivery.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    name: 'Wine Bars',
    icon: Wine,
    description: 'Controle e vinhos.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Açaiterias',
    icon: IceCream,
    description: 'Montagem de copos.',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    name: 'Confeitarias',
    icon: Croissant,
    description: 'Doces e encomendas.',
    color: 'bg-pink-50 text-pink-500',
  },
  {
    name: 'Food Trucks',
    icon: Store,
    description: 'Operação móvel ágil.',
    color: 'bg-slate-50 text-slate-600',
  },
  {
    name: 'Steakhouses',
    icon: Utensils,
    description: 'Cortes e atendimento.',
    color: 'bg-red-50 text-red-800',
  },
]

export function SegmentsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  // Duplicamos a lista para criar o efeito de loop infinito suave
  const infiniteSegments = [...SEGMENTS, ...SEGMENTS]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current
      const scrollAmount = 350
      const scrollTo =
        direction === 'left'
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <Section className="overflow-hidden bg-white py-24 lg:py-32">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue mb-4 inline-block text-[13px] font-bold tracking-[0.2em] uppercase"
            >
              ÁREAS DE ATUAÇÃO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-dark max-w-xl text-[34px] leading-tight font-black sm:text-[42px] lg:text-[48px]"
            >
              Feito para diversos tipos de{' '}
              <span className="text-brand-blue">food service.</span>
            </motion.h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="group hover:border-brand-blue hover:bg-brand-blue flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:text-white"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="group hover:border-brand-blue hover:bg-brand-blue flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      <div className="relative mt-8">
        <div
          className="animate-scroll pause-on-hover flex w-fit px-4"
          style={{ gap: '24px' }}
        >
          {infiniteSegments.map((segment, idx) => (
            <div
              key={`${segment.name}-${idx}`}
              className="group flex min-w-[260px] shrink-0 flex-col items-center rounded-3xl border border-slate-100 bg-slate-50/50 p-8 text-center transition-all hover:bg-white hover:shadow-xl"
            >
              <div
                className={cn(
                  'mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110',
                  segment.color
                )}
              >
                <segment.icon className="h-8 w-8" strokeWidth={2.5} />
              </div>
              <h3 className="text-brand-dark mb-2 text-lg font-bold">
                {segment.name}
              </h3>
              <p className="text-brand-dark/50 text-[14px] leading-relaxed font-medium">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
