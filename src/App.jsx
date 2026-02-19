import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
// import Certifications from "./components/sections/Certifications";
// import Projects from "./components/sections/Projects";
// import Skills from "./components/sections/Skills";
// import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        {/* <Certifications /> */}
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
