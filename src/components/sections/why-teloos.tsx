'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  Plus,
  Minus,
  Settings2,
  LayoutDashboard,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Hotspot {
  id: string
  label: string
  description?: string
  x: number // percentagem 0-100
  y: number // percentagem 0-100
}

interface Reason {
  id: string
  number: string
  title: string
  description: string
  icon: React.ElementType
  bullets: string[]
  image: string
  hotspots: Hotspot[]
}

const REASONS: Reason[] = [
  {
    id: 'automacao',
    number: '01',
    title: 'Automação de processos',
    icon: Zap,
    description:
      'Elimine tarefas manuais e reduza erros operacionais. O sistema automatiza o fluxo de pedidos desde a entrada até a finalização.',
    bullets: [
      'Lançamento automático de pedidos na cozinha',
      'Faturamento e emissão fiscal integrados',
      'Conciliação de caixa e relatórios diários',
    ],
    image: '/images/Automação de processos_image.jpg',
    hotspots: [
      {
        id: 'h1',
        label: 'Entrada automática',
        description: 'Pedidos integrados direto do app/tablet',
        x: 25,
        y: 30,
      },
      {
        id: 'h2',
        label: 'KDS Inteligente',
        description: 'Monitoramento de tempo de preparo',
        x: 65,
        y: 45,
      },
      {
        id: 'h3',
        label: 'Gestão Fiscal',
        description: 'Emissão de NFC-e em 2 segundos',
        x: 40,
        y: 75,
      },
    ],
  },
  {
    id: 'controle',
    number: '02',
    title: 'Controle operacional total',
    icon: LayoutDashboard,
    description:
      'Visão em tempo real de toda a operação, mesas, pedidos, cozinha e financeiro em um único painel centralizado.',
    bullets: [
      'Dashboard de operação ao vivo',
      'Alertas de produção e prazo',
      'Histórico completo rastreável',
    ],
    image: '/images/Controle operacional total_image.jpg',
    hotspots: [
      {
        id: 'h4',
        label: 'Dashboard Live',
        description: 'Principais métricas na palma da mão',
        x: 30,
        y: 25,
      },
      {
        id: 'h5',
        label: 'Mapas de Mesas',
        description: 'Status de ocupação em tempo real',
        x: 70,
        y: 40,
      },
      {
        id: 'h6',
        label: 'Fluxo de Caixa',
        description: 'Entradas e saídas automatizadas',
        x: 50,
        y: 80,
      },
    ],
  },
  {
    id: 'integracao',
    number: '03',
    title: 'Integração tecnológica',
    icon: Settings2,
    description:
      'Hardware e software nativamente integrados, PDV, impressoras, balanças, totens de autoatendimento e marketplaces.',
    bullets: [
      'Hardware homologado e suportado',
      'APIs abertas para parceiros',
      'Integrações com principais marketplaces',
    ],
    image: '/images/Integração tecnológica_image.jpg',
    hotspots: [
      {
        id: 'h7',
        label: 'Hardware Plug&Play',
        description: 'Conexão sem fio em toda a rede',
        x: 20,
        y: 40,
      },
      {
        id: 'h8',
        label: 'Marketplace Hub',
        description: 'Ifood e Rappi no mesmo gestor',
        x: 60,
        y: 30,
      },
      {
        id: 'h9',
        label: 'Autoatendimento',
        description: 'Redução de filas com totens interativos',
        x: 55,
        y: 70,
      },
    ],
  },
]

export function WhyTeloosSection() {
  const [activeTabId, setActiveTabId] = useState<string | null>(REASONS[0].id)
  const activeTab = REASONS.find((r) => r.id === activeTabId) || REASONS[0]

  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const hoverCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )

  const openHotspot = (id: string) => {
    if (hoverCloseTimeoutRef.current) {
      clearTimeout(hoverCloseTimeoutRef.current)
      hoverCloseTimeoutRef.current = null
    }
    setActiveHotspot(id)
  }

  const closeHotspot = (id: string) => {
    if (hoverCloseTimeoutRef.current) {
      clearTimeout(hoverCloseTimeoutRef.current)
    }
    hoverCloseTimeoutRef.current = setTimeout(() => {
      setActiveHotspot((prev) => (prev === id ? null : prev))
    }, 120)
  }

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* 1. TOPO DA SEÇÃO */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue mb-6 inline-block text-[13px] font-bold tracking-[0.2em] uppercase"
          >
            POR QUE TELOOS
          </motion.span>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-dark max-w-[700px] text-[34px] leading-[1.1] font-extrabold sm:text-[42px] lg:text-[52px]"
            >
              Tecnologia que transforma a <br className="hidden lg:block" />
              <span className="text-brand-blue">gestão do seu negócio</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-dark/50 max-w-[400px] text-[17px] leading-relaxed lg:mb-2"
            >
              Mais do que um software, uma plataforma completa para digitalizar
              e otimizar cada etapa da sua operação.
            </motion.p>
          </div>
        </div>

        {/* 2. CORPO PRINCIPAL */}
        <div className="grid gap-16 lg:grid-cols-[400px_1fr] lg:items-center">
          {/* COLUNA ESQUERDA: TABS */}
          <div className="flex flex-col gap-4">
            {REASONS.map((reason) => {
              const isActive = activeTabId === reason.id
              const Icon = reason.icon

              return (
                <button
                  key={reason.id}
                  onClick={() => setActiveTabId(isActive ? null : reason.id)}
                  className={cn(
                    'relative flex w-full cursor-pointer flex-col items-start rounded-[2rem] p-8 text-left transition-all duration-300',
                    isActive
                      ? 'bg-brand-blue/5 ring-brand-blue/10 shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)] ring-1'
                      : 'opacity-60 hover:bg-gray-50 hover:opacity-100'
                  )}
                >
                  {/* Número de fundo no estilo premium */}
                  <span
                    className={cn(
                      'pointer-events-none absolute right-8 bottom-8 text-7xl font-black transition-opacity',
                      isActive
                        ? 'text-brand-blue opacity-15'
                        : 'text-brand-dark opacity-10'
                    )}
                  >
                    {reason.number}
                  </span>

                  <div className="pointer-events-none mb-6 flex w-full items-center justify-between">
                    <div className="text-brand-blue flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                      <Icon size={24} strokeWidth={2.5} />
                    </div>

                    <div
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300',
                        isActive
                          ? 'bg-brand-blue rotate-0 text-white'
                          : 'bg-brand-blue/10 text-brand-blue rotate-0 group-hover:scale-110'
                      )}
                    >
                      {isActive ? (
                        <Minus size={16} strokeWidth={3} />
                      ) : (
                        <Plus size={16} strokeWidth={3} />
                      )}
                    </div>
                  </div>

                  <h3
                    className={cn(
                      'text-brand-dark mb-3 text-xl font-bold tracking-tight',
                      isActive && 'text-brand-blue'
                    )}
                  >
                    {reason.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-brand-dark/60 mb-6 text-[15px] leading-relaxed">
                          {reason.description}
                        </p>
                        <ul className="space-y-3">
                          {reason.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="text-brand-dark/80 flex items-start gap-2 text-[14px] font-medium"
                            >
                              <CheckCircle2 className="text-brand-blue mt-0.5 h-4 w-4 shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              )
            })}
          </div>

          {/* COLUNA DIREITA: VISUAL COM HOTSPOTS */}
          <div className="relative">
            {/* Background Glows para profundidade */}
            <div className="absolute -inset-10 -z-10 overflow-hidden opacity-30">
              <div className="bg-brand-blue/20 animate-breathe absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl" />
              <div
                className="bg-brand-orange/10 animate-breathe absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl"
                style={{ animationDelay: '-4s' }}
              />
            </div>

            <div className="border-brand-blue/10 group/image relative aspect-video overflow-hidden rounded-[3rem] border bg-white/40 p-4 shadow-2xl backdrop-blur-sm lg:aspect-square lg:p-8 xl:aspect-[4/3]">
              <AnimatePresence mode="wait">
                {activeTabId ? (
                  <motion.div
                    key={activeTabId}
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -40, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-full w-full"
                  >
                    {/* Imagem Principal com Overlay */}
                    <div className="shadow-brand-blue/10 relative h-full w-full overflow-hidden rounded-[2rem] shadow-sm">
                      <Image
                        src={activeTab.image}
                        alt={activeTab.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                        priority
                      />
                      {/* Overlay sutil para destacar hotpoints */}
                      <div className="from-brand-dark/20 pointer-events-none absolute inset-0 bg-gradient-to-tr to-transparent" />
                    </div>

                    {/* Hotspots */}
                    {activeTab.hotspots.map((hotspot) => {
                      const isOpen = activeHotspot === hotspot.id

                      return (
                        <div
                          key={hotspot.id}
                          className="absolute z-30"
                          style={{
                            left: `${hotspot.x}%`,
                            top: `${hotspot.y}%`,
                          }}
                        >
                          <div
                            className="relative flex items-center justify-center"
                            onMouseEnter={() => openHotspot(hotspot.id)}
                            onMouseLeave={() => closeHotspot(hotspot.id)}
                          >
                            {/* Círculo pulsante de fundo */}
                            {!isOpen && (
                              <div className="bg-brand-blue/20 absolute inset-[-10px] animate-ping rounded-full duration-[2000ms]" />
                            )}

                            {/* Botão do Hotspot */}
                            <motion.button
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.95 }}
                              className={cn(
                                'shadow-brand-dark/10 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 shadow-xl transition-all duration-300',
                                isOpen
                                  ? 'bg-brand-blue rotate-45 border-white text-white'
                                  : 'border-brand-blue/10 text-brand-blue hover:bg-brand-blue bg-white hover:text-white'
                              )}
                            >
                              <Plus size={18} strokeWidth={3} />
                            </motion.button>

                            {/* Tooltip Dinâmico */}
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 10,
                                    x: '-50%',
                                  }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    x: '-50%',
                                  }}
                                  exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 10,
                                    x: '-50%',
                                  }}
                                  transition={{ type: 'spring', damping: 20 }}
                                  className="bg-brand-dark/95 pointer-events-none absolute bottom-full left-1/2 z-50 mb-4 w-48 rounded-2xl p-4 text-white shadow-2xl backdrop-blur-md sm:w-64"
                                >
                                  <h4 className="mb-1 text-sm font-bold text-white">
                                    {hotspot.label}
                                  </h4>
                                  <p className="text-[12px] leading-snug text-white/70">
                                    {hotspot.description}
                                  </p>
                                  {/* Seta do Tooltip */}
                                  <div className="bg-brand-dark/95 absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      )
                    })}
                  </motion.div>
                ) : (
                  <div className="text-brand-dark/30 flex h-full w-full items-center justify-center bg-gray-50/50 p-12 text-center italic">
                    <div className="max-w-[280px]">
                      <Settings2
                        size={48}
                        className="mx-auto mb-4 opacity-10"
                      />
                      <p>
                        Selecione um dos temas ao lado para ver como a Teloos
                        transforma sua operação.
                      </p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Indicadores Visuais abaixo da imagem (Desktop) */}
            <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-3 opacity-0 lg:opacity-100">
              {REASONS.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => setActiveTabId(reason.id)}
                  className={cn(
                    'h-1.5 cursor-pointer rounded-full transition-all duration-500',
                    activeTabId === reason.id
                      ? 'bg-brand-blue w-12'
                      : 'bg-brand-blue/20 hover:bg-brand-blue/40 w-4'
                  )}
                  aria-label={`Ver motivo ${reason.number}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
