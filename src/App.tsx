import Hero from "./Components/Hero/Hero";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  const skillsData: Array<{name:string, icon:string}> = [
    {name:"Angular", icon:"angular"},
    {name:"ReactJS", icon:"react"},
    {name:"VueJS", icon:"vue"},
    {name:"TailwindCSS", icon:"tailwindcss"},
    {name:"HTML", icon:"html"},
    {name:"CSS", icon:"css"},
    {name:"Javascript", icon:"javascript"},
    {name:"Typescript", icon:"typescript"},
    {name:"Python", icon:"python"},
    {name:"Java", icon:"java"},
    {name:"SQL", icon:"sql"},
    {name:"Git / Github", icon:"git"},
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills skills={skillsData}/>
      <Contact />
    </div>
  );
}

export default App;
