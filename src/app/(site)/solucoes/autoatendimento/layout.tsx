import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Autoatendimento | Cardápio Digital e Totens',
  description:
    'Aumente o ticket médio e reduza filas com nossas soluções de autoatendimento. Cardápios via QR Code e totens intuitivos totalmente integrados ao seu caixa.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
