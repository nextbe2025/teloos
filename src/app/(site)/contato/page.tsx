'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/layout/site-header'
import { toast } from 'sonner'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@teloos.com.br',
    href: 'mailto:contato@teloos.com.br',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(11) 99999-9999',
    href: 'tel:+5511999999999',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(11) 99999-9999',
    href: 'https://wa.me/5511999999999',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'São Paulo, SP - Brasil',
    href: '#',
  },
]

const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDone, setIsDone] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsDone(true)
    toast.success('Mensagem enviada com sucesso!')
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
                            Nome do Restaurante
                          </label>
                          <input
                            required
                            id="restaurant"
                            type="text"
                            placeholder="Sua empresa"
                            className="focus:border-brand-blue w-full rounded-2xl border-2 border-slate-100 px-6 py-4 font-medium transition-colors focus:outline-none"
                          />
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
                        className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 w-full rounded-2xl py-8 text-xl font-bold shadow-lg transition-all hover:-translate-y-1 active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="animate-spin" />
                            Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={20} />
                            Enviar Mensagem
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
