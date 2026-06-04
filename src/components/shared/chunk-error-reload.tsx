'use client'

import { useEffect } from 'react'

/**
 * Detecta falhas de carregamento de chunks JS/CSS — clássicas após um deploy
 * novo, quando o HTML cacheado no browser aponta para hashes antigos que já
 * não existem no servidor. Recarrega a página uma única vez para o browser
 * pegar o HTML novo (com os hashes corretos) e se auto-resolver.
 *
 * Usa sessionStorage para garantir que só dispara um reload por sessão
 * (evita loop infinito caso a falha persista por outro motivo).
 */
const RELOAD_FLAG = 'teloos_chunk_reload_at'
const RELOAD_COOLDOWN_MS = 30_000

const CHUNK_ERROR_REGEX =
  /Loading chunk [\d]+ failed|ChunkLoadError|Loading CSS chunk|Failed to fetch dynamically imported module|error loading dynamically imported module/i

export function ChunkErrorReload() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reloadOnce = () => {
      try {
        const last = window.sessionStorage.getItem(RELOAD_FLAG)
        const now = Date.now()
        if (last && now - parseInt(last, 10) < RELOAD_COOLDOWN_MS) return
        window.sessionStorage.setItem(RELOAD_FLAG, String(now))
      } catch {
        // sessionStorage pode falhar em modo privado — segue assim mesmo
      }
      window.location.reload()
    }

    const isChunkError = (msg: unknown): boolean => {
      const text = typeof msg === 'string' ? msg : ''
      return CHUNK_ERROR_REGEX.test(text)
    }

    const onError = (event: ErrorEvent) => {
      if (isChunkError(event.message) || isChunkError(event.error?.message)) {
        reloadOnce()
      }
    }

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason as unknown
      const msg =
        typeof reason === 'string'
          ? reason
          : reason && typeof reason === 'object' && 'message' in reason
            ? String((reason as { message?: unknown }).message ?? '')
            : ''
      if (isChunkError(msg)) reloadOnce()
    }

    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onRejection)

    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onRejection)
    }
  }, [])

  return null
}
