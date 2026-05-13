export const GTM_ID = 'GTM-TRDFP6MD'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

/**
 * Empurra qualquer objeto para o dataLayer do GTM.
 */
export function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(data)
}

/**
 * Dispara evento page_view a cada troca de rota (SPA navigation).
 * Lido pela tag [GA4] 1 | PageView (tag 62) e [API] 1 | PageView (tag 42)
 * que disparam no trigger All Pages (2147479553).
 * Como o GTM re-executa o All Pages apenas no hard-load, precisamos
 * empurrar manualmente a cada mudança de rota no Next.js.
 */
export function trackPageView(pathname: string) {
  pushToDataLayer({
    event: 'page_view',
    page_path: pathname,
    page_title: typeof document !== 'undefined' ? document.title : '',
    page_location: typeof window !== 'undefined' ? window.location.href : '',
  })
}

/**
 * Dispara evento "Lead" após envio bem-sucedido do formulário de contato.
 *
 * Container GTM-TRDFP6MD:
 *   Trigger 19 ("Evento Leadster") → CUSTOM_EVENT onde {{_event}} = "Lead"
 *   → Dispara: [API] 2 | Lead (tag 28), [GA4] 2 | Lead (tag 39),
 *               [Meta Ads] 2 | Lead (tag 56), [Google Ads] 2 | Lead (tag 57)
 *
 * IMPORTANTE: deve ser chamado ANTES de limpar/ocultar o formulário,
 * pois as variáveis GTM user-input-* leem diretamente o DOM:
 *   user-input-firstname → document.querySelector('[id="fullname"]').value
 *   user-input-email     → document.querySelector('[id="email"]').value
 *   user-input-phone     → document.querySelector('[id="phone"]').value
 */
export function trackLead() {
  pushToDataLayer({ event: 'Lead' })
}

/**
 * Dispara evento "whatsapp" para o clique no link de WhatsApp.
 *
 * OBS: O trigger 32 ("Evento Whatsapp") do GTM dispara nativamente em
 * LINK_CLICK onde {{Click URL}} contém "whatsapp". Certifique-se de que
 * o href do link use o formato https://api.whatsapp.com/send/?phone=...
 * para que o GTM detecte automaticamente.
 *
 * Esta função é opcional e complementar — pode ser usada para registrar
 * o clique em ferramentas externas fora do GTM.
 */
export function trackWhatsappClick() {
  pushToDataLayer({ event: 'whatsapp_click' })
}

/**
 * Dispara evento de clique em link de ligação (tel:).
 *
 * OBS: O trigger 43 ("Ligação") do GTM dispara nativamente em
 * LINK_CLICK onde {{Click URL}} começa com "tel:".
 * Esta função é complementar.
 */
export function trackCallClick(phoneNumber: string) {
  pushToDataLayer({ event: 'click_call', phone: phoneNumber })
}

/**
 * Dispara evento social_click quando o usuário clica em uma rede social.
 * Não há trigger nativo para isso no container — use se quiser rastrear.
 */
export function trackSocialClick(platform: string) {
  pushToDataLayer({
    event: 'social_click',
    social_platform: platform.toLowerCase(),
  })
}
