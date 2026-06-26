import { CommercialStrategyPage } from '@/components/internal/commercial-strategy-page'
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Estrategia comercial interna | Teloos',
  description:
    'Painel interno para simulacao de funil comercial, benchmarks e metas da Teloos.',
  noIndex: true,
})

export default function Page() {
  return <CommercialStrategyPage />
}
