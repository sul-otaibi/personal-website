import SkillCard from "./SkillCard";

function Skills() {
  return (
    <main id="skills" className="min-h-[24rem] px-4 lg:px-28 pt-4 pb-16">
      <h1 className="mt-5 mb-10 font-serif text-5xl tracking-wider">Skills</h1>
      <ul className="grid w-full grid-cols-2 gap-8 xl:grid-cols-4 2xl:grid-cols-6">
        <SkillCard name="Angular" icon="angular" />
        <SkillCard name="ReactJS" icon="react" />
        <SkillCard name="VueJS" icon="vue" />
        <SkillCard name="TailwindCSS" icon="tailwindcss" />
        <SkillCard name="HTML" icon="html" />
        <SkillCard name="CSS" icon="css" />
        <SkillCard name="Javascript" icon="javascript" />
        <SkillCard name="Typescript" icon="typescript" />
        <SkillCard name="Python" icon="python" />
        <SkillCard name="Java" icon="java" />
        <SkillCard name="SQL" icon="sql" />
        <SkillCard name="Git / Github" icon="git" />
        <SkillCard name="Web Scraping" icon="fileout" />
        <SkillCard name="Data Wrangling" icon="chart" />
      </ul>
    </main>
  );
}
export default Skills;
