import Image from 'next/image'

export function Hero() {
  return (
    <section id="inicio" className="relative h-svh min-h-[640px] w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Residência minimalista de concreto com grandes janelas de vidro ao entardecer"
        fill
        priority
        sizes="100vw"
        className="animate-in fade-in object-cover duration-[2000ms]"
      />
      <div className="absolute inset-0 bg-foreground/25" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-8 text-[11px] uppercase tracking-luxe text-background/80 animate-in fade-in duration-[1600ms]">
          Arquitetura • Interiores • Visualização
        </p>
        <h1 className="max-w-5xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-background sm:text-6xl md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-[1600ms]">
          Eduardo Pires Ferreira
        </h1>
        <p className="mt-6 font-serif text-lg italic text-background/85 sm:text-xl animate-in fade-in duration-[2000ms]">
          Portfólio de Arquitetura
        </p>

        <a
          href="#projetos"
          className="group mt-14 inline-flex items-center gap-3 border border-background/50 px-8 py-3 text-[11px] uppercase tracking-wide-sm text-background transition-colors duration-500 hover:bg-background hover:text-foreground"
        >
          Explorar Projetos
          <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <span className="text-[10px] uppercase tracking-luxe text-background/70">Role para descobrir</span>
      </div>
    </section>
  )
}
