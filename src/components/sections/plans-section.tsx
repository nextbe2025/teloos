'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  Crown,
  Sparkles,
  LayoutDashboard,
  TrendingUp,
  ShoppingBag,
  Users,
  Zap,
  BarChart3,
  Clock,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/shared'
import { cn } from '@/lib/utils'

type Benefit = {
  title: string
  description: string
}

type Plan = {
  id: string
  name: string
  priceMonthly: string
  priceAnnual: string
  description: string
  recommended?: boolean
  features: string[]
  ctaLabel: string
}

const BENEFITS: Benefit[] = [
  {
    title: 'Gestão Inteligente',
    description:
      'Centralize pedidos, estoque e financeiro em uma única interface intuitiva.',
  },
  {
    title: 'Automação Total',
    description:
      'Sincronize iFood, WhatsApp e PDV para evitar erros e economizar tempo.',
  },
  {
    title: 'Dados que Vendem',
    description:
      'Acompanhe indicadores de performance e tome decisões baseadas em dados.',
  },
]

const PLANS: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    priceMonthly: 'R$ 249,00',
    priceAnnual: 'R$ 199,00',
    description: 'Para começar com controle e organização na rotina.',
    features: [
      'Pedidos e cardápio',
      'Mesas e atendimento',
      'Relatórios essenciais',
      'Suporte padrão',
    ],
    ctaLabel: 'Quero o Básico',
  },
  {
    id: 'essencial',
    name: 'Essencial',
    priceMonthly: 'R$ 269,00',
    priceAnnual: 'R$ 215,00',
    description: 'Mais integrações e visão para crescer com segurança.',
    features: [
      'Tudo do Básico',
      'Integrações de canais',
      'Relatórios avançados',
      'Suporte prioritário',
    ],
    ctaLabel: 'Escolher Essencial',
  },
  {
    id: 'completo',
    name: 'Completo',
    priceMonthly: 'R$ 349,00',
    priceAnnual: 'R$ 279,00',
    description: 'Recomendado para operações que querem eficiência total.',
    recommended: true,
    features: [
      'Tudo do Essencial',
      'Automação operacional',
      'Painel de gestão em tempo real',
      'Treinamento para equipe',
    ],
    ctaLabel: 'Começar pelo Completo',
  },
  {
    id: 'premium',
    name: 'Premium',
    priceMonthly: 'R$ 449,00',
    priceAnnual: 'R$ 359,00',
    description: 'Para redes e operações com necessidade de escala.',
    features: [
      'Tudo do Completo',
      'Acompanhamento dedicado',
      'Integrações avançadas',
      'Roadmap e evolução do sistema',
    ],
    ctaLabel: 'Falar com comercial',
  },
]

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const isFirst = index === 0

  return (
    <div
      className={cn(
        'group isolation-isolate relative overflow-hidden rounded-[2.5rem] border bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]',
        isFirst
          ? 'border-brand-blue/20 z-20 scale-[1.02] shadow-[0_20px_40px_-12px_rgba(40,86,183,0.08)]'
          : 'border-brand-blue/10 z-10 shadow-sm'
      )}
    >
      <div className="relative z-10 flex h-full min-h-[160px] flex-col justify-center gap-6">
        <div className="flex flex-col items-start gap-5">
          <div
            className={cn(
              'flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] shadow-sm transition-colors',
              isFirst
                ? 'bg-brand-blue text-white'
                : 'bg-brand-blue/10 text-brand-blue'
            )}
          >
            {index === 0 && (
              <LayoutDashboard className="h-7 w-7" strokeWidth={2} />
            )}
            {index === 1 && <Zap className="h-7 w-7" strokeWidth={2} />}
            {index === 2 && <BarChart3 className="h-7 w-7" strokeWidth={2} />}
          </div>
          <div>
            <h3 className="text-brand-dark text-[22px] leading-tight font-black tracking-tight">
              {benefit.title}
            </h3>
            <p className="text-brand-dark/55 mt-4 text-[16px] leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlanCard({ plan, isAnnual }: { plan: Plan; isAnnual: boolean }) {
  const currentPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.99 }}
      whileHover={{ y: -8, scale: plan.recommended ? 1.05 : 1.02 }}
      className={cn(
        'group relative flex flex-col rounded-[2.5rem] border bg-white transition-all duration-500 will-change-transform',
        plan.recommended
          ? 'border-brand-blue z-20 scale-[1.05] shadow-[0_40px_80px_-15px_rgba(40,86,183,0.2)]'
          : 'hover:border-brand-blue/30 z-10 border-gray-200 shadow-sm hover:shadow-xl'
      )}
    >
      {/* Target de Hover Estático para Evitar Tremor */}
      <div className="absolute inset-0 z-0" />

      {/* Badge Recomendado (Reposicionado) */}
      {plan.recommended && (
        <div className="absolute top-0 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2">
          <span className="bg-brand-blue inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-[11px] font-black tracking-[0.15em] whitespace-nowrap text-white uppercase shadow-xl ring-4 ring-white">
            <Crown className="h-3.5 w-3.5 fill-current" strokeWidth={3} />
            Recomendado
          </span>
        </div>
      )}

      <div className="uppercase-none relative flex h-full flex-col p-10">
        {/* Header: Nome e Descrição */}
        <div className="mb-8">
          <h3 className="text-brand-dark mb-3 text-2xl font-black tracking-tight">
            {plan.name}
          </h3>
          <p className="text-brand-dark/50 min-h-[45px] text-[14px] leading-relaxed font-medium">
            {plan.description}
          </p>
        </div>

        {/* Preço de Destaque (Ajuste de Proporção) */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-brand-dark/30 text-lg font-bold">R$</span>
            <span className="text-brand-dark text-5xl font-black tracking-tight">
              {currentPrice.replace('R$ ', '').split(',')[0]}
            </span>
            <span className="text-brand-dark/40 text-2xl font-bold">
              ,{currentPrice.split(',')[1] || '00'}
            </span>
            <span className="text-brand-dark/40 ml-1.5 text-[13px] font-bold lowercase">
              /mês
            </span>
          </div>
        </div>

        {/* Botão de Conversão (100% largura) */}
        <div className="mb-10">
          <Button
            asChild
            size="lg"
            className={cn(
              'h-14 w-full rounded-full text-[15px] font-black transition-all duration-300',
              plan.recommended
                ? 'from-brand-blue to-brand-orange shadow-brand-blue/25 border-0 bg-gradient-to-r text-white shadow-lg hover:scale-[1.02] hover:brightness-110'
                : 'bg-brand-dark hover:bg-brand-dark/95 shadow-brand-dark/10 text-white shadow-md'
            )}
          >
            <Link href="/demo">{plan.ctaLabel}</Link>
          </Button>
        </div>

        {/* Lista de Benefícios */}
        <div className="flex-grow space-y-6">
          <p className="text-brand-dark/20 text-[11px] font-black tracking-[0.2em] uppercase">
            O que está incluso:
          </p>
          <ul className="space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="group/item flex items-start gap-4">
                <div
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                    plan.recommended
                      ? 'bg-brand-blue/10 text-brand-blue'
                      : 'group-hover/item:bg-brand-blue/10 group-hover/item:text-brand-blue bg-slate-100 text-slate-400'
                  )}
                >
                  <Check className="h-3 w-3" strokeWidth={4} />
                </div>
                <span className="text-brand-dark/70 text-[14px] leading-snug font-bold">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Texto Inferior Refinado */}
        <div className="mt-12 flex justify-center border-t border-slate-100 pt-8">
          <p className="text-brand-dark/25 text-center text-[11px] font-extrabold tracking-widest uppercase">
            Sem fidelidade • Cancele quando quiser
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function PlansSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="relative overflow-hidden bg-[#F4F6FB] pt-32 pb-24 lg:pt-52">
      <div className="bg-brand-blue/5 pointer-events-none absolute -top-24 left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl" />
      <div className="bg-brand-orange/10 pointer-events-none absolute -bottom-24 left-10 z-0 h-64 w-64 rounded-full blur-3xl" />

      <Container>
        {/* Hero */}
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="border-brand-blue/10 inline-flex items-center gap-3 rounded-full border bg-white/70 px-4 py-2 backdrop-blur">
              <div className="bg-brand-blue/10 text-brand-blue flex h-8 w-8 items-center justify-center rounded-2xl">
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </div>
              <span className="text-brand-blue text-[13px] font-bold tracking-[0.2em] uppercase">
                Planos
              </span>
            </div>

            <h1 className="text-brand-dark mt-8 text-[40px] leading-[1.15] font-extrabold tracking-tight sm:text-5xl lg:text-[52px] xl:text-[58px]">
              Escolha o plano ideal para crescer com{' '}
              <br className="hidden xl:block" />
              <span className="text-brand-blue">
                controle e previsibilidade.
              </span>
            </h1>

            <p className="text-brand-dark/60 mt-7 max-w-[560px] text-[17px] leading-relaxed">
              Escolha o plano ideal para digitalizar e otimizar sua operação com
              uma experiência premium do pedido ao financeiro.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 shadow-brand-orange/20 rounded-full text-white shadow-lg"
              >
                <Link href="/demo">Solicitar demonstração</Link>
              </Button>
            </div>
          </div>

          {/* Visual Dashboard - Modern SaaS Style */}
          <div className="relative hidden lg:block">
            <div className="relative h-[620px] w-full">
              {/* Main Dashboard Base (Background Window) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="border-brand-blue/15 absolute inset-x-12 inset-y-16 overflow-hidden rounded-[2.5rem] border bg-white shadow-[0_32px_64px_-16px_rgba(30,58,138,0.12)]"
              >
                <div className="flex h-full flex-col">
                  {/* Chrome Header */}
                  <div className="border-brand-blue/10 flex items-center justify-between border-b bg-slate-50/80 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-blue/10 text-brand-blue flex h-7 w-7 items-center justify-center rounded-lg">
                        <LayoutDashboard className="h-4 w-4" />
                      </div>
                      <div className="bg-brand-dark/10 h-2 w-24 rounded-full" />
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-slate-200" />
                      <div className="h-2 w-2 rounded-full bg-slate-200" />
                      <div className="h-2 w-2 rounded-full bg-slate-200" />
                    </div>
                  </div>

                  {/* Dashboard Mock Content */}
                  <div className="flex-1 p-8">
                    <div className="grid grid-cols-2 gap-6 opacity-30 grayscale-[0.4]">
                      <div className="flex h-28 flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="h-2 w-12 rounded-full bg-slate-300" />
                        <div className="h-8 w-24 rounded-lg bg-slate-200/50" />
                      </div>
                      <div className="flex h-28 flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="h-2 w-16 rounded-full bg-slate-300" />
                        <div className="h-8 w-16 rounded-lg bg-slate-200/50" />
                      </div>
                    </div>

                    {/* Improvised Chart with Grid */}
                    <div className="relative mt-8 flex h-48 items-end gap-3 rounded-[2rem] border border-slate-200 bg-slate-50/50 p-8 opacity-40">
                      {/* Grid Lines */}
                      <div className="pointer-events-none absolute inset-x-8 inset-y-8 flex flex-col justify-between">
                        <div className="h-px w-full bg-slate-200/60" />
                        <div className="h-px w-full bg-slate-200/60" />
                        <div className="h-px w-full bg-slate-200/60" />
                        <div className="h-px w-full bg-slate-200" />
                      </div>

                      {/* Bars */}
                      {[50, 80, 45, 95, 60, 85, 55, 75, 40, 90, 65, 80].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="bg-brand-blue/30 hover:bg-brand-blue/50 relative z-10 flex-1 rounded-t-lg transition-colors"
                            style={{ height: `${h}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 1: Faturamento (Top Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="border-brand-blue/10 absolute top-16 left-0 z-30 w-52 cursor-default rounded-2xl border bg-white/95 p-5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] backdrop-blur-md"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-brand-dark/40 text-[11px] font-bold tracking-wider uppercase">
                    Faturamento hoje
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-brand-dark text-2xl leading-none font-black tracking-tight">
                    R$ 8.420
                  </span>
                  <div className="flex items-center text-[11px] font-bold text-emerald-600">
                    +18%
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Pedidos Tempo Real (Top Right - Same height as Faturamento) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="border-brand-blue/10 absolute top-16 right-0 z-30 w-56 cursor-default rounded-2xl border bg-slate-900/95 p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] backdrop-blur-md"
              >
                <div className="mb-1.5 flex items-center gap-2 text-white/40">
                  <ShoppingBag className="text-brand-blue h-4 w-4" />
                  <span className="text-[11px] font-bold tracking-wider uppercase">
                    Pedidos ativos
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl leading-none font-black text-white">
                    127{' '}
                    <span className="text-[11px] font-medium text-white/40 uppercase">
                      total
                    </span>
                  </span>
                  <div className="bg-brand-blue/20 border-brand-blue/30 flex items-center gap-1.5 rounded-full border px-2.5 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="bg-brand-blue absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                      <span className="bg-brand-blue relative inline-flex h-2 w-2 rounded-full"></span>
                    </span>
                    <span className="text-brand-blue text-[11px] font-black">
                      +12
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Equipe Online (Middle Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{
                  x: 5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="border-brand-blue/10 absolute top-48 right-4 z-30 w-56 cursor-default rounded-2xl border bg-white p-5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-slate-100"
                      >
                        <Users className="h-4 w-4 text-slate-400" />
                      </div>
                    ))}
                    <div className="bg-brand-blue flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white">
                      +2
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-brand-dark/40 text-[11px] font-bold">
                      Equipe online
                    </span>
                  </div>
                </div>
                <div className="text-brand-dark/70 flex items-center gap-2">
                  <Clock className="text-brand-blue h-4 w-4" />
                  <span className="text-[12px] font-bold">
                    Tempo médio: 3min
                  </span>
                </div>
              </motion.div>

              {/* Card 4: Integrações (Middle Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{
                  x: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="border-brand-blue/10 absolute top-48 left-6 z-30 w-60 cursor-default rounded-2xl border bg-white/95 p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-brand-orange flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                    Sincronizado
                  </div>
                </div>
                <p className="text-brand-dark text-[13px] font-black">
                  iFood + WhatsApp + PDV
                </p>
              </motion.div>

              {/* Card 5: INDICADOR PRINCIPAL (Bottom Center - ELEMENTO DE FOCO) */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1.15 }}
                whileHover={{
                  y: -10,
                  scale: 1.18,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="border-brand-blue bg-brand-blue absolute bottom-4 left-1/2 z-50 w-80 -translate-x-1/2 cursor-default rounded-[2rem] border p-7 text-white shadow-[0_40px_80px_-20px_rgba(40,86,183,0.4)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/60">
                    <BarChart3 className="h-5 w-5" />
                    <span className="text-[11px] font-bold tracking-widest uppercase">
                      Indicadores da operação
                    </span>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-white/30" />
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-[14px] font-medium text-white/70">
                      Ticket Médio
                    </span>
                    <span className="text-[18px] font-black tracking-tight">
                      R$ 62,40
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium text-white/70">
                      Conversão de pedidos
                    </span>
                    <div className="flex flex-col items-end">
                      <span className="text-[18px] font-black tracking-tight">
                        28.4%
                      </span>
                      <span className="text-[10px] leading-none font-bold text-emerald-400">
                        +4.2% mês
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Benefits (cards) */}
        <div className="relative z-10 mt-16 lg:mt-20">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-[640px]">
              <h2 className="text-brand-dark text-[26px] leading-tight font-extrabold sm:text-3xl">
                O que está incluso no seu plano
              </h2>
              <p className="text-brand-dark/60 mt-3 text-[15px] leading-relaxed">
                Experiência consistente para você crescer com previsibilidade.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BENEFITS.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="relative z-10 mt-16 lg:mt-24">
          <div className="mb-16 flex flex-col items-center">
            <div className="mb-10 max-w-[720px] text-center">
              <h2 className="text-brand-dark text-[32px] leading-tight font-extrabold sm:text-4xl">
                Escolha seu plano
              </h2>
              <p className="text-brand-dark/60 mt-4 text-[17px] leading-relaxed">
                Comece com o que você precisa hoje e evolua quando fizer sentido
                para o seu negócio.
              </p>
            </div>

            <div className="border-brand-blue/10 inline-flex rounded-full border bg-white p-1 shadow-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  'rounded-full px-10 py-3 text-[14px] font-black transition-all duration-300',
                  !isAnnual
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'text-brand-dark/40 hover:text-brand-dark/60'
                )}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  'relative rounded-full px-10 py-3 text-[14px] font-black transition-all duration-300',
                  isAnnual
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'text-brand-dark/40 hover:text-brand-dark/60'
                )}
              >
                Anual
                <span className="bg-brand-orange shadow-brand-orange/20 absolute -top-3 -right-6 animate-bounce rounded-full px-2.5 py-1 text-[10px] font-black text-white shadow-lg">
                  ECONOMIZE 20%
                </span>
              </button>
            </div>

            <AnimatePresence>
              {isAnnual && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-brand-blue mt-6 flex items-center gap-2 text-[14px] font-bold"
                >
                  <Sparkles className="fill-brand-blue/20 text-brand-blue h-4 w-4" />
                  Garantia de melhor custo-benefício
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} isAnnual={isAnnual} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-14 lg:mt-24">
          <div className="border-brand-blue/20 bg-brand-blue relative overflow-hidden rounded-[3rem] border p-8 shadow-[0_32px_64px_-16px_rgba(40,86,183,0.3)] lg:p-14">
            {/* Background Decorative Elements */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="bg-brand-orange/20 absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[580px]">
                <h3 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-4xl">
                  Pronto para transformar sua operação?
                </h3>
                <p className="mt-5 text-[17px] leading-relaxed font-medium text-white/80">
                  Fale com a nossa equipe de especialistas e descubra como o
                  Teloos pode impulsionar seu crescimento com controle total.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:text-brand-blue h-15 rounded-full border-white px-8 font-black text-white shadow-lg backdrop-blur-md transition-all hover:bg-white"
                >
                  <Link href="/contato">Falar com consultor</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-brand-blue h-15 rounded-full bg-white px-10 font-black shadow-2xl shadow-black/20 transition-all hover:scale-[1.05] hover:bg-white/90"
                >
                  <Link href="/demo">Começar agora</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
