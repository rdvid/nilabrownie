import { describe, expect, it } from "vitest";
import { whatsappLink, messages } from "./site";

describe("whatsappLink", () => {
  it("strips non-digits and encodes the message", () => {
    expect(whatsappLink("Olá! Oi & tchau", "+55 (11) 99999-9999")).toBe(
      "https://wa.me/5511999999999?text=Ol%C3%A1!%20Oi%20%26%20tchau",
    );
  });
  it("builds product message with the product name", () => {
    expect(messages.product("Brownie Tradicional")).toContain("Brownie Tradicional");
  });
});
