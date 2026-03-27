import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Organizations from "./components/Organizations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>

      <div className="bg-[#0D1117] min-h-screen text-gray-300 font-sans relative z-0">
        <AnimatedBackground />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Organizations />
          <Footer />
        </div>
      </div>
    </>
  );
}
