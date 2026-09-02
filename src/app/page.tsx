import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfferStrip from "@/components/OfferStrip";
import Tour from "@/components/Tour";
import Catalog from "@/components/Catalog";
import PaperVsLink from "@/components/PaperVsLink";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Order from "@/components/Order";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <main className="flex-1">
        <Hero />
        <OfferStrip />
        <Tour />
        <Catalog />
        <PaperVsLink />
        <Features />
        <Pricing />
        <About />
        <Faq />
        <Order />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
