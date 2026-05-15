import About from "@/components/about";
import Hero from "../components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FadeInSection from "@/components/fade-in-section";

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
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
