import { generateMetadata } from '@/lib/metadata'
import { SiteHeader } from '@/components/layout/site-header'
import { Container } from '@/components/shared'

export const metadata = generateMetadata({
  title: 'Privacidade e Política de Cookies | Teloos',
  description:
    'Aviso de Privacidade e Política de Cookies da Teloos Sistemas Ltda.',
})

export default function PrivacidadePage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-slate-100 pt-36 pb-14 text-center">
        <Container>
          <span className="text-brand-blue mb-4 inline-block text-[13px] font-bold tracking-[0.2em] uppercase">
            Legal
          </span>
          <h1 className="text-brand-dark mb-4 text-4xl font-black md:text-5xl">
            Privacidade e <span>Política de Cookies</span>
          </h1>
          <p className="text-brand-dark/50 mx-auto max-w-xl text-[17px] leading-relaxed">
            Saiba como a Teloos coleta, utiliza e protege os seus dados
            pessoais.
          </p>
        </Container>
      </section>

      {/* Conteúdo */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Aviso de Privacidade - Intro */}
            <div className="mb-12 rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <h2 className="text-brand-dark mb-4 text-[18px] font-black tracking-wide uppercase">
                Aviso de Privacidade
              </h2>
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                A <strong className="text-brand-dark">TELOOS</strong> protege os
                seus dados pessoais quando você navega, acessa ou utiliza a
                plataforma. Estamos comprometidos com a segurança dos seus Dados
                durante toda a sua experiência na plataforma. Por isso, os seus
                dados pessoais serão mantidos no mais estrito sigilo e não serão
                vendidos, trocados ou divulgados a quaisquer terceiros, salvo
                nas hipóteses expressamente estabelecidas neste Aviso.
              </p>
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Nós podemos coletar seus Dados Pessoais em diferentes momentos:
                (i) quando você acessa nosso website e navega por itens
                disponibilizados; (ii) quando você entra em contato conosco
                através dos nossos canais de comunicação; e (iii) quando você
                realiza compras em parceiros que contrataram nossos produtos.
              </p>
              <p className="text-brand-dark/70 text-[15px] leading-relaxed">
                Nesses cenários mencionados acima, a TELOOS poderá tratar
                algumas informações, tais como: (1) dados de identidade; (2)
                dados financeiros; e (3) dados técnicos.
              </p>
            </div>

            <DocSection title="Dados Coletados">
              <DocSubSection title="(1) Dados de Identidade">
                <DocList
                  items={[
                    'Nome completo;',
                    'Número de identificação fiscal;',
                    'Data de nascimento;',
                    'Endereço;',
                    'E-mail;',
                    'Número de telefone; e',
                    'Foto de documento.',
                  ]}
                />
              </DocSubSection>

              <DocSubSection title="(2) Dados Financeiros">
                <DocList
                  items={[
                    'Detalhes do pagamento;',
                    'Informações bancárias (banco, conta, agência); e',
                    'Método de pagamento utilizado.',
                  ]}
                />
              </DocSubSection>

              <DocSubSection title="(3) Dados Técnicos">
                <DocList
                  items={[
                    'Endereço IP;',
                    'Hora de acesso;',
                    'Data de acesso;',
                    'Dados sobre o dispositivo de acesso; e',
                    'Cookies.',
                  ]}
                />
              </DocSubSection>
            </DocSection>

            <DocSection title="Registros e Tecnologias de Monitoramento">
              <p className="text-brand-dark/70 mb-6 text-[15px] leading-relaxed">
                Quando você acessa nossa plataforma, nós podemos registrar suas
                atividades para criar logs (registros de atividades efetuadas
                nos sites, aplicativos e produtos). Eles marcam o seu endereço
                IP, acesso e ações que você faz na plataforma, incluindo data e
                hora de cada ação realizada e informações sobre o dispositivo
                utilizado: como a versão de sistema operacional do seu
                smartphone, computador e navegador.
              </p>
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Para nos ajudar nesse processo, podemos usar tecnologias de
                monitoramento das atividades realizadas na plataforma, dentre
                elas:
              </p>

              <DocSubSection title="Cookies">
                <p className="text-brand-dark/70 text-[15px] leading-relaxed">
                  Os cookies são pequenos arquivos de texto que podem ser
                  colocados em seu dispositivo pelos sites ou serviços web que
                  você utiliza. Os cookies podem ser usados para muitas coisas,
                  como lembrar de você e de suas preferências e rastrear suas
                  visitas e atividades relacionadas à plataforma. A plataforma
                  também pode utilizar objetos armazenados localmente para
                  fornecer determinado conteúdo, como vídeo sob demanda,
                  videoclipes ou animação. Os cookies utilizados não podem ser
                  desativados, removidos ou bloqueados, porque, se você tentar
                  desativar ou remover os cookies, algumas partes das
                  plataformas poderão deixar de funcionar e sua capacidade de
                  limitar os cookies estará sujeita às configurações e
                  limitações do seu navegador.
                </p>
              </DocSubSection>

              <DocSubSection title="Ferramentas de Analytics">
                <p className="text-brand-dark/70 text-[15px] leading-relaxed">
                  Essas ferramentas podem coletar informações como a forma que
                  você visita a plataforma, incluindo que páginas você visitou e
                  quando, além de outros sites que foram visitados antes, entre
                  outras.
                </p>
              </DocSubSection>

              <div className="mt-6 rounded-xl bg-blue-50 px-6 py-4">
                <p className="text-brand-blue text-[14px] leading-relaxed font-medium">
                  Fique tranquilo! Todas as tecnologias utilizadas por nós
                  sempre respeitarão os termos e limites estabelecidos por este
                  Aviso.
                </p>
              </div>
            </DocSection>

            <DocSection title="Compartilhamento de Dados">
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Em alguns momentos será necessário compartilhar seus dados
                pessoais. Nós podemos usar, acessar e compartilhar, quando
                necessário e sempre dentro dos limites e propósitos de negócio,
                respeitando a legislação aplicável.
              </p>
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Podemos compartilhar seus dados pessoais em situações
                específicas, sendo elas:
              </p>
              <DocList
                items={[
                  'Com autoridades judiciais, policiais ou governamentais ou outros Terceiros com quem sejamos obrigados por lei, norma regulatória ou ordem judicial.',
                ]}
              />
            </DocSection>

            <DocSection title="Armazenamento e Retenção de Dados">
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Seu endereço de IP com data e hora de acesso são armazenados em
                ambiente seguro e controlado, por prazo mínimo de 6 (seis)
                meses, nos termos do Marco Civil da Internet, considerando a
                tecnologia disponível.
              </p>
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Eles ficam em nossos servidores (próprios ou contratados, seja
                no Brasil ou no exterior), conforme a lei e ainda poderão ser
                armazenados por tecnologia de cloud computing e/ou outras
                tecnologias que surjam futuramente, visando sempre a melhoria e
                aperfeiçoamento de nossos produtos e na sua experiência ao
                utilizar nossos serviços.
              </p>
              <p className="text-brand-dark/70 text-[15px] leading-relaxed">
                Os demais dados serão mantidos pelo período permitido ou exigido
                por lei de acordo com a finalidade e a natureza do tratamento.
                Isto inclui, mas não se limita a: (i) cumprimento de obrigação
                legal ou regulatória; (ii) prestação dos serviços; (iii)
                atendimento nos canais de comunicação; (iv) melhorar nossos
                produtos e serviços.
              </p>
            </DocSection>

            <DocSection title="Seus Direitos (LGPD)">
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Você tem direitos e garantias em relação aos seus dados
                pessoais. Nós disponibilizamos mecanismos, detalhados abaixo,
                para que você tenha clareza e transparência no exercício de seus
                direitos, a depender do país onde os Dados Pessoais são
                coletados e/ou tratados.
              </p>
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Se você estiver no Brasil, nos termos da LGPD, você tem direito
                de:
              </p>
              <DocList
                items={[
                  'Obter confirmação de que realizamos o tratamento dos seus dados pessoais;',
                  'Acessar os seus dados pessoais que são tratados por nós;',
                  'Requerer a correção de dados pessoais que estejam incompletos, inexatos ou desatualizados;',
                  'Requerer a anonimização, o bloqueio ou a eliminação de dados pessoais desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD;',
                  'Requerer a portabilidade dos seus dados pessoais a outro fornecedor de serviço ou produto, observados os nossos segredos comerciais e industriais;',
                  'Requerer a eliminação de dados pessoais tratados com base no seu consentimento, exceto nas hipóteses de conservação de dados pessoais previstas na LGPD;',
                  'Requerer informações sobre com quem compartilhamos os seus dados pessoais, como a lista de sub operadores utilizados;',
                  'Requerer informações sobre a possibilidade de não fornecer o seu consentimento e as consequências;',
                  'Revogar o seu consentimento para o tratamento de seus dados pessoais, na hipótese em que houver tratamento realizado com base no seu consentimento;',
                  'Manifestar oposição a tratamento que viole o disposto na LGPD.',
                ]}
              />
            </DocSection>

            <DocSection title="Segurança dos Dados">
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Nós nos esforçamos para proteger os Dados que guardamos em
                nossos registros, mas não podemos garantir a mais completa
                segurança. Alguns fatores como acesso ou uso não autorizado, a
                falha do hardware ou software, entre outros, podem comprometer a
                segurança dos Dados.
              </p>
              <p className="text-brand-dark/70 mb-4 text-[15px] leading-relaxed">
                Mas é preciso lembrar que a transmissão de Dados pela internet
                não é completamente segura por diversos fatores, como rede e
                operação e, por isso, a TELOOS não tem como garantir a completa
                segurança dos Dados transmitidos. Apesar de fazermos o nosso
                melhor para proteger os seus Dados, nós não podemos garantir a
                segurança da rede que você usa para acessar nossa plataforma.
                Qualquer transmissão é de sua exclusiva responsabilidade, que,
                ao concordar com este Aviso, reconhece e assume expressamente
                tal responsabilidade.
              </p>
              <p className="text-brand-dark/70 text-[15px] leading-relaxed">
                Uma vez recebidos por nós, nós nos comprometemos a assegurar sua
                segurança. Para prevenir o acesso ou divulgação não autorizada
                dos seus Dados, nós implementamos procedimentos físicos,
                eletrônicos e administrativos para garantir que os Dados que
                coletamos estejam seguros.
              </p>
            </DocSection>

            {/* Contato */}
            <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
              <p className="text-brand-dark/60 text-[15px] leading-relaxed">
                Em caso de qualquer dúvida, sugestões ou reclamações com relação
                às disposições constantes deste Aviso de Privacidade ou caso
                queira apresentar qualquer solicitação relativa a seus dados
                pessoais, você poderá entrar em contato conosco por meio do
                telefone:{' '}
                <a
                  href="https://wa.me/5541936181651"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  (41) 93618-1651
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function DocSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-10">
      <h2 className="text-brand-dark mb-6 border-b border-slate-100 pb-3 text-[20px] font-black tracking-wide uppercase">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function DocSubSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-5">
      <h3 className="text-brand-dark mb-3 text-[15px] font-bold">{title}</h3>
      {children}
    </div>
  )
}

function DocList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="bg-brand-blue mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full opacity-40" />
          <span className="text-brand-dark/70 text-[15px] leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
