import { Star } from 'lucide-react'
import { Container, Section } from '@/components/shared'

const TESTIMONIALS = [
  {
    quote:
      'Desde que implantamos a Teloos, reduzimos em 35% o tempo de atendimento nas mesas. A integração com a cozinha via KDS foi um divisor de águas na nossa operação.',
    author: 'Ricardo Almeida',
    role: 'Proprietário',
    company: 'Hamburgueria Almeida — São Paulo, SP',
    rating: 5,
  },
  {
    quote:
      'Com o painel de BI, finalmente consigo entender quais produtos têm maior margem e tomar decisões estratégicas com dados reais. Antes era tudo no feeling.',
    author: 'Fernanda Costa',
    role: 'Gestora de Operações',
    company: 'Rede Bella Cucina — 8 unidades',
    rating: 5,
  },
  {
    quote:
      'Nossa dark kitchen triplicou o volume de pedidos sem contratar mais ninguém. A automação dos fluxos da Teloos tornou isso possível sem perder qualidade.',
    author: 'Marcos Oliveira',
    role: 'CEO',
    company: 'FoodLab Dark Kitchen — Rio de Janeiro, RJ',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <Section id="depoimentos" className="bg-brand-ice/40">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Clientes
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            O que dizem quem já transformou a gestão
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-500">
            Restaurantes, redes e dark kitchens usando Teloos para crescer com controle e eficiência.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 flex-1 text-gray-600 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                  {t.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">{t.author}</p>
                  <p className="text-xs text-gray-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
