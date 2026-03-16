import Link from 'next/link'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #11245F 0%, #3F63E6 55%, #FF7A00 100%)',
        }}
      />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-3xl" />
      </div>

      <Container className="relative text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
            <CalendarCheck className="h-4 w-4" />
            Demo gratuita — sem compromisso
          </div>

          <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Pronto para transformar a operação do seu restaurante?
          </h2>

          <p className="mb-10 text-lg text-white/70 leading-relaxed">
            Agende uma demonstração personalizada e veja como a Teloos pode digitalizar, automatizar e escalar seu negócio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-dark hover:bg-white/90 shadow-xl shadow-brand-dark/20 px-8 h-12 text-base font-semibold"
            >
              <Link href="/demo">
                Solicitar demonstração
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 border border-white/30 px-8 h-12 text-base"
            >
              <Link href="/contato">Falar com especialista</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Implantação assistida · Suporte 24/7 · Sem taxa de setup
          </p>
        </div>
      </Container>
    </section>
  )
}
