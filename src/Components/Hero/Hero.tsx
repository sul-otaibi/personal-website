import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AboutText {
  short: string;
  long: string[];
}

interface AboutSectionProps {
  isExpanded: boolean;
  aboutText: AboutText;
  toggleAbout: () => void;
}

interface ExpandButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

const Hero: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const aboutText: AboutText = {
    short: `Recent graduate with a strong foundation in programming languages and
    development tools, seeking a challenging position in a dynamic
    organization where I can contribute to the team's success and grow my
    skills.`,
    long: [
      `I am a recent graduate with a strong foundation in programming languages and development tools,
      actively seeking a challenging position within a dynamic organization. Throughout my academic journey, 
      I have acquired skills in Python, Java, Typescript,
      and JavaScript, as well as proficiency in source code
      management systems. I have hands-on experience in software development,
      database management, and web application development.`,
      `In addition to my technical proficiencies, I possess strong
      problem-solving abilities, attention to detail,
      and a strong work ethic. I collaborate effectively in
      team projects and have excellent communication skills to
      convey technical concepts to both technical and non-technical stakeholders.
      I am a quick learner, adapting easily to new technologies, and staying up-to-date
      with advancements in software development.`
    ]
  };

  const toggleAbout = (): void => {
    const section = document.getElementById("about");
    section?.classList.toggle("row-span-2");
    section?.classList.toggle("row-span-4");
    setIsExpanded(!isExpanded);
  };

  return (
    <main className="relative flex flex-col flex-wrap justify-center w-full h-full overflow-hidden lg:h-[80vh] py-8 px-4 lg:px-52">
      <BackgroundElements />
      <section className="relative z-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-2 place-items-center">
        <HeroIntroduction />
        <AboutSection 
          isExpanded={isExpanded} 
          aboutText={aboutText} 
          toggleAbout={toggleAbout} 
        />
      </section>
    </main>
  );
};

const BackgroundElements: React.FC = () => (
  <>
    <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl z-[1]"></div>
    <div className="absolute left-12 bottom-8 w-[50%] h-[100%] origin-bottom-left">
      <div className="absolute w-96 h-96 bg-yellow-500 rounded-full animate-rotate-slow origin-[25%_35%]"></div>
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full animate-rotate-slow origin-[35%_75%]"></div>
    </div>
  </>
);

const HeroIntroduction: React.FC = () => (
  <section className="flex flex-col font-serif tracking-wider text-8xl min-w-[30rem]">
    <div>Sultan</div>
    <div className="my-8">Alotaibi</div>
    <span id="occupation" className="font-sans text-4xl italic tracking-wide uppercase">
      software engineer
    </span>
    <button className="py-4 mt-8 font-sans text-2xl font-semibold text-white uppercase border-4 rounded-md border-Blue bg-Blue hover:bg-white hover:text-Blue">
      <a href="#contact" className="block w-full h-full">
        Contact me
      </a>
    </button>
  </section>
);

const AboutSection: React.FC<AboutSectionProps> = ({ isExpanded, aboutText, toggleAbout }) => (
  <section id="about" className="flex flex-col items-center justify-center text-2xl lg:items-start">
    <p className="self-start font-serif text-4xl tracking-wider">Who am I?</p>
    <div id="text" className="max-w-4xl">
      {isExpanded ? (
        <>
          {aboutText.long.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p>{paragraph}</p>
              {index < aboutText.long.length - 1 && <br />}
            </React.Fragment>
          ))}
        </>
      ) : (
        <p>{aboutText.short}</p>
      )}
    </div>
    <ExpandButton isExpanded={isExpanded} onClick={toggleAbout} />
  </section>
);

const ExpandButton: React.FC<ExpandButtonProps> = ({ isExpanded, onClick }) => (
  <div
    className="p-1 pt-3 mt-4 overflow-hidden group hover:cursor-pointer"
    onClick={onClick}
  >
    <button className="font-bold border-2 rounded-full w-11 h-11 border-Green text-Green group-hover:animate-bounce group-hover:transition-all group-hover:duration-250">
      <FontAwesomeIcon
        icon={faChevronDown}
        className={isExpanded ? "rotate-180" : ""}
      />
    </button>
  </div>
);

export default Hero;