import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="font-mono text-3xl font-bold text-white mb-12 text-center">
        <span className="text-cyan-400">~/</span>projects
        <span className="text-green-400">$</span> ls -l
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden flex flex-col group transform transition-all duration-300 hover:-translate-y-1.5 hover:border-white/40 hover:shadow-2xl hover:shadow-white/5"
          >
            {project.image && (
              <div className="w-full h-56 overflow-hidden bg-[#0D1117]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="my-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700/50 border border-gray-600 text-cyan-300 px-3 py-1 rounded-full font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                className="mt-auto text-cyan-400 font-semibold inline-flex items-center hover:text-white transition-colors duration-200"
              >
                {project.link !== "#" ? "Lihat Repository" : "Private Project"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
