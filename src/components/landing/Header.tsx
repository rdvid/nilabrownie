import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site, messages } from "@/config/site";
import { WaLink, WhatsAppIcon } from "./shared";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#encomendas", label: "Encomendas" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "bg-background/90 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#inicio" className="font-display text-xl italic tracking-tight md:text-2xl">
          {site.name}
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <WaLink message={messages.general} className="hidden min-h-10 px-5 md:inline-flex">
          <WhatsAppIcon className="h-4 w-4" /> Pedir pelo WhatsApp
        </WaLink>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-full md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border px-5 pb-6 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-display text-2xl"
            >
              {n.label}
            </a>
          ))}
          <WaLink message={messages.general} className="mt-6 w-full">
            <WhatsAppIcon /> Pedir pelo WhatsApp
          </WaLink>
        </nav>
      )}
    </header>
  );
}
