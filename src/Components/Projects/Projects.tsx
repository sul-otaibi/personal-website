import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <main
      id="projects"
      className="min-h-[24rem] pt-4 pb-16 px-4 lg:px-28 text-2xl"
    >
      <h1 className="my-5 font-serif text-5xl tracking-wider">Projects</h1>
      <section className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <ProjectCard
          title="Personal website"
          description={`A personal website to demonstrate the skills acquired throughout the years.`}
          github="https://github.com/"
          tech={["react", "tailwindcss", "git"]}
        />
        <ProjectCard
          title="SMS"
          description={`School Management System (SMS).
          A project done during the internship period.`}
          tech={["angular", "tailwindcss", "typescript", "git"]}
        />
        <ProjectCard
          title="JATS"
          description={`Job Application Tracking System (JATS). This is a simple website to help track job applications.`}
          github="https://github.com/sul-otaibi/JATS-remake"
          liveDemo="https://jats.netlify.app"
          tech={["vue", "tailwindcss", "typescript", "git"]}
        />
        <ProjectCard
          title="Calculator"
          description={`A simple calculator. This project is done for educational purposes.`}
          tech={["angular", "vue", "tailwindcss", "git"]}
        />
      </section>
    </main>
  );
}

export default Projects;
