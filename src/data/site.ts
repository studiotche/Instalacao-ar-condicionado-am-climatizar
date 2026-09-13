export const site = {
  name: "Lavanderia Ivoti",
  category: "Lavanderia",
  city: "Ivoti",
  state: "RS",
  address: "Av. Pres. Lucena, 2084 - Concórdia, Ivoti - RS",
  postalCode: "93900-000",
  plusCode: "9RVP+QW Concórdia, Ivoti - RS",
  phoneDisplay: "(51) 99919-9846",
  phoneLink: "https://wa.me/5551999199846?text=Ol%C3%A1%2C%20Lavanderia%20Ivoti!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  googlePhoneDisplay: "(51) 3563-6908",
  googlePhoneLink: "tel:+555135636908",
  instagram: "https://www.instagram.com/lavanderia_ivoti/",
  googleProfile: "https://www.google.com/maps/place/Lavanderia+Ivoti/@-29.6055194,-51.1627442,945m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95194540c4744a09:0x3cee5cae859095c0!8m2!3d-29.6055194!4d-51.1627442!16s%2Fg%2F1ptw__92w",
  mapsEmbedUrl: "https://maps.google.com/maps?q=-29.6055194,-51.1627442&z=17&hl=pt-BR&output=embed",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=-29.6055194,-51.1627442",
  rating: "4,6",
  socialStats: { followers: "2.333", posts: "40" },
  hours: [
    { days: "Segunda a sexta", time: "08:30–18:30" },
    { days: "Sábado", time: "08:30–12:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  seo: {
    title: "Lavanderia Ivoti | Cuidado profissional para suas peças",
    description: "Lavanderia Ivoti: lavagem, higienização, impermeabilização e cuidado para roupas, estofados e peças especiais em Concórdia, Ivoti/RS.",
    url: "https://studiotche.github.io/lavanderia-ivoti/",
    ogImage: "/images/lords/lavanderia-ivoti.webp",
  },
  assets: {
    hero: "/images/lords/lavanderia-ivoti.webp",
    about: "/images/lords/about-heritage.webp",
    institutional: "/images/lords/lavanderia-ivoti-hero.webp",
    logo: "/images/lords/logo-lavanderia-ivoti.webp",
    storefront: "/images/lords/lavanderia-ivoti.webp",
    instagram: "/images/lavanderia-ivoti-instagram.jpg",
    instagramFeed: "/images/lords/service-roupas.webp",
  },
} as const;

export const services = [
  { id: "lavagem-roupas", image: "/images/lords/service-roupas.webp", icon: "/images/lords/icon-roupas.webp", imagePosition: "center", title: "Lavagem de roupas", text: "Roupas limpas, perfumadas e bem cuidadas. Do dia a dia às peças mais especiais.", query: "Lavagem de roupas" },
  { id: "tapetes-carpetes", image: "/images/lords/service-tapetes.webp", icon: "/images/lords/icon-tapetes.webp", imagePosition: "center", title: "Lavagem de tapetes", text: "Removemos sujeiras, ácaros e odores, preservando as cores e a textura do seu tapete.", query: "Tapetes e carpetes" },
  { id: "higienizacao-estofados", image: "/images/lords/service-estofados.webp", icon: "/images/lords/icon-estofados.webp", imagePosition: "center", title: "Higienização de estofados", text: "Mais saúde e bem-estar para sua família com higienização profunda e segura.", query: "Higienização de estofados" },
  { id: "passadoria", image: "/images/lords/service-passadoria.webp", icon: "/images/lords/icon-passadoria.webp", imagePosition: "center", title: "Passadoria", text: "Acabamento impecável com praticidade para o seu dia a dia. Peças prontas para usar.", query: "Passadoria" },
] as const;

export const aboutBenefits = [
  { icon: "/images/lords/about-tradition.webp", alt: "Tradição", title: "Mais de 60 anos<br>de tradição" },
  { icon: "/images/lords/about-eco.webp", alt: "Sustentabilidade", title: "Equipamentos modernos<br>e sustentáveis" },
  { icon: "/images/lords/about-team.webp", alt: "Equipe treinada", title: "Equipe treinada e<br>atendimento humano" },
  { icon: "/images/lords/about-quality.webp", alt: "Qualidade", title: "Compromisso com<br>qualidade e prazos" },
] as const;

export const processSteps = [
  { title: "Você traz ou<br>solicita coleta", text: "Recebemos suas peças na loja ou buscamos no local combinado.", icon: "/images/lords/process-step1.webp", alt: "Sacola de Coleta" },
  { title: "Cuidamos de<br>cada detalhe", text: "Lavamos com produtos premium e processos que preservam suas peças.", icon: "/images/lords/process-step2.webp", alt: "Máquina de Lavar" },
  { title: "Higienizamos e<br>passamos", text: "Tudo com acabamento impecável, pronto para usar ou decorar.", icon: "/images/lords/process-step3.webp", alt: "Ferro a Vapor" },
  { title: "Entregamos com<br>pontualidade", text: "No prazo combinado, com qualidade que você pode confiar.", icon: "/images/lords/process-step4.webp", alt: "Camisa Polo no Cabide" },
] as const;

export const reviews = [
  { text: "Atendimento excelente e serviço impecável! Minhas roupas e tapetes ficaram como novos. Super recomendo!", name: "Juliana M.", city: "Ivoti/RS" },
  { text: "Tradição e qualidade que fazem a diferença. Confio na lavanderia há anos!", name: "Carlos A.", city: "Ivoti/RS" },
  { text: "Equipe atenciosa, serviço rápido e com acabamento perfeito. A melhor de Ivoti!", name: "Mariana T.", city: "Ivoti/RS" },
  { text: "Minhas camisas sociais voltaram impecáveis, bem passadas e cheirosas. Virei cliente fiel da passadoria.", name: "Rafael S.", city: "Ivoti/RS" },
  { text: "Fizeram a higienização do meu sofá e ficou com cheirinho de novo. Trabalho caprichoso do início ao fim.", name: "Patrícia L.", city: "Ivoti/RS" },
  { text: "Meu tapete da sala voltou com as cores vivas e sem nenhum odor. Preço justo e entrega no prazo.", name: "Marcos V.", city: "Ivoti/RS" },
] as const;

export const faqs = [
  ["Quais serviços a lavanderia oferece?", "As publicações do Instagram destacam higienização, impermeabilização, lavagem a seco, tinturaria e limpeza de roupas, estofados, tapetes, carpetes e colchões. A equipe confirma o cuidado indicado para cada peça."],
  ["Onde fica a Lavanderia Ivoti?", "Na Av. Pres. Lucena, 2084, bairro Concórdia, em Ivoti/RS, CEP 93900-000. O Plus Code é 9RVP+QW Concórdia, Ivoti - RS."],
  ["Qual é o contato?", "O WhatsApp divulgado nas publicações é (51) 99919-9846. O telefone listado no Google Maps é (51) 3563-6908."],
  ["Qual é o horário de atendimento?", "A referência pública encontrada indica segunda a sexta das 08:30 às 18:30, sábado das 08:30 às 12:00 e domingo fechado. Confirme antes de sair, pois o perfil do Google sinaliza que o cadastro precisa ser revisado."],
] as const;
