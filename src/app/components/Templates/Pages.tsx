import Navigasi from "../Organism/Navigasi";
import Hero from "../Organism/Hero";
import Services from "../Organism/Services";
import AppShowcase from "../Organism/Galeri";
import Footer from "../Organism/Footer";
import Cta from "../Organism/Cta";

export default function Home() {
  return (
    <div>
      <Navigasi />
      <Hero />
      <Services />
      <AppShowcase />
      <Cta />
      <Footer />
    </div>
  );
}
