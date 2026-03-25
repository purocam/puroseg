import { useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const DOCUMENT_ITEMS = [
  {
    title: 'PGR - Programa de Gerenciamento de Riscos',
    description: 'Elaboração e gestão do PGR conforme exigências legais, identificando e controlando riscos ocupacionais.',
    tag: 'Documento',
    accentColor: '#7c3aed',
    image: 'public/pgr.jpg',
    imageAlt: 'Documento técnico de segurança',
  },
  {
    title: 'PCMSO',
    description: 'Programa de Controle Médico de Saúde Ocupacional com foco na prevenção e monitoramento da saúde dos colaboradores.',
    tag: 'Documento',
    accentColor: '#7c3aed',
    image: 'public/pcmso.jpg',
    imageAlt: 'Controle de saúde ocupacional',
  },
  {
    title: 'LTCAT',
    description: 'Laudo Técnico das Condições Ambientais de Trabalho para comprovação de exposição a agentes nocivos.',
    tag: 'Documento',
    accentColor: '#7c3aed',
    image: 'public/ltcat.jpg',
    imageAlt: 'Avaliação de ambiente de trabalho',
  },
  {
    title: 'LIP - Laudo de Insalubridade e Periculosidade',
    description: 'Avaliação técnica para caracterização de insalubridade e periculosidade.',
    tag: 'Documento',
    accentColor: '#7c3aed',
    image: 'public/lip.jpg',
    imageAlt: 'Análise de riscos ocupacionais',
  },
  {
    title: 'PPP - Perfil Profissiográfico Previdenciário',
    description: 'Elaboração do PPP com base no histórico laboral e exposição a riscos.',
    tag: 'Documento',
    accentColor: '#7c3aed',
    image: 'public/ppp.jpg',
    imageAlt: 'Documento previdenciário',
  },
  {
    title: 'Laudos Técnicos',
    description:
      'Análise técnica detalhada para laudos de insalubridade e periculosidade com fundamentação jurídica.',
    tag: 'Engenharia',
    accentColor: '#059669',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=690&h=280&fit=crop&q=80',
    imageAlt: 'Contexto técnico e saúde ocupacional',
  },
  {
    title: 'Gestão eSocial',
    description:
      'Envio e monitoramento dos eventos de SST (S-2210, S-2220 e S-2240) garantindo a integridade dos dados.',
    tag: 'Digital',
    accentColor: '#047857',
    image:
      'public/eSocial.jpeg',
    imageAlt: 'Dados e painéis de gestão digital',
  },
];

export default function DocumentosSection() {
  const scrollerRef = useRef(null);

  const scrollByCards = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = direction === 'prev' ? -360 : 360;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="py-15 bg-slate-100" id="documents">
      <div className="w-full min-w-0 max-w-full box-border px-5">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="border-l-4 pl-4 px-1 border-emerald-700 text-3xl md:text-4xl text-start text-slate-900 uppercase tracking-tight leading-tight font-extrabold">
              Documentação Técnica & Legal
            </h2>
            <p className="border-l-4 pl-4 px-1 border-emerald-700 text-slate-600 text-start text-xl leading-relaxed">
              Soluções rigorosas para conformidade normativa e gestão de riscos ocupacionais com precisão técnica e jurídica.
            </p>
          </div>
          {/* Controles de rolagem */}
          {/* <div className="flex gap-4 self-end">
            <button
              type="button"
              className="w-14 h-14 rounded-full border-2 border-emerald-700/10 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all"
              aria-label="Rolar documentos para a esquerda"
              onClick={() => scrollByCards('prev')}
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              type="button"
              className="w-14 h-14 rounded-full border-2 border-emerald-700/10 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all"
              aria-label="Rolar documentos para a direita"
              onClick={() => scrollByCards('next')}
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div> */}
        </div>

        <div
          ref={scrollerRef}
          className="flex overflow-x-auto pb-16 gap-8 custom-scrollbar snap-x"
        >
          {DOCUMENT_ITEMS.map((item) => (
            <Card
              key={item.title}
              className="snap-start editorial-shadow"
              sx={{
                maxWidth: 345,
                minWidth: 300,
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                borderTop: `8px solid ${item.accentColor}`,
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <CardActionArea component="a" href="#documents">
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.imageAlt}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box
                sx={{
                  px: 2,
                  pb: 2,
                  pt: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Chip
                  label={item.tag}
                  size="small"
                  sx={{
                    height: 24,
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    bgcolor: 'rgba(16, 185, 129, 0.12)',
                    color: '#059669',
                  }}
                />
                <OpenInNewIcon sx={{ fontSize: 22, color: 'rgba(4, 120, 87, 0.35)' }} aria-hidden />
              </Box>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
