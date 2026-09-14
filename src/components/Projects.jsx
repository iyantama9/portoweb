import { ArrowRight, LockKeyhole } from "lucide-react";
import { projects, topProjects } from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";
import SectionHeading from "./SectionHeading";

const ProjectCard = ({ project, isTop = false }) => (
  <div
    className={`group rounded-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 ${
      isTop
        ? "bg-[#161B22]/90 border border-amber-500/40 hover:border-amber-400/80 shadow-lg shadow-amber-900/10 hover:shadow-amber-900/20"
        : "bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 hover:border-white/40 hover:shadow-2xl hover:shadow-white/5"
    }`}
  >
    {project.images ? (
      <ProjectCarousel images={project.images} title={project.title} />
    ) : (
      <div className="w-full aspect-[40/27] overflow-hidden bg-[#0D1117]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    )}

    <div className="p-5 sm:p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
      </div>
      <p className="text-gray-400 flex-grow text-sm leading-6">
        {project.description}
      </p>
      <div className="mt-5 mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className={`text-[11px] sm:text-xs border px-2.5 py-1 rounded-full font-mono ${
              isTop
                ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                : "bg-gray-700/50 border-gray-600 text-cyan-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      {project.link === "#" ? (
        <span className="mt-auto text-gray-500 font-mono text-sm inline-flex items-center gap-2">
          <LockKeyhole className="h-4 w-4" />
          Private Project
        </span>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-cyan-400 font-semibold inline-flex items-center hover:text-white transition-colors duration-200"
        >
          {project.linkLabel || "Lihat Repository"}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 max-w-6xl mx-auto">
      <SectionHeading path="top_projects" command="ls top" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-20">
        {topProjects.map((project) => (
          <ProjectCard key={project.title} project={project} isTop />
        ))}
      </div>

      <SectionHeading path="projects" command="ls projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
