'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Zap, ArrowUpRight, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AnalyticsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6FB] py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[450px_1fr] lg:items-center">
          {/* COLUNA ESQUERDA */}
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
              Aumente seu faturamento com <span>decisões em tempo real</span>
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

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-brand-blue text-2xl font-extrabold">
                  ↑ 23%
                </div>
                <p className="text-brand-dark/40 mt-1 text-[13px] leading-snug font-medium">
                  Mais faturamento com decisões baseadas em dados
                </p>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-emerald-500">
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

          {/* COLUNA DIREITA: DASHBOARD FINANCEIRO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative min-w-0"
          >
            {/* zoom afeta o layout (diferente de transform: scale), então o conteúdo ocupa 72% no mobile sem overflow */}
            <div className="[zoom:0.72] sm:[zoom:unset]">
            <div className="rounded-[2.5rem] bg-white p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
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
                    { label: 'Financeiro', active: true },
                    { label: 'Estoque', active: false },
                    { label: 'Fiscal', active: false },
                  ].map((tab, i) => (
                    <div
                      key={tab.label}
                      className={cn(
                        'flex items-center gap-1 rounded px-2.5 py-1 text-[10px] font-semibold',
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

                {/* Dashboard Content */}
                <div className="p-6">
                  {/* Title */}
                  <div className="mb-5 flex items-center gap-3">
                    <h4 className="text-brand-dark text-[15px] font-bold">
                      Dashboard Financeiro
                    </h4>
                    <span className="rounded border border-gray-200 bg-white px-2 py-0.5 text-[10px] text-gray-500">
                      Ano 2026
                    </span>
                  </div>

                  {/* 4 Colored Metric Tiles */}
                  <div className="mb-6 grid grid-cols-4 gap-3">
                    {[
                      {
                        label: 'Receitas',
                        value: 'R$ 16.633,50',
                        bg: 'bg-green-500',
                        icon: '⊕',
                      },
                      {
                        label: 'Despesas',
                        value: 'R$ 4.517,16',
                        bg: 'bg-red-500',
                        icon: '⊖',
                      },
                      {
                        label: 'Saldo',
                        value: 'R$ 12.116,30',
                        bg: 'bg-teal-500',
                        icon: '≡',
                      },
                      {
                        label: 'Lucratividade',
                        value: '72.84%',
                        bg: 'bg-purple-500',
                        icon: '↗',
                      },
                    ].map((tile, idx) => (
                      <motion.div
                        key={tile.label}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className={cn('rounded-xl p-3 text-white', tile.bg)}
                      >
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-[9px] font-medium text-white/80">
                            {tile.label}
                          </span>
                          <span className="text-[13px] text-white/50">
                            {tile.icon}
                          </span>
                        </div>
                        <div className="text-[12px] leading-tight font-bold">
                          {tile.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Charts Area */}
                  <div className="grid grid-cols-[1fr_200px] gap-4">
                    {/* Entrada x Saída */}
                    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                      <h5 className="text-brand-dark mb-3 text-[12px] font-bold">
                        Entrada x Saída
                      </h5>
                      <div className="flex h-28 items-end gap-3">
                        {[
                          { month: 'Jan', inPct: 60, outPct: 12 },
                          { month: 'Fev', inPct: 60, outPct: 40 },
                          { month: 'Mar', inPct: 100, outPct: 17 },
                          { month: 'Abr', inPct: 58, outPct: 8 },
                          { month: 'Mai', inPct: 32, outPct: 3 },
                        ].map((m) => (
                          <div
                            key={m.month}
                            className="flex flex-1 flex-col items-center"
                          >
                            <div className="flex h-24 w-full items-end gap-0.5">
                              <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${m.inPct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="flex-1 rounded-t-sm bg-green-500"
                              />
                              <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${m.outPct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="flex-1 rounded-t-sm bg-red-400"
                              />
                            </div>
                            <span className="mt-1 text-[9px] text-gray-400">
                              {m.month}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 flex gap-4 text-[9px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                          Entradas
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400" />
                          Saídas
                        </span>
                      </div>
                    </div>

                    {/* Top 5 Receitas + Saídas */}
                    <div className="flex flex-col gap-3">
                      <div className="flex-1 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                        <h5 className="mb-2 text-[10px] font-bold text-gray-500">
                          Top 5 Receitas
                        </h5>
                        <div className="space-y-2">
                          {[
                            {
                              name: 'Vendas de Produtos',
                              pct: 100,
                              val: 'R$16.616',
                            },
                            { name: 'Ajuste de Caixa', pct: 1, val: 'R$52' },
                          ].map((r) => (
                            <div key={r.name}>
                              <div className="mb-0.5 flex justify-between text-[8px]">
                                <span className="max-w-[65%] truncate text-gray-600">
                                  {r.name}
                                </span>
                                <span className="text-gray-400">{r.val}</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${r.pct}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8 }}
                                  className="h-full rounded-full bg-green-500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                        <h5 className="mb-2 text-[10px] font-bold text-gray-500">
                          Top 5 Saídas
                        </h5>
                        <div className="space-y-2">
                          {[
                            {
                              name: 'Geração de Crédito',
                              pct: 100,
                              val: 'R$4.400',
                            },
                            { name: 'Compras/Estoque', pct: 28, val: 'R$117' },
                          ].map((r) => (
                            <div key={r.name}>
                              <div className="mb-0.5 flex justify-between text-[8px]">
                                <span className="max-w-[65%] truncate text-gray-600">
                                  {r.name}
                                </span>
                                <span className="text-gray-400">{r.val}</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${r.pct}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, delay: 0.1 }}
                                  className="h-full rounded-full bg-red-400"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>{/* fecha zoom wrapper */}

            <div className="bg-brand-blue/5 absolute -top-8 -right-8 -z-10 h-64 w-64 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
