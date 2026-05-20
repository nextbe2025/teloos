'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Bike,
  CheckCircle2,
  ShoppingBag,
  Globe,
  Store,
  MessageCircle,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/shared'
import { SiteHeader } from '@/components/layout/site-header'

const FEATURES = [
  {
    title: 'Cardápio Digital',
    description:
      'Cardápio online com sua marca e domínio próprio, sem comissão por pedido.',
    icon: Globe,
  },
  {
    title: 'Chatbot no WhatsApp',
    description:
      'Atenda e receba pedidos automaticamente pelo WhatsApp, sem depender de aplicativos de terceiros.',
    icon: MessageCircle,
  },
  {
    title: 'Integração com Apps de Delivery',
    description:
      'Centralize pedidos do iFood e outros apps em um único painel, sem tablets extras.',
    icon: Store,
  },
  {
    title: 'Gestão de Pedidos Integrado',
    description:
      'Acompanhe todos os pedidos em tempo real, do recebimento até a entrega, tudo em um só lugar.',
    icon: Bike,
  },
]

export default function DeliveryVendasPage() {
  useEffect(() => {
    document.title = 'Delivery | App próprio e iFood Integrado | Teloos'
  }, [])

  return (
    <div className="flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F4F6FB] pt-32 pb-20 lg:pt-48">
        <div className="bg-brand-blue/5 pointer-events-none absolute -top-24 left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-brand-blue/10 inline-flex items-center gap-3 rounded-full border bg-white/70 px-4 py-2 backdrop-blur">
                <Bike className="text-brand-blue h-4 w-4" />
                <span className="text-brand-blue text-[13px] font-bold tracking-[0.2em] uppercase">
                  Delivery
                </span>
              </div>

              <h1 className="text-brand-dark mt-8 text-[40px] leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[56px]">
                Seu delivery sem taxas, <span>mais lucro no seu bolso.</span>
              </h1>

              <p className="text-brand-dark/60 mt-8 max-w-[540px] text-lg leading-relaxed">
                Aumente suas vendas online com uma plataforma de delivery
                própria, integrada ao iFood e desenhada para converter mais em
                menos cliques.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-14 w-full rounded-full px-10 text-white shadow-xl transition-all hover:scale-105 active:scale-95 sm:w-auto"
                >
                  <Link href="/contato">Falar com especialista</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="shadow-brand-blue/10 relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F8FAFF]">
                  <div className="flex items-center justify-between bg-[#1a70b0] px-4 py-1.5">
                    <span className="truncate text-[8px] font-semibold text-white/80">
                      SABOR &amp; CIA RESTAURANTES | 12.345.678/0001-90
                    </span>
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500">
                      <span className="text-[5px] font-bold text-white">
                        MA
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 border-b border-gray-200 bg-white px-3 py-1">
                    <div className="rounded px-2 py-0.5 text-[8px] whitespace-nowrap text-gray-400">
                      Dashboard ×
                    </div>
                    <div className="flex items-center gap-1 rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-[8px] font-semibold whitespace-nowrap text-blue-600">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Delivery ×
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[11px] font-bold text-gray-700">
                        Pedidos em Andamento
                      </h4>
                      <span className="flex items-center gap-1 text-[7px] font-bold text-green-600">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                        Loja Aberta
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Hoje', value: 'R$ 4.240', bg: 'bg-blue-500' },
                        { label: 'Pedidos', value: '38', bg: 'bg-green-500' },
                        {
                          label: 'Ticket Médio',
                          value: 'R$ 111,58',
                          bg: 'bg-purple-500',
                        },
                      ].map((tile) => (
                        <div
                          key={tile.label}
                          className={`rounded-lg p-2 text-white ${tile.bg}`}
                        >
                          <div className="text-[6.5px] text-white/80">
                            {tile.label}
                          </div>
                          <div className="text-[9px] leading-tight font-bold">
                            {tile.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
                      {[
                        {
                          num: '#4489',
                          canal: 'iFood',
                          value: 'R$ 142,50',
                          status: 'EM ROTA',
                          statusColor: 'bg-blue-100 text-blue-700',
                        },
                        {
                          num: '#4488',
                          canal: 'Site Próprio',
                          value: 'R$ 89,90',
                          status: 'PREPARO',
                          statusColor: 'bg-yellow-100 text-yellow-700',
                        },
                        {
                          num: '#4487',
                          canal: 'WhatsApp',
                          value: 'R$ 67,00',
                          status: 'ENTREGUE',
                          statusColor: 'bg-green-100 text-green-700',
                        },
                        {
                          num: '#4486',
                          canal: 'iFood',
                          value: 'R$ 198,00',
                          status: 'ENTREGUE',
                          statusColor: 'bg-green-100 text-green-700',
                        },
                      ].map((order, i) => (
                        <div
                          key={order.num}
                          className={`flex items-center justify-between px-3 py-2 ${i > 0 ? 'border-t border-gray-100' : ''}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[8px] font-extrabold text-gray-600">
                              {order.num}
                            </span>
                            <span className="text-[6.5px] text-gray-400">
                              {order.canal}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[8px] font-bold text-gray-700">
                              {order.value}
                            </span>
                            <span
                              className={`rounded-full px-1.5 py-0.5 text-[6px] font-extrabold ${order.statusColor}`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {[
                        { label: 'iFood', pct: 65, color: 'bg-red-400' },
                        {
                          label: 'Site Próprio',
                          pct: 25,
                          color: 'bg-blue-400',
                        },
                        { label: 'WhatsApp', pct: 10, color: 'bg-green-400' },
                      ].map((ch) => (
                        <div key={ch.label} className="flex-1">
                          <div className="mb-0.5 flex justify-between text-[6.5px]">
                            <span className="text-gray-500">{ch.label}</span>
                            <span className="text-gray-400">{ch.pct}%</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-gray-100">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${ch.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8 }}
                              className={`h-full rounded-full ${ch.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notifications Simulation */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -right-4 z-20 hidden w-64 rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-dark text-xs font-extrabold">
                      Novo Pedido!
                    </p>
                    <p className="text-brand-dark/50 text-[10px] font-bold">
                      Mesa 08 • R$ 142,50
                    </p>
                  </div>
                  <span className="text-brand-dark/30 text-[10px] font-bold">
                    agora
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="border-brand-blue/10 absolute -bottom-8 -left-6 z-20 hidden w-72 rounded-2xl border bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-brand-blue flex h-8 w-8 items-center justify-center rounded-full text-white">
                    <Bike className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-dark text-xs font-extrabold">
                      Entregador a caminho
                    </p>
                    <p className="text-brand-dark/50 text-[10px] font-bold">
                      Pedido #4482 • iFood
                    </p>
                  </div>
                  <span className="text-brand-dark/30 text-[10px] font-bold">
                    2min
                  </span>
                </div>
              </motion.div>

              {/* Additional Tags/Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-1/2 -right-12 z-10 hidden items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-lg sm:flex"
              >
                <div className="bg-brand-blue h-2 w-2 animate-pulse rounded-full" />
                <span className="text-brand-dark text-[11px] font-extrabold tracking-wider uppercase">
                  Loja Aberta
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="bg-brand-dark absolute top-1/3 -left-12 z-10 hidden items-center gap-2 rounded-full px-4 py-2 shadow-lg sm:flex"
              >
                <span className="text-[11px] font-extrabold tracking-wider text-white uppercase">
                  iFood On-line
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute -right-8 bottom-1/4 z-10 hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 shadow-lg sm:flex"
              >
                <span className="text-[11px] font-extrabold tracking-wider text-white uppercase">
                  R$ 4.240 hoje
                </span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats/Benefits Section */}
      <Section className="relative z-10 border-y border-slate-50 bg-white py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                label: 'Independência',
                desc: 'Venda no seu canal direto e reduza dependência de terceiros.',
              },
              {
                label: 'Gestão Unificada',
                desc: 'Sincronize pedidos de todos os canais em uma única tela.',
              },
              {
                label: 'Mais Margem',
                desc: 'Elimine comissões por pedido no seu canal de vendas oficial.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                className="group flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors group-hover:text-white"
                >
                  <CheckCircle2 className="h-6 w-6" />
                </motion.div>
                <h3 className="text-brand-dark text-xl font-extrabold">
                  {item.label}
                </h3>
                <p className="text-brand-dark/60 mt-2 font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Main Content/Features grid */}
      <Section
        id="solucoes"
        className="relative z-10 border-b border-slate-100 bg-[#F8FAFC]"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-brand-dark text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Venda onde seu cliente <br className="hidden md:block" />
              <span>está presente.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group hover:border-brand-blue/30 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-brand-dark group-hover:text-brand-blue text-xl font-extrabold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-dark/60 mt-4 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Content Section 1: iFood */}
      <Section className="relative z-10 overflow-hidden bg-white">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#F8FAFF]">
                    <div className="flex items-center justify-between bg-[#1a70b0] px-4 py-1.5">
                      <span className="truncate text-[8px] font-semibold text-white/80">
                        SABOR &amp; CIA RESTAURANTES | 12.345.678/0001-90
                      </span>
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500">
                        <span className="text-[5px] font-bold text-white">
                          MA
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 border-b border-gray-200 bg-white px-3 py-1">
                      <div className="rounded px-2 py-0.5 text-[8px] whitespace-nowrap text-gray-400">
                        Dashboard ×
                      </div>
                      <div className="flex items-center gap-1 rounded border border-red-200 bg-red-50 px-2 py-0.5 text-[8px] font-semibold whitespace-nowrap text-red-600">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                        Integração iFood ×
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 p-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[11px] font-bold text-gray-700">
                          Central de Pedidos
                        </h4>
                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-[7px] font-bold text-red-600">
                          iFood Ativo
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          {
                            label: 'iFood',
                            orders: '22 pedidos',
                            value: 'R$ 2.580',
                            bg: 'bg-red-50',
                            border: 'border-red-200',
                            text: 'text-red-600',
                          },
                          {
                            label: 'Site Próprio',
                            orders: '12 pedidos',
                            value: 'R$ 1.340',
                            bg: 'bg-blue-50',
                            border: 'border-blue-200',
                            text: 'text-blue-600',
                          },
                          {
                            label: 'WhatsApp',
                            orders: '4 pedidos',
                            value: 'R$ 320',
                            bg: 'bg-green-50',
                            border: 'border-green-200',
                            text: 'text-green-600',
                          },
                        ].map((ch) => (
                          <div
                            key={ch.label}
                            className={`rounded-xl border p-2 ${ch.bg} ${ch.border}`}
                          >
                            <div
                              className={`text-[7px] font-extrabold ${ch.text}`}
                            >
                              {ch.label}
                            </div>
                            <div className="mt-0.5 text-[6.5px] text-gray-500">
                              {ch.orders}
                            </div>
                            <div
                              className={`mt-1 text-[8px] font-extrabold ${ch.text}`}
                            >
                              {ch.value}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="mb-1 text-[8px] font-bold text-gray-500">
                          Fila Unificada de Produção
                        </p>
                        <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
                          {[
                            {
                              num: '#4489',
                              canal: 'iFood',
                              items: 'X-Burguer x2, Refri',
                              status: 'NOVO',
                              statusColor: 'bg-red-100 text-red-700',
                            },
                            {
                              num: '#4488',
                              canal: 'Site Próprio',
                              items: 'Combo Duplo x1',
                              status: 'PREPARO',
                              statusColor: 'bg-yellow-100 text-yellow-700',
                            },
                            {
                              num: '#4487',
                              canal: 'iFood',
                              items: 'Pizza P x1, Suco',
                              status: 'PRONTO',
                              statusColor: 'bg-green-100 text-green-700',
                            },
                          ].map((order, i) => (
                            <div
                              key={order.num}
                              className={`flex items-center gap-2 px-3 py-2 ${i > 0 ? 'border-t border-gray-100' : ''}`}
                            >
                              <span className="text-[8px] font-extrabold text-gray-600">
                                {order.num}
                              </span>
                              <span
                                className={`rounded px-1 py-0.5 text-[5.5px] font-bold ${order.canal === 'iFood' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}
                              >
                                {order.canal}
                              </span>
                              <span className="flex-1 truncate text-[6.5px] text-gray-400">
                                {order.items}
                              </span>
                              <span
                                className={`rounded-full px-1.5 py-0.5 text-[6px] font-extrabold ${order.statusColor}`}
                              >
                                {order.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border border-gray-100 bg-white px-3 py-1.5 shadow-sm">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-[8px] text-green-600">
                          ✓
                        </div>
                        <span className="text-[7px] text-gray-500">
                          Sincronizado com PDV e Estoque
                        </span>
                        <span className="ml-auto text-[7px] font-bold text-green-500">
                          Agora
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  }}
                  className="bg-brand-blue absolute -bottom-8 -left-8 flex h-32 w-32 flex-col items-center justify-center rounded-full text-white shadow-xl"
                >
                  <span className="text-2xl font-extrabold">Full</span>
                  <span className="text-center text-[10px] font-bold tracking-widest uppercase">
                    Integração iFood
                  </span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-brand-dark text-3xl font-extrabold sm:text-4xl">
                Tudo em um só lugar: <br />
                Acabe com o caos dos tablets.
              </h2>
              <p className="text-brand-dark/60 mt-6 text-lg leading-relaxed">
                Centralize a operação de delivery. Receba pedidos do iFood e do
                seu site próprio em uma única fila de produção, sincronizada
                direto com seu PDV e estoque.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Sincronização instantânea de status de pedido',
                  'Gestão de cardápio iFood direto no painel Teloos',
                  'Fim dos erros de faturamento e estoque',
                  'Integração com frotas de entrega locais',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-brand-blue h-5 w-5" />
                    <span className="text-brand-dark font-bold">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative z-10 border-t border-slate-100 bg-white py-32">
        <Container>
          <div className="bg-brand-dark relative overflow-hidden rounded-[4rem] px-8 py-20 text-center shadow-2xl sm:px-16">
            <div className="bg-brand-blue/20 absolute top-0 right-0 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
            <div className="bg-brand-blue/20 absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full blur-[100px]" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Sua vitrine online <br className="hidden md:block" />
                <span>espera por você.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white/70">
                Comece a vender agora pelo seu canal oficial e aumente a
                rentabilidade do seu restaurante.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-16 w-full rounded-full px-12 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
                >
                  <Link href="/contato">Solicitar Demonstração</Link>
                </Button>
                <Link href="/contato" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:text-brand-dark h-16 w-full rounded-full border-white bg-transparent px-12 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-white active:scale-95 sm:w-auto"
                  >
                    Falar com consultor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
