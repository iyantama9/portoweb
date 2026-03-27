import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="font-mono text-3xl font-bold text-white mb-12 text-center">
        <span className="text-cyan-400">~/</span>projects
        <span className="text-green-400">$</span> ls -l
      </h2>
      <div className="flex flex-wrap items-stretch justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 rounded-lg p-6 flex flex-col group transform transition-all duration-300 hover:-translate-y-1.5 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/10"
          >
            <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 flex-grow text-sm leading-relaxed">
              {project.description || "sek malas ngetik"}
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
              className="mt-auto text-green-400 font-semibold inline-flex items-center"
            >
              Lihat Detail
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
