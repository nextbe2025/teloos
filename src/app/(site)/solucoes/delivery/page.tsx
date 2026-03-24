'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Bike,
  CheckCircle2,
  ShoppingBag,
  Zap,
  ArrowRight,
  Smartphone,
  Globe,
  Store,
  MessageCircle,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/shared'
import { SiteHeader } from '@/components/layout/site-header'
import { cn } from '@/lib/utils'

const FEATURES = [
  {
    title: 'App de Delivery Próprio',
    description: 'Venda direto para seu cliente final sem taxas abusivas de marketplaces e fidelize sua base.',
    icon: ShoppingBag,
  },
  {
    title: 'Gestor de iFood Integrado',
    description: 'Receba seus pedidos do iFood direto no sistema Teloos, sem precisar de múltiplos aparelhos.',
    icon: Store,
  },
  {
    title: 'Cardápio Digital Web',
    description: 'Um link personalizado para seu restaurante onde o cliente faz o pedido no navegador com facilidade.',
    icon: Globe,
  },
  {
    title: 'Integração com Logística',
    description: 'Chame entregadores e acompanhe o status da entrega em tempo real direto pelo painel.',
    icon: Bike,
  },
  {
    title: 'Pedidos via WhatsApp',
    description: 'Link direto que envia o carrinho do cliente formatado para seu WhatsApp, facilitando a recepção.',
    icon: MessageCircle,
  },
  {
    title: 'Relatórios de Vendas',
    description: 'Saiba quais produtos saem mais e identifique seus clientes mais fiéis no delivery.',
    icon: Zap,
  },
]

export default function DeliveryVendasPage() {
  return (
    <div className="flex flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F4F6FB] pt-32 pb-20 lg:pt-48">
        <div className="bg-brand-orange/5 pointer-events-none absolute -top-24 left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-brand-orange/10 inline-flex items-center gap-3 rounded-full border bg-white/70 px-4 py-2 backdrop-blur">
                <Bike className="text-brand-orange h-4 w-4" />
                <span className="text-brand-orange text-[13px] font-bold tracking-[0.2em] uppercase">
                  Delivery & Vendas
                </span>
              </div>

              <h1 className="text-brand-dark mt-8 text-[40px] leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[56px]">
                Seu delivery sem taxas, <br className="hidden sm:block" />
                <span className="text-brand-orange text-glow-orange">mais lucro no seu bolso.</span>
              </h1>

              <p className="text-brand-dark/60 mt-8 max-w-[540px] text-lg leading-relaxed">
                Aumente suas vendas online com uma plataforma de delivery própria, integrada ao iFood e desenhada para converter mais em menos cliques.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 h-14 rounded-full px-10 text-white shadow-xl shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  <Link href="/contato">Começar Vendendo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 rounded-full border-brand-orange/20 text-brand-orange px-10 font-bold hover:bg-brand-orange/5 transition-all hover:scale-105 active:scale-95">
                  <Link href="#solucoes">Conhecer Soluções</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-slate-200 shadow-2xl shadow-brand-orange/10">
                <Image
                  src="/images/Delivery próprio_image.png"
                  alt="Interface Delivery Teloos"
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
                className="absolute -top-6 -right-4 z-20 hidden w-64 rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500 flex h-8 w-8 items-center justify-center rounded-full text-white">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-dark text-xs font-black">Novo Pedido!</p>
                    <p className="text-brand-dark/50 text-[10px] font-bold">Mesa 08 • R$ 142,50</p>
                  </div>
                  <span className="text-brand-dark/30 text-[10px] font-bold">agora</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-8 -left-6 z-20 hidden w-72 rounded-2xl border border-brand-orange/10 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-brand-orange flex h-8 w-8 items-center justify-center rounded-full text-white">
                    <Bike className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-dark text-xs font-black">Entregador a caminho</p>
                    <p className="text-brand-dark/50 text-[10px] font-bold">Pedido #4482 • iFood</p>
                  </div>
                  <span className="text-brand-dark/30 text-[10px] font-bold">2min</span>
                </div>
              </motion.div>

              {/* Additional Tags/Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-1/2 -right-12 z-10 hidden rounded-full bg-white px-4 py-2 shadow-lg sm:flex items-center gap-2 border border-slate-100"
              >
                <div className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-[11px] font-black text-brand-dark uppercase tracking-wider">Loja Aberta</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute top-1/3 -left-12 z-10 hidden rounded-full bg-brand-dark px-4 py-2 shadow-lg sm:flex items-center gap-2"
              >
                <span className="text-[11px] font-black text-white uppercase tracking-wider">iFood On-line</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute bottom-1/4 -right-8 z-10 hidden rounded-full bg-emerald-500 px-4 py-2 shadow-lg sm:flex items-center gap-2"
              >
                <span className="text-[11px] font-black text-white uppercase tracking-wider">R$ 4.240 hoje</span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats/Benefits Section */}
      <Section className="bg-white py-20 relative z-10 border-y border-slate-50">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { label: 'Independência', desc: 'Venda no seu canal direto e reduza dependência de terceiros.' },
              { label: 'Gestão Unificada', desc: 'Sincronize pedidos de todos os canais em uma única tela.' },
              { label: 'Mais Margem', desc: 'Elimine comissões por pedido no seu canal de vendas oficial.' },
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
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white"
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
      <Section id="solucoes" className="bg-[#F8FAFC] relative z-10 border-b border-slate-100">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-brand-dark text-3xl font-black sm:text-4xl lg:text-5xl">
              Venda onde seu cliente <br className="hidden md:block" />
              <span className="text-brand-orange">está presente.</span>
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
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-brand-orange/30 hover:shadow-xl"
              >
                <div className="bg-brand-orange/10 group-hover:bg-brand-orange group-hover:text-white mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-brand-orange transition-colors">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-brand-dark text-xl font-black group-hover:text-brand-orange transition-colors">
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
                <Image
                  src="/images/Integração com maquininhas_image.png"
                  alt="Gestor iFood Teloos"
                  width={600}
                  height={500}
                  className="rounded-[2.5rem] shadow-2xl"
                />
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                  className="bg-brand-orange absolute -bottom-8 -left-8 flex h-32 w-32 flex-col items-center justify-center rounded-full text-white shadow-xl"
                >
                  <span className="text-2xl font-black">Full</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center">Integração iFood</span>
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
                Tudo em um só lugar: <br />
                Acabe com o caos dos tablets.
              </h2>
              <p className="text-brand-dark/60 mt-6 text-lg leading-relaxed">
                Centralize a operação de delivery. Receba pedidos do iFood e do seu site próprio em uma única fila de produção, sincronizada direto com seu PDV e estoque.
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
                    transition={{ delay: 0.8 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-brand-orange h-5 w-5" />
                    <span className="text-brand-dark font-bold">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative z-10 py-32 bg-white border-t border-slate-100">
        <Container>
          <div className="relative overflow-hidden rounded-[4rem] bg-brand-dark px-8 py-20 text-center shadow-2xl sm:px-16">
            <div className="absolute top-0 right-0 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-blue/20 blur-[100px]" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                Sua vitrine online <br className="hidden md:block" />
                <span className="text-brand-orange">espera por você.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white/70">
                Comece a vender agora pelo seu canal oficial e aumente a rentabilidade do seu restaurante.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-12 h-16 text-lg font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  <Link href="/contato">Solicitar Demonstração</Link>
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
