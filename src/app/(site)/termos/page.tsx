import { generateMetadata } from '@/lib/metadata'
import { SiteHeader } from '@/components/layout/site-header'
import { Container } from '@/components/shared'

export const metadata = generateMetadata({
  title: 'Termos Gerais de Proteção de Dados | Teloos',
  description:
    'Termos Gerais de Proteção de Dados Pessoais e Privacidade da Teloos Sistemas Ltda.',
})

export default function TermosPage() {
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
            Termos Gerais de{' '}
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
                <strong className="text-brand-dark">TELOOS SISTEMAS LTDA</strong>, pessoa jurídica de direito privado inscrita no CNPJ sob o nº <strong>66.039.163/0001-96</strong>, com sede na Rua Primeiro de Maio, nº 442, Centro, Pinhais/PR, CEP: 83.323-020, neste ato representada na forma de seus atos constitutivos, doravante denominado <strong>CONTRATADA</strong>;
              </p>
              <p className="text-brand-dark/80 text-[15px] leading-relaxed mb-4">
                E, de outro lado, a <strong>CONTRATANTE</strong>;
              </p>
              <p className="text-brand-dark/70 text-[15px] leading-relaxed mb-4">
                Considerando que em virtude da publicação da Lei 13.709/2018 ("Lei Geral de Proteção de Dados" ou simplesmente "LGPD"), foram criadas uma série de obrigações, direito e deveres que são aplicáveis às Partes.
              </p>
              <p className="text-brand-dark/70 text-[15px] leading-relaxed">
                Desta forma, as Partes necessitam estar aderentes aos termos da referida Lei Geral de Proteção de Dados.
              </p>
            </div>

            <DocSection title="Definições">
              <p className="text-brand-dark/70 text-[15px] leading-relaxed mb-6">
                Para as finalidades deste Anexo, os seguintes termos terão os seguintes significados:
              </p>
              <DocTerm term='"Autoridade Nacional de Proteção de Dados" ou simplesmente "Autoridade Nacional" ("ANPD")'>
                significa o órgão responsável pela fiscalização do cumprimento das disposições da Lei Geral de Proteção de Dados, Lei Federal nº 13.709/2018 no território nacional.
              </DocTerm>
              <DocTerm term='"Controlador"'>
                significa pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao Tratamento de Dados Pessoais.
              </DocTerm>
              <DocTerm term='"Dados Pessoais"'>
                qualquer informação obtida em razão do presente contrato, relacionada a pessoa natural identificada ou identificável, como por exemplo: nome, CPF, RG, endereço residencial ou comercial, número de telefone fixo ou móvel, endereço de e-mail, informações de geolocalização, entre outros.
              </DocTerm>
              <DocTerm term='"Direitos dos Titulares"'>
                significam todos aqueles elencados no Capítulo III, da LGPD, bem como todos demais direitos que os Titulares tenham ou possam vir a ter de acordo com a legislação em vigor.
              </DocTerm>
              <DocTerm term='"Dados Pessoais Sensíveis"'>
                dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.
              </DocTerm>
              <DocTerm term='"Dado anonimizado"'>
                dado relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento.
              </DocTerm>
              <DocTerm term='"Incidentes"'>
                qualquer acesso, aquisição, uso, modificação, divulgação, perda, destruição ou dano acidental, ilegal ou não autorizado que envolva dados pessoais.
              </DocTerm>
              <DocTerm term='"Operador"'>
                significa a pessoa natural ou jurídica, de direito público ou privado, a que realiza o tratamento de dados pessoais em nome do controlador.
              </DocTerm>
              <DocTerm term='"Titular(es) de Dados Pessoais" ou referido simplesmente como "Titular"'>
                significa a pessoa natural a quem se referem os Dados Pessoais que são objeto de Tratamento.
              </DocTerm>
              <DocTerm term='"Tratamento" ou "Tratamento dos Dados Pessoais"'>
                significa qualquer operação ou conjunto de operações efetuadas com Dados Pessoais ou sobre conjuntos de Dados Pessoais, por meios automatizados ou não automatizados, tais como a coleta, o registro, a organização, a estruturação, a conservação, a adaptação ou alteração, a recuperação, a consulta, a utilização, a divulgação por transmissão, difusão ou qualquer outra forma de disponibilização, a comparação ou interconexão, a limitação, a eliminação ou a destruição.
              </DocTerm>
              <p className="text-brand-dark/70 text-[15px] leading-relaxed mt-4">
                Terão os termos conforme lei geral...
              </p>
            </DocSection>

            <DocSection title="Das Obrigações das Partes">
              <DocItem number="1.1">
                A CONTRATANTE se obriga, sempre que aplicável, a atuar no presente Contrato em conformidade com a LGPD e às determinações de órgãos reguladores/fiscalizadores sobre a matéria, em especial à ANPD, além das demais normas e políticas de proteção de dados de cada país onde houver qualquer tipo de Tratamento dos Dados provenientes da CONTRATADA ou de quem a CONTRATADA apontar, o que incluirá os Dados coletados junto aos projetos com clientes da CONTRATADA.
              </DocItem>
              <DocItem number="1.2">
                Considerando que competirão à CONTRATADA as decisões referentes ao tratamento dos Dados Pessoais (sendo portanto "Controlador") e que a CONTRATANTE realizará o tratamento dos Dados Pessoais em nome da CONTRATADA (sendo portanto "Operador"), a CONTRATANTE seguirá as instruções recebidas da CONTRATADA em relação ao Tratamento dos Dados Pessoais, além de observar e cumprir as normas legais vigentes aplicáveis, devendo a CONTRATANTE garantir sua licitude e idoneidade, sob pena de arcar com as perdas e danos que eventualmente possa causar, sem prejuízo das demais sanções aplicáveis.
              </DocItem>
            </DocSection>

            <DocSection title="Dos Direitos dos Titulares">
              <DocItem number="1.3">
                A CONTRATANTE deverá notificar a CONTRATADA sobre todas e quaisquer solicitações e/ou reclamações dos Titulares de Dados Pessoais, para o atendimento às solicitações de (a) confirmação da existência de tratamento, (b) acesso aos dados, (c) correção de dados incompletos, inexatos ou desatualizados, (d) anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com os termos da LGPD, (e) portabilidade dos dados, (f) eliminação dos dados, (f) informação das entidades públicas e privadas com as quais tenha realizado uso compartilhados dos dados, (g) informação sobre a possiblidade de não fornecer consentimento e as consequências do não consentimento, (h) exercer o seu direito de revogar o consentimento (i) exercer o seu direito de se opor ao tratamento dos dados.
              </DocItem>
              <DocItem number="1.3.1">
                Todo atendimento às solicitações expressas acima será realizado em consonância com os termos da LGPD e legislações que tratem do tema privacidade e proteção de dados.
              </DocItem>
              <DocItem number="1.3.2">
                Nos casos em que a CONTRATANTE não possa ou consiga atender as solicitações dos Titulares definidas no item 1.3 acima, deverá indicar sobre as razões de fato ou de direito que o impedem de realizar tal atendimento ou a adotar as medidas necessárias.
              </DocItem>
              <DocItem number="1.3.3">
                A CONTRATANTE manterá a CONTRATADA informado de toda e qualquer tratativa que mantenha com seus clientes, parceiros e com o Titular de dados. Toda e qualquer justificativa que seja dada ao Titular sobre a não possibilidade de atendimento às suas solicitações deverão ser previamente comunicadas à CONTRATADA, tendo essa a possibilidade de oposição e ajuste da resposta ofertada.
              </DocItem>
            </DocSection>

            <DocSection title="Confidencialidade">
              <DocItem number="1.4">
                A CONTRATANTE, incluindo todos os seus colaboradores e subcontratados, compromete-se a tratar todos os Dados Pessoais como confidenciais, respeitando-se os termos de confidencialidade já existente entre as Partes.
              </DocItem>
            </DocSection>

            <DocSection title="Da Segurança de Informação e Monitoramento dos Dados">
              <DocItem number="1.5">
                A CONTRATANTE se compromete a adotar medidas, ferramentas e tecnologias necessárias para garantir a segurança dos dados e cumprir com suas obrigações, sempre considerando o estado da técnica disponível e em consonância com a legislação vigente e as orientações e normas editadas pela ANPD.
              </DocItem>
              <DocItem number="1.5.1">
                A CONTRATANTE deverá cumprir com os requisitos das medidas de segurança técnicas e organizacionais para garantir a confidencialidade e segurança dos Dados Pessoais - inclusive no seu armazenamento e transmissão - com a utilização do maior número de técnicas disponíveis e adequadas, tais como, mas não limitados a anonimização, a pseudonimização, a criptografia de ponta a ponta, utilização de antivírus e sistemas de autenticação em seus servidores – internos ou externos, próprios ou terceirizados, devendo (no caso de servidores de terceiros) exigir que os mesmos graus de zelo e segurança aqui descritos sejam adotados por tais terceiros.
              </DocItem>
              <DocItem number="1.5.2">
                Sempre em observância ao estado da técnica, a CONTRATANTE se compromete a utilizar tecnologias visando à proteção das informações em todas as comunicações, especialmente nos compartilhamentos de Dados Pessoais pela CONTRATANTE à CONTRATADA (ou a quem a CONTRATADA indicar) a exemplo de padrão seguro de transmissão de dados e criptografia, dentre outras técnicas aplicáveis.
              </DocItem>
              <DocItem number="1.5.3">
                A CONTRATANTE deverá manter registro das operações de tratamento de Dados Pessoais que realizar, bem como implementar medidas técnicas e organizacionais necessárias para proteger os dados contra a destruição, acidental ou ilícita, a perda, a alteração, a comunicação ou difusão ou o acesso não autorizado, além de garantir que o ambiente (seja ele físico ou lógico), utilizado por ela para o tratamento de Dados Pessoais, é estruturado de forma a atender aos requisitos de segurança, aos padrões de boas práticas e de governança e aos princípios gerais previstos em Lei e às demais normas regulamentares aplicáveis.
              </DocItem>
              <DocItem number="1.6">
                A CONTRATANTE deverá realizar o registro de todas as atividades executadas em seus sistemas/ambientes ("Registros") no mínimo enquanto viger este Contrato, incluindo qualquer atividade relativa a Dados Pessoais tratados sob determinação da CONTRATADA, de modo a permitir a identificação de quem as realizou.
              </DocItem>
              <DocItem number="1.8">
                A CONTRATANTE deverá monitorar, por meios adequados, sua própria conformidade e a de seus funcionários, colaboradores, parceiros e subcontratados com as respectivas obrigações de proteção de Dados Pessoais em relação aos seus serviços e deverá fornecer à CONTRATADA relatórios sobre esses controles sempre que solicitado.
              </DocItem>
              <DocItem number="1.8.1">
                Os relatórios acima citados deverão incluir, pelo menos, (i) o status dos sistemas de processamento de Dados Pessoais, (ii) as medidas de segurança, (iii) o tempo de inatividade registrado das medidas técnicas de segurança, (iv) a (não) conformidade estabelecida com as medidas organizacionais, (v) quaisquer eventuais violações de dados e/ou incidentes de segurança, (vi) as ameaças percebidas à segurança e aos Dados Pessoais e (vii) as melhorias exigidas e/ou recomendadas. Demais solicitações poderão ser feitos pelo CONTRATADA de tempos em tempos.
              </DocItem>
            </DocSection>

            <DocSection title="Dos Sub-Operadores / Subcontratados">
              <DocItem number="1.7">
                A CONTRATANTE somente poderá subcontratar qualquer parte dos Serviços que envolvam o tratamento de Dados Pessoais para um ou mais terceiros ("Suboperadores") mediante anuência prévia e por escrito da CONTRATADA. Neste caso, A CONTRATANTE deverá celebrar um contrato escrito com o Suboperador para (i) obrigar o Suboperador às mesmas obrigações impostas por este Contrato em relação à CONTRATANTE, no que for aplicável ao objeto deste Contrato, (ii) descrever os Serviços subcontratados e (iii) descrever as medidas técnicas e organizacionais que o Suboperador deverá implementar. Devendo fornecer à CONTRATADA cópia de tal contrato.
              </DocItem>
              <DocItem number="1.9">
                O CONTRATADA de acordo com seu critério e tempos, terá o direito de acompanhar, monitorar, auditar e fiscalizar a conformidade da CONTRATANTE com as obrigações aqui descritas. Nestes casos, sempre comunicará à CONTRATANTE com antecedência razoável e sempre em horário comercial sobre tal acompanhamento, monitoramento, auditoria e/ou fiscalização.
              </DocItem>
            </DocSection>

            <DocSection title="Incidentes">
              <DocItem number="1.10">
                A CONTRATANTE deverá notificar a CONTRATADA em até 24 (vinte e quatro) horas a contar da sua ciência (i) de qualquer não cumprimento (ainda que suspeito) das disposições legais relativas à proteção de Dados Pessoais; (ii) de qualquer descumprimento das obrigações contratuais relativas ao Tratamento dos Dados Pessoais; (iii) de qualquer violação de segurança na CONTRATANTE ou nos seus Suboperadores; (iv) de quaisquer exposições ou ameaças em relação à conformidade com a proteção de Dados Pessoais; (v) ou em período menor, se necessário, de qualquer ordem válida de Tribunal, autoridade pública ou regulador competente.
              </DocItem>
              <DocItem number="1.11">
                A CONTRATANTE se compromete a auxiliar a CONTRATADA com a suas obrigações judiciais ou administrativas relacionadas a LGPD, fornecendo informações relevantes disponíveis e qualquer outra assistência para documentar e eliminar a causa e os riscos impostos por quaisquer violações de segurança; e no cumprimento das obrigações decorrentes dos Direitos dos Titulares dos Dados Pessoais.
              </DocItem>
            </DocSection>

            <DocSection title="Propriedade dos Dados">
              <DocItem number="1.12">
                O presente Contrato não transfere a propriedade ou o controle dos dados em posse da CONTRATADA, de seus clientes e de propriedade dos Titulares de dados para a CONTRATANTE. Os Dados Pessoais compartilhados com a CONTRATANTE gerados, obtidos ou coletados a partir da prestação dos serviços ora contratados são e continuarão de domínio da CONTRATADA, inclusive sobre qualquer novo produto, subproduto e/ou serviço(s) que seja(m) criado(s) a partir do Tratamento de Dados estabelecido por este Contrato. A CONTRATANTE declara ter total ciência que, precipuamente, o proprietário dos Dados Pessoais são os seus respectivos Titulares. Que o uso deles deve sempre ser feito estritamente dentro dos critérios da LGPD e definições/finalidades ditados pela CONTRATADA, ora "Controlador". Entretanto todos os direitos comerciais, financeiros e demais direitos relacionados a relação comercial oriunda deste Contrato são exclusivamente da CONTRATADA.
              </DocItem>
            </DocSection>

            <DocSection title="Tratamento de Dados Fora do Território Nacional">
              <DocItem number="1.13">
                Caso haja Tratamento de Dados Pessoais no exterior por parte da CONTRATANTE, deverá esta cientificar a CONTRATADA previamente acerca da adoção desse compartilhamento, bem como se certificar que o país receptor tenha regras e legislação que proporcione grau de proteção de dados pessoais compatível com a lei Brasileira ou mediante oferecimento de garantias do regime de proteção de dados pessoais local, com aplicação de cláusulas contratuais adequadas e políticas corporativas (caso tal compartilhamento ocorra entre empresas do mesmo grupo empresarial da CONTRATANTE). Tais garantias poderão ser solicitadas pela CONTRATADA a qualquer tempo.
              </DocItem>
              <DocItem number="1.14">
                A CONTRATADA não autoriza a CONTRATANTE a usar, compartilhar ou comercializar quaisquer eventuais elementos de Dados, produtos ou subprodutos que se originem ou sejam criados a partir do tratamento de Dados estabelecido por este Contrato.
              </DocItem>
              <DocItem number="1.14.1">
                Caso exista modificação dos textos legais acima indicados ou de qualquer outro de forma que exija modificações na estrutura da execução do objeto do Contrato pela CONTRATANTE, esta deverá adequar-se às condições vigentes. Se houver alguma disposição que impeça a continuidade do Contrato conforme as disposições acordadas, a CONTRATANTE concorda em notificar formalmente este fato à CONTRATADA, que terá o direito de rescindir o Contrato sem qualquer penalidade, apurando-se os valores devidos até a data da rescisão.
              </DocItem>
              <DocItem number="1.14.2">
                Se qualquer legislação nacional ou internacional aplicável ao tratamento de Dados Pessoais no âmbito do Contrato vier a exigir adequação de processos e/ou instrumentos contratuais por forma ou meio determinado, as Partes desde já acordam em celebrar termo aditivo adicional neste sentido.
              </DocItem>
              <DocItem number="1.15">
                Sempre que Dados Pessoais ou Registros forem solicitados pela CONTRATADA à CONTRATANTE, esta deverá disponibilizá-los em até 48 (quarenta e oito) horas, podendo ser em menor prazo nos casos em que a demanda judicial, a norma aplicável ou o pedido de autoridade competente assim o exija. Caso a CONTRATANTE receba diretamente alguma ordem judicial para fornecimento de quaisquer Dados, deverá comunicar a CONTRATADA antes de fornecê-los, se assim for possível.
              </DocItem>
            </DocSection>

            <DocSection title="Devolução">
              <DocItem number="1.16">
                A CONTRATANTE se compromete a devolver todos os Dados que vier a ter acesso, em até 15 (quinze) dias, nos casos em que (i) a CONTRATADA solicitar; (ii) o Contrato for rescindido; ou (iii) com o término do presente Contrato. Em adição, a CONTRATANTE não deve guardar, armazenar ou reter os Dados por tempo superior ao prazo legal ou necessário para a execução do presente Contrato.
              </DocItem>
              <DocItem number="1.16.1">
                Todos os dados pessoais tratados no âmbito desse contrato são e continuarão sendo do respectivo Titular, que é o sujeito de direito sobre tais dados. Já as bases de dados criadas em razão deste Contrato são protegidas pelas leis de propriedade intelectual e sua titularidade será sempre da CONTRATADA. A CONTRATANTE concorda em manter pseudoanoniminizados os dados que estiverem em sua posse, bem como excluí-los conforme as condições previstas na cláusula de retenção e exclusão de dados prevista neste instrumento.
              </DocItem>
              <DocItem number="1.16.2">
                Os Dados contidos em um banco de Dados na CONTRATANTE são de inteira propriedade da CONTRATADA e deverão ser restituídos à CONTRATADA em qualquer hipótese de extinção deste instrumento. A CONTRATANTE deverá remeter em adição à base de dados o "dicionário" de dados, ou tutorial que permita entender a organização do banco de Dados, em até 10 (dez) dias ou em eventual prazo acordado entre as Partes.
              </DocItem>
              <DocItem number="1.17">
                Fica assegurado à CONTRATADA, nos termos da lei, o direito de regresso em face da CONTRATANTE no caso de danos causados por este em decorrência do descumprimento das obrigações aqui assumidas em relação à Proteção dos Dados.
              </DocItem>
              <DocItem number="1.17.1">
                A responsabilidade da CONTRATANTE diante do referido descumprimento é ilimitada, não produzindo nenhum efeito qualquer outra cláusula que disponha de forma contrária.
              </DocItem>
            </DocSection>

            {/* Assinatura */}
            <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
              <p className="text-brand-dark/60 text-[15px] leading-relaxed">
                E, por estarem justas e contratadas na forma acima estabelecida, ao firmar o{' '}
                <strong className="text-brand-dark">Contrato de Prestação de Serviços</strong>, as partes concordam com os Termos Gerais de Proteção de Dados Pessoais e Privacidade.
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
      <span className="bg-brand-blue mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full opacity-40" />
      <p className="text-brand-dark/70 text-[15px] leading-relaxed">
        <strong className="text-brand-dark">{term}</strong>{' '}
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
