'use client'

import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Zap, Headphones } from 'lucide-react'

const METRICS = [
  {
    icon: Rocket,
    value: '500+',
    label: 'Restaurantes ativos',
    description: 'clientes confiam na plataforma',
  },
  {
    icon: ShieldCheck,
    value: '10M+',
    label: 'Pedidos processados',
    description: 'transações processadas com segurança',
  },
  {
    icon: Zap,
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
    <section className="relative bg-[#F4F6FB] pb-32 lg:pb-52">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-brand-blue shadow-brand-blue/20 hover:shadow-brand-blue/30 relative overflow-hidden rounded-[2.5rem] p-8 text-white shadow-xl transition-all hover:scale-[1.05] hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                  <metric.icon className="h-6 w-6" />
                </div>

                <h2 className="mb-1 text-4xl font-extrabold tracking-tight">
                  {metric.value}
                </h2>

                <p className="mb-1 text-sm font-bold tracking-wider text-white uppercase">
                  {metric.label}
                </p>
                <p className="text-xs leading-relaxed font-medium text-white/50">
                  {metric.description}
                </p>
              </div>

              {/* Decorative detail */}
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white/5 transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
