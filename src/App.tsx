import Hero from "./Components/Hero/Hero";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
