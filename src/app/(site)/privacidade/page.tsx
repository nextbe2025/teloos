import { generateMetadata } from '@/lib/metadata'
import { SiteHeader } from '@/components/layout/site-header'
import { Container } from '@/components/shared'

export const metadata = generateMetadata({
  title: 'Privacidade e Proteção de Dados | Teloos',
  description:
    'Termos Gerais de Proteção de Dados Pessoais e Privacidade da Teloos Sistemas Ltda.',
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
            Privacidade e{' '}
            <span className="text-brand-blue">Proteção de Dados</span>
          </h1>
          <p className="text-brand-dark/50 mx-auto max-w-xl text-[17px] leading-relaxed">
            Termos Gerais de Proteção de Dados Pessoais e Privacidade da Teloos Sistemas Ltda.
          </p>
        </Container>
      </section>

      {/* Conteúdo */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">

            {/* Partes */}
            <div className="mb-12 rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <p className="text-brand-dark/80 text-[15px] leading-relaxed mb-4">
                <strong className="text-brand-dark">TELOOS SISTEMAS LTDA</strong>, pessoa jurídica de direito privado inscrita no CNPJ sob o nº{' '}
                <strong>66.039.163/0001-96</strong>, com sede na Rua Primeiro de Maio, nº 442, Centro, Pinhais/PR, CEP: 83.323-020, neste ato representada na forma de seus atos constitutivos, doravante denominada{' '}
                <strong>CONTRATADA</strong>.
              </p>
              <p className="text-brand-dark/80 text-[15px] leading-relaxed mb-4">
                E, de outro lado, a <strong>CONTRATANTE</strong>.
              </p>
              <p className="text-brand-dark/60 text-[15px] leading-relaxed">
                Considerando que em virtude da publicação da Lei 13.709/2018 ("Lei Geral de Proteção de Dados" ou simplesmente "LGPD"), foram criadas uma série de obrigações, direitos e deveres que são aplicáveis às Partes. Desta forma, as Partes necessitam estar aderentes aos termos da referida Lei Geral de Proteção de Dados.
              </p>
            </div>

            <DocSection title="Definições">
              <DocTerm term="Autoridade Nacional de Proteção de Dados (ANPD)">
                Órgão responsável pela fiscalização do cumprimento das disposições da Lei Geral de Proteção de Dados, Lei Federal nº 13.709/2018 no território nacional.
              </DocTerm>
              <DocTerm term="Controlador">
                Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao Tratamento de Dados Pessoais.
              </DocTerm>
              <DocTerm term="Dados Pessoais">
                Qualquer informação obtida em razão do presente contrato, relacionada a pessoa natural identificada ou identificável, como por exemplo: nome, CPF, RG, endereço residencial ou comercial, número de telefone fixo ou móvel, endereço de e-mail, informações de geolocalização, entre outros.
              </DocTerm>
              <DocTerm term="Direitos dos Titulares">
                Todos aqueles elencados no Capítulo III da LGPD, bem como todos demais direitos que os Titulares tenham ou possam vir a ter de acordo com a legislação em vigor.
              </DocTerm>
              <DocTerm term="Dados Pessoais Sensíveis">
                Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.
              </DocTerm>
              <DocTerm term="Dado Anonimizado">
                Dado relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento.
              </DocTerm>
              <DocTerm term="Incidentes">
                Qualquer acesso, aquisição, uso, modificação, divulgação, perda, destruição ou dano acidental, ilegal ou não autorizado que envolva dados pessoais.
              </DocTerm>
              <DocTerm term="Operador">
                Pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.
              </DocTerm>
              <DocTerm term="Titular(es) de Dados Pessoais">
                Pessoa natural a quem se referem os Dados Pessoais que são objeto de Tratamento.
              </DocTerm>
              <DocTerm term="Tratamento de Dados Pessoais">
                Qualquer operação ou conjunto de operações efetuadas com Dados Pessoais, por meios automatizados ou não automatizados, tais como coleta, registro, organização, estruturação, conservação, adaptação, recuperação, consulta, utilização, divulgação, comparação, limitação, eliminação ou destruição.
              </DocTerm>
            </DocSection>

            <DocSection title="Das Obrigações das Partes">
              <DocItem number="1.1">
                A CONTRATANTE se obriga, sempre que aplicável, a atuar em conformidade com a LGPD e às determinações de órgãos reguladores/fiscalizadores sobre a matéria, em especial à ANPD, além das demais normas e políticas de proteção de dados de cada país onde houver qualquer tipo de Tratamento dos Dados provenientes da CONTRATADA.
              </DocItem>
              <DocItem number="1.2">
                Considerando que competirão à CONTRATADA as decisões referentes ao tratamento dos Dados Pessoais (sendo portanto "Controlador") e que a CONTRATANTE realizará o tratamento em nome da CONTRATADA (sendo portanto "Operador"), a CONTRATANTE seguirá as instruções recebidas da CONTRATADA em relação ao Tratamento dos Dados Pessoais.
              </DocItem>
            </DocSection>

            <DocSection title="Dos Direitos dos Titulares">
              <DocItem number="1.3">
                A CONTRATANTE deverá notificar a CONTRATADA sobre todas e quaisquer solicitações e/ou reclamações dos Titulares de Dados Pessoais, para o atendimento às solicitações de: (a) confirmação da existência de tratamento; (b) acesso aos dados; (c) correção de dados incompletos, inexatos ou desatualizados; (d) anonimização, bloqueio ou eliminação de dados desnecessários; (e) portabilidade dos dados; (f) eliminação dos dados; (g) informação das entidades com as quais tenha realizado uso compartilhado dos dados; (h) exercer o direito de revogar o consentimento; (i) exercer o direito de se opor ao tratamento dos dados.
              </DocItem>
              <DocItem number="1.3.1">
                Todo atendimento às solicitações expressas acima será realizado em consonância com os termos da LGPD e legislações que tratem do tema privacidade e proteção de dados.
              </DocItem>
              <DocItem number="1.3.2">
                Nos casos em que a CONTRATANTE não possa atender as solicitações dos Titulares, deverá indicar as razões de fato ou de direito que o impedem de realizar tal atendimento.
              </DocItem>
              <DocItem number="1.3.3">
                A CONTRATANTE manterá a CONTRATADA informada de toda e qualquer tratativa que mantenha com seus clientes, parceiros e com o Titular de dados.
              </DocItem>
            </DocSection>

            <DocSection title="Confidencialidade">
              <DocItem number="1.4">
                A CONTRATANTE, incluindo todos os seus colaboradores e subcontratados, compromete-se a tratar todos os Dados Pessoais como confidenciais, respeitando-se os termos de confidencialidade já existentes entre as Partes.
              </DocItem>
            </DocSection>

            <DocSection title="Da Segurança de Informação e Monitoramento dos Dados">
              <DocItem number="1.5">
                A CONTRATANTE se compromete a adotar medidas, ferramentas e tecnologias necessárias para garantir a segurança dos dados e cumprir com suas obrigações, sempre considerando o estado da técnica disponível e em consonância com a legislação vigente e as orientações da ANPD.
              </DocItem>
              <DocItem number="1.5.1">
                A CONTRATANTE deverá cumprir com os requisitos das medidas de segurança técnicas e organizacionais para garantir a confidencialidade e segurança dos Dados Pessoais, com a utilização do maior número de técnicas disponíveis, tais como anonimização, pseudonimização, criptografia de ponta a ponta, utilização de antivírus e sistemas de autenticação em seus servidores.
              </DocItem>
              <DocItem number="1.5.2">
                A CONTRATANTE se compromete a utilizar tecnologias visando à proteção das informações em todas as comunicações, especialmente nos compartilhamentos de Dados Pessoais.
              </DocItem>
              <DocItem number="1.5.3">
                A CONTRATANTE deverá manter registro das operações de tratamento de Dados Pessoais que realizar, bem como implementar medidas técnicas e organizacionais necessárias para proteger os dados contra destruição, perda, alteração ou acesso não autorizado.
              </DocItem>
              <DocItem number="1.6">
                A CONTRATANTE deverá realizar o registro de todas as atividades executadas em seus sistemas/ambientes no mínimo enquanto viger este Contrato, incluindo qualquer atividade relativa a Dados Pessoais, de modo a permitir a identificação de quem as realizou.
              </DocItem>
              <DocItem number="1.8">
                A CONTRATANTE deverá monitorar sua própria conformidade e a de seus funcionários, colaboradores, parceiros e subcontratados com as respectivas obrigações de proteção de Dados Pessoais, fornecendo à CONTRATADA relatórios sobre esses controles sempre que solicitado.
              </DocItem>
              <DocItem number="1.8.1">
                Os relatórios deverão incluir, pelo menos: (i) o status dos sistemas de processamento; (ii) as medidas de segurança; (iii) o tempo de inatividade das medidas técnicas; (iv) a conformidade com as medidas organizacionais; (v) quaisquer violações de dados e/ou incidentes de segurança; (vi) as ameaças percebidas à segurança; e (vii) as melhorias exigidas e/ou recomendadas.
              </DocItem>
            </DocSection>

            <DocSection title="Dos Sub-Operadores / Subcontratados">
              <DocItem number="1.7">
                A CONTRATANTE somente poderá subcontratar qualquer parte dos Serviços que envolvam o tratamento de Dados Pessoais mediante anuência prévia e por escrito da CONTRATADA, devendo celebrar contrato escrito com o Suboperador impondo as mesmas obrigações previstas neste instrumento.
              </DocItem>
              <DocItem number="1.9">
                A CONTRATADA terá o direito de acompanhar, monitorar, auditar e fiscalizar a conformidade da CONTRATANTE com as obrigações aqui descritas, sempre com comunicação prévia em horário comercial.
              </DocItem>
            </DocSection>

            <DocSection title="Incidentes">
              <DocItem number="1.10">
                A CONTRATANTE deverá notificar a CONTRATADA em até 24 (vinte e quatro) horas a contar da sua ciência de: (i) qualquer não cumprimento das disposições legais relativas à proteção de Dados Pessoais; (ii) qualquer descumprimento das obrigações contratuais relativas ao Tratamento dos Dados Pessoais; (iii) qualquer violação de segurança; (iv) quaisquer exposições ou ameaças à conformidade com a proteção de Dados Pessoais; ou (v) qualquer ordem válida de Tribunal ou autoridade pública competente.
              </DocItem>
              <DocItem number="1.11">
                A CONTRATANTE se compromete a auxiliar a CONTRATADA com suas obrigações judiciais ou administrativas relacionadas à LGPD, fornecendo informações relevantes e qualquer outra assistência para documentar e eliminar a causa e os riscos impostos por quaisquer violações de segurança.
              </DocItem>
            </DocSection>

            <DocSection title="Propriedade dos Dados">
              <DocItem number="1.12">
                O presente Contrato não transfere a propriedade ou o controle dos dados em posse da CONTRATADA para a CONTRATANTE. Os Dados Pessoais compartilhados com a CONTRATANTE são e continuarão de domínio da CONTRATADA. A CONTRATANTE declara ter total ciência que o proprietário dos Dados Pessoais são os seus respectivos Titulares e que o uso deles deve ser feito estritamente dentro dos critérios da LGPD.
              </DocItem>
            </DocSection>

            <DocSection title="Tratamento de Dados Fora do Território Nacional">
              <DocItem number="1.13">
                Caso haja Tratamento de Dados Pessoais no exterior por parte da CONTRATANTE, deverá esta cientificar a CONTRATADA previamente, certificando-se que o país receptor tenha regras e legislação compatíveis com a lei brasileira ou mediante oferecimento de garantias do regime de proteção de dados pessoais local.
              </DocItem>
              <DocItem number="1.14">
                A CONTRATADA não autoriza a CONTRATANTE a usar, compartilhar ou comercializar quaisquer eventuais elementos de Dados, produtos ou subprodutos que se originem a partir do tratamento de Dados estabelecido por este Contrato.
              </DocItem>
              <DocItem number="1.14.1">
                Caso exista modificação dos textos legais que exija modificações na estrutura da execução do objeto do Contrato, a CONTRATANTE deverá adequar-se às condições vigentes e notificar formalmente a CONTRATADA caso alguma disposição impeça a continuidade do Contrato.
              </DocItem>
              <DocItem number="1.14.2">
                Se qualquer legislação nacional ou internacional aplicável ao tratamento de Dados Pessoais vier a exigir adequação de processos e/ou instrumentos contratuais, as Partes acordam em celebrar termo aditivo adicional neste sentido.
              </DocItem>
              <DocItem number="1.15">
                Sempre que Dados Pessoais ou Registros forem solicitados pela CONTRATADA à CONTRATANTE, esta deverá disponibilizá-los em até 48 (quarenta e oito) horas, podendo ser em menor prazo nos casos em que a demanda judicial ou norma aplicável assim o exija.
              </DocItem>
            </DocSection>

            <DocSection title="Devolução">
              <DocItem number="1.16">
                A CONTRATANTE se compromete a devolver todos os Dados que vier a ter acesso em até 15 (quinze) dias, nos casos em que: (i) a CONTRATADA solicitar; (ii) o Contrato for rescindido; ou (iii) com o término do presente Contrato. A CONTRATANTE não deve guardar ou reter os Dados por tempo superior ao prazo legal ou necessário para a execução do Contrato.
              </DocItem>
              <DocItem number="1.16.1">
                Todos os dados pessoais tratados no âmbito desse contrato são e continuarão sendo do respectivo Titular. As bases de dados criadas em razão deste Contrato são protegidas pelas leis de propriedade intelectual e sua titularidade será sempre da CONTRATADA.
              </DocItem>
              <DocItem number="1.16.2">
                Os Dados contidos em um banco de Dados na CONTRATANTE são de inteira propriedade da CONTRATADA e deverão ser restituídos em qualquer hipótese de extinção deste instrumento, juntamente com o "dicionário" de dados, em até 10 (dez) dias.
              </DocItem>
              <DocItem number="1.17">
                Fica assegurado à CONTRATADA o direito de regresso em face da CONTRATANTE no caso de danos causados em decorrência do descumprimento das obrigações aqui assumidas em relação à Proteção dos Dados.
              </DocItem>
              <DocItem number="1.17.1">
                A responsabilidade da CONTRATANTE diante do referido descumprimento é ilimitada, não produzindo nenhum efeito qualquer outra cláusula que disponha de forma contrária.
              </DocItem>
            </DocSection>

            {/* Assinatura */}
            <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
              <p className="text-brand-dark/60 text-[15px] leading-relaxed">
                Ao firmar o <strong className="text-brand-dark">Contrato de Prestação de Serviços</strong>, as partes concordam com os Termos Gerais de Proteção de Dados Pessoais e Privacidade acima estabelecidos.
              </p>
            </div>

          </div>
        </Container>
      </section>

    </>
  )
}

function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-brand-dark mb-6 border-b border-slate-100 pb-3 text-[20px] font-black uppercase tracking-wide">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function DocTerm({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="bg-brand-blue/8 mt-0.5 h-2 w-2 shrink-0 translate-y-2 rounded-full bg-blue-200" />
      <p className="text-brand-dark/70 text-[15px] leading-relaxed">
        <strong className="text-brand-dark">{term}:</strong>{' '}
        {children}
      </p>
    </div>
  )
}

function DocItem({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="text-brand-blue mt-0.5 shrink-0 text-[13px] font-bold">{number}</span>
      <p className="text-brand-dark/70 text-[15px] leading-relaxed">{children}</p>
    </div>
  )
}
