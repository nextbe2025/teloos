const DEFAULT_AUTH_API_URL = 'https://pdvx.com.br/api'
const DEFAULT_CLIENT_URL = 'https://nextbe.acess.app'

export const whiteLabelConfig = {
  resellerName: process.env.NOME_REVENDA ?? 'Teloos',
  resellerSubName: process.env.NOME_REVENDA_SUB ?? 'SISTEMAS FOOD',
  apiUrl: process.env.AUTH_API_URL ?? DEFAULT_AUTH_API_URL,
  clientUrl: process.env.NEXT_PUBLIC_CLIENT_URL ?? DEFAULT_CLIENT_URL,
} as const

export function buildWhiteLabelSettings() {
  return {
    NOME_REVENDA: whiteLabelConfig.resellerName,
    NOME_REVENDA_SUB: whiteLabelConfig.resellerSubName,
    API_URL: whiteLabelConfig.apiUrl,
    CLIENT_URL: whiteLabelConfig.clientUrl,
  }
}
