import { Suspense } from 'react'
import { ResetPasswordForm } from '@/components/auth/reset-password-form'
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Redefinir Senha | Nova senha',
  description:
    'Defina uma nova senha para recuperar o acesso à plataforma Teloos.',
  noIndex: true,
})

export default function RedefinirSenhaPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordForm />
    </Suspense>
  )
}
