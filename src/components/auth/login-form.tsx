'use client'

import Image from 'next/image'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { AuthShell } from '@/components/auth/auth-shell'
import { CompanySelectorDialog } from '@/components/auth/company-selector-dialog'
import { ForceSessionDialog } from '@/components/auth/force-session-dialog'
import { useAuthLoginFlow } from '@/components/auth/use-auth-login-flow'
import { loginSchema, type LoginFormValues } from '@/lib/auth/schemas'
import { Button } from '@/components/ui/button'

const inputClassName =
  'focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-brand-dark placeholder:text-slate-400 caret-brand-dark w-full rounded-2xl border-2 border-slate-100 bg-white px-5 py-4 font-medium transition-all focus:outline-none'

function FoodSymbol() {
  return (
    <Image
      src="/brand/teloos-symbol.png"
      alt=""
      aria-hidden="true"
      width={969}
      height={594}
      className="inline-block h-[0.62em] w-auto"
      priority
    />
  )
}

function LoginEditorial() {
  return (
    <div className="relative py-10">
      <div className="text-brand-dark max-w-[24ch] text-[2.8rem] leading-[0.95] font-black tracking-[-0.04em] xl:text-[4.2rem]">
        <p>transformando</p>
        <p className="flex items-end gap-3">
          <span>negócios</span>
          <span>f</span>
          <span className="inline-flex shrink-0 translate-y-[-0.03em] items-end leading-none">
            <FoodSymbol />
          </span>
          <span>d</span>
        </p>
        <p>em receitas de</p>
        <p className="text-brand-blue">grande sucesso!</p>
      </div>
    </div>
  )
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: true,
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

  const onSubmit = handleSubmit(async (values: LoginFormValues) => {
    await loginWithCredentials(values)
  })

  return (
    <>
      <AuthShell
        variant="minimal"
        eyebrow="Acesso à plataforma"
        title="Entre na plataforma Teloos"
        description="Bem-vindo de volta."
        sideContent={<LoginEditorial />}
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
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Digite sua senha"
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

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center gap-3 text-sm font-bold text-slate-600">
              <input
                type="checkbox"
                className="border-brand-blue/30 text-brand-blue h-4 w-4 rounded accent-[#3f63e6]"
                {...register('remember')}
              />
              Lembrar acesso
            </label>

            <Link
              href="/esqueci-senha"
              className="text-brand-blue hover:text-brand-blue/85 text-sm font-bold transition-colors"
            >
              Esqueci minha senha
            </Link>
          </div>

          <Button
            type="submit"
            disabled={busyAction === 'login'}
            className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-14 w-full rounded-full text-base font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {busyAction === 'login' ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Entrando...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                Entrar na plataforma
              </span>
            )}
          </Button>
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
