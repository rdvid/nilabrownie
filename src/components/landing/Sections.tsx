import { HandHeart, Gift, MessageCircle, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import banner from "@/assets/banner.jpg";
import gift from "@/assets/g-gift.jpg";
import prep from "@/assets/g-prep.jpg";
import trad from "@/assets/p-trad.jpg";
import nutella from "@/assets/p-nutella.jpg";
import { products, faqs, messages, site, whatsappLink } from "@/config/site";
import { Reveal, SectionTitle, WaLink, WhatsAppIcon } from "./shared";

export function Hero() {
  return (
    <section id="inicio" className="grain overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:grid-cols-12 md:px-8 md:pb-24">
        <div className="md:col-span-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Confeitaria artesanal
          </p>
          <h1 className="text-5xl font-light leading-[0.98] sm:text-6xl lg:text-7xl">
            Pequenos pedaços de felicidade.{" "}
            <em className="font-normal text-accent">Muito chocolate</em> em cada mordida.
          </h1>
          <p className="mt-7 max-w-md text-lg text-muted-foreground">
            Brownies artesanais, feitos com carinho para transformar qualquer momento em uma ocasião
            especial.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WaLink message={messages.general}>
              <WhatsAppIcon /> Quero meu brownie
            </WaLink>
            <a
              href="#cardapio"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/30 px-7 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Conhecer o cardápio
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[
              "Produção artesanal",
              "Feitos sob encomenda",
              "Ideais para presentear e compartilhar",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative md:col-span-6">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img
              src={hero}
              width={1200}
              height={1408}
              alt="Pilha de brownies artesanais com casquinha brilhante e interior úmido"
              className="aspect-[4/5] w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-card px-6 py-4 shadow-[var(--shadow-soft)] sm:block">
            <p className="font-display text-lg italic">Feito à mão,</p>
            <p className="text-sm text-muted-foreground">um pedido de cada vez.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductShowcase() {
  return (
    <section id="cardapio" className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Cardápio"
            title="Feitos para despertar desejos."
            subtitle="Descubra seu próximo brownie favorito."
          />
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120} className={i % 2 === 1 ? "sm:mt-20" : ""}>
              <article className="group">
                <div className="overflow-hidden rounded-[1.75rem]">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={912}
                    height={1104}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl">{p.name}</h3>
                    <p className="mt-2 text-muted-foreground">{p.description}</p>
                  </div>
                  <p className="shrink-0 pt-2 text-sm font-semibold text-accent">
                    {p.price || "Consulte"}
                  </p>
                </div>
                <WaLink message={messages.product(p.name)} variant="outline" className="mt-5">
                  Quero experimentar
                </WaLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Differentials() {
  const items = [
    {
      icon: HandHeart,
      t: "Produção artesanal",
      d: "Cada brownie é preparado com atenção aos detalhes e muito cuidado.",
    },
    {
      icon: Gift,
      t: "Feitos para cada ocasião",
      d: "Uma sobremesa especial para compartilhar, presentear ou aproveitar no seu momento favorito.",
    },
    {
      icon: Sparkles,
      t: "Encomendas personalizadas",
      d: "Entre em contato para consultar opções, quantidades e disponibilidade.",
    },
  ];
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Nosso jeito" title="Carinho em cada detalhe." />
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 120} className="md:px-10 md:first:pl-0">
              <Icon className="h-7 w-7 text-accent" strokeWidth={1.4} aria-hidden />
              <h3 className="mt-6 text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmotionalBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={banner}
        alt="Mãos partindo um brownie ao meio, revelando o interior úmido, ao lado de uma xícara de café"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary/60" aria-hidden />
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 py-20 text-primary-foreground md:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-light leading-[1.05] md:text-7xl">
            Tem dias que pedem um café. <em className="text-accent">E um brownie também.</em>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            Deixe os pequenos momentos ainda mais gostosos.
          </p>
          <WaLink message={messages.order} variant="accent" className="mt-8">
            <WhatsAppIcon /> Encomendar pelo WhatsApp
          </WaLink>
        </Reveal>
      </div>
    </section>
  );
}

export function HowToOrder() {
  const steps = [
    { t: "Escolha seus favoritos.", d: "Explore as opções disponíveis no cardápio." },
    {
      t: "Converse pelo WhatsApp.",
      d: "Consulte preços, tamanhos, disponibilidade e opções de encomenda.",
    },
    {
      t: "Combine os detalhes.",
      d: "Defina a quantidade e confirme a entrega ou retirada diretamente com a confeiteira.",
    },
  ];
  return (
    <section id="encomendas" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Encomendas" title="Seu brownie está a poucos cliques." />
        </Reveal>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 120}>
              <li className="h-full rounded-[1.5rem] bg-card p-8 shadow-[var(--shadow-soft)]">
                <span className="font-display text-5xl italic text-accent">0{i + 1}</span>
                <h3 className="mt-6 text-2xl">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <WaLink message={messages.order} className="mt-12">
          <MessageCircle className="h-5 w-5" /> Fazer meu pedido
        </WaLink>
      </div>
    </section>
  );
}

export function PhotoGallery() {
  const imgs = [
    {
      src: hero,
      alt: "Brownies inteiros empilhados",
      w: 1200,
      h: 1408,
      cls: "md:col-span-2 md:row-span-2",
    },
    { src: banner, alt: "Brownie partido ao meio", w: 1920, h: 1088, cls: "md:col-span-2" },
    {
      src: nutella,
      alt: "Detalhe da textura do brownie com creme de avelã",
      w: 912,
      h: 1104,
      cls: "",
    },
    { src: gift, alt: "Brownies embalados em caixa para presente", w: 1008, h: 1008, cls: "" },
    {
      src: prep,
      alt: "Preparo artesanal da massa de brownie",
      w: 912,
      h: 1200,
      cls: "md:col-span-2",
    },
    { src: trad, alt: "Brownie tradicional com casquinha", w: 912, h: 1104, cls: "md:col-span-2" },
  ];
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Galeria" title="Um pouquinho do nosso universo." />
        </Reveal>
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">
          {imgs.map((im) => (
            <div key={im.alt} className={`overflow-hidden rounded-[1.25rem] ${im.cls}`}>
              <img
                src={im.src}
                alt={im.alt}
                width={im.w}
                height={im.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <SectionTitle eyebrow="Dúvidas" title="Ficou com alguma dúvida?" />
        </div>
        <div className="divide-y divide-border md:col-span-7">
          {faqs.map((f) => (
            <details key={f.q} className="group border-border py-2">
              <summary className="cursor-pointer list-none py-6 text-left font-display text-xl marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span
                    aria-hidden
                    className="text-muted-foreground transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </span>
              </summary>
              <p className="pb-6 text-base text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contato" className="grain bg-primary py-24 text-primary-foreground md:py-36">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-4xl font-light leading-[1.05] md:text-7xl">
            Seu próximo brownie favorito <em className="text-accent">está aqui.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-primary-foreground/75">
            Escolha seus sabores e fale comigo para fazer sua encomenda.
          </p>
          <WaLink
            message={messages.order}
            variant="accent"
            className="mt-10 min-h-14 px-9 text-base"
          >
            <WhatsAppIcon /> Conversar pelo WhatsApp
          </WaLink>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary pb-28 text-primary-foreground md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-primary-foreground/15 px-5 pt-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl italic">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-primary-foreground/70">{site.tagline}</p>
          {site.region && (
            <p className="mt-2 text-sm text-primary-foreground/70">Atendimento: {site.region}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a
            href={whatsappLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            WhatsApp
          </a>
          {site.instagram && (
            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Instagram
            </a>
          )}
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <>
      <a
        href={whatsappLink(messages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-30 hidden h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur md:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <WaLink message={messages.general} className="w-full">
          <WhatsAppIcon /> Pedir pelo WhatsApp
        </WaLink>
      </div>
    </>
  );
}
