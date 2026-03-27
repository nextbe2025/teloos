import { publicEnv } from '@/lib/env'
import type { LoginSuccessResponse } from '@/lib/auth/types'

export function buildOAuthRedirectUrl(
  response: LoginSuccessResponse,
  callbackBaseUrl: string
) {
  const url = new URL(
    `/oauth/${encodeURIComponent(response.access_token)}`,
    publicEnv.clientUrl
  )
  url.searchParams.set('expires_in', String(response.expires_in))
  url.searchParams.set('refresh_token', response.refresh_token)
  url.searchParams.set('callback', callbackBaseUrl)
  return url.toString()
}

export function buildResetPasswordCallback(origin: string) {
  return new URL('/redefinir-senha', origin).toString()
}
