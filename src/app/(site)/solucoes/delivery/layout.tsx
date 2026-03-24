import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Delivery & Vendas Online | Aplicativo Próprio',
  description:
    'Venda mais sem taxas abusivas. Aplicativo de delivery próprio, integrado ao iFood e desenhado para converter mais pedidos para o seu restaurante.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
