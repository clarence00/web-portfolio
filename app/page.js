import Image from "next/image";
import Hero from "./components/Hero";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
