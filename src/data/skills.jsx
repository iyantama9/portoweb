import { Code } from "lucide-react";

const SkillIcon = () => <Code className="w-5 h-5 mr-3 text-green-700" />;

export const skills = {
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
