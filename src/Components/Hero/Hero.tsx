import { useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  const [flag, setFlag] = useState<boolean>(true);

  const s1 = `Recent graduate with a strong foundation in programming languages and
  development tools, seeking a challenging position in a dynamic
  organization where I can contribute to the team's success and grow my
  skills.`;
  const s2 = `I am a recent graduate with a strong foundation in programming languages and development tools,
  actively seeking a challenging position within a dynamic organization. Throughout my academic journey, 
  I have acquired skills in Python, Java, Typescript,
  and JavaScript, as well as proficiency in source code
  management systems. I have hands-on experience in software development,
  database management, and web application development.`;

  const s3 = `In addition to my technical proficiencies, I possess strong
  problem-solving abilities, attention to detail,
  and a strong work ethic. I collaborate effectively in
  team projects and have excellent communication skills to
  convey technical concepts to both technical and non-technical stakeholders.
  I am a quick learner, adapting easily to new technologies, and staying up-to-date
  with advancements in software development.`;

  const expandAbout: React.MouseEventHandler<HTMLElement> = () => {
    const section = document.getElementById("about");

    if (flag) {
      section?.classList.replace("row-span-2", "row-span-4");
    } else {
      section?.classList.replace("row-span-4", "row-span-2");
    }
    setFlag(!flag);
  };

  return (
    <main className="flex flex-col flex-wrap justify-center w-full h-[80vh]  px-52">
      <section className="flex items-center w-full h-full gap-32">
        <section className="flex flex-col font-serif tracking-wider text-8xl">
          <div>Sultan</div>
          <div className="my-8">Alotaibi</div>
          <span
            id="occupation"
            className="font-sans text-4xl italic tracking-wide uppercase"
          >
            software engineer
          </span>
          <button className="py-4 mt-8 font-sans text-2xl font-semibold text-white uppercase border-4 rounded-md border-Blue bg-Blue hover:bg-white hover:text-Blue">
            <a href="#contact" className="block w-full h-full">
              Contact me
            </a>
          </button>
        </section>
        <section id="about" className="flex flex-col justify-center text-2xl">
          <p className="font-serif text-4xl tracking-wider">Who am I?</p>
          <div id="text" className="max-w-4xl">
            {flag ? s1 : ""}
            {!flag ? s2 : ""}
            {!flag ? (
              <>
                <br />
                <br />
              </>
            ) : null}
            {!flag ? s3 : ""}
          </div>
          <div
            className="p-1 pt-3 mt-4 overflow-hidden group hover:cursor-pointer"
            onClick={expandAbout}
          >
            <button
              className={`font-bold border-2 rounded-full w-11 h-11 border-Green text-Green group-hover:animate-bounce group-hover:transition-all group-hover:duration-250`}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${flag ? "" : "rotate-180"}`}
              />
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
export default Hero;
