import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

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
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Projeto de Incêndio',
    description: 'Desenvolvimento e acompanhamento de projetos de prevenção e combate a incêndios.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Mapeamento de Riscos',
    description: 'Elaboração de mapas de risco em conjunto com a CIPA.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Análise de Riscos',
    description: 'Identificação, avaliação e recomendações para mitigação de riscos ocupacionais.',
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
    tag: 'Consultoria',
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
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Gestão de Trabalho em Altura',
    description: 'Implantação de processos e controles conforme NR 35.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Adequação NR 12',
    description: 'Assessoria para adequação de máquinas e equipamentos à NR 12.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Estatística de Acidentes',
    description: 'Implantação de controle e análise de indicadores de acidentes.',
    tag: 'Consultoria',
    accentColor: '#047857',
  },
  {
    title: 'Normas e Procedimentos',
    description: 'Elaboração e implantação de normas internas de segurança do trabalho.',
    tag: 'Consultoria',
    accentColor: '#047857',
  }
]

export default function OutrosSection() {
  return (
    <>
    <section className="relative h-150 flex items-center justify-end overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
            <img
                alt=""
                className="h-full w-full object-cover opacity-60"
                src="/Fundo3.jpeg"
            />
            <div className="absolute inset-0 bg-linear-to-b from-slate-100 via-slate-100/5 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-100 via-slate-100/5 to-transparent" />
        </div>
    </section>

    <section className="py-32 bg-slate-100" id="training">
        <div className="w-full min-w-0 max-w-full box-border px-5">
          <div className="mb-10">
            <h2 className="font-black text-3xl md:text-4xl text-start pl-4 text-slate-900 uppercase tracking-tight border-l-4 border-emerald-700">
              Outros <span className="text-emerald-700">Serviços</span>
            </h2>
            <p className="text-slate-600 text-start text-xl leading-relaxed italic border-l-4 border-emerald-700 pl-6 mt-3">
              Desenvolvemos competências críticas para garantir que sua equipe atue com segurança, responsabilidade e excelência operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {OUTROS_ITEMS.map((item) => (
              <Box key={item.title} sx={{ minWidth: 275 }}>
                <Card
                  variant="outlined"
                  className="editorial-shadow relative pb-5"
                  sx={{
                    height: '100%',
                    borderTop: `8px solid ${item.accentColor}`,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                >
                  <CardContent sx={{ flex: 1, py: 1, px: 1.5 }}>
                    <Typography gutterBottom variant="subtitle2" component="div" sx={{ fontWeight: 800 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </CardContent>

                  <Chip 
                    label={item.tag}
                    size="small"
                    sx={{
                        fontSize: 14, 
                        position: 'absolute',
                        bottom: 8,
                        left: 8,
                        height: 24,
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        bgcolor: 'rgba(16, 185, 129, 0.12)',
                        color: '#059669',
                        }}
                    />
                </Card>
              </Box>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}