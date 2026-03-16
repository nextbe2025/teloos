import { Tablet, ChefHat, Truck, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Container, Section } from '@/components/shared'

const SOLUTIONS = [
  {
    icon: Tablet,
    title: 'Pedidos & Cardápio Digital',
    description:
      'Cardápio digital via QR Code, autoatendimento em totens e gestão unificada de pedidos em todos os canais de venda.',
    features: ['Cardápio digital', 'QR Code mesa', 'Autoatendimento'],
    accent: 'bg-brand-blue/10 text-brand-blue',
    border: 'hover:border-brand-blue/40',
  },
  {
    icon: ChefHat,
    title: 'Gestão Operacional',
    description:
      'KDS para cozinha, controle de fluxo de produção, gestão de mesas e reservas com visibilidade em tempo real.',
    features: ['KDS Cozinha', 'Gestão de mesas', 'Reservas online'],
    accent: 'bg-brand-orange/10 text-brand-orange',
    border: 'hover:border-brand-orange/40',
  },
  {
    icon: Truck,
    title: 'Delivery & Marketplace',
    description:
      'Integração nativa com iFood, Rappi e Uber Eats. Roteamento inteligente de entregadores próprios.',
    features: ['iFood', 'Rappi', 'Uber Eats'],
    accent: 'bg-purple-500/10 text-purple-600',
    border: 'hover:border-purple-400/40',
  },
  {
    icon: BarChart3,
    title: 'BI & Relatórios',
    description:
      'Dashboards em tempo real, DRE automático e análise de performance por período, turno ou centro de custo.',
    features: ['Dashboards', 'DRE automático', 'Alertas inteligentes'],
    accent: 'bg-green-500/10 text-green-600',
    border: 'hover:border-green-400/40',
  },
]

export function SolutionsSection() {
  return (
    <Section id="solucoes" className="bg-gray-50/80">
      <Container>
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Plataforma
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Um sistema completo para toda sua operação
          </h2>
          <p className="text-lg text-gray-500">
            Módulos integrados que se complementam — do pedido ao financeiro, sem sistemas paralelos ou integrações quebradas.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${s.border}`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${s.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-brand-dark">{s.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">{s.description}</p>
                <ul className="mb-5 space-y-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/60" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solucoes"
                  className="flex items-center gap-1 text-sm font-medium text-brand-blue hover:gap-2 transition-all"
                >
                  Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
