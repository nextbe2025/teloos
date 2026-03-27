import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('Informe um e-mail válido.').trim(),
  password: z
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres.')
    .trim(),
  remember: z.boolean(),
})

export const forgotPasswordSchema = z.object({
  email: z.email('Informe um e-mail válido.').trim(),
})

export const resetPasswordSchema = z
  .object({
    email: z.email('Informe um e-mail válido.').trim(),
    password: z
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres.')
      .trim(),
    password_confirmation: z
      .string()
      .min(6, 'A confirmação deve ter no mínimo 6 caracteres.')
      .trim(),
  })
  .refine((values) => values.password === values.password_confirmation, {
    message: 'As senhas não conferem.',
    path: ['password_confirmation'],
  })

export type LoginFormValues = z.infer<typeof loginSchema>
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>
