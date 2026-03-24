'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Zap, ArrowUpRight, TrendingDown, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  label: string
  value: string
  change: string
  isPositive?: boolean
}

function MetricCard({
  label,
  value,
  change,
  isPositive = true,
}: MetricCardProps) {
  return (
    <div className="cursor-default rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <p className="text-brand-dark/40 text-[12px] font-medium tracking-wider uppercase">
        {label}
      </p>
      <p className="text-brand-dark mt-1 text-xl font-bold">{value}</p>
      <div
        className={cn(
          'mt-2 flex items-center gap-1 text-[11px] font-bold',
          isPositive ? 'text-emerald-500' : 'text-rose-500'
        )}
      >
        {isPositive ? <ArrowUpRight size={12} /> : <TrendingDown size={12} />}
        {change}
      </div>
    </div>
  )
}

export function AnalyticsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6FB] py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[450px_1fr] lg:items-center">
          {/* COLUNA ESQUERDA: CONTEÚDO E ESTRATÉGIA */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue mb-4 inline-block text-[13px] font-bold tracking-[0.2em] uppercase"
            >
              ANALYTICS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-dark mb-6 text-[34px] leading-[1.1] font-extrabold sm:text-[42px] lg:text-[48px]"
            >
              Aumente seu faturamento com{' '}
              <span className="text-brand-blue">decisões em tempo real</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-dark/50 mb-10 text-[17px] leading-relaxed"
            >
              Acompanhe faturamento, ticket médio, produtos mais vendidos e
              desempenho da equipe em um único painel, atualizado ao vivo para
              você agir rápido e crescer com mais segurança.
            </motion.p>

            {/* Micro-benefícios */}
            <div className="mb-10 space-y-6">
              {[
                {
                  icon: Zap,
                  text: 'Veja suas vendas acontecendo em tempo real',
                },
                {
                  icon: BarChart3,
                  text: 'Compare resultados e identifique oportunidades',
                },
                {
                  icon: Users,
                  text: 'Descubra quem performa mais e otimize sua equipe',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="group flex items-center gap-4"
                >
                  <div className="bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:text-white">
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-brand-dark/70 group-hover:text-brand-dark text-[15px] font-bold transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="bg-brand-dark/5 mb-10 h-px w-full" />

            {/* Indicadores de Resultado */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-brand-blue text-2xl font-black">↑ 23%</div>
                <p className="text-brand-dark/40 mt-1 text-[13px] leading-snug font-medium">
                  Mais faturamento com decisões baseadas em dados
                </p>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-500">
                  ↓ 40%
                </div>
                <p className="text-brand-dark/40 mt-1 text-[13px] leading-snug font-medium">
                  Menos erros com processos monitorados em tempo real
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <button className="group text-brand-blue flex cursor-pointer items-center gap-2 text-[15px] font-bold transition-all hover:gap-3">
                Ver dashboard em funcionamento
                <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* COLUNA DIREITA: DASHBOARD VISUAL PREMIUM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Window Container */}
            <div className="rounded-[2.5rem] bg-white p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <div className="overflow-hidden rounded-[2rem] bg-[#F8FAFF]">
                {/* Header do Mockup */}
                <div className="flex items-center justify-between border-b border-gray-100 bg-white px-8 py-5">
                  <div className="flex items-center gap-6">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                    </div>
                    <nav className="hidden items-center gap-6 md:flex">
                      {['Visão Geral', 'Vendas', 'Produtos', 'Equipe'].map(
                        (item, idx) => (
                          <span
                            key={item}
                            className={cn(
                              'cursor-pointer text-[13px] font-bold transition-colors',
                              idx === 0
                                ? 'text-brand-blue'
                                : 'text-brand-dark/30 hover:text-brand-dark/60'
                            )}
                          >
                            {item}
                          </span>
                        )
                      )}
                    </nav>
                  </div>

                  {/* Status Ao Vivo */}
                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-black tracking-wider text-emerald-600 uppercase">
                      Ao Vivo
                    </span>
                  </div>
                </div>

                {/* Grid de Métricas do Dashboard */}
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <MetricCard
                      label="Faturamento"
                      value="R$ 48.920"
                      change="+12%"
                    />
                    <MetricCard label="Pedidos" value="612" change="+8%" />
                    <MetricCard
                      label="Ticket Médio"
                      value="R$ 79,90"
                      change="+4%"
                    />
                    <MetricCard label="Clientes" value="384" change="+15%" />
                  </div>

                  {/* Área do Gráfico Principal */}
                  <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="mb-8 flex items-end justify-between">
                      <div>
                        <h4 className="text-brand-dark text-[14px] font-bold">
                          Faturamento diário
                        </h4>
                        <p className="text-brand-dark/40 text-[12px] font-medium">
                          Últimas 12 semanas
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-brand-blue h-2 w-2 rounded-full" />
                          <span className="text-brand-dark/40 text-[11px] font-bold uppercase">
                            Atual
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-gray-200" />
                          <span className="text-brand-dark/40 text-[11px] font-bold uppercase">
                            Anterior
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Simulação Visual de Gráfico de Área */}
                    <div className="relative h-48 w-full">
                      <svg
                        viewBox="0 0 400 100"
                        className="h-full w-full overflow-visible"
                      >
                        <defs>
                          <linearGradient
                            id="chartGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#2563eb"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="100%"
                              stopColor="#2563eb"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        {/* Linha Fundo (Cinza) */}
                        <path
                          d="M0,80 Q50,75 100,85 T200,70 T300,75 T400,65"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                        />
                        {/* Área Blue */}
                        <path
                          d="M0,70 Q50,60 100,75 T200,45 T300,55 T400,30 L400,100 L0,100 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Linha Blue */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: 'easeInOut' }}
                          d="M0,70 Q50,60 100,75 T200,45 T300,55 T400,30"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Cursor/Hotspot simulação */}
                        <circle
                          cx="200"
                          cy="45"
                          r="5"
                          fill="#2563eb"
                          className="animate-pulse shadow-lg"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Indicadores Inferiores por Categoria */}
                  <div className="mt-8 grid grid-cols-3 gap-6">
                    {[
                      {
                        label: 'Hambúrgueres',
                        value: '82%',
                        color: 'bg-brand-blue',
                      },
                      {
                        label: 'Bebidas',
                        value: '61%',
                        color: 'bg-emerald-500',
                      },
                      {
                        label: 'Sobremesas',
                        value: '44%',
                        color: 'bg-brand-orange text-white',
                      },
                    ].map((cat) => (
                      <div key={cat.label}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-brand-dark/50 text-[11px] font-bold tracking-tight uppercase">
                            {cat.label}
                          </span>
                          <span className="text-brand-dark text-[11px] font-black">
                            {cat.value}
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: cat.value }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={cn('h-full rounded-full', cat.color)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos Decorativos de Fundo */}
            <div className="bg-brand-blue/5 absolute -top-8 -right-8 -z-10 h-64 w-64 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
