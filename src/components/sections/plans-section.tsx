'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  Crown,
  Sparkles,
  LayoutDashboard,
  Zap,
  BarChart3,
  TrendingUp,
  AlertCircle,
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
  priceCustom?: boolean
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
    id: 'start',
    name: 'START',
    priceMonthly: 'R$ 189,00',
    priceAnnual: 'R$ 160,65',
    description: 'Para começar com controle e organização na rotina.',
    features: [
      '1 PDV',
      'Mesa & Comanda Eletrônica',
      'Delivery base',
      'Integração iFood e outros',
      'Relatórios de Vendas',
      'Estoque',
      '3 usuários',
      'Apoio a implantação em grupo',
      'Suporte via chamado',
    ],
    ctaLabel: 'Quero o START',
  },
  {
    id: 'gestao',
    name: 'GESTÃO',
    priceMonthly: 'R$ 339,00',
    priceAnnual: 'R$ 288,15',
    description: 'Recomendado para operações que querem eficiência total.',
    recommended: true,
    features: [
      '2 PDV Fiscal NFC-E',
      'Mesa & Comanda Eletrônica',
      'Delivery base',
      'Integração iFood e outros',
      'App Lançamento (Garçom) x3',
      'Relatório de Vendas',
      'Relatório Fiscais',
      'Estoque',
      '5 usuários',
      'Implantação dedicada individual',
      'Suporte via chamado e chat',
      'App Dashboards',
    ],
    ctaLabel: 'Começar pelo GESTÃO',
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    priceMonthly: 'R$ 469,00',
    priceAnnual: 'R$ 398,65',
    description: 'Para operações que precisam de escala e controle total.',
    features: [
      '3 PDV Fiscal NFC-E',
      'Mesa & Comanda Eletrônica',
      'Delivery base',
      'Integração iFood e outros',
      'App Lançamento (Garçom) x5',
      'Relatório de Vendas',
      'Relatório Fiscais',
      'Estoque',
      'Financeiro',
      'Fiscal',
      'Notas Fiscais Ilimitadas',
      'Usuários ilimitados',
      'Portal do Contador',
      'Implantação dedicada individual',
      'Suporte via chamado e chat',
      'App Dashboards',
    ],
    ctaLabel: 'Escolher PERFORMANCE',
  },
  {
    id: 'estrategico',
    name: 'ESTRATÉGICO',
    priceMonthly: '',
    priceAnnual: '',
    priceCustom: true,
    description: 'Para redes e operações com múltiplas unidades.',
    features: [
      'PDV Fiscal NFC-E ilimitado',
      'Mesa & Comanda Eletrônica',
      'Delivery URL próprio',
      'Integração iFood e outros',
      'App Lançamento (Garçom) ilimitado',
      'Totem Autoatendimento ilimitado',
      'Tablet na Mesa ilimitado',
      'Etapa de montagem',
      'Controle de produção',
      'Estoque, Financeiro e Fiscal',
      'Relatórios de Vendas',
      'Relatórios Financeiros',
      'Relatórios Fiscais',
      'Relatórios de Estoque',
      'Notas Fiscais ilimitadas',
      'Usuários ilimitados',
      'Portal do Contador',
      'Implantação dedicada individual',
      'Suporte via chamado e chat',
      'Horário estendido de suporte',
      'App Dashboards',
      'Todas as funcionalidades',
      'Customizações',
    ],
    ctaLabel: 'Falar com Comercial',
  },
]

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const isFirst = index === 0

  return (
    <div
      className={cn(
        'group isolation-isolate relative cursor-default overflow-hidden rounded-[2.5rem] border bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]',
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
            <h3 className="text-brand-dark text-[22px] leading-tight font-extrabold tracking-tight">
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
        'group relative flex cursor-default flex-col rounded-[2.5rem] border bg-white transition-all duration-500 will-change-transform',
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
          <span className="bg-brand-blue inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-[11px] font-extrabold tracking-[0.15em] whitespace-nowrap text-white uppercase shadow-xl ring-4 ring-white">
            <Crown className="h-3.5 w-3.5 fill-current" strokeWidth={3} />
            Recomendado
          </span>
        </div>
      )}

      <div className="uppercase-none relative flex h-full flex-col p-10">
        {/* Header: Nome e Descrição */}
        <div className="mb-8">
          <h3 className="text-brand-dark mb-3 text-2xl font-extrabold tracking-tight">
            {plan.name}
          </h3>
          <p className="text-brand-dark/50 min-h-[45px] text-[14px] leading-relaxed font-medium">
            {plan.description}
          </p>
        </div>

        {/* Preço de Destaque (Ajuste de Proporção) */}
        <div className="mb-8">
          {plan.priceCustom ? (
            <div>
              <div className="text-brand-dark text-[28px] leading-tight font-extrabold">
                Falar Comercial
              </div>
              <p className="text-brand-dark/40 mt-2 text-[13px] font-medium">
                Sob consulta
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-brand-dark/30 text-lg font-bold">R$</span>
                <span className="text-brand-dark text-5xl font-extrabold tracking-tight">
                  {currentPrice.replace('R$ ', '').split(',')[0]}
                </span>
                <span className="text-brand-dark/40 text-2xl font-bold">
                  ,{currentPrice.split(',')[1] || '00'}
                </span>
                <span className="text-brand-dark/40 ml-1.5 text-[13px] font-bold lowercase">
                  /mês
                </span>
              </div>
              {isAnnual && (
                <p className="text-brand-dark/40 mt-1.5 text-[12px] font-medium">
                  cobrado anualmente
                </p>
              )}
            </div>
          )}
        </div>

        {/* Botão de Conversão (100% largura) */}
        <div className="mb-10">
          <Button
            asChild
            size="lg"
            className={cn(
              'h-14 w-full rounded-full text-[15px] font-extrabold transition-all duration-300',
              plan.recommended
                ? 'from-brand-blue to-brand-orange shadow-brand-blue/25 border-0 bg-gradient-to-r text-white shadow-lg hover:scale-[1.02] hover:brightness-110'
                : 'bg-brand-dark hover:bg-brand-dark/95 shadow-brand-dark/10 text-white shadow-md'
            )}
          >
            <Link href="/contato">{plan.ctaLabel}</Link>
          </Button>
        </div>

        {/* Lista de Benefícios */}
        <div className="flex-grow space-y-6">
          <p className="text-brand-dark/20 text-[11px] font-extrabold tracking-[0.2em] uppercase">
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
            Sem fidelidade
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function PlansSection() {
  const [isAnnual, setIsAnnual] = useState(false)

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

            <h2 className="text-brand-dark mt-8 text-[40px] leading-[1.15] font-extrabold tracking-tight sm:text-5xl lg:text-[52px] xl:text-[58px]">
              Escolha o plano ideal para crescer com{' '}
              <br className="hidden xl:block" />
              <span>controle e previsibilidade.</span>
            </h2>

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
                <Link href="/contato">Solicitar demonstração</Link>
              </Button>
            </div>
          </div>

          {/* Visual Dashboard - Balanço Resultado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            {/* Card 1: Receita Bruta (top-left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="border-brand-blue/10 absolute -top-4 -left-6 z-30 w-52 cursor-default rounded-2xl border bg-white/95 p-4 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-md"
            >
              <div className="mb-1.5 flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-brand-dark/40 text-[10px] font-bold tracking-wider uppercase">
                  Receita Bruta
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-brand-dark text-[22px] leading-none font-extrabold tracking-tight">
                  R$ 7.786
                </span>
                <span className="text-[11px] font-extrabold text-emerald-500">
                  +22%
                </span>
              </div>
              <p className="text-brand-dark/30 mt-1 text-[10px] font-medium">
                acumulado no ano
              </p>
            </motion.div>

            {/* Card 2: Resultado do Mês (bottom-right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -right-6 -bottom-4 z-30 w-56 cursor-default rounded-2xl bg-slate-900/95 p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider text-white/40 uppercase">
                  Resultado do Mês
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-extrabold text-emerald-400">
                  91.18%
                </span>
              </div>
              <div className="text-[22px] leading-none font-extrabold tracking-tight text-white">
                R$ 7.098
              </div>
              <p className="mt-1 text-[10px] font-medium text-white/30">
                lucratividade no período
              </p>
            </motion.div>

            {/* Card 3: Inadimplentes (middle-right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="border-brand-blue/10 absolute top-1/3 -right-6 z-30 w-48 cursor-default rounded-2xl border bg-white/95 p-4 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] backdrop-blur-md"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <AlertCircle className="h-3.5 w-3.5 text-orange-400" />
                  <span className="text-brand-dark/40 text-[10px] font-bold tracking-wider uppercase">
                    Inadimplentes
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-brand-dark text-[22px] leading-none font-extrabold">
                    4
                  </div>
                  <p className="text-brand-dark/30 mt-0.5 text-[10px] font-medium">
                    clientes
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[14px] font-extrabold text-orange-500">
                    R$ 80,40
                  </div>
                  <p className="text-brand-dark/30 text-[9px] font-medium">
                    em aberto
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mx-4 my-8 rounded-[2.5rem] bg-white p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <div className="overflow-hidden rounded-[2rem] bg-[#F8FAFF]">
                {/* App Top Bar */}
                <div className="flex items-center justify-between bg-[#1a70b0] px-5 py-2">
                  <span className="max-w-[60%] truncate text-[9px] font-semibold text-white/80">
                    SABOR &amp; CIA RESTAURANTES | 12.345.678/0001-90
                  </span>
                  <div className="flex shrink-0 items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
                      <span className="text-[7px] font-bold text-white">
                        MA
                      </span>
                    </div>
                    <span className="text-[9px] text-white/70">MARKETING</span>
                  </div>
                </div>

                {/* Tab Bar */}
                <div className="flex items-center gap-1 border-b border-gray-200 bg-white px-4 py-1.5">
                  {[
                    { label: 'Início', active: false },
                    { label: 'Financeiro', active: false },
                    { label: 'Inadimplentes', active: false },
                    { label: 'Balanço Resultado', active: true },
                  ].map((tab, i) => (
                    <div
                      key={tab.label}
                      className={cn(
                        'flex items-center gap-1 rounded px-2.5 py-1 text-[9px] font-semibold whitespace-nowrap',
                        tab.active
                          ? 'border-brand-blue/30 bg-brand-blue/10 text-brand-blue border'
                          : 'text-gray-400'
                      )}
                    >
                      {tab.active && (
                        <span className="bg-brand-blue inline-block h-1.5 w-1.5 rounded-full" />
                      )}
                      {tab.label}
                      {i > 0 && <span className="ml-0.5 text-gray-300">×</span>}
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-3">
                  <h4 className="text-brand-dark mb-2 text-center text-[12px] font-bold">
                    Relatório de resultados - 2026
                  </h4>

                  {/* Filters */}
                  <div className="mb-2 flex items-center gap-6">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[7px] font-semibold text-gray-400">
                        Ano:
                      </span>
                      <div className="flex items-center gap-1 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[8px] text-gray-600">
                        2026 <span className="text-gray-400">▾</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {[
                        { label: 'Data de Pagamento', checked: true },
                        { label: 'Data de Emissão', checked: false },
                        { label: 'Data de Vencimento', checked: false },
                      ].map((opt) => (
                        <div
                          key={opt.label}
                          className="flex items-center gap-1"
                        >
                          <div
                            className={cn(
                              'h-1.5 w-1.5 rounded-full border',
                              opt.checked
                                ? 'border-brand-blue bg-brand-blue'
                                : 'border-gray-300 bg-white'
                            )}
                          />
                          <span
                            className={cn(
                              'text-[6.5px]',
                              opt.checked
                                ? 'text-brand-blue font-bold'
                                : 'text-gray-400'
                            )}
                          >
                            {opt.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white text-[7px]">
                    <div className="grid grid-cols-[2fr_repeat(5,1fr)_1fr_0.6fr] border-b border-gray-200 bg-gray-50 px-3 py-1">
                      <div className="font-bold text-gray-500">Conta</div>
                      {['Jan', 'Fev', 'Mar', 'Abr', 'Mai'].map((m) => (
                        <div
                          key={m}
                          className="text-center font-bold text-gray-500"
                        >
                          {m}
                        </div>
                      ))}
                      <div className="text-right font-bold text-gray-500">
                        Total
                      </div>
                      <div className="text-right font-bold text-gray-500">
                        %
                      </div>
                    </div>

                    <div className="border-b border-gray-50 bg-gray-50/70 px-3 py-0.5">
                      <span className="font-bold text-gray-600">
                        Faturamento (R$)
                      </span>
                    </div>
                    {[
                      {
                        label: 'Vendas de produtos',
                        vals: [
                          '1732,94',
                          '1318,83',
                          '3335,52',
                          '963,17',
                          '284,03',
                        ],
                        total: '7634,49',
                        pct: '98.05%',
                      },
                      {
                        label: 'Ajuste de caixa',
                        vals: ['0,00', '100,00', '52,00', '0,00', '0,00'],
                        total: '152,00',
                        pct: '1.95%',
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-[2fr_repeat(5,1fr)_1fr_0.6fr] border-b border-gray-50 px-3 py-0.5"
                      >
                        <div className="text-gray-500">{row.label}</div>
                        {row.vals.map((v, i) => (
                          <div
                            key={i}
                            className={cn(
                              'text-center',
                              v === '0,00'
                                ? 'text-gray-300'
                                : 'font-semibold text-green-600'
                            )}
                          >
                            {v}
                          </div>
                        ))}
                        <div className="text-right font-semibold text-green-600">
                          {row.total}
                        </div>
                        <div className="text-right text-green-600">
                          {row.pct}
                        </div>
                      </div>
                    ))}
                    <div className="grid grid-cols-[2fr_repeat(5,1fr)_1fr_0.6fr] border-b border-gray-200 bg-gray-50 px-3 py-1">
                      <div className="font-bold text-gray-700">
                        RECEITA BRUTA (R$)
                      </div>
                      {[
                        '1732,94',
                        '1418,83',
                        '3387,52',
                        '963,17',
                        '284,03',
                      ].map((v, i) => (
                        <div
                          key={i}
                          className="text-center font-bold text-gray-700"
                        >
                          {v}
                        </div>
                      ))}
                      <div className="text-right font-bold text-gray-700">
                        7786,49
                      </div>
                      <div className="text-right text-gray-300">—</div>
                    </div>

                    <div className="border-b border-gray-50 bg-gray-50/70 px-3 py-0.5">
                      <span className="font-bold text-gray-600">
                        Despesas Variáveis (R$)
                      </span>
                    </div>
                    <div className="grid grid-cols-[2fr_repeat(5,1fr)_1fr_0.6fr] border-b border-gray-100 px-3 py-0.5">
                      <div className="text-gray-500">Geração de crédito</div>
                      {['137,80', '24,00', '360,00', '52,00', '0,00'].map(
                        (v, i) => (
                          <div
                            key={i}
                            className={cn(
                              'text-center',
                              v === '0,00'
                                ? 'text-gray-300'
                                : 'font-semibold text-red-500'
                            )}
                          >
                            {v}
                          </div>
                        )
                      )}
                      <div className="text-right font-semibold text-red-500">
                        573,80
                      </div>
                      <div className="text-right text-red-500">83.43%</div>
                    </div>
                    <div className="grid grid-cols-[2fr_repeat(5,1fr)_1fr_0.6fr] border-b border-gray-200 bg-gray-50 px-3 py-1">
                      <div className="font-bold text-gray-700">
                        MARGEM CONTRIBUIÇÃO
                      </div>
                      {[
                        '1517,14',
                        '1394,83',
                        '3003,52',
                        '899,17',
                        '284,03',
                      ].map((v, i) => (
                        <div
                          key={i}
                          className="text-center font-bold text-gray-700"
                        >
                          {v}
                        </div>
                      ))}
                      <div className="text-right font-bold text-gray-700">
                        7098,69
                      </div>
                      <div className="text-right text-gray-300">—</div>
                    </div>

                    <div className="grid grid-cols-[2fr_repeat(5,1fr)_1fr_0.6fr] bg-green-50 px-3 py-1">
                      <div className="font-extrabold text-green-700">
                        RESULTADO MES (R$)
                      </div>
                      {[
                        '1517,14',
                        '1394,83',
                        '3003,52',
                        '899,17',
                        '284,03',
                      ].map((v, i) => (
                        <div
                          key={i}
                          className="text-center font-extrabold text-green-600"
                        >
                          {v}
                        </div>
                      ))}
                      <div className="text-right font-extrabold text-green-600">
                        7098,69
                      </div>
                      <div className="text-right text-gray-300">—</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue/5 absolute -top-8 -right-8 -z-10 h-64 w-64 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          </motion.div>
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
                Escolha o plano ideal <span>de acordo com seu negócio</span>
              </h2>
              <p className="text-brand-dark/60 mt-4 text-[17px] leading-relaxed">
                Sistema completo de gestão para restaurantes, bares, lojas de
                alimentos e delivery com as{' '}
                <strong className="text-brand-dark/80 font-bold">
                  melhores funcionalidades
                </strong>{' '}
                do mercado.
              </p>
            </div>

            <div className="border-brand-blue/10 inline-flex rounded-full border bg-white p-1 shadow-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  'rounded-full px-10 py-3 text-[14px] font-extrabold transition-all duration-300',
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
                  'relative rounded-full px-10 py-3 text-[14px] font-extrabold transition-all duration-300',
                  isAnnual
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'text-brand-dark/40 hover:text-brand-dark/60'
                )}
              >
                Anual
                <span className="bg-brand-orange shadow-brand-orange/20 absolute -top-3 -right-6 animate-bounce rounded-full px-2.5 py-1 text-[10px] font-extrabold text-white shadow-lg">
                  ECONOMIZE 15%
                </span>
              </button>
            </div>

            <div className="mt-4 flex h-8 items-center justify-center">
              <AnimatePresence>
                {isAnnual && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-brand-blue flex items-center gap-2 text-[14px] font-bold"
                  >
                    <Sparkles className="fill-brand-blue/20 text-brand-blue h-4 w-4" />
                    Garantia de melhor custo-benefício
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
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
                <h3 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
                  Pronto para transformar sua operação?
                </h3>
                <p className="mt-5 text-[17px] leading-relaxed font-medium text-white/80">
                  Fale com a nossa equipe de especialistas e descubra como o
                  Teloos pode impulsionar seu crescimento com controle total.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 shadow-brand-orange/20 h-14 rounded-full px-10 font-extrabold text-white shadow-xl transition-all hover:scale-[1.05]"
                >
                  <Link href="/contato">Começar agora</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-full border-white/20 bg-white/10 px-8 font-extrabold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:border-white"
                >
                  <Link href="/contato">Falar com consultor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
