import { Briefcase, BookOpen } from "lucide-react";
import { experiences } from "../data/experiences";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const isWorkExperience = (type) =>
    type === "Internship" || type === "Employment";

  const renderDescription = (description) => {
    if (Array.isArray(description) && description.length > 0) {
      return (
        <ul className="mt-4 ml-5 list-disc list-outside text-gray-400 space-y-2 max-w-4xl leading-6">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <section id="experience" className="py-16 sm:py-20 max-w-6xl mx-auto">
      <SectionHeading path="experience" command="cat history.log" />
      <div className="border-l border-gray-700 pl-6 sm:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1 h-3 w-3 rounded-full ring-4 ring-[#0D1117] ${
                isWorkExperience(exp.type) ? "bg-cyan-400" : "bg-green-400"
              }`}
            ></div>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-sm text-gray-500 font-mono">{exp.period}</p>
              {isWorkExperience(exp.type) && (
                <span className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-2.5 py-0.5 rounded-full font-mono">
                  {exp.type === "Employment" ? "Full time" : "Intern"}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-2 flex items-center">
              {isWorkExperience(exp.type) ? (
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
