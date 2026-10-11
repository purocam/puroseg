import { useState } from 'react';

const DOCUMENT_ITEMS = [
  {
    title: 'PGR - Programa de Gerenciamento de Riscos',
    description:
      'Elaboração e gestão do PGR conforme exigências legais, identificando e controlando riscos ocupacionais.',
    tag: 'Documento',
  },
  {
    title: 'PCMSO - Programa de Controle Médico de Saúde Ocupacional',
    description:
      'Programa de Controle Médico de Saúde Ocupacional com foco na prevenção e monitoramento da saúde dos colaboradores.',
    tag: 'Documento',
  },
  {
    title: 'LTCAT - Laudo Téc. das Condições Ambientais do Trabalho',
    description:
      'Laudo Técnico das Condições Ambientais de Trabalho para comprovação de exposição a agentes nocivos.',
    tag: 'Laudo',
  },
  {
    title: 'LIP - Laudo de Insalubridade e Periculosidade',
    description: 'Avaliação técnica para caracterização de insalubridade e periculosidade.',
    tag: 'Laudo',
  },
  {
    title: 'PPP - Perfil Profissiográfico Previdenciário',
    description: 'Elaboração do PPP com base no histórico laboral e exposição a riscos.',
    tag: 'Documento',
  },
  {
    title: 'Gestão eSocial',
    description:
      'Envio e monitoramento dos eventos de SST (S-2210, S-2220 e S-2240) garantindo a integridade dos dados.',
    tag: 'Digital',
  },
];

/**
 * Plano de fundo discreto: imagem larga à direita com fade longo
 * da esquerda (transparente) → direita (visível), sem vão branco.
 */
const IMAGE_MASK = {
  WebkitMaskImage: [
    'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 12%, rgba(0,0,0,0.55) 38%, black 62%, black 100%)',
    'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
  ].join(', '),
  maskImage: [
    'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 12%, rgba(0,0,0,0.55) 38%, black 62%, black 100%)',
    'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
  ].join(', '),
  WebkitMaskComposite: 'source-in',
  maskComposite: 'intersect',
};

function DocumentExpandableItem({ item, expanded, onToggle }) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${
        expanded
          ? 'border-primary/35 shadow-md'
          : 'border-outline-variant/40 hover:border-primary/25'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
        aria-expanded={expanded}
      >
        <div className="min-w-0">
          <p className="truncate text-sm font-bold tracking-tight text-on-surface uppercase md:text-[15px]">
            {item.title}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-bold tracking-[0.08em] text-primary uppercase">
            {item.tag}
          </span>
          <span
            className={`material-symbols-outlined text-[22px] text-primary transition-transform ${
              expanded ? 'rotate-180' : ''
            }`}
          >
            expand_more
          </span>
        </div>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-surface-container px-4 pt-3 pb-4 text-sm leading-6 text-on-surface-variant">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function DocumentosSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-surface py-14 md:py-20" id="documents">
      {/* Fundo discreto: ocupa ~2/3 à direita e atravessa atrás do conteúdo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[28%] right-0 hidden lg:block"
        style={IMAGE_MASK}
      >
        <img
          src="/Lateral1.jpeg"
          alt=""
          className="h-full w-full object-cover object-[center_28%] opacity-[0.38]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5">
        <div className="max-w-xl text-left lg:max-w-[46%]">
          <div className="mb-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
              Documentação Técnica
            </p>
            <h2 className="mb-3 text-[28px] leading-9 font-bold tracking-[-0.02em] text-on-surface md:text-[40px] md:leading-12">
              Documentação Técnica & Legal
            </h2>
            <p className="max-w-xl text-base leading-6 text-on-surface-variant md:text-lg md:leading-7">
              Soluções rigorosas para conformidade normativa e gestão de riscos ocupacionais com precisão técnica e jurídica.
            </p>
          </div>

          <div className="space-y-3">
            {DOCUMENT_ITEMS.map((item, index) => (
              <DocumentExpandableItem
                key={item.title}
                item={item}
                expanded={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
