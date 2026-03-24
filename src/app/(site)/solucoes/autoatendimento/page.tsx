'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Touchpad, 
  Smartphone, 
  Zap, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  QrCode, 
  Monitor,
  Users
} from 'lucide-react';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/layout/site-header';
import Image from 'next/image';

const FEATURES = [
  {
    title: 'Totens de Autoatendimento',
    description: 'Reduza filas e aumente o ticket médio com totens intuitivos e rápidos.',
    icon: Monitor,
  },
  {
    title: 'Cardápio Digital QR Code',
    description: 'O cliente pede e paga direto da mesa, sem precisar chamar o garçom.',
    icon: QrCode,
  },
  {
    title: 'Pagamento Integrado',
    description: 'Receba via PIX ou Cartão direto no terminal, com conciliação automática.',
    icon: Zap,
  },
  {
    title: 'Redução de Custos',
    description: 'Otimize sua equipe e foque no que importa: a qualidade do produto.',
    icon: Users,
  },
  {
    title: 'Agilidade Superior',
    description: 'Pedidos enviados direto para a cozinha (KDS) assim que confirmados.',
    icon: Clock,
  },
  {
    title: 'Interface Customizável',
    description: 'Deixe o cardápio com a cara da sua marca, fotos atraentes e descrições.',
    icon: Touchpad,
  },
];

export default function AutoatendimentoPage() {
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
                <Touchpad className="mr-2 h-4 w-4" />
                Autoatendimento & Totens
              </motion.div>
              <h1 className="text-brand-dark text-4xl font-black leading-[1.1] sm:text-5xl lg:text-6xl">
                Mais agilidade, <br />
                <span className="text-brand-blue">menos filas</span> e <br />
                maior lucro.
              </h1>
              <p className="text-brand-dark/70 mt-6 text-lg font-medium leading-relaxed max-w-xl">
                Modernize seu restaurante com soluções de autoatendimento que encantam o cliente e otimizam sua operação de ponta a ponta.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-10 text-base font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  Falar com especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-10 text-base font-bold border-brand-blue text-brand-blue hover:bg-brand-blue/5 transition-all hover:scale-105 active:scale-95">
                  Ver demonstração
                </Button>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 overflow-hidden rounded-[2.5rem] border-[8px] border-white bg-slate-200 shadow-2xl"
              >
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center">
                   {/* Fallback pattern while image isn't available */}
                   <div className="flex flex-col items-center gap-4 text-slate-400">
                      <Monitor className="h-20 w-20 opacity-20" />
                      <span className="font-bold text-sm tracking-widest uppercase opacity-30">Interface Totem Teloos</span>
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
                    <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">TICKET MÉDIO</p>
                  <p className="text-lg font-black text-brand-dark">+25% de aumento</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 z-20 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-slate-100"
              >
                <div className="bg-orange-100 text-brand-orange p-2 rounded-xl">
                    <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">FILAS</p>
                  <p className="text-lg font-black text-brand-dark">Redução drástica</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="relative z-10 bg-white py-20 border-y border-slate-100">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { label: 'Autoatendimento', desc: 'Totens robustos e intuitivos para qualquer fluxo.' },
              { label: 'Independência', desc: 'Seu cliente decide quando e como pedir.' },
              { label: 'Eficiência', desc: 'Menos erros de anotação, mais velocidade na cozinha.' },
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

      {/* Features Grid */}
      <Section id="recursos" className="bg-[#F8FAFC] relative z-10 border-b border-slate-100">
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

      {/* CTA Section */}
      <Section className="relative z-10 py-24 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-[3rem] bg-brand-dark px-8 py-16 text-center shadow-2xl sm:px-16">
            <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[80px]" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-orange/20 blur-[80px]" />
            
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
                Junte-se a centenas de restaurantes que já modernizaram seu atendimento com a Teloos.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-12 h-14 text-base font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
                  Quero começar agora
                </Button>
                <Link href="/precos" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-14 text-base font-bold border-white text-white bg-transparent hover:bg-white hover:text-brand-dark transition-all hover:scale-105 active:scale-95">
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
