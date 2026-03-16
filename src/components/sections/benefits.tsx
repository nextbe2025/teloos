import { Cpu, Eye, Link2 } from 'lucide-react'
import { Container, Section } from '@/components/shared'

const BENEFITS = [
  {
    icon: Cpu,
    title: 'Automação de processos',
    description:
      'Elimine tarefas manuais e reduza erros operacionais. O sistema automatiza o fluxo de pedidos desde a entrada até a finalização.',
    items: [
      'Lançamento automático de pedidos na cozinha',
      'Faturamento e emissão fiscal integrados',
      'Conciliação de caixa e relatórios diários',
    ],
  },
  {
    icon: Eye,
    title: 'Controle operacional total',
    description:
      'Visão em tempo real de toda a operação — mesas, pedidos, cozinha e financeiro em um único painel centralizado.',
    items: [
      'Dashboard de operação ao vivo',
      'Alertas de produção e prazo',
      'Histórico completo rastreável',
    ],
  },
  {
    icon: Link2,
    title: 'Integração tecnológica',
    description:
      'Hardware e software nativamente integrados — PDV, impressoras, balanças, totens de autoatendimento e marketplaces.',
    items: [
      'Hardware homologado e suportado',
      'APIs abertas para parceiros',
      'Integrações com principais marketplaces',
    ],
  },
]

export function BenefitsSection() {
  return (
    <Section id="beneficios" className="bg-white">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Por que Teloos
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Tecnologia que transforma a gestão do seu negócio
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-500">
            Mais do que um software — uma plataforma completa para digitalizar e otimizar cada etapa da sua operação.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="relative">
                {/* Number */}
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-gray-100">0{i + 1}</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-brand-dark">{b.title}</h3>
                <p className="mb-5 text-gray-500 leading-relaxed">{b.description}</p>

                <ul className="space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
