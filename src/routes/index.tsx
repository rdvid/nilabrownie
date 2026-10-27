import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import {
  Hero,
  ProductShowcase,
  Differentials,
  EmotionalBanner,
  HowToOrder,
  PhotoGallery,
  FAQ,
  FinalCTA,
  Footer,
  FloatingWhatsApp,
} from "@/components/landing/Sections";
import { seo } from "@/config/site";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildPageHead({ title: seo.title, description: seo.description, path: "/" }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Differentials />
        <EmotionalBanner />
        <HowToOrder />
        <PhotoGallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
