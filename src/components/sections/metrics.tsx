'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Zap, HeartHandshake } from 'lucide-react'

const METRICS: {
  icon: React.ElementType
  value: string | null
  label: string
  subtitle?: string
  description: string
}[] = [
  {
    icon: Rocket,
    value: '+3.000',
    label: 'Licenças ativas',
    description: 'clientes confiam na plataforma',
  },
  {
    icon: ShieldCheck,
    value: '+200k',
    label: 'Pedidos por dia',
    description: 'transações processadas com segurança',
  },
  {
    icon: Zap,
    value: '+5.000',
    label: 'PDVs em operação',
    description: 'terminais ativos em todo o Brasil',
  },
  {
    icon: HeartHandshake,
    value: null,
    label: 'Atendimento Humanizado',
    subtitle: 'pessoas reais, respostas reais',
    description: 'suporte de verdade para o seu negócio',
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

                {metric.value ? (
                  <h2 className="mb-1 text-4xl font-extrabold tracking-tight">
                    {metric.value}
                  </h2>
                ) : (
                  <div className="mb-2">
                    <p className="text-[22px] leading-tight font-extrabold tracking-tight">
                      {metric.label}
                    </p>
                    {metric.subtitle && (
                      <p className="mt-1 text-[12px] font-semibold text-white/60">
                        {metric.subtitle}
                      </p>
                    )}
                  </div>
                )}

                {metric.value && (
                  <p className="mb-1 text-sm font-bold tracking-wider text-white uppercase">
                    {metric.label}
                  </p>
                )}
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
