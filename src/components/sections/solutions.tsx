'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  UtensilsCrossed,
  Bike,
  Smartphone,
  PieChart,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Solution {
  title: string
  description: string
  image: string
  cta: string
  href: string
  highlight?: boolean
  icon: React.ElementType
}

const SOLUTIONS: Solution[] = [
  {
    title: 'PDV e Mesas',
    description:
      'PDV, Mesas, Comandas e Cozinha (KDS). Controle pedidos, atendimento e fluxo do seu restaurante com mais agilidade.',
    image: '/images/PDV e Mesas.jpg.jpeg',
    icon: UtensilsCrossed,
    cta: 'Ver mais soluções',
    href: '/solucoes/pdv-e-mesas',
  },
  {
    title: 'Delivery',
    description:
      'App próprio, Delivery Integrado iFood, Gestão dos seus pedidos em tempo real, tudo centralizado em um só sistema.',
    image: '/images/Delivery Inicial.jpeg',
    icon: Bike,
    cta: 'Ver mais soluções',
    href: '/solucoes/delivery',
  },
  {
    title: 'Autoatendimento',
    description:
      'Totem Autoatendimento, Cardápio Digital. Seus clientes façam pedidos direto da mesa ou em terminais, reduzindo filas.',
    image: '/images/Autoatendimento home.jpg.jpeg',
    icon: Smartphone,
    cta: 'Ver mais soluções',
    href: '/solucoes/autoatendimento',
  },
  {
    title: 'Relatórios',
    description:
      'Acompanha sua operação de vendas, financeiro e estoque com mais organização e controle total.',
    image: '/images/Dashboard.jpeg',
    icon: PieChart,
    cta: 'Ver mais soluções',
    href: '/solucoes/relatorios',
  },
]

function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof SOLUTIONS)[0]
  index: number
}) {
  const [isPressed, setIsPressed] = React.useState(false)
  const Icon = solution.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileTap={{ scale: 0.99, y: -6 }}
      whileHover={{ y: -8, scale: 1.01 }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerCancel={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      className={cn(
        'group flex cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border-[0.5px] border-gray-200 bg-white transition-all duration-300',
        'hover:-translate-y-2 hover:scale-[1.01] hover:border-transparent hover:shadow-2xl',
        'active:-translate-y-1 active:scale-[1.01] active:border-transparent active:shadow-2xl',
        isPressed && '-translate-y-2 scale-[1.01] border-transparent shadow-2xl'
      )}
    >
      {/* Imagem no Topo — Full Bleed */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className={cn(
            'object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105',
            isPressed && 'scale-105'
          )}
        />
        {/* Gradiente sutil na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Ícone sobreposto — badge branco no canto inferior esquerdo */}
        <div
          className={cn(
            'text-brand-blue absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg transition-all duration-300',
            'group-hover:bg-brand-blue group-active:bg-brand-blue group-hover:text-white group-active:text-white',
            isPressed && 'bg-brand-blue text-white'
          )}
        >
          <Icon size={22} strokeWidth={2.5} />
        </div>
      </div>

      {/* Área de Conteúdo */}
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        <h3
          className={cn(
            'text-brand-dark group-hover:text-brand-blue group-active:text-brand-blue mb-4 text-2xl font-extrabold tracking-tight transition-colors',
            isPressed && 'text-brand-blue'
          )}
        >
          {solution.title}
        </h3>

        <p className="text-brand-dark/60 mb-8 flex-1 text-[15px] leading-relaxed">
          {solution.description}
        </p>

        <div className="mt-auto">
          <Link
            href={solution.href}
            className={cn(
              'text-brand-dark/70 hover:text-brand-blue group-hover:text-brand-blue group-active:text-brand-blue inline-flex items-center gap-2 text-[15px] font-bold transition-all group-hover:gap-3 group-active:gap-3',
              isPressed && 'text-brand-blue gap-3'
            )}
          >
            {solution.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function SolutionsSection() {
  return (
    <section
      id="solucoes"
      className="relative bg-[#F4F6FB] pt-0 pb-24 lg:pt-0 lg:pb-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Cabeçalho */}
        <div className="mb-16 flex flex-col gap-6 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[800px]">
            <h2 className="text-brand-dark text-[34px] leading-[1.1] font-extrabold sm:text-[42px] lg:text-[52px]">
              Plataforma completa para o <span>seu restaurante crescer.</span>
            </h2>
          </div>
          <p className="text-brand-dark/50 max-w-[440px] text-[17px] leading-relaxed lg:pb-2">
            Módulos integrados que se complementam — do pedido ao financeiro,
            sem sistemas paralelos ou integrações quebradas.
          </p>
        </div>

        {/* Grid de Cards - Estilo Goomer (2 colunas) */}
        <div className="grid gap-8 md:grid-cols-2">
          {SOLUTIONS.map((solution, idx) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
