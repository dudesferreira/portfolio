'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { Reveal } from './reveal'

interface GalleryItem {
  src: string
  title: string
  caption: string
  type?: 'image' | 'video'
  video?: string
}

interface Project {
  index: string
  name: string
  category: string
  year: string
  software: string
  cover: string
  pdf: string
  description: string
  gallery: GalleryItem[]
}

const projects: Project[] = [
{
  index: '01',
  name: 'Travessia da Mooca',
  category: 'Projeto Acadêmico',
  year: '2026',
  software: 'AutoCAD, SketchUp, Enscape',
  cover: '/projects/mooca/mooca-01-fachada.jpg',
  pdf: '/projects/mooca/mooca-prancha.pdf',

  description:
    'Projeto de requalificação urbana desenvolvido para a disciplina Projeto Integrado: Patrimônio e Institucional, propondo a reconexão entre a Mooca histórica e a cidade contemporânea por meio da recuperação de um antigo galpão industrial e da criação de novos espaços públicos de convivência. A proposta transforma o patrimônio existente em um equipamento cultural aberto à cidade, valorizando a memória industrial do bairro e incentivando permanência, cultura e integração social.',

  gallery: [
    {
      src: '/projects/mooca/mooca-02-implantacao.png',
      title: 'Implantação Geral',
      caption:
        'Implantação do conjunto evidenciando a relação entre o edifício existente, os novos espaços públicos e o entorno urbano.'
    },

    {
      src: '/projects/mooca/mooca-03-mapa.png',
      title: 'Leitura Urbana',
      caption:
        'Análise do contexto urbano da Mooca, identificando fluxos, conexões e potencialidades que orientaram o desenvolvimento do projeto.'
    },

    {
      src: '/projects/mooca/mooca-04-partido.png',
      title: 'Partido Arquitetônico',
      caption:
        'Diagrama conceitual que sintetiza as principais estratégias adotadas para preservar a memória industrial e criar novos espaços de uso coletivo.'
    },

    {
      src: '/projects/mooca/mooca-05-terreo.png',
      title: 'Planta do Pavimento Térreo',
      caption:
        'Organização dos espaços públicos, áreas expositivas e circulação principal do edifício.'
    },

    {
      src: '/projects/mooca/mooca-06-pavimento.png',
      title: 'Pavimento Superior',
      caption:
        'Distribuição dos ambientes complementares e continuidade da experiência arquitetônica ao longo do percurso.'
    },

    {
      src: '/projects/mooca/mooca-07-interior.jpg',
      title: 'Perspectiva Interna',
      caption:
        'Visualização do espaço interno evidenciando iluminação natural, estrutura existente e atmosfera proposta.'
    },

    {
      src: '/projects/mooca/mooca-08-isometrica.jpg',
      title: 'Isométrica Explodida',
      caption:
        'Representação tridimensional destacando os principais elementos construtivos e a organização espacial do projeto.'
    },

    {
      src: '/projects/mooca/mooca-09-corte-aa.png',
      title: 'Corte AA',
      caption:
        'Corte longitudinal mostrando a relação entre os pavimentos, estrutura e espacialidade interna.'
    }
  ],
},
  {
    
      index: '02',
      name: 'Studio 20m²',
      category: 'Projeto de Interiores',
      year: '2026',
      software: 'SketchUp, Enscape',
    
      cover: '/projects/studio/studio-01-capa.png',

      pdf: '/projects/studio/studio-prancha.pdf',
    
      description:
        'Projeto de interiores para um studio compacto de 20m², desenvolvido a partir da necessidade de conciliar diferentes funções em uma área reduzida. A proposta organiza estar, cozinha, banheiro e dormitório em uma composição integrada, utilizando marcenaria sob medida e um mezanino para ampliar o aproveitamento vertical do espaço. O projeto busca equilibrar funcionalidade, conforto e uma linguagem visual contemporânea.',
    
      gallery: [
        {
          src: '/projects/studio/studio-02-planta.png',
          title: 'Planta Baixa',
          caption:
            'Distribuição dos ambientes e das principais funções do studio, priorizando circulação e aproveitamento da área disponível.'
        },
    
        {
          src: '/projects/studio/studio-03-mezanino.png',
          title: 'Planta do Mezanino',
          caption:
            'Solução de aproveitamento vertical criada para acomodar o dormitório sem comprometer a integração dos ambientes inferiores.'
        },
    
        {
          src: '/projects/studio/studio-04-corte.jpg',
          title: 'Corte',
          caption:
            'Relação entre os diferentes níveis do projeto, evidenciando a altura do ambiente principal e a inserção do mezanino.'
        },
    
        {
          src: '/projects/studio/studio-05-interior.png',
          title: 'Perspectiva Interna',
          caption:
            'Visualização do ambiente integrado, destacando a relação entre mobiliário, iluminação, materiais e circulação.'
        },
    
        {
          src: '/projects/studio/studio-06-isometrica.jpg',
          title: 'Isométrica',
          caption:
            'Representação tridimensional do conjunto, evidenciando a organização espacial e a relação entre os diferentes elementos do projeto.'
        },
    
        {
          src: '/projects/studio/studio-07-rendermezanino.png',
          title: 'Perspectiva do Mezanino',
          caption:
            'Visualização do mezanino e sua relação com o ambiente principal, destacando a solução espacial e a atmosfera do projeto.'
        }
      ],
    },
    {
      index: '03',
      name: 'Apartamento EBAC (SketchUp)',
      category: 'Modelagem 3D',
      year: '2024',
      software: 'SketchUp, V-Ray, Photoshop',
    
      cover: '/projects/ebac-sketchup/jantar-e-cozinha.jpg',

      pdf: '/projects/ebac-sketchup/prancha-ebac-sketchup.pdf',
    
      description:
        'Modelagem e visualização de um apartamento residencial desenvolvidas durante o curso SketchUp & V-Ray do Zero ao Pro, com foco na construção tridimensional dos ambientes, composição de interiores, aplicação de materiais e produção de imagens para apresentação arquitetônica.',
    
      gallery: [
        {
          src: '/projects/ebac-sketchup/quarto.jpg',
          title: 'Quarto',
          caption:
            'Estudo de composição e materialidade do quarto, explorando mobiliário, iluminação e ambientação a partir da modelagem tridimensional.'
        },
    
        {
          src: '/projects/ebac-sketchup/sala-de-tv.jpg',
          title: 'Sala de TV',
          caption:
            'Visualização da sala de TV desenvolvida a partir do modelo 3D, com estudo de mobiliário, revestimentos, iluminação e atmosfera do ambiente.'
        },
      ],
    },
    {
      index: '04',
      name: 'Apartamento EBAC (AutoCAD)',
      category: 'Projeto Técnico',
      year: '2025',
      software: 'AutoCAD',
    
      cover: '/projects/ebac-autocad/autocad-01-planta.png',

      pdf: '/projects/ebac-autocad/prancha-geral.pdf',
    
      description:
        'Exercício desenvolvido durante o curso AutoCAD do Zero ao Pro, com foco na representação técnica e documentação de um projeto residencial. O trabalho envolve desenvolvimento de planta, planta de forro e iluminação, estudo de paginação de pisos, organização de mobiliário e representação dos ambientes, explorando diferentes etapas da documentação arquitetônica em AutoCAD.',
    
      gallery: [
        {
          src: '/projects/ebac-autocad/autocad-01-planta.png',
          title: 'Planta Baixa',
          caption:
            'Planta geral do projeto residencial, com organização dos ambientes, mobiliário, áreas externas e principais elementos da composição espacial.',
        },
    
        {
          src: '/projects/ebac-autocad/autocad-02-forro.png',
          title: 'Forro e Iluminação',
          caption:
            'Estudo de forro e iluminação, com definição dos tipos de luminárias, distribuição dos pontos de luz e diferentes soluções de acabamento.',
        },
    
        {
          src: '/projects/ebac-autocad/autocad-03-piso.png',
          title: 'Piso e Materialidade',
          caption:
            'Desenvolvimento da paginação de pisos e definição dos diferentes revestimentos utilizados nos ambientes e áreas externas.',
        },
    
        {
          src: '/projects/ebac-autocad/autocad-04-layout.png',
          title: 'Layout e Ambientação',
          caption:
            'Estudo de mobiliário e ambientação dos espaços, relacionando a representação técnica com referências de materiais, interiores e paisagismo.',
        },
      ],
    },

    {
      index: '05',
      name: 'Visualizações Arquitetônicas',
      category: 'Visualização',
      year: 'Seleção de trabalhos',
      software: 'SketchUp, V-Ray, Enscape, Photoshop',
    
      cover: '/projects/visualizacoes/piscina-01.png',
    
      pdf: '',
    
      description:
        'Seleção de trabalhos de visualização arquitetônica desenvolvidos para diferentes projetos, explorando modelagem tridimensional, iluminação, materiais, composição e pós-produção. O conjunto reúne imagens estáticas e materiais audiovisuais desenvolvidos para apresentação arquitetônica e comunicação digital.',
    
      gallery: [
        {
          src: '/projects/visualizacoes/piscina-01.png',
          title: 'Piscina Externa',
          caption:
            'Renderização fotorrealista desenvolvida para estudo de paisagismo e integração entre a área externa e a arquitetura, explorando reflexos da água, materiais, vegetação e composição do cenário.',
          type: 'image',
        },
    
        {
          src: '/projects/visualizacoes/piscina-02.png',
          title: 'Piscina Externa',
          caption:
            'Segunda perspectiva do estudo de visualização, explorando diferentes enquadramentos, iluminação e composição dos elementos de paisagismo e mobiliário externo.',
          type: 'image',
        },
    
        {
          src: '/projects/visualizacoes/privillege-thumb.png',
          title: 'Apartamento Privillege',
          caption:
            'Material audiovisual desenvolvido para apresentação de um empreendimento residencial, com foco na valorização dos ambientes internos, acabamentos e atmosfera de alto padrão.',
          type: 'video',
          video: '/projects/visualizacoes/privillege.mp4',
        },
    
        {
          src: '/projects/visualizacoes/villa-campestre-thumb.png',
          title: 'Casa Villa Campestre',
          caption:
            'Material audiovisual desenvolvido para apresentação de um projeto residencial de alto padrão, utilizando iluminação, materiais e ambientação para construir uma representação realista e acolhedora da arquitetura.',
          type: 'video',
          video: '/projects/visualizacoes/villa-campestre.mp4',
        },
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
  const [direction, setDirection] = useState(1)
  const [isSliding, setIsSliding] = useState(false)
  const total = project.gallery.length

  const go = useCallback(
    (dir: number) => {
      if (isSliding) return
  
      setDirection(dir)
      setIsSliding(true)
    },
    [isSliding],
  )

  useEffect(() => {
    setSlide(0)
  
    modalRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [project.index])

  useEffect(() => {
    setVideoPlaying(false)
  }, [slide, project.index])
  
  useEffect(() => {
    project.gallery.forEach((item) => {
      const img = new window.Image()
      img.src = item.src
    })
  }, [project])

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
  const nextSlide = (slide + direction + total) % total
  const nextImage = project.gallery[nextSlide]
  const [videoPlaying, setVideoPlaying] = useState(false)

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
        <div className="relative w-full overflow-hidden">
  <div
    className={`flex w-full justify-center ${
      isSliding
        ? direction === 1
          ? 'carousel-current-left'
          : 'carousel-current-right'
        : ''
    }`}
  >
<div className="relative max-w-full overflow-hidden rounded-2xl bg-secondary">
  {current.type === 'video' && current.video ? (
    videoPlaying ? (
      <video
        src={current.video}
        controls
        autoPlay
        playsInline
        className="block max-h-[75vh] w-auto max-w-full"
      />
    ) : (
      <button
        type="button"
        onClick={() => setVideoPlaying(true)}
        className="group relative block w-full"
        aria-label={`Reproduzir vídeo: ${current.title}`}
      >
        <Image
          src={current.src || '/placeholder.svg'}
          alt={current.title}
          width={2400}
          height={1600}
          sizes="(max-width: 1400px) 100vw, 1400px"
          className="block h-auto max-h-[75vh] w-auto max-w-full object-contain"
        />

        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/10">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-500 group-hover:scale-110">
            <span className="ml-1 text-2xl text-black">▶</span>
          </span>
        </span>
      </button>
    )
  ) : (
    <Image
      src={current.src || '/placeholder.svg'}
      alt={current.title}
      width={2400}
      height={1600}
      sizes="(max-width: 1400px) 100vw, 1400px"
      className="block h-auto max-h-[75vh] w-auto max-w-full object-contain"
    />
  )}
</div>
  </div>

  {isSliding && (
    <div
      className={`absolute inset-0 flex w-full justify-center ${
        direction === 1
          ? 'carousel-next-from-right'
          : 'carousel-next-from-left'
      }`}
      onAnimationEnd={() => {
        setSlide(nextSlide)
        setIsSliding(false)
      }}
    >
      <div className="relative max-w-full overflow-hidden rounded-2xl bg-secondary">
        <Image
          src={nextImage.src || '/placeholder.svg'}
          alt={nextImage.title}
          width={2400}
          height={1600}
          sizes="(max-width: 1400px) 100vw, 1400px"
          className="block h-auto max-h-[75vh] w-auto max-w-full object-contain"
        />
      </div>
    </div>
  )}
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
        {project.pdf && (
          <div className="mt-16 border-t border-border pt-10">
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-[11px] uppercase tracking-wide-sm text-foreground transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              Abrir prancha em PDF
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>
        )}

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

  const modalOpen = active !== null

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
  }, [modalOpen])

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
