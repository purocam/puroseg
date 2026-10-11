import SectionHeader from './ui/SectionHeader';
import ServiceCarousel from './ui/ServiceCarousel';

const TREINAMENTOS_IITEMS = [
  {
    title: 'NR 01',
    description: 'Capacitação introdutória sobre disposições gerais de segurança e saúde no trabalho.',
    tag: 'Treinamento',
    image: '/nrs/nr1.jpeg',
    imageAlt: 'Treinamento de integração em segurança do trabalho',
  },
  {
    title: 'NR 05 - CIPA',
    description: 'Formação e capacitação da CIPA para prevenção de acidentes e promoção da saúde ocupacional.',
    tag: 'Treinamento',
    image: '/nrs/nr5.jpeg',
    imageAlt: 'Equipe em treinamento de CIPA',
  },
  {
    title: 'NR 10 - Instalações Elétricas',
    description: 'Capacitação para segurança em instalações e serviços em eletricidade.',
    tag: 'Treinamento',
    image: '/nrs/nr10.jpg',
    imageAlt: 'Trabalho com eletricidade segura',
  },
  {
    title: 'NR 11 - Empilhadeira',
    description: 'Capacitação para operação segura de empilhadeiras.',
    tag: 'Treinamento',
    image: '/nrs/empilhadeira.jpg',
    imageAlt: 'Operador de empilhadeira',
  },
  {
    title: 'NR 11 - Munck e Ponte Rolante',
    description: 'Treinamento para operação segura de equipamentos de elevação de cargas.',
    tag: 'Treinamento',
    image: '/nrs/nr11.jpg',
    imageAlt: 'Operação de guindaste e ponte rolante',
  },
  {
    title: 'NR 11 - Pá Carregadeira',
    description: 'Treinamento para operação segura de pás-carregadeiras.',
    tag: 'Treinamento',
    image: '/nrs/pacarregadeira.jpg',
    imageAlt: 'Operação de pá carregadeira',
  },
  {
    title: 'NR 12',
    description: 'Capacitação em segurança no trabalho com máquinas e equipamentos.',
    tag: 'Treinamento',
    image: '/nrs/nr12.jpeg',
    imageAlt: 'Máquinas industriais com segurança',
  },
  {
    title: 'NR 18 - Integração',
    description: 'Integração de segurança para trabalhadores da construção civil.',
    tag: 'Treinamento',
    image: '/nrs/nr18.jpeg',
    imageAlt: 'Treinamento em obra',
  },
  {
    title: 'PTA - Plataforma Elevatória',
    description: 'Capacitação para operação segura de plataformas elevatórias.',
    tag: 'Treinamento',
    image: '/nrs/pta.jpg',
    imageAlt: 'Plataforma elevatória em uso',
  },
  {
    title: 'NR 20',
    description: 'Capacitação para trabalho com inflamáveis e combustíveis.',
    tag: 'Treinamento',
    image: '/nrs/nr20.jpeg',
    imageAlt: 'Manuseio de combustíveis',
  },
  {
    title: 'NR 31.12 - Segurança Agrícola',
    description: 'Capacitação em segurança no trabalho em máquinas e implementos agrícolas.',
    tag: 'Treinamento',
    image: '/nrs/nr3112.jpg',
    imageAlt: 'Trabalho rural seguro',
  },
  {
    title: 'NR 31.12.47 - Manutenção Agrícola',
    description: 'Capacitação em segurança na manutenção de máquinas agrícolas.',
    tag: 'Treinamento',
    image: '/nrs/nr311214.jpg',
    imageAlt: 'Manutenção agrícola segura',
  },
  {
    title: 'NR 31.7 - Agrotóxicos, Aditivos e Adjuvantes',
    description: 'Capacitação em segurança com agrotóxicos, aditivos, adjuvantes e afins.',
    tag: 'Treinamento',
    image: '/nrs/nr31.7.jpg',
    imageAlt: 'Trabalho rural seguro',
  },
  {
    title: 'NR 33 - Espaço Confinado',
    description: 'Capacitação para trabalho seguro em espaços confinados.',
    tag: 'Treinamento',
    image: '/nrs/nr33.jpg',
    imageAlt: 'Trabalho em espaço confinado',
  },
  {
    title: 'NR 34 - Trabalho a Quente',
    description: 'Capacitação para segurança em atividades industriais específicas, como trabalho a quente.',
    tag: 'Treinamento',
    image: '/nrs/nr34.jpg',
    imageAlt: 'Trabalho industrial com solda',
  },
  {
    title: 'NR 35 - Trabalho em Altura',
    description: 'Capacitação para execução de atividades em altura com segurança.',
    tag: 'Treinamento',
    image: '/nrs/nr35.jpg',
    imageAlt: 'Trabalho em altura com EPI',
  },
  {
    title: 'Brigada de Incêndio (NTCB 34)',
    description: 'Treinamento de brigada de incêndio para prevenção e combate a emergências.',
    tag: 'Treinamento',
    image: '/nrs/ntcb34.jpg',
    imageAlt: 'Equipe de brigada de incêndio',
  },
  {
    title: 'Responsabilidade Civil e Criminal',
    description: 'Treinamento sobre responsabilidades legais relacionadas à segurança do trabalho.',
    tag: 'Treinamento',
    image: '/nrs/leis.jpeg',
    imageAlt: 'Treinamento jurídico corporativo',
  },
];

export default function TreinamentosSection() {
  return (
    <>

      <section className="bg-surface py-14 md:py-20" id="training">
        <div className="mx-auto w-full max-w-7xl px-5">
          <SectionHeader
            eyebrow="Treinamentos Especializados"
            title="Treinamentos & Capacitação"
            description="Desenvolvemos competências críticas para garantir que sua equipe atue com segurança, responsabilidade e excelência operacional."
          />
          <ServiceCarousel items={TREINAMENTOS_IITEMS} autoPlay />
        </div>
      </section>
    </>
  );
}
