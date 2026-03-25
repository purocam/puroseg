export default function ContatoSection() {
  return (
    <section className="py-20 bg-slate-100" id="contact">
      <div className="w-full">
        <div className="bg-emerald-700 rounded-4xl p-12 md:p-24 relative overflow-hidden text-white editorial-shadow">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full"></div>
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="font-black text-4xl md:text-7xl text-white mb-10 leading-[1.1] tracking-tighter">
              Sua empresa segura e em conformidade. Comece agora.
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl">
              Agende uma consulta diagnóstica gratuita com um de nossos consultores seniores para avaliar sua estrutura atual.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button className="bg-white text-emerald-700 px-12 py-5 text-sm font-black tracking-[0.2em] uppercase hover:bg-emerald-100 transition-all flex items-center justify-center gap-3 rounded-sm shadow-xl">
                <span className="material-symbols-outlined">chat</span>
                Falar no WhatsApp
              </button>
              <button className="border-2 border-white/30 text-white px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all rounded-sm">
                Formulário de Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
