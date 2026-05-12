'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

const COOKIE_KEY = 'teloos_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      // Pequeno delay para não aparecer antes do site carregar
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-[300] w-[340px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/60"
        >
          {/* Topo colorido */}
          <div className="bg-brand-blue flex items-center gap-2.5 px-5 py-3.5">
            <Cookie className="h-4 w-4 shrink-0 text-white/80" strokeWidth={2} />
            <span className="text-[13px] font-bold tracking-wide text-white">
              Política de Cookies &amp; Privacidade
            </span>
          </div>

          {/* Corpo */}
          <div className="px-5 py-4">
            <p className="text-brand-dark/60 text-[13px] leading-relaxed">
              Usamos cookies para melhorar sua navegação, analisar o uso do site e oferecer uma experiência personalizada. Ao clicar em{' '}
              <strong className="text-brand-dark/80">"Aceitar"</strong>, você concorda com nossa{' '}
              <Link
                href="/privacidade"
                className="text-brand-blue font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            {/* Botões */}
            <div className="mt-4 flex items-center gap-2.5">
              <button
                onClick={reject}
                className="border-slate-200 text-brand-dark/60 hover:border-slate-300 hover:text-brand-dark flex-1 rounded-xl border px-4 py-2.5 text-[13px] font-semibold transition-all"
              >
                Rejeitar
              </button>
              <button
                onClick={accept}
                className="bg-brand-blue hover:bg-brand-blue/90 flex-1 rounded-xl px-4 py-2.5 text-[13px] font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
