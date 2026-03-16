import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata()

/**
 * Página inicial — placeholder.
 * Desenvolva o conteúdo aqui conforme o design.
 */
export default function HomePage() {
  return (
    <div className="container-site section-padding">
      <h1>Bem-vindo à Teloos</h1>
    </div>
  )
}
