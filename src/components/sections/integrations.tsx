'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Integration {
  name: string
}

const INTEGRATIONS: Integration[] = [
  { name: 'iFood' },
  { name: 'Rappi' },
  { name: 'Uber Eats' },
  { name: '99Food' },
  { name: 'Stone' },
  { name: 'SumUp' },
  { name: 'Cielo' },
  { name: 'PagSeguro' },
  { name: 'NFC-e / SAT' },
  { name: 'NF-e' },
  { name: 'Bematech' },
  { name: 'Epson' },
  { name: 'Elgin' },
  { name: 'Getnet' },
  { name: 'Linx' },
  { name: 'Totvs' },
]

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-6 lg:px-10">
      <div className="group relative">
        {/* Logo Placeholder - Estilo Glassmorphism neutro */}
        <div className="group-hover:border-brand-blue/30 group-hover:shadow-brand-blue/5 flex h-14 w-28 items-center justify-center rounded-2xl border border-gray-100 bg-white/50 px-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
          <span className="text-brand-dark/20 group-hover:text-brand-blue text-[13px] font-black tracking-tighter grayscale transition-all group-hover:grayscale-0">
            {name}
          </span>
        </div>
      </div>
    </div>
  )
}

function InfiniteMarquee({
  items,
  reverse = false,
}: {
  items: Integration[]
  reverse?: boolean
}) {
  // Triplicamos a lista para garantir continuidade no loop infinito
  const displayItems = [...items, ...items, ...items]

  return (
    <div className="relative flex overflow-hidden py-2">
      <motion.div
        animate={{
          x: reverse ? [0, -100 * items.length] : [-100 * items.length, 0],
        }}
        transition={{
          duration: 30, // Velocidade elegante
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        {displayItems.map((item, idx) => (
          <LogoItem key={`${item.name}-${idx}`} name={item.name} />
        ))}
      </motion.div>
    </div>
  )
}

export function IntegrationsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* 1. TOPO DA SEÇÃO */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue mb-4 inline-block text-[13px] font-bold tracking-[0.2em] uppercase"
          >
            ECOSSISTEMA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-dark mb-6 text-[34px] leading-[1.1] font-extrabold sm:text-[42px] lg:text-[52px]"
          >
            Integrado com as principais <br className="hidden lg:block" />
            <span className="text-brand-blue">plataformas do mercado</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-dark/50 mx-auto max-w-2xl text-[17px] leading-relaxed"
          >
            Conectamos seu restaurante aos maiores marketplaces, meios de
            pagamento, hardwares e sistemas de gestão do Brasil.
          </motion.p>
        </div>

        {/* 2. BLOCO DO CARROSSEL (MARQUEE) */}
        <div className="relative mt-8 w-full max-w-full">
          {/* Fade Masks Lateral - Essencial para o efeito premium */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent lg:w-64" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent lg:w-64" />

          {/* Marquee infinito */}
          <div className="flex flex-col gap-6">
            <InfiniteMarquee items={INTEGRATIONS} />
            <InfiniteMarquee items={INTEGRATIONS} reverse />
          </div>
        </div>

        {/* 3. RODAPÉ DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-gray-50/50 px-6 py-2.5 ring-1 ring-gray-100">
            <span className="relative flex h-2 w-2">
              <span className="bg-brand-blue absolute inline-flex h-full w-full animate-ping rounded-full opacity-30"></span>
              <span className="bg-brand-blue relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            <span className="text-brand-dark/40 text-[12px] font-bold tracking-[0.15em] uppercase">
              + 50 integrações disponíveis via API aberta
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
