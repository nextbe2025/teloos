'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Rocket, 
  ShieldCheck, 
  Heart, 
  Coffee,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/layout/site-header';
import Link from 'next/link';

const VALUES = [
  {
    title: 'Foco no Cliente',
    description: 'Nascemos para resolver os problemas reais de quem está no dia a dia da operação.',
    icon: Users,
  },
  {
    title: 'Inovação Prática',
    description: 'Criamos tecnologia que simplifica, não que complica a vida do restaurador.',
    icon: Rocket,
  },
  {
    title: 'Transparência',
    description: 'Relações honestas e parcerias duradouras com quem confia no nosso trabalho.',
    icon: ShieldCheck,
  },
  {
    title: 'Excelência',
    description: 'Não entregamos apenas software, entregamos a melhor experiência de gestão.',
    icon: Sparkles,
  },
];

export default function SobrePage() {
  return (
    <div className="relative min-h-screen bg-[#F4F6FB] overflow-hidden">
      <SiteHeader />
      
      {/* Background Decor */}
      <div className="absolute top-[-5%] right-[-10%] h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-[120px]" />
      <div className="absolute bottom-[-5%] left-[-10%] h-[600px] w-[600px] rounded-full bg-brand-orange/5 blur-[120px]" />

      {/* Hero Section */}
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
                Conheça a Teloos
              </div>
              <h1 className="text-brand-dark text-4xl font-black leading-[1.1] sm:text-5xl lg:text-7xl max-w-4xl mx-auto">
                Tecnologia para <br className="block" />
                <span className="text-brand-blue text-glow-blue whitespace-nowrap">restaurantes que crescem</span>
              </h1>
              <p className="text-brand-dark/70 mt-8 text-xl font-medium leading-relaxed">
                Mais do que um sistema, somos parceiros do seu crescimento. Unimos tecnologia de ponta com a paixão por servir para criar um ecossistema completo para o seu restaurante.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Our Story / Mission */}
      <Section className="relative z-10 py-24 bg-white border-y border-slate-100">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-black text-brand-dark sm:text-4xl lg:text-5xl">
                Nossa Missão
              </h2>
              <p className="mt-8 text-lg font-medium text-brand-dark/60 leading-relaxed">
                A Teloos surgiu de um desafio claro: o mercado de alimentação precisava de ferramentas que entendessem a realidade frenética de uma cozinha e a necessidade de controle de um gestor.
              </p>
              <p className="mt-6 text-lg font-medium text-brand-dark/60 leading-relaxed">
                Hoje, impactamos centenas de negócios diariamente, desde pequenos bistrôs até grandes redes, sempre com o mesmo objetivo: dar tempo e clareza para que o restaurador foque no que faz de melhor.
              </p>
              
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-brand-blue">500+</div>
                  <div className="text-sm font-bold text-brand-dark/40 uppercase tracking-widest mt-1">Negócios</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-orange">1M+</div>
                  <div className="text-sm font-bold text-brand-dark/40 uppercase tracking-widest mt-1">Pedidos/mês</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-slate-100 overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-6 w-full h-full">
                   <div className="rounded-3xl bg-brand-blue/10 flex items-center justify-center">
                      <Target className="h-16 w-16 text-brand-blue" />
                   </div>
                   <div className="rounded-3xl bg-brand-orange/10 flex items-center justify-center translate-y-8">
                      <Heart className="h-16 w-16 text-brand-orange" />
                   </div>
                   <div className="rounded-3xl bg-slate-200 flex items-center justify-center -translate-y-8">
                      <Users className="h-16 w-16 text-slate-400" />
                   </div>
                   <div className="rounded-3xl bg-brand-blue/5 flex items-center justify-center">
                      <Coffee className="h-16 w-16 text-brand-blue/30" />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values Grid */}
      <Section className="bg-[#F8FAFC] py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-dark sm:text-4xl">Nossos Valores</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm transition-all hover:shadow-xl group"
              >
                <div className="bg-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-brand-blue transition-colors">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-brand-dark transition-colors group-hover:text-brand-blue">
                  {value.title}
                </h3>
                <p className="text-brand-dark/60 mt-4 font-medium leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Final Padronizado */}
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
                Faça parte da nossa <br className="hidden md:block" />
                <span className="text-brand-blue text-glow-blue">história de sucesso.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white/70">
                Estamos prontos para levar seu negócio para o próximo nível com a melhor tecnologia de gestão do mercado.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-12 h-16 text-lg font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  Quero ser Teloos
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
  );
}
