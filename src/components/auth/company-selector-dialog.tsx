'use client'

import { Building2, Check, X } from 'lucide-react'
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

      <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-slate-100 bg-white p-6 shadow-2xl sm:p-8">
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
          <label
            htmlFor="companyId"
            className="text-brand-dark/60 ml-1 text-sm font-bold"
          >
            Empresa
          </label>
          <select
            id="companyId"
            value={selectedCompanyId}
            onChange={(event) => onSelectCompany(event.target.value)}
            className="focus:border-brand-blue text-brand-dark w-full rounded-2xl border-2 border-slate-100 bg-white px-5 py-4 font-medium transition-colors focus:outline-none"
          >
            <option value="" disabled>
              Selecione uma empresa
            </option>
            {companies.map((company) => (
              <option key={company.id} value={String(company.id)}>
                {company.nome}
              </option>
            ))}
          </select>
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
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4" />
              {isSubmitting ? 'Entrando...' : 'Acessar empresa'}
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
