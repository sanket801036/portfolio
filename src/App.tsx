import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Now from "./components/Now";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import OpenSource from "./components/OpenSource";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Now />
        <About />
        <Projects />
        <Experience />
        <OpenSource />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
