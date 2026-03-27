'use client'

import { Building2, Check, Loader2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { CompanyOption } from '@/lib/auth/types'

type CompanySelectorDialogProps = {
  open: boolean
  companies: CompanyOption[]
  message: string
  selectedCompanyId: string
  isSubmitting: boolean
  onClose: () => void
  onSelectCompany: (companyId: string) => void
  onConfirm: () => void
}

export function CompanySelectorDialog({
  open,
  companies,
  message,
  selectedCompanyId,
  isSubmitting,
  onClose,
  onSelectCompany,
  onConfirm,
}: CompanySelectorDialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fechar seleção de empresa"
      />

      <div className="border-t-brand-blue relative z-10 w-full max-w-xl rounded-[2rem] border border-t-[3px] border-slate-100 bg-white p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="bg-brand-blue/10 text-brand-blue mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
              <Building2 className="h-5 w-5" />
            </div>
            <h2 className="text-brand-dark text-2xl font-black">
              Escolha a empresa
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

        <div className="space-y-3">
          <p className="text-brand-dark/60 ml-1 text-sm font-bold">Empresa</p>
          <div className="max-h-[240px] space-y-2 overflow-y-auto pr-1">
            {companies.map((company) => (
              <button
                key={company.id}
                type="button"
                onClick={() => onSelectCompany(String(company.id))}
                className={cn(
                  'flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all',
                  selectedCompanyId === String(company.id)
                    ? 'border-brand-blue bg-brand-blue/5'
                    : 'hover:border-brand-blue/30 border-slate-100 bg-white hover:bg-slate-50'
                )}
              >
                <div
                  className={cn(
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                    selectedCompanyId === String(company.id)
                      ? 'border-brand-blue'
                      : 'border-slate-200'
                  )}
                >
                  {selectedCompanyId === String(company.id) && (
                    <div className="bg-brand-blue h-2.5 w-2.5 rounded-full" />
                  )}
                </div>
                <span
                  className={cn(
                    'text-sm font-bold',
                    selectedCompanyId === String(company.id)
                      ? 'text-brand-dark'
                      : 'text-brand-dark/70'
                  )}
                >
                  {company.nome}
                </span>
              </button>
            ))}
          </div>
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
            disabled={!selectedCompanyId || isSubmitting}
            className="bg-brand-blue hover:bg-brand-blue/90 rounded-full px-6 py-6 font-bold text-white"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Entrando...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" />
                Acessar empresa
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
