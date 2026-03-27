import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Sobre Nós | Nossa História e Missão',
  description:
    'Conheça a Teloos. Nossa missão é transformar o mercado de gastronomia através de tecnologia prática, inovadora e focada no sucesso do restaurador.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
