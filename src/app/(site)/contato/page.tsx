'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/layout/site-header';
import { toast } from 'sonner';

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
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsDone(true);
    toast.success('Mensagem enviada com sucesso!');
  }

  return (
    <div className="relative min-h-screen bg-[#F4F6FB] overflow-hidden">
      <SiteHeader />
      
      {/* Background Decor */}
      <div className="absolute top-[-5%] right-[-10%] h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-[120px]" />
      <div className="absolute bottom-[-5%] left-[-10%] h-[600px] w-[600px] rounded-full bg-brand-orange/5 blur-[120px]" />

      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 inline-flex items-center rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
                  Fale Conosco
                </div>
                <h1 className="text-brand-dark text-4xl font-black leading-[1.1] sm:text-5xl lg:text-7xl">
                  Vamos impulsionar seu <br className="hidden sm:block" />
                  <span className="text-brand-blue text-glow-blue">negócio juntos.</span>
                </h1>
                <p className="text-brand-dark/70 mt-8 text-xl font-medium max-w-2xl mx-auto">
                  Tire suas dúvidas, solicite uma demonstração ou apenas diga um olá. Nossa equipe está pronta para te atender.
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Contact Info */}
              <motion.div 
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  {CONTACT_INFO.map((item) => (
                    <a 
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="p-3 rounded-xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-dark/40 uppercase tracking-wider">{item.label}</p>
                        <p className="text-lg font-bold text-brand-dark">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="p-8 rounded-3xl bg-brand-dark text-white space-y-6">
                  <h3 className="text-xl font-bold">Redes Sociais</h3>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((social) => (
                      <a 
                        key={social.label}
                        href={social.href}
                        className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-white"
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
                <div className="p-8 lg:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-brand-blue/5">
                  {isDone ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="flex justify-center">
                        <div className="p-6 rounded-full bg-green-50 text-green-500">
                          <CheckCircle2 size={64} />
                        </div>
                      </div>
                      <h2 className="text-3xl font-black text-brand-dark">Mensagem Enviada!</h2>
                      <p className="text-brand-dark/60 text-lg font-medium">
                        Obrigado pelo contato. Em breve nossa equipe entrará em contato com você.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsDone(false)}
                        className="rounded-full px-8 py-6 text-lg font-bold border-2"
                      >
                        Enviar nova mensagem
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-bold text-brand-dark/60 ml-1">Nome Completo</label>
                          <input 
                            required
                            id="name"
                            type="text" 
                            placeholder="Seu nome"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-brand-blue focus:outline-none transition-colors font-medium"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold text-brand-dark/60 ml-1">E-mail Corporativo</label>
                          <input 
                            required
                            id="email"
                            type="email" 
                            placeholder="seu@email.com"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-brand-blue focus:outline-none transition-colors font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-bold text-brand-dark/60 ml-1">Telefone / WhatsApp</label>
                          <input 
                            required
                            id="phone"
                            type="tel" 
                            placeholder="(11) 99999-9999"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-brand-blue focus:outline-none transition-colors font-medium"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="restaurant" className="text-sm font-bold text-brand-dark/60 ml-1">Nome do Restaurante</label>
                          <input 
                            required
                            id="restaurant"
                            type="text" 
                            placeholder="Sua empresa"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-brand-blue focus:outline-none transition-colors font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-brand-dark/60 ml-1">Como podemos ajudar?</label>
                        <textarea 
                          id="message"
                          rows={4}
                          placeholder="Conte-nos um pouco sobre sua necessidade..."
                          className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-brand-blue focus:outline-none transition-colors font-medium resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full rounded-2xl py-8 text-xl font-bold bg-brand-blue hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20 transition-all hover:-translate-y-1 active:scale-[0.98]"
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
  );
}