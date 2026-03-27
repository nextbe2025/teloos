'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Eye, EyeOff, Loader2, LockKeyhole } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { AuthShell } from '@/components/auth/auth-shell'
import { CompanySelectorDialog } from '@/components/auth/company-selector-dialog'
import { ForceSessionDialog } from '@/components/auth/force-session-dialog'
import { useAuthLoginFlow } from '@/components/auth/use-auth-login-flow'
import { resetPassword } from '@/lib/auth/api'
import { normalizeAuthError } from '@/lib/auth/errors'
import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from '@/lib/auth/schemas'
import { Button } from '@/components/ui/button'

const inputClassName =
  'focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-brand-dark placeholder:text-slate-400 caret-brand-dark w-full rounded-2xl border-2 border-slate-100 bg-white px-5 py-4 font-medium transition-all focus:outline-none'

export function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
      password: '',
      password_confirmation: '',
    },
  })

  const {
    busyAction,
    companySelection,
    selectedCompanyId,
    forceSessionMessage,
    loginWithCredentials,
    submitCompanyLogin,
    confirmForceLogin,
    setSelectedCompanyId,
    closeCompanySelection,
    closeForceSession,
  } = useAuthLoginFlow()

  const token = searchParams.get('token') ?? ''

  const onSubmit = handleSubmit(async (values) => {
    if (!token) {
      toast.error('Token de redefinição inválido ou ausente.')
      return
    }

    try {
      await resetPassword({
        ...values,
        token,
      })

      toast.success('Senha alterada com sucesso. Tentando autenticar...')

      await loginWithCredentials({
        email: values.email,
        password: values.password,
        remember: true,
      })
    } catch (error) {
      const normalized = normalizeAuthError(error)
      toast.error(normalized.message)
    }
  })

  return (
    <>
      <AuthShell
        eyebrow="Nova senha"
        title="Defina uma nova senha para continuar."
        description="Crie uma nova senha para recuperar o acesso à plataforma Teloos e retomar sua operação."
      >
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-brand-dark/60 ml-1 text-sm font-bold"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="seu@email.com"
              className={`${inputClassName} ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : ''}`}
              {...register('email')}
            />
            {errors.email ? (
              <p className="ml-1 text-sm font-medium text-red-600">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-brand-dark/60 ml-1 text-sm font-bold"
            >
              Nova senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="Digite sua nova senha"
                className={`${inputClassName} pr-14 ${errors.password ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : ''}`}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="text-brand-dark/45 hover:text-brand-blue absolute top-1/2 right-4 -translate-y-1/2 transition-colors"
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password ? (
              <p className="ml-1 text-sm font-medium text-red-600">
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password_confirmation"
              className="text-brand-dark/60 ml-1 text-sm font-bold"
            >
              Confirmar nova senha
            </label>
            <div className="relative">
              <input
                id="password_confirmation"
                type={showPasswordConfirmation ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="Confirme sua nova senha"
                className={`${inputClassName} pr-14 ${errors.password_confirmation ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : ''}`}
                {...register('password_confirmation')}
              />
              <button
                type="button"
                onClick={() => setShowPasswordConfirmation((value) => !value)}
                className="text-brand-dark/45 hover:text-brand-blue absolute top-1/2 right-4 -translate-y-1/2 transition-colors"
                aria-label={
                  showPasswordConfirmation
                    ? 'Ocultar confirmação'
                    : 'Mostrar confirmação'
                }
              >
                {showPasswordConfirmation ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password_confirmation ? (
              <p className="ml-1 text-sm font-medium text-red-600">
                {errors.password_confirmation.message}
              </p>
            ) : null}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || busyAction === 'login'}
            className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-14 w-full rounded-full text-base font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting || busyAction === 'login' ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Confirmando...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <LockKeyhole className="h-4 w-4" />
                Confirmar nova senha
              </span>
            )}
          </Button>

          <div className="flex justify-center">
            <Link
              href="/entrar"
              className="text-brand-blue hover:text-brand-blue/85 inline-flex items-center gap-2 text-sm font-bold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o login
            </Link>
          </div>
        </form>
      </AuthShell>

      <CompanySelectorDialog
        open={Boolean(companySelection)}
        companies={companySelection?.companies ?? []}
        message={companySelection?.message ?? ''}
        selectedCompanyId={selectedCompanyId}
        isSubmitting={busyAction === 'company-login'}
        onClose={closeCompanySelection}
        onSelectCompany={setSelectedCompanyId}
        onConfirm={() => submitCompanyLogin(selectedCompanyId)}
      />

      <ForceSessionDialog
        open={Boolean(forceSessionMessage)}
        message={forceSessionMessage}
        isSubmitting={busyAction === 'login' || busyAction === 'company-login'}
        onClose={closeForceSession}
        onConfirm={confirmForceLogin}
      />
    </>
  )
}
