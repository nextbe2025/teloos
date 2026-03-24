import { generateMetadata } from '@/lib/metadata'
import ContatoPage from './page'

export const metadata = generateMetadata({
  title: 'Contato | Fale com a Teloos',
  description:
    'Entre em contato com a equipe da Teloos. Tire suas dúvidas, solicite uma demonstração personalizada ou conheça nossas soluções de gestão para food service.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
