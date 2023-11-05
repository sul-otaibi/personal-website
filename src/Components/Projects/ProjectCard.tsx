import LinkButton from "./LinkButton";

interface CardData {
  title: string;
  description: string;
  github?: string;
  liveDemo?: string;
  tech: string[];
}

function ProjectCard(props: CardData) {
  const tech = props.tech.map((v) => (
    <img className="w-8" src={`images/${v}.svg`} />
  ));

  return (
    <section className="flex flex-col justify-between gap-4 p-4 bg-white rounded-md lg:w-96 drop-shadow-xl">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-2">
          <h1 className="text-3xl font-medium tracking-tight">{props.title}</h1>
          <div className="flex gap-2">
            {props.liveDemo ? (
              <LinkButton iconName="link" link={"https://google.com"} />
            ) : null}
            {props.github ? (
              <LinkButton iconName="github" link={"https://github.com"} />
            ) : null}
          </div>
        </div>
        <p className="">{props.description}</p>
      </div>
      <span className="flex gap-2">{tech}</span>
    </section>
  );
}

export default ProjectCard;
