import { describe, expect, it } from "vitest";

import { absoluteUrl, buildPageHead } from "./seo";

describe("absoluteUrl", () => {
  it("builds canonical home URL", () => {
    expect(absoluteUrl("/")).toBe("https://rdvid.github.io/nilabrownie/");
  });

  it("builds absolute OG image URL", () => {
    expect(absoluteUrl("/og.jpg")).toBe("https://rdvid.github.io/nilabrownie/og.jpg");
  });
});

describe("buildPageHead", () => {
  it("includes Open Graph and Twitter image with absolute URL", () => {
    const { meta } = buildPageHead();
    const ogImage = meta.find((m) => "property" in m && m.property === "og:image");
    const twitterImage = meta.find((m) => "name" in m && m.name === "twitter:image");
    expect(ogImage).toMatchObject({ content: "https://rdvid.github.io/nilabrownie/og.jpg" });
    expect(twitterImage).toMatchObject({ content: "https://rdvid.github.io/nilabrownie/og.jpg" });
  });
});
