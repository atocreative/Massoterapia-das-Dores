import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Sobre from "@/app/components/Sobre";
import Servicos from "@/app/components/Servicos";
import CinematicCTA from "@/app/components/CinematicCTA";
import Contato from "@/app/components/Contato";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <CinematicCTA />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
