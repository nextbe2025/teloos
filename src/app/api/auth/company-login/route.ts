import { proxyAuthPost } from '@/lib/auth/server'

export async function POST(request: Request) {
  const payload = await request.json()
  return proxyAuthPost('/logar', payload)
}
