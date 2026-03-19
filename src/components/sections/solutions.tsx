'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  UtensilsCrossed,
  Bike,
  Smartphone,
  PackageSearch,
  TrendingUp,
  Puzzle,
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
    title: 'Operação & Atendimento',
    description:
      'Controle pedidos, mesas, atendimento e fluxo do seu restaurante com mais agilidade e menos erros no dia a dia.',
    image: '/images/Sistema PDV_image.png',
    icon: UtensilsCrossed,
    cta: 'Ver mais soluções',
    href: '/solucoes/pdv',
  },
  {
    title: 'Delivery & Vendas',
    description:
      'Gerencie pedidos, integrações com iFood e entregas em tempo real, tudo centralizado em um só sistema.',
    image: '/images/Delivery próprio_image.png',
    icon: Bike,
    cta: 'Ver mais soluções',
    href: '/solucoes/delivery',
  },
  {
    title: 'Autoatendimento',
    description:
      'Permita que seus clientes façam pedidos direto da mesa, reduzindo filas e aumentando a eficiência do atendimento.',
    image: '/images/Cardápio par tablet_image.png',
    icon: Smartphone,
    cta: 'Demonstração gratuita',
    href: '/demo',
  },
  {
    title: 'Gestão & Controle',
    description:
      'Acompanhe estoque, vendas e operação com mais organização e controle total do seu negócio.',
    image: '/images/Gestão de clientes_image.png',
    icon: PackageSearch,
    cta: 'Ver mais soluções',
    href: '/solucoes/crm',
  },
  {
    title: 'Financeiro & Resultados',
    description:
      'Tenha visão clara do faturamento, despesas e desempenho para tomar decisões com mais segurança.',
    image: '/images/__elementos 112.png',
    icon: TrendingUp,
    cta: 'Ver mais soluções',
    href: '/solucoes/financeiro',
  },
  {
    title: 'Integrações & Expansão',
    description:
      'Conecte seu restaurante com marketplaces, sistemas e soluções para crescer sem limitações.',
    image: '/images/Integração com maquininhas_image.png',
    icon: Puzzle,
    cta: 'Ver mais soluções',
    href: '/solucoes/pagamentos',
  },
]

function SolutionCard({
  solution,
  index,
}: {
  solution: Solution
  index: number
}) {
  const Icon = solution.icon
  const [isPressed, setIsPressed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
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
        'group flex flex-col overflow-hidden rounded-[2.5rem] border-[0.5px] border-gray-200 bg-white transition-all duration-300',
        'hover:-translate-y-2 hover:scale-[1.01] hover:border-transparent hover:shadow-2xl',
        'active:-translate-y-1 active:scale-[1.01] active:border-transparent active:shadow-2xl',
        isPressed && '-translate-y-2 scale-[1.01] border-transparent shadow-2xl'
      )}
    >
      {/* Imagem no Topo */}
      <div
        className={cn(
          'group-hover:bg-brand-blue/10 group-active:bg-brand-blue/10 relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[#F8FAFF] p-8 transition-all duration-500',
          isPressed && 'bg-brand-blue/10'
        )}
      >
        {/* Ícone flutuante de fundo para dar textura */}
        <div
          className={cn(
            'text-brand-blue/5 group-hover:text-brand-blue/10 group-active:text-brand-blue/10 absolute top-6 left-6 transition-colors duration-500',
            isPressed && 'text-brand-blue/10'
          )}
        >
          <Icon size={120} strokeWidth={1} />
        </div>

        <div
          className={cn(
            'relative flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105 group-active:scale-105',
            isPressed && 'scale-105'
          )}
        >
          <Image
            src={solution.image}
            alt={solution.title}
            width={400}
            height={250}
            className="z-10 object-contain drop-shadow-2xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          {/* Fallback label visual caso a imagem não carregue */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center rounded-2xl bg-gray-100/30">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">
              {solution.title}
            </span>
          </div>
        </div>
      </div>

      {/* Área de Conteúdo */}
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="bg-brand-blue/10 text-brand-blue flex h-10 w-10 items-center justify-center rounded-xl">
            <Icon size={20} strokeWidth={2.5} />
          </div>
          <h3
            className={cn(
              'text-brand-dark group-hover:text-brand-blue group-active:text-brand-blue text-2xl font-extrabold tracking-tight transition-colors',
              isPressed && 'text-brand-blue'
            )}
          >
            {solution.title}
          </h3>
        </div>

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
    <section className="relative bg-[#F4F6FB] pt-0 pb-24 lg:pt-0 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Cabeçalho */}
        <div className="mb-16 flex flex-col gap-6 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[800px]">
            <h2 className="text-brand-dark text-[34px] leading-[1.1] font-extrabold sm:text-[42px] lg:text-[52px]">
              Plataforma completa para o{' '}
              <span className="text-brand-blue">seu restaurante crescer.</span>
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
