import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiSpringboot } from "react-icons/si";

type Skill = {
  name: string;
  icon: JSX.Element;
  color: string;
};

const skills: Skill[] = [
  { name: "React", icon: <FaReact size={40} />, color: "#61DBFB" },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} />, color: "#38BDF8" },
  { name: "JavaScript", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript size={40} />, color: "#3178C6" },
  { name: "Spring Boot", icon: <SiSpringboot size={40} />, color: "#6DB33F" },
  { name: "Java", icon: <FaJava size={40} />, color: "#007396" },
  { name: "Node.js", icon: <FaNodeJs size={40} />, color: "#68A063" },
];

export default function SkillsSection() {
  return (
  <div className="flex flex-col items-center my-10">
        <div>
        <h1 className="text-2xl font-semibold text-center">Skills</h1>
        <hr className="border-t-4 mx-2 border-blue-700" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
  {skills.map((skill) => (
    <div
      key={skill.name}
      className="group relative w-40 h-40 rounded-2xl flex flex-col items-center justify-center gap-3 
                 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
                 transition-all duration-300 cursor-pointer hover:text-white"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ backgroundColor: skill.color }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <span className="text-4xl">{skill.icon}</span>
        <span className="mt-2 font-medium">{skill.name}</span>
      </div>
    </div>
  ))}
    </div>
    </div>
  );
}
