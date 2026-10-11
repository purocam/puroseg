import SectionHeader from './ui/SectionHeader';

const PILLARS = [
  {
    icon: 'gavel',
    title: 'Rigor Técnico',
    description:
      'A PUROSEG eleva os padrões de segurança no ambiente industrial brasileiro. Não entregamos apenas laudos; entregamos tranquilidade estratégica.',
  },
  {
    icon: 'menu_book',
    title: 'Base Jurídica',
    description:
      'Nossa metodologia combina conhecimento jurídico atualizado com uma visão prática das operações de campo.',
  },
  {
    icon: 'engineering',
    title: 'Soluções Aplicáveis',
    description:
      'Garantimos soluções aplicáveis para empresas que buscam alta performance e conformidade contínua.',
  },
];

const STATS = [
  { value: '150+', label: 'Clientes Atendidos' },
  { value: '10.000+', label: 'Vidas Treinadas' },
  { value: '100%', label: 'Conformidade' },
];

export default function SobreSection() {
  return (
    <section className="bg-surface py-14 md:py-20" id="about">
      <div className="mx-auto w-full max-w-7xl px-5">
        <SectionHeader
          eyebrow="Nossa Essência"
          title="Referência Industrial em Consultoria de Segurança"
          description="Metodologia integrada para conformidade normativa, gestão de riscos e capacitação de equipes."
        />

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-outline-variant/40 bg-white p-6 text-left shadow-sm"
            >
              <div className="mb-2 flex items-center gap-3 md:mb-0 md:block">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:mb-4 md:h-12 md:w-12">
                  <span className="material-symbols-outlined text-[24px] md:text-[26px]">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-surface md:mb-2">{pillar.title}</h3>
              </div>
              <p className="text-sm leading-6 text-on-surface-variant">{pillar.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
