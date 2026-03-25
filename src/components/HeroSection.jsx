export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-5 overflow-hidden bg-slate-100">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover opacity-60" src="/Fundo.jpg" alt="" />
        {/* LEFT → RIGHT fade */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-100 via-slate-100/90 to-transparent"></div>
      </div>

      <div className="absolute top-20 left-5 z-20">
        <span className="inline-flex items-center gap-2 py-0 px-2 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse"></span>
          Excelência e Segurança
        </span>
      </div>

      <div className="w-full relative z-10">
        <div className="ml-5 max-w-3xl">
          <h1 className="text-slate-900 text-left font-bold text-5xl md:text-8xl tracking-tighter mb-10 break-words">
            Especialista em Segurança do Trabalho: Assessoria e Treinamentos
          </h1>
          <div className="flex flex-wrap gap-5">
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg text-sm font-bold tracking-widest uppercase hover:bg-emerald-600 hover:translate-y-[-0.5] transition-all shadow-lg shadow-neutral-900/50">
              Nossos serviços
            </button>
            <button className="border-2 border-emerald-700/20 text-emerald-700 rounded-lg px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-emerald-100 transition-all shadow-lg shadow-neutral-900/50">
              Sobre nós
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-b from-transparent to-slate-100 pointer-events-none"></div>
    </section>
  );
}
