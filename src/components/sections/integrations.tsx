import { Container, Section } from '@/components/shared'

const INTEGRATIONS = [
  { name: 'iFood', category: 'Delivery' },
  { name: 'Rappi', category: 'Delivery' },
  { name: 'Uber Eats', category: 'Delivery' },
  { name: '99Food', category: 'Delivery' },
  { name: 'Stone', category: 'Pagamentos' },
  { name: 'SumUp', category: 'Pagamentos' },
  { name: 'Cielo', category: 'Pagamentos' },
  { name: 'PagSeguro', category: 'Pagamentos' },
  { name: 'NFC-e / SAT', category: 'Fiscal' },
  { name: 'NF-e', category: 'Fiscal' },
  { name: 'Bematech', category: 'Hardware' },
  { name: 'Epson', category: 'Hardware' },
  { name: 'Elgin', category: 'Hardware' },
  { name: 'Getnet', category: 'Pagamentos' },
  { name: 'Linx', category: 'ERP' },
  { name: 'Totvs', category: 'ERP' },
]

const CATEGORY_COLORS: Record<string, string> = {
  Delivery: 'bg-orange-50 text-orange-600 border-orange-100',
  Pagamentos: 'bg-green-50 text-green-600 border-green-100',
  Fiscal: 'bg-blue-50 text-blue-600 border-blue-100',
  Hardware: 'bg-purple-50 text-purple-600 border-purple-100',
  ERP: 'bg-gray-50 text-gray-600 border-gray-200',
}

export function IntegrationsSection() {
  return (
    <Section id="integracoes" className="bg-white">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Ecossistema
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Integrado com as principais plataformas do mercado
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-500">
            Conectamos seu restaurante aos maiores marketplaces, meios de pagamento, hardwares e sistemas de gestão do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.name}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition-all duration-150 hover:border-brand-blue/30 hover:bg-brand-ice/40 hover:shadow-sm"
            >
              {/* Logo placeholder — initials */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm border border-gray-100 text-sm font-bold text-brand-dark group-hover:border-brand-blue/20">
                {integration.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="text-center text-xs font-semibold text-gray-700">{integration.name}</p>
              <span
                className={`rounded-full border px-2 py-0.5 text-[9px] font-medium ${CATEGORY_COLORS[integration.category]}`}
              >
                {integration.category}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          + 50 integrações disponíveis via API aberta
        </p>
      </Container>
    </Section>
  )
}
