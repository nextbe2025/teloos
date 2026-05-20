'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  UtensilsCrossed,
  CheckCircle2,
  LayoutDashboard,
  Smartphone,
  Zap,
  CreditCard,
  Store,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/shared'
import { SiteHeader } from '@/components/layout/site-header'

const FEATURES = [
  {
    title: 'Gestão de Mesas',
    description:
      'Visualize o status de todas as mesas em tempo real com atualização instantânea.',
    icon: LayoutDashboard,
  },
  {
    title: 'Garçom Digital',
    description:
      'Garçons lançam pedidos direto da mesa via tablet, reduzindo erros e agilizando o atendimento.',
    icon: Smartphone,
  },
  {
    title: 'KDS',
    description:
      'Monitore a produção da cozinha por ordem de chegada, tempo de preparo e status em tempo real.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Balcão',
    description:
      'Atendimento rápido no balcão com PDV otimizado para pedidos de alto volume.',
    icon: Store,
  },
  {
    title: 'Smart POS',
    description:
      'Terminal de ponto de venda moderno com pagamentos integrados e fechamento de caixa automático.',
    icon: CreditCard,
  },
]

export default function OperacaoAtendimentoPage() {
  useEffect(() => {
    document.title = 'PDV e Mesas | Comandas, KDS e Gestão de Mesas | Teloos'
  }, [])

  return (
    <div className="relative flex flex-col">
      <SiteHeader />

      {/* Background Decorative Elements - Global for Page */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="bg-brand-blue/5 absolute -top-24 -right-24 h-[600px] w-[600px] rounded-full blur-[120px]" />
        <div className="bg-brand-orange/5 absolute top-1/2 -left-48 h-[500px] w-[500px] rounded-full blur-[100px]" />
        <div className="bg-brand-blue/5 absolute right-1/4 -bottom-24 h-[400px] w-[400px] rounded-full blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48">
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-brand-blue/10 inline-flex items-center gap-3 rounded-full border bg-white/70 px-4 py-2 backdrop-blur">
                <UtensilsCrossed className="text-brand-blue h-4 w-4" />
                <span className="text-brand-blue text-[13px] font-bold tracking-[0.2em] uppercase">
                  PDV e Mesas
                </span>
              </div>

              <h1 className="text-brand-dark mt-8 text-[40px] leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[56px]">
                Agilidade no salão, <br />
                <span>precisão na cozinha.</span>
              </h1>

              <p className="text-brand-dark/60 mt-8 max-w-[540px] text-lg leading-relaxed">
                Transforme a experiência do seu cliente com um ecossistema
                completo de atendimento. Reduza filas, elimine erros de pedido e
                tenha controle total do seu restaurante.
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
                      PDV ×
                    </div>
                    <div className="flex items-center gap-1 rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-[8px] font-semibold whitespace-nowrap text-blue-600">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Mapa de Mesas ×
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[11px] font-bold text-gray-700">
                        Salão Principal
                      </h4>
                      <span className="flex items-center gap-1 text-[7px] font-bold text-green-600">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                        4 garçons ativos
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          label: 'Ocupadas',
                          value: '32 / 48',
                          bg: 'bg-orange-500',
                        },
                        {
                          label: 'Faturamento',
                          value: 'R$ 3.840',
                          bg: 'bg-blue-500',
                        },
                        {
                          label: 'Ticket Médio',
                          value: 'R$ 120',
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
                    <div className="grid grid-cols-6 gap-1.5">
                      {[
                        { num: '01', status: 'ocupada', ticket: 'R$280' },
                        { num: '02', status: 'livre', ticket: '' },
                        { num: '03', status: 'ocupada', ticket: 'R$145' },
                        { num: '04', status: 'ocupada', ticket: 'R$390' },
                        { num: '05', status: 'aguardando', ticket: '' },
                        { num: '06', status: 'livre', ticket: '' },
                        { num: '07', status: 'ocupada', ticket: 'R$88' },
                        { num: '08', status: 'ocupada', ticket: 'R$220' },
                        { num: '09', status: 'livre', ticket: '' },
                        { num: '10', status: 'ocupada', ticket: 'R$445' },
                        { num: '11', status: 'aguardando', ticket: '' },
                        { num: '12', status: 'ocupada', ticket: 'R$62' },
                      ].map((table) => (
                        <div
                          key={table.num}
                          className={`rounded-lg p-1.5 text-center ${
                            table.status === 'ocupada'
                              ? 'border border-orange-200 bg-orange-100'
                              : table.status === 'aguardando'
                                ? 'border border-yellow-200 bg-yellow-100'
                                : 'border border-green-200 bg-green-50'
                          }`}
                        >
                          <div
                            className={`text-[8px] font-black ${
                              table.status === 'ocupada'
                                ? 'text-orange-700'
                                : table.status === 'aguardando'
                                  ? 'text-yellow-700'
                                  : 'text-green-600'
                            }`}
                          >
                            {table.num}
                          </div>
                          <div
                            className={`text-[5.5px] leading-tight ${
                              table.status === 'ocupada'
                                ? 'text-gray-500'
                                : table.status === 'aguardando'
                                  ? 'text-yellow-600'
                                  : 'text-green-500'
                            }`}
                          >
                            {table.ticket ||
                              (table.status === 'aguardando'
                                ? 'Aguard.'
                                : 'Livre')}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4 text-[6.5px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <span className="inline-block h-2 w-2 rounded-sm bg-orange-200" />
                        Ocupada
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="inline-block h-2 w-2 rounded-sm bg-yellow-200" />
                        Aguardando
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="inline-block h-2 w-2 rounded-sm bg-green-100" />
                        Livre
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notifications Simulation */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -right-4 z-20 hidden w-64 rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-brand-blue flex h-8 w-8 items-center justify-center rounded-full text-white">
                    <UtensilsCrossed className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-dark text-xs font-black">
                      Pedido Confirmado
                    </p>
                    <p className="text-brand-dark/50 text-[10px] font-bold">
                      Mesa 12 • 3 itens
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
                className="absolute -bottom-8 -left-6 z-20 hidden w-72 rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-dark text-xs font-black">
                      Conta Fechada!
                    </p>
                    <p className="text-brand-dark/50 text-[10px] font-bold">
                      Mesa 05 • Checkout rápido
                    </p>
                  </div>
                  <span className="text-brand-dark/30 text-[10px] font-bold">
                    1min
                  </span>
                </div>
              </motion.div>

              {/* Additional Tags/Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="bg-brand-blue absolute top-1/2 -left-12 z-10 hidden items-center gap-2 rounded-full px-4 py-2 shadow-lg sm:flex"
              >
                <span className="text-[11px] font-black tracking-wider text-white uppercase">
                  Garçons: 4 ON
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute top-1/4 -right-12 z-10 hidden items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-lg sm:flex"
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                <span className="text-brand-dark text-[11px] font-black tracking-wider uppercase">
                  Cozinha a Mil
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="bg-brand-dark absolute -right-8 bottom-1/3 z-10 hidden items-center gap-2 rounded-full px-4 py-2 shadow-lg sm:flex"
              >
                <span className="text-[11px] font-black tracking-wider text-white uppercase">
                  32 Mesas Ocupadas
                </span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats/Benefits Section */}
      <Section className="relative z-10 border-y border-slate-50 bg-white/40 py-20 backdrop-blur-[2px]">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                label: 'Zero Erros',
                desc: 'Sincronização instantânea entre salão e cozinha.',
              },
              {
                label: 'Controle Total',
                desc: 'Acompanhe cada pedido em tempo real pelo dashboard.',
              },
              {
                label: 'Escalabilidade',
                desc: 'Pronto para atender desde pequenos bistrôs a grandes redes.',
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
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors group-hover:text-white"
                >
                  <CheckCircle2 className="h-6 w-6" />
                </motion.div>
                <h3 className="text-brand-dark text-xl font-black">
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
        id="recursos"
        className="relative z-10 border-b border-slate-100 bg-[#F8FAFC]"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-brand-dark text-3xl font-black sm:text-4xl lg:text-5xl">
              Tudo o que sua operação <br className="hidden md:block" />
              <span>precisa para voar.</span>
            </h2>
          </motion.div>

          {/* Card destaque — primeiro item */}
          {(() => {
            const featured = FEATURES[0]
            const FeaturedIcon = featured.icon
            return (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group hover:border-brand-blue/30 mb-6 flex items-center gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
                  <FeaturedIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-brand-dark group-hover:text-brand-blue text-2xl font-black transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-brand-dark/60 mt-2 text-[15px] leading-relaxed font-medium">
                    {featured.description}
                  </p>
                </div>
              </motion.div>
            )
          })()}

          {/* Grid 2x2 — demais itens */}
          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.slice(1).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group hover:border-brand-blue/30 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-brand-dark group-hover:text-brand-blue text-xl font-black transition-colors">
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

      {/* Content Section 1: KDS */}
      <Section className="relative z-10 overflow-hidden bg-transparent">
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
                <Image
                  src="/images/PDV homem.jpeg"
                  alt="KDS Teloos"
                  width={600}
                  height={500}
                  className="rounded-[2.5rem] shadow-2xl"
                />
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
                  className="bg-brand-blue absolute -top-8 -right-8 flex h-32 w-32 flex-col items-center justify-center rounded-full text-white shadow-xl"
                >
                  <span className="text-2xl font-black">Zero</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Papel na Cozinha
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
              <h2 className="text-brand-dark text-3xl font-black sm:text-4xl">
                Cozinha Digital (KDS): <br />A evolução do seu preparo.
              </h2>
              <p className="text-brand-dark/60 mt-6 text-lg leading-relaxed">
                Diga adeus à confusão dos cupons de papel. Com o KDS da Teloos,
                sua equipe visualiza os pedidos por ordem de chegada, tempo de
                espera e status de preparo.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Redução de desperdício de insumos',
                  'Fim das ordens perdidas ou ilegíveis',
                  'Métricas reais de tempo de produção',
                  'Comunicação direta com o garçom',
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

      {/* Content Section 2: Mesas */}
      <Section className="bg-[#F8FAFC]">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-brand-dark text-3xl font-black sm:text-4xl">
                Mapa de Mesas Visual: <br />
                Sua casa sob controle.
              </h2>
              <p className="text-brand-dark/60 mt-6 text-lg leading-relaxed">
                Saiba exatamente o que está acontecendo em cada mesa. Tempo de
                permanência, ticket médio parcial e status de atendimento de
                forma visual e intuitiva.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-brand-blue mb-4">
                    <LayoutDashboard className="h-8 w-8" />
                  </div>
                  <h4 className="text-brand-dark font-black">
                    Layout Personalizado
                  </h4>
                  <p className="text-brand-dark/50 mt-2 text-sm font-medium">
                    Configure o mapa conforme o salão físico.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-brand-orange mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h4 className="text-brand-dark font-black">
                    Fechamento Ágil
                  </h4>
                  <p className="text-brand-dark/50 mt-2 text-sm font-medium">
                    Divisão de conta e pagamento no PDV em segundos.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/PDV mulher.png"
                alt="Mapa de Mesas Teloos"
                width={600}
                height={500}
                className="rounded-[2.5rem] shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative z-10 bg-white py-32">
        <Container>
          <div className="bg-brand-dark relative overflow-hidden rounded-[4rem] px-8 py-20 text-center shadow-2xl sm:px-16">
            <div className="bg-brand-blue/20 absolute top-0 right-0 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
            <div className="bg-brand-orange/20 absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full blur-[100px]" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                Pronto para revolucionar <br className="hidden md:block" />
                <span>sua operação?</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white/70">
                Junte-se a centenas de restaurantes que já otimizaram seus
                processos com o Teloos.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 shadow-brand-orange/20 h-16 w-full rounded-full px-12 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
                >
                  <Link href="/contato">Começar agora</Link>
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
