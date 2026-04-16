'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const WhatsAppSvg = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/layout/site-header'
import { toast } from 'sonner'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'comercial@teloos.com.br',
    href: 'mailto:comercial@teloos.com.br',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(41) 3732-0275',
    href: 'tel:+554137320275',
  },
  {
    icon: WhatsAppSvg,
    label: 'WhatsApp',
    value: '(41) 9550-7759',
    href: 'https://wa.me/5541955077590',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'R. Cassiano Ricardo, 1253 - Vargem Grande, Pinhais - PR, 83321-090',
    href: 'https://maps.google.com/?q=R.+Cassiano+Ricardo,+1253+Pinhais+PR',
  },
]

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: 'https://instagram.com/teloos.sistemas',
    label: 'Instagram',
  },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDone, setIsDone] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      restaurant: (form.elements.namedItem('restaurant') as HTMLSelectElement)
        .value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        .value,
    }

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const { error } = await res.json()
        throw new Error(error ?? 'Erro desconhecido')
      }

      setIsDone(true)
      toast.success('Mensagem enviada com sucesso!')
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Falha ao enviar. Tente novamente.'
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4F6FB]">
      <SiteHeader />

      {/* Background Decor */}
      <div className="bg-brand-blue/5 absolute top-[-5%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]" />
      <div className="bg-brand-orange/5 absolute bottom-[-5%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]" />

      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-brand-blue/10 text-brand-blue mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold">
                  Fale Conosco
                </div>
                <h1 className="text-brand-dark text-4xl leading-[1.1] font-black sm:text-5xl lg:text-7xl">
                  Vamos impulsionar seu <br className="hidden sm:block" />
                  <span className="text-brand-blue text-glow-blue">
                    restaurante juntos.
                  </span>
                </h1>
                <p className="text-brand-dark/70 mx-auto mt-8 max-w-2xl text-xl font-medium">
                  Tire suas dúvidas, solicite uma demonstração ou apenas diga um
                  olá. Nossa equipe está pronta para te atender.
                </p>
              </motion.div>
            </div>

            <div className="grid items-start gap-12 lg:grid-cols-5">
              {/* Contact Info */}
              <motion.div
                className="space-y-8 lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  {CONTACT_INFO.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue rounded-xl p-3 transition-colors group-hover:text-white">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-brand-dark/40 text-sm font-bold tracking-wider uppercase">
                          {item.label}
                        </p>
                        <p className="text-brand-dark text-lg font-bold">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="bg-brand-dark space-y-6 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold">Redes Sociais</h3>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="rounded-2xl bg-white/10 p-4 text-white transition-colors hover:bg-white/20"
                        aria-label={social.label}
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="shadow-brand-blue/5 rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-xl lg:p-12">
                  {isDone ? (
                    <div className="space-y-6 py-12 text-center">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-6 text-green-500">
                          <CheckCircle2 size={64} />
                        </div>
                      </div>
                      <h2 className="text-brand-dark text-3xl font-black">
                        Mensagem Enviada!
                      </h2>
                      <p className="text-brand-dark/60 text-lg font-medium">
                        Obrigado pelo contato. Em breve nossa equipe entrará em
                        contato com você.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsDone(false)}
                        className="rounded-full border-2 px-8 py-6 text-lg font-bold"
                      >
                        Enviar nova mensagem
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-brand-dark/60 ml-1 text-sm font-bold"
                          >
                            Nome Completo
                          </label>
                          <input
                            required
                            id="name"
                            type="text"
                            placeholder="Seu nome"
                            className="focus:border-brand-blue w-full rounded-2xl border-2 border-slate-100 px-6 py-4 font-medium transition-colors focus:outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-brand-dark/60 ml-1 text-sm font-bold"
                          >
                            E-mail Corporativo
                          </label>
                          <input
                            required
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            className="focus:border-brand-blue w-full rounded-2xl border-2 border-slate-100 px-6 py-4 font-medium transition-colors focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-brand-dark/60 ml-1 text-sm font-bold"
                          >
                            Telefone / WhatsApp
                          </label>
                          <input
                            required
                            id="phone"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            className="focus:border-brand-blue w-full rounded-2xl border-2 border-slate-100 px-6 py-4 font-medium transition-colors focus:outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="restaurant"
                            className="text-brand-dark/60 ml-1 text-sm font-bold"
                          >
                            Área de atuação
                          </label>
                          <select
                            required
                            id="restaurant"
                            defaultValue=""
                            className="focus:border-brand-blue w-full rounded-2xl border-2 border-slate-100 bg-white px-6 py-4 font-medium transition-colors focus:outline-none"
                          >
                            <option value="" disabled>
                              Selecione seu tipo de negócio
                            </option>
                            <option value="restaurante">Restaurante</option>
                            <option value="padaria">Padaria</option>
                            <option value="cafeteria">
                              Cafeteria / Doceria
                            </option>
                            <option value="hamburgueria">Hamburgueria</option>
                            <option value="pizzaria">Pizzaria</option>
                            <option value="bar">Bar / Pub</option>
                            <option value="buffet">Buffet / Eventos</option>
                            <option value="delivery-only">
                              Apenas Delivery (Dark Kitchen)
                            </option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-brand-dark/60 ml-1 text-sm font-bold"
                        >
                          Como podemos ajudar?
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="Conte-nos um pouco sobre sua necessidade..."
                          className="focus:border-brand-blue w-full resize-none rounded-2xl border-2 border-slate-100 px-6 py-4 font-medium transition-colors focus:outline-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-14 w-full rounded-full text-lg font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="animate-spin" />
                            Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Solicitar contato
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
