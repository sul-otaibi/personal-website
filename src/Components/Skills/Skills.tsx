import React from 'react';
import SkillCard from './SkillCard';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="mt-5 mb-10 font-serif text-5xl tracking-wider">Skills</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;