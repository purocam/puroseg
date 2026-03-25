import Paper from '@mui/material/Paper';

const TREINAMENTOS_ITEMS = [
  {
    title: 'Treinamento NR 01',
    description: 'Capacitação introdutória sobre disposições gerais de segurança e saúde no trabalho.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr01.jpg',
    imageAlt: 'Treinamento de integração em segurança do trabalho',
  },
  {
    title: 'Treinamento CIPA (NR 05)',
    description: 'Formação e capacitação da CIPA para prevenção de acidentes e promoção da saúde ocupacional.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/cipa.jpg',
    imageAlt: 'Equipe em treinamento de CIPA',
  },
  {
    title: 'Treinamento NR 10',
    description: 'Capacitação para segurança em instalações e serviços em eletricidade.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr10.jpg',
    imageAlt: 'Trabalho com eletricidade segura',
  },
  {
    title: 'Treinamento NR 11 - Empilhadeira',
    description: 'Capacitação para operação segura de empilhadeiras.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/empilhadeira.jpg',
    imageAlt: 'Operador de empilhadeira',
  },
  {
    title: 'Treinamento NR 11 - Munck e Ponte Rolante',
    description: 'Treinamento para operação segura de equipamentos de elevação de cargas.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/munck.jpg',
    imageAlt: 'Operação de guindaste e ponte rolante',
  },
  {
    title: 'Treinamento NR 12',
    description: 'Capacitação em segurança no trabalho com máquinas e equipamentos.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr12.jpg',
    imageAlt: 'Máquinas industriais com segurança',
  },
  {
    title: 'Treinamento NR 18 - Integração',
    description: 'Integração de segurança para trabalhadores da construção civil.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr18.jpg',
    imageAlt: 'Treinamento em obra',
  },
  {
    title: 'Treinamento PTA - Plataforma Elevatória',
    description: 'Capacitação para operação segura de plataformas elevatórias.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/pta.jpg',
    imageAlt: 'Plataforma elevatória em uso',
  },
  {
    title: 'Treinamento NR 20',
    description: 'Capacitação para trabalho com inflamáveis e combustíveis.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr20.jpg',
    imageAlt: 'Manuseio de combustíveis',
  },
  {
    title: 'Treinamento NR 31',
    description: 'Capacitação em segurança no trabalho rural.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr31.jpg',
    imageAlt: 'Trabalho rural seguro',
  },
  {
    title: 'Treinamento NR 33 - Espaço Confinado',
    description: 'Capacitação para trabalho seguro em espaços confinados.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr33.jpg',
    imageAlt: 'Trabalho em espaço confinado',
  },
  {
    title: 'Treinamento NR 34',
    description: 'Capacitação para segurança em atividades industriais específicas, como trabalho a quente.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr34.jpg',
    imageAlt: 'Trabalho industrial com solda',
  },
  {
    title: 'Treinamento NR 35 - Trabalho em Altura',
    description: 'Capacitação para execução de atividades em altura com segurança.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/nr35.jpg',
    imageAlt: 'Trabalho em altura com EPI',
  },
  {
    title: 'Brigada de Incêndio (NTCB 34)',
    description: 'Treinamento de brigada de incêndio para prevenção e combate a emergências.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/brigada.jpg',
    imageAlt: 'Equipe de brigada de incêndio',
  },
  {
    title: 'Direção Defensiva',
    description: 'Capacitação para condução segura e prevenção de acidentes no trânsito.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/direcao.jpg',
    imageAlt: 'Motorista dirigindo com segurança',
  },
  {
    title: 'Responsabilidade Civil e Criminal',
    description: 'Treinamento sobre responsabilidades legais relacionadas à segurança do trabalho.',
    tag: 'Treinamento',
    accentColor: '#2563eb',
    image: 'public/responsabilidade.jpg',
    imageAlt: 'Treinamento jurídico corporativo',
  }
]

export default function TreinamentosSection() {
  return (
    <>
      <section className="relative h-150 flex items-center justify-end overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="h-full w-full object-cover opacity-60"
            src="/Fundo2.jpg"
          />

          {/* Comentário: Removemos os efeitos sutis anteriores para dar lugar a um efeito de borda/mesclagem mais forte. */}
          <div className="absolute inset-0 bg-linear-to-b from-slate-100 via-slate-100/5 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-100 via-slate-100/5 to-transparent" />

          {/* NOVO: Gradiente radial periférico forte, mesclando com slate-100 */}

          {/* Começa transparente no centro e transiciona para slate-100 opaco nas bordas */}
          {/* <div
            className="pointer-events-none absolute inset-0 z-1"
            style={{
              backgroundImage: `radial-gradient(circle, transparent 30%, rgba(241, 245, 249, 0.9) 80%, rgba(241, 245, 249, 0.2) 100%)`,
            }}
          /> */}
        </div>
        <div className="relative z-10 box-border flex w-full min-w-0 max-w-full justify-end px-5">
          <div className="shadow-lg shadow-neutral-900/50 max-w-2xl bg-white/10 p-12 text-left text-white backdrop-blur-lg border border-white/20 rounded-2xl">
            <h3 className="mb-6 text-4xl font-black text-slate-900">Educação que salva vidas</h3>
            <p className="text-xl leading-relaxed text-slate-800">
              Nossa metodologia de treinamento vai além da teoria, focando no comportamento seguro e na prevenção proativa de acidentes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-100" id="training">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 ml-5">
            <div className="lg:col-span-7">
              <h2 className="font-black text-3xl md:text-4xl text-start pl-4 text-slate-900 uppercase tracking-tight border-l-4 border-emerald-700">
                Treinamentos & <span className="text-emerald-700">Capacitação</span>
              </h2>
              <p className="text-slate-600 text-start text-xl leading-relaxed italic border-l-4 border-emerald-700 pl-6">
                Desenvolvemos competências críticas para garantir que sua equipe atue com segurança, responsabilidade e excelência operacional.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative bg-white overflow-hidden p-8 flex gap-8 items-start rounded-2xl editorial-shadow">
              <span className="text-6xl font-black text-emerald-100 group-hover:text-emerald-700/10 transition-colors">01</span>
              <div>
                <h4 className="font-bold text-2xl mb-4">Certificações NRs</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">Formação completa em NR 5 (CIPA), NR 6 (EPI), NR 10 (Elétrica) e demais normas vigentes com material didático exclusivo.</p>
                <a className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700 group-hover:translate-x-2 transition-transform" href="#">
                  Ver Detalhes <span className="material-symbols-outlined text-sm">trending_flat</span>
                </a>
              </div>
            </div>

            <div className="group relative bg-white overflow-hidden p-8 flex gap-8 items-start rounded-2xl editorial-shadow">
              <span className="text-6xl font-black text-emerald-100 group-hover:text-emerald-700/10 transition-colors">02</span>
              <div>
                <h4 className="font-bold text-2xl mb-4">Equipamentos</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">Capacitação teórica e prática para operadores de máquinas pesadas e equipamentos industriais em ambiente controlado.</p>
                <a className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700 group-hover:translate-x-2 transition-transform" href="#">
                  Ver Detalhes <span className="material-symbols-outlined text-sm">trending_flat</span>
                </a>
              </div>
            </div>

            <div className="group relative bg-white overflow-hidden p-8 flex gap-8 items-start rounded-2xl editorial-shadow">
              <span className="text-6xl font-black text-emerald-100 group-hover:text-emerald-700/10 transition-colors">03</span>
              <div>
                <h4 className="font-bold text-2xl mb-4">Gestão Jurídica</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">Workshop sobre Responsabilidade Civil e Criminal aplicada à Segurança do Trabalho para gestores e diretores.</p>
                <a className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700 group-hover:translate-x-2 transition-transform" href="#">
                  Ver Detalhes <span className="material-symbols-outlined text-sm">trending_flat</span>
                </a>
              </div>
            </div>

            <div className="group relative bg-white overflow-hidden p-8 flex gap-8 items-start rounded-2xl editorial-shadow">
              <span className="text-6xl font-black text-emerald-100 group-hover:text-emerald-700/10 transition-colors">04</span>
              <div>
                <h4 className="font-bold text-2xl mb-4">Brigada de Incêndio</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">Treinamento intensivo de primeiros socorros, evacuação e combate a princípios de incêndio com simulados práticos.</p>
                <a className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-700 group-hover:translate-x-2 transition-transform" href="#">
                  Ver Detalhes <span className="material-symbols-outlined text-sm">trending_flat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
