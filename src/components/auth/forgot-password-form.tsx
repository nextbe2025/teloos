'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Loader2, Mail } from 'lucide-react'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { AuthShell } from '@/components/auth/auth-shell'
import { forgotPassword } from '@/lib/auth/api'
import { normalizeAuthError } from '@/lib/auth/errors'
import { buildResetPasswordCallback } from '@/lib/auth/redirect'
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from '@/lib/auth/schemas'
import { publicEnv } from '@/lib/env'
import { Button } from '@/components/ui/button'

const inputClassName =
  'focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-brand-dark placeholder:text-slate-400 caret-brand-dark w-full rounded-2xl border-2 border-slate-100 bg-white px-5 py-4 font-medium transition-all focus:outline-none'

function ForgotPasswordFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  const onSubmit = handleSubmit(async (values) => {
    if (!executeRecaptcha || !publicEnv.recaptchaSiteKey) {
      toast.error('reCAPTCHA não configurado para este ambiente.')
      return
    }

    try {
      const token = await executeRecaptcha('recoveryPasswordTeloos')

      await forgotPassword({
        email: values.email,
        callback: buildResetPasswordCallback(window.location.origin),
        grecaptcha: token,
      })

      toast.success('E-mail de recuperação enviado com sucesso.')
      reset()
    } catch (error) {
      const normalized = normalizeAuthError(error)
      toast.error(normalized.message)
    }
  })

  return (
    <AuthShell
      variant="minimal"
      eyebrow="Recuperar acesso"
      title="Recupere sua senha"
      description="Informe seu e-mail para receber o link de redefinição."
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

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 h-14 w-full rounded-full text-base font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando...
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Enviar e-mail de recuperação
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
  )
}

export function ForgotPasswordForm() {
  if (!publicEnv.recaptchaSiteKey) {
    return <ForgotPasswordFormInner />
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={publicEnv.recaptchaSiteKey}>
      <ForgotPasswordFormInner />
    </GoogleReCaptchaProvider>
  )
}
