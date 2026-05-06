import { generateMetadata } from '@/lib/metadata'
import { SiteHeader } from '@/components/layout/site-header'
import { Container } from '@/components/shared'

export const metadata = generateMetadata({
  title: 'Termos de Uso | Teloos',
  description:
    'Termos e condições de uso dos sistemas e serviços da Teloos Sistemas Ltda.',
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
            Termos de <span className="text-brand-blue">Uso</span>
          </h1>
          <p className="text-brand-dark/50 mx-auto max-w-xl text-[17px] leading-relaxed">
            Condições gerais de uso dos sistemas e serviços da Teloos Sistemas Ltda.
          </p>
        </Container>
      </section>

      {/* Conteúdo */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">

            {/* Intro */}
            <div className="mb-12 rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <p className="text-brand-dark/80 text-[15px] leading-relaxed mb-4">
                Estes Termos de Uso regulam a relação entre a{' '}
                <strong className="text-brand-dark">TELOOS SISTEMAS LTDA</strong>, inscrita no CNPJ sob o nº{' '}
                <strong>66.039.163/0001-96</strong>, com sede na Rua Primeiro de Maio, nº 442, Centro, Pinhais/PR, CEP: 83.323-020, doravante denominada{' '}
                <strong>TELOOS</strong>, e o <strong>CONTRATANTE</strong>, pessoa física ou jurídica que utiliza os sistemas e serviços disponibilizados pela Teloos.
              </p>
              <p className="text-brand-dark/60 text-[15px] leading-relaxed">
                Ao contratar os serviços da Teloos, o CONTRATANTE declara ter lido, compreendido e aceito integralmente as condições estabelecidas neste instrumento. Caso não concorde com qualquer disposição, o CONTRATANTE deverá abster-se de utilizar os sistemas e serviços.
              </p>
            </div>

            <DocSection title="1. Do Objeto">
              <DocItem number="1.1">
                A Teloos disponibiliza ao CONTRATANTE o acesso a sistemas integrados de gestão para food service e varejo, incluindo, mas não se limitando a: Ponto de Venda (PDV), Cardápio Digital, Autoatendimento, Delivery Integrado, Controle de Estoque e Relatórios Financeiros.
              </DocItem>
              <DocItem number="1.2">
                Os sistemas são disponibilizados em modelo de Software como Serviço (SaaS), podendo incluir também fornecimento e suporte de hardware, conforme proposta comercial firmada entre as Partes.
              </DocItem>
              <DocItem number="1.3">
                A Teloos reserva-se o direito de adicionar, modificar ou descontinuar funcionalidades dos sistemas, mediante comunicação prévia ao CONTRATANTE com antecedência mínima de 30 (trinta) dias.
              </DocItem>
            </DocSection>

            <DocSection title="2. Do Cadastro e Acesso">
              <DocItem number="2.1">
                Para utilizar os sistemas da Teloos, o CONTRATANTE deverá realizar seu cadastro, fornecendo informações verdadeiras, completas e atualizadas, sendo integralmente responsável pelas informações prestadas.
              </DocItem>
              <DocItem number="2.2">
                O CONTRATANTE é responsável pela guarda e sigilo de suas credenciais de acesso (login e senha), não podendo compartilhá-las com terceiros não autorizados. Em caso de perda ou suspeita de uso indevido, deverá comunicar a Teloos imediatamente.
              </DocItem>
              <DocItem number="2.3">
                A Teloos poderá suspender ou cancelar o acesso do CONTRATANTE em caso de uso indevido, violação destes Termos ou atividade suspeita que coloque em risco a integridade dos sistemas ou de outros usuários.
              </DocItem>
            </DocSection>

            <DocSection title="3. Das Obrigações do Contratante">
              <DocItem number="3.1">
                Utilizar os sistemas exclusivamente para fins lícitos e de acordo com a legislação brasileira vigente, incluindo as normas fiscais, tributárias e trabalhistas aplicáveis à sua atividade.
              </DocItem>
              <DocItem number="3.2">
                Não reproduzir, copiar, vender, revender, transferir ou explorar comercialmente qualquer parte dos sistemas sem autorização expressa e por escrito da Teloos.
              </DocItem>
              <DocItem number="3.3">
                Não realizar engenharia reversa, descompilar, desmontar ou tentar extrair o código-fonte dos sistemas da Teloos.
              </DocItem>
              <DocItem number="3.4">
                Manter seus dados cadastrais atualizados, incluindo informações de contato, endereço e dados fiscais necessários para a correta emissão de documentos fiscais eletrônicos.
              </DocItem>
              <DocItem number="3.5">
                Zelar pela integridade dos equipamentos (hardwares) eventualmente fornecidos pela Teloos, sendo responsável por danos causados por mau uso, negligência ou acidente.
              </DocItem>
            </DocSection>

            <DocSection title="4. Das Obrigações da Teloos">
              <DocItem number="4.1">
                Disponibilizar os sistemas contratados com estabilidade e segurança, adotando as melhores práticas de infraestrutura e tecnologia disponíveis.
              </DocItem>
              <DocItem number="4.2">
                Prestar suporte técnico ao CONTRATANTE por meio dos canais oficiais definidos no momento da contratação, dentro dos prazos e horários acordados.
              </DocItem>
              <DocItem number="4.3">
                Realizar atualizações periódicas dos sistemas, visando a melhoria contínua de funcionalidades, correção de falhas e adequação a novas exigências legais, especialmente em matéria fiscal e tributária.
              </DocItem>
              <DocItem number="4.4">
                Garantir a confidencialidade dos dados do CONTRATANTE, nos termos dos Termos Gerais de Proteção de Dados Pessoais e Privacidade da Teloos e da Lei Geral de Proteção de Dados (LGPD).
              </DocItem>
            </DocSection>

            <DocSection title="5. Do Pagamento">
              <DocItem number="5.1">
                Os valores, periodicidade e condições de pagamento pelos serviços contratados serão definidos na proposta comercial firmada entre as Partes, podendo ser mensalidade, licença anual ou outro modelo acordado.
              </DocItem>
              <DocItem number="5.2">
                O não pagamento nas datas acordadas sujeitará o CONTRATANTE à incidência de multa de 2% (dois por cento) e juros de mora de 1% (um por cento) ao mês sobre o valor em aberto, além da possibilidade de suspensão do acesso aos sistemas.
              </DocItem>
              <DocItem number="5.3">
                A Teloos reserva-se o direito de reajustar os valores dos serviços anualmente, com base no índice IGPM/FGV ou outro índice que venha a substituí-lo, mediante comunicação prévia ao CONTRATANTE com antecedência mínima de 30 (trinta) dias.
              </DocItem>
              <DocItem number="5.4">
                Eventuais serviços adicionais não previstos na proposta comercial original serão orçados e cobrados separadamente, mediante aprovação prévia do CONTRATANTE.
              </DocItem>
            </DocSection>

            <DocSection title="6. Da Propriedade Intelectual">
              <DocItem number="6.1">
                Todos os direitos de propriedade intelectual relacionados aos sistemas da Teloos, incluindo software, interfaces, logotipos, marcas, algoritmos e documentação técnica, são e permanecerão de titularidade exclusiva da Teloos.
              </DocItem>
              <DocItem number="6.2">
                A contratação dos serviços não implica cessão ou transferência de qualquer direito de propriedade intelectual ao CONTRATANTE, sendo concedida apenas uma licença de uso limitada, não exclusiva e intransferível, pelo período de vigência do contrato.
              </DocItem>
              <DocItem number="6.3">
                O CONTRATANTE não poderá utilizar a marca, o nome ou qualquer material da Teloos sem autorização prévia e expressa por escrito.
              </DocItem>
            </DocSection>

            <DocSection title="7. Da Disponibilidade e Suporte">
              <DocItem number="7.1">
                A Teloos envidará seus melhores esforços para garantir a disponibilidade dos sistemas 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana, ressalvadas as janelas de manutenção programada, que serão comunicadas previamente.
              </DocItem>
              <DocItem number="7.2">
                A Teloos não se responsabiliza por indisponibilidades decorrentes de fatores externos ao seu controle, tais como falhas de energia elétrica, problemas de conectividade do CONTRATANTE, desastres naturais ou atos de terceiros.
              </DocItem>
              <DocItem number="7.3">
                O suporte técnico será prestado nos canais e horários definidos na proposta comercial. Chamados fora do horário de atendimento serão registrados e respondidos no próximo período útil, salvo nos planos que incluam suporte estendido.
              </DocItem>
            </DocSection>

            <DocSection title="8. Da Rescisão">
              <DocItem number="8.1">
                O CONTRATANTE poderá rescindir o contrato a qualquer momento, mediante comunicação formal à Teloos com antecedência mínima de 30 (trinta) dias, sem necessidade de apresentar justificativa.
              </DocItem>
              <DocItem number="8.2">
                A Teloos poderá rescindir o contrato, sem ônus, nos seguintes casos: (i) descumprimento de quaisquer cláusulas destes Termos pelo CONTRATANTE; (ii) inadimplência superior a 30 (trinta) dias; (iii) uso dos sistemas para atividades ilícitas ou que violem direitos de terceiros.
              </DocItem>
              <DocItem number="8.3">
                Em caso de rescisão, o CONTRATANTE terá acesso aos seus dados por até 30 (trinta) dias após o encerramento do contrato, para fins de exportação. Após esse prazo, os dados poderão ser excluídos definitivamente dos servidores da Teloos.
              </DocItem>
            </DocSection>

            <DocSection title="9. Da Limitação de Responsabilidade">
              <DocItem number="9.1">
                A Teloos não será responsável por danos indiretos, lucros cessantes, perda de dados ou quaisquer prejuízos decorrentes do uso ou impossibilidade de uso dos sistemas, salvo nos casos de dolo ou culpa grave comprovada.
              </DocItem>
              <DocItem number="9.2">
                A responsabilidade total da Teloos perante o CONTRATANTE, em qualquer hipótese, ficará limitada ao valor pago pelo CONTRATANTE nos últimos 3 (três) meses de contrato.
              </DocItem>
              <DocItem number="9.3">
                O CONTRATANTE é o único responsável pela correta operação dos sistemas, treinamento de sua equipe e adequação de seus processos internos às funcionalidades disponibilizadas.
              </DocItem>
            </DocSection>

            <DocSection title="10. Das Disposições Gerais">
              <DocItem number="10.1">
                Estes Termos de Uso poderão ser alterados pela Teloos a qualquer momento, mediante comunicação ao CONTRATANTE com antecedência mínima de 15 (quinze) dias. A continuidade do uso dos sistemas após a comunicação implica aceite das novas condições.
              </DocItem>
              <DocItem number="10.2">
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Pinhais/PR para dirimir quaisquer controvérsias decorrentes deste instrumento, com renúncia a qualquer outro, por mais privilegiado que seja.
              </DocItem>
              <DocItem number="10.3">
                A tolerância de qualquer das Partes quanto ao descumprimento de obrigações pela outra não implicará renúncia, novação ou alteração do pactuado nestes Termos.
              </DocItem>
              <DocItem number="10.4">
                Caso qualquer disposição destes Termos seja considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.
              </DocItem>
            </DocSection>

            {/* Assinatura */}
            <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
              <p className="text-brand-dark/60 text-[15px] leading-relaxed">
                Ao contratar os serviços da <strong className="text-brand-dark">Teloos</strong>, o CONTRATANTE declara ter lido, compreendido e aceito integralmente estes Termos de Uso.
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

function DocItem({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="text-brand-blue mt-0.5 shrink-0 text-[13px] font-bold">{number}</span>
      <p className="text-brand-dark/70 text-[15px] leading-relaxed">{children}</p>
    </div>
  )
}
