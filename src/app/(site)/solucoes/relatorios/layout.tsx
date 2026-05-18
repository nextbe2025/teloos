import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Relatórios | Vendas, Financeiro e Estoque | Teloos',
  description:
    'Relatórios completos de vendas, financeiro e estoque para food service. DRE em tempo real, fluxo de caixa e insights de IA para tomar decisões com dados.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
