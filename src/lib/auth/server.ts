import { NextResponse } from 'next/server'

const DEFAULT_AUTH_API_URL = 'https://pdvx.com.br/api'

function getAuthApiUrl() {
  return process.env.AUTH_API_URL ?? DEFAULT_AUTH_API_URL
}

export async function proxyAuthPost(path: string, payload: unknown) {
  try {
    const response = await fetch(`${getAuthApiUrl()}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    const data = await response.json().catch(() => ({
      message: 'Resposta inválida do servidor de autenticação.',
    }))

    return NextResponse.json(data, { status: response.status })
  } catch {
    return NextResponse.json(
      {
        message:
          'Não foi possível se comunicar com o servidor de autenticação.',
      },
      { status: 502 }
    )
  }
}
