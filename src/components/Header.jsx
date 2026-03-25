export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 min-w-0 max-w-full bg-slate-100/80 backdrop-blur-lg border-b border-emerald-700/40">
      <div className="w-full min-w-0 max-w-full flex justify-between items-center py-2 pl-5 pr-5">
        <img className="ml-5 h-12" src="/LogoPuro.svg" alt="PUROSEG" />
        <nav className="hidden md:flex items-center space-x-10">
          <a className="text-sm font-semibold text-slate-900/70 hover:text-emerald-700 transition-colors uppercase tracking-widest" href="#documents">Documentos</a>
          <a className="text-sm font-semibold text-slate-900/70 hover:text-emerald-700 transition-colors uppercase tracking-widest" href="#training">Treinamentos</a>
          <a className="text-sm font-semibold text-slate-900/70 hover:text-emerald-700 transition-colors uppercase tracking-widest" href="#about">Sobre</a>
          <a className="text-sm font-semibold text-slate-900/70 hover:text-emerald-700 transition-colors uppercase tracking-widest" href="#contact">Contato</a>
        </nav>
        {/* <button className="mr-5 bg-emerald-700 text-white px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-emerald-600 transition-all rounded-sm">
            Falar com Especialista
          </button> */}
      </div>
    </header>
  );
}
