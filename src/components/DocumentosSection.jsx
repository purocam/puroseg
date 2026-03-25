import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DOCUMENT_ITEMS = [
  {
    title: 'PGR - Programa de Gerenciamento de Riscos',
    description:
      'Elaboração e gestão do PGR conforme exigências legais, identificando e controlando riscos ocupacionais.',
    tag: 'Documento',
  },
  {
    title: 'PCMSO - Programa de Controle Médico de Saúde Ocupacional',
    description:
      'Programa de Controle Médico de Saúde Ocupacional com foco na prevenção e monitoramento da saúde dos colaboradores.',
    tag: 'Documento',
  },
  {
    title: 'LTCAT - Laudo Téc. das Condições Ambientais do Trabalho',
    description:
      'Laudo Técnico das Condições Ambientais de Trabalho para comprovação de exposição a agentes nocivos.',
    tag: 'Laudo',
  },
  {
    title: 'LIP - Laudo de Insalubridade e Periculosidade',
    description: 'Avaliação técnica para caracterização de insalubridade e periculosidade.',
    tag: 'Laudo',
  },
  {
    title: 'PPP - Perfil Profissiográfico Previdenciário',
    description: 'Elaboração do PPP com base no histórico laboral e exposição a riscos.',
    tag: 'Documento',
  },
  {
    title: 'Gestão eSocial',
    description:
      'Envio e monitoramento dos eventos de SST (S-2210, S-2220 e S-2240) garantindo a integridade dos dados.',
    tag: 'Digital',
  },
];

export default function DocumentosSection() {
  return (
    <section className="py-10 bg-slate-100" id="documents">
      <div className="w-full min-w-0 max-w-full box-border px-5">
        <div className="mb-10">
          <h2 className="font-black text-3xl md:text-4xl text-start pl-4 text-slate-900 uppercase tracking-tight border-l-4 border-emerald-700">
            Documentação <span className="text-emerald-700">Técnica & Legal</span>
          </h2>
          <p className="text-slate-600 text-start text-xl leading-relaxed italic border-l-4 border-emerald-700 pl-6 mt-3">
            Soluções rigorosas para conformidade normativa e gestão de riscos ocupacionais com precisão técnica e jurídica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {DOCUMENT_ITEMS.map((item) => (
              <Accordion
                key={item.title}
                className="editorial-shadow"
                sx={{
                  bgcolor: '#fff',
                  border: '1px solid rgba(4, 120, 87, 0.12)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#047857' }} />}
                  aria-controls={`${item.title}-content`}
                  id={`${item.title}-header`}
                  sx={{
                    px: 2,
                    py: 1.25,
                    '& .MuiAccordionSummary-content': {
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 2,
                      minWidth: 0,
                    },
                  }}
                >
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 900,
                        color: '#0f172a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        lineHeight: 1.15,
                      }}
                      noWrap
                      title={item.title}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <Chip
                    label={item.tag}
                    size="small"
                    sx={{
                      height: 24,
                      fontSize: '0.625rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      bgcolor: 'rgba(16, 185, 129, 0.12)',
                      color: '#047857',
                      flexShrink: 0,
                    }}
                  />
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2, pb: 2, pt: 0.25 }}>
                  <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>

          {/* Mesmo padrão visual de OutrosSection; imagem Lateral1 */}
          <div className="hidden md:block lg:col-span-1 relative overflow-hidden bg-slate-100 lg:sticky lg:top-28">
            <img
              alt=""
              src="/Lateral1.jpeg"
              className="h-90 w-full object-cover lg:h-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-slate-100 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-slate-100 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-100 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-100 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
