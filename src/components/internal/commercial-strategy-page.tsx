'use client'

import Image from 'next/image'
import {
  BarChart3,
  CheckCircle2,
  DollarSign,
  Download,
  RotateCcw,
  Settings2,
  Target,
  TrendingUp,
  X,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type FunnelMode = 'leads' | 'goal'

type FunnelRateId =
  | 'firstApproach'
  | 'retryApproach'
  | 'contactEstablished'
  | 'needsAssessment'
  | 'meetingScheduled'
  | 'trial'
  | 'proposal'
  | 'negotiation'
  | 'sale'

type FunnelRate = {
  id: FunnelRateId
  label: string
  helper: string
  min: number
  max: number
  value: number
}

type FunnelStage = {
  label: string
  value: number
  rate?: number
  rateConfig?: FunnelRate
}

type BottleneckAnalysis = {
  label: string
  rateConfig?: FunnelRate
  lostVolume: number
  previousValue: number
  currentValue: number
  gap: number
  status: string
  isCritical: boolean
}

type StageHealthSummary = {
  criticalCount: number
  warningLabel: string
}

const defaultRates: FunnelRate[] = [
  {
    id: 'firstApproach',
    label: 'Sem contato → 1º abordagem',
    helper: 'Percentual de leads que recebem a primeira abordagem',
    min: 85,
    max: 98,
    value: 95,
  },
  {
    id: 'retryApproach',
    label: '1º abordagem → 2º a 4º tentativa',
    helper: 'Leads que seguem para cadência de novas tentativas',
    min: 65,
    max: 85,
    value: 78,
  },
  {
    id: 'contactEstablished',
    label: 'Tentativas → contato estabelecido',
    helper: 'Taxa de conexão real com o lead',
    min: 45,
    max: 65,
    value: 55,
  },
  {
    id: 'needsAssessment',
    label: 'Contato → levantamento',
    helper: 'Contatos que avançam para entender necessidade',
    min: 65,
    max: 85,
    value: 75,
  },
  {
    id: 'meetingScheduled',
    label: 'Levantamento → reunião agendada',
    helper: 'Oportunidades que aceitam uma reunião',
    min: 60,
    max: 80,
    value: 70,
  },
  {
    id: 'trial',
    label: 'Reunião → cliente em teste',
    helper: 'Reuniões que viram teste da solução',
    min: 55,
    max: 75,
    value: 68,
  },
  {
    id: 'proposal',
    label: 'Teste → envio de proposta',
    helper: 'Testes que recebem proposta comercial',
    min: 60,
    max: 85,
    value: 75,
  },
  {
    id: 'negotiation',
    label: 'Proposta → negociação',
    helper: 'Propostas que entram em negociação',
    min: 55,
    max: 80,
    value: 70,
  },
  {
    id: 'sale',
    label: 'Negociação → venda',
    helper: 'Negociações que fecham como venda',
    min: 30,
    max: 55,
    value: 45,
  },
]

const commercialRituals = [
  'Atualizar taxas reais toda sexta-feira',
  'Comparar meta x leads necessários antes da pauta comercial',
  'Marcar gargalo principal do funil e dono da ação',
]

const formatNumber = (value: number) =>
  Math.round(value).toLocaleString('pt-BR')

const parseNumber = (value: string) => Number(value.replace(/\D/g, '')) || 0

const onlyDigits = (value: string) => value.replace(/\D/g, '')

const formatPdfLabel = (value: string) =>
  value.replace(/\s*→\s*/g, ' para ').replace(/\s+/g, ' ').trim()

async function loadImageAsDataUrl(src: string) {
  const response = await fetch(src)
  const blob = await response.blob()

  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

function getStatus(value: number, min: number, max: number) {
  if (value < min) {
    return {
      label: 'Abaixo',
      className: 'bg-red-50 text-red-700 ring-red-100',
    }
  }

  if (value > max) {
    return {
      label: 'Acima',
      className: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    }
  }

  return {
    label: 'Na média',
    className: 'bg-slate-100 text-slate-600 ring-slate-200',
  }
}

function RateControl({
  rate,
  onChange,
  accent = 'blue',
}: {
  rate: FunnelRate
  onChange: (value: number) => void
  accent?: 'blue' | 'orange' | 'green'
}) {
  const status = getStatus(rate.value, rate.min, rate.max)

  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-white p-4',
        rate.id === 'sale' && 'border-emerald-100 bg-emerald-50'
      )}
    >
      <div className="mb-3 space-y-3">
        <div>
          <label
            className="text-brand-dark block text-sm font-semibold"
            htmlFor={`rate-${rate.id}`}
          >
            {rate.label}
          </label>
          <p className="text-xs text-slate-500">{rate.helper}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              'shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold leading-none ring-1',
              status.className
            )}
          >
            {status.label}
          </span>
          <span
            className={cn(
              'w-10 text-right text-sm font-bold',
              accent === 'orange' && 'text-orange-600',
              accent === 'green' && 'text-emerald-600',
              accent === 'blue' && 'text-brand-blue'
            )}
          >
            {rate.value}%
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-slate-200">
          <div
            className="absolute top-0 h-2 rounded-full bg-brand-blue/25"
            style={{
              left: `${rate.min}%`,
              width: `${Math.max(0, rate.max - rate.min)}%`,
            }}
          />
        </div>
        <input
          id={`rate-${rate.id}`}
          type="range"
          min={1}
          max={100}
          value={rate.value}
          onChange={(event) => onChange(Number(event.target.value))}
          className={cn(
            'relative z-10 h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent',
            accent === 'orange' && 'accent-orange-500',
            accent === 'green' && 'accent-emerald-600',
            accent === 'blue' && 'accent-brand-blue'
          )}
        />
      </div>
      <div className="mt-1 flex justify-between text-[10px] font-bold text-slate-400">
        <span>{rate.min}%</span>
        <span>{rate.max}%</span>
      </div>
    </div>
  )
}

function VisualFunnel({
  stages,
  bottleneckRateId,
  healthSummary,
}: {
  stages: FunnelStage[]
  bottleneckRateId?: FunnelRateId
  healthSummary: StageHealthSummary
}) {
  const colors = [
    'bg-slate-500',
    'bg-brand-blue',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-lime-600',
    'bg-emerald-500',
  ]
  const softColors = [
    'bg-slate-100 text-slate-600',
    'bg-brand-blue/10 text-brand-blue',
    'bg-blue-50 text-blue-700',
    'bg-indigo-50 text-indigo-700',
    'bg-violet-50 text-violet-700',
    'bg-purple-50 text-purple-700',
    'bg-orange-50 text-orange-700',
    'bg-amber-50 text-amber-700',
    'bg-lime-50 text-lime-700',
    'bg-emerald-50 text-emerald-700',
  ]

  const items = stages.map((stage, index) => ({
    ...stage,
    width: `${Math.max(36, 96 - index * 6.7)}%`,
    color: colors[index] ?? 'bg-brand-blue',
    softColor: softColors[index] ?? 'bg-brand-blue/10 text-brand-blue',
  }))

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="px-6 pt-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
            Funil visual
          </p>
          <h2 className="text-brand-dark text-2xl font-bold">
            Do primeiro lead à venda
          </h2>
        </div>
        <p className="mr-6 mt-6 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {healthSummary.warningLabel}
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="relative rounded-2xl bg-slate-50 px-4 py-6 sm:px-8">
          <div className="absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-slate-200 sm:block" />
        {items.map((item, index) => {
          const status = item.rateConfig
            ? getStatus(item.rateConfig.value, item.rateConfig.min, item.rateConfig.max)
            : null
          const markerPosition = item.rateConfig
            ? Math.min(100, Math.max(0, item.rateConfig.value))
            : 0


          const isBottleneck =
            item.rateConfig?.id !== undefined &&
            item.rateConfig.id === bottleneckRateId

          return (
          <div className="relative z-10 mb-3 last:mb-0" key={item.label}>
            <div
              className={cn(
                'mx-auto rounded-xl border bg-white shadow-sm ring-1',
                isBottleneck
                  ? 'border-brand-orange/40 ring-brand-orange/30'
                  : 'border-white ring-slate-200/70'
              )}
              style={{ width: item.width }}
            >
              <div className="grid min-h-16 grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3">
                <div
                  className={cn(
                    'flex size-9 items-center justify-center rounded-lg text-sm font-black text-white',
                    item.color
                  )}
                >
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="text-brand-dark text-2xl font-extrabold leading-tight">
                    {formatNumber(item.value)}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  {typeof item.rate === 'number' && item.rateConfig && status ? (
                    <>
                      <div className="contents">
                        <span
                          className={cn(
                            'rounded-full px-2.5 py-1 text-xs font-black leading-none',
                            item.softColor
                          )}
                        >
                          {item.rate}%
                        </span>
                        <span
                          className={cn(
                            'rounded-full px-2.5 py-1 text-[10px] font-black leading-none ring-1',
                            status.className
                          )}
                        >
                          {status.label}
                        </span>
                      </div>
                      <div className="hidden">
                        <div
                          className="absolute top-0 h-2 rounded-full bg-brand-blue/20"
                          style={{
                            left: `${item.rateConfig.min}%`,
                            width: `${Math.max(
                              0,
                              item.rateConfig.max - item.rateConfig.min
                            )}%`,
                          }}
                        />
                        <div
                          className={cn(
                            'absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow',
                            status.label === 'Abaixo' && 'bg-red-500',
                            status.label === 'Na média' && 'bg-brand-blue',
                            status.label === 'Acima' && 'bg-emerald-500'
                          )}
                          style={{ left: `${markerPosition}%` }}
                        />
                      </div>
                      <div className="hidden">
                        <span>{item.rateConfig.min}%</span>
                        <span>{item.rateConfig.max}%</span>
                      </div>
                    </>
                  ) : (
                    <div className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-500">
                      topo
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )})}
        </div>
      </div>
    </div>
  )
}

function NumberField({
  id,
  label,
  value,
  onChange,
  tone,
  placeholder,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  tone: 'blue' | 'green'
  placeholder: string
}) {
  return (
    <div
      className={cn(
        'mb-6 rounded-xl border p-4',
        tone === 'blue'
          ? 'border-blue-100 bg-blue-50'
          : 'border-emerald-100 bg-emerald-50'
      )}
    >
      <label
        className={cn(
          'mb-2 block text-sm font-bold',
          tone === 'blue' ? 'text-blue-950' : 'text-emerald-950'
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          min={0}
          step={1}
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-lg border bg-white px-4 py-2 pr-10 text-lg font-bold outline-none transition [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            tone === 'blue'
              ? 'border-blue-200 text-blue-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/25'
              : 'border-emerald-200 text-emerald-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20'
          )}
        />
        {value ? (
          <button
            aria-label={`Limpar ${label}`}
            className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            onClick={() => onChange('')}
            type="button"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>
      <p
        className={cn(
          'mt-2 text-xs',
          tone === 'blue' ? 'text-blue-700' : 'text-emerald-700'
        )}
      >
        Resultado formatado: {formatNumber(parseNumber(value))}
      </p>
    </div>
  )
}

export function CommercialStrategyPage() {
  const [mode, setMode] = useState<FunnelMode>('leads')
  const [leadsInput, setLeadsInput] = useState('1000')
  const [goalInput, setGoalInput] = useState('50')
  const [rates, setRates] = useState(defaultRates)
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)

  const cumulativeFormula = rates.map((rate) => `${rate.value}%`).join(' x ')

  const rateMap = useMemo(
    () =>
      rates.reduce(
        (accumulator, rate) => ({
          ...accumulator,
          [rate.id]: rate.value / 100,
        }),
        {} as Record<FunnelRateId, number>
      ),
    [rates]
  )

  const funnel = useMemo(() => {
    const multipliers = defaultRates.map((rate) => rateMap[rate.id])
    const totalMultiplier = multipliers.reduce(
      (accumulator, rate) => accumulator * rate,
      1
    )

    let initialLeads = 0
    let saleCount = 0

    if (mode === 'leads') {
      initialLeads = parseNumber(leadsInput)
      saleCount = initialLeads * totalMultiplier
    } else {
      saleCount = parseNumber(goalInput)
      initialLeads = totalMultiplier > 0 ? saleCount / totalMultiplier : 0
    }

    let currentValue = initialLeads
    const stages: FunnelStage[] = [
      {
        label: 'Sem contato',
        value: currentValue,
      },
    ]

    const stageLabels = [
      '1º abordagem',
      '2º a 4º tentativa',
      'Contato estabelecido',
      'Levantamento de necessidade',
      'Reunião agendada',
      'Cliente em teste',
      'Envio de proposta',
      'Negociação',
      'Venda',
    ]

    defaultRates.forEach((rate, index) => {
      currentValue *= rateMap[rate.id]
      stages.push({
        label: stageLabels[index] ?? rate.label,
        value: currentValue,
        rate: rates.find((currentRate) => currentRate.id === rate.id)?.value,
        rateConfig: rates.find((currentRate) => currentRate.id === rate.id),
      })
    })

    const globalConversion =
      initialLeads > 0 ? (saleCount / initialLeads) * 100 : 0

    return {
      leads: initialLeads,
      sales: saleCount,
      stages,
      globalConversion,
    }
  }, [goalInput, leadsInput, mode, rateMap, rates])

  const bottleneckAnalysis = useMemo<BottleneckAnalysis | null>(() => {
    const transitions = funnel.stages
      .slice(1)
      .map((stage, index) => {
        const previousStage = funnel.stages[index]
        const rateConfig = stage.rateConfig
        const lostVolume = Math.max(0, previousStage.value - stage.value)
        const gap = rateConfig ? rateConfig.value - rateConfig.min : 0
        const status = rateConfig
          ? getStatus(rateConfig.value, rateConfig.min, rateConfig.max).label
          : 'Topo'

        return {
          label: rateConfig?.label ?? stage.label,
          rateConfig,
          lostVolume,
          previousValue: previousStage.value,
          currentValue: stage.value,
          gap,
          status,
          isCritical: Boolean(rateConfig && rateConfig.value < rateConfig.min),
        }
      })
      .filter((transition) => transition.rateConfig)

    if (transitions.length === 0) return null

    const criticalTransitions = transitions.filter(
      (transition) => transition.isCritical
    )
    const candidates =
      criticalTransitions.length > 0 ? criticalTransitions : transitions

    return [...candidates].sort((a, b) => b.lostVolume - a.lostVolume)[0]
  }, [funnel.stages])

  const bottleneck = bottleneckAnalysis?.label ?? 'Sem gargalo simulado'
  const bottleneckRate = bottleneckAnalysis?.rateConfig

  const healthSummary = useMemo<StageHealthSummary>(() => {
    const criticalCount = rates.filter((rate) => rate.value < rate.min).length

    if (criticalCount === 0) {
      return {
        criticalCount,
        warningLabel: 'Todas as etapas dentro do esperado',
      }
    }

    return {
      criticalCount,
      warningLabel:
        criticalCount === 1
          ? '1 etapa abaixo do esperado'
          : `${criticalCount} etapas abaixo do esperado`,
    }
  }, [rates])

  function updateRate(id: FunnelRate['id'], value: number) {
    setRates((current) =>
      current.map((rate) => (rate.id === id ? { ...rate, value } : rate))
    )
  }

  function resetBenchmarks() {
    setRates(defaultRates)
  }

  async function downloadPdf() {
    try {
      setIsGeneratingPdf(true)

      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      })
      const generatedAt = new Date().toLocaleDateString('pt-BR')
      const fileDate = new Date().toISOString().slice(0, 10)
      const logo = await loadImageAsDataUrl('/brand/Logo Teloos.png')
      const bottleneckTitle = formatPdfLabel(
        bottleneckRate ? bottleneckRate.label : bottleneck
      )
      const bottleneckMeta = bottleneckRate
        ? `Taxa atual: ${bottleneckRate.value}% | mínimo saudável: ${bottleneckRate.min}%`
        : 'Sem taxa de referência definida.'
      const bottleneckExplanation = bottleneckAnalysis
        ? bottleneckAnalysis.isCritical
          ? `Esta passagem está ${Math.abs(
              bottleneckAnalysis.gap
            )} p.p. abaixo do mínimo saudável e representa perda estimada de ${formatNumber(
              bottleneckAnalysis.lostVolume
            )} leads/contatos no simulador.`
          : `Não há etapa abaixo do mínimo saudável. O sistema destaca a maior perda de volume: ${formatNumber(
              bottleneckAnalysis.previousValue
            )} para ${formatNumber(
              bottleneckAnalysis.currentValue
            )}, perda estimada de ${formatNumber(
              bottleneckAnalysis.lostVolume
            )} leads/contatos.`
        : 'O gargalo é calculado pela maior perda de volume entre etapas, priorizando passagens abaixo do mínimo saudável.'
      const nextActions = [
        'Validar se a taxa preenchida representa a realidade do funil.',
        'Definir uma ação objetiva para a etapa gargalo antes da próxima reunião.',
        'Repetir o preenchimento periodicamente para comparar tendência e calibrar o preset.',
      ]

      doc.setFillColor(255, 255, 255)
      doc.rect(0, 0, 210, 297, 'F')
      doc.addImage(logo, 'PNG', 14, 12, 33, 10)
      doc.setDrawColor(63, 99, 230)
      doc.setLineWidth(1.2)
      doc.line(14, 29, 196, 29)

      doc.setTextColor(17, 36, 95)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(20)
      doc.text('Relatório de estratégia comercial', 14, 45)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10.5)
      doc.setTextColor(71, 85, 105)
      doc.text(
        'Simulador para leitura de volume, conversão e gargalos do funil.',
        14,
        53
      )
      doc.text(`Gerado em ${generatedAt}`, 14, 60)

      doc.setFillColor(248, 250, 252)
      doc.setDrawColor(226, 232, 240)
      doc.roundedRect(14, 72, 182, 34, 4, 4, 'FD')

      doc.setFontSize(10)
      doc.setTextColor(100, 116, 139)
      doc.text('Conversão geral', 22, 84)
      doc.text('Resultado simulado', 78, 84)
      doc.text('Entradas no funil', 140, 84)

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(16)
      doc.setTextColor(63, 99, 230)
      doc.text(`${funnel.globalConversion.toFixed(1)}%`, 22, 96)
      doc.setTextColor(0, 130, 80)
      doc.text(`${formatNumber(funnel.sales)} vendas`, 78, 96)
      doc.setTextColor(17, 36, 95)
      doc.text(`${formatNumber(funnel.leads)} leads`, 140, 96)

      doc.setTextColor(17, 36, 95)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(14)
      doc.text('Diagnóstico do gargalo simulado', 14, 123)

      doc.setFillColor(239, 246, 255)
      doc.setDrawColor(191, 219, 254)
      doc.roundedRect(14, 130, 182, 36, 4, 4, 'FD')

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(17, 36, 95)
      doc.text(doc.splitTextToSize(bottleneckTitle, 158), 22, 141, {
        maxWidth: 158,
      })

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8.5)
      doc.setTextColor(63, 99, 230)
      doc.text(bottleneckMeta, 22, 148, {
        maxWidth: 158,
      })

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9.5)
      doc.setTextColor(71, 85, 105)
      doc.text(doc.splitTextToSize(bottleneckExplanation, 158), 22, 157, {
        maxWidth: 158,
      })

      doc.setTextColor(17, 36, 95)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(14)
      doc.text('Etapas do funil', 14, 184)

      let y = 194
      doc.setFontSize(9)
      doc.setTextColor(100, 116, 139)
      doc.text('Etapa', 14, y)
      doc.text('Quantidade', 125, y)
      doc.text('Taxa', 168, y)
      y += 4
      doc.setDrawColor(226, 232, 240)
      doc.line(14, y, 196, y)
      y += 8

      funnel.stages.forEach((stage, index) => {
        if (y > 280) {
          doc.addPage()
          y = 22
        }

        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        doc.setTextColor(17, 36, 95)
        doc.text(`${index + 1}. ${formatPdfLabel(stage.label)}`, 14, y)

        doc.setFont('helvetica', 'normal')
        doc.setTextColor(15, 23, 42)
        doc.text(formatNumber(stage.value), 125, y)
        doc.text(
          typeof stage.rate === 'number' ? `${stage.rate}%` : 'topo',
          168,
          y
        )

        y += 8
      })

      y += 6
      if (y > 245) {
        doc.addPage()
        y = 22
      }
      doc.setDrawColor(226, 232, 240)
      doc.line(14, y, 196, y)
      y += 10

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(12)
      doc.setTextColor(17, 36, 95)
      doc.text('Como ler este relatório', 14, y)
      y += 7
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(71, 85, 105)
      doc.text(
        doc.splitTextToSize(
          `A conversão geral é o produto das passagens do funil: ${cumulativeFormula}. O gargalo simulado prioriza etapas abaixo do mínimo saudável; se todas estiverem saudáveis, destaca a maior perda de volume entre duas etapas.`,
          182
        ),
        14,
        y
      )
      y += 18

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(12)
      doc.setTextColor(17, 36, 95)
      doc.text('Próximas ações sugeridas', 14, y)
      y += 8
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9.5)
      doc.setTextColor(71, 85, 105)
      nextActions.forEach((action) => {
        doc.text(`- ${action}`, 16, y)
        y += 7
      })

      doc.setFontSize(8)
      doc.setTextColor(148, 163, 184)
      doc.text(
        'Documento gerado automaticamente pelo simulador interno da Teloos.',
        14,
        288
      )

      doc.save(`teloos-estrategia-comercial-${fileDate}.pdf`)
    } catch (error) {
      console.error('Erro ao gerar PDF', error)
      window.alert('Não foi possível gerar o PDF. Tente novamente.')
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-12 text-slate-800 print:bg-white print:pb-0">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur print:static print:shadow-none">
        <div className="container-site flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/Logo Teloos.png"
              alt="Teloos"
              width={220}
              height={64}
              className="h-10 w-auto"
              priority
            />
            <div className="hidden h-8 w-px bg-slate-300 sm:block" />
            <div>
              <p className="text-brand-dark text-lg font-bold">
                Estratégia comercial
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-blue/90 disabled:cursor-wait disabled:opacity-70 print:hidden"
              disabled={isGeneratingPdf}
              onClick={downloadPdf}
              type="button"
            >
              <Download className="size-4" />
              {isGeneratingPdf ? 'Gerando...' : 'Baixar PDF'}
            </button>
          </div>
        </div>
      </header>

      <section className="container-site pt-8">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
              <Target className="size-4" />
              Uso interno do comercial
            </p>
            <h1 className="text-brand-dark max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
              Simulador para acompanhar meta, gargalos e volume
              necessário de funil.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Use esta página para preencher os parâmetros do funil, simular
              cenários e transformar a reunião comercial em uma conversa
              objetiva sobre números.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-brand-dark p-6 text-white shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-brand-orange" />
              <h2 className="text-xl font-bold text-white">
                Ritual recomendado
              </h2>
            </div>
            <div className="space-y-3">
              {commercialRituals.map((ritual) => (
                <div
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80"
                  key={ritual}
                >
                  {ritual}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-brand-blue">
              <BarChart3 className="size-5" />
              <p className="text-sm font-bold uppercase tracking-[0.16em]">
                Gargalo simulado
              </p>
            </div>
            <p className="text-2xl font-bold text-brand-dark">{bottleneck}</p>
            {bottleneckAnalysis ? (
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {bottleneckAnalysis.isCritical
                  ? `Gargalo principal entre ${healthSummary.warningLabel.toLowerCase()}.`
                  : `Maior perda de volume: ${formatNumber(
                      bottleneckAnalysis.lostVolume
                    )} leads/contatos.`}
              </p>
            ) : null}
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-brand-orange">
              <TrendingUp className="size-5" />
              <p className="text-sm font-bold uppercase tracking-[0.16em]">
                Conversão global
              </p>
            </div>
            <p className="text-2xl font-bold text-brand-dark">
              {funnel.globalConversion.toFixed(1)}%
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-emerald-600">
              <DollarSign className="size-5" />
              <p className="text-sm font-bold uppercase tracking-[0.16em]">
                Resultado simulado
              </p>
            </div>
            <p className="text-2xl font-bold text-brand-dark">
              {formatNumber(funnel.sales)} clientes
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-brand-blue/15 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
                Taxa de conversão geral
              </p>
              <h2 className="text-brand-dark text-2xl font-bold">
                Vendas ÷ total de leads que entraram
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                No simulador, a venda final é o produto de todas as passagens do
                funil: {cumulativeFormula}. Por isso uma queda pequena em várias
                etapas derruba bastante o resultado final.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-ice px-5 py-3 text-right">
              <p className="text-4xl font-black text-brand-blue">
                {funnel.globalConversion.toFixed(1)}%
              </p>
              <p className="text-xs font-bold text-brand-dark/60">
                {formatNumber(funnel.sales)} vendas /{' '}
                {formatNumber(funnel.leads)} leads
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(320px,0.42fr)_1fr]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
              <Settings2 className="size-5 text-brand-blue" />
              <h2 className="text-brand-dark text-lg font-bold">
                Parâmetros do funil
              </h2>
            </div>

            <div className="mb-6 flex rounded-xl bg-slate-100 p-1">
              <button
                className={cn(
                  'flex-1 rounded-lg px-3 py-2 text-sm font-bold transition',
                  mode === 'leads'
                    ? 'bg-white text-brand-blue shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                )}
                onClick={() => setMode('leads')}
                type="button"
              >
                A partir de leads
              </button>
              <button
                className={cn(
                  'flex-1 rounded-lg px-3 py-2 text-sm font-bold transition',
                  mode === 'goal'
                    ? 'bg-white text-brand-blue shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                )}
                onClick={() => setMode('goal')}
                type="button"
              >
                A partir da meta
              </button>
            </div>

            {mode === 'leads' ? (
              <NumberField
                id="leads-input"
                label="Leads/contatos que entraram no funil"
                onChange={(value) => setLeadsInput(onlyDigits(value))}
                placeholder="Ex: 1000"
                tone="blue"
                value={leadsInput}
              />
            ) : (
              <NumberField
                id="goal-input"
                label="Meta de vendas em clientes"
                onChange={(value) => setGoalInput(onlyDigits(value))}
                placeholder="Ex: 50"
                tone="green"
                value={goalInput}
              />
            )}

            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                Taxas de conversão
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Preset inicial: cenário de mercado saudável. Ajuste
                periodicamente conforme o preenchimento e a percepção do
                comercial.
              </p>
            </div>

            <div className="space-y-4">
              {rates.map((rate) => (
                <RateControl
                  key={rate.id}
                  rate={rate}
                  accent={
                    ['trial', 'proposal', 'negotiation'].includes(rate.id)
                      ? 'orange'
                      : rate.id === 'sale'
                        ? 'green'
                        : 'blue'
                  }
                  onChange={(value) => updateRate(rate.id, value)}
                />
              ))}
            </div>

            <button
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              onClick={resetBenchmarks}
              type="button"
            >
              <RotateCcw className="size-4" />
              Restaurar benchmarks
            </button>
          </aside>

          <section className="space-y-6">
            <VisualFunnel
              bottleneckRateId={bottleneckRate?.id}
              healthSummary={healthSummary}
              stages={funnel.stages}
            />
          </section>
        </div>
      </section>
    </main>
  )
}
