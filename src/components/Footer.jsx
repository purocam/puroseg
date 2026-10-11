import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_EMAIL_LABEL } from '../lib/contact';

export default function Footer() {
  return (
    <footer className="min-w-0 max-w-full border-t border-outline-variant/40 bg-white pb-24 md:pb-10">
      <div className="mx-auto w-full max-w-7xl px-5 py-14">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="hidden space-y-4 text-left md:block">
            <img src="/LogoPuro.svg" alt="PUROSEG" className="h-16 w-auto" />
          </div>

          <div className="space-y-4 text-left">
            <p className="max-w-xs text-sm leading-6 text-on-surface-variant">
              Excelência em engenharia de segurança do trabalho e treinamentos normativos de alto impacto para a indústria moderna.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-surface-container pt-6 md:flex-row">
          <p className="text-xs font-medium tracking-wide text-on-surface-variant uppercase">
            © {new Date().getFullYear()} PUROSEG. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-bold tracking-[0.08em] text-primary/50 uppercase">Segurança</span>
            <span className="text-[10px] font-bold tracking-[0.08em] text-primary/50 uppercase">Qualidade</span>
            <span className="text-[10px] font-bold tracking-[0.08em] text-primary/50 uppercase">Inovação</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
