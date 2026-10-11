const STATS = [
  { value: '150+', label: 'Clientes Atendidos' },
  { value: '10.000+', label: 'Vidas Treinadas' },
  { value: '100%', label: 'Conformidade' },
];

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface pt-24 pb-10 md:pt-28 md:pb-16">
      <div className="absolute inset-0 z-0">
        <img src="/Fundo.jpg" alt="" className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-linear-to-r from-surface via-surface/35 to-surface/40" />
        <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-surface/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5">
        <div className="max-w-3xl text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-primary uppercase">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Excelência e Segurança
          </p>
          <h1 className="mb-5 text-[36px] leading-[44px] font-extrabold tracking-[-0.025em] text-on-surface md:text-[56px] md:leading-[64px] md:tracking-[-0.03em]">
            Especialista em Segurança do Trabalho: Assessoria e Treinamentos
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-6 text-on-surface-variant md:text-lg md:leading-7">
            Soluções técnicas e capacitação de alta performance para empresas que precisam de conformidade normativa e operação segura.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-bold text-on-primary transition-colors hover:bg-primary-hover"
            >
              Fale Conosco
            </a>
            <a
              href="#documents"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white/80 px-6 py-2 text-sm font-bold text-on-surface transition-colors hover:border-primary hover:text-primary"
            >
              Conhecer Serviços
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-5">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-outline-variant/40 bg-white/90 px-4 py-2 text-center shadow-sm backdrop-blur-sm"
            >
              <p className="text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.08em] text-on-surface-variant uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
