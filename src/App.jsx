import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Server,
  Code,
  Database,
  BookOpen,
  Users,
  Briefcase,
} from "lucide-react";

const Icon = ({ path, color = "currentColor", ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} />
  </svg>
);

const icons = {
  js: "M0 0h24v24H0V0zm22.034 18.262H1.964V5.738h20.07v12.524zM11.99 16.603c1.08 0 1.77-.338 2.3-1.01l1.642 1.052c-.9.9-2.22 1.58-3.95 1.58-2.67 0-4.64-1.8-4.64-4.2 0-2.43 1.97-4.22 4.64-4.22 2.61 0 4.54 1.73 4.54 4.16 0 .3-.04.58-.08.81H9.55c.16 1.35 1.14 2.19 2.44 2.19zm-2.43-3.23h4.74c-.1-.94-.8-1.63-2.33-1.63-1.47 0-2.2.69-2.41 1.63z",
  react:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.4-8c0-1.04.41-2.02 1.14-2.75.9-.9 2.1-1.41 3.36-1.41.28 0 .55.03.81.08l-.51 1.94c-.16-.03-.33-.05-.5-.05-1.6 0-2.92 1.32-2.92 2.92s1.32 2.92 2.92 2.92c1.6 0 2.92-1.32 2.92-2.92 0-.42-.09-.82-.25-1.2l1.94-.51c.16.48.25.99.25 1.51 0 2.21-1.79 4-4 4s-4-1.79-4-4zm4.4 2.75c-.73.73-1.71 1.14-2.75 1.14S6.87 15.68 6.14 15c-.9-.9-1.41-2.1-1.41-3.36 0-.28.03-.55.08-.81l1.94.51c-.03.16-.05.33-.05.5 0 1.6 1.32 2.92 2.92 2.92s2.92-1.32 2.92-2.92c0-1.6-1.32-2.92-2.92-2.92-.17 0-.34.02-.5.05l.51-1.94c.26-.05.53-.08.81-.08 1.04 0 2.02.41 2.75 1.14.9.9 1.41 2.1 1.41 3.36s-.51 2.46-1.41 3.36z",
  tailwind:
    "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.623 10.5 14.5 12 16.5 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C14.887 6.3 13.5 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.137 1.2 2.012 2.7 4.012 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.137-1.2-2.012-2.7-4.012-2.7z",
  nodejs:
    "M11.378 21.933H4.532V8.75h6.846v13.183zM18.82 8.75h-6.846v13.183h6.846V8.75zM8.88 4.234c0-1.28.948-2.233 2.21-2.233s2.21.952 2.21 2.232c0 1.28-.948 2.233-2.21 2.233s-2.21-.952-2.21-2.232z",
  laravel:
    "M21.28.25H2.72L0 6.32l2.72 6.07 1.9-1.07-2.1-4.75L4.82.5h14.36l2.3 5.82-2.1 4.75 1.9 1.07L24 6.32 21.28.25zM12 4.1l-2.72 6.07-2.72-6.07h1.9l.82 1.82h2.2l.82-1.82H12z m2.72 6.07L12 4.1l-2.72 6.07h5.44z M4.62 8.35l7.38 15.4 7.38-15.4H4.62z m9.28 12.05L12 16.7l-1.9 3.7h3.8z",
  python:
    "M14.5,21.9c-2.4,0-3.8-0.9-4.8-2.6c-0.6-1.1-0.6-2.6-0.1-3.6c0.5-1,1.5-1.7,2.8-1.7c1.3,0,2.1,0.5,2.7,1.3 c-0.6,0.5-0.9,1.2-0.9,2.1c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5c0-1.6-1.3-2.9-2.9-2.9c-0.1,0-0.3,0-0.4,0.1 c-0.8-1.5-2.4-2.4-4.2-2.4c-2.6,0-4.8,2.1-4.8,4.8c0,2.6,2.1,4.8,4.8,4.8c1.8,0,3.3-1,4.2-2.4c-0.1,0.2-0.1,0.5-0.1,0.7 C17.4,20.6,16.1,21.9,14.5,21.9z M9.5,2.1c2.4,0,3.8,0.9,4.8,2.6c0.6,1.1,0.6,2.6,0.1,3.6c-0.5,1-1.5,1.7-2.8,1.7 c-1.3,0-2.1-0.5-2.7-1.3c0.6-0.5,0.9-1.2,0.9-2.1c0-1.4-1.1-2.5-2.5-2.5C5.9,4.1,4.8,5.2,4.8,6.6c0,1.6,1.3,2.9,2.9,2.9 c0.1,0,0.3,0,0.4-0.1c0.8,1.5,2.4,2.4,4.2,2.4c2.6,0,4.8-2.1,4.8-4.8c0-2.6-2.1-4.8-4.8-4.8c-1.8,0-3.3,1-4.2,2.4 c0.1-0.2,0.1-0.5,0.1-0.7C12.1,3.4,10.8,2.1,9.5,2.1z",
  mysql:
    "M14.9,9.4c-0.4-0.3-0.9-0.4-1.4-0.4c-0.8,0-1.5,0.3-2.1,0.8c-0.6,0.6-0.9,1.3-0.9,2.2c0,0.9,0.3,1.7,0.9,2.2 c0.6,0.6,1.3,0.8,2.1,0.8c0.5,0,1-0.1,1.4-0.4v2.5h2.2V6.9h-2.2V9.4z M13.5,13.2c-0.4,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.4-0.7-0.4-1.1 c0-0.4,0.1-0.8,0.4-1.1c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.4,0.7,0.4,1.1c0,0.4-0.1,0.8-0.4,1.1 C14.3,13,13.9,13.2,13.5,13.2z M21.6,6.9v10.2h-2.2v-2.3c-0.5,0.6-1.1,1-1.9,1.3c-0.8,0.3-1.6,0.4-2.5,0.4 c-1.5,0-2.8-0.5-3.8-1.4c-1-0.9-1.5-2.2-1.5-3.7c0-1.5,0.5-2.8,1.5-3.7c1-0.9,2.3-1.4,3.8-1.4c0.9,0,1.8,0.1,2.5,0.4 c0.8,0.3,1.4,0.7,1.9,1.3V6.9H21.6z M10.2,9.6H5.4v3.6h2.8c0.7,0,1.2-0.1,1.6-0.4c0.4-0.2,0.6-0.6,0.6-1.1c0-0.6-0.3-1-0.8-1.2 C10.1,10.2,10.2,9.6,10.2,9.6z M2.4,2.4v19.2h20.1V2.4H2.4z M8.2,16.5H5.4v-3.3h2.6c0.8,0,1.5,0.2,2,0.5c0.5,0.4,0.7,0.9,0.7,1.5 c0,0.7-0.3,1.3-0.9,1.6C9.3,16.4,8.7,16.5,8.2,16.5z M8,8.2H5.4V5.1h2.7c0.6,0,1.1,0.1,1.5,0.4c0.4,0.2,0.5,0.6,0.5,1 c0,0.5-0.2,0.9-0.5,1.1C9.1,8.1,8.6,8.2,8,8.2z",
  docker:
    "M22.18 9.54c-.38-.28-1.23-.7-2.34-.7H16.1V4.28c0-.62-.5-1.12-1.12-1.12H5.02c-.62 0-1.12.5-1.12 1.12v15.44c0 .62.5 1.12 1.12 1.12h14.07c.62 0 1.12-.5 1.12-1.12v-6.07c1.1-.01 1.96-.43 2.34-.7.42-.3.62-.83.62-1.37s-.2-1.07-.62-1.37zm-6.08-3.98h2.24v2.24h-2.24V5.56zm0 3.36h2.24v2.24h-2.24V8.92zm-3.36-3.36h2.24v2.24H12.74V5.56zm0 3.36h2.24v2.24H12.74V8.92zm0 3.36h2.24v2.24H12.74v-2.24zm-3.36-3.36h2.24v2.24H9.38V8.92zm0-3.36h2.24v2.24H9.38V5.56zm0 6.72h2.24v2.24H9.38v-2.24zm-3.36 2.24h2.24v2.24H6.02v-2.24zm0-3.36h2.24v2.24H6.02v-2.24zm0-3.36h2.24v2.24H6.02V8.92z",
  git: "m23.955 13.587-7.84-7.84a.972.972 0 0 0-1.374 0l-1.58 1.58a.972.972 0 0 0 0 1.374l2.12 2.12-4.873 4.873a.972.972 0 0 0 0 1.374l1.104 1.104a.972.972 0 0 0 1.374 0l4.873-4.873 2.12 2.12a.972.972 0 0 0 1.374 0l1.58-1.58a.972.972 0 0 0 0-1.374Z M8.937 8.937A4.862 4.862 0 1 0 2.07 2.07a4.862 4.862 0 0 0 6.867 6.867Z M8.937 2.07A2.917 2.917 0 1 1 6.02 6.02 2.917 2.917 0 0 1 8.937 2.07Z M19.46 19.46a2.917 2.917 0 1 1-4.125-4.125 2.917 2.917 0 0 1 4.125 4.125Z",
  hapi: "M17.4 6.5h-3.6V4.2h-3.6v2.3H6.6v11h3.6v-4.6h3.6v4.6h3.6v-11z",
  vercel: "M12 2.5L2.5 21.5h19L12 2.5z",
  railway:
    "M4 4h16v16H4V4zm4 4v8h3.5c1.93 0 3.5-1.57 3.5-3.5S13.43 9 11.5 9H8zm3.5 5H10v-2h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
  selenium:
    "M6 6h3v3H6zm0 5h3v3H6zm5-5h3v3h-3zm0 5h3v3h-3zm5-5h3v3h-3zm0 5h3v3h-3z",
  webdriverio:
    "M19 11h-1.7c-.3-1.4-1-2.7-2-3.7l1.2-1.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.2 1.2c-1-1-2.3-1.7-3.7-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1.7c-1.4.3-2.7 1-3.7 2L5.4 5.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.2 1.2c-1 1-1.7 2.3-2 3.7H3c-.6 0-1 .4-1 1s.4 1 1 1h1.7c.3 1.4 1 2.7 2 3.7l-1.2 1.2c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.2-1.2c1 1 2.3 1.7 3.7 2V21c0 .6.4 1 1 1s1-.4 1-1v-1.7c1.4-.3 2.7-1 3.7-2l1.2 1.2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.2-1.2c1-1 1.7-2.3 2-3.7H21c.6 0 1-.4 1-1s-.4-1-1-1zm-7 5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z",
};

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let columns;
    let drops;

    const initialize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / 20);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * (canvas.height / 20));
      }
    };

    initialize();
    window.addEventListener("resize", initialize);

    let lastTime = 0;
    const fps = 15; 
    const fpsInterval = 1000 / fps;

    const animate = (timestamp) => {
      animationFrameId = window.requestAnimationFrame(animate);
      const elapsed = timestamp - lastTime;

      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);

        ctx.fillStyle = "rgba(13, 17, 23, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#003a00"; 
        ctx.font = "15px monospace";

        for (let i = 0; i < drops.length; i++) {
          const text = Math.random() > 0.5 ? "0" : "1";
          ctx.fillText(text, i * 20, drops[i] * 20);

          if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
    };

    animate(0);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initialize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

const TypingEffect = ({ text, onComplete, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let ticker;
    if (displayText.length < text.length) {
      ticker = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, speed);
    } else {
      if (onComplete) onComplete();
    }
    return () => clearTimeout(ticker);
  }, [text, displayText, speed, onComplete]);

  return <span>{displayText}</span>;
};

const projects = [
  {
    title: "Yumi - Discord Payment Bot",
    description: "sek malas ngetik",
    tags: ["Python FastAPI", "Midtrans", "Spreadsheet", "GCP VM Instance"],
    link: "#",
  },
  {
    title: "Anggar.in",
    description: "sek malas ngetik",
    tags: ["Python", "TensorFlow", "Express.js", "Kotlin", "MySQL", "GCP"],
    link: "#",
  },
  {
    title: "Cah Apik Messenger - CAM",
    description: "sek malas ngetik",
    tags: ["React", "Express.js", "WebSocket", "MySQL"],
    link: "#",
  },
  {
    title: "Innerwell Klinic",
    description: "sek malas ngetik",
    tags: ["Laravel", "MySQL", "Midtrans"],
    link: "#",
  },
];

const SkillIcon = () => <Code className="w-5 h-5 mr-3 text-green-700" />;

const skills = {
  frontend: [
    { name: "React", icon: <SkillIcon /> },
    { name: "Blade (Laravel)", icon: <SkillIcon /> },
    { name: "Tailwind CSS", icon: <SkillIcon /> },
    { name: "Mermaid JS", icon: <SkillIcon /> },
  ],
  backend: [
    { name: "Node.js", icon: <SkillIcon /> },
    { name: "Laravel", icon: <SkillIcon /> },
    { name: "Express.js", icon: <SkillIcon /> },
    { name: "Python FastAPI", icon: <SkillIcon /> },
    { name: "Python Flask", icon: <SkillIcon /> },
    { name: "Hapi.js", icon: <SkillIcon /> },
  ],
  database: [{ name: "MySQL", icon: <SkillIcon /> }],
  devops: [
    { name: "Docker", icon: <SkillIcon /> },
    { name: "Git", icon: <SkillIcon /> },
    { name: "Vercel", icon: <SkillIcon /> },
    { name: "Railway", icon: <SkillIcon /> },
    { name: "Selenium", icon: <SkillIcon /> },
    { name: "WebdriverIO", icon: <SkillIcon /> },
  ],
};

const experiences = [
    {
    type: "Internship",
    company: "Getcore.ID",
    role: "Fullstack Developer Intern",
    period: "Feb 2026 - Now",
    description: [
    ],
  },
  {
    type: "Internship",
    company: "Widya Robotic",
    role: "System Analyst Intern",
    period: "Mar 2025 - Jun 2025",
    description: [
      "Conducting Database Research and Analysis for the Fleet Management System (FMS) project, including performance benchmarking, disk space efficiency, and data tiering.",
      "Designing System Workflows and Architectures, including Flowcharts, Topologies, and Solution Concepts for AI-based projects such as PPE Detection and People Counting.",
      "Developing Technical Documentation and Diagrams using Mermaid JS for sequence diagrams and Sequence Flows for various tracking features.",
      "Creating User Interface Mockups and Wireframes for AI Parking Monitoring Systems and Dwelling Time Dashboards using Figma and Mockflow.",
      "Performing Market and Technical Research, including SWOT analysis for Matador Glass (Smart Glass) and competitor research for FMS project evaluation.",
      "Collaborating with Stakeholders and Clients through technical meetings to discuss project requirements, such as AI Conveyor systems and strategic gathering with Huawei.",
    ],
  },
  {
    type: "Study",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    role: "Cloud Computing Cohort",
    period: "Sep 2024 - Jan 2025",
    description: [
      "Earned various certificates from Dicoding and Google Cloud Skill Boost",
      "Led mentoring sessions in Weekly Consultation",
      "Received a LinkedIn recommendation from mentor",
      "Designed the ERD and developed almost the entire backend of the Anggar.In app for the Capstone Project using Express.js",
      "Granted a quota to take the Associate Cloud Engineer certification",
    ],
  },
  {
    type: "Study",
    company: "Universitas Sebelas Maret",
    role: "Informatics",
    period: "Aug 2022 - Aug 2026",
    description: [
    ],
  },
];

const organizations = [
  {
    name: "HIMPUNAN MAHASISWA INFORMATIKA UNS",
    role: "Networking & Cooperation Staff",
    period: "Jan 2023 - Des 2023",
    description: [
      "Coordinating Maganger Student to implementing work plan “Share-X”",
      "Designing all media needs, such as posters, presentation materials and others",
      "Most Valueable Networking and Cooperation Staff 2023",
    ],
  },
  {
    name: "P!NGFEST | Pekan Informasi dan Teknologi",
    role: "Sponsorship Staff",
    period: "Mar 2023 - Sep 2023",
    description: [
      "Actively participating in the search for sponsors to support the event.",
      "Initiated the implementation of a monetary donation system",
      "Receiving Revenue from Donors",
    ],
  },
];

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return (
        <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="mt-2 text-gray-400">{description}</p>;
  };

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
          <section className="min-h-screen flex flex-col justify-center">
            <div className="font-mono text-2xl sm:text-3xl text-green-400 mb-4">
              <span className="text-cyan-400">user@portfolio</span>:~${" "}
              <TypingEffect
                text="initiate-profile.sh"
                onComplete={() => setTimeout(() => setShowContent(true), 300)}
              />
              <span className="animate-ping">_</span>
            </div>
            {showContent && (
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-white font-mono">
                  Whilyan Pratama
                </h1>
                <h2 className="text-2xl md:text-3xl text-cyan-400 mt-2 font-mono">
                  Full Stack Developer
                </h2>
                <p className="max-w-xl mt-6 text-lg text-gray-400 leading-relaxed">
                    Final year Informatics student at Universitas Sebelas Maret and a Cloud Computing graduate of Bangkit Academy (by Google, Tokopedia, Gojek, and Traveloka). I specialize in Full Stack and Cloud Computing development, with hands-on experience in a diverse technical stack including React.js, Express.js, Laravel, FastAPI (Python), and most recently, Golang. 
                    I possess strong communication skills and a proactive, self-starter mindset. Currently, I am expanding my expertise into Internet of Things (IoT), Edge Computing, and Machine Learning to further enhance my technical capabilities and professional potential.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                  <a
                    href="#projects"
                    className="bg-green-500 text-gray-900 font-bold py-2 px-6 rounded-md hover:bg-green-400 transition-colors duration-300 flex items-center"
                  >
                    Lihat Proyek <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/iyantama9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={28} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/whilyanpratama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin size={28} />
                    </a>
                    <a
                      href="mailto:pratamawhilyan399@gmail.com"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Mail size={28} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </section>

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
                  <p className="text-sm text-gray-500 font-mono">
                    {exp.period}
                  </p>
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

          <section id="skills" className="py-20">
            <h2 className="font-mono text-3xl font-bold text-white mb-12 text-center">
              <span className="text-cyan-400">~/</span>skills
              <span className="text-green-400">$</span> cat skills.json
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
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
                        {skill.icon}
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="organizations" className="py-20">
            <h2 className="font-mono text-3xl font-bold text-white mb-12">
              <span className="text-cyan-400">~/</span>orgs
              <span className="text-green-400">$</span> show-activity
            </h2>
            <div className="space-y-8">
              {organizations.map((org, index) => (
                <div
                  key={index}
                  className="bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center">
                        <Users className="mr-3 text-yellow-400" size={20} />
                        {org.name}
                      </h3>
                      <p className="text-cyan-400 font-semibold">{org.role}</p>
                    </div>
                    <p className="text-sm text-gray-500 shrink-0 font-mono">
                      {org.period}
                    </p>
                  </div>
                  {renderDescription(org.description)}
                </div>
              ))}
            </div>
          </section>

          <footer className="text-left py-10">
            <p className="text-gray-500">©2025 / Whilyan Pratama</p>
          </footer>
        </div>
      </div>
    </>
  );
}
