import { Briefcase, BookOpen } from "lucide-react";
import { experiences } from "../data/experiences";

const Experience = () => {
  const renderDescription = (description) => {
    if (Array.isArray(description) && description.length > 0) {
      return (
        <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <section id="experience" className="py-20">
      <h2 className="font-mono text-3xl font-bold text-white mb-12">
        <span className="text-cyan-400">~/</span>experience
        <span className="text-green-400">$</span> cat history.log
      </h2>
      <div className="border-l-2 border-gray-700 pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute -left-[34px] top-1 h-4 w-4 rounded-full ${
                exp.type === "Internship" ? "bg-cyan-400" : "bg-green-400"
              }`}
            ></div>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-sm text-gray-500 font-mono">{exp.period}</p>
              {exp.type === "Internship" && (
                <span className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-2.5 py-0.5 rounded-full font-mono">
                  Intern
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mt-1 flex items-center">
              {exp.type === "Internship" ? (
                <Briefcase className="mr-2 text-cyan-400" size={20} />
              ) : (
                <BookOpen className="mr-2 text-green-400" size={20} />
              )}
              {exp.role}
            </h3>
            <p className="text-gray-400 font-semibold">{exp.company}</p>
            {renderDescription(exp.description)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
