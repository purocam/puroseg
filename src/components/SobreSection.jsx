const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuANiamL51rIC8Fxi5DYMe_p35lrLQhVlV44fJ_dIy8DjWxQBqxZEHsvDcVnKqmdYLfKD7WIQM9-zs6RW6ZPS0aLs8fMCz9V9QiGbiE7G2wV10ciCaaoJshU3vTFy_M8SNiUB6_BBlHcZG_pCYnOt7OPaU-1bepVTTjg7bXN2PmUrYmfykjJTMtbISEgI3UtOUypn5C5OzF5H9_cn4rB6fEGWhoCaiQpeTV7DE3gHzS0-VAaJKLpBVJJ1gugInzBXSzNR3OskH1WrkE';

export default function SobreSection() {
  return (
    <section className="py-32 bg-slate-100 overflow-x-hidden" id="about">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 bg-white p-16 editorial-shadow rounded-sm border border-emerald-700/5">
              <img alt="PUROSEG Logo" className="w-64 h-auto mx-auto mb-12 opacity-80" src={LOGO_URL} />
              <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
                <p>
                  A PUROSEG nasceu da necessidade de elevating os padrões de segurança no ambiente industrial brasileiro. Não entregamos apenas laudos; entregamos tranquilidade estratégica para empresas que buscam alta performance.
                </p>
                <p>
                  Nossa metodologia combina rigor técnico, conhecimento jurídico atualizado e uma visão prática das operações de campo, garantindo soluções aplicáveis.
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100/50 -z-10 rounded-full blur-3xl"></div>
          </div>
          <div className="lg:col-span-6">
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-700"></span> Nossa Essência
            </span>
            <h2 className="font-black text-4xl md:text-6xl text-slate-900 uppercase mb-12 leading-tight">
              Referência Industrial em Consultoria de Segurança
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div className="border-b border-emerald-700/10 pb-6">
                <p className="text-4xl font-black text-emerald-700 mb-1">150+</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-600">Clientes Atendidos</p>
              </div>
              <div className="border-b border-emerald-700/10 pb-6">
                <p className="text-4xl font-black text-emerald-700 mb-1">15k+</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-600">Vidas Treinadas</p>
              </div>
              <div className="border-b border-emerald-700/10 pb-6">
                <p className="text-4xl font-black text-emerald-700 mb-1">100%</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-600">Conformidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
