import { Reveal } from './reveal'

const softwareColumns = [
  ['SketchUp', 'AutoCAD', 'Revit'],
  ['Enscape', 'Twinmotion', 'V-Ray'],
  ['Photoshop', 'Canva', 'PowerPoint', 'Lapentor'],
]

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
      <Reveal>
        <p className="text-[11px] uppercase tracking-luxe text-muted-foreground">01 — Sobre</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">

        <div className="lg:col-span-12 lg:pt-10">
          <Reveal as="h2" className="max-w-2xl text-balance font-serif text-3xl font-light leading-[1.15] md:text-5xl">
            Sobre mim
          </Reveal>

          <Reveal delay={100} className="mt-10 max-w-xl space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Sou estudante de Arquitetura e Urbanismo e gosto de explorar as diferentes áreas
              da profissão, do projeto de interiores à representação visual. Trabalho com atenção
              à qualidade técnica e à forma como cada ideia é comunicada, cuidando tanto do
              desenho quanto da imagem final.
            </p>
            <p>
              Estou sempre em busca de aprender algo novo, seja uma ferramenta, um método ou uma
              referência. Ao longo do curso reuni experiência acadêmica e prática, e é nesse
              equilíbrio entre estudo e vivência real que encontro o meu ritmo de trabalho.
            </p>
          </Reveal>

          <div className="mt-16">

            {/* Softwares */}
            <Reveal delay={220}>
              <p className="mb-8 text-[11px] uppercase tracking-wide-sm text-foreground">Softwares</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 border-t border-border pt-8">
  {softwareColumns.map((column, index) => (
    <ul key={index} className="space-y-6 text-sm text-muted-foreground">
      {column.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ))}
</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
