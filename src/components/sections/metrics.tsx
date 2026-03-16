import { Store, ShoppingBag, ShieldCheck, Headphones } from 'lucide-react'
import { Container } from '@/components/shared'

const METRICS = [
  {
    icon: Store,
    value: '500+',
    label: 'Restaurantes ativos',
    description: 'clientes confiam na plataforma',
  },
  {
    icon: ShoppingBag,
    value: '10M+',
    label: 'Pedidos processados',
    description: 'transações processadas com segurança',
  },
  {
    icon: ShieldCheck,
    value: '99.9%',
    label: 'Uptime garantido',
    description: 'disponibilidade da plataforma',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Suporte especializado',
    description: 'atendimento para seu negócio',
  },
]

export function MetricsSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {METRICS.map((m) => {
            const Icon = m.icon
            return (
              <div key={m.label} className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
                  <Icon className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-dark">{m.value}</p>
                  <p className="text-sm font-semibold text-gray-700">{m.label}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{m.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
