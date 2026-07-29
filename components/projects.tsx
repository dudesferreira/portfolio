'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { Reveal } from './reveal'

interface GalleryItem {
  src: string
  title: string
  caption: string
}

interface Project {
  index: string
  name: string
  category: string
  year: string
  software: string
  cover: string
  description: string
  gallery: GalleryItem[]
}

const projects: Project[] = [
  {
    index: '01',
    name: 'Travessia Mooca',
    category: 'Projeto Acadêmico',
    year: '2026',
    software: 'AutoCAD, SketchUp, Enscape',
    cover: '/images/project-04.png',
    description:
      'Requalificação urbana de um trecho do bairro da Mooca, propondo novas conexões entre o tecido histórico e a cidade contemporânea. O projeto trabalha permeabilidade, praças de convívio e uma leitura sensível da memória industrial local.',
    gallery: [
      { src: '/images/project-04.png', title: 'Implantação Geral', caption: 'Relação da proposta com o entorno urbano existente.' },
      { src: '/images/gallery-01.png', title: 'Percurso Público', caption: 'Estudo de circulação e permanências ao longo da travessia.' },
      { src: '/images/detail.png', title: 'Detalhe de Pavimentação', caption: 'Materialidade e transição entre os espaços públicos.' },
      { src: '/images/project-05.png', title: 'Vista da Praça', caption: 'Perspectiva do principal ponto de encontro do projeto.' },
    ],
  },
  {
    index: '02',
    name: 'Studio 20m²',
    category: 'Interiores',
    year: '2024',
    software: 'SketchUp, Enscape',
    cover: '/images/project-02.png',
    description:
      'Projeto de um studio compacto de 20m² onde cada elemento cumpre múltiplas funções. A marcenaria sob medida e uma paleta neutra ampliam a percepção do espaço, priorizando conforto e funcionalidade no essencial.',
    gallery: [
      { src: '/images/project-02.png', title: 'Ambiente Integrado', caption: 'Organização de dormir, estar e cozinhar em um único volume.' },
      { src: '/images/gallery-02.png', title: 'Iluminação Natural', caption: 'Aproveitamento da luz para ampliar a sensação de amplitude.' },
      { src: '/images/detail.png', title: 'Marcenaria Sob Medida', caption: 'Soluções de armazenamento integradas ao mobiliário.' },
    ],
  },
  {
    index: '03',
    name: 'Apartamento EBAC (SketchUp)',
    category: 'Modelagem 3D',
    year: '2023',
    software: 'SketchUp, Enscape',
    cover: '/images/project-01-interior.png',
    description:
      'Modelagem tridimensional de um apartamento desenvolvido durante o curso da EBAC. O trabalho explora a construção volumétrica dos ambientes, o estudo de materiais e a produção de imagens realistas para apresentação.',
    gallery: [
      { src: '/images/project-01-interior.png', title: 'Sala de Estar', caption: 'Composição de mobiliário e revestimentos em 3D.' },
      { src: '/images/gallery-01.png', title: 'Circulação', caption: 'Estudo de fluxo e integração entre ambientes.' },
      { src: '/images/project-03.png', title: 'Home Office', caption: 'Ambiente de trabalho modelado com iluminação natural.' },
    ],
  },
  {
    index: '04',
    name: 'Apartamento EBAC (AutoCAD)',
    category: 'Projeto Técnico',
    year: '2023',
    software: 'AutoCAD',
    cover: '/images/project-03.png',
    description:
      'Documentação técnica do mesmo apartamento, com plantas, cortes e detalhamentos executados em AutoCAD. O foco está no rigor da representação, cotas e legibilidade das pranchas para execução em obra.',
    gallery: [
      { src: '/images/project-03.png', title: 'Planta Baixa', caption: 'Organização dos ambientes e dimensionamento.' },
      { src: '/images/detail.png', title: 'Detalhamento', caption: 'Ampliações e especificações construtivas.' },
      { src: '/images/gallery-02.png', title: 'Cortes', caption: 'Estudo de alturas e relações verticais do projeto.' },
    ],
  },
  {
    index: '05',
    name: 'Vinícola',
    category: 'Projeto Comercial',
    year: '2024',
    software: 'SketchUp, Enscape, AutoCAD',
    cover: '/images/project-01.png',
    description:
      'Concepção de uma vinícola que dialoga com a paisagem rural. Volumes horizontais em concreto e madeira abrigam produção, degustação e contemplação, guiados pela entrada de luz natural e pelas vistas para o vinhedo.',
    gallery: [
      { src: '/images/project-01.png', title: 'Volume Principal', caption: 'Implantação horizontal integrada ao terreno.' },
      { src: '/images/project-01-interior.png', title: 'Sala de Degustação', caption: 'Ambiente interno com materiais naturais.' },
      { src: '/images/gallery-01.png', title: 'Luz e Sombra', caption: 'Estudo da luz natural nos espaços de produção.' },
      { src: '/images/project-05.png', title: 'Vista Externa', caption: 'Perspectiva ao entardecer sobre o vinhedo.' },
    ],
  },
  {
    index: '06',
    name: 'Visualizações Arquitetônicas',
    category: 'Visualização',
    year: '2024',
    software: 'SketchUp, Enscape, Photoshop',
    cover: '/images/project-05.png',
    description:
      'Seleção de estudos de imagem que investigam luz, sombra e materialidade em pavilhões conceituais. A renderização fotorrealista é usada como ferramenta de projeto, testando atmosferas antes da construção.',
    gallery: [
      { src: '/images/project-05.png', title: 'Hora Dourada', caption: 'Estudo de iluminação natural ao entardecer.' },
      { src: '/images/gallery-01.png', title: 'Contraste', caption: 'Composição de luz e sombra sobre o concreto.' },
      { src: '/images/hero.png', title: 'Volumetria', caption: 'Estudo de massas e implantação na paisagem.' },
    ],
  },
]

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <Reveal className="group flex flex-col">
      <button
        type="button"
        onClick={onOpen}
        className="img-zoom relative aspect-[4/3] w-full overflow-hidden text-left"
        aria-label={`Explorar projeto ${project.name}`}
      >
        <Image
          src={project.cover || '/placeholder.svg'}
          alt={`${project.name} — imagem de capa`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </button>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-light leading-tight md:text-3xl">{project.name}</h3>
          <p className="mt-2 text-[11px] uppercase tracking-wide-sm text-muted-foreground">
            {project.category} — {project.year}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onOpen}
        className="mt-5 inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 text-[11px] uppercase tracking-wide-sm text-foreground transition-opacity duration-500 hover:opacity-60"
      >
        Explorar projeto
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
      </button>
    </Reveal>
  )
}

function ProjectModal({
  project,
  next,
  onClose,
  onNext,
}: {
  project: Project
  next: Project
  onClose: () => void
  onNext: () => void
}) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)
  const total = project.gallery.length

  const go = useCallback(
    (dir: number) => setSlide((s) => (s + dir + total) % total),
    [total],
  )

  useEffect(() => {
    setSlide(0)
  
    modalRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [project.index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, go])

  const current = project.gallery[slide]

  return (
    <div
    onClick={onClose}
  ref={modalRef}
  className="modal-fade fixed inset-0 z-[100] overflow-y-auto bg-black/25 backdrop-blur-md p-4 md:p-8"
>

      <div
  onClick={(e) => e.stopPropagation()}
  className="mx-auto my-8 flex min-h-[calc(100vh-64px)] max-w-[1500px] flex-col overflow-hidden rounded-[36px] bg-background shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
>
<div className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background px-10 py-6">
  <span className="text-[11px] uppercase tracking-luxe text-muted-foreground">
    {project.index} — {project.name}
  </span>

  <button
    type="button"
    onClick={onClose}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 hover:bg-secondary hover:rotate-90"
  >
    <X className="h-4 w-4" strokeWidth={1.5} />
  </button>
</div>
<div className="px-10 pb-20 pt-2 md:px-14">

{/* Hero image */}

<div className="relative mt-8 aspect-[16/10] w-full md:mt-12">
          <Image
            src={project.cover || '/placeholder.svg'}
            alt={`${project.name} — imagem principal`}
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover"
            priority
          />
        </div>

        {/* Title + technical info */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 md:mt-16">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">{project.name}</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-border pt-6 lg:col-span-5 lg:border-t-0 lg:pt-2">
            <div>
              <p className="text-[10px] uppercase tracking-wide-sm text-muted-foreground">Categoria</p>
              <p className="mt-2 text-sm text-foreground">{project.category}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide-sm text-muted-foreground">Ano</p>
              <p className="mt-2 text-sm text-foreground">{project.year}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide-sm text-muted-foreground">Softwares</p>
              <p className="mt-2 text-sm text-foreground">{project.software}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">{project.description}</p>

        {/* Carousel */}
        <div className="mt-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary">
            <Image
              key={current.src + slide}
              src={current.src || '/placeholder.svg'}
              alt={current.title}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="modal-fade object-cover"
            />
          </div>

          <div className="mt-6 flex items-start justify-between gap-8">
            <div className="max-w-md">
              <h4 className="font-serif text-xl font-light">{current.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.caption}</p>
            </div>
            <div className="flex items-center gap-8">
              <span className="font-serif text-sm text-muted-foreground tabular-nums">
                {String(slide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 hover:bg-secondary"
                  aria-label="Imagem anterior"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 hover:bg-secondary"
                  aria-label="Próxima imagem"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PDF button */}
        <div className="mt-16 border-t border-border pt-10">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-[11px] uppercase tracking-wide-sm text-foreground transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            Abrir prancha em PDF
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Next project */}
        <button
          type="button"
          onClick={onNext}
          className="group mt-24 flex w-full flex-col gap-6 border-t border-border pt-12 text-left"
        >
          <span className="text-[11px] uppercase tracking-luxe text-muted-foreground">Próximo Projeto</span>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="img-zoom relative aspect-[16/9] w-full overflow-hidden md:col-span-5">
              <Image
                src={next.cover || '/placeholder.svg'}
                alt={`${next.name} — próximo projeto`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="md:col-span-7">
              <h3 className="font-serif text-3xl font-light leading-tight transition-opacity duration-500 group-hover:opacity-60 md:text-5xl">
                {next.name}
              </h3>
              <span className="mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-wide-sm text-muted-foreground">
                Ver projeto
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
    </div>
  )
}

export function Projects() {
  const [active, setActive] = useState<number | null>(null)
  const [savedScroll, setSavedScroll] = useState(0)

  useEffect(() => {
    if (active === null) return
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [active])

  return (
    <section id="projetos" className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
      <Reveal className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground">02 — Projetos</p>
          <h2 className="mt-6 max-w-xl text-balance font-serif text-3xl font-light leading-[1.1] md:text-5xl">
            Projetos
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Uma seleção de projetos acadêmicos e profissionais desenvolvidos ao longo da minha formação e experiência
          prática.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 md:gap-y-28">
        {projects.map((project, i) => (
          <ProjectCard
          key={project.index}
          project={project}
          onOpen={() => {
            setSavedScroll(window.scrollY)
            setActive(i)
          }}
        />
        ))}
      </div>

      {active !== null && (
        <ProjectModal
          project={projects[active]}
          next={projects[(active + 1) % projects.length]}
          onClose={() => {
            setActive(null)
          
            setTimeout(() => {
              window.scrollTo({
                top: savedScroll,
                behavior: 'smooth',
              })
            }, 50)
          }}
          onNext={() => setActive((a) => (a === null ? null : (a + 1) % projects.length))}
        />
      )}
    </section>
  )
}
