import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WHATSAPP_URL } from '../lib/contact';

const NAV_LINKS = [
  { href: '#documents', label: 'Documentos' },
  { href: '#training', label: 'Treinamentos' },
  { href: '#outros', label: 'Serviços' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-outline-variant/30 bg-surface/90 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src="/LogoPuro.svg" alt="PUROSEG" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2.5 text-sm font-bold text-on-primary transition-colors hover:bg-primary-hover"
        >
          <WhatsAppIcon sx={{ fontSize: 20 }} />
          Contato
        </a>
      </div>
    </header>
  );
}
