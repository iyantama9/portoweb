import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="py-16 sm:py-20 max-w-6xl mx-auto">
      <SectionHeading path="skills" command="cat skills.json" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {entries.map(([category, skillList]) => (
          <div
            key={category}
            className="bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 rounded-lg p-5 sm:p-6 h-full"
          >
            <h3 className="text-lg font-bold text-white capitalize mb-5 font-mono">
              {category}
            </h3>
            <ul className="space-y-3 text-gray-400">
              {skillList.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center transition-colors duration-200 hover:text-white"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-5 h-5 mr-3"
                    loading="lazy"
                  />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
