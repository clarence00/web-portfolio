import Image from "next/image";
import Hero from "./pages/Hero";
import Career from "./pages/Career";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Career />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
