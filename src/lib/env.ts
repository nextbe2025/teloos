export const publicEnv = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  clientUrl: process.env.NEXT_PUBLIC_CLIENT_URL ?? 'https://nextbe.acess.app',
  recaptchaSiteKey:
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
    '6LdPE5ssAAAAACaRxse3ua7RD9jYIQai1FUgKJ3i',
} as const
