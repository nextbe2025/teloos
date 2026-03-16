import { TrendingUp, Clock, Users } from 'lucide-react'
import { Container, Section } from '@/components/shared'

const FEATURES = [
  { icon: TrendingUp, label: 'Vendas em tempo real' },
  { icon: Clock, label: 'Histórico por período' },
  { icon: Users, label: 'Performance por colaborador' },
]

function AnalyticsDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-dark/90 shadow-2xl">
      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-white/10 px-4 py-3">
        {['Visão geral', 'Vendas', 'Produtos', 'Equipe'].map((tab, i) => (
          <button
            key={tab}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              i === 0
                ? 'bg-brand-blue text-white'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {tab}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs text-white/40">Ao vivo</span>
        </div>
      </div>

      <div className="p-4 lg:p-6">
        {/* KPI row */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Faturamento', value: 'R$ 48.920', delta: '+12%' },
            { label: 'Pedidos', value: '612', delta: '+8%' },
            { label: 'Ticket médio', value: 'R$ 79,90', delta: '+4%' },
            { label: 'Clientes', value: '384', delta: '+15%' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl bg-white/5 p-3">
              <p className="mb-1 text-[10px] text-white/40">{kpi.label}</p>
              <p className="text-lg font-bold text-white">{kpi.value}</p>
              <p className="text-[10px] font-medium text-green-400">{kpi.delta} vs semana passada</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="mb-4 rounded-xl bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-white/60">Faturamento diário — últimas 12 semanas</p>
            <div className="flex items-center gap-3 text-[10px] text-white/40">
              <span className="flex items-center gap-1">
                <span className="h-2 w-4 rounded-full bg-brand-blue" />
                Este mês
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-4 rounded-full bg-white/20" />
                Mês anterior
              </span>
            </div>
          </div>

          {/* Area chart SVG */}
          <div className="relative h-28">
            <svg
              viewBox="0 0 360 80"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3F63E6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3F63E6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="areaGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Previous month (lighter) */}
              <path
                d="M0 60 L30 52 L60 56 L90 48 L120 50 L150 42 L180 44 L210 36 L240 40 L270 38 L300 32 L330 35 L360 30 L360 80 L0 80 Z"
                fill="url(#areaGrad2)"
              />
              <path
                d="M0 60 L30 52 L60 56 L90 48 L120 50 L150 42 L180 44 L210 36 L240 40 L270 38 L300 32 L330 35 L360 30"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              />
              {/* Current month */}
              <path
                d="M0 68 L30 58 L60 62 L90 50 L120 55 L150 38 L180 44 L210 30 L240 35 L270 28 L300 20 L330 22 L360 10 L360 80 L0 80 Z"
                fill="url(#areaGrad)"
              />
              <path
                d="M0 68 L30 58 L60 62 L90 50 L120 55 L150 38 L180 44 L210 30 L240 35 L270 28 L300 20 L330 22 L360 10"
                fill="none"
                stroke="#3F63E6"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { category: 'Hambúrgueres', pct: 82, revenue: 'R$ 18.420' },
            { category: 'Bebidas', pct: 61, revenue: 'R$ 8.740' },
            { category: 'Sobremesas', pct: 44, revenue: 'R$ 5.120' },
          ].map((item) => (
            <div key={item.category} className="rounded-xl bg-white/5 p-3">
              <div className="mb-2 flex items-center justify-between text-[10px]">
                <span className="text-white/60">{item.category}</span>
                <span className="font-medium text-white">{item.pct}%</span>
              </div>
              <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-brand-blue"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
              <p className="text-xs font-semibold text-white">{item.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DashboardPreviewSection() {
  return (
    <Section id="dashboard" className="bg-gray-50/60">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Analytics
            </span>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              Decisões baseadas em dados, em tempo real
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-500">
              Acompanhe faturamento, ticket médio, produtos mais vendidos e performance da equipe — tudo em dashboards
              intuitivos e atualizados ao vivo.
            </p>

            <div className="space-y-4">
              {FEATURES.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                      <Icon className="h-4 w-4 text-brand-blue" />
                    </div>
                    <span className="font-medium text-gray-700">{f.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex gap-8 border-t border-gray-200 pt-8">
              {[
                { value: '↑ 23%', label: 'aumento médio de faturamento' },
                { value: '↓ 40%', label: 'redução de erros operacionais' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-brand-blue">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard */}
          <div>
            <AnalyticsDashboard />
          </div>
        </div>
      </Container>
    </Section>
  )
}
