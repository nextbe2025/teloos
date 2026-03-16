import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

/**
 * Layout do grupo de rotas do site público.
 * Envolve todas as páginas com Header e Footer.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
