import { ForgotPasswordForm } from '@/components/auth/forgot-password-form'
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Esqueci Minha Senha | Recuperar acesso',
  description:
    'Recupere o acesso à plataforma Teloos enviando um e-mail de redefinição de senha.',
  noIndex: true,
})

export default function EsqueciSenhaPage() {
  return <ForgotPasswordForm />
}
