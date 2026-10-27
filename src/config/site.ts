// Todas as informações editáveis da confeitaria ficam aqui.
import trad from "@/assets/p-trad.jpg";
import doce from "@/assets/p-doce.jpg";
import nutella from "@/assets/p-nutella.jpg";
import especial from "@/assets/p-especial.jpg";

const defaultSiteUrl = "https://rdvid.github.io/nilabrownie";

export const site = {
  name: "Ateliê do Brownie", // [NOME DA CONFEITARIA]
  tagline: "Brownies artesanais feitos sob encomenda.",
  // Número com código do país + DDD, só dígitos. Ex.: 5511999999999
  whatsapp: "5511999999999",
  instagram: "", // ex.: "ateliedobrownie" (deixe vazio para ocultar)
  region: "", // ex.: "São Paulo — Zona Oeste" (deixe vazio para ocultar)
};

/** URL canônica de produção (sem barra final). Sobrescreva com VITE_SITE_URL no build. */
export const seo = {
  siteUrl:
    (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || defaultSiteUrl,
  title: "Ateliê do Brownie — Brownies artesanais sob encomenda",
  description:
    "Brownies artesanais feitos com carinho, sob encomenda. Escolha seus sabores e faça seu pedido pelo WhatsApp.",
  ogImagePath: "/og.jpg",
  ogImageAlt: "Brownies artesanais do Ateliê do Brownie",
};

export type Product = {
  name: string;
  description: string;
  price?: string; // ex.: "R$ 12,00" — vazio mostra "Consulte"
  image: string;
};

export const products: Product[] = [
  {
    name: "Brownie Tradicional",
    description: "Intenso sabor de chocolate e interior macio.",
    image: trad,
  },
  {
    name: "Brownie com Doce de Leite",
    description: "Combinação cremosa e irresistível.",
    image: doce,
  },
  {
    name: "Brownie com Nutella",
    description: "Uma opção generosa para quem ama chocolate.",
    image: nutella,
  },
  {
    name: "Brownie Especial",
    description: "Sabor sazonal ou edição especial do momento.",
    image: especial,
  },
];

export const faqs = [
  {
    q: "Como faço uma encomenda?",
    a: "É só chamar pelo WhatsApp, escolher os sabores e combinar quantidade, data e forma de retirada ou entrega.",
  },
  {
    q: "Quais sabores estão disponíveis?",
    a: "Os sabores podem variar. Entre em contato pelo WhatsApp para consultar as opções disponíveis.",
  },
  {
    q: "Qual é o prazo para encomendar?",
    a: "Entre em contato pelo WhatsApp para consultar prazos e disponibilidade.",
  },
  {
    q: "Vocês trabalham com kits para presente?",
    a: "Entre em contato pelo WhatsApp para consultar as opções e condições disponíveis.",
  },
  {
    q: "Como funcionam a entrega e a retirada?",
    a: "Os detalhes de entrega ou retirada são combinados diretamente pelo WhatsApp.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Entre em contato pelo WhatsApp para consultar as formas de pagamento.",
  },
];

export function whatsappLink(message: string, number: string = site.whatsapp) {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general: "Olá! Vim pelo site e gostaria de conhecer os brownies disponíveis.",
  order: "Olá! Gostaria de fazer uma encomenda de brownies.",
  product: (name: string) =>
    `Olá! Tenho interesse no ${name}. Poderia me passar os tamanhos, valores e disponibilidade?`,
};
