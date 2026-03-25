'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BarChart3,
  TrendingUp,
  Package,
  Wallet,
  FileText,
  PieChart,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Users,
  Monitor,
} from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/layout/site-header'

const FEATURES = [
  {
    title: 'Dashboard em Tempo Real',
    description:
      'Visualize suas vendas, ticket médio e performance de produtos em segundos.',
    icon: LayoutDashboard,
  },
  {
    title: 'Controle de Estoque',
    description:
      'Gestão inteligente de insumos com avisos de estoque baixo e ficha técnica.',
    icon: Package,
  },
  {
    title: 'Financeiro Completo',
    description:
      'Fluxo de caixa, contas a pagar e receber integrados com suas vendas.',
    icon: Wallet,
  },
  {
    title: 'Relatórios Avançados',
    description:
      'Exporte relatórios fiscais e gerenciais detalhados para sua contabilidade.',
    icon: FileText,
  },
  {
    title: 'Gestão de Clientes (CRM)',
    description:
      'Conheça os hábitos dos seus clientes e crie campanhas de fidelidade.',
    icon: Users,
  },
  {
    title: 'Análise de Lucratividade',
    description:
      'Entenda quais itens do seu cardápio trazem mais margem para o seu negócio.',
    icon: TrendingUp,
  },
]

export default function GestaoFinanceiroPage() {
  useEffect(() => {
    document.title =
      'Gestão e Financeiro | Controle Completo para Restaurantes | Teloos'
  }, [])
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4F6FB]">
      <SiteHeader />

      {/* Background Orbs */}
      <div className="bg-brand-blue/5 absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-[120px]" />
      <div className="bg-brand-blue/5 absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[120px]" />

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
                <BarChart3 className="mr-2 h-4 w-4" />
                Gestão & Financeiro
              </motion.div>
              <h1 className="text-brand-dark text-4xl leading-[1.1] font-black sm:text-5xl lg:text-6xl">
                O controle total <br />
                do seu negócio <br />
                <span className="text-brand-blue text-glow-blue">
                  na palma da mão.
                </span>
              </h1>
              <p className="text-brand-dark/70 mt-8 max-w-xl text-xl leading-relaxed font-medium">
                Tome decisões inteligentes baseadas em dados reais. Automatize
                seu financeiro e estoque para focar no que realmente importa: a
                lucratividade do seu restaurante.
              </p>

              {/* Standardized Hero Button (Light Background) */}
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-14 w-full rounded-full px-10 font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 sm:w-auto"
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
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 overflow-hidden rounded-[2.5rem] border-[8px] border-white bg-white shadow-2xl"
              >
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-slate-50 p-8">
                  <div className="flex h-full w-full flex-col gap-4">
                    <div className="h-8 w-1/3 animate-pulse rounded-lg bg-slate-100" />
                    <div className="grid h-32 grid-cols-3 gap-4">
                      <div className="bg-brand-blue/5 border-brand-blue/10 rounded-2xl border" />
                      <div className="bg-brand-blue/5 border-brand-blue/10 rounded-2xl border" />
                      <div className="bg-brand-blue/5 border-brand-blue/10 rounded-2xl border" />
                    </div>
                    <div className="flex flex-1 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50">
                      <PieChart className="h-20 w-20 text-slate-200" />
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
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">
                    LUCRO LÍQUIDO
                  </p>
                  <p className="text-brand-dark text-lg font-black">
                    +18% este mês
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl"
              >
                <div className="text-brand-blue rounded-xl bg-blue-100 p-2">
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">ESTOQUE</p>
                  <p className="text-brand-dark text-lg font-black">
                    Aviso: Insumos baixos
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section (Standardized White Background) */}
      <Section className="relative z-10 border-y border-slate-100 bg-white py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                label: 'Visão 360°',
                desc: 'Acompanhe múltiplos pontos de venda em uma única tela centralizada.',
              },
              {
                label: 'Segurança de Dados',
                desc: 'Backup em nuvem automático e controle de permissões por usuário.',
              },
              {
                label: 'Simplicidade',
                desc: 'Interface desenhada para ser usada por qualquer pessoa da equipe.',
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
                  className="bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors group-hover:text-white"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.div>
                <h3 className="text-brand-dark text-2xl font-black">
                  {item.label}
                </h3>
                <p className="text-brand-dark/60 mt-4 max-w-[300px] text-lg leading-relaxed font-medium">
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
        className="relative z-10 border-b border-slate-100 bg-[#F8FAFC] py-24"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-brand-dark text-3xl font-black sm:text-4xl lg:text-5xl">
              Tudo o que você precisa <br className="hidden md:block" />
              <span className="text-brand-blue">para gerir o sucesso.</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group hover:border-brand-blue/30 rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm transition-all hover:shadow-2xl"
              >
                <div className="bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue mb-8 flex h-16 w-16 items-center justify-center rounded-[1.25rem] transition-colors group-hover:text-white">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-brand-dark group-hover:text-brand-blue text-2xl font-black transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-dark/60 mt-4 text-lg leading-relaxed font-medium">
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
                  Gestão 360° do seu negócio.
                </span>
              </h2>
              <p className="text-brand-dark/70 mt-8 text-xl leading-relaxed font-medium">
                Controle o financeiro, estoque e vendas em um painel único.
                Transforme dados em decisões inteligentes e tenha o controle na
                palma da sua mão, onde quer que você esteja.
              </p>

              <ul className="mt-10 space-y-6">
                {[
                  'Fluxo de caixa e DRE automatizados',
                  'Controle de estoque com baixa inteligente',
                  'Relatórios de lucratividade por produto',
                  'Gestão multiloja centralizada no PDV',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-brand-dark flex items-center gap-4 pl-1 text-lg font-bold"
                  >
                    <div className="bg-brand-blue/10 text-brand-blue flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-14 rounded-full px-10 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
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
                <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                  <Monitor className="text-brand-blue/20 h-32 w-32" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-brand-dark/20 text-sm font-black tracking-widest uppercase">
                      Dashboard Centralizado
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="bg-brand-blue/10 absolute -top-12 -right-12 h-64 w-64 rounded-full blur-3xl" />
              <div className="bg-brand-blue/5 absolute -bottom-12 -left-12 h-64 w-64 rounded-full blur-3xl" />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section (Standardized Dark Background) */}
      <Section className="relative z-10 bg-white py-32">
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
              <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                Domine seus números e <br className="hidden md:block" />
                <span className="text-brand-blue">lucre muito mais.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white/70">
                A tecnologia Teloos organiza seu financeiro para você focar no
                que realmente importa: crescer.
              </p>

              {/* Standardized CTA Buttons (Dark Background) */}
              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-16 w-full rounded-full px-12 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
                >
                  Quero começar agora
                </Button>
                <Link href="/precos" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:text-brand-dark h-16 w-full rounded-full border-white bg-transparent px-12 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-white active:scale-95 sm:w-auto"
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
