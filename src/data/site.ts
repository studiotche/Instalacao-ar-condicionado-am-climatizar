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
  phoneDisplayAlt: "(51) 99301-9846",
  phoneLinkAlt: "https://wa.me/5551993019846?text=Ol%C3%A1%2C%20Lavanderia%20Ivoti!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  googlePhoneDisplay: "(51) 3563-6908",
  googlePhoneLink: "tel:+555135636908",
  instagram: "https://www.instagram.com/lavanderia_ivoti/",
  googleProfile: "https://www.google.com/maps/place/Lavanderia+Ivoti/@-29.6055194,-51.1627442,945m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95194540c4744a09:0x3cee5cae859095c0!8m2!3d-29.6055194!4d-51.1627442!16s%2Fg%2F1ptw__92w",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.083758364233!2d-51.16531912446702!3d-29.60551937514781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194540c4744a09%3A0x3cee5cae859095c0!2sLavanderia%20Ivoti!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=-29.6055194,-51.1627442",
  rating: "4,6",
  socialStats: { followers: "2.333", posts: "40" },
  environmentalLicense: "Licença de Operação SMA Ivoti (Secretaria de Meio Ambiente)",
  freeDelivery: "Coleta e Entrega Grátis em Ivoti",
  hours: [
    { days: "Segunda a sexta", time: "08:30–18:30" },
    { days: "Sábado", time: "08:30–12:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  seo: {
    title: "Lavanderia Ivoti | Coleta e Entrega Grátis · Cuidado Profissional",
    description: "Lavanderia Ivoti: lavagem a seco, impermeabilização de estofados, tapetes, cortinas, tênis, linha pet, couro e rouparia hospitalar. Coleta e entrega grátis em Ivoti/RS.",
    url: "https://studiotche.github.io/lavanderia-ivoti/",
    ogImage: "/images/lavanderia-ivoti.webp",
  },
  assets: {
    hero: "/images/lavanderia-ivoti.webp",
    about: "/images/about-heritage.webp?v=2",
    institutional: "/images/lavanderia-ivoti-hero.webp",
    logo: "/images/logo-lavanderia-ivoti-hero.webp",
    logoFooter: "/images/logo-lavanderia-ivoti-footer.webp",
    storefront: "/images/lavanderia-ivoti.webp",
    instagram: "/images/lavanderia-ivoti-instagram.webp",
    instagramFeed: "/images/service-roupas.webp",
  },
} as const;

export const services = [
  { id: "lavagem-roupas", image: "/images/service-roupas.webp", icon: "/images/icon-roupas.webp", imagePosition: "center", title: "Lavagem de roupas & a seco", text: "Roupas do dia a dia, ternos, vestidos de festa e peças delicadas com lavagem a seco profissional.", query: "Lavagem de roupas e a seco" },
  { id: "higienizacao-estofados", image: "/images/service-estofados.webp", icon: "/images/icon-estofados.webp", imagePosition: "center", title: "Sofás & impermeabilização", text: "Higienização profunda de estofados e impermeabilização que repele líquidos e evita manchas.", query: "Higienização e impermeabilização de sofás" },
  { id: "tapetes-cortinas", image: "/images/service-tapetes.webp", icon: "/images/icon-tapetes.webp", imagePosition: "center", title: "Tapetes, persianas & cortinas", text: "Remoção completa de sujeiras, ácaros e odores preservando texturas, cores e tramas delicadas.", query: "Tapetes, persianas e cortinas" },
  { id: "tenis-calcados", image: "/images/service-calcados.webp", icon: "/images/icon-calcados.webp?v=2", imagePosition: "center", title: "Tênis & calçados em geral", text: "Higienização detalhada interna e externa, desodorização e revitalização para calçados de qualquer modelo.", query: "Limpeza de tênis e calçados" },
  { id: "linha-pet", image: "/images/service-pet.webp", icon: "/images/icon-pet.webp?v=2", imagePosition: "center", title: "Linha Pet especializada", text: "Caminhas, tapetes, roupinhas e mantas desinfetadas com produtos antialérgicos e seguros para pets.", query: "Higienização da Linha Pet" },
  { id: "couro-motoqueiro", image: "/images/service-couro.webp", icon: "/images/icon-couro.webp?v=2", imagePosition: "center", title: "Jaquetas de motoqueiro & couro", text: "Limpeza técnica e hidratação profunda para couro e jaquetas de motociclista com proteção UV.", query: "Limpeza de jaqueta de motoqueiro e couro" },
  { id: "passadoria", image: "/images/service-passadoria.webp", icon: "/images/icon-passadoria.webp", imagePosition: "center", title: "Passadoria profissional", text: "Acabamento impecável a vapor, dobradas ou no cabide. Praticidade total para a sua rotina.", query: "Passadoria profissional" },
  { id: "cortinas-persianas", image: "/images/service-cortinas.webp", icon: "/images/icon-cortinas.webp?v=2", imagePosition: "center", title: "Cortinas finas & persianas", text: "Lavagem especializada de cortinas com pregas, blackout, tecidos leves e persianas verticais e horizontais.", query: "Lavagem de cortinas e persianas" },
] as const;

export const aboutBenefits = [
  { icon: "/images/about-tradition.webp", alt: "Tradição", title: "Tradição e<br>cuidado local" },
  { icon: "/images/about-eco.webp", alt: "Licença Ambiental", title: "Licenciado pela<br>SMA Ivoti" },
  { icon: "/images/about-team.webp", alt: "Coleta e Entrega", title: "Coleta e entrega<br>grátis em Ivoti" },
  { icon: "/images/about-quality.webp", alt: "Qualidade", title: "Compromisso com<br>qualidade e prazos" },
] as const;

export const processSteps = [
  { title: "Coleta grátis no<br>seu endereço", text: "Buscamos suas peças na sua casa ou empresa sem custo de deslocamento, ou você entrega na loja.", icon: "/images/process-step1.webp", alt: "Sacola de Coleta" },
  { title: "Processos ecológicos<br>e seguros", text: "Equipamentos modernos e produtos certificados pela SMA Ivoti que preservam as fibras e o meio ambiente.", icon: "/images/process-step2.webp", alt: "Máquina de Lavar" },
  { title: "Higienização,<br>impermeabilização e ferro", text: "Cuidado artesanal, proteção contra líquidos e acabamento impecável para cada tipo de peça.", icon: "/images/process-step3.webp", alt: "Ferro a Vapor" },
  { title: "Entrega grátis com<br>pontualidade", text: "No prazo combinado, tudo embalado, cheiroso e pronto para uso direto no seu armário ou casa.", icon: "/images/process-step4.webp", alt: "Camisa Polo no Cabide" },
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
  ["A coleta e entrega tem custo adicional?", "Não! A Lavanderia Ivoti oferece serviço de coleta e entrega grátis em Ivoti. Basta nos chamar no WhatsApp que agendamos a retirada e entrega no seu endereço sem qualquer cobrança extra."],
  ["Quais serviços a lavanderia oferece?", "Realizamos lavagem de roupas (dia a dia e lavagem a seco), higienização e impermeabilização de sofás e estofados, limpeza de tapetes, cortinas e persianas, higienização de tênis e calçados, linha pet (caminhas e roupinhas), jaquetas de couro e motoqueiro, passadoria profissional e rouparia institucional."],
  ["Como funciona a impermeabilização de estofados?", "Após a higienização profunda do sofá ou poltrona, aplicamos uma resina impermeabilizante atóxica que cria uma película invisível repelente de líquidos (água, sucos, café). Em caso de derramamento, o líquido não penetra nas fibras e é facilmente removido com um pano seco."],
  ["A Lavanderia Ivoti possui licenciamento ambiental?", "Sim! A empresa é devidamente licenciada pela Secretaria de Meio Ambiente (SMA Ivoti), cumprindo rigorosamente as normas ambientais municipais com Licença de Operação ativa, produtos biodegradáveis e tratamento adequado."],
  ["Vocês lavam caminhas pet e tênis?", "Sim! Temos processos específicos para calçados esportivos e casuais (com desodorização e secagem controlada) e para a linha pet (utilizando produtos antibacterianos hipoalergênicos e seguros para os animais)."],
  ["Onde fica a lavanderia e quais os números de contato?", "Estamos localizados na Av. Pres. Lucena, 2084, bairro Concórdia, Ivoti/RS. Atendemos pelos WhatsApps (51) 99919-9846 e (51) 99301-9846, e pelo telefone fixo (51) 3563-6908."],
] as const;
