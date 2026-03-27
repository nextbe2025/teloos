import type {
  ApiErrorResponse,
  CompanyLoginPayload,
  ForgotPasswordPayload,
  LoginPayload,
  LoginResponse,
  ResetPasswordPayload,
  SuccessMessageResponse,
} from '@/lib/auth/types'

export class AuthApiError extends Error {
  status: number
  data: ApiErrorResponse | null

  constructor(status: number, data: ApiErrorResponse | null) {
    super(data?.message || 'Erro ao processar a autenticação.')
    this.status = status
    this.data = data
  }
}

async function postJson<TResponse>(path: string, payload: unknown) {
  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => null)) as
    | TResponse
    | ApiErrorResponse
    | null

  if (!response.ok) {
    throw new AuthApiError(
      response.status,
      (data as ApiErrorResponse | null) ?? null
    )
  }

  return data as TResponse
}

export function login(payload: LoginPayload) {
  return postJson<LoginResponse>('/api/auth/login', payload)
}

export function companyLogin(payload: CompanyLoginPayload) {
  return postJson<LoginResponse>('/api/auth/company-login', payload)
}

export function forgotPassword(payload: ForgotPasswordPayload) {
  return postJson<SuccessMessageResponse>('/api/auth/forgot-password', payload)
}

export function resetPassword(payload: ResetPasswordPayload) {
  return postJson<SuccessMessageResponse>('/api/auth/reset-password', payload)
}
