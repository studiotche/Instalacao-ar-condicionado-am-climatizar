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
    ogImage: "/images/lavanderia-ivoti-streetview.jpg",
  },
  assets: {
    storefront: "/images/lavanderia-ivoti-streetview.jpg",
    instagram: "/images/lavanderia-ivoti-instagram.jpg",
    instagramFeed: "/images/lavanderia-ivoti-instagram-feed.png",
  },
} as const;

export const services = [
  { id: "lavagem-roupas", imagePosition: "18% center", title: "Lavagem de roupas", text: "Roupas limpas, dobradas e cheirosas para deixar sua rotina mais prática.", query: "Lavagem de roupas" },
  { id: "tapetes-carpetes", imagePosition: "42% center", title: "Tapetes e carpetes", text: "Limpeza cuidadosa para renovar as peças e preservar suas cores e texturas.", query: "Tapetes e carpetes" },
  { id: "higienizacao-estofados", imagePosition: "66% center", title: "Higienização de estofados", text: "Cuidado profundo para sofás, poltronas e outros estofados da sua casa.", query: "Higienização de estofados" },
  { id: "lavagem-seco-tinturaria", imagePosition: "86% center", title: "Lavagem a seco e tinturaria", text: "Para roupas e tecidos especiais, com orientação sobre o melhor cuidado.", query: "Lavagem a seco e tinturaria" },
] as const;

export const processSteps = [
  ["Você traz ou chama", "Envie uma mensagem ou leve suas peças até a lavanderia."],
  ["Avaliamos cada peça", "A equipe orienta o cuidado adequado para cada material."],
  ["Lavamos e cuidamos", "Higienização, lavagem e acabamento conforme o serviço combinado."],
  ["Você recebe pronto", "Combine o prazo e retire tudo pronto para usar."],
] as const;

export const faqs = [
  ["Quais serviços a lavanderia oferece?", "As publicações do Instagram destacam higienização, impermeabilização, lavagem a seco, tinturaria e limpeza de roupas, estofados, tapetes, carpetes e colchões. A equipe confirma o cuidado indicado para cada peça."],
  ["Onde fica a Lavanderia Ivoti?", "Na Av. Pres. Lucena, 2084, bairro Concórdia, em Ivoti/RS, CEP 93900-000. O Plus Code é 9RVP+QW Concórdia, Ivoti - RS."],
  ["Qual é o contato?", "O WhatsApp divulgado nas publicações é (51) 99919-9846. O telefone listado no Google Maps é (51) 3563-6908."],
  ["Qual é o horário de atendimento?", "A referência pública encontrada indica segunda a sexta das 08:30 às 18:30, sábado das 08:30 às 12:00 e domingo fechado. Confirme antes de sair, pois o perfil do Google sinaliza que o cadastro precisa ser revisado."],
] as const;
