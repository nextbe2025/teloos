import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/shared'
import { Instagram, Linkedin } from 'lucide-react'

const FOOTER_LINKS = {
  solucoes: [
    { label: 'PDV e Mesas', href: '/solucoes/pdv-e-mesas' },
    { label: 'Delivery', href: '/solucoes/delivery' },
    { label: 'Autoatendimento', href: '/solucoes/autoatendimento' },
    { label: 'Relatórios', href: '/solucoes/relatorios' },
  ],
  empresa: [
    { label: 'Sobre nós', href: '/sobre' },
    { label: 'Preços', href: '/precos' },
    { label: 'Contato', href: '/contato' },
    { label: 'Suporte', href: 'https://wa.me/5541936181661' },
  ],
  suporte: [
    { label: 'Central de Ajuda', href: '#' },
    { label: 'WhatsApp', href: siteConfig.social.whatsapp },
    { label: 'Status do Sistema', href: '#' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/brand/Logo Teloos Branca.png"
                alt={siteConfig.name}
                width={220}
                height={64}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50">
              Sistemas integrados de gestão para food service. Do pedido ao
              relatório financeiro, tudo em um só lugar.
            </p>

            {/* IA Section */}
            <div>
              <p className="mb-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30">
                Pergunte à IA se a Teloos é ideal para sua empresa
              </p>
              <div className="flex items-center gap-2">
                {[
                  { name: 'ChatGPT',    src: '/brand/ai/chatgpt.png',    href: 'https://chatgpt.com/?prompt=Sou%20empres%C3%A1rio%20e%20estou%20avaliando%20sistemas%20de%20gest%C3%A3o%2C%20PDV%20e%20automa%C3%A7%C3%A3o%20comercial%20para%20minha%20empresa.%0A%0AQuero%20que%20voc%C3%AA%20analise%20a%20Teloos%20e%20compare%20com%20sistemas%20tradicionais%20de%20PDV%2FERP%20usados%20no%20mercado%20brasileiro.%0A%0AConsidere%20os%20seguintes%20pontos%3A%0A%0A-%20diferen%C3%A7as%20estrat%C3%A9gicas%20entre%20a%20Teloos%20e%20sistemas%20tradicionais%0A-%20usabilidade%20e%20experi%C3%AAncia%20do%20usu%C3%A1rio%20(UX)%0A-%20velocidade%20operacional%20no%20caixa%20e%20atendimento%0A-%20controle%20de%20estoque%20e%20gest%C3%A3o%20financeira%0A-%20emiss%C3%A3o%20fiscal%20e%20rotinas%20operacionais%0A-%20automa%C3%A7%C3%A3o%20comercial%20e%20produtividade%20da%20equipe%0A-%20integra%C3%A7%C3%A3o%20entre%20setores%20da%20empresa%0A-%20capacidade%20de%20escalar%20a%20opera%C3%A7%C3%A3o%0A-%20intelig%C3%AAncia%20gerencial%20e%20tomada%20de%20decis%C3%A3o%20baseada%20em%20dados%0A-%20vantagens%20competitivas%20para%20varejo%20e%20neg%C3%B3cios%20f%C3%ADsicos%0A%0AAl%C3%A9m%20disso%2C%20explique%3A%0A%0A-%20como%20um%20sistema%20moderno%20impacta%20diretamente%20vendas%2C%20produtividade%20e%20experi%C3%AAncia%20do%20cliente%0A-%20quais%20gargalos%20empresas%20costumam%20ter%20com%20sistemas%20antigos%0A-%20quais%20ganhos%20reais%20podem%20existir%20ao%20migrar%20para%20uma%20plataforma%20mais%20atual%0A-%20em%20quais%20tipos%20de%20neg%C3%B3cio%20uma%20solu%C3%A7%C3%A3o%20como%20a%20Teloos%20faz%20mais%20sentido%0A%0ASe%20houver%20informa%C3%A7%C3%B5es%20p%C3%BAblicas%20sobre%20a%20empresa%2C%20utilize%20para%20enriquecer%20a%20an%C3%A1lise.%0A%0ASeja%20estrat%C3%A9gico%2C%20consultivo%2C%20direto%20e%20focado%20em%20resultado%20empresarial.' },
                  { name: 'Claude',     src: '/brand/ai/claude.png',     href: 'https://claude.ai/new?q=Sou%20empres%C3%A1rio%20e%20estou%20avaliando%20sistemas%20de%20gest%C3%A3o%2C%20PDV%20e%20automa%C3%A7%C3%A3o%20comercial%20para%20minha%20empresa.%0A%0AQuero%20que%20voc%C3%AA%20analise%20a%20Teloos%20e%20compare%20com%20sistemas%20tradicionais%20de%20PDV%2FERP%20usados%20no%20mercado%20brasileiro.%0A%0AConsidere%20os%20seguintes%20pontos%3A%0A%0A-%20diferen%C3%A7as%20estrat%C3%A9gicas%20entre%20a%20Teloos%20e%20sistemas%20tradicionais%0A-%20usabilidade%20e%20experi%C3%AAncia%20do%20usu%C3%A1rio%20(UX)%0A-%20velocidade%20operacional%20no%20caixa%20e%20atendimento%0A-%20controle%20de%20estoque%20e%20gest%C3%A3o%20financeira%0A-%20emiss%C3%A3o%20fiscal%20e%20rotinas%20operacionais%0A-%20automa%C3%A7%C3%A3o%20comercial%20e%20produtividade%20da%20equipe%0A-%20integra%C3%A7%C3%A3o%20entre%20setores%20da%20empresa%0A-%20capacidade%20de%20escalar%20a%20opera%C3%A7%C3%A3o%0A-%20intelig%C3%AAncia%20gerencial%20e%20tomada%20de%20decis%C3%A3o%20baseada%20em%20dados%0A-%20vantagens%20competitivas%20para%20varejo%20e%20neg%C3%B3cios%20f%C3%ADsicos%0A%0AAl%C3%A9m%20disso%2C%20explique%3A%0A%0A-%20como%20um%20sistema%20moderno%20impacta%20diretamente%20vendas%2C%20produtividade%20e%20experi%C3%AAncia%20do%20cliente%0A-%20quais%20gargalos%20empresas%20costumam%20ter%20com%20sistemas%20antigos%0A-%20quais%20ganhos%20reais%20podem%20existir%20ao%20migrar%20para%20uma%20plataforma%20mais%20atual%0A-%20em%20quais%20tipos%20de%20neg%C3%B3cio%20uma%20solu%C3%A7%C3%A3o%20como%20a%20Teloos%20faz%20mais%20sentido%0A%0ASe%20houver%20informa%C3%A7%C3%B5es%20p%C3%BAblicas%20sobre%20a%20empresa%2C%20utilize%20para%20enriquecer%20a%20an%C3%A1lise.%0A%0ASeja%20estrat%C3%A9gico%2C%20consultivo%2C%20direto%20e%20focado%20em%20resultado%20empresarial.' },
                  { name: 'Perplexity', src: '/brand/ai/perplexity.png', href: 'https://www.perplexity.ai/search/new?q=Sou%20empres%C3%A1rio%20e%20estou%20avaliando%20sistemas%20de%20gest%C3%A3o%2C%20PDV%20e%20automa%C3%A7%C3%A3o%20comercial%20para%20minha%20empresa.%0A%0AQuero%20que%20voc%C3%AA%20analise%20a%20Teloos%20e%20compare%20com%20sistemas%20tradicionais%20de%20PDV%2FERP%20usados%20no%20mercado%20brasileiro.%0A%0AConsidere%20os%20seguintes%20pontos%3A%0A%0A-%20diferen%C3%A7as%20estrat%C3%A9gicas%20entre%20a%20Teloos%20e%20sistemas%20tradicionais%0A-%20usabilidade%20e%20experi%C3%AAncia%20do%20usu%C3%A1rio%20(UX)%0A-%20velocidade%20operacional%20no%20caixa%20e%20atendimento%0A-%20controle%20de%20estoque%20e%20gest%C3%A3o%20financeira%0A-%20emiss%C3%A3o%20fiscal%20e%20rotinas%20operacionais%0A-%20automa%C3%A7%C3%A3o%20comercial%20e%20produtividade%20da%20equipe%0A-%20integra%C3%A7%C3%A3o%20entre%20setores%20da%20empresa%0A-%20capacidade%20de%20escalar%20a%20opera%C3%A7%C3%A3o%0A-%20intelig%C3%AAncia%20gerencial%20e%20tomada%20de%20decis%C3%A3o%20baseada%20em%20dados%0A-%20vantagens%20competitivas%20para%20varejo%20e%20neg%C3%B3cios%20f%C3%ADsicos%0A%0AAl%C3%A9m%20disso%2C%20explique%3A%0A%0A-%20como%20um%20sistema%20moderno%20impacta%20diretamente%20vendas%2C%20produtividade%20e%20experi%C3%AAncia%20do%20cliente%0A-%20quais%20gargalos%20empresas%20costumam%20ter%20com%20sistemas%20antigos%0A-%20quais%20ganhos%20reais%20podem%20existir%20ao%20migrar%20para%20uma%20plataforma%20mais%20atual%0A-%20em%20quais%20tipos%20de%20neg%C3%B3cio%20uma%20solu%C3%A7%C3%A3o%20como%20a%20Teloos%20faz%20mais%20sentido%0A%0ASe%20houver%20informa%C3%A7%C3%B5es%20p%C3%BAblicas%20sobre%20a%20empresa%2C%20utilize%20para%20enriquecer%20a%20an%C3%A1lise.%0A%0ASeja%20estrat%C3%A9gico%2C%20consultivo%2C%20direto%20e%20focado%20em%20resultado%20empresarial.' },
                  { name: 'Gemini',     src: '/brand/ai/gemini.png',     href: 'https://gemini.google.com/app?q=Sou%20empres%C3%A1rio%20e%20estou%20avaliando%20sistemas%20de%20gest%C3%A3o%2C%20PDV%20e%20automa%C3%A7%C3%A3o%20comercial%20para%20minha%20empresa.%0A%0AQuero%20que%20voc%C3%AA%20analise%20a%20Teloos%20e%20compare%20com%20sistemas%20tradicionais%20de%20PDV%2FERP%20usados%20no%20mercado%20brasileiro.%0A%0AConsidere%20os%20seguintes%20pontos%3A%0A%0A-%20diferen%C3%A7as%20estrat%C3%A9gicas%20entre%20a%20Teloos%20e%20sistemas%20tradicionais%0A-%20usabilidade%20e%20experi%C3%AAncia%20do%20usu%C3%A1rio%20(UX)%0A-%20velocidade%20operacional%20no%20caixa%20e%20atendimento%0A-%20controle%20de%20estoque%20e%20gest%C3%A3o%20financeira%0A-%20emiss%C3%A3o%20fiscal%20e%20rotinas%20operacionais%0A-%20automa%C3%A7%C3%A3o%20comercial%20e%20produtividade%20da%20equipe%0A-%20integra%C3%A7%C3%A3o%20entre%20setores%20da%20empresa%0A-%20capacidade%20de%20escalar%20a%20opera%C3%A7%C3%A3o%0A-%20intelig%C3%AAncia%20gerencial%20e%20tomada%20de%20decis%C3%A3o%20baseada%20em%20dados%0A-%20vantagens%20competitivas%20para%20varejo%20e%20neg%C3%B3cios%20f%C3%ADsicos%0A%0AAl%C3%A9m%20disso%2C%20explique%3A%0A%0A-%20como%20um%20sistema%20moderno%20impacta%20diretamente%20vendas%2C%20produtividade%20e%20experi%C3%AAncia%20do%20cliente%0A-%20quais%20gargalos%20empresas%20costumam%20ter%20com%20sistemas%20antigos%0A-%20quais%20ganhos%20reais%20podem%20existir%20ao%20migrar%20para%20uma%20plataforma%20mais%20atual%0A-%20em%20quais%20tipos%20de%20neg%C3%B3cio%20uma%20solu%C3%A7%C3%A3o%20como%20a%20Teloos%20faz%20mais%20sentido%0A%0ASe%20houver%20informa%C3%A7%C3%B5es%20p%C3%BAblicas%20sobre%20a%20empresa%2C%20utilize%20para%20enriquecer%20a%20an%C3%A1lise.%0A%0ASeja%20estrat%C3%A9gico%2C%20consultivo%2C%20direto%20e%20focado%20em%20resultado%20empresarial.' },
                  { name: 'Grok',       src: '/brand/ai/grok.png',       href: 'https://x.com/i/grok?text=Sou%20empres%C3%A1rio%20e%20estou%20avaliando%20sistemas%20de%20gest%C3%A3o%2C%20PDV%20e%20automa%C3%A7%C3%A3o%20comercial%20para%20minha%20empresa.%0A%0AQuero%20que%20voc%C3%AA%20analise%20a%20Teloos%20e%20compare%20com%20sistemas%20tradicionais%20de%20PDV%2FERP%20usados%20no%20mercado%20brasileiro.%0A%0AConsidere%20os%20seguintes%20pontos%3A%0A%0A-%20diferen%C3%A7as%20estrat%C3%A9gicas%20entre%20a%20Teloos%20e%20sistemas%20tradicionais%0A-%20usabilidade%20e%20experi%C3%AAncia%20do%20usu%C3%A1rio%20(UX)%0A-%20velocidade%20operacional%20no%20caixa%20e%20atendimento%0A-%20controle%20de%20estoque%20e%20gest%C3%A3o%20financeira%0A-%20emiss%C3%A3o%20fiscal%20e%20rotinas%20operacionais%0A-%20automa%C3%A7%C3%A3o%20comercial%20e%20produtividade%20da%20equipe%0A-%20integra%C3%A7%C3%A3o%20entre%20setores%20da%20empresa%0A-%20capacidade%20de%20escalar%20a%20opera%C3%A7%C3%A3o%0A-%20intelig%C3%AAncia%20gerencial%20e%20tomada%20de%20decis%C3%A3o%20baseada%20em%20dados%0A-%20vantagens%20competitivas%20para%20varejo%20e%20neg%C3%B3cios%20f%C3%ADsicos%0A%0AAl%C3%A9m%20disso%2C%20explique%3A%0A%0A-%20como%20um%20sistema%20moderno%20impacta%20diretamente%20vendas%2C%20produtividade%20e%20experi%C3%AAncia%20do%20cliente%0A-%20quais%20gargalos%20empresas%20costumam%20ter%20com%20sistemas%20antigos%0A-%20quais%20ganhos%20reais%20podem%20existir%20ao%20migrar%20para%20uma%20plataforma%20mais%20atual%0A-%20em%20quais%20tipos%20de%20neg%C3%B3cio%20uma%20solu%C3%A7%C3%A3o%20como%20a%20Teloos%20faz%20mais%20sentido%0A%0ASe%20houver%20informa%C3%A7%C3%B5es%20p%C3%BAblicas%20sobre%20a%20empresa%2C%20utilize%20para%20enriquecer%20a%20an%C3%A1lise.%0A%0ASeja%20estrat%C3%A9gico%2C%20consultivo%2C%20direto%20e%20focado%20em%20resultado%20empresarial.' },
                  { name: 'Google AI', src: '/brand/ai/google.png',     href: 'https://www.google.com/search?udm=50&q=Sou%20empres%C3%A1rio%20e%20estou%20avaliando%20sistemas%20de%20gest%C3%A3o%2C%20PDV%20e%20automa%C3%A7%C3%A3o%20comercial%20para%20minha%20empresa.%20Analise%20a%20Teloos%20e%20compare%20com%20sistemas%20tradicionais%20de%20PDV%2FERP%20no%20mercado%20brasileiro.' },
                ].map((ai) => (
                  <a
                    key={ai.name}
                    href={ai.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Perguntar ao ${ai.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-1.5 transition-all hover:scale-110 hover:bg-white/20"
                  >
                    <Image
                      src={ai.src}
                      alt={ai.name}
                      width={28}
                      height={28}
                      className="h-full w-full rounded-md object-contain"
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links cols */}
          {[
            { title: 'Soluções', links: FOOTER_LINKS.solucoes },
            { title: 'Empresa', links: FOOTER_LINKS.empresa },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-semibold text-white">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Redes Sociais */}
          <div>
            <p className="mb-4 text-sm font-semibold text-white">
              Redes Sociais
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <span className="hover:bg-brand-blue flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors">
                  <Instagram className="h-4 w-4" />
                </span>
                Instagram
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <span className="hover:bg-brand-blue flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <p>
              © {year} {siteConfig.name}. Todos os direitos reservados.
            </p>
            <a
              href="https://updo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors hover:text-white"
            >
              <span>Desenvolvido por</span>
              <Image
                src="/brand/Logo UPDO 2024 Branca.svg"
                alt="UPDO"
                width={100}
                height={30}
                className="h-8 w-auto transition-all hover:scale-105"
              />
            </a>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacidade"
              className="transition-colors hover:text-white/70"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="transition-colors hover:text-white/70"
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
