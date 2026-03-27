'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Rocket,
  ShieldCheck,
  Heart,
  Coffee,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/layout/site-header'
import Link from 'next/link'

// Move dynamic head metadata to a layout or a separate file if needed for 'use client' pages
// But since this is a page, we'll keep it as a client component if necessary,
// however SEO meta is best served from a Server Component.
// Let's check metadata compatibility with 'use client'

const VALUES = [
  {
    title: 'Foco no Cliente',
    description:
      'Nascemos para resolver os problemas reais de quem está no dia a dia da operação.',
    icon: Users,
  },
  {
    title: 'Inovação Prática',
    description:
      'Criamos tecnologia que simplifica, não que complica a vida do restaurador.',
    icon: Rocket,
  },
  {
    title: 'Transparência',
    description:
      'Relações honestas e parcerias duradouras com quem confia no nosso trabalho.',
    icon: ShieldCheck,
  },
  {
    title: 'Excelência',
    description:
      'Não entregamos apenas software, entregamos a melhor experiência de gestão.',
    icon: Sparkles,
  },
]

export default function SobrePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4F6FB]">
      <SiteHeader />

      {/* Background Decor */}
      <div className="bg-brand-blue/5 absolute top-[-5%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]" />
      <div className="bg-brand-orange/5 absolute bottom-[-5%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]" />

      {/* Hero Section */}
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-brand-blue/10 text-brand-blue mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold">
                Conheça a Teloos
              </div>
              <h1 className="text-brand-dark mx-auto max-w-4xl text-4xl leading-[1.1] font-black sm:text-5xl lg:text-7xl">
                Tecnologia para <br className="block" />
                <span className="text-brand-blue text-glow-blue whitespace-nowrap">
                  gestão de restaurantes
                </span>
              </h1>
              <p className="text-brand-dark/70 mt-8 text-xl leading-relaxed font-medium">
                Mais do que um sistema, somos parceiros do seu crescimento.
                Unimos tecnologia de ponta com a paixão por servir para criar um
                ecossistema completo para o seu restaurante.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Our Story / Mission */}
      <Section className="relative z-10 border-y border-slate-100 bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-dark text-3xl font-black sm:text-4xl lg:text-5xl">
                Nossa Missão
              </h2>
              <p className="text-brand-dark/60 mt-8 text-lg leading-relaxed font-medium">
                A Teloos surgiu de um desafio claro: o mercado de alimentação
                precisava de ferramentas que entendessem a realidade frenética
                de uma cozinha e a necessidade de controle de um gestor.
              </p>
              <p className="text-brand-dark/60 mt-6 text-lg leading-relaxed font-medium">
                Hoje, impactamos centenas de negócios diariamente, desde
                pequenos bistrôs até grandes redes, sempre com o mesmo objetivo:
                dar tempo e clareza para que o restaurador foque no que faz de
                melhor.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-brand-blue text-4xl font-black">
                    500+
                  </div>
                  <div className="text-brand-dark/40 mt-1 text-sm font-bold tracking-widest uppercase">
                    Negócios
                  </div>
                </div>
                <div>
                  <div className="text-brand-orange text-4xl font-black">
                    1M+
                  </div>
                  <div className="text-brand-dark/40 mt-1 text-sm font-bold tracking-widest uppercase">
                    Pedidos/mês
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[3rem] border-8 border-white bg-slate-100 p-12 shadow-2xl">
                <div className="grid h-full w-full grid-cols-2 gap-6">
                  <div className="bg-brand-blue/10 flex items-center justify-center rounded-3xl">
                    <Target className="text-brand-blue h-16 w-16" />
                  </div>
                  <div className="bg-brand-orange/10 flex translate-y-8 items-center justify-center rounded-3xl">
                    <Heart className="text-brand-orange h-16 w-16" />
                  </div>
                  <div className="flex -translate-y-8 items-center justify-center rounded-3xl bg-slate-200">
                    <Users className="h-16 w-16 text-slate-400" />
                  </div>
                  <div className="bg-brand-blue/5 flex items-center justify-center rounded-3xl">
                    <Coffee className="text-brand-blue/30 h-16 w-16" />
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
          <div className="mb-16 text-center">
            <h2 className="text-brand-dark text-3xl font-black sm:text-4xl">
              Nossos Valores
            </h2>
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
                className="group rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-brand-dark group-hover:text-brand-blue text-xl font-black transition-colors">
                  {value.title}
                </h3>
                <p className="text-brand-dark/60 mt-4 leading-relaxed font-medium">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Final Padronizado */}
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
                Faça parte da nossa <br className="hidden md:block" />
                <span className="text-brand-blue text-glow-blue">
                  história de sucesso.
                </span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white/70">
                Estamos prontos para levar seu negócio para o próximo nível com
                a melhor tecnologia de gestão do mercado.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 shadow-brand-orange/20 h-16 w-full rounded-full px-12 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
                >
                  Quero ser Teloos
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
