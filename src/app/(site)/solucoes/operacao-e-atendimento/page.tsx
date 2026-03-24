'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  UtensilsCrossed,
  CheckCircle2,
  Clock,
  LayoutDashboard,
  Smartphone,
  Zap,
  ArrowRight,
  ShieldCheck,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/shared'
import { SiteHeader } from '@/components/layout/site-header'
import { cn } from '@/lib/utils'

const FEATURES = [
  {
    title: 'PDV Ultra-Rápido',
    description: 'Interface intuitiva desenhada para máxima agilidade no fechamento de contas e lançamento de pedidos.',
    icon: Zap,
  },
  {
    title: 'Gestão de Mesas e Comandas',
    description: 'Mapa de mesas em tempo real com status de ocupação, tempo de permanência e alertas de inatividade.',
    icon: LayoutDashboard,
  },
  {
    title: 'KDS (Cozinha Digital)',
    description: 'Elimine papéis e ruídos. Organize a produção da cozinha por ordem de chegada e tempo de preparo.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Cardápio Digital Integrado',
    description: 'Atualização em tempo real de preços e disponibilidade direto do seu painel administrativo.',
    icon: Smartphone,
  },
  {
    title: 'Atendimento via Tablet',
    description: 'Garçons mais produtivos com lançamentos direto da mesa, reduzindo idas e vindas desnecessárias.',
    icon: Users,
  },
  {
    title: 'Controle de Sangria e Caixa',
    description: 'Segurança total no fechamento do dia com rastreabilidade completa de todas as movimentações.',
    icon: ShieldCheck,
  },
]

export default function OperacaoAtendimentoPage() {
  return (
    <div className="relative flex flex-col">
      <SiteHeader />
      
      {/* Background Decorative Elements - Global for Page */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-[120px]" />
        <div className="absolute top-1/2 -left-48 h-[500px] w-[500px] rounded-full bg-brand-orange/5 blur-[100px]" />
        <div className="absolute -bottom-24 right-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[80px]" />
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
                  Operação & Atendimento
                </span>
              </div>

              <h1 className="text-brand-dark mt-8 text-[40px] leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[56px]">
                Agilidade no salão, <br />
                <span className="text-brand-blue text-glow-blue">precisão na cozinha.</span>
              </h1>

              <p className="text-brand-dark/60 mt-8 max-w-[540px] text-lg leading-relaxed">
                Transforme a experiência do seu cliente com um ecossistema completo de atendimento. Reduza filas, elimine erros de pedido e tenha controle total do seu restaurante.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 h-14 rounded-full px-10 text-white shadow-xl shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  <Link href="/contato">Solicitar Demonstração</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 rounded-full border-brand-blue/20 text-brand-blue px-10 font-bold hover:bg-brand-blue/5 transition-all hover:scale-105 active:scale-95">
                  <Link href="#recursos">Conhecer Recursos</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-slate-200 shadow-2xl shadow-brand-blue/10">
                <Image
                  src="/images/Sistema PDV_image.png"
                  alt="Sistema PDV Teloos"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
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
                    <p className="text-brand-dark text-xs font-black">Pedido Confirmado</p>
                    <p className="text-brand-dark/50 text-[10px] font-bold">Mesa 12 • 3 itens</p>
                  </div>
                  <span className="text-brand-dark/30 text-[10px] font-bold">agora</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-8 -left-6 z-20 hidden w-72 rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500 flex h-8 w-8 items-center justify-center rounded-full text-white">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-dark text-xs font-black">Conta Fechada!</p>
                    <p className="text-brand-dark/50 text-[10px] font-bold">Mesa 05 • Checkout rápido</p>
                  </div>
                  <span className="text-brand-dark/30 text-[10px] font-bold">1min</span>
                </div>
              </motion.div>

              {/* Additional Tags/Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-1/2 -left-12 z-10 hidden rounded-full bg-brand-blue px-4 py-2 shadow-lg sm:flex items-center gap-2"
              >
                <span className="text-[11px] font-black text-white uppercase tracking-wider">Garçons: 4 ON</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute top-1/4 -right-12 z-10 hidden rounded-full bg-white px-4 py-2 shadow-lg sm:flex items-center gap-2 border border-slate-100"
              >
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[11px] font-black text-brand-dark uppercase tracking-wider">Cozinha a Mil</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute bottom-1/3 -right-8 z-10 hidden rounded-full bg-brand-dark px-4 py-2 shadow-lg sm:flex items-center gap-2"
              >
                <span className="text-[11px] font-black text-white uppercase tracking-wider">32 Mesas Ocupadas</span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats/Benefits Section */}
      <Section className="relative z-10 bg-white/40 py-20 backdrop-blur-[2px] border-y border-slate-50">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { label: 'Zero Erros', desc: 'Sincronização instantânea entre salão e cozinha.' },
              { label: 'Controle Total', desc: 'Acompanhe cada pedido em tempo real pelo dashboard.' },
              { label: 'Escalabilidade', desc: 'Pronto para atender desde pequenos bistrôs a grandes redes.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white"
                >
                  <CheckCircle2 className="h-6 w-6" />
                </motion.div>
                <h3 className="text-brand-dark text-xl font-black">{item.label}</h3>
                <p className="text-brand-dark/60 mt-2 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Main Content/Features grid */}
      <Section id="recursos" className="bg-[#F8FAFC] relative z-10 border-b border-slate-100">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-brand-dark text-3xl font-black sm:text-4xl lg:text-5xl">
              Tudo o que sua operação <br className="hidden md:block" />
              <span className="text-brand-blue">precisa para voar.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-xl"
              >
                <div className="bg-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-brand-blue transition-colors">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-brand-dark text-xl font-black group-hover:text-brand-blue transition-colors">
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
                  src="/images/Automação de processos_image.jpg"
                  alt="KDS Teloos"
                  width={600}
                  height={500}
                  className="rounded-[2.5rem] shadow-2xl"
                />
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                  className="bg-brand-blue absolute -top-8 -right-8 flex h-32 w-32 flex-col items-center justify-center rounded-full text-white shadow-xl"
                >
                  <span className="text-2xl font-black">Zero</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Papel na Cozinha</span>
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
                Cozinha Digital (KDS): <br />
                A evolução do seu preparo.
              </h2>
              <p className="text-brand-dark/60 mt-6 text-lg leading-relaxed">
                Diga adeus à confusão dos cupons de papel. Com o KDS da Teloos, sua equipe visualiza os pedidos por ordem de chegada, tempo de espera e status de preparo.
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
                    transition={{ delay: 0.8 + (i * 0.1) }}
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
                Saiba exatamente o que está acontecendo em cada mesa. Tempo de permanência, ticket médio parcial e status de atendimento de forma visual e intuitiva.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-4 text-brand-blue">
                    <LayoutDashboard className="h-8 w-8" />
                  </div>
                  <h4 className="text-brand-dark font-black">Layout Personalizado</h4>
                  <p className="text-brand-dark/50 mt-2 text-sm font-medium">Configure o mapa conforme o salão físico.</p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-4 text-brand-orange">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h4 className="text-brand-dark font-black">Fechamento Ágil</h4>
                  <p className="text-brand-dark/50 mt-2 text-sm font-medium">Divisão de conta e pagamento no PDV em segundos.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Controle operacional total_image.jpg"
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
      <Section className="relative z-10 py-32 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-[4rem] bg-brand-dark px-8 py-20 text-center shadow-2xl sm:px-16">
            <div className="absolute top-0 right-0 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-orange/20 blur-[100px]" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                Pronto para revolucionar <br className="hidden md:block" />
                <span className="text-brand-blue">sua operação?</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white/70">
                Junte-se a centenas de restaurantes que já otimizaram seus processos com o Teloos.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-12 h-16 text-lg font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  <Link href="/contato">Começar agora</Link>
                </Button>
                <Link href="/contato" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold border-white text-white bg-transparent hover:bg-white hover:text-brand-dark transition-all hover:scale-105 active:scale-95">
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
