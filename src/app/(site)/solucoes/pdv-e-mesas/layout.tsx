import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'PDV e Mesas | Comandas, KDS e Gestão de Mesas | Teloos',
  description:
    'Sistema de PDV, gestão de mesas e KDS integrado para restaurantes. Controle pedidos, comandas e cozinha em tempo real com agilidade e zero erros.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
