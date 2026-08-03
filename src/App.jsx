import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AcademicProjects from "./components/AcademicProjects";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <AcademicProjects />
      <FeaturedWork />
      <Footer />
    </div>
  );
}

export default App;