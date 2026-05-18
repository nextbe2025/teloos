'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Touchpad,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle2,
  QrCode,
  Monitor,
  Users,
} from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/layout/site-header'

const FEATURES = [
  {
    title: 'Totens de Autoatendimento',
    description:
      'Reduza filas e aumente o ticket médio com totens intuitivos e rápidos.',
    icon: Monitor,
  },
  {
    title: 'Cardápio Digital QR Code',
    description:
      'O cliente pede e paga direto da mesa, sem precisar chamar o garçom.',
    icon: QrCode,
  },
  {
    title: 'Pagamento Integrado',
    description:
      'Receba via PIX ou Cartão direto no terminal, com conciliação automática.',
    icon: Zap,
  },
  {
    title: 'Redução de Custos',
    description:
      'Otimize sua equipe e foque no que importa: a qualidade do produto.',
    icon: Users,
  },
  {
    title: 'Agilidade Superior',
    description:
      'Pedidos enviados direto para a cozinha (KDS) assim que confirmados.',
    icon: Clock,
  },
  {
    title: 'Interface Customizável',
    description:
      'Deixe o cardápio com a cara da sua marca, fotos atraentes e descrições.',
    icon: Touchpad,
  },
]

export default function AutoatendimentoPage() {
  useEffect(() => {
    document.title = 'Autoatendimento | Totem e Cardápio Digital | Teloos'
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4F6FB]">
      <SiteHeader />

      {/* Background Orbs */}
      <div className="bg-brand-blue/5 absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-[120px]" />
      <div className="bg-brand-orange/5 absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[120px]" />

      {/* Hero Section */}
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-brand-blue/10 text-brand-blue mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold"
              >
                <Touchpad className="mr-2 h-4 w-4" />
                Autoatendimento / Totem
              </motion.div>
              <h1 className="text-brand-dark text-4xl leading-[1.1] font-black sm:text-5xl lg:text-6xl">
                Mais agilidade, <br />
                <span className="text-brand-blue">menos filas</span> e <br />
                maior lucro.
              </h1>
              <p className="text-brand-dark/70 mt-6 max-w-xl text-lg leading-relaxed font-medium">
                Modernize seu restaurante com soluções de autoatendimento que
                encantam o cliente e otimizam sua operação de ponta a ponta.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-14 w-full rounded-full px-10 font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
                >
                  <Link href="/contato">
                    Falar com especialista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 overflow-hidden rounded-[2.5rem] border-[8px] border-white bg-white shadow-2xl"
              >
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
                      Início ×
                    </div>
                    <div className="flex items-center gap-1 rounded border border-orange-200 bg-orange-50 px-2 py-0.5 text-[8px] font-semibold whitespace-nowrap text-orange-600">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                      Autoatendimento ×
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[11px] font-bold text-gray-700">
                        Totem — Pedido #0147
                      </h4>
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-[7px] font-bold text-green-600">
                        EM ANDAMENTO
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {[
                        { label: 'Lanches', active: false },
                        { label: 'Combos', active: true },
                        { label: 'Bebidas', active: false },
                        { label: 'Extras', active: false },
                      ].map((cat) => (
                        <div
                          key={cat.label}
                          className={`rounded-full px-2.5 py-1 text-[7px] font-bold whitespace-nowrap ${
                            cat.active
                              ? 'bg-orange-500 text-white'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {cat.label}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          name: 'X-Burguer',
                          price: 'R$ 24,90',
                          color: 'bg-amber-100',
                          border: 'border-amber-200',
                          badge: false,
                        },
                        {
                          name: 'X-Bacon',
                          price: 'R$ 29,90',
                          color: 'bg-red-100',
                          border: 'border-red-200',
                          badge: false,
                        },
                        {
                          name: 'Combo Duplo',
                          price: 'R$ 39,90',
                          color: 'bg-orange-100',
                          border: 'border-orange-200',
                          badge: true,
                        },
                        {
                          name: 'X-Veggie',
                          price: 'R$ 22,90',
                          color: 'bg-green-100',
                          border: 'border-green-200',
                          badge: false,
                        },
                        {
                          name: 'X-Frango',
                          price: 'R$ 26,90',
                          color: 'bg-yellow-100',
                          border: 'border-yellow-200',
                          badge: false,
                        },
                        {
                          name: 'Smash Cheddar',
                          price: 'R$ 32,90',
                          color: 'bg-purple-100',
                          border: 'border-purple-200',
                          badge: false,
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`relative overflow-hidden rounded-xl border ${item.border} bg-white`}
                        >
                          <div className={`${item.color} h-10 w-full`} />
                          {item.badge && (
                            <div className="absolute top-1 left-1 rounded-sm bg-orange-500 px-1 py-0.5 text-[5px] font-black text-white">
                              + PEDIDO
                            </div>
                          )}
                          <div className="p-1.5">
                            <p className="text-[7px] leading-tight font-bold text-gray-700">
                              {item.name}
                            </p>
                            <p className="text-[8px] font-black text-orange-500">
                              {item.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-orange-500 px-3 py-1.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
                          <span className="text-[7px] font-black text-orange-500">
                            2
                          </span>
                        </div>
                        <span className="text-[7px] font-bold text-white">
                          Itens no pedido
                        </span>
                      </div>
                      <span className="text-[9px] font-black text-white">
                        R$ 54,80 →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-10 -right-6 z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl"
              >
                <div className="rounded-xl bg-green-100 p-2 text-green-600">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">
                    TICKET MÉDIO
                  </p>
                  <p className="text-brand-dark text-lg font-black">
                    +25% de aumento
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl"
              >
                <div className="text-brand-orange rounded-xl bg-orange-100 p-2">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">FILAS</p>
                  <p className="text-brand-dark text-lg font-black">
                    Redução drástica
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="relative z-10 border-y border-slate-100 bg-white py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                label: 'Autoatendimento',
                desc: 'Totens robustos e intuitivos para qualquer fluxo.',
              },
              {
                label: 'Independência',
                desc: 'Seu cliente decide quando e como pedir.',
              },
              {
                label: 'Eficiência',
                desc: 'Menos erros de anotação, mais velocidade na cozinha.',
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

      {/* Features Grid */}
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
              Inovação que <br className="hidden md:block" />
              <span className="text-brand-blue">transforma a experiência.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* New Section: Sincronização e Gestão Centralizada */}
      <Section className="relative z-10 overflow-hidden bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-dark text-4xl leading-tight font-black sm:text-5xl">
                Tudo em um só lugar: <br />
                <span className="text-brand-blue">
                  O fim das filas e dos erros.
                </span>
              </h2>
              <p className="text-brand-dark/70 mt-8 text-lg leading-relaxed font-medium">
                Centralize o autoatendimento. Garanta que pedidos feitos no
                totem ou via QR Code caiam direto na cozinha e no seu PDV, sem
                intermediários e com sincronização total de estoque.
              </p>

              <ul className="mt-10 space-y-5">
                {[
                  'Pedidos via Totem e QR Code direto no KDS',
                  'Interface intuitiva que dispensa treinamento',
                  'Pagamento integrado com conciliação automática',
                  'Sincronização de produtos e preços em tempo real',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-brand-dark flex items-center gap-4 pl-1 font-bold"
                  >
                    <div className="bg-brand-blue/10 text-brand-blue flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 rounded-full px-10 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Saiba mais sobre a integração
                </Button>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 overflow-hidden rounded-[3rem] border-8 border-slate-50 shadow-2xl"
              >
                <div className="aspect-square w-full overflow-hidden bg-[#F8FAFF]">
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
                      Cozinha ×
                    </div>
                    <div className="flex items-center gap-1 rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-[8px] font-semibold whitespace-nowrap text-blue-600">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
                      KDS ×
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[11px] font-bold text-gray-700">
                        KDS — Cozinha
                      </h4>
                      <span className="flex items-center gap-1 text-[7px] font-bold text-green-600">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                        Ao vivo
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          label: 'NOVO',
                          bg: 'bg-red-50',
                          text: 'text-red-600',
                          border: 'border-red-200',
                        },
                        {
                          label: 'PREPARO',
                          bg: 'bg-yellow-50',
                          text: 'text-yellow-700',
                          border: 'border-yellow-200',
                        },
                        {
                          label: 'PRONTO',
                          bg: 'bg-green-50',
                          text: 'text-green-600',
                          border: 'border-green-200',
                        },
                      ].map((col) => (
                        <div
                          key={col.label}
                          className={`rounded-t-lg border-x border-t py-1 text-center text-[7px] font-black tracking-wider ${col.bg} ${col.text} ${col.border}`}
                        >
                          {col.label}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col gap-1.5">
                        {[
                          {
                            num: '#047',
                            items: ['X-Burguer x2', 'Batata G'],
                            time: '2min',
                          },
                          { num: '#048', items: ['Combo Duplo'], time: '1min' },
                          {
                            num: '#049',
                            items: ['X-Bacon x1'],
                            time: '< 1min',
                          },
                        ].map((o) => (
                          <div
                            key={o.num}
                            className="rounded-xl border border-red-200 bg-red-50 p-2"
                          >
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-[8px] font-black text-red-600">
                                {o.num}
                              </span>
                              <span className="text-[6px] text-red-400">
                                {o.time}
                              </span>
                            </div>
                            {o.items.map((orderItem, j) => (
                              <p key={j} className="text-[6.5px] text-gray-500">
                                {orderItem}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {[
                          {
                            num: '#044',
                            items: ['X-Bacon x1', 'Suco Lj x2'],
                            time: '8min',
                          },
                          {
                            num: '#045',
                            items: ['Combo Fml', 'Refri x1'],
                            time: '6min',
                          },
                          { num: '#046', items: ['X-Frango x2'], time: '4min' },
                        ].map((o) => (
                          <div
                            key={o.num}
                            className="rounded-xl border border-yellow-200 bg-yellow-50 p-2"
                          >
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-[8px] font-black text-yellow-700">
                                {o.num}
                              </span>
                              <span className="text-[6px] text-yellow-500">
                                {o.time}
                              </span>
                            </div>
                            {o.items.map((orderItem, j) => (
                              <p key={j} className="text-[6.5px] text-gray-500">
                                {orderItem}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {[
                          {
                            num: '#041',
                            items: ['X-Burguer x2'],
                            time: '12min',
                          },
                          {
                            num: '#042',
                            items: ['Smash Chd', 'Açaí M'],
                            time: '11min',
                          },
                          { num: '#043', items: ['Combo Dbr'], time: '10min' },
                        ].map((o) => (
                          <div
                            key={o.num}
                            className="rounded-xl border border-green-200 bg-green-50 p-2"
                          >
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-[8px] font-black text-green-700">
                                {o.num}
                              </span>
                              <span className="text-[6px] text-green-500">
                                {o.time}
                              </span>
                            </div>
                            {o.items.map((orderItem, j) => (
                              <p key={j} className="text-[6.5px] text-gray-500">
                                {orderItem}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-1.5 shadow-sm">
                      <span className="text-[7px] text-gray-400">
                        9 pedidos em aberto
                      </span>
                      <div className="flex gap-3 text-[7px]">
                        <span className="text-red-500">3 novos</span>
                        <span className="text-yellow-600">3 preparo</span>
                        <span className="text-green-600">3 prontos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="bg-brand-blue/10 absolute -top-12 -right-12 h-64 w-64 rounded-full blur-3xl" />
              <div className="bg-brand-orange/5 absolute -bottom-12 -left-12 h-64 w-64 rounded-full blur-3xl" />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative z-10 bg-white py-24">
        <Container>
          <div className="bg-brand-dark relative overflow-hidden rounded-[3rem] px-8 py-16 text-center shadow-2xl sm:px-16">
            <div className="bg-brand-blue/20 absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]" />
            <div className="bg-brand-orange/20 absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full blur-[80px]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Pronto para eliminar as <br className="hidden md:block" />
                <span className="text-brand-blue">filas do seu negócio?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-white/70">
                Junte-se a centenas de restaurantes que já modernizaram seu
                atendimento com a Teloos.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 shadow-brand-orange/20 h-14 w-full rounded-full px-12 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
                >
                  Quero começar agora
                </Button>
                <Link href="/precos" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:text-brand-dark h-14 w-full rounded-full border-white bg-transparent px-12 text-base font-bold text-white transition-all hover:scale-105 hover:bg-white active:scale-95 sm:w-auto"
                  >
                    Ver planos
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
