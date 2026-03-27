'use client'

import { AlertTriangle, ArrowRight, Loader2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ForceSessionDialogProps = {
  open: boolean
  message: string
  isSubmitting: boolean
  onClose: () => void
  onConfirm: () => void
}

export function ForceSessionDialog({
  open,
  message,
  isSubmitting,
  onClose,
  onConfirm,
}: ForceSessionDialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fechar confirmação de sessão"
      />

      <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-t-[3px] border-slate-100 border-t-amber-400 bg-white p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-brand-dark text-2xl font-black">
              Acesso em outra sessão
            </h2>
            <p className="text-brand-dark/60 mt-2 text-sm leading-relaxed font-medium">
              {message}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-brand-dark/45 hover:text-brand-blue transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="rounded-full border-2 px-6 py-6 font-bold"
          >
            Cancelar
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            disabled={isSubmitting}
            className="bg-brand-blue hover:bg-brand-blue/90 rounded-full px-6 py-6 font-bold text-white"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Continuando...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                Quero continuar aqui
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
