import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Operação & Atendimento | PDV e KDS',
  description:
    'Agilize sua operação de frente de caixa e cozinha. PDV ultra-rápido, gestão de mesas e KDS integrado para eliminar erros e atrasos.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
