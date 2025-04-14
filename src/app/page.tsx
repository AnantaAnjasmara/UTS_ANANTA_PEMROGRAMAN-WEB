import Navigasi from "./components/Navigasi";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AppShowcase from "./components/Galeri";
import Footer from "./components/Footer";
import Cta from "./components/Cta";

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
