import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Gestão & Financeiro | Controle Total do Negócio',
  description:
    'Gestão inteligente para food service. Controle de estoque, financeiro completo, DRE em tempo real e relatórios avançados para tomada de decisão.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
