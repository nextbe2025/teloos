export const ATTRIBUTION_STORAGE_KEY = 'teloos_attribution'

export const ATTRIBUTION_PARAM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_id',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
] as const

export type AttributionParamKey = (typeof ATTRIBUTION_PARAM_KEYS)[number]

export type AttributionData = Partial<Record<AttributionParamKey, string>> & {
  landing_page?: string
  referrer?: string
  captured_at?: string
}

function sanitizeValue(value: string) {
  return value.trim().slice(0, 500)
}

export function buildTrafficSource(attribution: AttributionData) {
  const source = attribution.utm_source?.trim()
  const medium = attribution.utm_medium?.trim()

  if (source && medium) return `${source} / ${medium}`
  if (source) return source
  if (medium) return medium

  return undefined
}

export function readAttributionFromUrl(
  searchParams: URLSearchParams,
  metadata?: Pick<AttributionData, 'landing_page' | 'referrer'>
) {
  const attribution: AttributionData = {}

  ATTRIBUTION_PARAM_KEYS.forEach((key) => {
    const value = searchParams.get(key)
    if (value) attribution[key] = sanitizeValue(value)
  })

  if (!Object.keys(attribution).length) return null

  return {
    ...attribution,
    ...metadata,
    captured_at: new Date().toISOString(),
  }
}

export function saveAttribution(attribution: AttributionData) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution))
}

export function getSavedAttribution() {
  if (typeof window === 'undefined') return null

  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY)
    if (!raw) return null

    return JSON.parse(raw) as AttributionData
  } catch {
    return null
  }
}
