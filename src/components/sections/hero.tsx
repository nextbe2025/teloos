import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui/button'

const TRUST_ITEMS = ['500+ restaurantes', '98% de satisfação', 'Suporte 24/7']

const CHART_BARS = [42, 58, 50, 72, 65, 80, 60, 88, 70, 78, 85, 92]

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-3xl bg-brand-blue/10 blur-3xl" />

      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 z-10 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg border border-gray-100">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
          <span className="h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span className="text-xs font-semibold text-gray-700">+23 pedidos hoje</span>
      </div>

      {/* Browser chrome */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-brand-dark/10">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="mx-3 flex h-5 flex-1 items-center rounded border border-gray-200 bg-white px-2">
            <span className="text-[10px] text-gray-400">app.teloos.com.br/dashboard</span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="flex h-[340px]">
          {/* Sidebar */}
          <div className="w-36 flex-shrink-0 bg-brand-dark p-3">
            <div className="mb-4 flex items-center gap-1.5 px-1">
              <div className="h-5 w-5 rounded bg-brand-blue" />
              <span className="text-xs font-bold text-white">Teloos</span>
            </div>
            <div className="space-y-0.5">
              {[
                ['Dashboard', true],
                ['Pedidos', false],
                ['Cardápio', false],
                ['Relatórios', false],
                ['Mesas', false],
                ['Financeiro', false],
              ].map(([label, active]) => (
                <div
                  key={label as string}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
                    active ? 'bg-brand-blue text-white' : 'text-white/50'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-white' : 'bg-white/30'}`}
                  />
                  {label as string}
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-hidden bg-gray-50 p-3">
            {/* Metric cards */}
            <div className="mb-3 grid grid-cols-3 gap-2">
              {[
                { label: 'Faturamento hoje', value: 'R$ 12.450', color: 'text-brand-blue' },
                { label: 'Pedidos', value: '143', color: 'text-brand-dark' },
                { label: 'Ticket médio', value: 'R$ 87', color: 'text-brand-orange' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm"
                >
                  <p className="text-[9px] text-gray-400">{m.label}</p>
                  <p className={`text-sm font-bold ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mb-2 rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
              <p className="mb-1.5 text-[9px] text-gray-400">Vendas — últimas 12h</p>
              <div className="flex h-14 items-end gap-[3px]">
                {CHART_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === CHART_BARS.length - 1
                          ? '#3F63E6'
                          : `rgba(63,99,230,${0.25 + (h / 100) * 0.55})`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Recent orders */}
            <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
              <p className="mb-1.5 text-[9px] text-gray-400">Pedidos recentes</p>
              <div className="space-y-1.5">
                {[
                  { order: 'Mesa 12', value: 'R$ 89,90', status: 'Em preparo', dot: 'bg-yellow-400' },
                  { order: 'Mesa 7', value: 'R$ 124,50', status: 'Pronto', dot: 'bg-green-400' },
                  { order: '#4821 Delivery', value: 'R$ 45,00', status: 'Entregue', dot: 'bg-brand-blue' },
                ].map((row) => (
                  <div
                    key={row.order}
                    className="flex items-center justify-between text-[9px]"
                  >
                    <span className="text-gray-600">{row.order}</span>
                    <span className="text-gray-500">{row.value}</span>
                    <span className="flex items-center gap-1">
                      <span className={`h-1.5 w-1.5 rounded-full ${row.dot}`} />
                      <span className="text-gray-500">{row.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-gradient-hero absolute inset-0" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-brand-ice/60 blur-3xl" />
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-orange" />
              Sistema integrado para food service
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-brand-dark md:text-5xl xl:text-6xl">
              Tecnologia que{' '}
              <span className="text-brand-blue">conecta</span>{' '}
              toda a gestão do seu restaurante
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-500">
              Do pedido ao relatório financeiro — hardware, software e integrações
              em um único sistema. Controle total da sua operação em tempo real.
            </p>

            {/* CTAs */}
            <div className="mb-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg shadow-brand-orange/25 px-6"
              >
                <Link href="/demo">
                  Solicitar demonstração
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-blue/30 text-brand-blue hover:bg-brand-blue/5 px-6"
              >
                <Link href="/sobre">Ver como funciona</Link>
              </Button>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-5">
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-brand-blue" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
