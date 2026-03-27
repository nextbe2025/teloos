import { LoginForm } from '@/components/auth/login-form'
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Entrar | Acesse sua conta',
  description:
    'Entre na plataforma Teloos para acessar sua operação, pedidos, atendimento e gestão do seu food service.',
  noIndex: true,
})

export default function EntrarPage() {
  return <LoginForm />
}
