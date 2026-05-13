'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Store, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

type AuthShellProps = {
  eyebrow: string
  title: string
  description: string
  variant?: 'default' | 'minimal'
  sideContent?: React.ReactNode
  children: React.ReactNode
}

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Acesso seguro',
    description:
      'Fluxo protegido e alinhado ao ambiente operacional da Teloos.',
  },
  {
    icon: Store,
    title: 'Operação centralizada',
    description:
      'Entre no ecossistema que conecta pedidos, atendimento e gestão.',
  },
  {
    icon: Sparkles,
    title: 'Experiência consistente',
    description:
      'Mesma linguagem visual e mesma clareza do restante do projeto.',
  },
] as const

export function AuthShell({
  eyebrow,
  title,
  description,
  variant = 'default',
  sideContent,
  children,
}: AuthShellProps) {
  const isMinimal = variant === 'minimal'
  const hasSidePanel = !isMinimal || Boolean(sideContent)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4F6FB]">
      <div className="bg-brand-blue/5 absolute top-[-5%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]" />
      <div className="bg-brand-orange/5 absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/brand/Logo Teloos Principal.png"
              alt="Teloos"
              width={220}
              height={64}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <Link
            href="/"
            className="text-brand-dark/60 hover:text-brand-blue text-sm font-bold transition-colors"
          >
            Voltar para o site
          </Link>
        </div>

        <div
          className={`flex flex-1 items-center ${hasSidePanel ? 'py-8 lg:py-12' : isMinimal ? 'py-8 lg:py-10' : 'py-10 lg:py-14'}`}
        >
          <div
            className={
              hasSidePanel
                ? 'grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12'
                : isMinimal
                  ? 'mx-auto w-full max-w-[520px]'
                  : 'grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12'
            }
          >
            {hasSidePanel ? (
              <motion.section
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden lg:block"
              >
                {sideContent ? (
                  <div className="max-w-xl">{sideContent}</div>
                ) : (
                  <div className="max-w-xl">
                    <div className="bg-brand-blue/10 text-brand-blue mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold">
                      {eyebrow}
                    </div>

                    <h1 className="text-brand-dark text-5xl leading-[1.05] font-black tracking-tight xl:text-6xl">
                      {title}
                    </h1>

                    <p className="text-brand-dark/65 mt-7 max-w-lg text-lg leading-relaxed font-medium">
                      {description}
                    </p>

                    <div className="mt-10 space-y-4">
                      {TRUST_ITEMS.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
                        >
                          <div className="bg-brand-blue/10 text-brand-blue flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-brand-dark text-base font-black">
                              {item.title}
                            </p>
                            <p className="text-brand-dark/55 mt-1 text-sm leading-relaxed font-medium">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.section>
            ) : null}

            <motion.section
              initial={{ opacity: 0, x: hasSidePanel ? 24 : 0, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`mx-auto w-full ${hasSidePanel ? 'max-w-[560px]' : isMinimal ? 'max-w-[520px]' : 'max-w-[560px]'}`}
            >
              <div
                className={`shadow-brand-blue/5 border border-slate-100 bg-white shadow-xl ${isMinimal ? 'rounded-[2rem] p-6 sm:p-8' : 'rounded-[2.5rem] p-6 sm:p-8 lg:p-10'}`}
              >
                <div className={`mb-8 ${isMinimal ? '' : 'lg:hidden'}`}>
                  {!isMinimal && (
                    <div className="bg-brand-blue/10 text-brand-blue mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold">
                      {eyebrow}
                    </div>
                  )}
                  <h1
                    className={`text-brand-dark leading-[1.1] font-black ${isMinimal ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}
                  >
                    {title}
                  </h1>
                  <p
                    className={`text-brand-dark/65 mt-3 font-medium ${isMinimal ? 'max-w-md text-sm leading-6 sm:text-base' : 'text-base leading-relaxed'}`}
                  >
                    {description}
                  </p>
                </div>

                {children}
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Elemento Decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="pointer-events-none absolute -bottom-64 -left-72 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/__elementos 100.png"
          alt=""
          width={1200}
          height={1200}
          className="w-[1200px] opacity-[0.06]"
        />
      </motion.div>
    </div>
  )
}
