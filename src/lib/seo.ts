import { seo, site } from "@/config/site";

export type PageHeadInput = {
  title?: string;
  description?: string;
  /** Route path without base, e.g. `/` or `/about` */
  path?: string;
};

const THEME_COLOR = "#3d2e28";

export function absoluteUrl(path: string): string {
  const base = seo.siteUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${base}/`;
  return `${base}${normalized}`;
}

export function buildPageHead({
  title = seo.title,
  description = seo.description,
  path = "/",
}: PageHeadInput = {}) {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(seo.ogImagePath);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: THEME_COLOR },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: seo.ogImageAlt },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
