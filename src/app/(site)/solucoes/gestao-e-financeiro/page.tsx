'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
  Users
} from 'lucide-react';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/layout/site-header';

const FEATURES = [
  {
    title: 'Dashboard em Tempo Real',
    description: 'Visualize suas vendas, ticket médio e performance de produtos em segundos.',
    icon: LayoutDashboard,
  },
  {
    title: 'Controle de Estoque',
    description: 'Gestão inteligente de insumos com avisos de estoque baixo e ficha técnica.',
    icon: Package,
  },
  {
    title: 'Financeiro Completo',
    description: 'Fluxo de caixa, contas a pagar e receber integrados com suas vendas.',
    icon: Wallet,
  },
  {
    title: 'Relatórios Avançados',
    description: 'Exporte relatórios fiscais e gerenciais detalhados para sua contabilidade.',
    icon: FileText,
  },
  {
    title: 'Gestão de Clientes (CRM)',
    description: 'Conheça os hábitos dos seus clientes e crie campanhas de fidelidade.',
    icon: Users,
  },
  {
    title: 'Análise de Lucratividade',
    description: 'Entenda quais itens do seu cardápio trazem mais margem para o seu negócio.',
    icon: TrendingUp,
  },
];

export default function GestaoFinanceiroPage() {
  return (
    <div className="relative min-h-screen bg-[#F4F6FB] overflow-hidden">
      <SiteHeader />
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-orange/5 blur-[120px]" />

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
                className="mb-6 inline-flex items-center rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Gestão & Financeiro
              </motion.div>
              <h1 className="text-brand-dark text-4xl font-black leading-[1.1] sm:text-5xl lg:text-6xl">
                O controle total <br />
                do seu negócio <br />
                <span className="text-brand-blue text-glow-blue">na palma da mão.</span>
              </h1>
              <p className="text-brand-dark/70 mt-8 text-xl font-medium leading-relaxed max-w-xl">
                Tome decisões inteligentes baseadas em dados reais. Automatize seu financeiro e estoque para focar no que realmente importa: a lucratividade do seu restaurante.
              </p>
              
              {/* Standardized Hero Buttons (Light Background) */}
              <div className="mt-12 flex flex-col sm:flex-row gap-5">
                <Button size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  Falar com especialista
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-10 h-16 text-lg font-bold border-brand-blue text-brand-blue hover:bg-brand-blue/5 transition-all hover:scale-105 active:scale-95">
                  Ver demonstração
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
                <div className="aspect-[4/3] w-full bg-slate-50 flex items-center justify-center p-8">
                   <div className="w-full h-full flex flex-col gap-4">
                      <div className="h-8 w-1/3 bg-slate-100 rounded-lg animate-pulse" />
                      <div className="grid grid-cols-3 gap-4 h-32">
                        <div className="bg-brand-blue/5 rounded-2xl border border-brand-blue/10" />
                        <div className="bg-brand-orange/5 rounded-2xl border border-brand-orange/10" />
                        <div className="bg-brand-blue/5 rounded-2xl border border-brand-blue/10" />
                      </div>
                      <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
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
                className="absolute -right-6 top-10 z-20 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-slate-100"
              >
                <div className="bg-green-100 text-green-600 p-2 rounded-xl">
                    <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">LUCRO LÍQUIDO</p>
                  <p className="text-lg font-black text-brand-dark">+18% este mês</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 z-20 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-slate-100"
              >
                <div className="bg-orange-100 text-brand-orange p-2 rounded-xl">
                    <Package className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">ESTOQUE</p>
                  <p className="text-lg font-black text-brand-dark">Aviso: Insumos baixos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section (Standardized White Background) */}
      <Section className="relative z-10 bg-white py-24 border-y border-slate-100">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { label: 'Visão 360°', desc: 'Acompanhe múltiplos pontos de venda em uma única tela centralizada.' },
              { label: 'Segurança de Dados', desc: 'Backup em nuvem automático e controle de permissões por usuário.' },
              { label: 'Simplicidade', desc: 'Interface desenhada para ser usada por qualquer pessoa da equipe.' },
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
                  className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/5 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.div>
                <h3 className="text-brand-dark text-2xl font-black">{item.label}</h3>
                <p className="text-brand-dark/60 mt-4 text-lg font-medium leading-relaxed max-w-[300px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section id="recursos" className="bg-[#F8FAFC] relative z-10 border-b border-slate-100 py-24">
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-2xl"
              >
                <div className="bg-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white mb-8 flex h-16 w-16 items-center justify-center rounded-[1.25rem] text-brand-blue transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-brand-dark text-2xl font-black group-hover:text-brand-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-dark/60 mt-4 leading-relaxed font-medium text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section (Standardized Dark Background) */}
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
                Domine seus números e <br className="hidden md:block" />
                <span className="text-brand-blue">lucre muito mais.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white/70">
                A tecnologia Teloos organiza seu financeiro para você focar no que realmente importa: crescer.
              </p>
              
              {/* Standardized CTA Buttons (Dark Background) */}
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-12 h-16 text-lg font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  Quero começar agora
                </Button>
                <Link href="/precos" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold border-white text-white bg-transparent hover:bg-white hover:text-brand-dark transition-all hover:scale-105 active:scale-95">
                    Ver planos
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
