export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="font-serif text-lg font-medium tracking-wide-sm">
          EPF <span className="ml-1 text-[10px] uppercase tracking-luxe text-muted-foreground">Arquitetura</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eduardo Pires Ferreira. Todos os direitos reservados.
        </p>
        <a
          href="#inicio"
          className="text-[11px] uppercase tracking-wide-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}
