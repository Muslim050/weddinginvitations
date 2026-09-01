import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Inside from "@/components/Inside";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Order from "@/components/Order";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Catalog />
        <Inside />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Order />
      </main>
      <Footer />
    </>
  );
}
