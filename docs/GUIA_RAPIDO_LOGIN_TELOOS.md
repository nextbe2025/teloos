# Guia rapido do login Teloos

## O que foi implementado

Foi adicionada uma area de autenticacao em Next.js com:

- login em `/entrar`
- fluxo de multiempresa
- confirmacao de troca de sessao para resposta `412`
- esqueci minha senha em `/esqueci-senha`
- redefinicao de senha em `/redefinir-senha`
- rotas internas em `src/app/api/auth/*` para proxy da API externa
- camada de dominio em `src/lib/auth/*`
- feedback visual com `sonner`

Tambem foi ajustado o visual do login para uma versao mais clean, mantendo o padrao do projeto.

## Como a arquitetura ficou

### Telas

- `src/app/(auth)/entrar/page.tsx`
- `src/app/(auth)/esqueci-senha/page.tsx`
- `src/app/(auth)/redefinir-senha/page.tsx`
- `src/app/(auth)/layout.tsx`

### Componentes principais

- `src/components/auth/auth-shell.tsx`
- `src/components/auth/login-form.tsx`
- `src/components/auth/forgot-password-form.tsx`
- `src/components/auth/reset-password-form.tsx`
- `src/components/auth/company-selector-dialog.tsx`
- `src/components/auth/force-session-dialog.tsx`
- `src/components/auth/use-auth-login-flow.ts`

### Integracao e regras

- `src/lib/auth/types.ts`: contratos da API
- `src/lib/auth/schemas.ts`: validacao com zod
- `src/lib/auth/api.ts`: chamadas do front para `/api/auth/*`
- `src/lib/auth/errors.ts`: normalizacao de `412`, `422` e erros genericos
- `src/lib/auth/redirect.ts`: montagem do redirect final para OAuth e callback de reset
- `src/lib/auth/server.ts`: proxy server-side para a API externa
- `src/lib/env.ts`: leitura das variaveis publicas

### Endpoints internos

- `src/app/api/auth/login/route.ts`
- `src/app/api/auth/company-login/route.ts`
- `src/app/api/auth/forgot-password/route.ts`
- `src/app/api/auth/reset-password/route.ts`

## Fluxo funcional resumido

### Login

1. A tela envia `email`, `password`, `remember` e `forceLogin` para `/api/auth/login`.
2. Se a API retornar `access_token`, o front redireciona para `CLIENT_URL/oauth/...`.
3. Se a API retornar `message + empresas[]`, abre o dialog de multiempresa.
4. Se a API retornar `412`, abre o dialog para forcar troca de sessao.

### Esqueci minha senha

1. A tela gera o token do reCAPTCHA v3.
2. Envia `email`, `callback` e `grecaptcha` para `/api/auth/forgot-password`.

### Redefinir senha

1. A tela le o `token` da URL.
2. Envia `email`, `password`, `password_confirmation` e `token` para `/api/auth/reset-password`.
3. Depois tenta fazer login automatico com a nova senha.

## Variaveis de ambiente

Criar ou manter `.env.local` com:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
AUTH_API_URL=https://pdvx.com.br/api
NEXT_PUBLIC_CLIENT_URL=https://nextbe.acess.app
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=sua-chave-publica
```

Observacoes:

- `AUTH_API_URL` e usada no proxy server-side.
- `NEXT_PUBLIC_CLIENT_URL` ainda pode apontar para o ambiente temporario.
- sem `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, a tela de recuperacao abre, mas o envio nao conclui.

## Como dar manutencao

### Alterar layout ou textos das telas

- shell visual: `src/components/auth/auth-shell.tsx`
- login: `src/components/auth/login-form.tsx`
- recuperacao: `src/components/auth/forgot-password-form.tsx`
- reset: `src/components/auth/reset-password-form.tsx`

### Alterar contrato da API

Se a API externa mudar payload ou resposta, revisar nesta ordem:

1. `src/lib/auth/types.ts`
2. `src/lib/auth/schemas.ts`
3. `src/lib/auth/api.ts`
4. `src/lib/auth/errors.ts`
5. `src/components/auth/use-auth-login-flow.ts`

### Alterar destino do redirect apos login

- `src/lib/auth/redirect.ts`
- `src/lib/env.ts`

### Alterar endpoint externo

- `src/lib/auth/server.ts`
- `AUTH_API_URL` no ambiente

### Alterar regras do fluxo de login

Arquivo central:

- `src/components/auth/use-auth-login-flow.ts`

Esse hook concentra:

- login inicial
- multiempresa
- retry com `forceLogin`
- redirect de sucesso

## Como validar depois de mexer

Rodar sempre:

```bash
npm run type-check
npm run lint
npm run build
```

Se alterar reCAPTCHA ou integracao real, testar tambem manualmente:

1. login simples
2. login com multiempresa
3. resposta `412`
4. esqueci senha
5. redefinicao de senha

## Estado validado

Na ultima validacao local:

- `npm run type-check`: ok
- `npm run lint`: ok
- `npm run build`: ok

Esse arquivo pode substituir os documentos longos de levantamento e implementacao, mantendo so o essencial para evolucao do recurso.
