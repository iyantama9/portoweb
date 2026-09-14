import { useState } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <section className="min-h-[92vh] max-w-6xl mx-auto flex flex-col justify-center py-20">
      <div className="font-mono text-lg sm:text-2xl lg:text-3xl text-green-400 mb-5 break-words">
        <span className="text-cyan-400">user@portfolio</span>:~${" "}
        <TypingEffect
          text="initiate_profile.sh"
          onComplete={() => setTimeout(() => setShowContent(true), 300)}
        />
        <span className="animate-ping">_</span>
      </div>
      {showContent && (
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-mono tracking-tight leading-none">
            Whilyan Pratama
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-400 mt-4 font-mono max-w-4xl leading-snug">
            Full Stack Developer | AI & Edge Computing Enthusiast
          </h2>
          <p className="max-w-2xl mt-7 text-base sm:text-lg text-gray-400 leading-7 sm:leading-8">
            Informatics graduate from Universitas Sebelas Maret and Fullstack
            Developer at Getcore.ID. I build production ready web platforms,
            AI products, and cloud services with React, Next.js, Express,
            Laravel, FastAPI, and Golang. After completing my internship in
            August 2026, I continued full time at Getcore.ID, working across
            multi model AI, automation, and end to end product development.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#projects"
              className="bg-green-500 text-gray-950 font-bold min-h-11 py-2.5 px-5 rounded-md hover:bg-green-400 transition-colors duration-300 flex items-center"
            >
              Lihat Proyek <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/iyantama9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub Whilyan Pratama"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/whilyanpratama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Whilyan Pratama"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:pratamawhilyan399@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email Whilyan Pratama"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
