import { Reveal } from './reveal'

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
      <div className="max-w-3xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground">
            04 — Contato
          </p>
        </Reveal>

        <Reveal
          delay={80}
          as="h2"
          className="mt-6 font-serif text-3xl font-light leading-[1.1] md:text-5xl"
        >
          Contato
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-16 border-t border-border pt-12 space-y-10">

            <div>
              <p className="text-[10px] uppercase tracking-wide-sm text-muted-foreground">
                E-mail
              </p>
              <a
                href="mailto:dudesferreira.arquitetura@gmail.com"
                className="mt-2 inline-block text-lg text-foreground transition-opacity hover:opacity-60"
              >
                dudesferreira.arquitetura@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide-sm text-muted-foreground">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/edupferreira"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg text-foreground transition-opacity hover:opacity-60"
              >
                linkedin.com/in/edupferreira
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide-sm text-muted-foreground">
                WhatsApp
              </p>
              <a
                href="https://wa.me/5511945001334"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg text-foreground transition-opacity hover:opacity-60"
              >
                (11) 94500-1334
              </a>
            </div>

            <div className="pt-6">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-foreground px-8 py-3 text-[11px] uppercase tracking-wide-sm text-background transition-opacity duration-300 hover:opacity-85"
              >
                Baixar Currículo
                <span>↓</span>
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}