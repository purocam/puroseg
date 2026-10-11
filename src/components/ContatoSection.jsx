import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LABEL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from '../lib/contact';
import SectionHeader from './ui/SectionHeader';

const SERVICE_CATEGORIES = {
  documentos: {
    label: 'Documentação Técnica e Legal',
    specifics: [
      'PGR - Programa de Gerenciamento de Riscos',
      'PCMSO - Programa de Controle Médico de Saúde Ocupacional',
      'LTCAT - Laudo Téc. das Condições Ambientais do Trabalho',
      'LIP - Laudo de Insalubridade e Periculosidade',
      'PPP - Perfil Profissiográfico Previdenciário',
      'Gestão eSocial',
    ],
  },
  treinamentos: {
    label: 'Treinamentos e Capacitação',
    specifics: [
      'NR 01',
      'NR 05 - CIPA',
      'NR 10 - Instalações Elétricas',
      'NR 11 - Empilhadeira',
      'NR 11 - Munck e Ponte Rolante',
      'NR 11 - Pá Carregadeira',
      'NR 12',
      'NR 18 - Integração',
      'PTA - Plataforma Elevatória',
      'NR 20',
      'NR 31.12 - Segurança Agrícola',
      'NR 31.12.47 - Manutenção Agrícola',
      'NR 31.7 - Agrotóxicos, Aditivos e Adjuvantes',
      'NR 33 - Espaço Confinado',
      'NR 34 - Trabalho a Quente',
      'NR 35 - Trabalho em Altura',
      'Brigada de Incêndio (NTCB 34)',
      'Responsabilidade Civil e Criminal',
    ],
  },
  outros: {
    label: 'Outros Serviços',
    specifics: [
      'Gestão eSocial SST',
      'Implantação de CIPA',
      'Projeto de Incêndio',
      'Mapeamento e Análise de Riscos',
      'Inspeção de Segurança',
      'DDS - Diálogo Diário de Segurança',
      'Sinalização de Segurança',
      'Avaliações Quantitativas',
      'Gestão de Espaço Confinado',
      'Gestão de Trabalho em Altura',
      'Estatística de Acidentes',
      'Normas e Procedimentos',
    ],
  },
};

const CATEGORY_KEYS = Object.keys(SERVICE_CATEGORIES);

function InfoCell({ icon, title, text, href, className = '', external = true }) {
  const content = (
    <>
      {icon}
      <div>
        <p className="mb-1 font-bold text-on-surface">{title}</p>
        <p className="text-sm leading-6 text-on-surface-variant">{text}</p>
      </div>
    </>
  );

  const classes = `flex gap-4 px-5 py-4 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`${classes} transition-colors hover:bg-surface`}
      >
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}

function buildWhatsAppFormUrl({ name, category, specific }) {
  const categoryLabel = SERVICE_CATEGORIES[category]?.label ?? category;
  let message = `Olá! Meu nome é ${name} e vim pelo site da PUROSEG. Gostaria de solicitar um contato sobre ${categoryLabel}.`;
  if (specific) {
    message += ` Especificamente sobre ${specific}.`;
  }

  return `https://wa.me/5565999044069?text=${encodeURIComponent(message)}`;
}

export default function ContatoSection() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('documentos');
  const [specific, setSpecific] = useState('');

  const specifics = SERVICE_CATEGORIES[category].specifics;

  function handleCategoryChange(event) {
    setCategory(event.target.value);
    setSpecific('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim()) return;
    window.open(
      buildWhatsAppFormUrl({ name: name.trim(), category, specific }),
      '_blank',
      'noopener,noreferrer',
    );
  }

  return (
    <section className="bg-surface-low py-14 md:py-20" id="contact">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeader
          align="start"
          eyebrow="Contato"
          title="Fale Conosco"
          description="Entre em contato pelo WhatsApp ou envie uma mensagem para solicitar uma avaliação da estrutura da sua empresa."
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-white p-6 text-left shadow-sm md:p-8">
              <h3 className="mb-4 text-xl font-bold tracking-tight text-on-surface">Contato</h3>

              <div className="-mx-6 border-t border-surface-container md:-mx-8">
                <InfoCell
                  icon={<InstagramIcon className="text-primary" sx={{ fontSize: 24 }} />}
                  title="Instagram"
                  text="@purosegcnp"
                  href={INSTAGRAM_URL}
                  className="border-b border-surface-container"
                />
                <InfoCell
                  icon={<WhatsAppIcon className="text-primary" sx={{ fontSize: 24 }} />}
                  title="Telefone"
                  text="(65) 99904-4069"
                  href={WHATSAPP_URL}
                  className="border-b border-surface-container"
                />
                <InfoCell
                  icon={
                    <span className="material-symbols-outlined text-[24px] text-primary">
                      mail
                    </span>
                  }
                  title="E-mail"
                  text={CONTACT_EMAIL_LABEL}
                  href={CONTACT_EMAIL}
                  external={false}
                />
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-on-primary transition-colors hover:bg-primary-hover"
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
              Falar no WhatsApp
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-outline-variant/40 bg-white p-6 text-left shadow-sm md:p-8"
          >
            <h3 className="mb-4 text-xl font-bold tracking-tight text-on-surface">
              Enviar Mensagem
            </h3>

            <div className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-on-surface">Nome</span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ex: Roberto Silva"
                  className="w-full rounded-xl border border-outline-variant/60 bg-surface px-3.5 py-2 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/60 focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-on-surface">
                  Serviço Desejado
                </span>
                <div className="relative">
                  <select
                    required
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-full appearance-none rounded-xl border border-outline-variant/60 bg-surface px-3.5 py-2 pr-10 text-sm text-on-surface outline-none transition-colors focus:border-primary"
                  >
                    {CATEGORY_KEYS.map((key) => (
                      <option key={key} value={key}>
                        {SERVICE_CATEGORIES[key].label}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[20px] text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-on-surface">
                  Serviço Específico{' '}
                  <span className="font-normal text-on-surface-variant">(opcional)</span>
                </span>
                <div className="relative">
                  <select
                    value={specific}
                    onChange={(event) => setSpecific(event.target.value)}
                    className="w-full appearance-none rounded-xl border border-outline-variant/60 bg-surface px-3.5 py-2 pr-10 text-sm text-on-surface outline-none transition-colors focus:border-primary"
                  >
                    <option value="">Nenhum</option>
                    {specifics.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[20px] text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </label>

              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-on-surface px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-on-surface/90"
              >
                <WhatsAppIcon sx={{ fontSize: 20 }} />
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
