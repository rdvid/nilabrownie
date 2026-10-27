import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/config/site";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
  accent: "bg-accent text-accent-foreground hover:bg-primary-foreground hover:text-primary",
  outline: "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
};

export function WaLink({
  message,
  children,
  variant = "primary",
  className,
}: {
  message: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5 fill-current", className)}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.35-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.79.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.33 11.33 0 0 0 5.43 1.38h.01c6.26 0 11.35-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.25em]",
            light ? "text-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-light leading-[1.05] md:text-6xl">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg",
            light ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
