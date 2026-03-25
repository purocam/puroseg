import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OUTROS_ITEMS = [
  {
    title: 'Gestão eSocial SST',
    description: 'Envio e monitoramento dos eventos de SST (S-2210, S-2220 e S-2240) garantindo conformidade legal.',
    tag: 'Digital',
    accentColor: '#047857',
  },
  {
    title: 'Implantação de CIPA',
    description: 'Estruturação completa da CIPA e CIPATR.',
    tag: 'Implantação',
    accentColor: '#047857',
  },
  {
    title: 'Projeto de Incêndio',
    description: 'Desenvolvimento e acompanhamento de projetos de prevenção e combate a incêndios.',
    tag: 'Implantação',
    accentColor: '#047857',
  },
  {
    title: 'Mapeamento e Análise de Riscos',
    description: 'Elaboração de mapas de risco e identificação, avaliação e recomendações para mitigação de riscos ocupacionais.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Inspeção de Segurança',
    description: 'Inspeções periódicas nas áreas para garantir conformidade com normas de segurança.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'DDS - Diálogo Diário de Segurança',
    description: 'Implantação de práticas de DDS para prevenção de acidentes.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Sinalização de Segurança',
    description: 'Implantação e orientação de sinalização de segurança conforme normas vigentes.',
    tag: 'Implantação',
    accentColor: '#047857',
  },
  {
    title: 'Avaliações Quantitativas',
    description: 'Medição de agentes físicos e químicos no ambiente de trabalho.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Gestão de Espaço Confinado',
    description: 'Implantação completa conforme NR 33, incluindo procedimentos e segurança.',
    tag: 'Implantação',
    accentColor: '#047857',
  },
  {
    title: 'Gestão de Trabalho em Altura',
    description: 'Implantação de processos e controles conforme NR 35.',
    tag: 'Implantação',
    accentColor: '#047857',
  },
  {
    title: 'Estatística de Acidentes',
    description: 'Implantação de controle e análise de indicadores de acidentes.',
    tag: 'Implantação',
    accentColor: '#047857',
  },
  {
    title: 'Normas e Procedimentos',
    description: 'Elaboração e implantação de normas internas de segurança do trabalho.',
    tag: 'Implantação',
    accentColor: '#047857',
  }
]

export default function OutrosSection() {
  return (
    <>
    <section className="py-10 bg-slate-100" id="outros">
        <div className="w-full min-w-0 max-w-full box-border px-5">
          <div className="mb-10">
            <h2 className="font-black text-3xl md:text-4xl text-start pl-4 text-slate-900 uppercase tracking-tight border-l-4 border-emerald-700">
              Outros <span className="text-emerald-700">Serviços</span>
            </h2>
            <p className="text-slate-600 text-start text-xl leading-relaxed italic border-l-4 border-emerald-700 pl-6 mt-3">
              Desenvolvemos competências críticas para garantir que sua equipe atue com segurança, responsabilidade e excelência operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Coluna esquerda: accordion em coluna única */}
            <div className="flex flex-col gap-6">
              {OUTROS_ITEMS.map((item) => (
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

            {/* Coluna direita: imagem com glow */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-100 lg:sticky lg:top-28">
              <img
                alt=""
                src="/Lateral.jpeg"
                className="h-128 w-full object-cover lg:h-136"
              />
              {/* Mesma leitura do restante do site: slate-100 nas bordas */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-slate-100 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-slate-100 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-100 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-100 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}