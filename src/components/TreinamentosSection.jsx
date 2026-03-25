import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const TREINAMENTOS_IITEMS = [
  {
    title: 'NR 01',
    description: 'Capacitação introdutória sobre disposições gerais de segurança e saúde no trabalho.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr01.jpg',
    imageAlt: 'Treinamento de integração em segurança do trabalho',
  },
  {
    title: 'CIPA (NR 05)',
    description: 'Formação e capacitação da CIPA para prevenção de acidentes e promoção da saúde ocupacional.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/cipa.jpg',
    imageAlt: 'Equipe em treinamento de CIPA',
  },
  {
    title: 'NR 10',
    description: 'Capacitação para segurança em instalações e serviços em eletricidade.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr10.jpg',
    imageAlt: 'Trabalho com eletricidade segura',
  },
  {
    title: 'NR 11 - Empilhadeira',
    description: 'Capacitação para operação segura de empilhadeiras.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nrs/empilhadeira.jpg',
    imageAlt: 'Operador de empilhadeira',
  },
  {
    title: 'NR 11 - Munck e Ponte Rolante',
    description: 'Treinamento para operação segura de equipamentos de elevação de cargas.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nrs/nr11.jpg',
    imageAlt: 'Operação de guindaste e ponte rolante',
  },
  {
    title: 'NR 11 - Pá Carregadeira',
    description: 'Treinamento para operação segura de pás-carregadeiras.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nrs/pacarregadeira.jpg',
    imageAlt: 'Operação de guindaste e ponte rolante',
  },
  {
    title: 'NR 12',
    description: 'Capacitação em segurança no trabalho com máquinas e equipamentos.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr12.jpg',
    imageAlt: 'Máquinas industriais com segurança',
  },
  {
    title: 'NR 18 - Integração',
    description: 'Integração de segurança para trabalhadores da construção civil.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr18.jpg',
    imageAlt: 'Treinamento em obra',
  },
  {
    title: 'PTA - Plataforma Elevatória',
    description: 'Capacitação para operação segura de plataformas elevatórias.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nrs/pta.jpg',
    imageAlt: 'Plataforma elevatória em uso',
  },
  {
    title: 'NR 20',
    description: 'Capacitação para trabalho com inflamáveis e combustíveis.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr20.jpg',
    imageAlt: 'Manuseio de combustíveis',
  },
  {
    title: 'NR 31.12',
    description: 'Capacitação em segurança no trabalho rural.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr31.jpg',
    imageAlt: 'Trabalho rural seguro',
  },
  {
    title: 'NR 31.12.47',
    description: 'Capacitação em segurança no trabalho rural.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr31.jpg',
    imageAlt: 'Trabalho rural seguro',
  },
  {
    title: 'NR 31.7 - Agrotóxicos, Aditivos e Adjuvantes',
    description: 'Capacitação em segurança com agrotóxicos, aditivos, adjuvantes e afins.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nrs/nr31.7.jpg',
    imageAlt: 'Trabalho rural seguro',
  },
  {
    title: 'NR 33 - Espaço Confinado',
    description: 'Capacitação para trabalho seguro em espaços confinados.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr33.jpg',
    imageAlt: 'Trabalho em espaço confinado',
  },
  {
    title: 'NR 34 - Trabalho a Quente',
    description: 'Capacitação para segurança em atividades industriais específicas, como trabalho a quente.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: 'nrs/nr34.jpg',
    imageAlt: 'Trabalho industrial com solda',
  },
  {
    title: 'NR 35 - Trabalho em Altura',
    description: 'Capacitação para execução de atividades em altura com segurança.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/nr35.jpg',
    imageAlt: 'Trabalho em altura com EPI',
  },
  {
    title: 'Brigada de Incêndio (NTCB 34)',
    description: 'Treinamento de brigada de incêndio para prevenção e combate a emergências.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: 'nrs/ntcb34.jpg',
    imageAlt: 'Equipe de brigada de incêndio',
  },
  {
    title: 'Direção Defensiva',
    description: 'Capacitação para condução segura e prevenção de acidentes no trânsito.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/direcao.jpg',
    imageAlt: 'Motorista dirigindo com segurança',
  },
  {
    title: 'Responsabilidade Civil e Criminal',
    description: 'Treinamento sobre responsabilidades legais relacionadas à segurança do trabalho.',
    tag: 'Treinamento',
    accentColor: '#047857',
    image: '/responsabilidade.jpg',
    imageAlt: 'Treinamento jurídico corporativo',
  }
]

export default function TreinamentosSection() {
  return (
    <>
      <section className="relative h-150 flex items-center justify-end overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="h-full w-full object-cover opacity-60"
            src="/Fundo2.jpg"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-100 via-slate-100/5 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-100 via-slate-100/5 to-transparent" />
        </div>

        <div className="relative z-10 box-border flex w-full min-w-0 max-w-full justify-end px-5">
          <div className="shadow-lg shadow-neutral-900/50 max-w-2xl bg-white/10 p-12 text-left text-white backdrop-blur-lg border border-white/20 rounded-2xl">
            <h3 className="mb-6 text-4xl font-black text-slate-900">Educação que salva vidas</h3>
            <p className="text-xl leading-relaxed text-slate-800">
              Nossa metodologia de treinamento vai além da teoria, focando no comportamento seguro e na prevenção proativa de acidentes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-100" id="training">
        <div className="w-full min-w-0 max-w-full box-border px-5">
          <div className="mb-10">
            <h2 className="font-black text-3xl md:text-4xl text-start pl-4 text-slate-900 uppercase tracking-tight border-l-4 border-emerald-700">
              Treinamentos & <span className="text-emerald-700">Capacitação</span>
            </h2>
            <p className="text-slate-600 text-start text-xl leading-relaxed italic border-l-4 border-emerald-700 pl-6 mt-3">
              Desenvolvemos competências críticas para garantir que sua equipe atue com segurança, responsabilidade e excelência operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {TREINAMENTOS_IITEMS.map((item) => (
              <Card
                key={item.title}
                className="editorial-shadow"
                sx={{
                  width: '100%',
                  aspectRatio: '3 / 4',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: `8px solid ${item.accentColor}`,
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <CardActionArea
                  component="a"
                  href="#training"
                  sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.imageAlt}
                    sx={{
                      height: 'auto',
                      aspectRatio: '16 / 9',
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flex: 1, py: 1.25, px: 1.5 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 800 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Box
                  sx={{
                    px: 1.5,
                    pb: 1.5,
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
                      bgcolor: 'rgba(37, 99, 235, 0.12)',
                      color: '#2563eb',
                    }}
                  />
                  <OpenInNewIcon sx={{ fontSize: 22, color: 'rgba(37, 99, 235, 0.35)' }} aria-hidden />
                </Box>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
