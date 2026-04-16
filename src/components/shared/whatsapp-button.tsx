'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const WA_NUMBER = '5541955077590'
const WA_MESSAGE =
  'Olá! Vim pelo site da Teloos e gostaria de conhecer mais sobre as soluções.'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`
    window.open(url, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Card expandido */}
      {isExpanded && (
        <div className="animate-in slide-in-from-right-5 fade-in relative max-w-[280px] rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl duration-300">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
          >
            <X className="h-3 w-3 text-gray-600" />
          </button>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
              <WhatsAppIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Fale com a gente!
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Tire suas dúvidas ou solicite uma demonstração personalizada.
              </p>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:shadow-green-500/30"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Iniciar conversa
          </button>
        </div>
      )}

      {/* Botão principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-all duration-300 hover:scale-110 hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:shadow-green-500/30"
        aria-label="Abrir WhatsApp"
      >
        {/* Pulse */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20" />

        {/* Ícone */}
        <WhatsAppIcon className="relative h-7 w-7 text-white" />

        {/* Badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
          1
        </span>
      </button>
    </div>
  )
}
