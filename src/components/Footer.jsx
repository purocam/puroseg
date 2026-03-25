export default function Footer() {
  return (
    <footer className="min-w-0 max-w-full bg-white border-t border-emerald-700/10">
      <div className="w-full min-w-0 max-w-full py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="text-2xl font-black text-emerald-700 uppercase tracking-tighter">
              PUROSEG
            </div>
            <p className="text-slate-600 text-base leading-relaxed max-w-xs">
              Excelência em engenharia de segurança do trabalho e treinamentos normativos de alto impacto para a indústria moderna.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-emerald-700/20 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-lg">public</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-emerald-700/20 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-lg">share</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.3em] uppercase text-emerald-700 font-black mb-10">Serviços</h5>
            <ul className="space-y-5">
              <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Documentos Técnicos</a></li>
              <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Treinamentos NR</a></li>
              <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Gestão eSocial</a></li>
              <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Laudos de Engenharia</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.3em] uppercase text-emerald-700 font-black mb-10">Legal</h5>
            <ul className="space-y-5">
              <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Política de Privacidade</a></li>
              <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Termos de Uso</a></li>
              <li><a className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium" href="#">Compliance</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.3em] uppercase text-emerald-700 font-black mb-10">Contato</h5>
            <address className="not-italic space-y-6">
              <p className="flex items-start gap-4 text-slate-600 text-sm">
                <span className="material-symbols-outlined text-emerald-700" data-icon="location_on">location_on</span>
                São Paulo, SP<br />Brasil
              </p>
              <p className="flex items-center gap-4 text-slate-600 text-sm">
                <span className="material-symbols-outlined text-emerald-700" data-icon="mail">mail</span>
                contato@puroseg.com.br
              </p>
              <p className="flex items-center gap-4 text-slate-600 text-sm font-bold">
                <span className="material-symbols-outlined text-emerald-700" data-icon="call">call</span>
                +55 (11) 9999-9999
              </p>
            </address>
          </div>
        </div>

        <div className="pt-10 border-t border-emerald-700/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
            © 2024 PUROSEG Industrial Safety. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold text-emerald-700/40 uppercase tracking-widest">Segurança</span>
            <span className="text-[10px] font-bold text-emerald-700/40 uppercase tracking-widest">Qualidade</span>
            <span className="text-[10px] font-bold text-emerald-700/40 uppercase tracking-widest">Inovação</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
