'use client'

import React from 'react'
import Link from 'next/link'
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Suavização do movimento (Spring)
  const springConfig = { damping: 25, stiffness: 200 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Template para o background dinâmico
  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.12), transparent 80%)`

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <section
      className="group/cta relative overflow-hidden py-24 md:py-32"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Gradient background (Base animada fixa) */}
      <div
        className="animate-gradient-slow absolute inset-0 opacity-95"
        style={{
          background:
            'linear-gradient(135deg, #11245F 0%, #3F63E6 45%, #FF7A00 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Mouse Follow Light Layer (Luz interativa) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100"
        style={{ background }}
      />

      {/* Layer Extra de Luz (Premium Overlay - Pulsação) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-brand-blue/30 animate-breathe absolute -top-[20%] -left-[10%] h-[80%] w-[80%] rounded-full blur-[120px]" />
        <div
          className="bg-brand-orange/20 animate-breathe absolute -right-[10%] -bottom-[20%] h-[80%] w-[80%] rounded-full blur-[120px]"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-1/3 bg-gradient-to-r from-white/5 to-transparent" />
      </div>

      <Container className="relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-md">
            <CalendarCheck className="text-brand-orange h-4 w-4" />
            Agenda aberta para demonstrações premium
          </div>

          <h2 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Pronto para transformar a <br className="hidden md:block" />
            <span className="text-white/90">operação do seu restaurante?</span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-white/80">
            Agende uma demonstração personalizada e veja como a Teloos pode
            digitalizar, automatizar e escalar seu negócio com inteligência.
          </p>

          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group text-brand-dark animate-shine relative h-14 overflow-hidden rounded-full bg-white px-10 text-lg font-bold shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] active:scale-95"
            >
              <Link href="/contato" className="flex items-center">
                <span className="relative z-10">Solicitar demonstração</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/60">
            <span className="flex items-center gap-2">
              <div className="bg-brand-orange h-1.5 w-1.5 rounded-full shadow-[0_0_8px_#FF7A00]" />
              Implantação assistida
            </span>
            <span className="flex items-center gap-2">
              <div className="bg-brand-orange h-1.5 w-1.5 rounded-full shadow-[0_0_8px_#FF7A00]" />
              Suporte 24/7 especializado
            </span>
            <span className="flex items-center gap-2">
              <div className="bg-brand-orange h-1.5 w-1.5 rounded-full shadow-[0_0_8px_#FF7A00]" />
              Sem taxa de setup
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
