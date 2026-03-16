import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center space-y-4">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-muted-foreground">Página não encontrada</p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2"
      >
        Voltar para a página inicial
      </Link>
    </div>
  )
}
