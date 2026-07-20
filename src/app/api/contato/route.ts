import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { AttributionData, buildTrafficSource } from '@/lib/attribution'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // porta 465 usa SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

function removeEmptyValues(data: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined && value !== '')
  )
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, restaurant, message } = body
    const attribution = (body.attribution ?? {}) as AttributionData
    const trafficSource = buildTrafficSource(attribution)

    if (!name || !email || !phone || !restaurant) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando.' },
        { status: 400 }
      )
    }

    // RD Station: registra o lead via API server-side
    try {
      const rdRes = await fetch(
        `https://api.rd.services/platform/conversions?api_key=${process.env.RD_STATION_TOKEN}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload: removeEmptyValues({
              conversion_identifier: 'Formulário de Contato - Site Teloos',
              name,
              email,
              mobile_phone: phone,
              cf_area_de_atuacao: restaurant,
              cf_mensagem: message || '',
              traffic_source: trafficSource,
              cf_utm_source: attribution.utm_source,
              cf_utm_medium: attribution.utm_medium,
              cf_utm_campaign: attribution.utm_campaign,
              cf_utm_id: attribution.utm_id,
              cf_utm_content: attribution.utm_content,
              cf_utm_term: attribution.utm_term,
              cf_gclid: attribution.gclid,
              cf_gbraid: attribution.gbraid,
              cf_wbraid: attribution.wbraid,
              cf_fbclid: attribution.fbclid,
              cf_landing_page: attribution.landing_page,
              cf_referrer: attribution.referrer,
              cf_attribution_captured_at: attribution.captured_at,
            }),
          }),
        }
      )
      console.log(`[RD STATION] Status: ${rdRes.status}`)
    } catch (rdErr) {
      console.error('[RD STATION] Erro ao registrar lead:', rdErr)
    }

    await transporter.sendMail({
      from: `"Site Teloos" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Novo contato pelo site - ${name}`,
      html: `
        <h2 style="color:#1a1a2e;">Novo contato pelo site da Teloos</h2>
        <table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:15px;">
          <tr><td style="padding:8px 0;color:#666;width:180px;"><strong>Nome:</strong></td><td>${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>E-mail:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>Telefone:</strong></td><td>${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>Área de atuação:</strong></td><td>${restaurant}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>Mensagem:</strong></td><td>${message || '(não informada)'}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>Origem:</strong></td><td>${escapeHtml(trafficSource || '(não informada)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>UTM Source:</strong></td><td>${escapeHtml(attribution.utm_source || '(não informada)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>UTM Medium:</strong></td><td>${escapeHtml(attribution.utm_medium || '(não informada)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>UTM Campaign:</strong></td><td>${escapeHtml(attribution.utm_campaign || '(não informada)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>UTM ID:</strong></td><td>${escapeHtml(attribution.utm_id || '(não informada)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>UTM Content:</strong></td><td>${escapeHtml(attribution.utm_content || '(não informada)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>UTM Term:</strong></td><td>${escapeHtml(attribution.utm_term || '(não informada)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>GCLID:</strong></td><td>${escapeHtml(attribution.gclid || '(não informado)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>FBCLID:</strong></td><td>${escapeHtml(attribution.fbclid || '(não informado)')}</td></tr>
          <tr><td style="padding:8px 0;color:#666;"><strong>Landing page:</strong></td><td>${escapeHtml(attribution.landing_page || '(não informada)')}</td></tr>
        </table>
        <hr style="margin:24px 0;border:none;border-top:1px solid #eee;">
        <p style="color:#999;font-size:13px;">Enviado via formulário de contato em teloos.com.br</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[CONTATO] Erro ao enviar e-mail:', err)
    return NextResponse.json(
      { error: 'Falha ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}
