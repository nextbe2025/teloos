import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig: NextConfig = {
  // Strict mode para detectar problemas em desenvolvimento
  reactStrictMode: true,

  // Imagens externas permitidas (adicione domínios conforme necessário)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Headers de segurança aplicados em todas as rotas
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  // Compressão habilitada (padrão, mas explícito)
  compress: true,

  // Remover X-Powered-By header
  poweredByHeader: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
