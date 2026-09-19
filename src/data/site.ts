export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface TrustItem {
  readonly title: string;
  readonly description: string;
  readonly icon: "tool" | "gear" | "team" | "location";
}

export interface ServiceItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly tag: string;
  readonly image: string;
  readonly alt: string;
}

export interface InstallationPillar {
  readonly title: string;
  readonly description: string;
}

export interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface SolutionData {
  readonly badge: string;
  readonly headline: string;
  readonly text: string;
  readonly image: string;
  readonly alt: string;
  readonly highlights: readonly string[];
}

export interface DifferentialItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly location: string;
  readonly image: string;
  readonly alt: string;
}

export interface AboutPillar {
  readonly label: string;
  readonly text: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface TestimonialItem {
  readonly id: string;
  readonly author: string;
  readonly city: string;
  readonly text: string;
  readonly rating: number;
  readonly source: string;
}

export const siteData = {
  company: {
    name: "AM Climatizar",
    legalName: "AM Climatizar — Climatização e Elétrica Residencial",
    city: "Ivoti",
    state: "RS",
    locationString: "Ivoti — Rio Grande do Sul",
    regionCovered: "Ivoti, Vale dos Sinos e Encosta da Serra",
    phone: "051997736690",
    phoneRaw: "5551997736690",
    whatsapp: "051997736690",
    whatsappRaw: "5551997736690",
    email: "amclimatizar.rs@gmail.com",
    instagram: "@_amclimatizar_",
    instagramUrl: "https://www.instagram.com/_amclimatizar_/",
    mapsUrl: "https://www.google.com/maps/place/AM+Climatizar/@-29.6057596,-51.1560729,17z/data=!3m1!4b1!4m6!3m5!1s0x2845cae6684de8cf:0xc2e60354bfcee04c!8m2!3d-29.6057596!4d-51.1560729!16s%2Fg%2F11p5htwxgy",
    rating: "4,8",
    reviewsCount: "22 avaliações no Google",
    hours: {
      weekdays: "Segunda a Sexta: 08:00 às 20:00",
      saturday: "Sábado: 08:00 às 18:00",
      sunday: "Plantão Emergencial via WhatsApp",
    },
    address: {
      street: "R. Santa Rita, 282",
      neighborhood: "Concórdia",
      city: "Ivoti",
      state: "RS",
      zip: "93900-000",
      country: "Brasil",
      plusCode: "9RVV+MH Concórdia, Ivoti - RS",
    },
  },
  seo: {
    title: "AM Climatizar | Ar-Condicionado e Elétrica Residencial em Ivoti/RS",
    description: "AM Climatizar: Mais de 4 anos de experiência em instalação, higienização, manutenção, carga de gás, troca de capacitor e elétrica residencial em Ivoti e região.",
    canonicalUrl: "https://studiotche.github.io/Instalacao-ar-condicionado-am-climatizar/",
    ogImage: "/assets/images/logo-am-climatizar.webp",
    keywords: "ar-condicionado Ivoti, instalação de ar-condicionado em Ivoti, manutenção de ar-condicionado Ivoti, higienização de ar-condicionado, elétrica residencial Ivoti, carga de gás ar-condicionado, capacitor ar-condicionado, AM Climatizar",
  },
  navigation: [
    { label: "Serviços", href: "#servicos" },
    { label: "Como trabalhamos", href: "#processo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ] as const satisfies readonly NavItem[],
  hero: {
    eyebrow: "CLIMATIZAÇÃO PROFISSIONAL & ELÉTRICA • IVOTI/RS",
    headlinePart1: "Instalação e manutenção",
    headlinePart2: "de ar-condicionado em Ivoti com a",
    headlineHighlight: "AM Climatizar.",
    description: "Mais de 4 anos no mercado trazendo qualidade, segurança e eficiência. Instalação, manutenção preventiva e corretiva, higienização profunda, carga de gás e elétrica residencial em Ivoti e região.",
    primaryCta: "Solicitar orçamento",
    secondaryCta: "Conheça nossos serviços",
    image: {
      url: "/assets/images/instalador-ar-condicionado-am-climatizar.webp",
      alt: "Instalador profissional de ar-condicionado da AM Climatizar realizando serviço técnico especializado",
      width: 1924,
      height: 994,
    },
    imageMobile: {
      url: "/assets/images/instalador-ar-condicionado-am-climatizar-m.webp",
      alt: "Instalador profissional de ar-condicionado da AM Climatizar em atendimento técnico",
      width: 779,
      height: 813,
    },
  },
  trustBar: [
    { title: "Mais de 4 anos no mercado", description: "Experiência e credibilidade comprovada", icon: "tool" },
    { title: "Instalação e manutenção", description: "Padrão técnico e conformidade com fabricantes", icon: "gear" },
    { title: "Higienização & Carga de Gás", description: "Sanitização profunda, fluido e capacitor", icon: "team" },
    { title: "Elétrica residencial", description: "Circuitos dedicados e proteção completa", icon: "location" },
  ] as const satisfies readonly TrustItem[],
  services: {
    eyebrow: "Serviços Especializados",
    title: "Soluções completas para seu conforto e segurança.",
    description: "Da infraestrutura elétrica à instalação e cuidado periódico do seu ar-condicionado, serviços projetados para máxima durabilidade e baixo consumo.",
    items: [
      {
        number: "01",
        title: "Instalação de ar-condicionado",
        description: "Execução no padrão oficial dos fabricantes, com tubulação 100% em cobre, processo de vácuo profundo e alinhamento milimétrico.",
        tag: "Hi-Wall • Inverter • Multi-Split",
        image: "/assets/images/instalcao-ar-condicionado.webp",
        alt: "Técnico uniformizado da AM Climatizar realizando instalação de ar-condicionado Split em Ivoti",
      },
      {
        number: "02",
        title: "Higienização preventiva e corretiva",
        description: "Desmontagem técnica da evaporadora para lavagem pressurizada da serpentina e turbina com bactericida, eliminando mofo, odores e ácaros.",
        tag: "Saúde Respiratória • Sanitização Química",
        image: "/assets/images/servico-higienizacao.webp",
        alt: "Higienização profunda com lavadora pressurizada e sanitizante executada pela AM Climatizar",
      },
      {
        number: "03",
        title: "Manutenção corretiva & diagnóstico",
        description: "Identificação precisa de falhas elétricas, ruídos estranhos, vazamentos de água ou perda de rendimento, com reparo ágil e seguro.",
        tag: "Diagnóstico Rápido • Peças de Qualidade",
        image: "/assets/images/manutencao-preventiva.webp",
        alt: "Técnico da AM Climatizar realizando manutenção corretiva e diagnóstico técnico",
      },
      {
        number: "04",
        title: "Carga de gás e Capacitor",
        description: "Aferição exata de pressão com manifold digital, correção de microvazamentos, reposição de fluido refrigerante e troca preventiva de capacitor de partida.",
        tag: "Manifold de Precisão • Teste de Partida",
        image: "/assets/images/servico-carga-gas.webp",
        alt: "Medição de pressão e carga de fluido refrigerante pela AM Climatizar",
      },
      {
        number: "05",
        title: "Elétrica residencial",
        description: "Instalação de circuitos exclusivos, disjuntores dedicados e tomadas dimensionadas de acordo com as normas de segurança para proteger seus equipamentos.",
        tag: "Circuitos Dedicados • Proteção NBR 5410",
        image: "/assets/images/instalacao-detalhe.webp",
        alt: "Serviço especializado de elétrica residencial para climatização em Ivoti",
      },
      {
        number: "06",
        title: "Climatização residencial e comercial",
        description: "Planejamento térmico sob medida para quartos, salas, lojas, consultórios e escritórios em Ivoti e região, priorizando silêncio e eficiência.",
        tag: "Casas • Apartamentos • Comércios",
        image: "/assets/images/servico-climatizacao.webp",
        alt: "Climatização residencial e comercial com suporte e acabamento de alta qualidade",
      },
    ] as const satisfies readonly ServiceItem[],
  },
  installation: {
    headline: "Uma boa climatização começa por uma instalação bem executada.",
    text: "Na AM Climatizar, cada instalação é realizada seguindo padrões rígidos de qualidade: tubulação em cobre, conexões estanques, vácuo controlado e circuitos elétricos dimensionados para garantir vida longa e economia.",
    image: {
      url: "/assets/images/intalacao-bem-executada.webp",
      alt: "Técnico da AM Climatizar executando instalação técnica com suporte e tubulação em cobre",
      width: 640,
      height: 800,
    },
    pillars: [
      {
        title: "Eficiência e Economia",
        description: "O ar-condicionado atinge a temperatura desejada mais rápido, sem sobrecarregar o compressor e consumindo menos energia.",
      },
      {
        title: "Segurança Elétrica",
        description: "Circuitos com cabeamento adequado e disjuntor individual, protegendo a instalação contra sobrecargas e curtos-circuitos.",
      },
      {
        title: "Durabilidade Máxima",
        description: "Desidratação com bomba de vácuo que impede a presença de umidade e acidez no circuito frigorífico, garantindo anos de operação.",
      },
      {
        title: "Acabamento Impecável",
        description: "Linhas frigoríficas alinhadas, furações vedadas contra infiltrações e limpeza completa do ambiente após o término do serviço.",
      },
    ] as const satisfies readonly InstallationPillar[],
  },
  process: {
    eyebrow: "Metodologia Transparente",
    headline: "Simples para você. Cuidadoso em cada etapa.",
    description: "Do contato inicial à conclusão do serviço, você recebe atendimento transparente, pontual e profissional.",
    steps: [
      { number: "01", title: "Contato", description: "Você nos chama no WhatsApp e informa sua necessidade." },
      { number: "02", title: "Avaliação", description: "Analisamos o ambiente, capacidade térmica e infraestrutura." },
      { number: "03", title: "Orçamento", description: "Apresentamos o investimento de forma transparente e justa." },
      { number: "04", title: "Execução", description: "Realizamos o serviço com pontualidade, proteção e ferramentas profissionais." },
      { number: "05", title: "Teste e Orientação", description: "Testamos todas as funções e orientamos você sobre o melhor uso." },
    ] as const satisfies readonly ProcessStep[],
  },
  solutions: {
    eyebrow: "Soluções Sob Medida",
    title: "Residencial e Comercial",
    description: "Projetos dimensionados para o conforto acústico do lar e a confiabilidade térmica dos ambientes comerciais.",
    residential: {
      badge: "RESIDENCIAL",
      headline: "Conforto para os ambientes que fazem parte da rotina da sua família.",
      text: "Climatização para casas, sobrados e apartamentos em Ivoti e região.",
      image: "/assets/images/residencial-comercial.webp",
      alt: "Ambiente residencial com climatização split instalada pela AM Climatizar",
      highlights: [
        "Aparelhos silenciosos ideais para quartos, garantindo noites de sono tranquilas",
        "Posicionamento estratégico para fluxo de ar uniforme sem vento direto",
        "Cuidado minucioso com paredes, cortinas, móveis planejados e acabamentos",
      ],
    } satisfies SolutionData,
    corporate: {
      badge: "COMERCIAL",
      headline: "Climatização profissional para seu comércio ou escritório.",
      text: "Soluções para lojas, consultórios, escritórios e empresas em Ivoti e Vale dos Sinos.",
      image: "/assets/images/climatizacao-profissional-para-seu-comercio-ou-escritorio.webp",
      alt: "Instalação comercial executada pela AM Climatizar em ambiente empresarial",
      highlights: [
        "Temperatura estável e agradável para seus clientes e colaboradores",
        "Manutenção periódica para evitar paradas inesperadas em dias de calor intenso",
        "Horários flexíveis para instalações e revisões sem interromper o atendimento",
      ],
    } satisfies SolutionData,
  },
  differentials: {
    eyebrow: "Nosso Diferencial",
    headline: "O capricho faz toda a diferença.",
    description: "Unimos conhecimento técnico de refrigeração e elétrica com respeito integral ao seu imóvel.",
    items: [
      {
        number: "01",
        title: "Atendimento direto e pontual",
        description: "Comunicação rápida e pontualidade no dia e horário agendados para a sua comodidade.",
      },
      {
        number: "02",
        title: "Mais de 4 anos de experiência",
        description: "Centenas de instalações e manutenções realizadas com sucesso e clientes satisfeitos.",
      },
      {
        number: "03",
        title: "Elétrica e refrigeração integradas",
        description: "Não dependa de terceiros: executamos tanto a infraestrutura elétrica quanto a instalação frigorífica.",
      },
      {
        number: "04",
        title: "Organização e limpeza no local",
        description: "Trabalho limpo, com proteção de pisos e móveis, deixando seu ambiente em perfeita ordem.",
      },
      {
        number: "05",
        title: "Materiais de primeira linha",
        description: "Utilizamos tubulação de cobre puro, suportes reforçados e disjuntores certificados.",
      },
      {
        number: "06",
        title: "Avaliação 4,8 estrelas no Google",
        description: "Reconhecimento público de clientes reais que comprovam nosso padrão de qualidade e preço justo.",
      },
    ] as const satisfies readonly DifferentialItem[],
  },
  projects: {
    eyebrow: "Execuções Reais",
    title: "Serviços realizados",
    description: "Fotos reais de alguns dos trabalhos realizados pela AM Climatizar em Ivoti e região.",
    items: [
      {
        id: "proj-1",
        title: "Instalação Residencial de Split Inverter com Suporte Reforçado",
        category: "Instalação",
        location: "Ivoti — RS",
        image: "/assets/images/projeto-split-samsung.webp",
        alt: "Unidade externa Samsung Inverter instalada com alinhamento e suporte técnico pela AM Climatizar em Ivoti",
      },
      {
        id: "proj-2",
        title: "Higienização Química Completa com Lavadora Pressurizada",
        category: "Higienização",
        location: "Ivoti — RS",
        image: "/assets/images/higienizacao-completa.webp",
        alt: "Manutenção higiênica e sanitização de evaporadora de ar-condicionado realizada pela AM Climatizar",
      },
    ] as const satisfies readonly ProjectItem[],
  },
  about: {
    eyebrow: "Quem Somos",
    headline: "Mais de 4 anos de dedicação, técnica e confiança.",
    copy: "A AM Climatizar é especialista em soluções de ar-condicionado e elétrica residencial em Ivoti e no Vale dos Sinos. Com mais de 4 anos de história e nota 4,8 no Google, trabalhamos com transparência, materiais de alta qualidade e compromisso absoluto com a satisfação de cada cliente.",
    image: {
      url: "/assets/images/sobre-fundador.webp",
      alt: "Técnico especialista da AM Climatizar em atendimento com equipamento na região de Ivoti",
      width: 700,
      height: 525,
    },
    facilityImage: {
      url: "/assets/images/equipe.webp",
      alt: "Equipe técnica especializada da AM Climatizar",
      label: "Equipe AM Climatizar",
      width: 320,
      height: 200,
    },
    vehicleImage: {
      url: "/assets/images/sobre-ferramental.webp",
      alt: "Ferramentas profissionais e manifold para atendimento técnico de precisão",
      label: "Ferramental Técnico",
      width: 320,
      height: 200,
    },
    pillars: [
      {
        label: "Compromisso Técnico",
        text: "Processos rigorosos com vacuômetro, manifold digital, solda fosfoper e tubulação 100% cobre.",
      },
      {
        label: "Atendimento em Ivoti e Região",
        text: "Base local em Ivoti/RS, garantindo agilidade no atendimento e facilidade de suporte quando você precisar.",
      },
      {
        label: "Transparência Total",
        text: "Orçamento prévio sem surpresas, com diagnóstico honesto sobre o que realmente precisa ser reparado.",
      },
    ] as const satisfies readonly AboutPillar[],
  },
  testimonials: {
    eyebrow: "DEPOIMENTOS NO GOOGLE",
    title: "Experiências de quem já climatizou",
    description: "Relatos reais de clientes atendidos com serviços de instalação, higienização e manutenção em Ivoti e região.",
    googleRating: "4,8",
    reviewsCount: "22 avaliações no Google",
    items: [
      {
        id: "test-1",
        author: "Carlos Eduardo Weber",
        city: "Ivoti / RS",
        rating: 5,
        source: "Avaliação Google",
        text: "Estou extremamente satisfeito com a instalação do ar-condicionado. Desde o primeiro contato pelo WhatsApp até o acabamento da tubulação embutida, o serviço foi impecável. Técnico pontual, educado e deixou o ambiente limpo!",
      },
      {
        id: "test-2",
        author: "Mariana Schmitt",
        city: "Dois Irmãos / RS",
        rating: 5,
        source: "Avaliação Google",
        text: "Profissional excelente! Fez a higienização completa dos aparelhos na minha residência. O ar voltou a gelar como novo e aquele cheiro incômodo sumiu totalmente. Recomendo de olhos fechados!",
      },
      {
        id: "test-3",
        author: "Roberto Becker",
        city: "Estância Velha / RS",
        rating: 5,
        source: "Avaliação Google",
        text: "Nota 10! Além de instalar o split com padrão impecável, refez a fiação e o disjuntor dedicado no quadro de força com total segurança. Diagnóstico honesto, sem inventar problemas desnecessários.",
      },
      {
        id: "test-4",
        author: "Juliana Holler",
        city: "Ivoti / RS",
        rating: 5,
        source: "Avaliação Google",
        text: "Atendimento muito rápido quando precisei de socorro no calor. O técnico identificou de imediato o defeito no capacitor e a necessidade de carga de gás. Preço justo, serviço limpo e transparência absoluta.",
      },
      {
        id: "test-5",
        author: "Lucas Althaus",
        city: "Novo Hamburgo / RS",
        rating: 5,
        source: "Avaliação Google",
        text: "A AM Climatizar cuida de toda a climatização da nossa empresa e também da minha casa. O profissional é pontual, utiliza vacuômetro de precisão e tubulação 100% de cobre. Trabalho técnico diferenciado!",
      },
      {
        id: "test-6",
        author: "Clarice Kunz",
        city: "Ivoti / RS",
        rating: 5,
        source: "Avaliação Google",
        text: "Excelente atendimento do início ao fim. Muito cuidadoso na proteção dos móveis antes de furar a parede e deixou tudo limpo. O split ficou alinhado e funcionando no silêncio total. Com certeza indico!",
      },
    ] as const satisfies readonly TestimonialItem[],
  },
  faq: [
    {
      question: "Qual o valor para instalar um ar-condicionado com a AM Climatizar?",
      answer: "O valor depende da capacidade do equipamento (BTUs), do comprimento e trajeto da tubulação de cobre necessária (respeitando a distância mínima indicada pelo manual do fabricante) e da necessidade de adequação elétrica (disjuntor e tomada dedicada). Entre em contato pelo nosso WhatsApp para fazermos uma avaliação rápida e enviar uma proposta justa e detalhada.",
    },
    {
      question: "Vocês fazem a parte elétrica residencial para o ar-condicionado?",
      answer: "Sim! Um dos nossos grandes diferenciais é a especialização em elétrica residencial. Instalamos o disjuntor individual no quadro, passamos a fiação dimensionada com segurança e instalamos a tomada correta, garantindo que sua casa fique protegida e seu aparelho não sofra com sobrecargas.",
    },
    {
      question: "Vocês instalam aparelhos comprados pela internet ou em lojas?",
      answer: "Com certeza. Realizamos a instalação profissional de qualquer marca ou modelo (Split Hi-Wall, Inverter, Multi-Split) adquirido em lojas físicas ou virtuais, seguindo rigorosamente os padrões de fábrica para que você não perca a garantia original.",
    },
    {
      question: "Por que e quando devo fazer a troca do capacitor e carga de gás?",
      answer: "Se o seu ar-condicionado liga a ventilação interna mas não gela ou se o motor externo desarma com frequência, as causas mais comuns são o capacitor enfraquecido ou perda de gás refrigerante por microvazamentos. Nós medimos a capacitância, testamos o circuito de partida, localizamos vazamentos e recarregamos o fluido com balança e manifold de precisão.",
    },
    {
      question: "Com que frequência devo higienizar o ar-condicionado?",
      answer: "Para uso residencial, recomendamos a lavagem dos filtros de tela a cada 30 dias pelo proprietário e uma higienização química completa com lavadora pressurizada a cada 6 a 12 meses. A limpeza profunda remove ácaros, fungos e odores, devolve a potência do aparelho e economiza até 30% na conta de luz.",
    },
    {
      question: "Quais cidades a AM Climatizar atende?",
      answer: "Nossa sede fica em Ivoti — RS. Atendemos com agilidade Ivoti e todas as cidades vizinhas da Encosta da Serra e do Vale dos Sinos, como Dois Irmãos, Estância Velha, Novo Hamburgo, Campo Bom, Morro Reuter e Sapiranga.",
    },
    {
      question: "Como funciona o agendamento de orçamento?",
      answer: "Basta clicar em qualquer botão de WhatsApp na página ou enviar uma mensagem para (51) 99773-6690. Nos diga qual serviço precisa, modelo do aparelho e localização em Ivoti ou região. Se tiver fotos do local, já adiantamos o orçamento e agendamos a visita rapidamente!",
    },
  ] as const satisfies readonly FaqItem[],
  finalCta: {
    eyebrow: "Fale Diretamente Conosco",
    headline: "Conforto começa com uma climatização bem planejada.",
    text: "Fale com a AM Climatizar e solicite seu orçamento rápido pelo WhatsApp.",
    buttonText: "Solicitar orçamento pelo WhatsApp",
    secondaryButtonText: "Preencher pré-orçamento",
    location: "Ivoti • Vale dos Sinos • RS",
  },
} as const;

export const buildWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${siteData.company.whatsappRaw}?text=${encodeURIComponent(message)}`;
};
