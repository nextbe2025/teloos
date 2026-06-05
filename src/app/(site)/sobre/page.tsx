'use client'

import Image from 'next/image'
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
      'Criamos tecnologia que simplifica, não que complica a vida do empreendedor.',
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
      'Mais que software, entregamos resultados reais e comprovados para melhor gestão do seu negócio.',
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
                <span className="text-brand-blue text-glow-blue sm:whitespace-nowrap">
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
                dar tempo e clareza para que o empreendedor foque no que faz de
                melhor.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-brand-blue text-4xl font-black">
                    +3.000
                  </div>
                  <div className="text-brand-dark/40 mt-1 text-sm font-bold tracking-widest uppercase">
                    Negócios
                  </div>
                </div>
                <div>
                  <div className="text-brand-orange text-4xl font-black">
                    +200k
                  </div>
                  <div className="text-brand-dark/40 mt-1 text-sm font-bold tracking-widest uppercase">
                    Pedidos/dia
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
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[3rem] border-8 border-white bg-slate-100 p-10 shadow-2xl">
                <div className="grid h-full w-full grid-cols-2 gap-5">
                  <div className="bg-brand-blue/10 flex flex-col items-center justify-center gap-3 rounded-3xl">
                    <Target className="text-brand-blue h-12 w-12" />
                    <span className="text-brand-blue text-[11px] font-bold tracking-widest uppercase">
                      Missão
                    </span>
                  </div>
                  <div className="bg-brand-orange/10 flex flex-col items-center justify-center gap-3 rounded-3xl">
                    <Heart className="text-brand-orange h-12 w-12" />
                    <span className="text-brand-orange text-[11px] font-bold tracking-widest uppercase">
                      Paixão
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-slate-200">
                    <Users className="h-12 w-12 text-slate-500" />
                    <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                      Pessoas
                    </span>
                  </div>
                  <div className="bg-brand-blue/5 flex flex-col items-center justify-center gap-3 rounded-3xl">
                    <Coffee className="text-brand-blue/50 h-12 w-12" />
                    <span className="text-brand-blue/50 text-[11px] font-bold tracking-widest uppercase">
                      Cultura
                    </span>
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

      {/* CTA Final — estilo LP com foto */}
      <section className="relative z-10 bg-white py-16 lg:py-24">
        <Container>
          <div className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] lg:min-h-[520px]">
            {/* Foto de fundo */}
            <Image
              src="/images/background quem somos.jpg"
              alt="Faça parte da história Teloos"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradiente escuro só no lado esquerdo — mantém as pessoas visíveis à direita */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />

            {/* Conteúdo centralizado verticalmente, alinhado à esquerda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute inset-0 z-10 flex flex-col justify-center px-10 sm:px-16 lg:max-w-[55%]"
            >
              <h2 className="text-2xl leading-tight font-black text-white sm:text-3xl lg:text-[36px]">
                Você empresário do setor gastronômico, junte-se à Teloos e
                impulsione o crescimento do seu negócio!
              </h2>

              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 h-14 rounded-full px-10 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95"
                >
                  <Link href="/contato">Entrar em contato hoje!</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
