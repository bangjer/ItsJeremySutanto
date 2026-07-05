import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Leadership from "@/components/Leadership";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Snapshot from "@/components/Snapshot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Snapshot />
        <Education />
        <Experience />
        <Leadership />
        <Skills />
        <Certifications />
        <Interests />
        <About />
      </main>
      <Contact />
    </>
  );
}
