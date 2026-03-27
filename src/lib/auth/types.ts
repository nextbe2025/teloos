export interface LoginSuccessResponse {
  access_token: string
  refresh_token: string
  expires_in: number
}

export interface CompanyOption {
  id: number | string
  nome: string
}

export interface LoginCompanySelectionResponse {
  message: string
  empresas: CompanyOption[]
}

export type LoginResponse = LoginSuccessResponse | LoginCompanySelectionResponse

export interface LoginPayload {
  email: string
  password: string
  remember: boolean
  forceLogin: boolean
}

export interface CompanyLoginPayload extends LoginPayload {
  companyId: string
}

export interface ForgotPasswordPayload {
  email: string
  callback: string
  grecaptcha: string
}

export interface ResetPasswordPayload {
  email: string
  password: string
  password_confirmation: string
  token: string
}

export interface SuccessMessageResponse {
  message: string
}

export interface ValidationErrorResponse {
  message: string
  errors?: Record<string, string[]>
}

export interface GenericErrorResponse {
  message: string
}

export type ApiErrorResponse = ValidationErrorResponse | GenericErrorResponse

export interface AuthFlowCredentials {
  email: string
  password: string
  remember: boolean
}

export interface AuthApiErrorShape {
  status: number
  data: ApiErrorResponse | null
}

export function hasAccessToken(
  response: LoginResponse
): response is LoginSuccessResponse {
  return 'access_token' in response
}
