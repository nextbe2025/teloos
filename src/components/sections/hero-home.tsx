'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6FB] py-32 lg:py-52">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          {/* Lado Esquerdo: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-[620px]"
          >
            <h1 className="text-brand-dark mb-7 text-[40px] leading-[1.15] tracking-tight sm:text-5xl lg:text-[52px] xl:text-[58px]">
              <span className="font-normal">transformando negócios </span>
              <span className="font-bold">f</span>
              <Image
                src="/brand/teloos-symbol.png"
                alt=""
                aria-hidden="true"
                width={969}
                height={594}
                className="mx-[0.06em] inline-block h-[0.7em] w-auto translate-y-[-0.06em]"
              />
              <span className="font-bold">d</span>
              <span className="font-normal"> em </span>
              <br className="hidden xl:block" />
              <span className="text-brand-blue font-bold">receitas</span>
              <span className="font-normal"> de </span>
              <span className="text-brand-blue font-bold">grande sucesso!</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-dark/60 mb-10 max-w-[480px] text-[17px] leading-relaxed"
            >
              Conecte pedidos, atendimento e operação em uma única plataforma
              inteligente que integra software e hardware de ponta a ponta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 shadow-brand-orange/20 h-12 rounded-full px-8 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
              >
                <Link href="/contato">
                  Solicitar demonstração
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-blue/25 text-brand-blue hover:bg-brand-blue/5 h-12 rounded-full px-8 text-sm transition-all hover:scale-105"
              >
                <Link href="#solucoes">Ver soluções</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Lado Direito: Imagem do Sistema */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[580px]">
              {/* Sombra base */}
              <div className="bg-brand-blue/5 invisible absolute -inset-10 rounded-3xl blur-3xl" />

              <div className="shadow-brand-dark/10 relative overflow-hidden rounded-[2.5rem] border border-gray-200/80 bg-white shadow-2xl">
                {/* Simulador de Browser */}
                <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-6 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-3 flex h-6 flex-1 items-center rounded-md border border-gray-200 bg-white px-3">
                    <span className="text-[11px] text-gray-400">
                      app.teloos.com.br/dashboard
                    </span>
                  </div>
                </div>

                {/* Dashboard Real - Visual Premium */}
                <div className="bg-white">
                  {/* App Top Bar */}
                  <div className="flex items-center justify-between bg-[#1a70b0] px-4 py-1.5">
                    <span className="max-w-[55%] truncate text-[8px] font-semibold text-white/80">
                      SABOR & CIA RESTAURANTES | 12.345.678/0001-90
                    </span>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
                        <span className="text-[7px] font-bold text-white">
                          MA
                        </span>
                      </div>
                      <span className="text-[8px] text-white/70">
                        MARKETING
                      </span>
                    </div>
                  </div>

                  <div className="flex h-[394px]">
                    {/* Sidebar */}
                    <div className="bg-brand-dark hidden w-44 shrink-0 flex-col sm:flex">
                      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500">
                          <span className="text-[9px] font-bold text-white">
                            MA
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-white">
                          MARKETING
                        </span>
                      </div>
                      <div className="mx-3 my-2 flex h-6 items-center rounded border border-white/10 bg-white/5 px-2">
                        <span className="text-[9px] text-white/30">
                          Pesquisar...
                        </span>
                      </div>
                      <div className="flex-1 space-y-0.5 px-2">
                        {[
                          { label: 'Dashboards', active: true, badge: false },
                          {
                            label: 'Módulo Cadastros',
                            active: false,
                            badge: false,
                          },
                          {
                            label: 'Módulo Financeiro',
                            active: false,
                            badge: false,
                          },
                          {
                            label: 'Módulo Estoque',
                            active: false,
                            badge: false,
                          },
                          {
                            label: 'Módulo Vendas',
                            active: false,
                            badge: false,
                          },
                          { label: 'Relatórios', active: false, badge: false },
                          {
                            label: 'Configurações',
                            active: false,
                            badge: false,
                          },
                          { label: 'Suporte', active: false, badge: true },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className={cn(
                              'flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[10px] font-medium',
                              item.active
                                ? 'bg-brand-blue text-white'
                                : 'text-white/40'
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={cn(
                                  'h-1.5 w-1.5 shrink-0 rounded-full',
                                  item.active ? 'bg-white' : 'bg-white/20'
                                )}
                              />
                              {item.label}
                            </div>
                            {item.badge && (
                              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-[6px] font-bold text-white">
                                2
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-white/10 px-4 py-2">
                        <span className="text-[8px] text-white/20">
                          Avalie o sistema
                        </span>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 overflow-hidden bg-gray-50/80 p-3">
                      {/* Tab */}
                      <div className="mb-2 flex">
                        <div className="border-brand-blue/30 text-brand-blue flex h-6 items-center gap-1.5 rounded-md border bg-white px-2.5 text-[9px] font-semibold shadow-sm">
                          <span className="bg-brand-blue inline-block h-1.5 w-1.5 rounded-full" />
                          Início
                          <span className="ml-0.5 text-gray-400">×</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-brand-dark text-[12px] font-bold">
                          Visão de Vendas
                        </h3>
                        <div className="bg-brand-blue/10 text-brand-blue flex h-6 items-center gap-1 rounded-lg px-2 text-[8px] font-bold">
                          ✦ Analisar Ontem (IA)
                        </div>
                      </div>

                      {/* 4 Metrics */}
                      <div className="mb-2 grid grid-cols-4 gap-1.5">
                        {[
                          {
                            label: 'Vendas Hoje',
                            value: 'R$ 30,00',
                            sub: '15/05/2026',
                            badge: null,
                            badgeClass: '',
                          },
                          {
                            label: 'Vendas Ontem',
                            value: 'R$ 351,60',
                            sub: '14/05/2026',
                            badge: null,
                            badgeClass: '',
                          },
                          {
                            label: 'Últimos 7 dias',
                            value: 'R$ 524,60',
                            sub: null,
                            badge: '-57.77%',
                            badgeClass: 'bg-red-50 text-red-600',
                          },
                          {
                            label: 'Período',
                            value: 'R$ 1.766,90',
                            sub: null,
                            badge: '+2.83%',
                            badgeClass: 'bg-green-50 text-green-600',
                          },
                        ].map((card, idx) => (
                          <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + idx * 0.08 }}
                            className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm"
                          >
                            <p className="mb-0.5 text-[7px] leading-tight font-medium text-gray-400">
                              {card.label}
                            </p>
                            <p className="text-brand-blue text-[10px] leading-tight font-bold">
                              {card.value}
                            </p>
                            {card.sub && (
                              <p className="mt-0.5 text-[7px] text-gray-300">
                                {card.sub}
                              </p>
                            )}
                            {card.badge && (
                              <span
                                className={cn(
                                  'mt-0.5 inline-block rounded px-1 py-0.5 text-[7px] font-bold',
                                  card.badgeClass
                                )}
                              >
                                {card.badge}
                              </span>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      {/* 2 Charts side by side */}
                      <div className="mb-2 grid grid-cols-2 gap-1.5">
                        {/* Evolução Diária */}
                        <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                          <p className="mb-1 text-[8px] font-medium text-gray-400">
                            Evolução diária – 30 dias
                          </p>
                          <div className="flex h-12 items-end gap-px">
                            {[
                              5, 8, 4, 7, 10, 6, 3, 7, 5, 90, 70, 24, 13, 8, 5,
                              3, 5, 8, 6, 10,
                            ].map((h, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{
                                  duration: 0.7,
                                  delay: 0.7 + i * 0.025,
                                  ease: 'easeOut',
                                }}
                                className={cn(
                                  'flex-1 rounded-t-[1px]',
                                  i === 9
                                    ? 'bg-teal-400'
                                    : i === 10
                                      ? 'bg-teal-300'
                                      : 'bg-teal-200/60'
                                )}
                              />
                            ))}
                          </div>
                          <div className="mt-1 flex justify-between text-[7px] text-gray-300">
                            <span>15/04</span>
                            <span>01/05</span>
                            <span>15/05</span>
                          </div>
                        </div>

                        {/* Evolução Mensal empilhada */}
                        <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                          <p className="mb-1 text-[8px] font-medium text-gray-400">
                            Evolução mensal – 12 meses
                          </p>
                          <div className="flex h-12 items-end gap-px">
                            {(
                              [
                                [5, 10],
                                [8, 12],
                                [10, 15],
                                [12, 18],
                                [5, 7],
                                [3, 5],
                                [30, 50],
                                [25, 45],
                                [35, 55],
                                [40, 55],
                                [35, 50],
                                [20, 35],
                              ] as [number, number][]
                            ).map(([a, b], i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${a + b}%` }}
                                transition={{
                                  duration: 0.7,
                                  delay: 0.8 + i * 0.04,
                                }}
                                className="flex-1 overflow-hidden rounded-t-[1px]"
                              >
                                <div className="flex h-full flex-col">
                                  <div
                                    className="bg-teal-300/70"
                                    style={{ flex: b }}
                                  />
                                  <div
                                    className="bg-brand-blue/60"
                                    style={{ flex: a }}
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          <div className="mt-1 flex justify-between text-[7px] text-gray-300">
                            <span>Jun</span>
                            <span>Set</span>
                            <span>Dez</span>
                            <span>Mar</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom 3 columns */}
                      <div className="grid grid-cols-3 gap-1.5">
                        {/* Top Produtos */}
                        <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                          <p className="mb-1.5 text-[8px] font-bold text-gray-500">
                            10 mais vendidos
                          </p>
                          <div className="space-y-1.5">
                            {[
                              { name: 'Buffet Kg', val: 'R$684' },
                              { name: 'Água Tônica', val: 'R$666' },
                              { name: 'Batata Frita', val: 'R$514' },
                            ].map((p) => (
                              <div
                                key={p.name}
                                className="flex items-center gap-1.5"
                              >
                                <div className="h-5 w-5 shrink-0 rounded bg-gray-100" />
                                <div className="min-w-0 flex-1">
                                  <div className="truncate text-[7px] font-medium text-gray-600">
                                    {p.name}
                                  </div>
                                  <div className="text-[7px] text-gray-400">
                                    {p.val}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Ranking Grupos */}
                        <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                          <p className="mb-1.5 text-[8px] font-bold text-gray-500">
                            Ranking Grupos
                          </p>
                          <div className="space-y-1.5">
                            {[
                              { name: 'Água', pct: 100, val: '270' },
                              { name: 'Lanches', pct: 60, val: '26' },
                              { name: 'Porções', pct: 38, val: '25' },
                              { name: 'Cervejas', pct: 12, val: '12' },
                            ].map((g) => (
                              <div key={g.name}>
                                <div className="mb-0.5 flex justify-between text-[7px]">
                                  <span className="text-gray-600">
                                    {g.name}
                                  </span>
                                  <span className="text-gray-400">{g.val}</span>
                                </div>
                                <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${g.pct}%` }}
                                    transition={{ duration: 0.8, delay: 1.0 }}
                                    className="bg-brand-blue h-full rounded-full"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Visão Geral */}
                        <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                          <p className="mb-1.5 text-[8px] font-bold text-gray-500">
                            Visão Geral
                          </p>
                          <div className="space-y-1">
                            {[
                              {
                                label: 'Vendas/Entregas',
                                value: '87',
                                bg: 'bg-yellow-400',
                              },
                              {
                                label: 'Itens Lançados',
                                value: '366',
                                bg: 'bg-green-500',
                              },
                              {
                                label: 'Pessoas Atend.',
                                value: '562',
                                bg: 'bg-red-400',
                              },
                              {
                                label: 'Ticket Médio',
                                value: 'R$5,93',
                                bg: 'bg-cyan-400',
                              },
                            ].map((item, idx) => (
                              <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: 4 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0 + idx * 0.05 }}
                                className="flex items-center justify-between"
                              >
                                <span className="text-[7px] text-gray-500">
                                  {item.label}
                                </span>
                                <span
                                  className={cn(
                                    'rounded px-1.5 py-0.5 text-[7px] font-bold text-white',
                                    item.bg
                                  )}
                                >
                                  {item.value}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag flutuante */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.5,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
                className="absolute -top-4 -right-4 z-10 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-xl sm:-top-6 sm:-right-6"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-900">
                    +23 pedidos
                  </span>
                  <span className="text-[10px] font-medium text-gray-500">
                    realizados hoje
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elemento Decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="pointer-events-none absolute -bottom-64 -left-72 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/__elementos 100.png"
          alt=""
          width={1200}
          height={1200}
          className="w-[1200px] opacity-[0.06]"
        />
      </motion.div>
    </section>
  )
}
