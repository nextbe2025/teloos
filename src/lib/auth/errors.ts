import type { AuthApiErrorShape } from '@/lib/auth/types'

export type NormalizedAuthError =
  | { type: 'force-login'; message: string }
  | { type: 'validation'; message: string }
  | { type: 'generic'; message: string }

function isAuthApiError(error: unknown): error is AuthApiErrorShape {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as AuthApiErrorShape).status === 'number'
  )
}

export function normalizeAuthError(error: unknown): NormalizedAuthError {
  if (!isAuthApiError(error)) {
    return {
      type: 'generic',
      message: 'Não foi possível concluir a operação. Tente novamente.',
    }
  }

  const message = error.data?.message?.trim()

  if (error.status === 412) {
    return {
      type: 'force-login',
      message: message || 'Já existe uma sessão ativa para este usuário.',
    }
  }

  if (error.status === 422) {
    const validationMessage =
      error.data &&
      'errors' in error.data &&
      error.data.errors &&
      Object.values(error.data.errors)[0]?.[0]

    return {
      type: 'validation',
      message:
        validationMessage || message || 'Há dados inválidos no formulário.',
    }
  }

  return {
    type: 'generic',
    message:
      message || 'Não foi possível concluir a operação. Tente novamente.',
  }
}
