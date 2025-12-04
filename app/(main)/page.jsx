import Hero from "../../src/components/Hero"
import About from "../../src/components/About"
import Portfolio from "../../src/components/Portfolio"
import Contato from "../../src/components/Contato"
import { ActiveSectionProvider } from "../../src/components/ActiveSectionProvider";

export const metadata = {
  title: "codrigues",
  description: "Desenvolvedor Front-End.",
};

export default function Home() {
  return (
    
    <ActiveSectionProvider>
      <Hero />
      <About />
      <Portfolio />
      <Contato />
    </ActiveSectionProvider>
    
  );
}