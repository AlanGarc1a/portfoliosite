import About from "@/components/about";
import Hero from "../components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FadeInSection from "@/components/fade-in-section";
import Journey from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Journey />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
