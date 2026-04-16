import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // porta 465 usa SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, restaurant, message } = body

    if (!name || !email || !phone || !restaurant) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando.' },
        { status: 400 }
      )
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
