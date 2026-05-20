'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/shared'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    question: 'O que é a Teloos?',
    answer:
      'A Teloos é uma plataforma completa de gestão para food service. Reunimos em um só lugar tudo que seu restaurante, bar ou lanchonete precisa: PDV, cardápio digital, autoatendimento, delivery integrado, controle de estoque e relatórios financeiros, com tecnologia moderna e suporte humanizado.',
  },
  {
    question: 'Como funciona o sistema de PDV da Teloos?',
    answer:
      'O PDV da Teloos é intuitivo e rápido. Registre pedidos em segundos, controle mesas, integre com a cozinha via KDS e aceite múltiplas formas de pagamento. Tudo sincronizado em tempo real com o estoque e os relatórios do seu negócio.',
  },
  {
    question: 'A Teloos funciona offline?',
    answer:
      'Sim. O sistema foi desenvolvido para continuar operando mesmo sem conexão com a internet. Seus pedidos, pagamentos e operações seguem normalmente e sincronizam automaticamente quando a conexão for restabelecida.',
  },
  {
    question: 'Quais tipos de negócios podem usar a Teloos?',
    answer:
      'A Teloos atende restaurantes, bares, lanchonetes, hamburguerias, pizzarias, cafeterias, dark kitchens, redes e franquias. Qualquer negócio do food service que queira modernizar e escalar sua operação.',
  },
  {
    question: 'A Teloos possui um sistema de autoatendimento?',
    answer:
      'Sim. Oferecemos cardápio digital via QR Code e totens de autoatendimento, permitindo que o cliente faça o pedido de forma autônoma. Isso reduz filas, diminui erros e libera sua equipe para focar na experiência do cliente.',
  },
  {
    question: 'O sistema da Teloos emite notas fiscais?',
    answer:
      'Sim. A Teloos emite NFC-e (Nota Fiscal de Consumidor Eletrônica) e NF-e integradas ao fluxo de venda, com suporte a SAT Fiscal. Tudo dentro das exigências fiscais brasileiras, sem complicação.',
  },
  {
    question: 'A Teloos oferece controle financeiro e de estoque?',
    answer:
      'Sim. A Teloos possui módulos completos de controle de estoque e gestão financeira integrados à operação. Acompanhe entradas, saídas, CMV, fluxo de caixa e relatórios em tempo real, tudo em um só lugar, sem planilhas ou sistemas separados.',
  },
  {
    question: 'A Teloos tem integração com maquininhas de cartão?',
    answer:
      'Sim. A Teloos se integra com as principais maquininhas do mercado, permitindo pagamentos por cartão de débito, crédito, Pix e carteiras digitais diretamente pelo PDV. A integração elimina a necessidade de digitar valores manualmente e reduz erros no fechamento.',
  },
  {
    question: 'A Teloos tem aplicativo mobile?',
    answer:
      'Sim. A Teloos conta com aplicativo mobile para gestão do negócio, permitindo acompanhar vendas, pedidos e indicadores em tempo real de qualquer lugar. Ideal para donos e gerentes que precisam de visibilidade mesmo fora do estabelecimento.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="text-brand-blue mb-4 inline-block text-[13px] font-bold tracking-[0.2em] uppercase">
              Dúvidas
            </span>
            <h2 className="text-brand-dark mb-4 text-[34px] leading-tight font-black sm:text-[42px] lg:text-[48px]">
              Perguntas{' '}
              <span className="text-brand-blue">frequentes</span>
            </h2>
            <p className="text-brand-dark/50 text-[17px] leading-relaxed">
              Tudo que você precisa saber antes de começar.
            </p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-sm">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={cn(
                      'flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-200',
                      isOpen ? 'text-brand-blue' : 'text-brand-dark hover:text-brand-blue'
                    )}
                  >
                    <span className="text-[15px] font-semibold">{faq.question}</span>
                    <span className="shrink-0">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-brand-dark/60 px-6 pb-6 text-[15px] leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Rodapé FAQ */}
          <p className="mt-8 text-center text-[15px] text-brand-dark/50">
            Ainda tem dúvidas?{' '}
            <Link
              href="/contato"
              className="text-brand-blue font-semibold hover:underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              Entre em contato com nossa equipe
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
