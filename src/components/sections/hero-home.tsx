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
            <h1 className="text-brand-dark mb-7 text-[40px] leading-[1.15] font-extrabold tracking-tight sm:text-5xl lg:text-[52px] xl:text-[58px]">
              O ecossistema completo para a <br className="hidden xl:block" />
              <span className="text-brand-blue">
                gestão do seu food service.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-dark/60 mb-10 max-w-[480px] text-[17px] leading-relaxed"
            >
              Conecte pedidos, atendimento e operação em uma única plataforma
              inteligente que integra software e hardware de ponta.
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
                <Link href="/sobre">Ver como funciona</Link>
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
                  <div className="flex h-[420px] sm:h-[420px]">
                    {/* Sidebar */}
                    <div className="bg-brand-dark hidden w-44 shrink-0 flex-col p-4 sm:flex">
                      {/* Logo interna da dashboard */}
                      <div className="mb-6 flex items-center gap-2 px-1">
                        <div className="bg-brand-blue flex h-6 w-6 items-center justify-center rounded-md">
                          <span className="text-[10px] font-bold tracking-tighter text-white">
                            TL
                          </span>
                        </div>
                        <span className="text-xs font-bold text-white">
                          Dashboard
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { label: 'Visão Geral', active: true },
                          { label: 'Pedidos', active: false },
                          { label: 'Mesas', active: false },
                          { label: 'Cardápio', active: false },
                          { label: 'Relatórios', active: false },
                          { label: 'Financeiro', active: false },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className={cn(
                              'flex items-center gap-3 rounded-lg px-3 py-2 text-[11px] font-medium transition-colors',
                              item.active
                                ? 'bg-brand-blue text-white'
                                : 'cursor-pointer text-white/40 hover:bg-white/5 hover:text-white/60'
                            )}
                          >
                            <div
                              className={cn(
                                'h-1.5 w-1.5 rounded-full',
                                item.active ? 'bg-white' : 'bg-white/20'
                              )}
                            />
                            {item.label}
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto border-t border-white/10 pt-4">
                        <div className="flex items-center gap-2 px-2 text-[10px] font-medium tracking-widest text-white/30 uppercase">
                          Unidade 01
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 overflow-hidden bg-gray-50/80 p-4 sm:p-6">
                      <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-brand-dark text-sm font-bold">
                          Resumo do Dia
                        </h3>
                        <div className="bg-brand-blue/10 text-brand-blue flex h-7 w-20 items-center justify-center rounded-lg text-[10px] font-bold uppercase">
                          Ao Vivo
                        </div>
                      </div>

                      {/* Info Cards */}
                      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
                        {[
                          {
                            label: 'Faturamento',
                            value: 'R$ 14.280',
                            color: 'text-brand-blue',
                          },
                          {
                            label: 'Pedidos',
                            value: '158',
                            color: 'text-brand-dark',
                          },
                          {
                            label: 'Estoque Médio',
                            value: 'R$ 4.5k',
                            color: 'text-brand-orange',
                          },
                        ].map((card, idx) => (
                          <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + idx * 0.1 }}
                            className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                          >
                            <p className="mb-1 text-[10px] font-medium text-gray-400">
                              {card.label}
                            </p>
                            <p
                              className={cn('text-base font-bold', card.color)}
                            >
                              {card.value}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Chart Simulation */}
                      <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="flex h-20 items-end gap-1.5">
                          {[35, 45, 30, 60, 85, 40, 55, 95, 75, 50, 65, 80].map(
                            (h, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{
                                  duration: 1,
                                  delay: 0.8 + i * 0.05,
                                  ease: 'easeOut',
                                }}
                                className={cn(
                                  'flex-1 rounded-t-sm transition-all duration-500',
                                  i === 7 ? 'bg-brand-blue' : 'bg-brand-blue/20'
                                )}
                              />
                            )
                          )}
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[10px] font-medium text-gray-300">
                          <span>08:00</span>
                          <span>14:00</span>
                          <span>20:00</span>
                        </div>
                      </div>

                      {/* Recent Activities */}
                      <div className="space-y-3">
                        {[
                          {
                            table: 'Mesa 08',
                            time: 'Há 2 min',
                            status: 'Pedido Enviado',
                            dot: 'bg-green-500',
                          },
                          {
                            table: 'Balcão',
                            time: 'Há 5 min',
                            status: 'Aguardando Pagamento',
                            dot: 'bg-yellow-500',
                          },
                        ].map((row, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + idx * 0.1 }}
                            className="flex items-center justify-between rounded-xl border border-gray-50 bg-white/50 px-4 py-3 text-[11px]"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-brand-dark font-bold">
                                {row.table}
                              </span>
                              <span className="text-gray-400">{row.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div
                                className={cn(
                                  'h-1.5 w-1.5 rounded-full',
                                  row.dot
                                )}
                              />
                              <span className="font-medium text-gray-600">
                                {row.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
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
