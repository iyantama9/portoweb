import { skills } from "../data/skills";

const Skills = () => {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="py-20">
      <h2 className="font-mono text-3xl font-bold text-white mb-12 text-center">
        <span className="text-cyan-400">~/</span>skills
        <span className="text-green-400">$</span> cat skills.json
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {entries.map(([category, skillList]) => (
          <div
            key={category}
            className="bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 rounded-lg p-6 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <h3 className="text-xl font-bold text-white capitalize mb-4 font-mono">
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
